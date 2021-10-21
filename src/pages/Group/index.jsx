import { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import groupImg from "../../assets/vectors/background_dashboard_specific_group.svg";
import GoalCard from "../../components/GoalCard";
import ActivityCard from "../../components/ActivityCard";
import api from "../../services/api";
import { Container, Button, Subscribed } from "./style";
import { useAuth } from "../../providers/auth";
import { useEffect } from "react";

const Group = () => {
  const history = useHistory();

  const params = useParams();

  const { token, isAuth, setIsAuth, writeToken } = useAuth();

  const [isSub, setIsSub] = useState(false);

  const [groupData, setGroupData] = useState({});

  useEffect(() => {
    api
      .get(`/groups/subscriptions/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setIsSub(response.data.some((e) => e.id == params.id));
      });
  }, []);

  useEffect(() => {
    api.get(`/groups/${params.id}/`).then((response) => {
      setGroupData(response.data);
    });
  });

  if (!token && !isAuth) {
    return <Redirect to="/" />;
  }

  const subscribe = () => {
    api
      .post(`/groups/${params.id}/subscribe/`, "", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(setIsSub(true));
  };

  const handleNavigation = (path) => {
    history.push(path);
  };

  const handleLogout = (path) => {
    if (path === "/") {
      localStorage.clear();
      writeToken(false);
      setIsAuth(false);
    }
    history.push(path);
  };

  return (
    <div>
      <Header buttonText="Logout" buttonUrl="/" />

      <Sidebar>
        <div>
          <button onClick={() => handleNavigation("/dashboard")}>
            Dashboard
          </button>
          <button onClick={() => handleNavigation("/groups")}>Grupos</button>
          <button>Ajuda</button>
          <button>Contato</button>
        </div>

        <div>
          <button onClick={() => handleLogout("/")}>Logout</button>
        </div>
      </Sidebar>

      <Container>
        <img src={groupImg} alt="groups illustration" />
        <div id="main">
          <div id="groupCard">
            <div className="head">
              <h2> {groupData.name} </h2>
              <Button id="edit">Editar</Button>
            </div>
            <p> {groupData.category} </p>
            <p> {groupData.description} </p>
          </div>
          <div id="modals">
            <div>
              <h3>Nova Meta</h3>
              <Button>Adicionar</Button>
            </div>
            <div>
              <h3>Nova Atividade</h3>
              <Button>Adicionar</Button>
            </div>
          </div>
          <div id="scroll">
            <div className="container">
              <h2>Metas</h2>
              <div className="scroll">
                {groupData.goals?.map((e) => (
                  <GoalCard key={e.id} goal={e} />
                ))}
              </div>
            </div>
            <div className="container">
              <h2>Atividades</h2>
              <div className="scroll">
                {groupData.activities?.map((e) => (
                  <ActivityCard key={e.id} activity={e} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="members">
          <div className="head">
            <h2>Members</h2>
            {isSub ? (
              <Subscribed>Inscrito</Subscribed>
            ) : (
              <Button onClick={subscribe}>Inscrever-se</Button>
            )}
          </div>
          {groupData.users_on_group?.map((e) => (
            <p key={e.username}> {e.username} </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Group;

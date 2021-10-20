import { Redirect, useHistory } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import groupsImage from "../../assets/vectors/background_dashboard_groups.svg"
import { Container, FormContainer, GroupsContainer } from "./style";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { useGroupList } from "../../providers/groupList";
import Card from "../../components/GroupCard";

const GroupList = () => {

  const history = useHistory()

  const { token, isAuth, setIsAuth, writeToken } = useAuth()

  const { groups, next, previous, addGroup, nextPage, previousPage } = useGroupList()

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório*"),
    description: yup
      .string()
      .required("Campo obrigatório*"),
    category: yup
      .string()
      .required("Campo obrigatório*")

  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log(response.data)
        // addGroup()
        reset()
      })
      .catch(err => console.log(err))

  }

  if (!token && !isAuth) {
    return <Redirect to="/" />;
  }

  const handleNavigation = (path) => {
    history.push(path)
  }

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
          <button onClick={() => handleNavigation("/dashboard")} >Dashboard</button>
          <button onClick={() => handleNavigation("/groups")} >Grupos</button>
          <button>Ajuda</button>
          <button>Contato</button>
        </div>

        <div>
          <button onClick={() => handleLogout("/")} >Logout</button>
        </div>
      </Sidebar>

      <Container>
        <img src={groupsImage} alt="groups illustration" />

        <div id="content" >
          <FormContainer>
            <h2>Criar Grupo</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="inputs" >
                <label>{errors.name?.message}</label>
                <input type="text" placeholder="Nome" {...register("name")} />
              </div>

              <div className="inputs" >
                <label>{errors.description?.message}</label>
                <input type="text" placeholder="Descrição" {...register("description")} />
              </div>

              <div className="inputs" >
                <label>{errors.category?.message}</label>
                <input type="text" placeholder="Categoria" {...register("category")} />
              </div>
              <button id="addButton" type="submit" >Adicionar</button>
            </form>
          </FormContainer>

          <GroupsContainer>
            <div id="groupSearch" >
              <h2>Pesquisar Grupo</h2>
              <form id="searchForm" >
                <input id="searchInput" placeholder="Pesquisar" />
                <button id="searchButton" >Pesquisar</button>
              </form>
            </div>

            <div id="groups" >
              {groups.map((element, index) => (
                <Card element={element} key={index} />
              ))}
            </div>
          </GroupsContainer>
        </div>
      </Container>
    </div>
  );
};

export default GroupList;

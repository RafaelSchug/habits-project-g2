import Header from "../../components/Header";
import { Container } from "./style";
import homeImage from "../../assets/vectors/home.svg";
import { useHistory } from "react-router";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../providers/auth";
import { useModal } from "../../providers/modal";
import ModalContact from "../../components/ModalContact";
import ModalAbout from "../../components/ModalAbout";
import Modal from "../../components/Modal";
import { useSidebar } from "../../providers/sidebar";

const Home = () => {
  const history = useHistory();
  const { isAuth } = useAuth();
  const { openModalContact, setOpenModalContact, setOpenModalAbout, openModalAbout } = useModal();
  const { closeSidebar } = useSidebar();


  const handleClick = (path) => {
    history.push(path);
  };

  if (isAuth) {
    history.push("/dashboard");
  }

  const handleContact = () => {
      setOpenModalContact(true)
      closeSidebar()
  }

  const handleAbout = () => {
      setOpenModalAbout(true)
      closeSidebar()
  }

  return (
    <>
      <Header homePage buttonText="Registrar-se" buttonUrl="/register"></Header>
      <Sidebar>
        <div>
          <button onClick={handleAbout}>Sobre</button>
          <button onClick={handleContact}>Contato</button>
        </div>
      </Sidebar>

      {openModalContact && <Modal><ModalContact /></Modal>}
      {openModalAbout && <Modal><ModalAbout /></Modal>}

      <Container>
        <div className="left_container">
          <div className="content_wrapper">
            <div className="text_content">
              <h1>
                DEV
                <br />
                HABITS
              </h1>
              <p>Gerencie sua rotina</p>
              <p>Estabeleça metas</p>
              <p>Produza com eficiência</p>
            </div>
            <img src={homeImage} alt="home image" />
          </div>
        </div>
        <div className="right_container">
          <div className="content_wrapper">
            <button
              className="login_button"
              onClick={(_) => handleClick("/login")}
            >
              Login
            </button>
            <button
              className="register_button"
              onClick={(_) => handleClick("/register")}
            >
              Registrar-se
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

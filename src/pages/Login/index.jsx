import { LoginContainer } from "./style";
import { useAuth } from "../../providers/auth";
import { useForm } from "react-hook-form";
import { useModal } from "../../providers/modal";
import { useSidebar } from "../../providers/sidebar";
import { Redirect, useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import Header from "../../components/Header";
import LoginSvg from "../../assets/vectors/login.svg";
import Sidebar from "../../components/Sidebar";
import * as yup from "yup";
import Modal from "../../components/Modal";
import ModalContact from "../../components/ModalContact";
import ModalAbout from "../../components/ModalAbout";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const { token, writeToken } = useAuth();

  const { closeSidebar } = useSidebar();

  const {
    openModalContact,
    openModalAbout,
    setOpenModalContact,
    setOpenModalAbout,
  } = useModal();

  const schema = yup.object().shape({
    username: yup.string().required("*Usuário obrigatório"),
    password: yup.string().required("*Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        writeToken(response.data.access);
        history.push("/dashboard");
        toast.success(`Bem vindo, ${data.username}!`);
      })
      .catch((err) => toast.error("Usuário ou senha incorretos"));
  };

  const handleAbout = () => {
    setOpenModalAbout(true);
    closeSidebar();
  };

  const handleContact = () => {
    setOpenModalContact(true);
    closeSidebar();
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginContainer>
      <Header buttonText="Registrar-se" buttonUrl="/register" />
      <Sidebar>
        <div>
          <button onClick={handleAbout}>Sobre</button>
          <button onClick={handleContact}>Contato</button>
        </div>
      </Sidebar>
      {openModalContact && (
        <Modal>
          <ModalContact />
        </Modal>
      )}
      {openModalAbout && (
        <Modal>
          <ModalAbout />
        </Modal>
      )}
      <div id="loginMainContainer">
        <form onSubmit={handleSubmit(handleForm)}>
          <h1>Login</h1>
          <div id="inputBox">
            <div id="userInput">
              <label className="errorLabel">{errors.username?.message}</label>
              <input
                placeholder="Usuário"
                {...register("username")}
                type="text"
              />
            </div>
            <div id="passInput">
              <label className="errorLabel">{errors.password?.message}</label>
              <input
                placeholder="Senha"
                {...register("password")}
                type="password"
              />
            </div>
          </div>
          <button id="loginButton" type="submit">
            Login
          </button>
          <span id="noAccountSpan">
            Ainda não tem uma conta?{" "}
            <button onClick={() => history.push("/register")}>
              Criar uma conta
            </button>
          </span>
        </form>
        <div>
          <img id="loginSvg" src={LoginSvg} alt="LoginImg" />
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;

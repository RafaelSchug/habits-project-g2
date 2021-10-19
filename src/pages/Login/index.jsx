import { LoginContainer } from "./style";
import { useAuth } from "../../providers/auth";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import Header from "../../components/Header";
import LoginSvg from "../../assets/vectors/login.svg";
import Sidebar from "../../components/Sidebar";
import * as yup from "yup";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("*Usuário obrigatório"),
    password: yup.string().required("*Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { token, writeToken } = useAuth();

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        writeToken(response.data.access);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginContainer>
      <Header buttonText="Registrar-se" buttonUrl="/register" />
      <Sidebar>
        <div>
          <button>Sobre</button>
          <button>Contato</button>
        </div>
      </Sidebar>
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

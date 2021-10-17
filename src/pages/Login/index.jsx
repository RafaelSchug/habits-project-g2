import Header from "../../components/Header";
import { LoginContainer } from "./style";
import LoginSvg from "../../assets/vectors/login.svg";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  return (
    <LoginContainer>
      <Header buttonText="Registrar-se" buttonUrl="/register" />
      <div id="loginMainContainer">
        <form>
          <h1>Login</h1>
          <div id="inputBox">
            <input placeholder="Usuário" type="text" />
            <input placeholder="Senha" type="password" />
          </div>
          <button id="loginButton">Login</button>
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

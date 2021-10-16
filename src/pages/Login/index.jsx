import Header from "../../components/Header";
import { LoginContainer } from "./style";
import LoginSvg from "../../assets/vectors/login.svg";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  return (
    <LoginContainer>
      <Header buttonText="Register" buttonUrl="/register" />
      <div id="loginMainContainer">
        <form>
          <h1>Login</h1>
          <div id="inputBox">
            <input />
            <input />
          </div>
          <button>Login</button>
          <span>
            Ainda não tem uma conta?{" "}
            <button onClick={() => history.push("/register")}>
              Criar uma conta
            </button>{" "}
          </span>
        </form>
        <div>
          <img id="loginSvg" src={LoginSvg} />
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;

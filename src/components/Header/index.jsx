import { HeaderContainer } from "./style";
import { HiOutlineMenu } from "react-icons/hi";
import { useHistory } from "react-router";

const Header = ({ buttonText, url, homePage = false }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <HeaderContainer>
      <div id="menu-logo">
        <HiOutlineMenu />
        <h1 id="logo">DH</h1>
      </div>
      <div id="buttonsDiv">
        {homePage && (
          <button id="loginButton" onClick={() => handleClick("/login")}>
            Login
          </button>
        )}
        <button onClick={() => handleClick(url)}> {buttonText} </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

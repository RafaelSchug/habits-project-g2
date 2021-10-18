import { HeaderContainer } from "./style";
import { HiOutlineMenu } from "react-icons/hi";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router";
import { useSidebar } from "../../providers/sidebar";

import Logo from "../../assets/vectors/logo.svg";

const Header = ({ buttonText, buttonUrl, homePage = false }) => {
  const history = useHistory();

  const { setIsAuth, setToken } = useAuth();

  const handleClick = (path) => {
    if (path === "/") {
      localStorage.clear();
      setToken("");
      setIsAuth(false);
    }
    history.push(path);
  };

  const { openSidebar } = useSidebar();

  return (
    <HeaderContainer>
      <div id="menu-logo">
        <HiOutlineMenu onClick={openSidebar} />
        <img id="logo" src={Logo} alt="Logo" onClick={() => handleClick("/")} />
      </div>
      <div id="buttonsDiv">
        {homePage && (
          <button id="loginButton" onClick={() => handleClick("/login")}>
            Login
          </button>
        )}
        <button onClick={() => handleClick(buttonUrl)}> {buttonText} </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

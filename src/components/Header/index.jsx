import { HeaderContainer } from "./style";
import { HiOutlineMenu } from "react-icons/hi";
import { useHistory } from "react-router";
import Logo from "../../assets/vectors/logo.svg";
import { SidebarContext } from "../../providers/sidebar";

const Header = ({ buttonText, buttonUrl, homePage = false }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  const { openSidebar } = SidebarContext();

  return (
    <HeaderContainer>
      <div id="menu-logo">
        <HiOutlineMenu onClick={openSidebar()} />
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

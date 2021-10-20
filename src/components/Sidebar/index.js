import { useSidebar } from "../../providers/sidebar";
import CloseButton from "../../assets/vectors/close_button.svg";
import { Container } from "./style";

const Sidebar = ({ children }) => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <Container isOpen={isOpen}>
      <img src={CloseButton} onClick={closeSidebar} />
      <div id="container">{children}</div>
    </Container>
  );
};

export default Sidebar;

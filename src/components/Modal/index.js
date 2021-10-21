import { useModal } from "../../providers/modal";
import { ModalContainer } from "./style";

const Modal = ({ children }) => {
  const { modalCloseClick } = useModal();

  return (
    <>
      <ModalContainer onClick={modalCloseClick} id="modalContainer">
        <div id="modalDiv">{children}</div>
      </ModalContainer>
    </>
  );
};

export default Modal;

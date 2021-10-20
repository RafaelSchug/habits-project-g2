import { useModal } from "../../providers/modal";
import { ModalContainer } from "./style";

// Ao fazer o modal de Nova Meta e Nova Atividade, englobar tudo numa div com id "newGoalsActModal", usar h1 pro título, e colocar os inputs dentro de uma div

const Modal = ({ children }) => {
  const { openModal, modalCloseClick } = useModal();

  return (
    <>
      {openModal && (
        <ModalContainer onClick={modalCloseClick} id="modalContainer">
          <div id="modalDiv">{children}</div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;

import { useModal } from "../../providers/modal";
import { ModalContainer } from "./style";

const Modal = () => {
  const { openModal, modalCloseClick } = useModal();

  return (
    <>
      {openModal && (
        <ModalContainer onClick={modalCloseClick}>
          <div id="modalDiv">
            <h1>Meu modal</h1>
            <button onClick={modalCloseClick}>Fechar modal</button>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;

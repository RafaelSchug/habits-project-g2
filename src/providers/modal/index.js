import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenClick = () => {
    setOpenModal(true);
  };

  const modalCloseClick = (event) => {
    if (event.target.id !== "modalDiv") {
      setOpenModal(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{ openModal, modalOpenClick, modalCloseClick }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

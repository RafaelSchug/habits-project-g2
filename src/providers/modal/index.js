import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModalContact, setOpenModalContact] = useState(false);
  const [openModalAbout, setOpenModalAbout] = useState(false);

  const modalOpenClick = () => {
    setOpenModalContact(true);
  };

  const modalCloseClick = (event) => {
    if (event.target.id === "modalContainer") {
      setOpenModalContact(false);
      setOpenModalAbout(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModalAbout,
        setOpenModalAbout,
        openModalContact,
        setOpenModalContact,
        modalOpenClick,
        modalCloseClick,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

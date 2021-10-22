import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModalContact, setOpenModalContact] = useState(false);
  const [openModalAbout, setOpenModalAbout] = useState(false);
  const [openModalNewActivity, setOpenModalNewActivity] = useState(false);
  const [openModalNewGoal, setOpenModalNewGoal] = useState(false);

  const modalCloseClick = (event) => {
    if (event.target.id === "modalContainer") {
      setOpenModalContact(false);
      setOpenModalAbout(false);
      setOpenModalNewActivity(false);
      setOpenModalNewGoal(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModalAbout,
        openModalContact,
        openModalNewActivity,
        openModalNewGoal,
        setOpenModalAbout,
        setOpenModalContact,
        setOpenModalNewActivity,
        setOpenModalNewGoal,
        modalCloseClick,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

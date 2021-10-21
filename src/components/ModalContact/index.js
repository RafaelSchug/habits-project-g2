import githubImg from "../../assets/imgs/git.png";
import igorImg from "../../assets/imgs/profile_igor.png";
import linkedinImg from "../../assets/imgs/linkedin.png";
import Modal from "../Modal";
import nildoImg from "../../assets/imgs/profile_nildo.png";
import rafaelImg from "../../assets/imgs/profile_rafael.png";
import viniImg from "../../assets/imgs/profile_vinicius.png";

import { useEffect } from "react/cjs/react.development";
import { useModal } from "../../providers/modal";
import { useSidebar } from "../../providers/sidebar";

const ModalContact = () => {
  const { setOpenModalContact, openModalContact } = useModal();
  const { closeSidebar } = useSidebar();

  useEffect(() => {
    if (openModalContact) {
      closeSidebar();
    }
  }, [openModalContact]);

  return (
    <Modal>
      <div id="contactModal">
        <div id="profileDiv">
          <div className="devProfile">
            <img src={igorImg} alt="Igor" />
            <h2>Igor Matheus</h2>
            <div className="devSocial">
              <img src={linkedinImg} alt="LinkedIn" />
              <img src={githubImg} alt="Github" />
            </div>
          </div>
          <div className="devProfile">
            <img src={nildoImg} alt="Igor" />
            <h2>Nill Junior</h2>
            <div className="devSocial">
              <img src={linkedinImg} alt="LinkedIn" />
              <img src={githubImg} alt="Github" />
            </div>
          </div>
          <div className="devProfile">
            <img src={rafaelImg} alt="Igor" />
            <h2>Rafael Schug</h2>
            <div className="devSocial">
              <img src={linkedinImg} alt="LinkedIn" />
              <img src={githubImg} alt="Github" />
            </div>
          </div>
          <div className="devProfile">
            <img src={viniImg} alt="Igor" />
            <h2>Vinícius Freitas</h2>
            <div className="devSocial">
              <img src={linkedinImg} alt="LinkedIn" />
              <img src={githubImg} alt="Github" />
            </div>
          </div>
        </div>
        <button onClick={() => setOpenModalContact(false)}>Fechar</button>
      </div>
    </Modal>
  );
};

export default ModalContact;

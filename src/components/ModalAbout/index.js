import Community from "../../assets/vectors/community.svg";
import Goals from "../../assets/vectors/goals.svg";
import Habits from "../../assets/vectors/habits.svg";

import { useModal } from "../../providers/modal";

const ModalAbout = () => {
  const { setOpenModalAbout } = useModal();

  return (
    <div id="aboutModal">
      <div className="textDiv">
        <img src={Habits} alt="Habits" />
        <h1>Crie novos hábitos</h1>
        <p>
          Gerencie e organize hábitos diários, de forma a realizar e controlar
          atividades rotineiras.
        </p>
      </div>
      <div className="textDiv" id="communityDiv">
        <img src={Community} alt="Community" />
        <h1>Comunidade</h1>
        <p>Inscreva-se em grupos com interesses em comum.</p>
      </div>
      <div className="textDiv">
        <img src={Goals} alt="Goals" />
        <h1>Metas</h1>
        <p>Realize atividades e atinja metas em grupo.</p>
      </div>
      <button onClick={() => setOpenModalAbout(false)}>Fechar</button>
    </div>
  );
};

export default ModalAbout;

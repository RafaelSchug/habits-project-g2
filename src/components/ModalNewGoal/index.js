import { useAuth } from "../../providers/auth";
import { useForm } from "react-hook-form";
import { useModal } from "../../providers/modal";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const ModalNewGoal = ({ groupId }) => {
  const { setOpenModalNewGoal } = useModal();

  const { token } = useAuth();

  const schema = yup.object().shape({
    title: yup.string().required("*Usuário obrigatório"),
    difficulty: yup.string().required("*Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const newData = { ...data, how_much_achieved: 0, group: Number(groupId) };
    api
      .post("/goals/", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setOpenModalNewGoal(false);
        reset();
        toast.success(`Nova meta: ${newData.title}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="newGoalsActModal">
      <h1>Nova Meta</h1>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <input placeholder="Título" type="text" {...register("title")} />
            <input
              placeholder="Dificuldade"
              type="text"
              {...register("difficulty")}
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalNewGoal;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import api from "../../services/api";
import { useModal } from "../../providers/modal";
import { useAuth } from "../../providers/auth";
import { toast } from "react-toastify";

const ModalNewActivity = ({ groupId }) => {
  const { setOpenModalNewActivity } = useModal();

  const { token } = useAuth();

  const schema = yup.object().shape({
    title: yup.string().required("*Usuário obrigatório"),
    realization_time: yup.string().required("*Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const newData = {
      ...data,
      group: Number(groupId),
      realization_time: new Date(data.realization_time).toISOString(),
    };
    api
      .post("/activities/", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setOpenModalNewActivity(false);
        reset();
        toast.success(`Nova atividade: ${newData.title}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="newGoalsActModal">
      <h1>Nova Atividade</h1>
      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <input placeholder="Título" type="text" {...register("title")} />
            <input
              placeholder="Dificuldade"
              type="datetime-local"
              {...register("realization_time")}
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalNewActivity;

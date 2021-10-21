import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { Card, DeleteButton } from "./style";

const ActivityCard = ({ activity }) => {
  const { token } = useAuth();

  const handleRemove = () => {
    api
      .delete(`/activities/${activity.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
  };

  const date = new Date(activity.realization_time).toLocaleTimeString("pt-BR", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });

  return (
    <Card>
      <span> {activity.title} </span>
      <p>Data: {date} </p>
      <div>
        <DeleteButton onClick={handleRemove} id="delete">
          Remover
        </DeleteButton>
      </div>
    </Card>
  );
};

export default ActivityCard;

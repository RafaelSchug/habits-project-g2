import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { Card, CardButton, AchievedButton, DeleteButton } from "./style";

const GoalCard = ({ goal }) => {
  const { token } = useAuth();

  const handleCheckIn = () => {
    api.patch(
      `/goals/${goal.id}/`,
      { achieved: true },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };

  const handleRemove = () => {
    api
      .delete(`/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <span> {goal.title} </span>
      <p>Dificuldade: {goal.difficulty} </p>
      <div>
        {goal.achieved ? (
          <AchievedButton id="achieved">Concluído</AchievedButton>
        ) : (
          <CardButton onClick={handleCheckIn}>Check in</CardButton>
        )}
        <DeleteButton onClick={handleRemove} id="delete">
          Remover
        </DeleteButton>
      </div>
    </Card>
  );
};

export default GoalCard;

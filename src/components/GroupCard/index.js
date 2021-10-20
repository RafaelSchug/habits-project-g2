import { useHistory } from "react-router"
import { useAuth } from "../../providers/auth"
import api from "../../services/api"
import { GroupCard } from "./style"
import { BiCategory } from 'react-icons/bi';
import { BsCardText } from 'react-icons/bs'

const Card = ({ element: { id, name, description, category }, element }) => {

    const { token } = useAuth()

    const history = useHistory()

    const handleSubscription = () => {
        api
            .post(`/groups/${id}/subscribe/`, "", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }

    const handleClickGroup = (e) => {
        if (e.target.id !== "subsButton") {
            history.push(`/groups/${id}`)
        }
    }

    return (
        <GroupCard onClick={handleClickGroup} >
            <h2>{name}</h2>
            <p><BsCardText />Descrição: {description}</p>
            <p><BiCategory />Categoria: {category}</p>
            <button id='subsButton' onClick={handleSubscription} >Inscrever-se</button>
        </GroupCard>
    )
}

export default Card
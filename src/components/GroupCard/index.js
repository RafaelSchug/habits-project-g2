import { useHistory } from "react-router"
import { useAuth } from "../../providers/auth"
import api from "../../services/api"
import { GroupCard } from "./style"
import { BiCategory } from 'react-icons/bi';
import { BsCardText } from 'react-icons/bs'
import jwt_decode from "jwt-decode";
import { useState } from "react";

const Card = ({ element: { id, name, description, category, users_on_group } }) => {

    const { token } = useAuth()

    const [sub, setSub] = useState(false)

    const history = useHistory()

    const subscribed = users_on_group.some(element => element.id === jwt_decode(token).user_id)

    const handleSubscription = () => {
        api
            .post(`/groups/${id}/subscribe/`, "", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setSub(true)
            })
            .catch(err => console.log(err))
    }

    const handleClickGroup = () => {
        history.push(`/groups/${id}`)
    }

    return (
        <GroupCard id="card" >
            <h2>{name}</h2>
            <p><BsCardText />Descrição: {description}</p>
            <p><BiCategory />Categoria: {category}</p>
            <div id="subsButtons" >
                {
                    sub || subscribed ? <button id="subscribed">Inscrito</button>
                        :
                        <button id="subsButton" onClick={handleSubscription} >Inscrever-se</button>
                }
                <button onClick={handleClickGroup}>Ver Grupo</button>
            </div>

        </GroupCard>
    )
}

export default Card
import jwtDecode from 'jwt-decode';
import {createContext, useContext, useState} from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';


const UserDashboardContext = createContext();

export const UserDashboardProvider = ({children}) => {

    const [habits, setHabits] = useState([]);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState();


    const sortHabitsByNotAchieved = (habitsList) => {
        const sortedHabits = habitsList.sort((a, b) => a.achieved - b.achieved);
        setHabits(sortedHabits);
    }

    const getHabits = (token) => {
        
        if(token){
            api.get('/habits/personal/', {headers: {Authorization: `Bearer ${token}` }})
            .then(response => {
                sortHabitsByNotAchieved(response.data);
                setToken(token);

                const userid = jwtDecode(token).user_id;
                setUserId(userid);
            })
        }
    }
        
    const updateHabit = (id) => {

        const {how_much_achieved} = habits.find(item => item.id === id);
        const newHowMuchAchieved = how_much_achieved + 10;
        const isAchieved = newHowMuchAchieved >= 100;
        
        api.patch(`/habits/${id}/`, {'how_much_achieved': newHowMuchAchieved, 'achieved': isAchieved}, {headers: {Authorization: `Bearer ${token}` }})
        .then(response => {
            setHabits(habits.map(item => item.id === id ? {...item, how_much_achieved: newHowMuchAchieved, achieved: isAchieved} : item));
            toast.success("Check-in efetuado");
        }).catch(error => {
            toast.error("Falha ao efetuar Check-in");
        });
    }

    const deleteHabit = (id) => {

        api.delete(`/habits/${id}/`, {headers: {Authorization: `Bearer ${token}` }})
        .then((response) => {
            setHabits(habits.filter(item => item.id !== id));
            toast.success("Hábito removido")
        })
        .catch(error => {
            toast.error("Falha ao remover hábito")
        })
    }

    const createHabit = (data) => {

        const schema = {...data, achieved: false, how_much_achieved: 0, user: userId};
        api.post('/habits/', schema, {headers: {Authorization: `Bearer ${token}` }})
        .then(response => {
            setHabits([...habits, {...schema, id: response.data.id}]);
            toast.success("Hábito adicionado")
        })
        .catch(error => {
            toast.error('Falha ao criar hábito');
        })
    }


    return (
        <UserDashboardContext.Provider value={{habits, updateHabit, deleteHabit, createHabit, getHabits}}>
            {children}
        </UserDashboardContext.Provider>
    )
}


export const useUserDashboard = () => useContext(UserDashboardContext);


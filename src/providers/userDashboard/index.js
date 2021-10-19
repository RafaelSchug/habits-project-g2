import jwtDecode from 'jwt-decode';
import {createContext, useContext, useState} from 'react';
import api from '../../services/api';
const UserDashboardContext = createContext();

export const UserDashboardProvider = ({children}) => {

    const [habits, setHabits] = useState([]);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState();


    const getHabits = (token) => {
        
        api.get('/habits/personal/', {headers: {Authorization: `Bearer ${token}` }})
        .then(response => {
            setHabits(response.data);
            setToken(token);

            const userid = jwtDecode(token).user_id;
            setUserId(userid);
        })
    }
        
    const updateHabit = (id) => {

        const {how_much_achieved} = habits.find(item => item.id === id);
        const newHowMuchAchieved = how_much_achieved + 10;
        const isAchieved = newHowMuchAchieved >= 100;
        
        api.patch(`/habits/${id}/`, {'how_much_achieved': newHowMuchAchieved, 'achieved': isAchieved}, {headers: {Authorization: `Bearer ${token}` }})
        .then(response => {
            setHabits(habits.map(item => item.id === id ? {...item, how_much_achieved: newHowMuchAchieved, achieved: isAchieved} : item));
        });
    }

    const deleteHabit = (id) => {

        api.delete(`/habits/${id}/`, {headers: {Authorization: `Bearer ${token}` }})
        .then((response) => {
            setHabits(habits.filter(item => item.id !== id));
        })
    }

    const createHabit = (data) => {

        const schema = {...data, achieved: false, how_much_achieved: 0, user: userId};
        api.post('/habits/', schema, {headers: {Authorization: `Bearer ${token}` }})
        .then(response => {
            setHabits([...habits, {...schema, id: response.data.id}]);
        })
    }


    return (
        <UserDashboardContext.Provider value={{habits, updateHabit, deleteHabit, createHabit, getHabits}}>
            {children}
        </UserDashboardContext.Provider>
    )
}


export const useUserDashboard = () => useContext(UserDashboardContext);


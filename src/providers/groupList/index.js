import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const GroupListContext = createContext()

export const GroupListProvider = ({ children }) => {

    const [groups, setGroups] = useState([])

    const [next, setNext] = useState(`https://kenzie-habits.herokuapp.com/groups/`)

    const [previous, setPrevious] = useState(``)

    useEffect(() => {
        next &&
            axios.get(next)
                .then(response => {
                    setGroups([...groups, ...response.data.results])
                    setNext(response.data.next)
                })
                .catch(error => console.log(error))

    }, [next])

    const nextPage = () => {
        if (next) {
            axios
                .get(next)
                .then(response => {
                    console.log(response)
                    return (
                        setGroups(response.data.results),
                        setNext(response.data.next),
                        setPrevious(response.data.previous)
                    )
                })
                .catch(error => console.log("erro"))
        }
    }

    const previousPage = () => {
        if (previous) {
            axios
                .get(previous)
                .then(response => {
                    console.log(response)
                    return (
                        setGroups(response.data.results),
                        setPrevious(response.data.previous),
                        setNext(response.data.next)
                    )
                })
                .catch(error => console.log("erro"))
        }
    }

    return (
        <GroupListContext.Provider value={{ groups, next, previous, nextPage, previousPage }} >
            {children}
        </GroupListContext.Provider>
    )

}

export const useGroupList = () => useContext(GroupListContext)
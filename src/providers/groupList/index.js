import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import axios from "axios";

export const GroupListContext = createContext()

export const GroupListProvider = ({ children }) => {

    const [groups, setGroups] = useState([])

    const [next, setNext] = useState(``)

    const [previous, setPrevious] = useState(``)

    useEffect(() => {
        api
            .get("/groups/")
            .then(response => (setGroups(response.data.results), setNext(response.data.next)))
            .catch(error => console.log("erro"))

    }, [])

    const addGroup = (group) => {
        if (group) {
            setGroups([...groups, group])
        }
    }

    const nextPage = (next) => {
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

    const previousPage = (prev) => {
        if (prev) {
            axios
                .get(prev)
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
        <GroupListContext.Provider value={{ groups, next, previous, addGroup, nextPage, previousPage }} >
            {children}
        </GroupListContext.Provider>
    )

}

export const useGroupList = () => useContext(GroupListContext)
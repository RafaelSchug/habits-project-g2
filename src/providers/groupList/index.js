import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const GroupListContext = createContext()

export const GroupListProvider = ({ children }) => {

    const [groups, setGroups] = useState([])

    const [next, setNext] = useState(`https://kenzie-habits.herokuapp.com/groups/`)

    const [previous, setPrevious] = useState(``)

    const bannedWords = ["test", "palm", "jerly", "laud", "relig", "anda", "novo", "pepe", "casa", "robert", "ler"]

    useEffect(() => {
        next &&
            axios.get(next)
                .then(response => {
                    const filtered = response.data.results.filter(element => {
                        let counter = 0
                        bannedWords.forEach(word => !element.name.toLowerCase().includes(word) &&
                            !element.category.toLowerCase().includes(word) ?
                            counter++
                            : null
                        )
                        return counter === bannedWords.length
                    }
                    )
                    if (filtered.length > 0) {
                        setGroups([...groups, ...filtered])
                    }
                    setNext(response.data.next)
                })
                .catch(error => console.log(error))

    }, [next])

    // const nextPage = () => {
    //     if (next) {
    //         axios
    //             .get(next)
    //             .then(response => {
    //                 console.log(response)
    //                 return (
    //                     setGroups(response.data.results),
    //                     setNext(response.data.next),
    //                     setPrevious(response.data.previous)
    //                 )
    //             })
    //             .catch(error => console.log(error))
    //     }
    // }

    // const previousPage = () => {
    //     if (previous) {
    //         axios
    //             .get(previous)
    //             .then(response => {
    //                 console.log(response)
    //                 return (
    //                     setGroups(response.data.results),
    //                     setPrevious(response.data.previous),
    //                     setNext(response.data.next)
    //                 )
    //             })
    //             .catch(error => console.log(error))
    //     }
    // }

    return (
        <GroupListContext.Provider value={{ groups, next, previous, setGroups, setNext }} >
            {children}
        </GroupListContext.Provider>
    )

}

export const useGroupList = () => useContext(GroupListContext)
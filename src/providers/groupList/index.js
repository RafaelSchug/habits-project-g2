import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const GroupListContext = createContext()

export const GroupListProvider = ({ children }) => {

    const [groups, setGroups] = useState([])

    const [next, setNext] = useState(`https://kenzie-habits.herokuapp.com/groups/`)

    const bannedWords = ["pedro", "pdro", "test", "palm", "jerly", "laud", "relig", "anda",
        "novo", "pepe", "casa", "robert", "ler"
    ]

    useEffect(() => {
        next &&
            axios.get(next)
                .then(response => {
                    const filtered = response.data.results.filter(element => {
                        let counter = 0
                        bannedWords.forEach(word => !element.name.toLowerCase().includes(word) &&
                            !element.category.toLowerCase().includes(word) &&
                            !element.description.toLowerCase().includes(word) ?
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

    return (
        <GroupListContext.Provider value={{ groups, next, setGroups, setNext }} >
            {children}
        </GroupListContext.Provider>
    )

}

export const useGroupList = () => useContext(GroupListContext)
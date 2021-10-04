import { useEffect } from "react"
import { useState } from "react"

const UseEffects = (fetceId) => {
    const[users, setUsers] = useState([])
    useEffect(() => {
        fetch(fetceId)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[fetceId])
    return [users, setUsers]
}

export default UseEffects
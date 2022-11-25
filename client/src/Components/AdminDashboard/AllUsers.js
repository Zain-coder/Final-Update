import React , {useState , useEffect} from 'react'
import axios from "axios"

const AllUsers = () => {
    const [allUsers , setAllUsers] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/funderr/allusers").then((result) => {
            setAllUsers(result.data);})
    }, [])
    
    console.log("ALLUSERS: " , allUsers )
  return (
    <div>AllUsers</div>
  )
}

export default AllUsers
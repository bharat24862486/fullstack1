import { Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Single from './Single'
import { Link } from 'react-router-dom'


const Notes = () => {



    const [data, setData] = useState([])

    const DELETE=(id)=>{
        console.log(id)
        let token = JSON.parse(localStorage.getItem("token"))
        axios.delete(`http://localhost:8080/notes/delete/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

        

        axios.get("http://localhost:8080/notes",{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        } )
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
            console.log(data)
      }

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))

        axios.get("https://different-bee-cuff.cyclic.app/note", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            {console.log(data)}
            <Heading>Notes</Heading>

            {data.map((el) => {
                return <Single title={el.title} body={el.description} category={el.category} id={el._id} DELETE={DELETE}/>
            })}

            <Link to={"/addnotes"}><Button backgroundColor={'blue.400'} color={"white"}>Add New Notes</Button></Link>

        </div>
    )
}

export default Notes

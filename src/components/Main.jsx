import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>

      <Heading mt={"100"}>Namestay!!</Heading>
      <Link to={"/login"}><Button color={"white"} backgroundColor={"green.300"} m={"10"}>Login</Button></Link>

      <Link to={"/signup"}><Button color={"white"} backgroundColor={"red.300"} m={"10"}>Register</Button></Link>
      
    </div>
  )
}

export default Main

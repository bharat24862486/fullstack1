import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

const Single = ({title,description,category,id,DELETE}) => {



  
  return (
    <Box border={"1px solid black"} m={"10"}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{category}</Text>
      <Button backgroundColor={'red.400'} color={"white"} m={"10"} onClick={()=>DELETE(id)}>Delete</Button>
      <Button backgroundColor={'green.400'} color={"white"} m={"10"}>Patch</Button>
    </Box>
  )
}

export default Single

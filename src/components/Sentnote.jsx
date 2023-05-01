import React, { useRef } from 'react'
import axios from "axios";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Sentnote = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const Add = () => {
        let obj = {
            title: ref1.current,
            description: ref2.current,
            category:ref3.current
        }
        let token = JSON.parse(localStorage.getItem("token"))
        axios.post('https://different-bee-cuff.cyclic.app/note/addnote', obj , {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                
                console.log(res)
            })
            .catch((err) => console.log(err))
    }





    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add notes</Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Title</FormLabel>
                            <Input type="text" onChange={(e) => ref1.current = e.target.value} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Body</FormLabel>
                            <Input type="text" onChange={(e) => ref2.current = e.target.value} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Category</FormLabel>
                            <Input type="text" onChange={(e) => ref3.current = e.target.value} />
                        </FormControl>
                        <Stack spacing={10}>

                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={Add}>
                                Add Notes
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>

            <Link to={"/notes"}><Button backgroundColor={'blue.400'} color={"white"}>See All Notes</Button></Link>
        </Flex>
    );

}

export default Sentnote

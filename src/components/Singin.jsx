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
import axios from 'axios';
import { useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function SimpleCard() {
    const navigate = useNavigate()
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const signin = () => {
        let obj = {
            email: ref1.current,
            password: ref2.current
        }

        axios.post('https://different-bee-cuff.cyclic.app/user/login', obj)
            .then((res) => {
                localStorage.setItem("token",JSON.stringify(res.data.token))
                return navigate("/notes")
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
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        don't have account? <Link to={"/signup"}><Text color={'blue.400'}>Sign Up</Text></Link>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => ref1.current = e.target.value} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => ref2.current = e.target.value} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={'blue.400'}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={signin}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
// LogIn.js
import React, {ChangeEvent, FormEvent, useState} from "react";
import {VStack, Box, Heading, FormControl, FormLabel, Input, Button, Text, HStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import axios from "axios";

function LogIn() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({...prevData, [id]: value}));
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post("auth/login", formData);
            localStorage.setItem('jwtToken', response.data);
            console.log("Login successful. Token saved in local storage");

            // sposób na odzyskanie JWT Tokenu
            // const storedToken = localStorage.getItem('jwtToken');
            // console.log("stored token " + storedToken)

            if (response.status === 204) {
                console.log('User with the given username does not exist');
                window.alert('User with the given username does not exist!')
                // TODO dodać popup jakiś
                return;
            }
            // TODO: przekierować na stronę użytkownika/główną stronę, na tym etapie użytkownik jest zalogowany
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    console.log('Incorrect password');
                    window.alert('Incorrect password!')
                    // TODO dodać popup jakiś
                } else {
                    console.error('Error logging in: ', error);
                }
            } else {
                console.error('Received exception is not an instance of an AxiosError');
            }
        }
    };

    return (
        <VStack spacing={8} align="center" mt={8}>
            <Box>
                <Heading fontSize="xl" fontWeight="bold">
                    Log In to Kanballin
                </Heading>
            </Box>
            <Box width="300px">
                <form onSubmit={handleLogin}>
                    <FormControl id="username" mb={4}>
                        <FormLabel>Username</FormLabel>
                        <Input type="username" placeholder="Enter your username" id="username"
                               onChange={handleInputChange} value={formData.username}/>
                    </FormControl>
                    <FormControl id="password" mb={6}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Enter your password" id="password"
                               onChange={handleInputChange} value={formData.password}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue" width="100%" mb={4}>
                        Log In
                    </Button>
                </form>
                <Text>
                    <HStack>
                        <Text> Don't have an account?{" "} </Text>
                        <Link to="/register">
                            <Text color="blue.500">
                                Sign Up!
                            </Text>
                        </Link>
                    </HStack>
                </Text>
            </Box>
        </VStack>
    );
}

export default LogIn;

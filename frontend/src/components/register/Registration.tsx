// Registration.js
import React, {ChangeEvent, FormEvent, useState} from "react";
import {
    VStack,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    HStack,
    FormHelperText, FormErrorMessage
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import axios from 'axios';

function Registration() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const isUsernameEmpty = formData.username === '';
    const isPasswordEmpty = formData.password === '';
    const isFirstNameEmpty = formData.firstName === '';
    const isLastNameEmpty = formData.lastName === '';
    const isEmailEmpty = formData.email === '';

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({...prevData, [id]: value}));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('user/add', formData);

            console.log('Server response:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 409) {
                    console.log('User already exists: ');
                    window.alert('User already exists!')
                    // TODO dodać popup jakiś
                    // TODO dodać przeniesienie do strony z zalogowaniem się
                } else {
                    console.error('Error submitting form:', error);
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
                    Create a Kanballin Account
                </Heading>
            </Box>
            <Box width="300px">
                <form onSubmit={handleSubmit}> {/*szkoda, że React nie obsługuje onSubmit w FormControl tylko trzeba opakować w <form> :D*/}
                    <FormControl id="username" mb={4} isRequired isInvalid={isUsernameEmpty}>
                        <FormLabel>Your Username</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your username"
                            id="username"
                            onChange={handleInputChange}
                            value={formData.username}
                        />
                        {isUsernameEmpty && <FormErrorMessage>Username is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="firstName" mb={4} isRequired isInvalid={isFirstNameEmpty}>
                        <FormLabel>Your First Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your first name"
                            id="firstName"
                            onChange={handleInputChange}
                            value={formData.firstName}
                        />
                        {isFirstNameEmpty && <FormErrorMessage>First name is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="lastname" mb={4} isRequired isInvalid={isLastNameEmpty}>
                        <FormLabel>Your Last Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter your last name"
                            id="lastName"
                            onChange={handleInputChange}
                            value={formData.lastName}
                        />
                        {isLastNameEmpty && <FormErrorMessage>Last name is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="email" mb={4} isRequired isInvalid={isEmailEmpty}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            onChange={handleInputChange}
                            value={formData.email}
                        />
                        {isEmailEmpty && <FormErrorMessage>Email is required.</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="password" mb={6} isRequired isInvalid={isPasswordEmpty}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            id="password"
                            onChange={handleInputChange}
                            value={formData.password}
                        />
                        {isPasswordEmpty && <FormErrorMessage>Password is required.</FormErrorMessage>}
                    </FormControl>
                    <Button type="submit" colorScheme="blue" width="100%" mb={4}>
                        Sign Up
                    </Button>
                </form>
                <Text>
                    <HStack>
                        <Text> Already have an account?{" "} </Text>
                        <Link to="/login">
                            <Text color="blue.500">Log In!</Text>
                        </Link>
                    </HStack>
                </Text>
            </Box>
        </VStack>
    );
}

export default Registration;

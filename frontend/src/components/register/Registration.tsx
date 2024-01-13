// Registration.js
import React from "react";
import {VStack, Box, Heading, FormControl, FormLabel, Input, Button, Text, HStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Registration() {
    return (
        <VStack spacing={8} align="center" mt={8}>
            <Box>
                <Heading fontSize="xl" fontWeight="bold">
                    Create a Kanballin Account
                </Heading>
            </Box>
            <Box width="300px">
                <FormControl id="name" mb={4}>
                    <FormLabel>Your Name</FormLabel>
                    <Input type="text" placeholder="Enter your name" />
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl id="password" mb={6}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button colorScheme="blue" width="100%" mb={4}>
                    Sign Up
                </Button>
                <Text>
                    <HStack>
                        <Text> Already have an account?{" "} </Text>
                        <Link to="/login" >
                            <Text color="blue.500">
                                Log In!
                            </Text>
                        </Link>
                    </HStack>
                </Text>
            </Box>
        </VStack>
    );
}

export default Registration;

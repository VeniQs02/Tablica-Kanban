// LogIn.js
import React from "react";
import {VStack, Box, Heading, FormControl, FormLabel, Input, Button, Text, HStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LogIn() {
    return (
        <VStack spacing={8} align="center" mt={8}>
            <Box>
                <Heading fontSize="xl" fontWeight="bold">
                    Log In to Kanballin
                </Heading>
            </Box>
            <Box width="300px">
                <FormControl id="email" mb={4}>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl id="password" mb={6}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button colorScheme="blue" width="100%" mb={4}>
                    Log In
                </Button>
                <Text>
                    <HStack>
                        <Text> Don't have an account?{" "} </Text>
                        <Link to="/register" >
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

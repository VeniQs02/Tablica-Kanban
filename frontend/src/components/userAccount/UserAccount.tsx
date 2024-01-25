import React from "react";
import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { BsPerson, BsEnvelope, BsGear } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import userService from "../service/UserService";

function UserAccount() {
    const loggedInUser = userService.getUserData();
    const storedToken = loggedInUser.jwt;
    let redirectToLoginPage = false;

    if (!(loggedInUser && loggedInUser.jwt)) {
        console.log("Could not fetch user data!")
    } else {
        if (storedToken === null || storedToken.length === 0) {
            // Token does not exist, redirect to login page
            redirectToLoginPage = true;
            console.log("User token does not exist in local storage")
        } else {
            // Check if user token has expired. If it did, redirect to login page.
            userService.hasUserTokenExpired(storedToken).then((result) => {
                if (result) {
                    redirectToLoginPage = true;
                    console.log('User token has expired');
                }
            });
        }
    }

    if (redirectToLoginPage) {
        window.location.replace("/login")
    }

    const dummy_user = {
        name: "John Doe",
        email: "john.doe@example.com",
    };

    return (
        <VStack spacing={4} align="center" mt={8}>
            <Box>
                <BsPerson size={48}/>
            </Box>
            <Text fontSize="xl" fontWeight="bold">
                {loggedInUser ? loggedInUser.username : dummy_user.name}
            </Text>
            <Text fontSize="md" color="gray.500">
                {loggedInUser ? loggedInUser.email : dummy_user.email}
            </Text>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={3}>
                    <BsEnvelope/>
                    <Text>Change Email</Text>
                </HStack>
            </Button>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={2}>
                    <BiKey size={20}/>
                    <Text>Change Password</Text>
                </HStack>
            </Button>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={3}>
                    <BsGear/>
                    <Text>Account Settings</Text>
                </HStack>
            </Button>
        </VStack>
    );
}

export default UserAccount;

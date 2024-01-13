import React from "react";
import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { BsPerson, BsEnvelope, BsGear } from "react-icons/bs";
import { BiKey } from "react-icons/bi";

function UserAccount() {
    return (
        <VStack spacing={4} align="center" mt={8}>
            <Box>
                <BsPerson size={48} />
            </Box>
            <Text fontSize="xl" fontWeight="bold">
                John Doe
            </Text>
            <Text fontSize="md" color="gray.500">
                john.doe@example.com
            </Text>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={3}>
                    <BsEnvelope />
                    <Text>Change Email</Text>
                </HStack>
            </Button>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={2}>
                    <BiKey size={20} />
                    <Text>Change Password</Text>
                </HStack>
            </Button>
            <Button width={"200px"} justifyContent="space-between">
                <HStack spacing={3}>
                    <BsGear />
                    <Text>Account Settings</Text>
                </HStack>
            </Button>
        </VStack>
    );
}

export default UserAccount;

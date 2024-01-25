

import {VStack, Text, Button, HStack, FormControl, Input, FormHelperText} from "@chakra-ui/react";

const ChangeEmail = () => {
    // Add logic for changing the email

    return (
        <VStack spacing={4} align="center" mt={8}>
            <Text fontSize="xl" fontWeight="bold">
                Change Email
            </Text>
            <FormControl  width={"200px"}>
                <Input type='email' />
                <FormHelperText>REMEMBER - We'll never share your email.</FormHelperText>
            </FormControl>
            <Button width={"200px"}> Change! </Button>
        </VStack>
    );
};

export default ChangeEmail;

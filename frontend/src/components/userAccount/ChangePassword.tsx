import {VStack, Text, Button, HStack, FormControl, FormLabel, Input, FormHelperText} from "@chakra-ui/react";

const ChangePassword = () => {

    return (
        <VStack spacing={4} align="center" mt={8}>
            <Text fontSize="xl" fontWeight="bold">
                Change Password
            </Text>
            <FormControl  width={"200px"}>
                <Input type='password' />
                <FormHelperText>REMEMBER - We'll never ask you for your password.</FormHelperText>
            </FormControl>
            <Button width={"200px"}> Change! </Button>
        </VStack>
    );
};

export default ChangePassword;

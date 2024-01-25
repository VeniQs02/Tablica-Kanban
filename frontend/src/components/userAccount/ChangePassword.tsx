import {VStack, Text, Button, HStack, FormControl, FormLabel, Input, FormHelperText} from "@chakra-ui/react";
import userService from "../service/UserService";
import {ChangeEvent, FormEvent, useState} from "react";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        password: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({...prevData, [id]: value}));
    };

    const handlePasswordChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await userService.changePassword(formData)
    };

    return (
        <VStack spacing={4} align="center" mt={8}>
            <Text fontSize="xl" fontWeight="bold">
                Change Password
            </Text>
            <form onSubmit={handlePasswordChange}>
                <FormControl width={"200px"}>
                    <Input type='password' id='password' onChange={handleInputChange} value={formData.password}/>
                    <FormHelperText>REMEMBER - We'll never ask you for your password.</FormHelperText>
                </FormControl>
                <Button width={"200px"} type="submit"> Change! </Button>
            </form>
        </VStack>
    );
};

export default ChangePassword;

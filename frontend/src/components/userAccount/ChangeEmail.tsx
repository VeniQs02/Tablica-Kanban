import {VStack, Text, Button, HStack, FormControl, Input, FormHelperText} from "@chakra-ui/react";
import userService from "../service/UserService";
import {ChangeEvent, FormEvent, useState} from "react";

const ChangeEmail = () => {
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({...prevData, [id]: value}));
    };

    const handleEmailChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await userService.changeEmail(formData)
    };

    return (
        <VStack spacing={4} align="center" mt={8}>
            <Text fontSize="xl" fontWeight="bold">
                Change Email
            </Text>
            <form onSubmit={handleEmailChange}>
                <FormControl width={"200px"}>
                    <Input type='email' id='email' onChange={handleInputChange} value={formData.email}/>
                    <FormHelperText>REMEMBER - We'll never share your email.</FormHelperText>
                </FormControl>
                <Button width={"200px"} type="submit"> Change! </Button>
            </form>
        </VStack>
    );
};

export default ChangeEmail;

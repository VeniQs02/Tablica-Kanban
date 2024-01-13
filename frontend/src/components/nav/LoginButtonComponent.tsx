import {Button} from '@chakra-ui/react'
import {Link} from "react-router-dom";

interface Props{
    loggedIn: boolean;
}

const LoginButtonComponent = ({loggedIn}: Props) =>{
    let loginButtonText;
    if(loggedIn){
        loginButtonText = "Log out"
    }else{
        loginButtonText = "Log in"
    }

    return (
        <Button margin={"10px"} colorScheme="blue" variant={"outline"} display={"flex"} justifyContent={"center"}>
            <Link to={"/login"}>{loginButtonText}</Link>
        </Button>
    )

}

export default LoginButtonComponent;
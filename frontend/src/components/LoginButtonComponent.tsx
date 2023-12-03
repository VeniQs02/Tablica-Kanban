import {Button} from '@chakra-ui/react'

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
        <Button display={"flex"} justifyContent={"center"}>{loginButtonText}</Button>
    )

}

export default LoginButtonComponent;
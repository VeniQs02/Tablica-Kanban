import LoginButtonComponent from "./LoginButtonComponent";
import {HStack, Text, Box } from "@chakra-ui/react";
import { BsPersonCircle, BsFillEnvelopeOpenFill, BsInfoCircle, BsSliders } from "react-icons/bs";


interface Props{
    loggedIn: boolean;
}

const NavbarComponent = ({loggedIn}: Props) =>{
    return(
      <nav>
          <HStack>
              <Text fontSize={"30px"} width={"100%"} margin={"10px"}>Kanballin</Text>

              {/*Można te boxy zrobić buttonem z leftIcon i dużym border radius to będą bardziej
              syntax correct i ładniejsze */}

              <Box margin={"5px"}>
                  <a href={"#"}>
                      <BsInfoCircle size={"30px"}/>
                  </a>
              </Box>

              <Box margin={"5px"}>
                  <a href={"#"}>
                      <BsFillEnvelopeOpenFill size={"30px"}/>
                  </a>
              </Box>

              <Box margin={"5px"}>
                  <a href={"#"}>
                      <BsPersonCircle size={"30px"}/>
                  </a>
              </Box>

              <LoginButtonComponent loggedIn={true} />
          </HStack>
      </nav>
    );
}

export default NavbarComponent;
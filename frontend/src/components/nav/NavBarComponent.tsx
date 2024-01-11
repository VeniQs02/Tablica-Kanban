import { Link } from "react-router-dom";
import LoginButtonComponent from "./LoginButtonComponent";
import {HStack, Text, Box } from "@chakra-ui/react";
import { BsPersonCircle, BsFillEnvelopeOpenFill, BsInfoCircle, BsSliders } from "react-icons/bs";
import '../componentStyles/NavBarStyle.css';



interface Props{
    loggedIn: boolean;
}

const NavbarComponent = ({loggedIn}: Props) =>{
    return(
      <nav>
          <HStack>
              <Box margin={"5px"} width={"85%"}>
                  <Box width={"145px"}>
                      <Link to={"/home"}>
                          <Text fontSize={"30px"} margin={"10px"} _hover={{
                              color: "blue.300",
                          }}>Kanballin</Text>
                      </Link>
                  </Box>
              </Box>


              {/*Można te boxy zrobić buttonem z leftIcon i dużym border radius to będą bardziej
              syntax correct i ładniejsze */}

              <Box margin={"5px"}>
                  <Link to={"/info"}>
                      <BsInfoCircle size={"30px"}/>
                  </Link>
              </Box>

              <Box margin={"5px"}>
                  <Link to={"/contact"}>
                      <BsFillEnvelopeOpenFill size={"30px"}/>
                  </Link>
              </Box>

              <Box margin={"5px"}>
                  <Link to={"/userAccount"}>
                      <BsPersonCircle size={"30px"}/>
                  </Link>
              </Box>

              <LoginButtonComponent loggedIn={true} />
          {/*    tutaj trzeba bedzie wsadzić children abuse i zrobić żeby do środka
          wchodziło register i login jeżeli nie jest zalogowany     */}
          </HStack>
      </nav>
    );
}

export default NavbarComponent;
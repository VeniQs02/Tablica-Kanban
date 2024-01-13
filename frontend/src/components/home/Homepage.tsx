import React from "react";
import {VStack, Box, Heading, Text, Button, HStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import kanbanBackground from "../../images/kanban_background.png";

function Homepage() {
    return (
        <Box
            position="relative"
            backgroundImage={`url(${kanbanBackground})`}
            /* zdjęcie do zmiany bo hujowa jakość */
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="100%"
            h="88vh"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            p={8}
        >
            <Box  bg={"rgba(74,85,104,0.96)"} padding={"20px"} borderRadius={"10px"}>
                <VStack spacing={6} align="center" textAlign="center" maxW="600px" zIndex="1">
                    <Heading fontSize="4xl" fontWeight="bold" width={"350px"}>
                        Welcome to Kanballin!
                    </Heading>
                    <Text fontSize="xl" width={"350px"}>
                        Streamline your project management and collaboration with our powerful Kanban board application.
                    </Text>
                    <VStack spacing={4} align="flex-end">
                        <Link to={"/boards"}>
                            <Button size="lg" width="200px" colorScheme="blue">
                                Open Your Boards
                            </Button>
                        </Link>
                        <Link to={"/login"}>
                            <Button size="lg" width="200px" variant="outline" colorScheme="blue">
                                Log In
                            </Button>
                        </Link>
                    </VStack>
                    <HStack>
                        <Text color={"gray.700"}> New to Kanballin?{" "} </Text>
                        <Link to="/register" >
                            <Text color="blue.500">
                                Sign In!
                            </Text>
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
}

export default Homepage;

import {VStack, Box, Button} from "@chakra-ui/react";

const AsideBarComponent = () =>{
    return(
      <aside>
          <VStack height={"300px"}>
              <Box  bg={"gray.600"} margin={"5px"}>
                  <Button variant={"ghost"} colorScheme='yellow'>Board 2</Button>
              </Box>
              <Box  bg={"gray.600"} margin={"5px"}>
                  <Button variant={"ghost"} colorScheme='yellow'>Board 2 asd</Button>
              </Box>
              <Box  bg={"gray.600"} margin={"5px"}>
                  <Button variant={"ghost"} colorScheme='yellow'>Board 2 12313123</Button>
              </Box>
              <Box  bg={"gray.600"} margin={"5px"}>
                  <Button variant={"ghost"} colorScheme='yellow'>Board 4</Button>
              </Box>
          </VStack>

      </aside>
    );
}

export default AsideBarComponent;
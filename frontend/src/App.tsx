import LoginButtonComponent from "./components/LoginButtonComponent";
import {Grid, GridItem} from "@chakra-ui/react";

function App() {
  return (
      <Grid templateAreas={{
          base: '"nav nav" "aside main"'}}>

          <GridItem area={"nav"} backgroundColor={"red"}>
              <LoginButtonComponent loggedIn={true} />

                 {/*  03.12.2023
                       powyżej masz przykładowy komponent który ma w środku interfejks
                       czy jest zalogowany, jak chcesz możesz się pobawić podawaniem wartości
                       do tego tagu. <Grid> jest głównym elementem zwracanym, pozwala on układać
                       <GridItem>-y wg templatki którą dałem w parametrze
                 */}

          </GridItem>

          <GridItem area={"aside"} backgroundColor={"yellow"} width={"20%"}>
              <p>aside</p>
          </GridItem>

          <GridItem area={"main"} backgroundColor={"blue"} width={"100%"}>
              <p>main</p>
          </GridItem>


      </Grid>

);
}

export default App;

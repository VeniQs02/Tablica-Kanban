
import NavBarComponent from "./NavBarComponent";

export default function NavBar() {

    // import {Grid, GridItem} from "@chakra-ui/react";
    // import LoginButtonComponent from "./LoginButtonComponent";
    // import {useEffect, useState} from "react";

    // const [showAside, setShowAside] = useState(true);
    //
    // useEffect(() => {
    //     const handleResize = () => {
    //         setShowAside(window.innerWidth >= 992); // Adjust the breakpoint as needed
    //     };
    //
    //     handleResize(); // Set initial state
    //
    //     window.addEventListener("resize", handleResize);
    //
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);
    //
    // const gridTemplateColumns = showAside ? "200px 1fr" : "1fr";

    return (
                <NavBarComponent loggedIn={true} />
    );
}

// <Grid
//     templateAreas={{
//         base: '"nav" "main" "footer"',
//         lg: '"nav nav" "aside main" "aside footer"',
//     }}
//     gridTemplateColumns={gridTemplateColumns}
//     gridTemplateRows={"65px 1fr 65px"}
//     h="100%"
//     gap={2}
//     padding={2}
// >

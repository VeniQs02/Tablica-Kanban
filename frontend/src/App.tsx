import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBarComponent from "./components/NavBarComponent";
import AsideBarComponent from "./components/AsideBarComponent";
import KanbanBoardComponent from "./components/KanbanBoardComponent";
import "./App.css";

function App() {
    const [showAside, setShowAside] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowAside(window.innerWidth >= 992); // Adjust the breakpoint as needed
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const gridTemplateColumns = showAside ? "200px 1fr" : "1fr";

    return (
        <Grid
            templateAreas={{
                base: '"nav" "main" "footer"',
                lg: '"nav nav" "aside main" "aside footer"',
            }}
            gridTemplateColumns={gridTemplateColumns}
            gridTemplateRows={"65px 1fr 65px"}
            h="100%"
            gap={2}
            padding={2}
        >
            {/* dodać hamburger menu do wysuwania boardów na małych urządzeniach */}
            <GridItem area={"nav"}>
                <NavBarComponent loggedIn={true} />
            </GridItem>

            {showAside && (
                <GridItem area={"aside"} backgroundColor={"gray.600"}>
                    <AsideBarComponent />
                </GridItem>
            )}

            <GridItem area={"main"} backgroundColor={"gray.700"}>
                <KanbanBoardComponent />
            </GridItem>

            <GridItem area={"footer"} backgroundColor={"gray.900"}></GridItem>
        </Grid>
    );
}

export default App;

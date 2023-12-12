import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    ...config,
    styles: {
        global: {
            body: {
                fontFamily: 'Roboto, sans-serif',
            },
        },
    }, });

export default theme;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App';
import ".//pageStyles/IndexStyle.css"
import theme from "./componentScripts/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <App />
      </ChakraProvider>
  </React.StrictMode>
);


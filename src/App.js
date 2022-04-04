import React, { useState } from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from './components/MainTheme';



import Header from "./components/Header/Header"
import ItemListContainer from "./components/MainApp/ItemListContainer";
import { CssBaseline } from "@mui/material";


export default function App() {

  const [cartNumber, setCartNumber] = useState(0);

  const cartAdd = (amount) => {
    setCartNumber(cartNumber + amount);
  }


  return (
    <>
      <ThemeProvider theme={MainTheme}>
      <CssBaseline>

        <Header cartNumber={cartNumber}/>
        <ItemListContainer cartAdd={cartAdd}/>
        
        </CssBaseline>
      </ThemeProvider>

    </>
  );
}

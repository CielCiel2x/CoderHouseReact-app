import React, { useState } from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from './components/MainTheme';



import Header from "./components/Header/Header"
import ItemListContainer from "./components/Item/ItemListContainer";
import { CssBaseline } from "@mui/material";
import ItemDetailContainer from "./components/Item/ItemDetail/ItemDetailContainer";




export default function App() {

  const [cartNumber, setCartNumber] = useState(0);

  const cartAdd = (amount) => {
    setCartNumber(cartNumber + amount);
  }


  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline>

          <Header cartNumber={cartNumber} />
          <ItemListContainer />

          <ItemDetailContainer cartAdd={cartAdd} />

        </CssBaseline>
      </ThemeProvider>

    </>
  );
}

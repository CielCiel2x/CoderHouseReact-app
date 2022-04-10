import React, { useState } from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from './components/MainTheme';

import Header from "./components/Header/Header"
import ItemListContainer from "./components/Item/ItemListContainer";
import { CssBaseline } from "@mui/material";
import ItemDetailContainer from "./components/Item/ItemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";




export default function App() {

  const [cartNumber, setCartNumber] = useState(0);

  const cartAdd = (amount) => {
    setCartNumber(cartNumber + amount);
  }


  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline>

          {/* 
          <Header cartNumber={cartNumber} />
          <ItemListContainer />
          <ItemDetailContainer cartAdd={cartAdd} /> */}






          <BrowserRouter>
            <Header cartNumber={cartNumber} />

            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/CoderHouseReact-app" element={<Home />} />
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/catalog/:categoryId/" element={<ItemListContainer />} />
              <Route exact path="/item/:itemId" element={<ItemDetailContainer cartAdd={cartAdd} />} />

            </Routes>

          </BrowserRouter>


        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

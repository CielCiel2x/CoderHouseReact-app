import React from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { MainTheme } from './utils/MainTheme';

import Header from "./components/Header/Header"
import ItemListContainer from "./components/Item/ItemListContainer";
import { CssBaseline } from "@mui/material";
import ItemDetailContainer from "./components/Item/ItemDetail/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import CartContextProvider from "./Contexts/CartContext";
import CartDetail from "./components/CartDetail/CartDetail";

import ScrollToTop from "./utils/ScrollToTop";






export default function App() {


  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={MainTheme}>
          <CssBaseline>
            <BrowserRouter>
              <Header />
              <ScrollToTop>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/CoderHouseReact-app" element={<Home />} />
                <Route exact path="/" element={<ItemListContainer />} />
                <Route exact path="/catalog/:categoryId/" element={<ItemListContainer />} />
                <Route exact path="/catalog/" element={<ItemListContainer />} />
                <Route exact path="/:category/item/:itemId" element={<ItemDetailContainer />} />
                <Route exact path="/cart" element={<CartDetail />} />

              </Routes>
              </ScrollToTop>

            </BrowserRouter>

 


          </CssBaseline>
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}

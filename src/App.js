import React from "react";

import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { MainTheme } from './components/MainTheme';
import Header from "./components/Header/Header"

import './App.css';

import ItemListContainer from "./components/MainApp/ItemListContainer";



export default function App() {


  return (
    <>
      <ThemeProvider theme={MainTheme}>

        <Header/>
        <ItemListContainer/>

      </ThemeProvider>
    </>
  );
}

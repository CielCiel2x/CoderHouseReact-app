import React from "react";

import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { dashboardTheme } from './components/dashboardTheme';

import './App.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/MainApp/ItemListContainer";


export default function App() {
  return (
    <>
    <ThemeProvider theme={dashboardTheme}>


      <Header/>
      <ItemListContainer nombre="cosplays"/>


      </ThemeProvider>
    </>
  );
}

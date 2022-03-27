import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/MainApp/ItemListContainer";


export default function App() {
  return (
    <>
      <Header/>

      <ItemListContainer nombre="cosplays"/>
    </>
  );
}

import React from "react";
import { NavBar } from "./components/NavBar";
import { ItenListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {

  return (
    <div style={style.container}>
      <NavBar />
      <ItenListContainer />
      <ItemDetailContainer />
    </div>
  );
};

const style = {
  
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 10%)',
    gridTemplateRows: 'auto',
    margin: '0px 20px'
  }

};  

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import ItenListContainer from "./components/ItemListContainer";

function App() {

  const titulo = "HOLA ESTAS EN... VALKA"

  return (
    <div style={style.container}>
      <NavBar />
      <ItenListContainer greeting = {titulo} />
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

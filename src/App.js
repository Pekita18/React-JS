import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={style.container}>
      <NavBar />
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

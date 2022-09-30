import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { ItenListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Footer } from "./components/Footer";

function App() {

  return (
    <div style={style.container}>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element= {<ItenListContainer />} />
            <Route path="/categoria/:CategoriaId" element= {<ItenListContainer />} />
            <Route path="/producto/:ProductoId" element= {<ItemDetailContainer />} />
          </Routes>
        <Footer />
      </BrowserRouter>   
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

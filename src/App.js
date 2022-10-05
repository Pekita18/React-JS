import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { ItenListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart"
import { CartContext } from "./components/CartContext"

function App() {

  return (
    <div style={style.container}>
      <BrowserRouter>
        <CartContext>
          <NavBar />
            <Routes>
              <Route path="/" element= {<ItenListContainer />} />
              <Route path="/categoria/:CategoriaId" element= {<ItenListContainer />} />
              <Route path="/producto/:ProductoId" element= {<ItemDetailContainer />} />
              <Route path="/cart" element= {<Cart />} />
            </Routes>
          <Footer />
        </CartContext>
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

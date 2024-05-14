import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
 
  const [isVisible,seIstVisible] = useState(false);
  const [cart, setCart] = useState([]);
 

  const switchVisible = () => {
    seIstVisible(!isVisible)
    if(!isVisible){
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Header switchVisible={switchVisible} cart={cart} />
      <Shop isVisible={isVisible} cart={cart} setCart={setCart}  />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

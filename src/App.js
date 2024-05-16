import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
 
  const [isVisible,seIstVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [applyVisible, setIsApplyVisible] = useState(false)
 


  // const applyVision = () => {
  //   setIsApplyVisible(!applyVisible);
  //   if (!applyVisible) {
  //     setTimeout(() => {
  //       document.querySelector('.apply').style.display = 'block';
  //     }, 5000);
  //   }
  // };

  const applyVision = () => {
    setIsApplyVisible(!applyVisible); // Сразу устанавливаем видимость
    setTimeout(() => {
      setIsApplyVisible(applyVisible); // Через 5 секунд снова скрываем
    }, 2000);
  };

  const switchVisible = () => {
    seIstVisible(!isVisible)
    if(!isVisible){
      document.body.style.overflow = 'hidden'
    }
  }


  return (
    <BrowserRouter>
    <div className="App">
      <div className={applyVisible ? 'apply visible' : 'apply'}>
        <div className='apply_text'>
          Товар додано!
        </div>
      </div>
      <Header switchVisible={switchVisible} cart={cart} />
      <Shop isVisible={isVisible} cart={cart} setCart={setCart} applyVision={applyVision} />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

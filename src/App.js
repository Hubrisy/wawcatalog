import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { Helmet } from 'react-helmet';

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

    <Helmet>
    <script>
      {`
        !function(f,b,e,v,n,t,s){ 
          if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '864635952168755');
          fbq('track', 'PageView');
      `}
</script>
<noscript>
{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=864635952168755&amp;ev=PageView&amp;noscript=1"/>`}
</noscript>
    </Helmet>

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

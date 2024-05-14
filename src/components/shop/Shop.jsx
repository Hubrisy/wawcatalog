import Item from "../item/Item";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./shop.css";
import ItemDescription from "../item/ItemDescription";
import Cart from "../cart/Cart";
import Navigation from "../navigation/Navigation";

const Shop = (props) => {
  const jsonUrl =
    "https://raw.githubusercontent.com/Hubrisy/catalogData/main/militarydata.json";

  const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([]);

  const addToCart = (price, name, count, img, totalprice,id) => {
    // Проверяем, есть ли уже такой товар в корзине
    const existingItemIndex = props.cart.findIndex((item) => item.name === name);

    if (existingItemIndex !== -1) {
      // Если товар уже есть в корзине, обновляем его количество и общую стоимость
      const updatedCart = [...props.cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        count: +updatedCart[existingItemIndex].count + +count,
        price:
          +updatedCart[existingItemIndex].price +
          +totalprice,
      };
      props.setCart(updatedCart);
    } else {
      // Если товара еще нет в корзине, добавляем новый экземпляр
      const newItem = { price, name, count, img, totalprice,id };
      props.setCart([...props.cart, newItem]);
    }
  };

  const increaseQuantity = (index, currentPrice) => {
    const updatedCart = [...props.cart];
    updatedCart[index] = {
      ...updatedCart[index],
      count: +updatedCart[index].count + 1,
      price: +updatedCart[index].price + currentPrice,
    };
    props.setCart(updatedCart);
  };

  const decreaseQuantity = (index, currentPrice) => {
    const updatedCart = [...props.cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index] = {
        ...updatedCart[index],
        count: updatedCart[index].count - 1,
        price: +updatedCart[index].price - currentPrice,
      };
      props.setCart(updatedCart);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...props.cart];
    updatedCart.splice(index, 1);
    props.setCart(updatedCart);
  };

  useEffect(() => {
    console.log(props.cart);
  }, [props.cart]);

  useEffect(() => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setItems(jsonData.items);
      })
      .catch((error) => console.error("Ошибка получения данных:", error));
  }, [jsonUrl]);

  const itemAmount = props.cart.reduce((total,cartAmount) => total + +(cartAmount.count),0);

  return (
    <div className="shop_block">
      {/* <Navigation /> */}
      <Routes>
        <Route
          path="/wawcatalog"
          element={<Item items={items} addToCart={addToCart} />}
        />
        <Route path="/item/:id" element={<ItemDescription items={items} addToCart={addToCart} />} />
      </Routes>
      <Cart
        isVisible={props.isVisible}
        cart={props.cart}
        itemAmount={itemAmount}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={handleRemoveItem}
      />
    </div>
  );
};

export default Shop;

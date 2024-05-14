import "./cart.css";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { useRef } from "react";

const Cart = (props) => {
  const thisCart = props.cart;

  // const [isAmout, setIsAmout] = useState(thisCart.count);
  const divRef = useRef();

  const removeItem = (index) => {
    props.removeItem(index);
  };

  const switchVisibility = () => {
    divRef.current.style.display = "none";
    document.body.style.overflow = "scroll";
  };

  const totalCartPrice = thisCart.reduce((total, cartitem) => total + (cartitem.totalprice * cartitem.count), 0);
  // const itemAmount = thisCart.reduce((total,cartAmount) => total + +(cartAmount.count),0);
  const itemInfo = thisCart.map(item => `Товар:${item.name} ID:${item.id} Кількість:${item.count} Ціна:${item.price}`);


  return (
    <div
      className="cart_container"
      ref={divRef}
      style={{ display: props.isVisible ? "block" : "none" }}
    >
      <div className="cart_block">
        <div className="cart_close">
          <IoMdClose className="close_img" onClick={() => switchVisibility()} />
        </div>
        {thisCart.length === 0 ? (
          <div className="check">Корзина пуста</div>
        ) : (
          <>
            {thisCart.map((cartitem, index) => (
              <div key={cartitem.id}>
                <div className="cart_item-name">{cartitem.name}</div>
                <div className="cart_item-block" key={index}>
                  <div className="cart_img">
                    <img
                      src={cartitem.img}
                      style={{ height: "120px", marginBottom: "20px" }}
                      alt=""
                    />
                  </div>
                  <div className="cart_amount-block">
                    <FaMinus
                      className="amount_symbol"
                      onClick={() =>
                        props.decreaseQuantity(index, +cartitem.totalprice)
                      }
                    />
                    <div className="cart_amount">{cartitem.count}</div>
                    <FaPlus
                      className="amount_symbol"
                      onClick={() =>
                        props.increaseQuantity(index, +cartitem.totalprice)
                      }
                    />
                  </div>
                  <div className="cart_price">{cartitem.price} грн</div>
                  <FaTrash
                    className="trash"
                    onClick={() => removeItem(index)}
                  />
                </div>
              </div>
            ))}
            <div className="cart_amount-price">
              <div>Загальна ціна: {totalCartPrice} грн</div>
              <div>Загальна кількість: {props.itemAmount} шт.</div>
            </div>
            <div className="cart_form-block">
              <form action="http://gardenphp/zakaz.php" className="cart_form" method="post">
                <input className="form_input" placeholder="Введіть ваше ім'я" type="text" name="name" id="" />
                <input className="form_input" placeholder="Введіть ваш номер телефону" type="tel" name="phone" id="" />
                <input type="hidden" name="comment" value={`Загальна ціна: ${totalCartPrice},Товар: ${itemInfo}`} />
                <div className="cart_confirm">
                <button type="submit">Зробити замовлення</button>
              </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

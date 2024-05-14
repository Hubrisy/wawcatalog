import { Link } from "react-router-dom";

import "./item.css";

const Item = (props) => {

  return (
    <div className="item_block">
      {props.items.map((item) => (
        <div className="item_container" key={item.id}>
          <div className="img_container">
            <img src={item.itemImg} alt={item.itemName} />
          </div>
          <div className="item_name">{item.itemName}</div>
          <div className="price_container">
            <div className="past_price">{item.pastPrice}грн</div>
            <div className="current_price">{item.currentPrice}грн</div>
          </div>
          <div className="button_container">
           
              <Link to={`/item/${item.id}`} className="blue">
              <button className="blue">
                Докладніше
                </button>
              </Link>
            <button className="orange" onClick={() => props.addToCart(item.currentPrice,item.itemName,item.count,item.itemImg,item.totalPrice,item.id)}>Додати в корзину</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

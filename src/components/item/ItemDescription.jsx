import "./itemdesc.css";
import { useParams } from "react-router-dom";

import Return from "../../images/return.jpg";
import { PiKeyReturnBold } from "react-icons/pi";


const ItemDescription = (props) => {
  const params = useParams();
  const item = props.items.find((item) => item?.id === params?.id);

  if (!item) {
    return null;
  }

  return (
    <div className="itemDesc_container">
      <div className="button_return" onClick={() => window.history.back()}>
        {/* <img src={Return} alt="" /> */}
        <PiKeyReturnBold className="button_img"/>
      </div>
      <div className="item_price-block">
        <h2 className="item_itemname">{item.itemName}</h2>
        <div className="item_price">
          <div className="prev_price">{item.pastPrice} грн</div>
          <div className="current_price">{item.currentPrice} грн</div>
        </div>
      </div>
      <div className="item_header">
        <div className="item_img">
          <img src={item.itemImg} alt="" />
        </div>
        <div className="second_price-block">
          <div className="prev_price">{item.pastPrice} грн</div>
          <div className="current_price">{item.currentPrice} грн</div>
        </div>
        <div className="item_price-container">
          {/* <h2 className="item_itemname">{item.itemName}</h2>
          <div className="item_price">
            <div className="prev_price">{item.pastPrice} грн</div>
            <div className="current_price">{item.currentPrice} грн</div>
          </div> */}
          <div className="item_char-block">
            <div>
            <div className="char_title">Характеристики:</div>
            <ul>
              {item.characteristic.map((char, id) => (
                <li  key={id}>{char}</li>
              ))}
            </ul>
            </div>
            <div className="item_button-block">
              <button
                className="item_btn"
                onClick={() =>
                  props.addToCart(
                    item.currentPrice,
                    item.itemName,
                    item.count,
                    item.itemImg,
                    item.totalPrice,
                    item.id
                  )
                }
              >
                Додати в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="item_button-block">
      <button className="item_btn" onClick={() => props.addToCart(item.currentPrice,item.itemName,item.count,item.itemImg,item.totalPrice,item.id)}>Додати в корзину</button>
      </div> */}
      <div className="item_desc-block">
        <h2>Опис</h2>
        <div className="item_desc">
          {item.description.map((desc, id) => (
            <p key={id}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;

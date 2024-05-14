import './header.css'
import { FaShoppingCart } from "react-icons/fa";
import { GiMachineGunMagazine } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { PiShoppingCartBold } from "react-icons/pi";

import List from '../../images/list.png';



const Header = (props) => {

    const totalItems = props.cart.reduce((total, item) => total + +(item.count), 0);

    return(
        <div className='header_block'>
            <>
            <div className='header_title-block'>
            <h1>MilitaryShop</h1>
            </div>
            
            <LuShoppingCart className="cart_icon" onClick={()=>props.switchVisible()} />
            <div className="header_cart-amount" style={{fontSize:'18px',color:'white'}}>{totalItems}</div>
            </>
            <div className='header_line-container'>
                <div className='line'></div>
                {/* <div className='line_img'>
                    <img src={List} alt="" />
                </div> */}
                <GiMachineGunMagazine  className='line_img' />
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Header;
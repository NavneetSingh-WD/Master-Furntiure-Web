import Footer from "./Landing/footer";
import { Bot } from "./pag2";

function Cart() {
    return (<div className="cart">
        <div className="p1-s1">
              <img className="bg-img" src="src\assets\hero\1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg" alt="" />
            <div className="sps1-m">  <img  src="src\assets\nav\logo.png" alt="" />
                <h1>Cart</h1>
                <div>
                   
                    <b>Home </b><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <b> Cart</b>
                </div>
            </div>
        </div>
        <div className="cart-main">
            <div className="crt-m-l">
                <div className="crt-m-l-top">
                    <label htmlFor="">Product</label>
                    <label htmlFor="">Price</label>
                    <label htmlFor="">Quantity</label>
                    <label htmlFor="">Subtotal</label>
                </div>
                <div className="crt-m-l-bott">
                    <div className="crt-p"><img src="src\assets\p3\Group 146.png" alt="" /><p>Asgaard sofa</p> </div>
                    <p>Rs. 250,000.00</p>
                    <div className="qun">1</div>
                    <b>Rs. 250,000.00 
</b><svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z" fill="#B88E2F"/>
</svg>
                </div>
            </div>
            <div className="crt-m-r">
                <h2>Cart Totals</h2>
                <div className="crt-m-r-main">
                    <label htmlFor="">Subtotal </label>
                    <p>Rs. 250,000.00</p>
                    <label htmlFor="">Total</label>
                    <p>Rs. 250,000.00</p>
                </div>
                <button>Check Out</button>
            </div>
        </div>
        <Bot />

    </div>);
}

export default Cart;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';

// Import images as modules
import logo from '../../assets/nav/logo.png';
import vector5 from '../../assets/nav/Vector (5).png';
import vector6 from '../../assets/nav/Vector (6).png';
import vector7 from '../../assets/nav/Vector (7).png';
import vector8 from '../../assets/nav/Vector (8).png';
import group146 from '../../assets/p3/Group 146.png';
import mask5 from '../../assets/p3/Mask group (5).png';

function Nav() {
  const [m, setm] = useState(false);
  const nev = useNavigate();

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <label>Furniro</label>
      </div>

      <div className="nav-buttons">
        <button onClick={() => nev('/Furniture-web')}>Home</button>
        <button onClick={() => nev('/Furniture-web/Shop')}>Shop</button>
        <button onClick={() => nev('/Furniture-web/Blog')}>About</button>
        <button onClick={() => nev('/Furniture-web/Contact')}>Contact</button>
      </div>

      <div className="nav-icon">
        <img src={vector5} alt="" />
        <img src={vector7} alt="" />
        <img src={vector8} alt="" onClick={() => setm(true)} />
        <img src={vector6} alt="" />
      </div>

      {m && (
        <div className="">
          <div className="p3-modal-bg" onClick={() => setm(false)}></div>
          <div className="p3-modal">
            <div className="p3-m-lb">
              <label>Shopping Cart</label>
              {/* ... */}
            </div>

            <div className="p3-m-main">
              <div className="m-crd">
                <img src={group146} alt="" />
                <div className="m-crd-lb">
                  <label>Asgaard sofa</label>
                  <div>
                    <b>1 X</b>
                    <p>Rs. 250,000.00</p>
                  </div>
                </div>
              </div>

              <div className="m-crd">
                <img src={mask5} alt="" />
                <div className="m-crd-lb">
                  <label>Casaliving Wood</label>
                  <div>
                    <b>1 X</b>
                    <p>Rs. 250,000.00</p>
                  </div>
                </div>
              </div>
            </div>
<div className="p3-m-bottom"> <div className="m-bottom-lb"><label htmlFor="">Subtotal</label> <p>Rs. 520,000.00</p></div> </div> <hr /> <div className="bottom-buttons"> <button onClick={()=>{nev('/Furniture-web/Cart')}}>Cart</button> <button onClick={()=>{nev('/Furniture-web/Checkout')}}>Checkout</button> <button onClick={()=>{nev('/Furniture-web/Product_Comparison')}}>Comparison</button> </div> </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;

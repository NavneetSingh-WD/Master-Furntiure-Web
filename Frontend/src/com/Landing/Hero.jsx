import React, { useState } from "react";
import "./hero.css";

import h1 from "../../assets/hero/98fb219fa11f805aade2224f1d6658764a2395df.jpg";

import heroDining from "../../assets/hero/Mask Group.png";
import heroLiving from "../../assets/hero/Image-living room.png";
import heroBedroom from "../../assets/hero/Mask Group (1).png";

import prod1 from "../../assets/hero/product/4491a0ea43eebd52ea72d60650f31030ec4bf7e6.png";
import prod2 from "../../assets/hero/product/3ed353edbdb0310fb379a6b1828809d2c0652533.png";
import prod3 from "../../assets/hero/product/208499f37c62fb49f7d4a1a6a5dc5959b40150ed.png";
import prod4 from "../../assets/hero/product/Image 5.png";
import prod5 from "../../assets/hero/product/b6096926ea43a4c55f9e28aa3592f17ff47a4303.png";
import prod6 from "../../assets/hero/product/8d34199de77ede2f478b2f26210bd264978981f6.jpg";
import prod7 from "../../assets/hero/product/6028dfe03d98b27fb98ee49958d7089f10d39dfe.jpg";
import prod8 from "../../assets/hero/product/1f73e5634a5dbc0c29efbae1beca6ab40dd9b598.jpg";


import s4Right from "../../assets/hero/Image (1).png";

import s5Share from "../../assets/s5/Share.png";
import { useNavigate } from "react-router-dom";
function S4crd(prop) {
  return (<div className="s4crd">
    <img src={prop.img}></img>
    <label className="s4crd-lab">{prop.lable}</label>
    <p>{prop.subtext}</p>
    <label className="price">{prop.price}</label>
    <label className="price-a">{prop.pricedis}</label>
  </div>);
}

function Carousel({ images = [] }) {
  const [sei, setsel] = useState(images[0]);
  const [sid, setid] = useState(0);
  return (<div className="car">
    <div className="car-imgs">
      <img src={images[sid]} alt="" className="selected" />
      {images[sid + 1] ? <img src={images[sid + 1]} alt="" className="selected" /> : ''}
      <button className="movright" onClick={() => { setid(sid + 1) }} style={{ display: sid == images.length - 1 ? 'none' : '' }}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"></path></svg>
      </button>
      <button className="moveleft" onClick={() => { setid(sid - 1) }} style={{ display: sid == 0 ? 'none' : '' }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"></path></svg></button>
    </div>
    {/* <h1>{images[sid + 1]}</h1> */}
    <div style={{ display: 'flex', gap: '1em' }}>
      {images.map((img, id) => (
        <div className="circlediv " onClick={() => {
          setsel(img);
          setid(id);
        }} key={id} alt="" style={{ border: img === images[sid] ? '0.7px solid rgba(184, 142, 47, 1) ' : '', display: 'grid', alignContent: 'center', justifyContent: 'center', borderRadius: '100%', height: '1.5em', width: '1.5em' }} ><div style={{ backgroundColor: img === images[sid] ? 'rgba(184, 142, 47, 1)' : 'rgba(216, 216, 216, 1)', borderRadius: '100%', height: '0.5em', width: '0.5em' }} ></div></div>
      ))}
    </div>
  </div>);
}

function Hero() {
  const nev=useNavigate()
  return (
    <div className="hero-body">
      {/* Section 1 */}
      <div className="hero-s1">
        <img src={h1} alt="Hero Banner" />
        <div className="s1-main">
          <label>New Arrival</label>
          <h1>Discover Our</h1>
          <h1>New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamco
          </p>
          <button onClick={()=>{nev('Shop')}}>BUY Now</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="hero-s2">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="s2-imge">
          <div className="s2-crd">
            <img src={heroDining} alt="Dining" />
            <label>Dining</label>
          </div>
          <div className="s2-crd">
            <img src={heroLiving} alt="Living" />
            <label>Living</label>
          </div>
          <div className="s2-crd">
            <img src={heroBedroom} alt="Bedroom" />
            <label>Bedroom</label>
          </div>
        </div>
      </div>


      <div className="hero-s3">
        <h2>Our Products</h2>
        <div className="s3-crds">
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod1} alt="Syltherine" />
            <label>Syltherine</label>
            <p>Stylish cafe chair</p>
            <b>Rp 2.500.000 <span>Rp 3.500.000</span></b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod2} alt="Leviosa" />
            <label>Leviosa</label>
            <p>Stylish cafe chair</p>
            <b>Rp 2.500.000</b>
          </div>
          <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod3} alt="Lolito" />
            <label>Lolito</label>
            <p>Luxury big sofa</p>
            <b>Rp 7.000.000 <span>Rp 14.000.000</span></b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod4} alt="Respira" />
            <label>Respira</label>
            <p>Outdoor bar table and stool</p>
            <b>Rp 500.000</b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod5} alt="Grifo" />
            <label>Grifo</label>
            <p>Night lamp</p>
            <b>Rp 1.500.000</b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod6} alt="Muggo" />
            <label>Muggo</label>
            <p>Small mug</p>
            <b>Rp 150.000 <span>Rp 14.000.000</span></b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod7} alt="Pingky" />
            <label>Pingky</label>
            <p>Cute bed set</p>
            <b>Rp 7.000.000</b>
          </div>
            <div className="crd" onClick={()=>{nev('/Furniture-web/Proudct')}}>
            {true && <div className="crd-hv">
              <button>Add to cart</button>
              <div className="crd-sher"><label htmlFor=""><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
              </svg>
                Share</label>
                <label htmlFor=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z" fill="white" />
                </svg>
                  Compare</label>
                <label htmlFor=""><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                </svg>
                  Like</label>
              </div>
            </div>}
            <img src={prod8} alt="Potty" />
            <label>Potty</label>
            <p>Minimalist flower pot</p>
            <b>Rp 500.000</b>
          </div>
        </div>
        <button onClick={()=>{nev('/Furniture-web/Shop')}}>Show More</button>
      </div>

      <div className="hero-s4">
        <div className="s4-left">
          <div>
            <h1>
              50+ Beautiful rooms
              inspiration
            </h1>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button className="brownbutton">Explore More</button>
          </div>
        </div>
        <div className="s4-right">
          <img
            src={s4Right}
            alt="Room Inspiration"
            style={{ height: "27rem", marginRight: "1em" }}
          />
          <Carousel images={[prod4, prod3, heroLiving]} />
        </div>
      </div>

      {/* Section 5 */}
      <div className="hero-s5">
        <img src={s5Share} alt="Share your setup" />
        <h2></h2>
      </div>
    </div>);
}

export default Hero;
import { Bot } from "./pag2";

function Checkout() {
    return (<div className="Checkout">
        <div className="p1-s1">
              <img className="bg-img" src="src\assets\hero\1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg" alt="" />
            <div className="sps1-m">
                  <img  src="src\assets\nav\logo.png" alt="" />
                <h1>Checkout</h1>
                <div>
                   
                    <b>Home </b><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <b>Checkout</b>
                </div>
            </div>
        </div>
        <div className="co-main">
            <div className="co-main-l">
                <h1>Billing details</h1>
                <div className="name">
                    <div className="name-l"><label htmlFor="">First Name</label>
                        <input type="text" /></div>
                    <div className="name-r"><label htmlFor="">Last Name</label>
                        <input type="text" />

                    </div>

                </div>
                <label htmlFor="">Company Name (Optional)</label>
                <input type="text" />
                <label htmlFor="">Country / Region</label>
                <input type="text" />
                <label htmlFor="">Street address</label>
                <input type="text" />
                <label htmlFor="">Town / City</label>
                <input type="text" />
                <label htmlFor="">Province</label>
                <input type="text" />
                <label htmlFor="">ZIP code</label>
                <input type="text" />
                <label htmlFor="">Phone</label>
                <input type="text" />
                <label htmlFor="">Email address</label>
                <input type="text" name="" id="" />
                <input type="text" placeholder="Additional information" />
            </div>
            <div className="co-main-r">
                <div className="co-main-r-top">
                    <div style={{ fontSize: '1.5em' }}><b>Product</b><b className="val">Subtotal</b></div>
                    <div><p>Asgaard sofa </p><b> x 1</b><div style={{ color: 'rgba(159, 159, 159, 1)' }} className="val">Rs. 250,000.00</div></div>
                    <div><b>Subtotal</b><p className="val">Rs. 250,000.00</p></div>
                    <div><b>Total</b><b style={{ color: 'rgba(184, 142, 47, 1)', fontSize: '1.5em' }} className="val">Rs. 250,000.00</b></div>
                    <br />
                    <hr />
                </div>
                <label htmlFor=""><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="7" fill="black" />
                </svg>
                    Direct Bank Transfer</label>
                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <p style={{ marginRight: 'auto' }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6.5" stroke="#9F9F9F" />
                </svg>
                    Direct Bank Transfer
                </p>
                <p style={{ marginRight: 'auto' }}> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6.5" stroke="#9F9F9F" />
                </svg>
                    Cash On Delivery</p>
                <p style={{ color: 'black' }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <button>Place order</button>

            </div>


        </div>
        <Bot />
    </div>);
}
export function Contact() {
    return (<div className="Contact">
        <div className="p1-s1">
            <img className="bg-img" src="src\assets\hero\1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg" alt="" />
            <div className="sps1-m">
                    <img  src="src\assets\nav\logo.png" alt="" />
                <h1>Contact</h1>
                <div>
                    <b>Home </b><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <b>Contact</b>
                </div>
            </div>
        </div>
        <div className="con-top">
            <h1>Get In Touch With Us</h1>
            <p style={{color:'rgba(159, 159, 159, 1)'}}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="con-main">
            <div className="con-main-l">
                <div className="con-crd">
                    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0.120087C8.08369 0.123477 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123477 11 0.120087ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.7698C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z" fill="black" />
                    </svg>
                    <div className="addres">
                        <label htmlFor="">Address</label>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className="con-crd">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6091 18.425L17.5279 13.805C17.2877 13.5867 16.972 13.4703 16.6476 13.4803C16.3232 13.4903 16.0154 13.626 15.7891 13.8587L12.7979 16.935C12.0779 16.7975 10.6304 16.3462 9.14035 14.86C7.65035 13.3687 7.1991 11.9175 7.06535 11.2025L10.1391 8.20999C10.3721 7.9839 10.508 7.67602 10.5181 7.3515C10.5281 7.02698 10.4115 6.71129 10.1929 6.47124L5.5741 1.39124C5.35541 1.15044 5.05145 1.00437 4.72679 0.984068C4.40214 0.963762 4.08235 1.07082 3.83535 1.28249L1.12285 3.60874C0.906741 3.82564 0.777752 4.11431 0.760352 4.41999C0.741602 4.73249 0.384103 12.135 6.1241 17.8775C11.1316 22.8837 17.4041 23.25 19.1316 23.25C19.3841 23.25 19.5391 23.2425 19.5804 23.24C19.886 23.2229 20.1745 23.0933 20.3904 22.8762L22.7154 20.1625C22.9279 19.9163 23.0357 19.5968 23.0159 19.2721C22.996 18.9475 22.85 18.6435 22.6091 18.425Z" fill="black" />
                    </svg>
                    <div className="addres">
                        <label htmlFor="">Phone</label>
                        <p>Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className="con-crd">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_63_247)">
                            <path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_63_247">
                                <rect width="23" height="23" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="addres">
                        <label htmlFor="">Working Time</label>
                        <p>Monday-Friday: 9:00 - 22:00
                            Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div className="con-main-r">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder="abc" />
                <label htmlFor="">Email address</label>
                <input type="text" placeholder="Abc@def.com" />
                <label htmlFor="">Subject</label>
                <input type="text" placeholder="This is an optional" />
                <label htmlFor="">Message</label>
                <input type="text" placeholder="This is an optional" />
                <label htmlFor="">Message</label>
                <textarea type="text" style={{height:'150px'}} placeholder="Hi! i’d like to ask about" />
                <button>Submit</button>
            </div>
        </div>
        <Bot/>
    </div>);
}

// export default Contact;
export default Checkout;
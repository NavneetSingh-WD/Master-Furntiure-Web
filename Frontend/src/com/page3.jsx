import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Page3() {
    const nev=useNavigate()
    const [que, setque] = useState(1);
    return (<div className="page3">

        <div className="p3-loc">
            <label htmlFor="">Home</label>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
            </svg>
            <label htmlFor="">Shop</label>
            <label htmlFor="" style={{ borderLeft: '1px solid black', paddingLeft: '2em', color: 'black' }}>Asgaard sofa</label>

        </div>
        <div className="p2-s1">
            <div className="p2-s1-left">
                <div className="p2-imgs">
                    <img src="src\assets\p2\Group 94.png" alt="" />
                    <img src="src\assets\p2\Group 98.png" alt="" />
                    <img src="src\assets\p2\Group 97.png" alt="" />
                    <img src="src\assets\p2\Group 96 (1).png" alt="" />
                </div>
                <img src="src\assets\p2\Group 95 (4).png" className='p2-main' alt="" />
            </div>
            <div className="p2-s1-right">
                <h2>Asgaard sofa</h2>
                <p>Rs. 250,000.00</p>
                <div className="rating">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700" />
                    </svg>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z" fill="#FFC700" />
                    </svg>
                    <p>5 Customer Review</p>
                </div>
                <b>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</b>
                <p>Size</p>
                <div className="p2buttons">
                    <button style={{ background: 'rgba(184, 142, 47, 1)' }}>L</button>
                    <button>XL</button>
                    <button>XS</button>
                    {/* <button>Next</button> */}

                </div>
                <p>Color</p>
                <div className="cols"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="15" fill="#816DFA" />
                </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="black" />
                    </svg>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="#B88E2F" />
                    </svg>

                </div>
                <div className="quen-sec">
                    <div className="q-button1" ><button onClick={() => { setque(que - 1) }}>-</button>{que}<button onClick={() => { setque(que + 1) }}>+</button></div>
                    <div className="q-button">Add To Cart</div>
                    <div className="q-button">+ Compare</div>
                </div>
                <hr />
                <div className="share">
                    <div className="inline"><p>SKU</p>: pSS001</div>
                    <div className="inline"><p>Category</p>: Sofas</div>
                    <div className="inline"><p>Tags</p>: Sofa, Chair, Home, Shop</div>
                    <div className="inline"><p>Share</p>: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_117_920)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_117_920">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z" fill="black" />
                        </svg>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z" fill="black" />
                        </svg>

                    </div>

                </div>
            </div>

        </div>
        <div className="p2-s2">

            <div className="s2-hed"><label ><b>Description</b></label><label htmlFor="">Additional Information</label><label htmlFor="">Reviews [5]</label></div>
            <div className="s1-text"><p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>


            </div>
            <div className="s2-img">
                <img src="src\assets\p2\Group 106 (1).png" alt="" />
                <img src="src\assets\p2\Group 106 (2).png" alt="" style={{ marginLeft: '10%' }} />
            </div>
        </div>
        <div className="p2-s3">
            <h1>Related Products</h1>
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
                    <img src="src\assets\hero\product\4491a0ea43eebd52ea72d60650f31030ec4bf7e6.png"></img>
                    <label>Syltherine</label>
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
                    <img src="src\assets\hero\product\3ed353edbdb0310fb379a6b1828809d2c0652533.png"></img>
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
                    <img src="src\assets\hero\product\208499f37c62fb49f7d4a1a6a5dc5959b40150ed.png"></img>
                    <label>Lolito</label>
                    <p>Luxury big sofa</p>
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
                    <img src="src\assets\hero\product\Image 5.png"></img>
                    <label>Respira</label>
                    <p>Outdoor bar table and stool</p>
                    <b>Rp 500.000</b>
                </div>
            </div>
        </div>
    </div>);
}

export default Page3;
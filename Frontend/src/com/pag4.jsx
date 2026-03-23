import { Bot } from "./pag2";

function Product_Comparison() {
    return (<div className="Product_C">
        <div className="p1-s1">
              <img className="bg-img" src="src\assets\hero\1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg" alt="" />
            <div className="sps1-m">  <img  src="src\assets\nav\logo.png" alt="" />
                <h1>Product Comparison</h1>
                <div>
                   
                    <b>Home </b><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <b> Comparison</b>
                </div>
            </div>
        </div>
        <ProductComparison />
        <Bot/>
    </div>
    );
}


const ProductComparison = () => {
    return (
        <div className="product-comparison">
            {/* Header Section */}
            <div className="header-section">
                <div className="navigation">
                    <h3>Go to Product page for more Products</h3>
                    <button className="view-more-btn">View More</button>
                </div>

                <div className="products-header">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="src\assets\p3\e8e6980ec9e9224b3002d53824688ecee9c882c5.png" alt="Asgaard Sofa" />
                        </div>
                        <h4>Asgaard Sofa</h4>
                        <p className="price">Rs. 250,000.00</p>
                        <div className="rating">
                            <span className="stars">4.7 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                            </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.15703 6.0125L0.800781 6.9375L5.40078 11.4188L4.31328 17.75L10.0008 14.7625V0.25L7.15703 6.0125Z" fill="#FFC700" />
                                </svg>
                            </span>
                            <span className="reviews">206 Review</span>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="src\assets\p3\2ac413c1917ac944454e358f73d0af67e1f1b74e.png" alt="Outdoor Sofa Set" />
                        </div>
                        <h4>Outdoor Sofa Set</h4>
                        <p className="price">Rs. 224,000.00</p>
                        <div className="rating">
                            <span className="stars">4.2 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                            </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z" fill="#FFC700" />
                                </svg>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.15703 6.0125L0.800781 6.9375L5.40078 11.4188L4.31328 17.75L10.0008 14.7625V0.25L7.15703 6.0125Z" fill="#FFC700" />
                                </svg>
                            </span>
                            <span className="reviews">145 Review</span>
                        </div>
                    </div>
                </div>

                <div className="add-product">
                    <label htmlFor="">Add A Product</label>
                    <button className="add-product-btn">
                        Choose a Product
                        <span className="dropdown-arrow"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 9.5L19 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="c-s">
                {/* General Section */}
                <div className="comparison-section">
                    <h3>General</h3>
                    <div className="comparison-table">
                        <div className="comparison-row">
                            <div className="label">Sales Package</div>
                            <div className="value">1 sectional sofa</div>
                            <div className="value">1 Three Seater, 2 Single Seater</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Model Number</div>
                            <div className="value">TFCBLIGRBL6SRHS</div>
                            <div className="value">DTUBLIGRBL568</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Secondary Material</div>
                            <div className="value">Solid Wood</div>
                            <div className="value">Solid Wood</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Configuration</div>
                            <div className="value">L-shaped</div>
                            <div className="value">L-shaped</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Upholstery Material</div>
                            <div className="value">Fabric + Cotton</div>
                            <div className="value">Fabric + Cotton</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Upholstery Color</div>
                            <div className="value">Bright Grey & Lion</div>
                            <div className="value">Bright Grey & Lion</div>
                        </div>
                    </div>
                </div>
                {/* Product Section */}
                <div className="comparison-section">
                    <h3>Product</h3>
                    <div className="comparison-table">
                        <div className="comparison-row">
                            <div className="label">Filling Material</div>
                            <div className="value">Foam</div>
                            <div className="value">Matte</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Finish Type</div>
                            <div className="value">Bright Grey & Lion</div>
                            <div className="value">Bright Grey & Lion</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Adjustable Headrest</div>
                            <div className="value">No</div>
                            <div className="value">Yes</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Maximum Load Capacity</div>
                            <div className="value">280 KG</div>
                            <div className="value">300 KG</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Origin of Manufacture</div>
                            <div className="value">India</div>
                            <div className="value">India</div>
                        </div>
                    </div>
                </div>
                {/* Dimensions Section */}
                <div className="comparison-section">
                    <h3>Dimensions</h3>
                    <div className="comparison-table">
                        <div className="comparison-row">
                            <div className="label">Width</div>
                            <div className="value">265.32 cm</div>
                            <div className="value">265.32 cm</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Height</div>
                            <div className="value">76 cm</div>
                            <div className="value">76 cm</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Depth</div>
                            <div className="value">167.76 cm</div>
                            <div className="value">167.76 cm</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Weight</div>
                            <div className="value">45 KG</div>
                            <div className="value">65 KG</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Seat Height</div>
                            <div className="value">41.52 cm</div>
                            <div className="value">41.52 cm</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Leg Height</div>
                            <div className="value">5.46 cm</div>
                            <div className="value">5.46 cm</div>
                        </div>
                    </div>
                </div>
                {/* Warranty Section */}
                <div className="comparison-section">
                    <h3>Warranty</h3>
                    <div className="comparison-table">
                        <div className="comparison-row">
                            <div className="label">Warranty Summary</div>
                            <div className="value">1 Year Manufacturing Warranty</div>
                            <div className="value">1.2 Year Manufacturing Warranty</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Warranty Service Type</div>
                            <div className="value">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurnitu re.com</div>
                            <div className="value">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Covered in Warranty</div>
                            <div className="value">Warranty Against Manufacturing Defect</div>
                            <div className="value">Warranty of the product is limited to manufacturing defects only.</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Not Covered in Warranty</div>
                            <div className="value">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
                            <div className="value">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
                        </div>
                        <div className="comparison-row">
                            <div className="label">Domestic Warranty</div>
                            <div className="value">1 Year</div>
                            <div className="value">3 Months</div>
                        </div>
                    </div>
                </div>
                {/* Add to Cart Buttons */}
                <div className="cart-buttons">
                    <button className="add-to-cart-btn" style={{visibility:'hidden'}}>Add To Cart</button>
                    <button className="add-to-cart-btn">Add To Cart</button>
                    <button className="add-to-cart-btn">Add To Cart</button>
                </div>
            </div>
          
        </div>
    );
};


export default Product_Comparison;
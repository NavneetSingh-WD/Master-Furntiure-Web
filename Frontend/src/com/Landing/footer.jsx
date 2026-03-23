function Footer() {
    return ( <> 
 


    <div class="footer-container">
      
        <div class="header-section">
            <div class="company-info">
                <h1>Funiro.</h1>
                <div class="company-address">
                    <p>400 University Drive Suite 200 Coral</p>
                    <p>Gables,</p>
                    <p>FL 33134 USA</p>
                </div>
            </div>
            
            <div class="top-navigation">
                <div class="nav-header">Links
                    <div class="nav-column">
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">Shop</a>
                    <a href="#" class="nav-link">About</a>
                    <a href="#" class="nav-link">Contact</a>
                </div>
                </div>
                <div class="nav-header">Help
                             <div class="nav-column">
                    <a href="#" class="nav-link">Payment Options</a>
                    <a href="#" class="nav-link">Returns</a>
                    <a href="#" class="nav-link">Privacy Policies</a>
                </div>
                </div>
                <div class="newsletter-section">
                    <span class="nav-header">Newsletter</span>
                    <input
                        type="email"
                        id="newsletter-email"
                        class="newsletter-input"
                        placeholder="Enter Your Email Address"
                    />
                    <button class="subscribe-button" onclick="handleSubscribe()">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>

     
        <div class="navigation-links">
            <div class="navigation-columns">
          
            </div>
        </div>
        <hr/>
        2023 furino. All rights reverved
    </div></> );
}

export default Footer;
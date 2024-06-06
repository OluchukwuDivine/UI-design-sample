const wholePage= document.querySelector("body");
const getOtpLogin= document.querySelector("#get-otp");

getOtpLogin.addEventListener("click", ()=>{
    wholePage.innerHTML= `
            <div class="car-wash-container">
        <div class="wash-top-div">
            <div class="location-sec">
                <div class="car-icon">
                    <i class="fa fa-car" aria-hidden="true"></i>
                </div>
                <div class="location-details">
                    <p class="disp-flex"><i class="fa fa-map-marker-alt" aria-hidden="true"></i>Sola</p>
                    <p class="small-text">Sola, Ahmedabad, Gujarat, 380060</p>
                </div>
            </div>
            <div class="carwash-sec">
                <div class="wash-sec-det">
                    <div class="left-wash">
                        <p class="crest-wash">
                            <div class="semi-circle">
                            <i class="fa fa-car" aria-hidden="true"></i>
                        </div>
                        <span>crestwash</span>
                        </p>
                        <div class="wash-title">
                            <p class="yellow-text">CAR</p>
                            <p class="white-text">WASH</p>
                        </div>
                        <div class="whole-list">
                            <p class="check-lists"><i class="fa fa-check" aria-hidden="true"></i> Hand Wax</p>
                            <p class="check-lists"><i class="fa fa-check" aria-hidden="true"></i> Interior Cleaning</p>
                            <p class="check-lists"><i class="fa fa-check" aria-hidden="true"></i> Water Spot Removal</p>
                            <p class="check-lists"><i class="fa fa-check" aria-hidden="true"></i> Scratch Removal</p>
                        </div>
                    </div>
                    <div class="right-wash">
                        <div class="sale-tag"><p>35% </p> <span> discount</span></div>
                    </div>
                </div>
            </div>
        </div>


        <div class="main-sec">
            <h3>Packages</h3>
            <div class="cards">

                <div class="car-card">
                    <div class="card-left-item">
                        <img src="images/interior-1.jpg" alt="">
                    </div>
                    <div class="card-right-item">
                        <div class="card-det">
                            <p class="sale-title">Deep All Round Spa</p>
                            <p class="sale-desc">-Take 8 Hours</p>
                            <p class="sale-desc">-1 Month Warranty</p>
                            <p class="sale-desc">-Dry Cleaning Included</p>                        
                            <p class="price-tag">$1,999 <span class="cancelled-price">$2,399</span> <span class="discounted-price">20% OFF</span></p>
                        </div>
                        <div class="black-btn">
                            ADD
                        </div>
                    </div>
                </div>

                <div class="car-card">
                    <div class="card-left-item">
                        <img src="images/interior-2.jpg" alt="">
                    </div>
                    <div class="card-right-item">
                        <div class="card-det">
                            <p class="sale-title">Car Interior Spa</p>
                            <p class="sale-desc">-Take 6 Hours</p>
                            <p class="sale-desc">-Wet Cleaning</p>
                            <p class="sale-desc">-Deep Sanitation</p>                        
                            <p class="price-tag">$1,399 <span class="cancelled-price">$1,499</span> <span class="discounted-price">25% OFF</span></p>
                        </div>
                        <div class="black-btn">
                            ADD
                        </div>
                    </div>
                </div>

                <div class="car-card">
                    <div class="card-left-item">
                        <img src="images/interior-3.jpg" alt="">
                    </div>
                    <div class="card-right-item">
                        <div class="card-det">
                            <p class="sale-title">Car Rubbing and Polishing</p>
                            <p class="sale-desc">-Take 6 Hours</p>
                            <p class="sale-desc">-Ultra Shine Polishing</p>
                            <p class="sale-desc">-Every Six Months Recommended</p>                        
                            <p class="price-tag">$1,699 <span class="cancelled-price">$2,179</span> <span class="discounted-price">18% OFF</span></p>
                        </div>
                        <div class="black-btn">
                            ADD
                        </div>
                    </div>
                </div>

            </div>
        </div>




        <footer class="car-wash-footer">
            <div class="footer-tab home"> 
                <i class="fa fa-home" aria-hidden="true"></i>
                <p>Home</p>
            </div>
            <div class="footer-tab history">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                <p>History</p>
            </div>
            <div class="footer-tab pro">
                <i class="fa fa-chess-queen" aria-hidden="true"></i>
                <p>Pro</p>
            </div>
            <div class="footer-tab account">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <p>My Account</p>
            </div>
        </footer>
    </div>
    `
})
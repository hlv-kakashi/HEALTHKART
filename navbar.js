function navbar(){

return `<div class="container">
            <div class="logo">
                <a href="index.html">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Healthkart.png" alt=""
                    width="250"
                    height="80"
                    >
                </a>
            </div>
            <div class="search-div">
                <img
                src="https://static1.hkrtcdn.com/hknext/static/media/common/header/search-icon-grey-2.svg"
                
                >
                <input type="text" placeholder="Search products here">
            </div>
            <div class="nav-items">
                <div class="item-1">
                    <p>Loyalty Rewards</p>
                </div>
                <p class="border1"></p>
                <ul>
                    <!-- <li> -->
                        <div class="item-2"><p>Customer Support</p></div>
                        <div class="hide">
                        <ul style="width:300px;height:300px">
                        <li style="font-size: 14px; font-weight: bold;"><a   href="">Contact Us</a></li>
                        <li style="font-size: 14px; font-weight: bold;"><a   href="">Helpful Links</a></li>
                        <li style="font-size: 14px;"><a   href="">Chat With US</a></li>
                        <li style="font-size: 14px;"><a   href="">Track Your Order</a></li>
                        <li style="font-size: 14px;"><a   href="">Email Us</a></li>
                        <li style="font-size: 14px;"><a   href="">Return Policy</a></li>
                        <li style="font-size: 14px;"><a   href="">Ask Our Experts</a></li>
                        <li style="font-size: 14px;"><a   href="">FAQ</a>
                        
                        </ul>
                      </div>
                    <!-- </li> -->
                </ul>
                <div class="arrow2">
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/arrow-down.svg" alt="">
                </div>
                <p class="border2"></p>


                <div class="acc">
                    <img
                      src="https://static1.hkrtcdn.com/hknext/static/media/common/header/acc-icon.svg"
                    />
                </div>
                <ul>
                    <!-- <li> -->
                      <div class="item-3" id="go_to_login_page">
                        <p>My Accounts and Orders</p>
                      </div>
                      <div class="hide">
                        <ul style="width:300px;height:300px";>
                        <li style="width:300px;height:50px">
                          <button class="loginbutton" onclick="myLoginFunction()">Login</button>
                        </li>
                        <br>
                        <li style="width:300px;height:50px;margin-top: 10px;">
                          <button class="newuserbutton" onclick="myLoginFunction()">New User? / Sign Up</button>
                        </li>
                        <br>
                        <li>
                          <p style="color:  #00c2c1;">My Account</p>
            
                        </li>
                        <li>
                          <p style="color:  #00c2c1;">Health Profile</p>
                          
                        </li>
                        <li>
                          <p>Orders</p>
                          
                        </li>
                        <li>
                          <p>Diet Plan</p>
                          
                        </li>
                        <li>
                          <p>Wishlist</p>
                          
                        </li>
                        <li>
                          <p>My Consultations</p>
                          
                        </li>
                        <li>
                          <p>Royalty Reward</p>
                          
                        </li>
                        <li>
                          <p>Recommended Product</p>
                          
                        </li>
                        <br>
                        <br>
                        
                        
                      </ul>
                      <!-- </li> -->
                      </ul>
                    </div>
                    <div class="arrow">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/arrow-down.svg" alt="">
                  </div>
                      <p class="border3"></p>
                      <div class="cart">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/cart.svg"
                      id="gotocart" alt=""
                      height="25px"
                      >
                      <p id="cart_quantity">0</p>
               </div>
            </div>
           
        </div>
    </div>

<hr>

    <div id="nav" class="navbar2">
      
        <!-- <li>  -->
          <div class="nav-items-1"><p>Category</p>
            <div class="hide">
          <ul>
            <li><a   href="">Sports Nutrition</a></li>
            <li><a   href="">Vitamins & Supplements</a></li>
            <li><a   href="">Ayurveda & Herbs</a></li>
            <li><a   href="">Health Food & Drinks</a></li>
            <li><a   href="">Fitness</a></li>
            <li><a   href="">Wellness</a></li>
            <li><a   href="">Service Program</a></li>
            
          </ul>
        </div>
        </div>
        <!-- </li> -->
          <!-- <li>  -->
            <div class="nav-items-2"><p>Brand</p> 
              <div class="hide">

            <ul>
              <li><a  href="">MuscleBlaze <br>     </a></li>
              <li><a  href="">TrueBasics</a></li>
              <li><a  href="">JustHer</a></li>
              <li><a  href="">Nouriza</a></li>
              <li><a  href="">Gritzo</a></li>
              <li><a  href="">bGREEN</a></li>
              <li><a  href="">GNC</a></li>
              <li><a  href="">NOW</a></li>
              <li><a  href="">Healthvit</a></li>
              <li><a  href="">Yoga Bar</a></li>
              <li><a  href="">Amway</a></li>
              <li><a  href="">Natures Velvet</a></li>
              
            </ul>
          </div>
          </div>
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-3"><p>Gender</p>
              <div class="hide">
            <ul style="width:200px;height:100px";>
              <li><a   href=""> <img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/man-2.svg"></a></li>
              <li><a   href=""><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/woman-2.svg"></a></li>
      
            </ul>
          </div>
          </div>
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-4"><p>Goal</p>
              <div class="hide">
            <ul style="width:700px;height:300px; ";>
              <li ><a   href=""><img style="width:80px;height:80px"; src="https://img6.hkrtcdn.com/14784/normal_1478355_o.png"></a></li>
              <li><a   href=""><img style="width:80px;height:80px"; src="https://img8.hkrtcdn.com/14784/normal_1478357_o.png"></a></li>
              <li><a   href=""><img style="width:80px;height:80px"; src="https://img10.hkrtcdn.com/14784/normal_1478359_o.png"></a></li>
              <li><a   href=""><img style="width:80px;height:80px"; src="https://img2.hkrtcdn.com/14784/normal_1478361_o.png"></a></li>
              <li><a   href=""><img style="width:80px;height:80px"; src="https://img4.hkrtcdn.com/14784/normal_1478363_o.png"></a></li>
              
            </ul>
          </div>
          </div>
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-5"><p>Bestsellers</p>
              <div class="hide">
            <ul>
              <li><a   href="">Sport Nutrition</a></li>
              <li><a   href="">Protein Poweder</a></li>
              <li><a   href="">Whey Proteins</a></li>
              <li><a   href="">Mass Gainer</a></li>
              <li><a   href="">Fat Burners</a></li>
              <li><a   href="">Pre WorkOut</a></li>
              <li><a   href="">Protein Bars</a></li>
              <li><a   href="">Weight Gainer</a></li>
              <li><a   href="">Carb Blends</a></li>
              <li><a   href="">Other Supports</a></li>
            </ul>
          </div>
        </div>
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-6"><p>Deals</p>
              <div class="hide">
            <ul style="width:700px;height:300px ";>
              <li><a   href=""><img style="width:120px;height:60px"; src="https://img4.hkrtcdn.com/14768/normal_1476713_o.png"></a></li>
              <li><a   href=""><img style="width:120px;height:60px"; src="https://img8.hkrtcdn.com/14768/normal_1476717_o.png"></a></li>
              <li><a   href=""><img style="width:120px;height:60px"; src="https://img2.hkrtcdn.com/14768/normal_1476721_o.png"></a></li>
              <li><a   href=""><img style="width:120px;height:60px"; src="https://img10.hkrtcdn.com/14768/normal_1476719_o.png"></a></li>
              <li><a   href=""><img style="width:120px;height:60px"; src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/crazy.svg"></a></li>
            </ul>
          </div>
        </div>
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-7"><p><a href="giftcard.html">Gift Card</a></p></div>
  
          <!-- </li> -->
          <!-- <li> -->
            <div class="nav-items-8"><p><a href="blog.html">Blog, Videos & More</a></p></div>
          <!-- </li> -->
        </ul>
     
  
      <div class="rightPart">
        <div class="consult">
          <img
            class="video-icon"
            src="	https://static1.hkrtcdn.com/hknext/static/media/common/header/hk-consult.svg"
            height="13px"
          />
          <p class="margintop">HK Consult</p>
        </div>
        <div class="findStore">
          <img
            class="find-icon"
            src="https://static1.hkrtcdn.com/hknext/static/media/common/header/location-pin.svg"
          />
          <p class="margintop"><a href="stores.html">Find a Store</a></p>
        </div>
      </div>
    </div>


<hr></hr>
`

}

export {navbar}

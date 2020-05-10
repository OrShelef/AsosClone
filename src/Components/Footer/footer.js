import React from 'react'
import classes from './footer.module.css'

const footer = props => {

    return (
        <div className={classes.main}>
            <div className={classes.buttons}>
                <div className="row">
                <a  href="#">
                     <i style={{color:'blue'}} className="fab fa-facebook"></i>
                </a>
                <a  style={{color:'purple'}} href="#">
                     <i className="fab fa-instagram"></i>
                </a>
                <a  href="#">
                     <i  style={{color:'#fbc02d'}} className="fab fa-snapchat"></i>
                </a>
                </div>
                <span/>
                <div className="row">
                    <img src="https://images.asos-media.com/navigation/visa-png"/>
                    <img src="https://images.asos-media.com/navigation/mastercard-png"/>
                    <img src="https://images.asos-media.com/navigation/pay-pal-png"/>
                    <img src="https://images.asos-media.com/navigation/american-express-png"/>
                    <img src="https://images.asos-media.com/navigation/visa-electron-png"/>
                </div>
            </div>
            <div className={classes.footer_info}>
            <div className="col">
                <h1>HELP & INFORMATION</h1>
                <a>Help</a>
                <a>Track Order</a>
                <a>Delivery & Returns</a>
                <a>10% Student Discount</a>
            </div>
            <div className="col">
                <h1>ABOUT ASOS</h1>
                <a>About Us</a>
                <a>Careers at ASOS</a>
                <a>Corporate Responsibility</a>
                <a>Investors Site</a>
            </div>
            <div className="col">
                <h1>MORE FROM ASOS</h1>
                <a>Mobile and ASOS Apps</a>
                <a>ASOS Marketplace</a>
                <a>Gift vouchers</a>
          
            </div>

            <div className="col">
                <h1>SHOPPING FROM:</h1>
               <a  className={`row ${classes.lang}`}>
                 <p>You're in</p>
                 <img src="https://assets.asosservices.com/storesa/images/flags/il.png"/>
                 <span/>
                 <h1>Change</h1>
               </a>
          
            </div>


           


            </div>
            <div className={`row ${classes.footer_terms}`}>
                <p>© 2020 ASOS</p>
              
                <div className="row">
                    <a href="#">Privacy & Cookies</a>
                    <a href="#">Ts&Cs</a>
                    <a href="#">Accessibility</a>
                </div>
            </div>
        </div>
    );
    
    
}

export default footer;
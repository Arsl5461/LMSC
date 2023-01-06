import React from 'react'
import "../pages/footer.css"
import {Link} from "react-router-dom"
function Footer() {
    return (
      <>

<div className="footer">
  <div className="inner-footer">

    <div className="footer-items">
      <h1>ISLAMABAD LABORTORY</h1>
      <p>The information on this site should not be used as a substitute for professional medical care or advice. Contact a health care provider if you have questions about your health..</p>
    </div>

    <div className="footer-items">
      <h3>Quick Links</h3>
  
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/"><li>Appointmet</li></Link>
          <Link to="/contact-us"><li>Contact Us</li></Link>
          <Link to="/about-us"><li>About Us</li></Link>
        </ul>
    </div>


        <div className="footer-items">
      <h3>Contact us</h3>
    
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      
        <div className="social-media">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  
  <div className="footer-bottom">
    Copyright &copy; ISLAMABAD LABORTORY 2020.
  </div>
</div>
  


      </>
  )
  }
  export default Footer
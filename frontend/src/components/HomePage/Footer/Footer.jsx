import React from 'react'
import {Box} from "@chakra-ui/react"
import "./Footer.css"
import cardImg from "../../../assets/pay_by_cards.webp"
const Footer = () => {
  return (
    <div>
      <Box className="footerWrapper">
        <Box className="footerBox">
            <Box className="oneF">
                <h1>About Us</h1>
                <p style={{paddingRight:"10px", color:"#ffffff", textJustify:"auto", marginBottom:"30px"}}>India's most convenient online grocery channel Buyerapp Fresh and Smart makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your home; office, or on the move. We offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store.</p>
                <h1>Payment Options</h1>
                <img src={cardImg} alt=""  style={{width:"70%",marginBottom: "20px"}}/>
            </Box>
            <Box className="twoF">
                <h1>Our Company</h1>
                <p style={{color:"#ffffff"}}>About Us</p>
                <p style={{color:"#ffffff"}}>Contact Us</p>
            </Box>
            <Box className="threeF">
                <h1>Top Categories</h1>
                <p style={{color:"#ffffff"}}>Grocery</p>
            </Box>
            <Box className="fourF">
                <h1>Policies & Info</h1>
                <p style={{color:"#ffffff"}}>Privacy Policy</p>
                <p style={{color:"#ffffff"}}>Terms & Condition</p>
                <p style={{color:"#ffffff"}}>Shipping Policy</p>
                <p style={{color:"#ffffff", marginBottom:"30px"}}>Return & Refund</p>
                <h1>Support</h1>
                <p style={{color:"#ffffff"}}>For Help, send an email to</p>
                <p style={{color:"#ffffff" , marginBottom:"10px"}}>customercare@spritsvilla.com</p>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Footer

import React from "react";
import "./home.css";

import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import Crousel from "../../Components/Crousel/Crousel";
import Crousel from "../components/Crousel/Crousel"
import SoloImageCrousel from "../components/Crousel/SoloImageCrousel";
import { useDispatch } from "react-redux";
import { getCartData } from "../Api";
import { allCartData } from "../Redux/Cart/CartAction";
import CartItems from "../components/CartItems";
let arr = [
  "https://cdn.plotch.io/image/upload/C/V/1671109983_Mi5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671109989_My5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671109994_NC5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671109999_NS5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671110006_Ni5wbmc=.png",
];

let largeArr = [
  "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
];

const HomePage = () => {
 
  const navigate = useNavigate();
  return (
    <div className="home_page" >
      <Box textAlign="center" >
        <Heading className="emptyElement" as="h4" size="md" style={{fontFamily:"Poppins"}}>
          Shop By Category
        </Heading>
      </Box>
      <Crousel arr={arr} />
      <SoloImageCrousel arr={largeArr} />
      <CartItems/>
      <Box className="black_bcg">
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1660916598_MS5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1660916607_Mi5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1660916612_My5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1660916617_NC5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1660916629_NS5wbmc=.png"
          onClick={() => navigate("/products")}
        />
      </Box>
      <Box className="four_large_img">
        <img src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png"
          onClick={() => navigate("/products")}
        />
        <img
          src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png"
          onClick={() => navigate("/products")}
        />
      </Box>
    </div>
  );
};

export default HomePage;

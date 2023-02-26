import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { allCartData, updateCartTotalPrice } from "../Redux/Cart/CartAction";
import { store } from "../Redux/store";
import { PhoneIcon, AddIcon, WarningIcon, StarIcon } from '@chakra-ui/icons'
import CartProduct from "../components/CartProduct";

// The default icon size is 1em (16px)

import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartManager);
  const { isAuth } = useSelector((store) => store.authState);
const nav=useNavigate()
  let total=0
  
  console.log(isAuth)
    if(cart.length==0){
      total=0
    }else{
      cart.forEach(({price,quantity})=> total=total+price*quantity )
    }
 

  const getData = async () => {
    let data = await fetch(`https://cute-tan-magpie-kilt.cyclic.app/cart`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    let res = await data.json();

    console.log(res)
      dispatch(allCartData(res));
    
  };
const makePay=()=>{
  dispatch(updateCartTotalPrice(total))
  nav("/payment")

}
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      
      <Box style={{ margin: "auto", marginTop: 20, textAlign: "center", width: "90%" }}>
        <Heading style={{ fontSize: 20 }}>Total Items :{cart.length}</Heading></Box>
      <Flex style={{

        justifyContent: "space-around",
        width: "90%",
        margin: "auto",
        alignItems: "center",
        marginTop: 30, fontWeight: "bold", fontSize: 18, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: 20, borderRadius: 20
      }}>
        <Text>Item Details</Text>
        <Text marginLeft={"20%"}>Quantity </Text>
        <Text>₹ Price {"->"}</Text>
      </Flex>
{cart&&cart.map((el)=><CartProduct key={el._id} {...el} />)}
<Flex
      padding={5}
      borderRadius={20}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        style={{

          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
          alignItems: "center",
          marginTop: 10, fontWeight: "bold", fontSize: 18
        }}
      >
        <Flex style={{ width: "15%", justifyContent: "space-between", }}>
          <Text> Home</Text>
          <Text>My Cart</Text>
        </Flex>
        <Flex style={{ width: "50%" }}>
          <Text style={{ marginTop: 10 }}>Subtotal : ₹ {total} </Text>
          <Button 
          onClick={()=>makePay()}
          style={{
            justifyContent: "space-around",

            margin: "auto",
            alignItems: "center", backgroundColor: "#902935", color: "white", width: "60%"
          }}>
            Place Order
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CartPage;

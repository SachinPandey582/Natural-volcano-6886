import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Heading, Box, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { allCartData, updateCartTotalPrice } from "../Redux/Cart/CartAction";
import { store } from "../Redux/store";
import { PhoneIcon, AddIcon, WarningIcon, StarIcon } from "@chakra-ui/icons";
import CartProduct from "../components/CartProduct";

// The default icon size is 1em (16px)

import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import CartEmptyBanner from "../components/CartEmptyBanner";
import { getCartData } from "../Api";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartManager);
  const { isAuth } = useSelector((store) => store.authState);
  const [load, setLoad] = React.useState(false);
  const nav = useNavigate();
  let total = 0;

  cart &&
    cart.length > 0 &&
    cart.forEach(({ price, quantity }) => (total = total + price * quantity));
  const getData = async () => {
   let res=await getCartData()

    dispatch(allCartData(res));
  };
  const makePay = () => {
    dispatch(updateCartTotalPrice(total));
    nav("/payment");
  };
  console.log(load);
  React.useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      getData();

      setLoad(false);
    }, 1000);
  }, []);


  if(cart.length===0){
    return <CartEmptyBanner/>
  }
  return (
    <>
      <Heading
        width={["50%", "50%", "50%", "20%"]}
        p={3}
        m="auto"
        mt={5}
        borderRadius="10px"
        textAlign={"center"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        backgroundColor="#902935"
        color="white"
        style={{ fontSize: 19 }}
      >
        Total Items {cart.length || 0}
      </Heading>
      <Flex
        display={["none", "flex"]}
        style={{
          justifyContent: "space-around",
          width: "90%",
          fontFamily:"Poppins", margin: "auto",
          alignItems: "center",
           marginTop: 30,
          fontWeight: "bold",
          fontSize: 17,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text fontFamily="Poppins">Item Details</Text>
        <Text fontFamily="Poppins" marginLeft={"20%"}>Quantity </Text>
        <Text>₹ Price </Text>
      </Flex>

     {cart.length>0? <SimpleGrid
        columns={[1, 2]}
        gap={5}
        padding={5}
        borderRadius={20}
        fontFamily="Poppins" margin={"auto"}
        style={{
          justifyContent: "space-between",
          width: "90%",
          fontFamily:"Poppins" ,margin: "auto",
          alignItems: "center",
          fontFamily:"Poppins" ,marginTop: 10,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        <SimpleGrid
         display={["none","grid"]}
          borderRadius={20}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          fontFamily="Poppins" margin={"auto"}
          p={5}
          columns={[1, 1, 2, 2, 2]}
          style={{ width: "80%" }}
        >
          <Button
            onClick={() => nav("/")}
            style={{
              justifyContent: "space-around",
              width: "100%",
              fontFamily:"Poppins" ,margin: "auto",
              alignItems: "center",
              backgroundColor: "#902935",
              color: "white",
            }}
          >
            Home
          </Button>
          <Text fontFamily="Poppins" margin={"auto"} mt={[5, 2]} color="red">
            My Cart
          </Text>
        </SimpleGrid>

        <SimpleGrid
          p={5}
          borderRadius={20}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          m={5}
          fontFamily="Poppins" margin={"auto"}
          columns={[1, 1, 1, 2, 2]}
          style={{ width: "80%" }}
        >
          <Text fontSize={18} fontFamily="Poppins" margin={"auto"} mb={[5, 2]}>
            Subtotal ₹ {total}{" "}
          </Text>
          <Button
            onClick={() => makePay()}
            style={{
              justifyContent: "space-around",
              width: "100%",
              fontFamily:"Poppins", margin: "auto",
              alignItems: "center",
              backgroundColor: "#902935",
              color: "white",
            }}
          >
            Place Order
          </Button>
        </SimpleGrid>
      </SimpleGrid>:null}
      <SimpleGrid gap={5} width={"90%"} fontFamily="Poppins" margin="auto">
        {load ? <Loader /> : null}
        {load ? (
          <Loader />
        ) : (
          cart &&
          cart.length > 0 &&
          cart.map((el) => <CartProduct key={el._id} {...el} />)
        )}
      </SimpleGrid>
      {cart.length>0? <SimpleGrid
        columns={[1, 2]}
        gap={5}
        padding={5}
        borderRadius={20}
        fontFamily="Poppins" margin={"auto"}
        style={{
          justifyContent: "space-between",
          width: "90%",
          fontFamily:"Poppins" ,margin: "auto",
          alignItems: "center",
          fontFamily:"Poppins" ,marginTop: 10,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        <SimpleGrid
         display={["none","grid"]}
          borderRadius={20}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          fontFamily="Poppins" margin={"auto"}
          p={5}
          columns={[1, 1, 2, 2, 2]}
          style={{ width: "80%" }}
        >
          <Button
            onClick={() => nav("/")}
            style={{
              justifyContent: "space-around",
              width: "100%",
              fontFamily:"Poppins" ,margin: "auto",
              alignItems: "center",
              backgroundColor: "#902935",
              color: "white",
            }}
          >
            Home
          </Button>
          <Text fontFamily="Poppins" margin={"auto"} mt={[5, 2]} color="red">
            My Cart
          </Text>
        </SimpleGrid>

        <SimpleGrid
          p={5}
          borderRadius={20}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
          m={5}
          fontFamily="Poppins" margin={"auto"}
          columns={[1, 1, 1, 2, 2]}
          style={{ width: "80%" }}
        >
          <Text fontSize={18} fontFamily="Poppins" margin={"auto"} mb={[5, 2]}>
            Subtotal ₹ {total}{" "}
          </Text>
          <Button
            onClick={() => makePay()}
            style={{
              justifyContent: "space-around",
              width: "100%",
              fontFamily:"Poppins", margin: "auto",
              alignItems: "center",
              backgroundColor: "#902935",
              color: "white",
            }}
          >
            Place Order
          </Button>
        </SimpleGrid>
      </SimpleGrid>:null}
    </>
  );
};

export default CartPage;

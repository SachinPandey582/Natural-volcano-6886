import React from "react";
import {
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductDescription from "../components/ProductDescription";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Cart/CartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProductPage = () => {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  // // http://localhost:3000/product/63f8ab5ec5a8f7ce168d493a

  const getData = async () => {
    try {
      let data = await fetch(
        `https://cute-tan-magpie-kilt.cyclic.app/products/${id}`
      );
      let res = await data.json();
      setProduct(res[0]);
    } catch (error) {
      console.log("error ", error);
    }
  };
  const notify = () =>
    toast.success("🦄 The Product Added Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const addToCart = async () => {
    notify();
    product.des = Math.random() * 342434892398342;
    const { title, category, img, price, quantity } = product;
    let obj = { title, category, img, price, quantity };
    console.log(obj);
    console.log(product);
    dispatch(addItemToCart(product));
    console.log(localStorage.getItem("token"));
    try {
      let data = await fetch(`https://cute-tan-magpie-kilt.cyclic.app/cart`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      let res = await data.json();
      console.log(res);
    } catch (error) {
      console.log("error ", error);
    }
  };
  React.useEffect(() => {
    getData();
  }, [id]);
  return (
    <>
      <SimpleGrid
        borderRadius={18}
        columns={[1, 1, 1, 2]}
        gap={5}
        padding={5}
        width={"90%"}
        margin="auto"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      >
        <Image
        width={["auto",400]}height={["auto",400]}
          padding={5}
          boxShadow={
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
          }
          margin="auto"
          borderRadius={18}
          src={product.img}
        />
        <Box>
          <Text
            noOfLines={[2, 2, 2, 2]}
            fontWeight={"bold"}
            fontFamily="Poppins"
            fontSize="25px"
          >
            {product.title}
          </Text>
          <Text
            marginTop={5}
            fontWeight={"bold"}
            fontFamily="Poppins"
            fontSize="15px"
            color="#636065"
          >
            From Sprits Villa Solutions
          </Text>
          <Text
            marginTop={2}
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontFamily="Poppins"
            fontSize="35px"
            color="#902935"
          >
            ₹ {product.price}
          </Text>
          <Text
            marginTop={2}
            fontWeight={"bold"}
            fontFamily="Poppins"
            fontSize="15px"
            color="#902935"
          >
            Inclusive of all taxes
          </Text>
          <Flex
            borderRadius={15}
            justifyContent="space-between"
            p={3}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          >
            <Box marginTop={5}>
              <Text
                color="#636065"
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="17px"
              >
                Details
              </Text>
              <Text
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                Return Window
              </Text>
              <Text
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                3 Days to 0 Minutes
              </Text>
            </Box>
            <Box marginTop={5}>
              <Text
                color="#902935"
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="17px"
              >
                More
              </Text>
              <Text
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                Time To Ship
              </Text>
              <Text
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                1 day 0 minutes
              </Text>
            </Box>
          </Flex>
          <Flex
            borderRadius={15}
            justifyContent="space-between"
            p={3}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          >
            <Box marginTop={5}>
              <Text
                color="#902935"
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="17px"
              >
                Returnable
              </Text>
              <Text
                color="#636065"
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                Yes
              </Text>
            </Box>
            <Box marginTop={5}>
              <Text
                color="#902935"
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="17px"
              >
                Cancellable
              </Text>
              <Text
                color="#636065"
                marginTop={1}
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize="14px"
              >
                Yes
              </Text>
            </Box>
          </Flex>
          <SimpleGrid margin="auto" marginTop={5} gap={10}>
            <Button
              onClick={() => addToCart()}
              fontSize={16}
              fontFamily="Poppins"
              p={6}
              width={"100%"}
              style={{
                justifyContent: "space-around",

                margin: "auto",
                alignItems: "center",
                backgroundColor: "#902935",
                color: "white",
              }}
            >
              ADD TO CART
            </Button>
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      <Text
        p={2}
        borderRadius={5}
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
        textAlign={"center"}
        marginTop={5}
        fontStyle={"italic"}
        fontWeight={"bold"}
        fontFamily="Poppins"
        fontSize="30px"
        color="#902935"
      >
        Product Specifications
      </Text>
      <ProductDescription />
    </>
  );
};

export default SingleProductPage;

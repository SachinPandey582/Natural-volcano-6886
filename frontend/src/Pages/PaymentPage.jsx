import React, { useState } from "react";
import {
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PaymentPage = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((store) => store.cartManager);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const notify = () =>
    toast.success("you have successfully purchased an item", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you can handle the payment submission logic

    
    console.log("deletet")
    let data = await fetch(`https://cute-tan-magpie-kilt.cyclic.app/cart/alldelete`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    
    
    notify();
    navigate("/");
  };

  return (
    <Stack spacing="6" maxW="xl" mx="auto">
      <Heading as={"xl"} textAlign="center">
        Payment Details
      </Heading>
      <Heading textAlign="center">TotalPrice={totalPrice}</Heading>

      <FormControl id="card-number" isRequired>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </FormControl>
      <Stack direction={{ base: "column", md: "row" }} spacing="6">
        <FormControl id="expiration-date" isRequired>
          <FormLabel>Expiration Date</FormLabel>
          <Input
            type="text"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value)}
            placeholder="MM/YY"
          />
        </FormControl>
        <FormControl id="cvv" isRequired>
          <FormLabel>CVV</FormLabel>
          <Input
            type="password"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            placeholder="XXX"
          />
        </FormControl>
      </Stack>
      <Button colorScheme="teal" size="lg" type="submit" onClick={handleSubmit}>
        Submit Payment
      </Button>
    </Stack>
  );
};

export default PaymentPage;

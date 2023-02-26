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

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the payment submission logic
    alert("you have successfully purchased an item")
navigate("/")
    console.log("Submitting payment:", { cardNumber, expirationDate, cvv });
  };

  return (
    <Stack spacing="6" maxW="xl" mx="auto">
      <Heading textAlign="center">Payment Details</Heading>
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
      <Button
        colorScheme="teal"
        size="lg"
        type="submit"
        onClick={handleSubmit}
      >
        Submit Payment
      </Button>
    </Stack>
  );
};

export default PaymentPage;
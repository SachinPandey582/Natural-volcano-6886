import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function CartEmptyBanner() {
  return (
    <Box m="auto" mt={15} textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading size={["xl", "2xl"]} mt={6} mb={2}>
        Your Cart is Empty 🥺
      </Heading>

      <Link to="/products">
        <Button mt={5} bg="#902935" color="white" variant="solid">
          Shop Now
        </Button>
      </Link>
    </Box>
  );
}

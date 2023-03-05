import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <Box mt={15} textAlign="center" py={10} px={6}>
      <Heading  size="4xl" mt={6} mb={2}>
        404 
      </Heading>
      <Text fontSize="23px" mt={3} mb={2}>
        Page Not Found ☹️
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Link to="/">
        {" "}
        <Button
        mt={5}
       
          bgGradient="linear(to-r, #902935, #902935, #902935)"
          color="white"
          variant="solid"
        >
          Go To Home
        </Button>
      </Link>
    </Box>
  );
}

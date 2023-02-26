import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [title, settitle] = useState("");
  

  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [quantity, setquantity] = useState("");
  const [category, setcategory] = useState("");
  const submitTheData = () => {
    const payload = {
      title,
      price,
      img,
      quantity,
      category,
    };
    fetch(process.env.api_url`/products`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //there there when i click on Submit i want to make the data false in addthedata part
    alert("the data has been added to the main page ")
  };

  return (
    <div style={{border:"1 px solid" ,backgroundColor:"pink" ,padding:"10%"}}>

    <form style={{ display: "block", margin: "auto"  ,marginTop:"1%" }} onSubmit={submitTheData}>
      <Input 
      
        style={{ width: "100%", margin: "auto" ,border:"2px solid red"  }}
        placeholder="Enter the title here "
        value={title}
        onChange={(e) => settitle(e.target.value)}
        />
      <br />
      <br />
 
      <Input
        style={{ width: "100%", margin: "auto" ,border:"2px solid red" }}
        placeholder="Enter the Price here "
        value={price}
        onChange={(e) => setprice(e.target.value)}
        />
      <br />
      <br />
     
      <Input
        style={{ width: "100%", margin: "auto" ,border:"2px solid red" }}
        placeholder="Enter the quantity here "
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        />
      <br />
      <br />
     
      <Input
        style={{ width: "100%", margin: "auto" ,border:"2px solid red" }}
        placeholder="Enter the category here "
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        />
      <br />
      <br />
      
      <Input
        style={{ width: "100%", margin: "auto" ,border:"2px solid red" }}
        placeholder="Enter the img here "
        value={img}
        onChange={(e) => setimg(e.target.value)}
        />
      <br />
      <br/>
      <Input style={{ width: "50%", backgroundColor:"green", margin: "auto" }} type="Submit" />
    </form>
        </div>
  );
}

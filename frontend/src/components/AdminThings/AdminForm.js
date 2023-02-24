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
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignupCard() {

    const [title,settitle]=useState("")

    const [price,setprice]=useState("")
    const [img,setimg]=useState("")
    const [quantity,setquantity]=useState("")
    const [category,setcategory]=useState("")
    const submitTheData =()=>{
        const payload={
            title,
            price,
            img,
            quantity,
            category
        }
fetch(`http://localhost:8080/products`,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
"Content-Type":"application/json"
    }

})  .then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.log(err))  
//there there when i click on Submit i want to make the data false in addthedata part
    }
  
    return (
     <form style={{display:"block" ,margin:"auto"}} onSubmit={submitTheData}>

        <Input style={{width:"30%" ,margin:"auto"}}  placeholder='Enter the title here ' value={title} onChange={(e)=>settitle(e.target.value)}/>
        <br/>
        <Input style={{width:"30%" ,margin:"auto"}}  placeholder='Enter the Price here ' value={price} onChange={(e)=>setprice(e.target.value)}/>
        <br/>
        <Input style={{width:"30%" ,margin:"auto"}} placeholder='Enter the quantity here ' value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
        <br/>
        <Input style={{width:"30%" ,margin:"auto"}}  placeholder='Enter the category here ' value={category} onChange={(e)=>setcategory(e.target.value)}/>
        <br/>
        <Input  style={{width:"30%" ,margin:"auto"}} placeholder='Enter the img here ' value={img} onChange={(e)=>setimg(e.target.value)}/>
        <br/>
        <Input style={{width:"30%" ,margin:"auto"}} type="Submit"  />
     </form>
    );
  }
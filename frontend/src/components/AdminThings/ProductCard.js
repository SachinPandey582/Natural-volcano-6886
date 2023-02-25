import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Button,
    Input,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',

    rating: 4.2,
    numReviews: 34,
  };
  
 
  
  function Rating({ rating, numReviews }) {

    return (
      <Box d="flex" alignItems="center" display="flex">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart(payload) {

    const [counter,setcounter]=useState(0)
    const {imageURL,name,price ,id}=payload
    const [Newtitle,settitle]=useState("")

     const [Newprice,setprice]=useState("")
     const [Newimg,setimg]=useState("")
     const [Newquantity,setquantity]=useState("")
     const [Newcategory,setcategory]=useState("")
    const EditTheData=(id)=>{
        const datatochange={

title:Newtitle,
price:Newprice,
img:Newimg,
category:Newcategory,
quantity:Newquantity, 

        }
        console.log("this is working the edit ",id)
        fetch(`http://localhost:8080/products/${id}?role=admin&pass=8765`, { 
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(
          datatochange
        )
      }).then(res=>res.json())
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

    }
  
    const DeleteTheData=(id)=>{
        console.log('this is working the delete',id)
        //i am getting the id can you check there 
        
        fetch(`http://localhost:8080/products/${id}?role=admin&pass=8765`,{
         method:"DELETE"
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
          setcounter(counter+1) 
     }

     
     const NewsubmitTheData=()=>{

     }
    useEffect(()=>{

    },[counter])
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={imageURL}
            alt={`Picture of ${name}`}
            roundedTop="md"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.numReviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>

            <Box display="flex" justifyContent="space-between"> 
                

                <Popover>
  <PopoverTrigger>
  <Button >Edit</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Change the Details</PopoverHeader>
    <PopoverBody>
        <form style={{display:"block" ,margin:"auto"}} onSubmit={()=>EditTheData(id)}>

        <Input  placeholder='Enter the title here ' value={Newtitle} onChange={(e)=>settitle(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the Price here ' value={Newprice} onChange={(e)=>setprice(e.target.value)}/>
        <br/>
        <Input placeholder='Enter the quantity here ' value={Newquantity} onChange={(e)=>setquantity(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the category here ' value={Newcategory} onChange={(e)=>setcategory(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the img here ' value={Newimg} onChange={(e)=>setimg(e.target.value)}/>
        <br/>
       
       

        <PopoverTrigger>
        <Input type="Submit"  />
  </PopoverTrigger>


     </form>
        
    </PopoverBody>
  </PopoverContent>
</Popover>



                <Button onClick={()=>DeleteTheData(id)} >Delete</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;
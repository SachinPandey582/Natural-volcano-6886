import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { deleteItemFromCart, updateItemFromCart } from '../Redux/Cart/CartAction'

const CartProduct = ({price,title,quantity,_id,img}) => {

  const dispatch=useDispatch()

  const increaseQuantity=async(_id)=>{
  console.log(_id)
  dispatch(updateItemFromCart({_id:_id,quantity:quantity+1}))
  let data=await fetch(`http://localhost:8080/cart/${_id}`,{
    method:"PATCH",
    headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"},
    body:JSON.stringify({_id:_id,quantity:quantity+1})
  })
  let res=await data.json()
  console.log(res)
  }
  const decreaseQuantity=async(_id)=>{
    console.log(_id)
    dispatch(updateItemFromCart({_id:_id,quantity:quantity-1}))
    let data=await fetch(`http://localhost:8080/cart/${_id}`,{
    method:"PATCH",
    headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"},
    body:JSON.stringify({_id:_id,quantity:quantity-1})
  })
  let res=await data.json()
  console.log(res)
    }

    const deleteProduct=async(_id)=>{
      dispatch(deleteItemFromCart(_id))
      let data=await fetch(`http://localhost:8080/cart/${_id}`,{
        method:"DELETE",
        headers:{Authorization:localStorage.getItem("token")}
      
      })
      let res=await data.json()
      console.log(res)
    }
  return (
    <>
      <SimpleGrid gap={10} columns={[1, 1, 2, 2]} style={{

        justifyContent: "space-between",
        width: "90%",
        margin: "auto",
        alignItems: "center",
        marginTop: 30, fontWeight: "bold", fontSize: 18,
        padding: 20, boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 10
        , borderTopLeftRadius: 50,
        borderBottomLeftRadius: 10
      }}>
        <SimpleGrid style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "20px 10px 20px 10px",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 50
          , borderTopLeftRadius: 50,
          borderBottomLeftRadius: 10
        }}
          columns={[1, 1, 1, 2]} >
          <Box justifyContent="space-around" textAlign={"center"} >
            <Image width={200} heigth={200} margin={"auto"} borderRadius={20}
              src={img} />

          </Box>

          <SimpleGrid>
            <Text padding={4} fontSize='15px' marginLeft={3} noOfLines={[2]}>
            {title}</Text>
            <Button onClick={()=>deleteProduct(_id)} margin="auto" width={"20%"} marginTop={"5%"} backgroundColor="#902935"><DeleteIcon color="white" /></Button>

          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columnGap={10} style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px 10px 20px 10px",
          borderTopRightRadius: 50,
          borderBottomRightRadius: 10
          , borderTopLeftRadius: 10,
          borderBottomLeftRadius: 50
        }}
          justifyContent={"space-between"} columns={[1, 2, 1, 2]} >
          <Flex padding={[4, 6, 7, 10]} color={"white"} justifyContent={"space-around"} textAlign={"center"}

            margin="auto" fontSize='20px'

          >
            <Button onClick={()=>increaseQuantity(_id)} marginLeft={2} backgroundColor={"#902935"} >
              +
            </Button>
            <Button marginLeft={2} backgroundColor={"#902935"}>
              {quantity}
            </Button>
            <Button onClick={()=>decreaseQuantity(_id)} marginLeft={2} backgroundColor={"#902935"}>
              -
            </Button>

          </Flex>
          <Text padding={[4, 6, 7, 10]} color={"black"} justifyContent={"space-around"} textAlign={"center"}

            margin="auto" fontSize='20px'>
            Price : ₹ {quantity*price}

          </Text>


        </SimpleGrid>
      </SimpleGrid>
    </>
  )
}

export default CartProduct
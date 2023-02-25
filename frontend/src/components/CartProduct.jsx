import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const CartProduct = () => {
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
            <Image margin={"auto"} borderRadius={20}
src="https://cdn.plotch.io/image/upload/w_118,h_118/C/V/PLOmPKcSpC1668584370_6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b.jpg" />
 
          </Box>
         
          <SimpleGrid>
           <Text padding={4} fontSize='15px' marginLeft={3} noOfLines={[2]}>
             LADWA 12 Color Wooden Dominos Blocks Set Kids Game Educational Play Toygfgfgfdg</Text>
             <Button margin="auto" width={"20%"} marginTop={"5%"}  backgroundColor="#902935"><DeleteIcon color="white"/></Button>

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
            <Button marginLeft={2} backgroundColor={"#902935"} >
              +
            </Button>
            <Button marginLeft={2} backgroundColor={"#902935"}>
              4
            </Button>
            <Button marginLeft={2} backgroundColor={"#902935"}>
              -
            </Button>

          </Flex>
          <Text padding={[4, 6, 7, 10]} color={"black"} justifyContent={"space-around"} textAlign={"center"}

            margin="auto" fontSize='20px'>
            Price : ₹ 5000

          </Text>


        </SimpleGrid>
      </SimpleGrid>
    </>
  )
}

export default CartProduct
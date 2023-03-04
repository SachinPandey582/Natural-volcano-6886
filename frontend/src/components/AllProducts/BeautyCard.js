import React, { useState } from 'react'

import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import {
    Divider,
    ButtonGroup,
    Heading,
    Stack,
    Image,
    Text,
    Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const ProductCard = ({img,title,price,_id}) => {
    const [cart,setCart]=useState("Show More")
    const navigate = useNavigate()
  return (
    <div>
          <Card maxW='sm' onClick={()=>navigate(`/product/${_id}`)} >
              <CardBody >
                  <Image
                      src={img}
                      alt={title}
                      h="50%"
                      style={{zIndex:"-1"}}
                  />
                  <Stack mt='6'>
                      <Heading size='7' fontWeight="400" display="inline-block" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">{title}</Heading>
                     
                      <Text color='#fba937' fontSize='2xl'>
                          ₹{price}
                      </Text>
                      <Button onClick={() => setCart("View ")} bg="#902735" color="white" >
                          {cart}
                      </Button>
                  </Stack>
              </CardBody>
          </Card>
    </div>
  )
}
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

export const ProductCard = ({image,title,price}) => {
    const [cart,setCart]=useState("Add To Cart")
  return (
    <div>
          <Card maxW='sm'>
              <CardBody>
                  <Image
                      src={image}
                      alt={title}
                      h="50%"
                  />
                  <Stack mt='6'>
                      <Heading size='7' fontWeight="400" display="inline-block" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">{title}</Heading>
                     
                      <Text color='#fba937' fontSize='2xl'>
                          ₹{price}
                      </Text>
                      <Button onClick={() => setCart("Added To Cart")} bg="#902735" color="white" >
                          {cart}
                      </Button>
                  </Stack>
              </CardBody>
          </Card>
    </div>
  )
}

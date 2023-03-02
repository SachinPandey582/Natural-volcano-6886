import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <div>
      <Box padding='6' boxShadow='lg' bg='white' borderRadius={20}>
  <SkeletonCircle size='50' />
  <SkeletonText mt='4' noOfLines={4} spacing='5' skeletonHeight='2' />
</Box>
    </div>
  )
}

export default Loader

import { Box, Button, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Logo from "../../../assets/SpritsVilla.png"
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";
import "./Navbar.css"

const Navbar = () => {

  let size = window.innerWidth
  console.log(size)
  
  const { isOpen, onOpen, onClose } = useDisclosure();


  // if (size> 1000) {
  //   return (
  //     <>
  //       <Box className='navbarContainer'>
  //         <Box className='logo'>
  //           <Image className='mainLogo' src={Logo} alt="mainLogo" />
  //         </Box>

  //         <Box className='searchContainer'>
  //           <Box className='searchBox'>
  //             SEARCH &nbsp; |  <input type="text" placeholder={`Search here for products in Gwalior`} />
  //           </Box>
  //         </Box>

  //         <Box className='location'>
  //           <MdLocationOn />  Gwalior, Gwalior
  //         </Box>

  //         <Box className='authUser'>
  //           <FaUser /> &nbsp; Sign In / Register
  //         </Box>

  //         <Box className='wishList'>
  //           <BsSuitHeartFill /> &nbsp;  Wishlist
  //         </Box>

  //         <Box className='cart'>
  //           <FaShoppingCart /> &nbsp; Cart
  //         </Box>
  //       </Box>
  //     </>
  //   )
  // }
  // else {
  return (
    <>
      <Box className='navbarContainer'>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<RxHamburgerMenu />}
              variant='ghost'
            />
            <MenuList>
              <MenuItem >
                Fashion
              </MenuItem>
              <MenuItem >
                Beauty & Personal Care
              </MenuItem>
              <MenuItem >
                Home Decor
              </MenuItem>
              <MenuItem >
                Products Near Me..
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className='logo'>
          <Image className='mainLogo' src={Logo} alt="mainLogo" />
        </Box>
        <Box className='searchIcon'>
          <TbSearch  onClick={onOpen}/> &nbsp;
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody p={6}>
                <Input
                  placeholder={`You are searching for `}
                  marginTop="4"
                  // onChange={(e) => handleQuerry(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Search
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box className='smallScreenNavbar'>
          <Box className='authUser'>
            <FaUser /> &nbsp;
          </Box>

          <Box className='wishList'>
            <BsSuitHeartFill /> &nbsp;
          </Box>

          <Box className='cart'>
            <FaShoppingCart /> &nbsp;
          </Box>
        </Box>
      </Box>

    </>
  )
}
// }

export default Navbar



import { Box, Button, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import Logo from "../../../assets/SpritsVilla.png"
import locationFn from '../../../location/location';
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlSocialDropbox } from "react-icons/sl";
import { BsCartCheckFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import "./Navbar.css"







const initialUserData = {
  name:"",
  email:"",
  password:"",
  role:"user"
}

const reducer = (state, action) =>{
  switch(action.type){
    case "NAME":
      return {...state, name:action.payload}
    case "EMAIL":
      return {...state, email:action.payload}
    case "PASSWORD":
      return {...state, password:action.payload} 
    case "RESET":
      return initialUserData
    default:
      return state     
  }
}



const Navbar = () => {

  const [location, setLocation] = useState({});
  const [register, setRegister] = useState(false)
  const [userData, dispatch] = useReducer(reducer, initialUserData) 



  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
 

  const handleLoginSignin = () => {
    setRegister((prev) => !prev)
  }


  const handleRegister = () =>{
    dispatch({type:"RESET"})
    console.log(userData)
  }


  useEffect(() => {
    locationFn().then((res) => {
      setLocation(JSON.parse(localStorage.getItem("location")));
    });
  }, []);


  return (
    <>
      <Box className='navbarContainer'>
        <Box className='logo'>
          <Image className='mainLogo' src={Logo} alt="mainLogo" />
        </Box>

        <Box className='searchContainer'>
          <Box className='searchBox'>
            SEARCH &nbsp; |  <input type="text" placeholder={`Search here for products in ${location.city}`} />
          </Box>
        </Box>

        <Box className='location'>
          <MdLocationOn /> &nbsp;{location.state}
        </Box>

        <Box className='authUser' onClick={modal1.onOpen}>
          <FaUser /> &nbsp; Sign In / Register

          <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
            <ModalOverlay />
            <ModalContent className='modalContent' maxW="700px">
              <Box className='leftModalAuth'>
                <h3 style={{ fontSize: "18px", letterSpacing: "1px" }}>BENIFITS</h3>
                <Box className='insideLeftModalAuth'>
                  <SlSocialDropbox style={{ marginBottom: "10px", color: "#902735", fontSize: "30px" }} />
                  <Text className='headTextOfModal'>Manage Orders</Text>
                  <Text>Track, Return & Cancel your orders</Text>
                </Box>
                <Box className='insideLeftModalAuth'>
                  <GiSelfLove style={{ marginBottom: "10px", color: "#902735", fontSize: "30px" }} />
                  <Text className='headTextOfModal'>Access Products that you love</Text>
                  <Text>Seamless access to Wishlist & Cart items</Text>
                </Box>
                <Box className='insideLeftModalAuth'>
                  <BsCartCheckFill style={{ marginBottom: "10px", color: "#902735", fontSize: "30px" }} />
                  <Text className='headTextOfModal'>Quicker Checkout</Text>
                  <Text>Saved Addresses & bank details for 3 step checkout</Text>
                </Box>
              </Box>
              <Box className='rightModalAuth'>
                <ModalHeader><Image className='mainLogoTwo' src={Logo} alt="mainLogo" /></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {register &&
                    <>
                      <h2 style={{ fontFamily: "Poppins", fontSize: "20px", textDecorationLine: "underline", textUnderlineOffset: "4px", marginBottom: "10px" }}>Register</h2>
                      <Text style={{ fontSize: "14px", color: "grey", marginBottom: "5px" }}>Please provide your details</Text>
                      <Input type="text" value={userData.name} borderRadius="none" borderColor={"grey"} placeholder="Enter Your Name" onChange={(e)=>dispatch({type:"NAME", payload:e.target.value})} style={{ marginBottom: "15px" }} required />
                      <Input type="email" value={userData.email} borderRadius="none" borderColor={"grey"} placeholder="Enter Your Email" onChange={(e)=>dispatch({type:"EMAIL", payload:e.target.value})} style={{ marginBottom: "15px" }} required />
                      <Input type="password" value={userData.password} borderRadius="none" borderColor={"grey"} placeholder="Enter Password" onChange={(e)=>dispatch({type:"PASSWORD", payload:e.target.value})} style={{ marginBottom: "15px" }} required />
                      <button onClick={handleRegister} style={{ width: "100%", padding: "8px 0 8px 0", color: "#ffffff", backgroundColor: "#902735", margin: "auto", letterSpacing: "1px", marginBottom: "10px" }}>CONTINUE</button>

                    </>
                  }

                  {!register &&
                    <>
                      <h2 style={{ fontFamily: "Poppins", fontSize: "20px", textDecorationLine: "underline", textUnderlineOffset: "4px", marginBottom: "10px" }}>Login / Sign Up</h2>
                      <Text style={{ fontSize: "14px", color: "grey", marginBottom: "5px" }}>Please provide your details</Text>
                      {/* <Input borderRadius="none" borderColor={"grey"} placeholder="Enter Your Name" style={{ marginBottom: "15px" }} /> */}
                      <Input borderRadius="none" borderColor={"grey"} placeholder="Registerd Email" style={{ marginBottom: "15px" }} />
                      <Input borderRadius="none" borderColor={"grey"} placeholder="Password" style={{ marginBottom: "15px" }} />
                      <button style={{ width: "100%", padding: "8px 0 8px 0", color: "#ffffff", backgroundColor: "#902735", margin: "auto", letterSpacing: "1px", marginBottom: "10px" }}>CONTINUE</button>

                    </>
                  }

                  <Text style={{ cursor: "pointer" }} onClick={handleLoginSignin}>{(register && "Already Registered ? / Login")||(!register && "New User ? / Register")}</Text>
                </ModalBody>
              </Box>
            </ModalContent>
          </Modal>

        </Box>

        <Box className='wishList'>
          <BsSuitHeartFill /> &nbsp;  Wishlist
        </Box>

        <Box className='cart'>
          <FaShoppingCart /> &nbsp; Cart
        </Box>
      </Box>


      <Box className='navbarContainerSmall'>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<RxHamburgerMenu />}
              variant='ghost'
            />
            <MenuList>
              <MenuItem className='menuIconDesign'>
                Fashion
              </MenuItem>
              <MenuItem className='menuIconDesign'>
                Beauty & Personal Care
              </MenuItem>
              <MenuItem className='menuIconDesign'>
                Home Decor
              </MenuItem>
              <MenuItem className='menuIconDesign'>
                Products Near Me..
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className='logo'>
          <Image className='mainLogo' src={Logo} alt="mainLogo" />
        </Box>
        <Box className='searchIcon'>
          <TbSearch onClick={modal2.onOpen} /> &nbsp;
          <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody p={6}>
                <Input
                  placeholder={`You are searching for ${location.city}`}
                  marginTop="4"
                // onChange={(e) => handleQuerry(e.target.value)}
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Search
                </Button>
                <Button onClick={modal2.onClose}>Cancel</Button>
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



      <Box className='marronNavbar'>
        <Box className='insideMaroonNavbar'>
          <Text>Fashion</Text>
          <Text>Beauty & Personal Care</Text>
          <Text>Home Decor</Text>
          <Text>Products Near Me</Text>
        </Box>
      </Box>

    </>
  )
}


export default Navbar



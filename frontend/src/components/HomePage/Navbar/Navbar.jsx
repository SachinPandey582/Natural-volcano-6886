import {
  Box,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import Logo from "../../../assets/SpritsVilla.png";

import { MdLocationOn } from "react-icons/md";
import { useDispatch} from "react-redux"
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill} from "react-icons/bs";

import { SlSocialDropbox } from "react-icons/sl";
import { BsCartCheckFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import "./Navbar.css";

import 'react-toastify/dist/ReactToastify.css';


import { handleUserLogin, handleUserPost, userLogout } from "../../../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom"
import SmallScreen from "./SmallScreen";


const initialUserData = {
  name: "",
  email: "",
  password: "",
  role: "user",
};

const initialLoginUser = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialUserData;
    default:
      return state;
  }
};


const reducerLogin = (statex, actionx) => {
  switch (actionx.type) {
    case "EMAILX":
      return { ...statex, email: actionx.payloadx };
    case "PASSWORDX":
      return { ...statex, password: actionx.payloadx };
    case "RESETX":
      return initialLoginUser;
    default:
      return statex;
  }
};

const Navbar = (zIndex=800) => {

 
  const [register, setRegister] = useState(true);
 
  const [SearchedData, setSearchedData] = useState("")
  const [typePass, setTypePass] = useState(true);
  const [eyeIcon, setEyeIcon] = useState(true);
  const [userData, dispatch] = useReducer(reducer, initialUserData);
  const [userDataLogin, dispatchx] = useReducer(reducerLogin, initialLoginUser);



  const nav = useNavigate()
  const dispatchData = useDispatch()
  // const isAuth = useSelector((store) => store.authState.isAuth)
  // const isAuthx = useSelector((store) => store.authState)
  // console.log('isAuthx: ', isAuthx);
  // const isAuth = useSelector((store) => store.authState.isAuth)
  // console.log('isAuth: ', isAuth);
  // const authData = useSelector((store) => store.authState.authData)
  // const isAuthLogin = useSelector((store)=> store.authState.isAuthLogin)
  // const isAuthSignup = useSelector((store)=> store.authState.isAuthSignup)

  const modal1 = useDisclosure();


  const handleLoginSignin = () => {
    setRegister((prev) => !prev);
  };



  const handleRegister = (e) => {
    e.preventDefault()
    dispatchData(handleUserPost(userData))
    dispatch({ type: "RESET" })
  }



  const handleLogin = (e) => {
    e.preventDefault()
    dispatchData(handleUserLogin(userDataLogin))
    dispatch({ type: "RESETX" })
  }

  const togglePassword = () => {
    setTypePass((prev) => !prev);
    setEyeIcon((prev) => !prev);
  };

  const handleLogout = () => {
    nav("/")
    localStorage.removeItem("responseData")
    localStorage.removeItem("token")
    dispatchData(userLogout())
  }

  

  const getTheSearchItem = async (value) => {
    setSearchedData(value)
    let data = await fetch(`http://localhost:8080/products?search=${SearchedData}`)
    let res = await data.json()
  }


  useEffect(() => {
   
  }, []);


  let responseData = JSON.parse(localStorage.getItem("responseData")) 

  return (
    <>
      <Box className="navbarContainer" zIndex={zIndex}>
        <Box className="logo" onClick={()=>{nav("/")}}>
          <Image className="mainLogo" src={Logo} alt="mainLogo" />
        </Box>

        <Box className="searchContainer">
          <Box className="searchBox">
            SEARCH &nbsp; |
            <input
              onChange={(e) => getTheSearchItem(e.target.value)}
              type="text"
              placeholder={`Search here for products near by you..`}
            />
          </Box>
        </Box>

        <Box className="location">
          <MdLocationOn /> &nbsp; India
        </Box>

        <Box className="authUser">
          {!responseData && (
            <>
              <FaUser /> &nbsp;
              <span onClick={modal1.onOpen}>Sign In / Register</span>
              <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
                <ModalOverlay />
                <ModalContent className="modalContent" maxW="700px">
                  <Box className="leftModalAuth">
                    <h3 style={{ fontSize: "18px", letterSpacing: "1px" }}>
                      BENIFITS
                    </h3>
                    <Box className="insideLeftModalAuth">
                      <SlSocialDropbox
                        style={{
                          marginBottom: "10px",
                          color: "#902735",
                          fontSize: "30px",
                        }}
                      />
                      <Text className="headTextOfModal">Manage Orders</Text>
                      <Text>Track, Return & Cancel your orders</Text>
                    </Box>
                    <Box className="insideLeftModalAuth">
                      <GiSelfLove
                        style={{
                          marginBottom: "10px",
                          color: "#902735",
                          fontSize: "30px",
                        }}
                      />
                      <Text className="headTextOfModal">
                        Access Products that you love
                      </Text>
                      <Text>Seamless access to Wishlist & Cart items</Text>
                    </Box>
                    <Box className="insideLeftModalAuth">
                      <BsCartCheckFill
                        style={{
                          marginBottom: "10px",
                          color: "#902735",
                          fontSize: "30px",
                        }}
                      />
                      <Text className="headTextOfModal">Quicker Checkout</Text>
                      <Text>
                        Saved Addresses & bank details for 3 step checkout
                      </Text>
                    </Box>
                  </Box>
                  <Box className="rightModalAuth">
                    <ModalHeader>
                      <Image
                        className="mainLogoTwo"
                        src={Logo}
                        alt="mainLogo"
                      />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {register && (
                        <>
                          <h2
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              textDecorationLine: "underline",
                              textUnderlineOffset: "4px",
                              marginBottom: "10px",
                            }}
                          >
                            Register
                          </h2>
                          <form onSubmit={handleRegister}>
                            <Text
                              style={{
                                fontSize: "14px",
                                color: "grey",
                                marginBottom: "5px",
                              }}
                            >
                              Please provide your details
                            </Text>
                            <Input
                              type="text"
                              value={userData.name}
                              borderRadius="none"
                              borderColor={"grey"}
                              placeholder="Enter Your Name"
                              onChange={(e) =>
                                dispatch({
                                  type: "NAME",
                                  payload: e.target.value,
                                })
                              }
                              style={{ marginBottom: "15px" }}
                              required
                            />
                            <Input
                              type="email"
                              value={userData.email}
                              borderRadius="none"
                              borderColor={"grey"}
                              placeholder="Enter Your Email"
                              onChange={(e) =>
                                dispatch({
                                  type: "EMAIL",
                                  payload: e.target.value,
                                })
                              }
                              style={{ marginBottom: "15px" }}
                              required
                            />
                            <Box
                              style={{ width: "100%", position: "relative" }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  position: "absolute",
                                  height: "100%",
                                  top: "0",
                                  right: "0",
                                  paddingRight: "10px",
                                  cursor: "pointer !important",
                                }}
                              >
                                {eyeIcon && (
                                  <AiFillEye
                                    id="togglePassword"
                                    onClick={togglePassword}
                                    color="#902735"
                                  />
                                )}
                                {!eyeIcon && (
                                  <AiFillEyeInvisible
                                    id="togglePassword"
                                    onClick={togglePassword}
                                    color="#902735"
                                  />
                                )}
                              </span>

                              <Input
                                type={typePass ? "password" : "text"}
                                value={userData.password}
                                borderRadius="none"
                                borderColor={"grey"}
                                placeholder="Enter Password"
                                onChange={(e) =>
                                  dispatch({
                                    type: "PASSWORD",
                                    payload: e.target.value,
                                  })
                                }
                                style={{
                                  marginBottom: "15px",
                                  display: "block",
                                }}
                                required
                              />
                            </Box>

                            <button
                              style={{
                                width: "100%",
                                padding: "8px 0 8px 0",
                                color: "#ffffff",
                                backgroundColor: "#902735",
                                margin: "auto",
                                letterSpacing: "1px",
                                marginBottom: "10px",
                              }}
                              onClick={modal1.onClose}
                            >
                              SUBMIT
                            </button>
                          </form>
                        </>
                      )}

                      {!register && (
                        <>
                          <h2
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "20px",
                              textDecorationLine: "underline",
                              textUnderlineOffset: "4px",
                              marginBottom: "10px",
                            }}
                          >
                            Login / Sign Up
                          </h2>
                          <form onSubmit={handleLogin}>
                            <Text
                              style={{
                                fontSize: "14px",
                                color: "grey",
                                marginBottom: "5px",
                              }}
                            >
                              Please provide your details
                            </Text>
                            <Input
                              type="email"
                              value={userDataLogin.email}
                              borderRadius="none"
                              borderColor={"grey"}
                              placeholder="Registerd Email"
                              style={{ marginBottom: "15px" }}
                              onChange={(e) =>
                                dispatchx({
                                  type: "EMAILX",
                                  payloadx: e.target.value,
                                })
                              }
                              required
                            />
                            <Box
                              style={{ width: "100%", position: "relative" }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  position: "absolute",
                                  height: "100%",
                                  top: "0",
                                  right: "0",
                                  paddingRight: "10px",
                                  cursor: "pointer !important",
                                }}
                              >
                                {eyeIcon && (
                                  <AiFillEye
                                    id="togglePassword"
                                    onClick={togglePassword}
                                    color="#902735"
                                  />
                                )}
                                {!eyeIcon && (
                                  <AiFillEyeInvisible
                                    id="togglePassword"
                                    onClick={togglePassword}
                                    color="#902735"
                                  />
                                )}
                              </span>

                              <Input
                                type={typePass ? "password" : "text"}
                                value={userDataLogin.password}
                                borderRadius="none"
                                borderColor={"grey"}
                                placeholder="Password"
                                onChange={(e) =>
                                  dispatchx({
                                    type: "PASSWORDX",
                                    payloadx: e.target.value,
                                  })
                                }
                                style={{
                                  marginBottom: "15px",
                                  display: "block",
                                }}
                                required
                              />
                            </Box>
                            <button
                              style={{
                                width: "100%",
                                padding: "8px 0 8px 0",
                                color: "#ffffff",
                                backgroundColor: "#902735",
                                margin: "auto",
                                letterSpacing: "1px",
                                marginBottom: "10px",
                              }}
                              onClick={modal1.onClose}
                            >
                              CONTINUE
                            </button>
                          </form>
                        </>
                      )}

                      <Text
                        className="handleLoginText"
                        onClick={handleLoginSignin}
                      >
                        {(register && "Already Registered ? / Login") ||
                          (!register && "New User ? / Register")}
                      </Text>
                    </ModalBody>
                  </Box>
                </ModalContent>
              </Modal>
            </>
          )}

          {responseData &&
            <>
              <Menu>


                <MenuButton>
                   <span style={{color:"#0fa14c", fontFamily:"Poppins", fontWeight:"bold"}}>{responseData.name}</span>
                </MenuButton>
                <MenuList style={{zIndex:"10"}}>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }} onClick={() => nav("/admin")}> Admin</MenuItem>
                  <MenuItem onClick={handleLogout} style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Logout</MenuItem>
                </MenuList>
              </Menu>

            </>
          }
        </Box>

        <Box className="wishList">
          <BsSuitHeartFill /> &nbsp; Wishlist
        </Box>

        {responseData ? <Box onClick={() => nav("/cart")} className="cart">
          <FaShoppingCart /> &nbsp; Cart
        </Box> : null}
      </Box>

      <SmallScreen/>    


      <Box className="marronNavbar" style={{zIndex:"91"}}>
        <Box className="insideMaroonNavbar">
          <Text>Fashion</Text>
          <Text onClick={() => nav("/products")}>Beauty & Personal Care</Text>
          <Text>Home Decor</Text>
          <Text>Products Near Me</Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

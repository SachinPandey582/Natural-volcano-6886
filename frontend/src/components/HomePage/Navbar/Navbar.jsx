import {
  Box,
  Button,
  IconButton,
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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import Logo from "../../../assets/SpritsVilla.png";
import locationFn from "../../../location/location";
import { useToast } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlSocialDropbox } from "react-icons/sl";
import { BsCartCheckFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import "./Navbar.css";

import axios from "axios";

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

const Navbar = () => {
  const [location, setLocation] = useState({});
  const [register, setRegister] = useState(true);
  const [userName, setUserName] = useState(false);
  const [typePass, setTypePass] = useState(true);
  const [eyeIcon, setEyeIcon] = useState(true);
  const [userData, dispatch] = useReducer(reducer, initialUserData);
  const [userDataLogin, dispatchx] = useReducer(reducerLogin, initialLoginUser);
  const toast = useToast();

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

  const handleLoginSignin = () => {
    setRegister((prev) => !prev);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
    // console.log(userData)

    axios
      .post("http://localhost:8080/user/signup", userData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);

        if (
          res.data.msg ===
          "User Already Exist Please Login in Your Existing Account"
        ) {
          toast({
            description: "user already registered, please login..!",
            status: "error",
            isClosable: true,
            variant: "top-accent",
            duration: 5000,
            position: "top",
          });
        } else {
          toast({
            description: "user registerd succesfully..😊",
            status: "success",
            isClosable: true,
            variant: "top-accent",
            duration: 5000,
            position: "top",
          });
        }
      })
      .catch((erx) => {
        console.log("erx is", erx);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatchx({ type: "RESETX" });
    // console.log(userDataLogin);


    let user = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(userDataLogin),
    });

    let res = await user.json();
    console.log(res);
    if (res.msg === "Account Not Exist") {
      toast({
        description: "Entered data is not correct, Please check once again..!",
        status: "warning",
        isClosable: true,
        variant: "top-accent",
        duration: 5000,
        position: "top",
      })
    }
    else if (res.msg === "Welcome Back nora fatehi") {
      toast({
        description: `Namastey 🙏, Nora`,
        status: "success",
        variant: "subtle",
        isClosable: true,
        duration: 5000,
        position: "top",
      })
      setUserName((prev) => !prev)
    }
    else {
      toast({
        description: `Something went wrong, Please check in sometime..!`,
        status: "error",
        isClosable: true,
        variant: "top-accent",
        duration: 5000,
        position: "top",
      })
    }

  };

  const togglePassword = () => {
    setTypePass((prev) => !prev);
    setEyeIcon((prev) => !prev);
  };

  useEffect(() => {
    locationFn().then((res) => {
      setLocation(JSON.parse(localStorage.getItem("location")));
    });
  }, []);

  // console.log(location)

  return (
    <>
      <Box className="navbarContainer">
        <Box className="logo">
          <Image className="mainLogo" src={Logo} alt="mainLogo" />
        </Box>

        <Box className="searchContainer">
          <Box className="searchBox">
            SEARCH &nbsp; |{" "}
            <input
              type="text"
              placeholder={`Search here for products in ${location.city}`}
            />
          </Box>
        </Box>

        <Box className="location">
          <MdLocationOn /> &nbsp;{location.state}
        </Box>

        <Box className="authUser">
          {!userName && (
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

          {userName &&
            <>
              <Menu>


                <MenuButton>
                  <span>Nora Fatehi</span>
                </MenuButton>
                <MenuList>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Account</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Orders</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Wishlist</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Address</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Bank Details</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Wallet</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Shared Products</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Raise Ticket</MenuItem>
                  <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Logout</MenuItem>
                </MenuList>
              </Menu>

            </>
          }
        </Box>

        <Box className="wishList">
          <BsSuitHeartFill /> &nbsp; Wishlist
        </Box>

        <Box className="cart">
          <FaShoppingCart /> &nbsp; Cart
        </Box>
      </Box>

      <Box className="navbarContainerSmall">
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<RxHamburgerMenu />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem className="menuIconDesign">Fashion</MenuItem>
              <MenuItem className="menuIconDesign">
                Beauty & Personal Care
              </MenuItem>
              <MenuItem className="menuIconDesign">Home Decor</MenuItem>
              <MenuItem className="menuIconDesign">Products Near Me..</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className="logo">
          <Image className="mainLogo" src={Logo} alt="mainLogo" />
        </Box>
        <Box className="searchIcon">
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
                <Button color="green" mr={3}>
                  Search
                </Button>
                <Button onClick={modal2.onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box className="smallScreenNavbar">
          <Box className="authUser">
            {!userName && (
              <>
                <FaUser onClick={modal1.onOpen}/> &nbsp;
                {/* <span >Sign In / Register</span> */}
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

            {userName &&
              <>
                <Menu>


                  <MenuButton>
                    <FaUser color="green"/>
                    {/* <span>Nora Fatehi</span> */}
                  </MenuButton>
                  <MenuList>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Account</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Orders</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Wishlist</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Address</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Bank Details</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Wallet</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> My Shared Products</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Raise Ticket</MenuItem>
                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Logout</MenuItem>
                  </MenuList>
                </Menu>

              </>
            }
          </Box>

          <Box className="wishList">
            <BsSuitHeartFill /> &nbsp;
          </Box>

          <Box className="cart">
            <FaShoppingCart /> &nbsp;
          </Box>
        </Box>
      </Box>

      <Box className="marronNavbar">
        <Box className="insideMaroonNavbar">
          <Text>Fashion</Text>
          <Text>Beauty & Personal Care</Text>
          <Text>Home Decor</Text>
          <Text>Products Near Me</Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

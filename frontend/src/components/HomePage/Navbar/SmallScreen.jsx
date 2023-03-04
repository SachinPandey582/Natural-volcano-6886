import React, { useEffect, useReducer, useState } from 'react'
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
import Logo from "../../../assets/SpritsVilla.png";
import { TbSearch } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { GiSelfLove } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill, BsXLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserLogin, handleUserPost, userLogout } from '../../../Redux/Auth/auth.action';





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






const SmallScreen = () => {

    const [register, setRegister] = useState(true);
    const [eyeIcon, setEyeIcon] = useState(true);
    const [SearchedData, setSearchedData] = useState("")
    const [typePass, setTypePass] = useState(true);
    const [userData, dispatch] = useReducer(reducer, initialUserData);
    const [userDataLogin, dispatchx] = useReducer(reducerLogin, initialLoginUser);
    const nav = useNavigate()



    // const isAuth = useSelector((store) => store.authState.isAuth)
    const dispatchData = useDispatch()


    const modal1 = useDisclosure();
    const modal2 = useDisclosure();


    const togglePassword = () => {
        setTypePass((prev) => !prev);
        setEyeIcon((prev) => !prev);
    };



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

    const getTheSearchItem = async (value) => {
        setSearchedData(value)
        let data = await fetch(`http://localhost:8080/products?search=${SearchedData}`)
        let res = await data.json()
    }

    const handleLogout = () => {
        nav("/")
        localStorage.removeItem("responseData")
        localStorage.removeItem("token")
        dispatchData(userLogout())
    }

    useEffect(() => {

    }, []);

    let responseData = JSON.parse(localStorage.getItem("responseData"))


    return (
        <Box className="navbarContainerSmall">
            <Box>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<RxHamburgerMenu />}
                        variant="ghost"
                    />
                    <MenuList style={{zIndex:"999 !important"}}>
                        <MenuItem className="menuIconDesign">Fashion</MenuItem>
                        <MenuItem onClick={() => nav("/products")} className="menuIconDesign">Beauty & Personal Care</MenuItem>
                        <MenuItem className="menuIconDesign">Home Decor</MenuItem>
                        <MenuItem className="menuIconDesign">Products Near Me..</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box className="logo" onClick={()=>{nav("/")}}>
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
                                onChange={(e) => getTheSearchItem(e.target.value)}
                                placeholder={`You are searching for near by..`}
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
                    {!responseData && (
                        <>
                            <FaUser onClick={modal1.onOpen} /> &nbsp;
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
                                    <FaUser color="green" />
                                    {/* <span>Nora Fatehi</span> */}
                                </MenuButton>
                                <MenuList style={{ zIndex: "98" }}>

                                    <MenuItem style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }} onClick={() => nav("/admin")}> Admin</MenuItem>
          
                                    <MenuItem onClick={handleLogout} style={{ color: "#902735", fontFamily: "Poppins", textDecorationLine: "underline", textUnderlineOffset: "2px" }}> Logout</MenuItem>
                                </MenuList>
                            </Menu>

                        </>
                    }
                </Box>

                <Box className="wishList">
                    <BsSuitHeartFill /> &nbsp;
                </Box>

                {responseData ? <Box onClick={() => nav("/cart")} className="cart">
                    <FaShoppingCart />
                </Box> : null}

            </Box>
        </Box>
    )
}

export default SmallScreen

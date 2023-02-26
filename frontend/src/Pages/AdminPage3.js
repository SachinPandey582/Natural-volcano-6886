import React, { useEffect, useState } from 'react'
// import AdminSam from '../components/AdminThings/Card1'
import NavbarOfAdmin from '../components/AdminThings/Navbaradmin'
import ADcss from "./AdminPage.module.css"
import axios from "axios"
import { Button, Input,  Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Image,    
    Box,
    Flex,
  } from '@chakra-ui/react';



const AdminPage = () => {
    const [data, setdata] = useState([])
    //here i am getting  all the data 

    const [currpage, setcurrpage] = useState(1)
    //here i am setting the page of the data 

   

const navigate=useNavigate()
   const [counter,setcounter]=useState(0)

   

    const [Newtitle,settitle]=useState("")

     const [Newprice,setprice]=useState("")
     const [Newimg,setimg]=useState("")
     const [Newquantity,setquantity]=useState("")
     const [Newcategory,setcategory]=useState("")
    const EditTheData=(id)=>{
        const datatochange={

title:Newtitle,
price:Newprice,
img:Newimg,
category:Newcategory,
quantity:Newquantity, 

        }
        console.log("this is working the edit ",id)
        fetch(`http://localhost:8080/products/${id}?role=admin&pass=8765`, { 
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(
          datatochange
        )
      }).then(res=>res.json())
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

    }
    const Hightolow = () => {
        const HightoLowData = data.sort((a, b) => {
            setcurrpage(currpage + 1)
            return b.price - a.price
        })
        setdata(HightoLowData)
    }
    const LowToHigh = () => {
        const LowtoHighData = data.sort((a, b) => {
            setcurrpage(currpage + 1)
            return a.price - b.price
        })
        setdata(LowtoHighData)
    }
    const hommeCategory = () => {
        let HomeCategoryData = data.filter((el) => {
            setcurrpage(currpage + 1)
            return el.category === "Home"
        }

        )
        setdata(HomeCategoryData)

    }


    const DeleteTheData=(id)=>{
        console.log('this is working the delete',id)
        //i am getting the id can you check there 
        
        fetch(`http://localhost:8080/products/${id}?role=admin&pass=8765`,{
         method:"DELETE"
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
          setcounter(counter+1) 
          alert("The Item has been deleted")
     }
    const BeautyCategory = () => {

        let BeautyCategoryData = data.filter((el) => {
            setcurrpage(currpage + 1)
            return el.category === "Beauty"
        }

        )
        setdata(BeautyCategoryData)
    }
    const FashionCategory = () => {
        let FashionCategoryData = data.filter((el) => {
            setcurrpage(currpage + 1)
            return el.category === "Fashion"
        }

        )
        setdata(FashionCategoryData)
    }
const AllTheCategory=async()=>{
    setcurrpage(currpage + 1)
    let res = await axios.get(`http://localhost:8080/products`)
    setdata(res.data)
}

    const getData = async () => {
        // let res=  await axios.get(`http://localhost:8080/users?role=admin&pass=8765`)
        let res = await axios.get(`http://localhost:8080/products`)
        setdata(res.data)
        return res

    }


    console.log(data)
    useEffect(() => {

        getData()

    }, [counter])
    return (
        <div className={ADcss.mainContainer}>
       

            <div className={ADcss.firstContainer}>

                <div className={ADcss.logoofmypage}>
                    <img src='/spritsvilla logo.jpg' alt='logod' />
                </div>
                <div >
                    <img className={ADcss.center} src='https://avatars.githubusercontent.com/u/105917658?v=4' alt='Avatar' />
                </div>
                <div className={ADcss.Nameofperson}>Sachin Pandey</div>
                <p className={ADcss.position} >Deputy manager</p>
                <br />
                <div className={ADcss.Sidebarfirstsection}>
                    <div onClick={()=>navigate("/admin")} >
                        DASHBOARD
                    </div>
                </div>
                <div className={ADcss.Sidebarsecondsection}>
                <div onClick={() => navigate("/admin/addtheproduct")}>
            Add the Products
          </div>

                </div>
                <div className={ADcss.Sidebarsecondsection}>
                <div onClick={()=>navigate("/admin/checktheusers")}>Check All The Users</div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Todays Order
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                <div onClick={()=>navigate("/admin/seeallthecollections")}>Collections</div>

                </div>
                <div className={ADcss.logoutcombo}> <div>
                    <img src='/icons8-logout-rounded-100.png' alt='logoutavatar' /></div>

                    <div>
                        Logout
                    </div>
                </div>
            </div>
            {/* //second container is present here  */}
            <div className={ADcss.secondContainer}>
                <NavbarOfAdmin  />
                <div>
                    Total No of Products {data.length}
                </div>
                <br />
                <div>
                    Filter by price- <Button onClick={() => Hightolow()}>High to low </Button> <Button onClick={() => LowToHigh()}>Low to high </Button>
                </div>
                <br />
                <div>
                    Filter by Category- <Button onClick={() => hommeCategory()}>Home </Button> <Button onClick={() => BeautyCategory()}>Beauty </Button> <Button onClick={() => FashionCategory()}>Fashion </Button> <Button onClick={() => AllTheCategory()}>All the Products</Button>
                </div>
                <br />
              
              
                <div >
                <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>ID</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image boxSize="50px" objectFit="cover" src={item.img} />
              </Td>
              <Td>{item.title}</Td>
              <Td>{item.price}</Td>
              <Td>{item._id}</Td>
              <Td>
                <Flex>
                 
                  <Popover>
  <PopoverTrigger>
  <Button >Edit</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Change the Details</PopoverHeader>
    <PopoverBody>
        <form style={{display:"block" ,margin:"auto"}} onSubmit={()=>EditTheData(item._id)}>

        <Input  placeholder='Enter the title here ' value={Newtitle} onChange={(e)=>settitle(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the Price here ' value={Newprice} onChange={(e)=>setprice(e.target.value)}/>
        <br/>
        <Input placeholder='Enter the quantity here ' value={Newquantity} onChange={(e)=>setquantity(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the category here ' value={Newcategory} onChange={(e)=>setcategory(e.target.value)}/>
        <br/>
        <Input  placeholder='Enter the img here ' value={Newimg} onChange={(e)=>setimg(e.target.value)}/>
        <br/>
       
       

        <PopoverTrigger>
        <Input type="Submit"  />
  </PopoverTrigger>


     </form>
        
    </PopoverBody>
  </PopoverContent>
</Popover>
                  <Button
                    size="sm"
                    onClick={() => DeleteTheData(item._id)}
                    bgColor="red.500"
                    _hover={{ bgColor: 'red.600' }}
                  >
                    Delete
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
                </div>
                
                
            </div>
        </div>
    )
}

export default AdminPage


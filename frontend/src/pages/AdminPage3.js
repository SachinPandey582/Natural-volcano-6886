import React, { useEffect, useState } from 'react'
// import AdminSam from '../components/AdminThings/Card1'
import NavbarOfAdmin from '../components/AdminThings/Navbaradmin'
import ADcss from "./AdminPage.module.css"
import axios from "axios"
import ProductAddToCart from '../components/AdminThings/ProductCard'
import { Button, list } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'




const AdminPage = () => {
    const [data, setdata] = useState([])
    //here i am getting  all the data 

    const [currpage, setcurrpage] = useState(1)
    //here i am setting the page of the data 

    const [totalpage, settotalpage] = useState(0)
    //here i am setting the total no of pages of the data 

    const [searchTerm, setSearchTerm] = useState("")
    //here this is going to use by me for search functionality

    const [loading, setloading] = useState(false)
    //here this is the loading part to solve the loading indicator here 
    const [category, sercategory] = useState(0)
    //here this is for the category of the data

const navigate=useNavigate()
   
    let count = 0
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

    }, [])
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
                    <div onClick={()=>navigate("/admin/addtheproduct")}>
                        Edit the Products
                    </div>

                </div>
                <div className={ADcss.Sidebarsecondsection}>
                <div onClick={()=>navigate("/admin/checktheusers")}>Check All The Users</div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Todays Order
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Collections
                    </div>

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
              
              
                <div className={ADcss.productcards}>
                    {

                        data.map((el) => (

                             <ProductAddToCart    id={el._id}  imageURL={el.img} name={el.title} price={el.price} />
                        )
                        )
                    }
                </div>
                <div>

                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default AdminPage


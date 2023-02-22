import React,{useState} from 'react';
import './home.css';


const HomePage = () => {
  return (
    <div>
     <div className='div_1'>
        <div className='div_2'>
           <h1><span style={{color:"#000000",fontSize:"22px",lineHeight:"20px",fontFamily: "Poppins",backgroundColor:" #ffffff"}}>Shop By Category</span></h1>
        </div>
        <div className='div_3'>
            <div >
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png" alt="" />
            </div>
            {/* <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png" alt="" />
            </div>
            <div>
                <img src="https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png" alt="" />
            </div> */}
        </div>
        <div className='div_4'>
            <div style={{display:"flex",justifyContent:"space-between",width:"80%",margin:"auto",
        position:"relative",top:"50%"}}>
            <button ><i class="fa-solid fa-arrow-left"></i></button>
              <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
            <img src="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" alt="" />
        </div>
         <div className='div_5'>
              <div className='div_5_1'>
                 <span >1</span>
                 <span>2</span>
                 <span>3</span>
                 <span>4</span>
                 <span>5</span>
              </div>
              <div className='div_5_2'>
                <div >
               <span style={{backgroundColor:"black",color:"white",fontSize:"40px"}}> <i class="fa-solid fa-truck"></i></span>
                  <div>
                    <h3>ONE TIME</h3>
                    <p>Delivery</p>
                  </div>
                </div>
                <div>
                <span style={{backgroundColor:"black",color:"white",fontSize:"40px"}}> <i class="fa-sharp fa-solid fa-virus"></i></span>
                <div>
                    <h3>100% QUALITY</h3>
                    <p>Products</p>
                  </div>
                </div>
                <div>
                <span style={{backgroundColor:"black",color:"white",fontSize:"40px"}}> <i class="fa-sharp fa-solid fa-user-tie"></i></span>
                <div>
                    <h3>Eassy CUSTMORS</h3>
                    <p>Support</p>
                  </div>
                </div>
                <div>
                <span style={{backgroundColor:"black",color:"white",fontSize:"40px"}}> <i class="fa-solid fa-check"></i></span>
                <div>
                    <h3>SECURITY AND SAFE</h3>
                    <p>Sopping</p>
                  </div>
                </div>
                <div>
                <span style={{backgroundColor:"black",color:"white",fontSize:"40px"}}> <i class="fa-solid fa-calculator"></i></span>
                <div>
                    <h3>MULTIPLE PAYMENT</h3>
                    <p>Option</p>
                  </div>
                </div>
              </div>
         </div>
         <div className='div_6'>
            <img src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" alt="" />
            <img src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" alt="" />
            <img src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" alt="" />
            <img src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" alt="" />
         </div>
     </div>
    </div>
  )
}

export default HomePage

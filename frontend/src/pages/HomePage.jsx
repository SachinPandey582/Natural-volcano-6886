import React,{useState,useEffect} from 'react';
import './home.css';

const imgIndex=(num)=>{
   const arr=["https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png",
   "https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
   "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
   "https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png",
   "https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png"

   ]
   return arr[num]
}

const smallImg=(a,b,c,d,e)=>{
  let obj={}
  const arr=["https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png" ,
  "https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png" ,
  "https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png" ,
  "https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png" ,
  "https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png" ,
  "https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png",
  "https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png"

  ]
  return obj={
    a:arr[a],
    b:arr[b],
    c:arr[c],
    d:arr[d],
    e:arr[e],
  }
}

const HomePage = () => {
const [index,setIndex]=useState(0);
const [a,setA]=useState(0);
const [b,setB]=useState(1);
const [c,setC]=useState(2);
const [d,setD]=useState(3);
const [e,setE]=useState(4);
let x=imgIndex(index)
let y=smallImg(a,b,c,d,e)

useEffect(() => { const interval = setInterval(() => {if(index==4){
  setIndex(0)}else if(index==0){
    setIndex(1)
  }else{
    setIndex(index+1)
  }
 }, 2000); return () => clearInterval(interval); },[index]); 


  
  return (
    <div>
     <div className='div_1'>
        <div className='div_2' >
          <hr className='hr1'/>
         
           <h1><span style={{color:"#000000",fontSize:"22px",lineHeight:"20px",fontFamily: "Poppins",backgroundColor:" white" }}>Shop By Category</span></h1>
           <hr className='hr2'/>
          
        </div>
        <div className='div_3'>
        <div style={{display:"flex",justifyContent:"space-between",width:"99%",margin:"auto",
      position:'absolute',top:"100px" }}>
            <button style={{padding:"10px",backgroundColor:"white",fontSize:"20px",
            border:"1px solid white",fontWeight:"bold"}} onClick={()=>{
              if(a==7) { setA(0);
                // setA(a+1);
                setB(b+1);
                setC(c+1);
                setD(d+1);
                setE(e+1)}
              else if(b==7){
                setB(0);
                setA(a+1);
                // setB(b+1);
                setC(c+1);
                setD(d+1);
                setE(e+1)
              }else if(c==7){
                setC(0);
                setA(a+1);
                setB(b+1);
                // setC(c+1);
                setD(d+1);
                setE(e+1)
              }else if(d==7){
                setD(0);
                setA(a+1);
                setB(b+1);
                setC(c+1);
                // setD(d+1);
                setE(e+1)
              }else if(e==7){
                setE(0);
                setA(a+1);
                setB(b+1);
                setC(c+1);
                setD(d+1);
                // setE(e+1)
              }else{
                setA(a+1);
                setB(b+1);
                setC(c+1);
                setD(d+1);
                setE(e+1)
              }
            }}><i class="fa-duotone fa-less-than"></i></button>
              <button style={{padding:"10px",backgroundColor:"white",fontSize:"20px",
            border:"1px solid white",fontWeight:"bold"}}  onClick={()=>{
                if(a==0) { setA(7);
                  setB(b-1);
                  setC(c-1);
                  setD(d-1);
                  setE(e-1)}
                else if(b==0){
                  setB(7);
                  setA(a-1);
                  setC(c-1);
                setD(d-1);
                setE(e-1)
                }else if(c==0){
                  setC(7);
                  setB(b-1);
                  setA(a-1);
                  setD(d-1);
                  setE(e-1)
                }else if(d==0){
                  setD(7);
                  setB(b-1);
                  setC(c-1);
                  setA(a-1);
                  setE(e-1)
                }else if(e==0){
                  setE(7);
                  setB(b-1);
                  setC(c-1);
                  setD(d-1);
                  setA(a-1);
                }
                else{
                  setA(a-1);
                setB(b-1);
                setC(c-1);
                setD(d-1);
                setE(e-1)
                }
            
            }}><i class="fa-duotone fa-greater-than"></i></button>
           
           
            </div>

           
            <div >
                <img src={y.a} alt="" />
            </div>
            <div>
                <img src={y.b} alt="" />
            </div>
            <div>
                <img src={y.c} alt="" />
            </div>
            <div>
                <img src={y.d}alt="" />
            </div>
            <div>
                <img src={y.e} alt="" />
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
            <button onClick={()=>{
              if(index==4) {setIndex(0) }else{
                setIndex(index+1)
              }
            }}><i class="fa-solid fa-arrow-left"></i></button>
              <button onClick={()=>{
                if(index==0) { setIndex(4)}else{
                  setIndex(index-1)
                }
            
            }}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <img src={x} alt="" />
            {/* <img src="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" alt="" />
            <img style={{display:"none"}} src="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" alt="" /> */}
        </div>
         <div className='div_5'>
              <div  className='div_5_1'>
                {
                  index==0?<span style={{backgroundColor:"white",cursor:"pointer"}}>1</span>:<span style={{backgroundColor:"",cursor:"pointer"}}
                 onClick={()=>setIndex(0) } >1</  span>
                }
                 
                 {
                  index==1?<span style={{backgroundColor:"white",cursor:"pointer"}}>2</span>:<span style={{backgroundColor:"",cursor:"pointer"}}
                  onClick={()=>setIndex(1) }>1</span>
                }
               {
                  index==2?<span style={{backgroundColor:"white",cursor:"pointer"}}>3</span>:<span style={{backgroundColor:"",cursor:"pointer"}}
                  onClick={()=>setIndex(2) }>1</span>
                }
                 {
                  index==3?<span style={{backgroundColor:"white",cursor:"pointer"}}>4</span>:<span style={{backgroundColor:"",cursor:"pointer"}}
                  onClick={()=>setIndex(3) }>1</span>
                }
                {
                  index==4?<span style={{backgroundColor:"white",cursor:"pointer"}}>5</span>:<span style={{backgroundColor:"",cursor:"pointer"}}
                  onClick={()=>setIndex(4) }>1</span>
                }
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

import axios from "axios";
import Swal from 'sweetalert2'
import "@sweetalert2/themes/wordpress-admin"

// import { ToastContainer, toast } from 'react-toastify';

// const notify = () => toast("Wow so easy!");

export const getUserData = async (userDataLogin) => {
  let user = await fetch("https://cute-tan-magpie-kilt.cyclic.app/user/login", {
    method: "POST",
    headers: {
      "content-type": "Application/json"
     
    },
    body: JSON.stringify(userDataLogin),
  });
  // console.log(userDataLogin)
  let res = await user.json();
  console.log(res, "login res");
  if(res.msg==='Account Not Exist'){
    Swal.fire({
      text:"Account Not Exist, Please Sign Up",
      icon:"error",
      width:"22em"
    })
  }
  else{
      Swal.fire({
        text:"Welcome Back 🙏",
        icon:"success",
        width:"22em"
      })
    localStorage.setItem('token',res.token)
    localStorage.setItem("responseData", JSON.stringify(res))
    
  }
  
  return res;
};

export const postUserData = async (userData) => {
  console.log(userData);

  let res = await axios.post("https://cute-tan-magpie-kilt.cyclic.app/user/signup", userData);
  console.log(res, "newhume");
  console.log(res.data.msg, "newhume234");
  if(res.data.msg==='User Registered Succesfully'){
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("responseData", JSON.stringify(res.data))
    Swal.fire({
      text:"User Registered, Successfully!",
      icon:"success",
      width:"22em"
    })
  }
  else{
    if(res.data.msg==='User Already Exist Please Login in Your Existing Account'){
      Swal.fire({
        text:"User already registered, please login..!",
        icon:"info",
        width:"22em"
      })
    }
    
  }
  

  return res;
};

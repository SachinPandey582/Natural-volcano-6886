import axios from "axios";

 export const getUserData = async (userDataLogin) => {
    
    
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
    return res
    
  };


 

//   dispatchx({ type: "RESETX" });



 export const postUserData = async(userData) => {
    
    
    console.log(userData)

    let res = await axios.post("http://localhost:8080/user/signup", userData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((erx) => {
    //     console.log("erx is", erx);
    //   });

    console.log(res,"new")

    return res
  };

  

//   dispatch({ type: "RESET" });
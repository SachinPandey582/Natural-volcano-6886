import axios from "axios";

export const getUserData = async (userDataLogin) => {
  let user = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "content-type": "Application/json"
     
    },
    body: JSON.stringify(userDataLogin),
  });

  let res = await user.json();
  console.log(res);
  localStorage.setItem('token',res.token)
  return res;
};

export const postUserData = async (userData) => {
  console.log(userData);

  let res = await axios.post("http://localhost:8080/user/signup", userData);

  console.log(res, "new");

  return res;
};

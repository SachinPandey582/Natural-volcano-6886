export const getCartData = async () => {
    let data = await fetch(`https://cute-tan-magpie-kilt.cyclic.app/cart`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    let res = await data.json();
    return res
    
  };
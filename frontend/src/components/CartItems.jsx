import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getCartData } from '../Api';
import { allCartData } from '../Redux/Cart/CartAction';

const CartItems = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store.cartManager);
    const { isAuth } = useSelector((store) => store.authState);
    
    const bringcartdata = async () => {
  
      let res = await getCartData();
  
      dispatch(allCartData(res));
    };
    React.useEffect(() => {
      bringcartdata();
    }, [isAuth]);
  return (
    <>
      
    </>
  )
}

export default CartItems

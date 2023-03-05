import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CartItems from '../CartItems';

const FilterSidebar = () => {
  const [priceFilters, setPriceFilters] = useState({
    under500: false,
    between500and1000: false,
    between1000and2000: false
  });

  const [discountFilters, setDiscountFilters] = useState({
    zeroOrMore: false,
    tenOrMore: false,
    twentyOrMore: false
  });

  const [categoryFilters, setCategoryFilters] = useState({
    Beauty: false,
    Fashion: false,
    Home: false
  });

  const handlePriceFilterChange = (event) => {
    setPriceFilters({
      ...priceFilters,
      [event.target.name]: event.target.checked
    });
  };

  const handleDiscountFilterChange = (event) => {
    setDiscountFilters({
      ...discountFilters,
      [event.target.name]: event.target.checked
    });
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilters({
      ...categoryFilters,
      [event.target.name]: event.target.checked
    });
 
  };

  useEffect(()=>{
   console.log(categoryFilters)
  },[categoryFilters])
  return (
    <div>
       
        <br/>
      <Heading size={"2xl"}>Filter by:</Heading>
      <br/>
      
      <Heading as={"h3"} >Price:</Heading>
      <br/>

      <label>
        
        <input
          type="checkbox"
          name="under500"
          checked={priceFilters.under500}
          onChange={handlePriceFilterChange}
        /> Under 500:
      </label>
      <br />
      <label>
        
        <input
          type="checkbox"
          name="between500and1000"
          checked={priceFilters.between500and1000}
          onChange={handlePriceFilterChange}
        /> Between 500 and 1000:
      </label>
      <br />
      <label>
        
        <input
          type="checkbox"
          name="between1000and2000"
          checked={priceFilters.between1000and2000}
          onChange={handlePriceFilterChange}
        /> Between 1000 and 2000:
      </label>
      <br/>
      <br />
    
      <Heading as={"h3"}>Discount:</Heading>
      <br />
      <label>
        
        <input
          type="checkbox"
          name="zeroOrMore"
          checked={discountFilters.zeroOrMore}
          onChange={handleDiscountFilterChange}
        /> 0% or more:
      </label>
      <br />
      <label>
        
        <input
          type="checkbox"
          name="tenOrMore"
          checked={discountFilters.tenOrMore}
          onChange={handleDiscountFilterChange}
        /> 10% or more:
      </label>
      <br />
      <label>
        
        <input
          type="checkbox"
          name="twentyOrMore"
          checked={discountFilters.twentyOrMore}
          onChange={handleDiscountFilterChange}
        /> 20% or more:
      </label>
      <br />
      <br />
      <Heading as={"h3"}>Category:</Heading>
      <br />
      <label>
       
        <input
          type="checkbox"
          name="Beauty"
          checked={categoryFilters.Beauty}
          onChange={handleCategoryFilterChange}
        /> Beauty
      </label>
      <br />
      <label>
       
        <input
          type="checkbox"
          name="Fashion"
          checked={categoryFilters.Fashion}
          onChange={handleCategoryFilterChange}
        /> Fashion
      </label>
      <br />
      <label>
       
       <input
         type="checkbox"
         name="Home"
         checked={categoryFilters.Home}
         onChange={handleCategoryFilterChange}
       /> Home
     </label>
     <br />
    </div>
  );
};

export default FilterSidebar;

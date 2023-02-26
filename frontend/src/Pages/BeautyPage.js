import { Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/AllProducts/BeautyCard";
import FilterSidebar from "../components/AllProducts/FilterProducts";
import BPCss from "./BeautyPage.module.css";

const Beauty = () => {
  const [totalData, setTotalData] = useState([]);

  const [priceFilters, setPriceFilters] = useState({
    under500: false,
    between500and1000: false,
    between1000and2000: false,
  });

  const [discountFilters, setDiscountFilters] = useState({
    zeroOrMore: false,
    tenOrMore: false,
    twentyOrMore: false,
  });

  const [categoryFilters, setCategoryFilters] = useState({
    Beauty: false,
    Fashion: false,
    Home: false,
  });

  const handlePriceFilterChange = (event) => {
    setPriceFilters({
      ...priceFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDiscountFilterChange = (event) => {
    setDiscountFilters({
      ...discountFilters,
      [event.target.name]: !event.target.checked,
    });
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilters({
      ...categoryFilters,
      [event.target.name]: event.target.checked,
    });
  };
  const getData = async () => {
    let data = await axios.get(`http://localhost:8080/products`);
    setTotalData(data.data);
  };
  const getData1 = async () => {
    let data = await axios.get(
      `http://localhost:8080/products?category=Beauty`
    );
    setTotalData(data.data);
  };
  const getData2 = async () => {
    let data = await axios.get(
      `http://localhost:8080/products?category=Fashion`
    );
    setTotalData(data.data);
  };
  const getData3 = async () => {
    let data = await axios.get(
      `http://localhost:8080/products?category=Home`
    );
    setTotalData(data.data);
  };
  const getData4 = async (num) => {
    console.log(num)
    let data = await axios.get(
      `http://localhost:8080/products?category=Fashion&lte=${num}&page=1&limit=10`
    );
    setTotalData(data.data);
  };
  const getData5 = async (min,max) => {
    let data = await axios.get(
      `http://localhost:8080/products?category=Fashion&min=${min}&max=${max}&page=1&limit=10`
    );
    setTotalData(data.data);
  }
  const getData6 = async (num) => {
    let data = await axios.get(
      `http://localhost:8080/products?category=Fashion&gte=${num}&page=1&limit=10`
    );
    setTotalData(data.data);
  }
//   between1000and2000;

//   http://localhost:8080/products?category=Fashion&min=3000&max=4000&page=1&limit=10
console.log(priceFilters)
  console.log(totalData);
  useEffect(() => {
    console.log(categoryFilters);
    if (categoryFilters.Beauty) {
      getData1();
    } else if (categoryFilters.Fashion) {
        getData2()
    }  else if (categoryFilters.Home) {
        getData3()
    }else if(priceFilters.under500){
        getData4(3000)
    }else if(priceFilters.between500and1000){
        getData5(3000,5000)
    }
    else if(priceFilters.between1000and2000){
        getData6(5000)
    }
     else {
      getData();
    }
  }, [categoryFilters,priceFilters]);
  return (
    <div className={BPCss.mainContainer}>
      <div className={BPCss.LeftContainer}>
        <br />

        <i>Home/Wow Nivia</i>
        {/* <FilterSidebar/> */}
        <div>
          <br />
          <Heading size={"2xl"}>Filter by:</Heading>
          <br />

          <Heading as={"h3"}>Price:</Heading>
          <br />

          <label>
            <input
              type="checkbox"
              name="under500"
              checked={priceFilters.under500}
              onChange={handlePriceFilterChange}
            />{" "}
            Under 3000:
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="between500and1000"
              checked={priceFilters.between500and1000}
              onChange={handlePriceFilterChange}
            />{" "}
            Between 3000 and 5000:
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="between1000and2000"
              checked={priceFilters.between1000and2000}
              onChange={handlePriceFilterChange}
            />{" "}
            Above 5000
          </label>
          <br />
          <br />
          <Heading as={"h3"}>Discount:</Heading>
          <br />
          <label>
            <input
              type="checkbox"
              name="zeroOrMore"
              checked={discountFilters.zeroOrMore}
              onChange={handleDiscountFilterChange}
            />{" "}
            0% or more:
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="tenOrMore"
              checked={discountFilters.tenOrMore}
              onChange={handleDiscountFilterChange}
            />{" "}
            10% or more:
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="twentyOrMore"
              checked={discountFilters.twentyOrMore}
              onChange={handleDiscountFilterChange}
            />{" "}
            20% or more:
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
            />{" "}
            Beauty
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Fashion"
              checked={categoryFilters.Fashion}
              onChange={handleCategoryFilterChange}
            />{" "}
            Fashion
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Home"
              checked={categoryFilters.Home}
              onChange={handleCategoryFilterChange}
            />{" "}
            Home
          </label>
          <br />
        </div>
      </div>
      <div className={BPCss.RightContainer}>
        {totalData.map((el) => (
          <ProductCard image={el.img} title={el.title} price={el.price} />
        ))}
      </div>
    </div>
  );
};

export default Beauty;

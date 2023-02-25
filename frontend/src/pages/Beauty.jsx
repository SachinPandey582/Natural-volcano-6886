import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
    
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { getProducts } from '../Redux/Product/action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

const Beauty = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialLte = searchParams.getAll("lte")
    const [lte, setLte] = useState(initialLte || [])
    // const [prod,setProd]=useState("")
    const products=useSelector(store=>store.products)
    console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(products.length===0){
            dispatch(getProducts())
        }
        let params=(`?category=Beauty${lte}`)
        setSearchParams(params)
    },[products.length,dispatch,lte,setSearchParams])
    console.log(searchParams)
    



    const handleLteCheckbox = (e) => {
        const newLte = [...lte]
        if (newLte.includes(e.target.value)) {
            newLte.splice(newLte.indexOf(e.target.value), 1)
        } else {
            newLte.push(e.target.value)
        }
        setLte(newLte)
    }
console.log(lte)

    return (
        <>
            <Box display="flex" textAlign="center" margin="auto" justifyContent="center" gap="20px" fontSize="20px" mt={10}>
                <Box>Sort By: </Box>
                <Box>Price: Low to High</Box>
                <Box>Price: High to Low </Box>
                <Box>Discount</Box>
            </Box>
            <Box w={60} fontWeight="bold" fontSize={20}>Filter By</Box>
            <Box  display="flex">
                    <Box w="20%" ml="30px">
                        <Accordion defaultIndex={[0]} allowMultiple w={40}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                            Price
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} position="relative">
                                    <Checkbox value="&lte=2000" checked={lte.includes('&lte=2000')} onChange={handleLteCheckbox}>1000-2000</Checkbox>
                                <Checkbox value="1000" checked={lte.includes('1000')} onChange={handleLteCheckbox}>500-1000</Checkbox>
                                <Checkbox value="500" checked={lte.includes('500')} onChange={handleLteCheckbox}>Below 500</Checkbox>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion defaultIndex={[0]} allowMultiple w={40}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                            Discount
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Checkbox>0% or more</Checkbox>
                                    <Checkbox>10% or more</Checkbox>
                                    <Checkbox>20% or more</Checkbox>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion defaultIndex={[0]} allowMultiple w={40}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                            Category
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Checkbox>F&B</Checkbox>
                                    <Checkbox>Packaged Commodities</Checkbox>
                                    <Checkbox>Packaged Foods</Checkbox>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    
                    </Box>
                {/* </Box> */}
                {/* //map here */}
                <Grid templateColumns='repeat(4,250px)' w="100%">
                    
             
                {products.length>0 && products.map((el)=>{
                    return <ProductCard image={el.img} title={el.title} price={el.price} />})}
                
                </Grid>
            </Box>



        </>
    )
}

export default Beauty
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { AiOutlineDollar, AiOutlinePicture, AiOutlineShoppingCart, AiOutlineTag } from 'react-icons/ai';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [img, setimg] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Title:', title);
//     console.log('Image URL:', img);
//     console.log('Quantity:', quantity);
//     console.log('Price:', price);
//     console.log('Category:', category);
//   };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title,
      price,
      img,
      quantity,
      category,
    };
    fetch(`http://localhost:8080/products`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //there there when i click on Submit i want to make the data false in addthedata part
    alert("the data has been added to the main page ")
  };


  return (
    <Box p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter product title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              leftElement={<InputLeftElement children={<AiOutlineTag />} />}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Image URL</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter image URL"
                value={img}
                onChange={(event) => setimg(event.target.value)}
                leftElement={<InputLeftElement children={<AiOutlinePicture />} />}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter Category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                leftElement={<InputLeftElement children={<AiOutlinePicture />} />}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Quantity</FormLabel>
            <InputGroup>
              <Input
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(event) => setQuantity(parseInt(event.target.value))}
                leftElement={<InputLeftElement children={<AiOutlineShoppingCart />} />}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <InputLeftElement children={<AiOutlineDollar />} />
              <Input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(event) => setPrice(parseInt(event.target.value))}
              />
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="green" leftIcon={<AiOutlineTag />}>
            Add Product
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ProductForm;

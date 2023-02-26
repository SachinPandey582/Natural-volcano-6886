import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react';

const MyTable = ({ data, onEdit, onDelete }) => {
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>ID</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image boxSize="50px" objectFit="cover" src={item.image} />
              </Td>
              <Td>{item.name}</Td>
              <Td>{item.price}</Td>
              <Td>{item.id}</Td>
              <Td>
                <Flex>
                  <Button
                    size="sm"
                    mr={{ base: '2', md: '4' }}
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => onDelete(item)}
                    bgColor="red.500"
                    _hover={{ bgColor: 'red.600' }}
                  >
                    Delete
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MyTable;

import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import "./UserDataTable.css";
const getData1=async()=>{
    let res=await axios.get(`http://localhost:8080/users?role=admin&pass=8765`)
    return res
    }
const TableComponent = ({ data }) => {
    const [users,setusers]=useState([])
    let fetchusers=async()=>{
        let data1=await getData1()
        console.log("data1",data1)
        setusers(data1.data)

    }
    useEffect(()=>{
        fetchusers()
    },[])
  return (
    <Table variant="simple" size="md" className="table">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>password</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, index) => (
          <Tr key={index}>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.password}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableComponent;

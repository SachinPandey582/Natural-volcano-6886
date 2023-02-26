import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
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

const changeTheUser=async(id,role)=>{
  let res1=await fetch(`https://cute-tan-magpie-kilt.cyclic.app/user/update/${id}?role=admin&pass=8765`,{
    method:"PATCH",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({_id:id,role: role==="user" ?"admin":"user" })
  })

console.log( await res1.json()); 
 fetchusers()
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
            <Td>{item.role} <Button onClick={()=>changeTheUser(item._id,item.role)}>Change</Button></Td>
            <Td>{item.password}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableComponent;

 
import React, { useEffect } from "react"

 
import {Box,Input,Button,Text,Image} from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

function Search() {

  const [state,setState]=useState("");
  const [arr,setArr]=useState([]);

  useEffect(()=>{

    let id=setTimeout(()=>{

      if(state!=="")
      {
        getData();
      }


    },500)

    return ()=>{
      clearTimeout(id);
    }


  },[state])

  const getData=()=>{

    fetch(`http://localhost:3001/users?q=${state}`).then((res)=>{
      return res.json();
    }).then((data)=>{

       setArr(data);

    })

  }


  return (
    <div>

        <Box display="flex"   alignItems="center" w="25%" margin="auto" ><FaSearch style={{marginRight:"-35px"}} /><Input textAlign="center" borderRadius="20px" placeholder="Search"  type="text" autoFocus value={state} onChange={(event)=>{
          setState(event.target.value);
        }} /></Box>
       {state!==""?<Box display="flex"  flexDirection="column" gap="0" w="25%" margin="auto" height="600px" bg="#F0FFF0" >
          {arr.map((ele)=>{
            return <Text display="flex" alignItems="center" gap="5"  borderRadius="20px" p="5"  ><Image w="10%"  borderRadius="20px" src={ele.image} alt="one"/><Link to={`/trending/${ele.id}`}><h1><b>{ele.name}</b></h1><p style={{fontSize:"14px"}}>{ele.username}</p></Link></Text>
          })}
        </Box>:null}

    </div>
  )
}

export default Search
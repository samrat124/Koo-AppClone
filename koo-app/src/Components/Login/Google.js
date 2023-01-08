
import React, { useEffect } from "react"



import { Box, Input, Button, Text, Image } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"
import Login from "./Login";
import Dictaphone from "./mmm";

function Search() {

  const [state, setState] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {

    let id = setTimeout(() => {

      if (state !== "") {
        getData();
      }


    }, 500)

    return () => {
      clearTimeout(id);
    }


  }, [state])

  const getData = () => {

    fetch(`http://localhost:3001/users?q=${state}`).then((res) => {
      return res.json();
    }).then((data) => {

      setArr(data);

    })



  }
//   function record() {
//     var recognition = new webSpeechRecognition();
//     recognition.lang = "en-GB";

//     recognition.onresult = function(event) {
//         // console.log(event);
//         console.log(event)
//         setState(event.results[0][0].transcript);
//     }
//     recognition.start();

// }
const valueText=(value)=>{
setState(value);
}

   
  


  return (
    <div>

      <Dictaphone onChange1={valueText} state={state} />
      {state !== "" ? <Box display="flex" flexDirection="column" gap="0" w="90%" margin="auto" height="600px" bg="#F0FFF0" >
        {arr.map((ele) => {
          return <Text display="flex"   alignItems="center" gap="5" borderRadius="20px" p="5"  ><Image w="10%" borderRadius="20px" src={ele.image} alt="one" /><Link onClick={()=>{
            setState("");
          }}  to={`individualuser/${ele.id}`}><h1><b>{ele.name}</b></h1><p style={{ fontSize: "14px" }}>{ele.username}</p></Link></Text>
        })}
      </Box> : null}  
      {/* <button onClick={()=>record()}>lo</button> */}
      

    </div>

  )
}

export default Search
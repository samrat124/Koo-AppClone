import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
export default function Cricket() {
    const [data, setdata] = useState([]);
    const[load,setLoad]=useState(true);

    useEffect(() => {
        getdata();
      }, []);
    
      const getdata = () => {
         
        fetch("http://localhost:3001/cricket")
          .then((d) => {
            return d.json();
          })
          .then((res) => {
            setdata(res);
            setLoad(false)
            console.log(res);
          });
      };
    if(load){
      return <Loading/>
    }

  return (
    <>
     
     {
       data.map((data)=>{
       return  (<Card image={data.image} name={data.name} username={data.username} description={data.description} image2={data.image2} hashtags={data.hastags} profession={data.profession} />)
        })
       } 

     
    </>
  )
}


import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Cricket() {
    const [data, setdata] = useState([]);

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
            console.log(res);
          });
      };


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


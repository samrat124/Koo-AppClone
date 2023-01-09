import React, { useState,useEffect } from 'react'
import Card from '../Card/Card'

function NewData() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("http://localhost:3001/new")
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
        data.map((data) => {
          return (<Card image={data.image} name={data.name} username={data.username} description={data.description} image2={data.image2} hashtags={data.hastags} profession={data.profession} />)
        })
      }


    </>
  )
}
export default NewData
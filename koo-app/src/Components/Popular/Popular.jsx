import React, { useState,useEffect } from 'react'
import Card from '../Card/Card'

const Popular = () => {
    const[popularData,setPopularData]=useState([]);
    let fetchData=async()=>{
        let res=await fetch('http://localhost:3001/mostPopular')
        let popular=await res.json();
        setPopularData(popular);
        console.log(popular )
    }
    useEffect(() => {
      fetchData();
    }, [])
    
  return (
    <div>
     {popularData.map((ele,index)=>{
        return <Card {...ele} key={index+5}/>
     })}
    </div>
  )
}

export default Popular
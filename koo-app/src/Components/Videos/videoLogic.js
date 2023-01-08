import React from 'react'
import VideoCard from '../videocard/VideoCard';
import { useState,useEffect } from 'react';
import VideosCard from './Videos';

function VideoLogic() {

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
       return  (<VideosCard image={data.image} name={data.name} username={data.username} description={data.description} image2={data.image2} hashtags={data.hastags} profession={data.profession} />)
        })
       }

     
    </>
  )
}

export default VideoLogic
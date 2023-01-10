import React, { useState,useEffect } from 'react'
import Card from '../Card/Card'
import Loading from '../Loading/Loading';

function NewData() {
  const [data, setdata] = useState([]);
  const[load,setLoad]=useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("https://mock-server-app-fqpl.onrender.com/new")
      .then((d) => {
        return d.json();
      })
      .then((res) => {
        setdata(res);
        setLoad(false);
        console.log(res);
      });
  };
   
  if(load){
    return <Loading/>
  }

  return (
    <>


      {
        data.map((data) => {
          return (<Card image={data.image} name={data.name} username={data.username} description={data.description}  hashtags={data.hastags} profession={data.profession} />)
        })
      }


    </>
  )
}
export default NewData
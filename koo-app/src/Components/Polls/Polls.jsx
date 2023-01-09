import React,{useState,useEffect} from 'react'
import PCard from './PCard';
const Polls = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        getdata();
      }, []);
    
      const getdata = () => {
        fetch("http://localhost:3001/polls")
          .then((d) => {
            return d.json();
          })
          .then((res) => {
            setdata(res);
            console.log(res);
          });
      };
  return (
    <div>
      {data.map((ele,index)=>{
        return <PCard {...ele} key={index}/>
      })}
    </div>
  )
}

export default Polls
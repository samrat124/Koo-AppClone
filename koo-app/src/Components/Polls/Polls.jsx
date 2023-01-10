import React,{useState,useEffect} from 'react'
import PCard from './PCard';
import Loading from '../Loading/Loading';
const Polls = () => {
    const [data, setdata] = useState([]);
    const[load,setLoad]=useState(true);
    useEffect(() => {
        getdata();
      }, []);
    
      const getdata = () => {
        fetch("https://mock-server-app-fqpl.onrender.com/polls")
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
    <div>
      {data.map((ele,index)=>{
        return <PCard {...ele} key={index}/>
      })}
    </div>
  )
}

export default Polls
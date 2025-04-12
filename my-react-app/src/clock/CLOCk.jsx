import React,{useState , useEffect} from 'react'

const CLOCk = () => {
        const [time,settime]=useState(new Date().toLocaleTimeString('en-US',{hour12:true}));
        useEffect(() => {
            const interval = setInterval(() => {
                settime(new Date().toLocaleTimeString('en-US',{hour12:true}));
            }, 1000);
            return () => clearInterval(interval);
        });
  return (
    <div>
        <h1>CLOCK HO MUGI </h1>
        <h2>{time}</h2>
    </div>
  )
}

export default CLOCk
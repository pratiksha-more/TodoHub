import React, { useState,useEffect } from 'react'

function Timer() {

    const [time,setTime]=useState(0)

    useEffect(()=>{
        console.log("Adding New Interval")
       const timer=setInterval(()=>setTime(time+1),1000);
       return function(){
        clearInterval(timer);
       };

    },[time]);

  return (
    <>
    <h1>StopWatch</h1>
    <p>Count is {time}</p>
    {/* <button onClick={()=>setTime(time+1)}>Click Me</button> */}
    </>
  );
};

export default Timer
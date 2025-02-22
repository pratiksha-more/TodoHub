import React,{useEffect, useState} from "react";

const CountComponent=()=>{

    const [count,setCount]=useState(0);


    useEffect(()=>{
        console.log("My Component is mounting ...");
        return function (){
            console.log("Unmounting")
        }
    },[]);

    useEffect(()=>{
        console.log("count is : ",{count});
    },[count]);



    
    // console.log("Count is ",count);
    return(
        <div>
            
        <p>Count is : {count}</p>
        <h6> Number is {count% 2===0 ? 'Even':'odd'}</h6>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>



    );
};

export default CountComponent;
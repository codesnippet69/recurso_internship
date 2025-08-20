import React, {useState} from 'react'


function UsingHook(){
    const [count,setCount]=useState(0);

    return(
        <div>
            <p>the value of count is {count}</p>
            <h6>the number is {count%2===0 ? "Even" : "Odd"}</h6>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
             <button onClick={()=>{setCount(count-1)} }>Decrement</button>
        </div>
    )
}
export default UsingHook 
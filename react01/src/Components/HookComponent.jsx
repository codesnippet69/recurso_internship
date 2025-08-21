import React, {useState} from 'react'


function UsingHook(){
    const [count,setCount]=useState(0);
    const [time, setTime]=useState(new Date().toLocaleTimeString());


setTimeout(()=>{
    setTime(new Date().toLocaleTimeString());

},1000)



    function incrementValue(){
        
setCount((prevCounter) => prevCounter + 1)
setCount((prevCounter) => prevCounter + 1)
setCount((prevCounter) => prevCounter + 1)
setCount((prevCounter) => prevCounter + 1)
setCount((prevCounter) => prevCounter + 1)
               
    }
    function decrementValue(){
         if(count>0){
                setCount(count-1)}else{
                    alert("alert you cant go below 0")
                }
    }

    return(
        <div>

            <p>the value of time is {time}</p>
            <p>the value of count is {count}</p>
            <h6>the number is {count%2===0 ? "Even" : "Odd"}</h6>
            <button onClick={incrementValue}>
                Increment</button>
             <button onClick={
              decrementValue }>Decrement</button>
        </div>
    )
}
export default UsingHook 
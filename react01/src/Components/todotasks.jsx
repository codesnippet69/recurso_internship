import React from 'react'


function Todotasks(props){
 return(
        <li className='Todotasks'>
 <span>
           {props.completed ? <></> : <input type="checkbox" />}
            <span className='todo-item-text'>
            {props.text}
            </span>
            </span>
            <p>...</p>
            
          
        </li>
 );
};

export default Todotasks;
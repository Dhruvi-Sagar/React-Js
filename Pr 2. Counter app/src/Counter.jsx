import React from 'react'                
import "./App.css"
const Counter = ({no,plus,min,Reset}) =>{
    return(
        <div align="center">
            <h1>Counter App</h1>
            <button onClick={()=>plus()}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button  >{no}</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>min()}>-</button> <br/> <br/>
            <button onClick={()=>Reset()}>Reset  </button>
        </div> 

        <button>

            <div></div>
        </button>

    )
}
export default Counter
 






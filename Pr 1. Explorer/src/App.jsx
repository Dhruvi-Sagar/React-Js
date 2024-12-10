import { useState } from "react";

function app()
{
  const [cnt,setcnt] =useState(0);

  const inc =() =>
  {
    if(cnt )
    {
      setcnt(cnt + 1)
    }
  }

  const dec =()=>
  {
    setcnt(cnt - 1)
  }
  
  return (

    <div align="center">
      <h2>Count :- {cnt}</h2>
      <button onClick={()=> inc()}>
        +
      </button>
      <button onClick={()=>dec()}>
        -
      </button>

    </div>
  )

}
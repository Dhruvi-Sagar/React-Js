import {useState} from "react";
import "./App.css" 
import Counter from "./Counter"

function App() {

  const [no,setNo] = useState(0);

  const inc = () =>{
    setNo(no +1)
  }
  const dec= () =>{
    setNo(no-1)
  }

  const reset = () =>{
    setNo(0)
  }

  return (
   <Counter
    no = {no}
    plus = {inc}
    min = {dec}
    Reset = {reset}
   />
  )
}

export default App
import { BrowserRouter, Routes,Route } from "react-router-dom"
import view from "./pages/view"
import add from "./pages/add"
import edit from "./pages/edit"

function App() {
 return (
    <>
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<view/>}/>
                <Route path="/add" element={<add/>}/>
                <Route path="/edit" element={<edit/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

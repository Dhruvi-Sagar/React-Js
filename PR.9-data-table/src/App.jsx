import { BrowserRouter,Route,Routes} from "react-router-dom"
import form from "./pages/form"
import edit from "./pages/edit"
import table from "./pages/table"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<table/>}/>
          <Route path="/" element={<form/>}/>
          <Route path="/" element={<edit/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App

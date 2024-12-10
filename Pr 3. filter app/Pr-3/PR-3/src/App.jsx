import { useState } from 'react';
import {category,item} from "./Data";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import  './App.css';

function App() {

  const [filterdata, setFilterData] = useState([])
  const categoryButtonClick = (cat) => {
    if (cat == "All") {
      setFilterData(item)
    } else {
      let up = item.filter((product) => {
        return product.category == cat
      })
      setFilterData(up)
    }
  }


  return (
    <div align="center">
      <h1>FilTer App</h1>
      <Product
          category = {category}
          item = {item}
          categoryButtonClick={categoryButtonClick}
          filterdata={filterdata}
      />
    </div>
  )
}

export default App
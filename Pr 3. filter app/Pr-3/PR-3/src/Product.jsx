import React from "react";
import  './App.css';
const Product = ({ category, item, categoryButtonClick, filterdata }) => {
    return (
        <div align="center">
            <div className="category">
                {
                    category.map((cat) => {
                        const { id, name } = cat;
                        return (
                            <button onClick={() => categoryButtonClick(cat.name)} className="mx-2 btn btn-success btn-sm">{name}</button>
                        )
                    })
                }
            </div>


            <div className="item mt-5">
                <div className="row justify-content-center">
                    {
                        filterdata.length != 0 ? (
                            <>
                                {
                                    filterdata.map((pr) => {
                                        return (
                                            <div className="col-md-3 my-4">
                                                <img src={pr.image} style={{ objectFit: "contain",height: "150px" }} className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{pr.name}</h5>
                                                    <h5 className="card-title">{pr.price}</h5>
                                                  
                                                </div>                                            </div>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                {
                                    item.map((pr) => {
                                        return (
                                            <div className="col-md-3 my-4">
                                                <img src={pr.image} style={{ objectFit: "contain", height: "200px" }} className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{pr.name}</h5>
                                                    <h5 className="card-title">{pr.price}</h5>
                                                   
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </div>
            </div>



        </div>
    )
}
export default Product;
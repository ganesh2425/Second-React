import React from "react";
import {useState} from "react";
let Product =()=>{
    let [product, setProduct] = useState
    ({
        product_name:"APPLE Watch Series 3 GPS",
        image:"https://rukminim1.flixcart.com/image/416/416/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70",
        price:2999,
        qty: 1,
    })
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-10">
                <table className="table table-hover stripped">
                    <thead>
                        <tr>
                            <th>Product_Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.product_name}</td>
                            <td>
                                <img src={product.image} width="100px" height="100px"/>
                            </td>
                            <td>{product.price}</td>
                            <td>
                            <i
                      className="fa fa-minus-square"
                      onClick={() => {
                        setProduct({ ...product, qty: product.qty<1?1:product.qty - 1 });
                      }}
                    ></i>   
                    {product.qty}
                    <i
                      className="fa fa-plus-square" 
                      onClick={() => {
                        setProduct({ ...product, qty: product.qty + 1 });
                      }}
                    ></i>
                            </td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>);
}
export default Product;
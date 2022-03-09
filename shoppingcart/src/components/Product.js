import React from 'react'

const Product = (props) => {
    const product = props.product;
    const addTo = props.addTo;

  return (
    <div className="col-sm-2 border m-2 d-flex flex-column p-2 rounded justify-content-lg-between">
        
        <h3>{product.title}</h3>
        <span>${product.price.toFixed(2)}</span>
        
        <button className="btn btn-primary" onClick={() => addTo(product)}>Add to Cart</button>
        
    </div>
  )
}

export default Product;
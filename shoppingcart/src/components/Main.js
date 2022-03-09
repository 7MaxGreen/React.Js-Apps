import React from 'react';
import Product from "./Product";


const Main = (props) => {
  const products = props.products;
  const addTo = props.addTo;

  return (
    <div>
      <h1>Main Page</h1>
      <div className="row">
        {
          products.map((product) => <Product  key={product.id} product={product} addTo={addTo}/>)
        }
      </div>
    </div>
  )
}

export default Main;
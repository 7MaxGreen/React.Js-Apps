import React from 'react'

const Cart = (props) => {

  const cartProducts = props.cartProducts;
  const add=props.add;
  const subtract = props.subtract;
  const deleteProduct = props.deleteProduct;
  const totalSum = cartProducts.reduce((sum, product) => sum + (product.price * product.qty), 0);
  return (
    <div>
      <hr />
      <h1>Your shopping cart</h1>
      {
        cartProducts.length === 0 && <p>Your cart is empty</p>
      }

      {
        cartProducts.map((cartProduct) =>(<div key={cartProduct.id} className="d-flex flex-column border m-2 p-2"> 
                                            <h5>{cartProduct.title}</h5>
                                            <span>{cartProduct.qty} ${(cartProduct.price.toFixed(2))}</span> 
                                            <span> Final price : ${(cartProduct.price * cartProduct.qty).toFixed(2)}</span>
                                              <div>
                                            <button className="btn btn-success m-2" onClick={() => add(cartProduct)}>+</button>
                                            <button className="btn btn-danger m-2" onClick={() => subtract(cartProduct)}>-</button>
                                            <button className="btn btn-dark m-2" onClick={() => deleteProduct(cartProduct)}>Delete</button>
                                             </div> 
                                          
                                          </div>))
      }
        <br/>
      {
        cartProducts.length > 0 &&
        <div>
          <h3>Total cart price</h3>
            $ {totalSum.toFixed(2)};
          </ div>
      }

      <button className="btn btn-success" 
      onClick={() => {
        alert("Your purchase is successful");
        localStorage.setItem("cartProducts", "[]");
        window.location.reload()}}>Purchase</button>

      
    </div>
  )
}

export default Cart;
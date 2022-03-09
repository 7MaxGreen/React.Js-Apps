import React, {useState, useEffect} from 'react';
import Cart from "./components/Cart";
import Main from "./components/Main";
import {data} from "./components/Data";

function App() {



  const {products} = data;
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

  useEffect(() =>{
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);
  
  function addTo(product) {
    const exists = cartProducts.find(cartProduct => cartProduct.id === product.id);

    if(exists) {
      setCartProducts(cartProducts.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, qty: cartProduct.qty + 1} : cartProduct ))
    } else{
      setCartProducts((prevCartProducts) =>[...prevCartProducts, {...product, qty : 1}]);
    }
    
    console.log(cartProducts);
  }

  function add(product) {
    setCartProducts(cartProducts.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, qty: cartProduct.qty + 1} : cartProduct ))
  }

  function subtract(product) {
    if(product.qty === 1) {
      setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))

    }else{setCartProducts(cartProducts.map(cartProduct => cartProduct.id === product.id ? {...cartProduct, qty: cartProduct.qty - 1} : cartProduct ))}
    
  
  }

  function deleteProduct(product){
    setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))
  }

  return (
    <div className="App">
    <Main products={products} addTo={addTo}></Main>
    <Cart cartProducts={cartProducts} add={add} subtract={subtract} deleteProduct={deleteProduct}></Cart>
    </div>
  );
}

export default App;

import './App.css'
import ProductList from './components/ProductList'
import ShippingResumen from './components/ShippingResumen'
import ProductCart from './components/ProductCart'
import Header from './components/Header'
import style from './App.module.css'
import { useState } from 'react'
const App = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

 
  return (
  <div className={style.container}>
      <Header   countProducts ={countProducts}
      setCountProducts={setCountProducts}/>
        
     <ProductCart 
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
     />
     <ProductList className={style.listproduct}
      allProducts = {allProducts}
      setAllProducts = {setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts ={countProducts}
      setCountProducts={setCountProducts}/>
    <ShippingResumen 
     allProducts = {allProducts}
     setAllProducts = {setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts ={countProducts}
     setCountProducts={setCountProducts}/>
  </div>
    )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetails from '../../pages/ProductDetails'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  

  const  allData =  data
console.log(allData , "alldata") 
  return (
    <>
         {/* {
          allData.map((item)=>(
            <ProductCard item={item}/>
          ))
         } */}
         {
          allData?.map((item , index)=>(
            // {<ProductCard/>}
          //  <div key={index}>
            <ProductCard item={item} key={index}/>
            // </div>
            // <ProductDetails/>
          ))
         }
    </>
  )
}

export default ProductList
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Product() {

    const { id } = useParams();

    const [product,setProduct] = useState({})

const getProduct = async()  =>{
    let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setProduct(response.data.meals[0]);
    console.log(response.data.meals);
}
useEffect (()=>
{
    getProduct(id)
    return() => {

    }
},[])
  return (
    <>
    <div>


      {
        product.strMeal
      }
      <img src={product.strMealThumb}></img>
    </div>
 
    </>
  )
}

export default Product
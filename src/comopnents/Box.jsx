import React from 'react'
import { Link } from 'react-router-dom'

function Box({product}) {
  return (
    <div className='box'>
            <img src={product.image} alt="" />
            <h2>{product.title.length>30?product.title.slice(0,30)+"...":product.title}</h2>
            <p> {product.price} $ </p>
            <button><Link to={"/products/"+product.id}>show more</Link></button>

    </div>
  )
}

export default Box
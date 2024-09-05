import React from 'react'
import Box from '../comopnents/Box'
import { Outlet } from 'react-router-dom'

function Products({products}) {
  return (
    <div className='products-container'>
    {products.map((prod)=><Box key={prod.id} product={prod}/>)}
<Outlet/>
</div>
  )
}

export default Products
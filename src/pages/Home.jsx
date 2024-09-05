import React from 'react'
import Box from '../comopnents/Box'

function Home({products}) {



  return (
    <div className='home-container'>
        {products.map((prod)=><Box key={prod.id} product={prod}/>)}

    </div>
  )
}

export default Home
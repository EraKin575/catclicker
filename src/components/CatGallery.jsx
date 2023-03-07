import React from 'react'
import CatCard from './CatCard'

function CatGallery() {
  return (
    <div>
    <h1 className='text-3xl font-bold text-center'>Cat Gallery</h1>
    <div className='grid grid-cols-4'>

        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        
    </div>
    </div>
  )
}

export default CatGallery
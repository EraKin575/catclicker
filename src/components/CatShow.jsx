import React from 'react'

function CatShow() {
  return (
    <div className='w-[450px] h-[450px]'>
        <div className='text-left px-[10px] border-2 border-gray-300'>
        <h1
        className='text-2xl font-bold'
        >Tabby</h1>
        <h1>No Of Clicked {5}</h1>
        </div>
        <img src='/src/components/CatPhoto.jpg' className='w-[450px] h-[275px]' alt='cat' />
        <div className='text-left flex-col p-[15px] space-y-2'>
        <h1>
            Tabby mkc
        </h1>
        <h1>
            Grow Up tmkc
        </h1>
        <a href='https://www.google.com/' className='text-left mt-8'>Card Link</a>
        </div>
       
    </div>
  )
}

export default CatShow
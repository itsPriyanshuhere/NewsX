import React from 'react'

const HotNews = () => {
  return (
    <div className='px-12 py-4'>
        <h2 className='text-4xl font-mono' >Hot<span className='text-red-500 font-serif'> New!</span></h2>
        <div className='flex flex-row py-4 gap-8'>
            <div>
                <img src="" className='h-48 w-48 bg-green-300' /> 
            </div>
            <div>
                <p>World</p>
            </div>
        </div>
        <div className='flex flex-row py-4 justify-end gap-8'>
            <div>
                <p>World</p>
            </div>
            <div>
                <img src="" className='h-48 w-48 bg-green-300' /> 
            </div>
        </div>
    </div>
  )
}

export default HotNews
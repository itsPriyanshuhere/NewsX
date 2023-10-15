import React from 'react'
import sports from "../assets/sports.jpeg";

const Category = () => {
  return (
    <div className='p-16'>
        <h2 className='text-4xl font-mono' >Top<span className='text-red-500 font-serif'> Categories!</span></h2>
        <div className='grid grid-rows-3 grid-flow-col gap-4 grid-cols-3 p-4 mt-8 bg-white border rounded-2xl'>
            <div className='row-span-3 col-span-1 border-solid border-2 border-black'>
                <img src='https://1.bp.blogspot.com/-XytZocib4z0/YLMaERmm1pI/AAAAAAAAAPY/pekDltLa_sctsmkW301i78rmV8X7oSbEQCLcBGAsYHQ/s1101/6C837042-ABFC-4FA5-A8E3-278ADDA084B1.jpeg' className='object-fit h-full' />
            </div>
            <div className='col-span-2 border-solid border-2 border-black'>
                <img src='https://doortofuture.com/wp-content/uploads/2021/08/Education.jpg' className='object-fit h-48 w-full' />
            </div>
            <div className='row-span-2 col-span-1 border-solid border-2 border-black'>
                <img src={sports} className='object-fit h-full' />
            </div>
            <div className='row-span-2 col-span-1 border-solid border-2 border-black'>
                <img src='https://www.punekarnews.in/wp-content/uploads/2022/03/Politics.jpg' className='object-cover h-full' />
            </div>
        </div>
    </div>
  )
}

export default Category
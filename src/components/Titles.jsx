import React from 'react'

const Titles = ({text1,text2}) => {
  return (
    <div className=' inline-flex items-center gap-2 mb-3'>
     <p className=' text-gray-500 '>{text1} <span className=' text-gray-900 font-medium'>{text2}</span></p>
     <p className=' w-8 sm:w-12 h-[2px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Titles
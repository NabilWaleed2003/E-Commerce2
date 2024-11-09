import React from 'react'

const OurPolicy = () => {
  return (
    <div className=' flex flex-col sm:flex-row text-gray-950 justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-xm'>
    
      <div>
        <img src='imges/exchange_icon.png' alt=''  className=' w-12 mb-3 m-auto'/>
        <p className=' font-semibold'>Easy Exchange Policy</p>
        <p className=' text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src='imges/quality_icon.png' alt=''  className=' w-12 mb-3 m-auto'/>
        <p className=' font-semibold'>7 Days Return Policy</p>
        <p className=' text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src='imges/support_img.png' alt=''  className=' w-12 mb-3 m-auto'/>
        <p className=' font-semibold'>Best customer support</p>
        <p className=' text-gray-400'>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
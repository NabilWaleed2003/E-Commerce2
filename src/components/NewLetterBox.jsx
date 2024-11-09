import React from 'react'

const NewLetterBox = () => {

    const onSubmitHandler  = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className=' text-gray-950 font-medium text-2xl'>Subscribe now & get 20% of</p>
      <p className=' text-gray-500 text-sm mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form onSubmit={onSubmitHandler} className=' w-full sm:w-1/2  flex items-center mx-auto gap-3 my-6 border pl-3'>
        <input type='email' placeholder='Enter your email' required className=' w-full sm:flex-1 outline-none'/>
        <button type='submit' className=' bg-black text-white px-12 py-3 text-xs'>Search</button>
      </form>
    </div>
  )
}

export default NewLetterBox
import React from 'react'

export default function Form() {
  return (
    <div>
        <form className='mx-auto p-4'>
            <h2 className='text-3xl font bold text-sky-800'></h2>
            <div className='flex flex-col py-2'>
              {/* <label className='text-gray-400' ></label> */}
              <input className='border p-2  text-black' type="text" placeholder='First Name*'/>
         
            </div>
            <div className='flex flex-col py-2'>
              {/* <label className='text-gray-400'></label> */}
              <input className='border p-2 text-black' type="text" placeholder='Last Name*' />
            </div>
            <div className='flex flex-col py-2'>
              {/* <label className='text-gray-400'></label> */}
              <input className='border p-2  text-black' type="text" placeholder='Email*' />
            </div>
            <textarea className='border p-2  text-black' rows="4" cols="46" placeholder='How Can We Help You'></textarea>

            <button className='border w-full my-5 py-2 bg-sky-700 hover:bg-lime-700 text-white'>SUBMIT</button>
          </form>
    </div>
  )
}

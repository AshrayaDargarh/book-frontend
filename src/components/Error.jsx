import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'
function Error() {
    const err=useRouteError()
  return (
    <div className='bg-gray-800 text-white overflow-hidden h-screen font-display flex justify-center pt-20'>
    <div className='w-96 h-56 bg-slate-700 flex flex-col  items-center rounded-lg shadow-2xl '>
    <h1 className='mt-5 text-2xl font-bold'>Oops!</h1> 
    <p className='mt-2 w-80 text-lg text-center'>The page you are looking for does not exist. Maybe you typed the wrong address or followed a broken link. Don't worry, you can go back to the  <Link to="/" className='text-blue-500 underline'>homepage</Link></p>
   
    </div>
  </div>
  )
}

export default Error
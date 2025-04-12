import React from 'react'

function Unauthorized() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <div className='text-center animate-fade-in'>
            <p className='mt-4 text-xl text-gray-700'>Unauthorized Access</p>
            <p className='mt-2 text-gray-500'>Sorry, you don't have permission to view this page.</p>
            <a
            href='/'
            className='mt-6 inline-block px-4 py-1 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 transition duration-300'
            >
                Go Back Home
            </a>
        </div>
    </div>
  )
}

export default Unauthorized
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

function Loading() {
  return (
    <div className='loading-container'>
        <ClipLoader color="#3498db" size={50} />
    </div>
  )
}

export default Loading
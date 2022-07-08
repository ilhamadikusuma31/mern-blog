import React from 'react'

const Button = ({teks_nya}) => {
  return (
    <div>
        <button className='btn btn-outline-success w-100'>{teks_nya}</button>
    </div>
  )
}

export default Button
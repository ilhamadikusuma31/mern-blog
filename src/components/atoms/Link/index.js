import React from 'react'

const Link = ({judul,diKlik}) => {
  return (
    <p className='text-center' onClick={diKlik}>{judul}</p>
  )
}

export default Link
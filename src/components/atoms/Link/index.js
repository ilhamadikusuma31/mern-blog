import React from 'react'

const Link = ({judul,diKlik}) => {
  return (
    <p className='text-center' role="button" tabindex="0" onClick={diKlik}>{judul}</p>
  )
}

export default Link
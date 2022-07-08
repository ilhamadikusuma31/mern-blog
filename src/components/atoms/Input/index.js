import React from 'react'

const Input = ({label_nya, ...att_sisa_nya}) => {
  return (
    <div>
        <label htmlFor={label_nya} className="form-label">{label_nya}</label>
        <input className="form-control" id={label_nya} {...att_sisa_nya} />        
    </div>
  )
}

export default Input
import React from 'react'

const Label = ({text,required}) => {
  return (
    <label className=' leading-5.5'>
        {text}
        {required && <span className='text-required'>*</span>}
    </label>
  )
}

export default Label
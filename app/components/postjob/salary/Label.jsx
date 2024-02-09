import React from 'react'

const Label = ({text,required,bold}) => {
  return (
    <label className={` ${bold?"text-xs font-bold text-white-medium":"leading-5.5"} `}>
        {text}
        {required && <span className='text-required'>*</span>}
    </label>
  )
}

export default Label
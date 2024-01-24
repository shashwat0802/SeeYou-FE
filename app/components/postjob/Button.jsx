import React from 'react'

const Button = ({isDisabled , clickHandler}) => {
  return (
    <button className="px-4 py-3 bg-white-light rounded-xl text-sm font-bold w-full text-primary disabled:brightness-50" disabled={isDisabled()} onClick={clickHandler}>Continue</button>
  )
}

export default Button
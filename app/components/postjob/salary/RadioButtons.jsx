import React from 'react'

const RadioButtons = ({options , inputField , state , dispatch }) => {
  return (
    <ul className='bg-[#1F222A] p-3 border border-[#35383F] rounded-2xl'>
        {options.map((option,index)=>(
            <li key={index} className=''>
                <label htmlFor={option} className='flex items-center space-x-2.5 py-4  '>
                    <input className=" peer sr-only" id={option} type="radio" name={inputField} onChange={()=>dispatch({type:"SALARY_FIELDS",payload:{inputField,userInput:option}})}/>
                        <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center group">
                            <aside className={`w-1.5 h-1.5 ${state===option?"bg-white":"bg-transparent"} rounded-full`}></aside>
                        </div>
                        <p className="text-white-light capitalize">{option}</p>
                </label>
            </li>
        ))
            }
    </ul>
  )
}

export default RadioButtons
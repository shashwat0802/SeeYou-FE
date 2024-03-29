import React, { useRef } from 'react'
import { useData } from '../../../post-job/PostJobContext';

const PreferredCandidatesForm = () => {
    const inputRef = useRef();
    const {state:{location:{preferredLocations}} , dispatch} = useData();
    

    const clickHandler = (event) =>
    {
        if (event.key === 'Enter')
        {
            const location = inputRef.current.value
            dispatch({type:"LOCATION_FIELDS" , payload:{inputField:"preferredLocations" , userInput:[...preferredLocations,location] }})
            inputRef.current.value = '';
        }
    }

    const deleteHandler = (location) =>
    {
        const filteredLocations = [...preferredLocations].filter(item=>item!==location);
        dispatch({type:"LOCATION_FIELDS" , payload:{inputField:"preferredLocations" , userInput:filteredLocations }})
    }

  return (
    <section>
        <h1 className='text-white tracking-wide font-black mb-1.5 '>Preferred Candidates From:</h1>
        <h2 className='text-xs font-semibold text-white-medium mb-2'>Select Candidates from Particular location</h2>
        <aside className='flex w-full py-3 px-4 mb-3 space-x-1.5 items-center border border-white-darkest rounded-xl bg-primary'>
            <span className='text-white text-sm'>Search</span>
            <input ref={inputRef} className='grow text-sm  bg-primary  outline-none ' placeholder='city/county/region/state/country' onKeyDown={clickHandler}/>
        </aside>
        <ul className='space-y-3'>
            {preferredLocations?.map((location , index)=>(
                <li key={index} className='flex justify-between items-center p-4 border border-[#35383F] rounded-2xl'>
                    <span className='text-white text-lg'>{location}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-6 h-6 text-required hover:cursor-pointer"
                     onClick={()=>deleteHandler(location)}
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default PreferredCandidatesForm
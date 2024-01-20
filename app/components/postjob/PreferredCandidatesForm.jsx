import React, { useRef, useState } from 'react'

const PreferredCandidatesForm = () => {
    const inputRef = useRef();
    const [preferredLocations,setPreferredLocations] = useState([]);
    console.log(preferredLocations);

    const clickHandler = (event) =>
    {
        if (event.key === 'Enter')
        {
            const location = inputRef.current.value
            setPreferredLocations(prev=>[...prev,location]);
            inputRef.current.value = '';
        }
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
                     onClick={()=>setPreferredLocations(prev=>prev.filter(item=>item!==location))}
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
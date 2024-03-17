'use client'
import React, { useState } from 'react'
import { useData } from '../../search-candidate/SearchCandidateContext'

const SearchBar = () => {
  const [search,setSearch] = useState("");
  const {dispatch} = useData();
  return (
    <label htmlFor='searchbar' className='py-3 px-4 rounded-xl border border-transparent space-x-4 flex bg-primary-light focus-within:border-white mx-3'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input value={search} id='searchbar' className=' outline-none border-none bg-transparent text-sm grow' placeholder='Search name, skills, keywords' onChange={(e)=>setSearch(e.target.value)} />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>

    </label>
  )
}

export default SearchBar
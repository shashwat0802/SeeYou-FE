import React from 'react'
import { useData } from '../../search-candidate/SearchCandidateContext'

const CandidateProfile = () => {
    const {dispatch} = useData();
  return (
    <div className='px-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2" onClick={()=>dispatch({type:"BACK_TO_SEARCH_RESULTS",payload:""})}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>

        <section className='p-6'></section>
    </div>
  )
}

export default CandidateProfile
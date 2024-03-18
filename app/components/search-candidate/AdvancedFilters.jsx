import React from 'react'
import {useData} from "../../search-candidate/SearchCandidateContext";
import Input from "../../components/postjob/location/Input";

const AdvancedFilters = () => {
    const {state:{advancedFilter} , dispatch} = useData();
    const options = ["Within last day","Within last 3 day","Within last week","Within last month","Within last 3 months","Within last 6 months"]

    const findCandidates = () =>
    {
        // Function to find candidates here
        dispatch({type:"TOGGLE_MODAL",payload:false})
    }

  return (
    <div className='fixed z-10 w-full h-full overflow-y-scroll  bg-primary px-5 py-6'>
        <header className=' space-x-4 flex items-center pb-6 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <h1 className=' text-2xl text-white-medium font-semibold'>Advanced Filter Options</h1>
        </header>
        <main className='space-y-4'>
            <Input id="cvKeywords" value={advancedFilter.cvKeywords} changeHandler={(inputField,userInput)=>dispatch({type:"ADVANCED_FILTER" , payload:{inputField, userInput} })} type={"text"} placeholder={"Enter here"}
            label={"Find Resumes/CV with all these keywords"}
            />
            <Input id="noneKeywords" value={advancedFilter.noneKeywords} changeHandler={(inputField,userInput)=>dispatch({type:"ADVANCED_FILTER" , payload:{inputField, userInput} })} type={"text"} placeholder={"Enter here"}
            label={"None of these keywords"}
            />
            <label className=' text-xs font-bold block '>Profiles last Updated</label>
                <ul className='bg-[#1F222A] p-3 border border-[#35383F] rounded-2xl'>
                    
                {options.map((option,index)=>(
                    <li key={index} className=''>
                        <label htmlFor={option} className="flex items-center space-x-2.5 py-4">
                            <input className=" peer sr-only" id={option} type="radio" name={"profileLastUpdated"} onChange={()=>dispatch({type:"ADVANCED_FILTER",payload:{inputField:"profileLastUpdated",userInput:option}})}/>
                                <div className="w-6 h-6 border-2 border-white-darkest rounded-full box-border flex justify-center items-center group">
                                    <aside className={`w-2 h-2 ${advancedFilter.profileLastUpdated===option?"bg-white":"bg-transparent"} rounded-full`}></aside>
                                </div>
                                <p className="text-white-medium text-sm">{option}</p>
                        </label>
                    </li>
                ))
                    }
            </ul>
            <section className='grid grid-cols-2 gap-x-2 w-full' >
                <button className='border border-white rounded-xl text-white py-3 px-4 font-semibold ' onClick={()=>dispatch({type:"RESET_ADVANCED_FILTERS",payload:""})}>Reset</button>
                <button className='border border-transparent rounded-xl bg-white text-black py-3 px-4 font-semibold ' onClick={findCandidates}>Find Candidates</button>
            </section>
        </main> 
        
    </div>
  )
}

export default AdvancedFilters
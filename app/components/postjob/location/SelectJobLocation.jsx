import Image from 'next/image';
import React from 'react'

import { useData } from '../../../post-job/PostJobContext';
import IncludeStreetAddress from "../../../../public/images/IncludeStreetAddress.png";
import NotIncludeStreetAddress from "../../../../public/images/NotIncludeStreetAddress.png";

const SelectJobLocation = () => {

    const { dispatch } = useData();


  return (
    <section className="space-y-3 flex flex-col">
            <h1 className="text-white font-black tracking-wide">Job Location</h1>
            <label className="text-white">Do you want the job's street address in the job post?<span className="text-required">*</span> </label>
            <main className="grid grid-cols-2 gap-x-4">
                <label className="cursor-pointer self-stretch">
                    <input className=" peer sr-only" id="includeLocation" type="radio" name="jobLocation"
                     onChange={()=>dispatch({type:"LOCATION_FIELDS" , payload:{inputField:"showJobLocation" , userInput:true }})} />

                    <aside className="flex flex-col overflow-hidden rounded-2xl space-y-4 h-full pb-4 border border-transparent peer-checked:border-white  bg-[#1F222A]">
                        <Image className='rounded-lg w-full' alt='Location with Street Address' src={IncludeStreetAddress} />
                        <h1 className="highlight-lightest text-sm font-extrabold px-4">Yes, include street address</h1>
                        <p className="text-xs tracking-[0.12px] text-white-medium px-4">The job's location will be pinpointed on map</p>
                    </aside>
                </label>   
                <label className="cursor-pointer">
                    <input className=" peer sr-only" id="notincludeLocation" type="radio" name="jobLocation" 
                     onChange={()=>dispatch({type:"LOCATION_FIELDS" , payload:{inputField:"showJobLocation" , userInput:false}})} /> 

                    <aside className="flex flex-col overflow-hidden rounded-2xl space-y-4 pb-4 border border-transparent peer-checked:border-white  bg-[#1F222A]">
                        <Image className='rounded-lg w-full' alt='Location without Street Address' src={NotIncludeStreetAddress} />
                        <h1 className="highlight-lightest text-sm font-extrabold px-4">No, don’t include street address</h1>
                        <p className="text-xs tracking-[0.12px] text-white-medium px-4">A highlighted area on map will be shown instead of specific street address.</p>
                    </aside>
                </label>
            </main>
        </section>
  )
}

export default SelectJobLocation
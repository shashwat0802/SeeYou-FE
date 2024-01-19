import React from 'react'
import { useState } from 'react'

const SelectJobLocation = () => {
    const [showJobLocation,setShowJobLocation] = useState(true);
  return (
    <section className="space-y-3 flex flex-col">
            <h1 className="text-white font-black tracking-wide">Job Location</h1>
            <label className="text-white">Do you want the job's street address in the job post?<span className="text-required">*</span> </label>
            <main className="grid grid-cols-2 gap-x-4">
                <label className="cursor-pointer self-stretch">
                    <input className=" peer sr-only" id="includeLocation" type="radio" name="jobLocation" onChange={()=>setShowJobLocation(true)} />
                    <aside className="flex flex-col overflow-hidden rounded-2xl space-y-4 h-full pb-4 border border-transparent peer-checked:border-white  bg-[#1F222A]">
                        <iframe className=" w-full h-28 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.937508222101!2d77.62694567408853!3d12.911738018182557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156695d42085%3A0x881b0d384db10a99!2sDukaan%C2%AE%20HQ!5e0!3m2!1sen!2sin!4v1705633512472!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <h1 className="highlight-lightest text-sm font-extrabold px-4">Yes, include street address</h1>
                        <p className="text-xs tracking-[0.12px] text-[#E8E9F1] px-4">The job's location will be pinpointed on map</p>
                    </aside>
                </label>   
                <label className="cursor-pointer">
                    <input className=" peer sr-only" id="notincludeLocation" type="radio" name="jobLocation" onChange={()=>setShowJobLocation(false)} /> 
                    <aside className="flex flex-col overflow-hidden rounded-2xl space-y-4 pb-4 border border-transparent peer-checked:border-white  bg-[#1F222A]">
                        <iframe className=" w-full h-28 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.840827130001!2d77.6355229620024!3d12.910279163749104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705633471501!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <h1 className="highlight-lightest text-sm font-extrabold px-4">No, don’t include street address</h1>
                        <p className="text-xs tracking-[0.12px] text-[#E8E9F1] px-4">A highlighted area on map will be shown instead of specific street address.</p>
                    </aside>
                </label>
            </main>
        </section>
  )
}

export default SelectJobLocation
import React, { useState } from 'react'
import { useData } from '../../post-job/PostJobContext';

const SelectJobType = () => {

    const {state:{location:{jobType}} , dispatch} = useData();
    console.log(jobType);
    
    const changeHandler=(type)=> dispatch({type:"LOCATION_FIELDS",payload:{inputField:"jobType",userInput:type}});
  return (
    <section className="flex flex-col space-y-3">
            <label className="text-white">Select Onsite/Remote/Hybrid  <span className="text-required">*</span> </label>
            <label className=" cursor-pointer ">
                <input className=" peer sr-only" id="onsite" type="radio" name="jobType" onChange={()=>changeHandler("onsite")} />
                <aside htmlFor="onsite" className=" flex p-2.5 space-x-3 border border-transparent items-center peer-checked:border-white rounded-xl">
                    <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center">
                        <aside className={`w-1.5 h-1.5 ${jobType==="onsite"?"bg-white":"bg-transparent"} rounded-full`}></aside>
                    </div>

                    <p className="text-white-light">Onsite</p>
                </aside>
            </label>

            <label className=" cursor-pointer ">
                <input className=" peer sr-only" id="hybrid" type="radio" name="jobType" onChange={()=>changeHandler("hybrid")} />
                <aside htmlFor="hybrid" className=" flex p-2.5 space-x-3 border border-transparent items-center peer-checked:border-white rounded-xl">
                    <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center">
                        <aside className={`w-1.5 h-1.5 ${jobType==="hybrid"?"bg-white":"bg-transparent"} rounded-full`}></aside>
                    </div>

                    <p className="text-white-light">Hybrid</p>
                </aside>
            </label>

            <label className=" cursor-pointer ">
                <input className=" peer sr-only" id="remote" type="radio" name="jobType" onChange={()=>changeHandler("remote")}/>
                <aside htmlFor="remote" className=" flex p-2.5 space-x-3 border border-transparent items-center peer-checked:border-white rounded-xl">
                    <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center">
                        <aside className={`w-1.5 h-1.5 ${jobType==="remote"?"bg-white":"bg-transparent"} rounded-full`}></aside>
                    </div>

                    <p className="text-white-light">Remote</p>
                </aside>
            </label>

        </section>
  )
}

export default SelectJobType
import React from 'react'
import { useData } from '../../../post-job/PostJobContext'

import Label from './Label'
import RadioButtons from "./RadioButtons";
import Compensation from "./Compensation";
import AdditionalBenefits from "./AdditionalBenefits";

const JobIndustry = () =>
{
    const {state:{salary:{jobIndustry}} , dispatch} = useData();
    return (
        <section className='flex flex-col space-y-3'>
            <Label text="Select the Job Industry" required={true} />
            <aside className='px-4 flex py-3 border border-white-darkest rounded-xl'>
                <select value={jobIndustry} className='grow text-[#8F9098] outline-none  bg-primary' onChange={(e)=>dispatch({type:"SALARY_FIELDS",payload:{inputField:"jobIndustry",userInput:e.target.value}})}>
                    <option value="">Select</option>
                    <option value={"Information Technology"}>Information Technology</option>
                </select>
            </aside>
        </section>
    )
}

const MinimumExperience = () =>
{
    const optionsArray = ["Internship", "Entry level","Mid senior level", "Senior level", "Director", "Top Executive"];
    const {state:{salary:{minExperience}} , dispatch } = useData();
    return (
        <section className='space-y-3'>
            <Label text="Select Minimum Required Experience Level" required={true} />
            <RadioButtons options={optionsArray} inputField={"minExperience"} state={minExperience} dispatch={dispatch} />
        </section>
    )
}

const JobType = () =>
{
    const optionsArray = ["Full Time", "Part Time","Freelance", "Internship", "Temporary", "Contract" , "Other"];
    const {state:{salary:{jobType}} , dispatch } = useData();
    return (
        <section className='space-y-3'>
            <Label text="Select Job Type" required={true} />
            <RadioButtons options={optionsArray} inputField={"jobType"} state={jobType} dispatch={dispatch} />
        </section>
    )
}

const ToggleSalarySpecification = () =>
{
    const {state:{salary:{specifySalary}} , dispatch } = useData();

    return (
        <section className={` border-t border-[#35383F] pt-6 ${specifySalary?"":"pb-6 border-b"}`}>
            <h1 className='text-white text-2xl tracking-wide font-black'>About Salary</h1>
            <label htmlFor={"specifySalary"} className='flex items-center space-x-2.5 py-4  '>
                    <input className=" peer sr-only" id={"specifySalary"} type="radio" name={"specifySalary"} onChange={()=>dispatch({type:"SALARY_FIELDS",payload:{inputField:"specifySalary",userInput:true}})}/>
                        <div className="w-6 h-6 border-2 border-white-darkest rounded-full box-border flex justify-center items-center group">
                            <aside className={`w-2 h-2 ${specifySalary?"bg-white":"bg-transparent"} rounded-full`}></aside>
                        </div>
                        <p className="text-white-medium text-sm capitalize">Specify Salary {specifySalary?"":"(Highly Recommended)"}</p>
                </label>

            <label htmlFor={"notSpecifySalary"} className='flex items-center space-x-2.5 py-4  '>
                <input className=" peer sr-only" id={"notSpecifySalary"} type="radio" name={"specifySalary"} onChange={()=>dispatch({type:"SALARY_FIELDS",payload:{inputField:"specifySalary",userInput:false}})}/>
                    <div className="w-6 h-6 border-2 border-white-darkest rounded-full box-border flex justify-center items-center group">
                        <aside className={`w-2 h-2 ${!specifySalary?"bg-white":"bg-transparent"} rounded-full`}></aside>
                    </div>
                    <p className="text-white-medium text-sm">Do not Specify Salary</p>
            </label>    
        </section>
    )
}

const Salary = () => {
  return (
    <>
        {/* Update the options field dropdown fo Job Industry  */}
        <JobIndustry />
        <MinimumExperience />
        <JobType />
        <ToggleSalarySpecification />
        <Compensation />
        <AdditionalBenefits />
    </>
  )
}

export default Salary
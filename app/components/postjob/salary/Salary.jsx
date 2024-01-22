import React from 'react'
import Label from './Label'
import { useData } from '../../../post-job/PostJobContext'

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

const Salary = () => {
  return (
    <>
        {/* Update the options field dropdown fo Job Industry  */}
        <JobIndustry />
    </>
  )
}

export default Salary
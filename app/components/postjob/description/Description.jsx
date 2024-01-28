import React from 'react'
import Label from '../salary/Label'
import { useData } from '../../../post-job/PostJobContext'

const JobDescription = () =>
{
    const {state:{description:{jobDescription}} , dispatch} = useData();

    return (
        <section className='space-y-2 flex flex-col'>
            <Label text="Job Description" required={true} bold={true} />
            <textarea value={jobDescription} className='pt-3 px-4 text-sm border border-white-darkest rounded-xl bg-primary resize-none outline-none box-border h-72'
             placeholder='Write the job description in maximum 10,000 characters' 
             maxLength={10000} 
             onChange={(e)=>dispatch({type:"DESCRIPTION_FIELDS",payload:{inputField:"jobDescription",userInput:e.target.value}})}
             />
        </section>
    )
}

const RequiredSkills = () =>
{
    const {state:{description:{requiredSkills}} , dispatch} = useData();

    return (
        <section className='space-y-2 flex flex-col'>
            <Label text="List the Required Skills" required={true} bold={true} />
            <textarea value={requiredSkills} className='pt-3 px-4 text-sm border border-white-darkest rounded-xl bg-primary resize-none outline-none box-border h-72'
             placeholder='Write here all skills necessary to perform job, in maximum 5,000 characters' 
             maxLength={5000} 
             onChange={(e)=>dispatch({type:"DESCRIPTION_FIELDS",payload:{inputField:"requiredSkills",userInput:e.target.value}})}
             />
        </section>
    )
}

const Description = () => {
  return (
    <>
        <JobDescription />
        {/* Update the skills to be bullet points later */}
        <RequiredSkills />
    </>
  )
}

export default Description
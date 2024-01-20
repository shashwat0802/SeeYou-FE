import React, { useState } from 'react'
import JobLocationDetails from "./JobLocationDetails";
import PreferredCandidatesForm from "./PreferredCandidatesForm";
import SelectJobLocation from "./SelectJobLocation";
import SelectJobType from "./SelectJobType";
import Input from './Input';

const LoadQuestion = ({jobType}) =>
{
    switch(jobType)
    {
        case "onsite":
            return (
                <>
                <SelectJobLocation />
                <JobLocationDetails />
                <PreferredCandidatesForm />
                </>
            )

        case "hybrid":
            return (
                <>
                <SelectJobLocation />
                <JobLocationDetails />
                <PreferredCandidatesForm />
                </>
            )    

        case "remote":
            return (
                <>
                <PreferredCandidatesForm />
                </>
            )    
    }
}

const JobLocation = () => {
    const [jobTitle,setJobTitle] = useState("");
    const [jobType,setJobType] = useState("");
  return (
    <>
        <Input id="jobTitle" value={jobTitle} changeHandler={(inputField,text)=>setJobTitle(text)} type={"text"} placeholder={"Job title (maximum 160 Characters)"} label="Job Title" required={true}/>
        <SelectJobType jobType={jobType} setJobType={setJobType} />
        <LoadQuestion jobType={jobType}/>
    </>
  )
}

export default JobLocation
import React, { useState } from 'react'
import { useData } from '../../post-job/PostJobContext';
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

const JobLocation = ({setQuestionNumber}) => {
    const {state:{location } , dispatch} = useData();
    const {jobTitle , jobType, showJobLocation, streetAddress, city, state, country, preferredLocations} = location;

    const isDisabled = () =>
    {
        if(jobType === "onsite" || jobType==="hybrid")
             return jobTitle==="" || jobType==="" || showJobLocation==="" || (showJobLocation ? streetAddress==="" : false) || city==="" || state==="" || country===""
       
        else if(jobType==="remote")             
            return jobTitle===""
        else
            return true;
    }

  return (
    <>
        <Input id="jobTitle" value={jobTitle} changeHandler={(inputField,userInput)=>dispatch({type:"LOCATION_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Job title (maximum 160 Characters)"} label="Job Title" required={true}/>
        <SelectJobType />
        <LoadQuestion jobType={jobType}/>
        <button className="px-4 py-3 bg-white-light rounded-xl text-sm font-bold w-full text-primary disabled:brightness-50" disabled={isDisabled()} onClick={()=>setQuestionNumber(2)}>Continue</button>
    </>
  )
}

export default JobLocation
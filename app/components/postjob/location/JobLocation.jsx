import React, { useState } from 'react'
import { useData } from '../../../post-job/PostJobContext';
import JobLocationDetails from "./JobLocationDetails";
import PreferredCandidatesForm from "./PreferredCandidatesForm";
import SelectJobLocation from "./SelectJobLocation";
import SelectJobType from "./SelectJobType";
import Input from './Input';
import Button from "../Button";

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
    const {state:{location , navigation} , dispatch} = useData();
    const {jobTitle , jobType, showJobLocation, streetAddress, city, state, country} = location;

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
        <Button isDisabled={isDisabled} clickHandler={()=>{navigation?setQuestionNumber(5):setQuestionNumber(2)}} />
    </>
  )
}

export default JobLocation
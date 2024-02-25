import React from 'react'
import Input from '../postjob/location/Input'
import Button from "../postjob/Button";
import { useProfileData } from '../../complete-profile/recruiter/CompleteRecruiterProfileContext'

const CompanyInformation = ({setStep}) => {
    const {state:{companyInfo:{companyName,registrationNumber,vat,industry,numberOfEmployees,city,state,country}},dispatch} = useProfileData();

    const isDisabled = () => companyName==="" || registrationNumber==="" || industry==="" || numberOfEmployees==="" || city==="" || state==="" || country===""

  return (
    <>
        <section className='space-y-4'>
            <Input id="companyName" value={companyName} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Official Company name"}  required={true} left={162}/>
            <Input id="registrationNumber" value={registrationNumber} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Registration number"}  required={true} left={145}/>
            <Input id="vat" value={vat} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Vat number (EU)"} />
            <Input id="industry" value={industry} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Select your company industry"}  required={true} left={200}/>
            <Input id="numberOfEmployees" value={numberOfEmployees} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Total number of employees"}  required={true} left={186}/>
            <Input id="city" value={city} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"city"}  required={true} left={40}/>
            <Input id="state" value={state} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Country/region/state"}  required={true} left={147}/>
            <Input id="country" value={country} changeHandler={(inputField,userInput)=>dispatch({type:"COMPANY_INFO_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Country"}  required={true} left={68}/>
        </section>
        <Button isDisabled={isDisabled} clickHandler={()=>setStep(3)} />
    </>
  )
}

export default CompanyInformation
import React from 'react'
import { UploadPresentation } from '../recruiter/AboutCompany'
import { useProfileData } from '../../../complete-profile/candidate/CompleteCandidateProfileContext'
import Input from '../../postjob/location/Input'
import Skills from '../../postjob/description/Skills'
import Button from '../../postjob/Button'

const CandidateProfile = ({setStep}) => {
    const {state:{details:{linkedin,bio,experience,skills,resume,portfolioLink}} , dispatch} = useProfileData();

    const isDisabled = () =>linkedin==="" || bio==="" || experience===""

  return (
    <>
        <Input id="linkedin" value={linkedin} changeHandler={(inputField,userInput)=>dispatch({type:"DETAILS_FIELDS" , payload:{inputField, userInput} })} required={true} left={170} type={"text"} placeholder={"Your LinkedIn profile link"} />
        <aside className='flex flex-col gap-y-2'>
            <label className='text-xs font-bold text-white-medium'>About Myself <span className='text-required'>*</span></label>
            <textarea className='resize-none bg-primary rounded-xl border border-white-darkest outline-none pt-3 px-4 text-sm h-20 empty:h-fit' maxLength={160} value={bio} placeholder='Introduce yourself in maximum 160 characters' onChange={(e)=>dispatch({type:"DETAILS_FIELDS",payload:{inputField:"bio",userInput:e.target.value}})} />
        </aside>
        <aside className='flex flex-col gap-y-2'>
            <label className='text-xs font-bold text-white-medium'>About My Experience <span className='text-required'>*</span></label>
            <textarea className='resize-none bg-primary rounded-xl border border-white-darkest outline-none pt-3 px-4 text-sm h-64' maxLength={2000} value={experience} placeholder='Introduce yourself in maximum 160 characters' onChange={(e)=>dispatch({type:"DETAILS_FIELDS",payload:{inputField:"experience",userInput:e.target.value}})} />
        </aside>
        <Skills skills={skills} dispatch={dispatch} type="DETAILS_FIELDS" />
        <UploadPresentation state={resume} dispatch={dispatch} type="DETAILS_FIELDS" inputField="resume" label="Add Resume" resume={true} />
        <Input id="portfolioLink" value={portfolioLink} changeHandler={(inputField,userInput)=>dispatch({type:"DETAILS_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Portfolio/Resume Website Link URL"} label="My Personal Website/Portfolio"  required={false}/>
        <Button isDisabled={isDisabled} clickHandler={()=>setStep(2)} />
    </>
  )
}

export default CandidateProfile
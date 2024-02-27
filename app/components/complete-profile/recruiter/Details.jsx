import React from 'react'
import { useProfileData } from '../../../complete-profile/recruiter/CompleteRecruiterProfileContext';
import Input from '../../postjob/location/Input';
import Button from '../../postjob/Button';

const UserType = ()=>
{
    const {state:{details:{type}},dispatch} = useProfileData();
    return (
    <section className=' space-y-6'>
        <label className=" cursor-pointer  ">
                <input className=" peer sr-only" id="onsite" type="radio" name="jobType" onChange={()=>dispatch({type:"DETAILS_FIELDS",payload:{inputField:"type",userInput:"employer"}})} />
                <aside htmlFor="onsite" className=" flex p-2.5 space-x-3 border border-transparent items-center peer-checked:border-white rounded-xl">
                    <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center">
                        <aside className={`w-1.5 h-1.5 ${type==="employer"?"bg-white":"bg-transparent"} rounded-full`}></aside>
                    </div>

                    <p className="text-white-light">Employing Company (Employer)</p>
                </aside>
        </label>

        <label className=" cursor-pointer block">
            <input className=" peer sr-only" id="hybrid" type="radio" name="jobType" onChange={()=>dispatch({type:"DETAILS_FIELDS",payload:{inputField:"type",userInput:"recruiter"}})} />
            <aside htmlFor="hybrid" className=" flex p-2.5 space-x-3 border border-transparent items-center peer-checked:border-white rounded-xl">
                <div className="w-5 h-5 border-2 border-white-darkest rounded-full box-border flex justify-center items-center">
                    <aside className={`w-1.5 h-1.5 ${type==="recruiter"?"bg-white":"bg-transparent"} rounded-full`}></aside>
                </div>

                <p className="text-white-light">Recruitment Agency (Recruiter)</p>
            </aside>
        </label>
    </section>
    )
}

const FillDetails = () =>
{
    const {state:{details:{position,linkedin}},dispatch} = useProfileData();
    return (
        <section className='space-y-4'>
            <h1 className=' text-2xl font-bold'>Fill in Details?</h1>
            <Input id="position" value={position} changeHandler={(inputField,userInput)=>dispatch({type:"DETAILS_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Your position in the company"}  required={true} left={200}/>
            <Input id="linkedin" value={linkedin} changeHandler={(inputField,userInput)=>dispatch({type:"DETAILS_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Your LinkedIn profile link"} />
        </section>
    )
}

const Details = ({setStep}) => {
    const {state:{details:{type,position}}} = useProfileData();
    const isDisabled = () => type==="" || position===""
  return (
    <>
        <UserType />
        <FillDetails />
        <Button isDisabled={isDisabled} clickHandler={()=>setStep(2)} />
    </>
  )
}

export default Details
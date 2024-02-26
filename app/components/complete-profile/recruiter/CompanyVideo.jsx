import React from 'react'
import { useProfileData } from '../../../complete-profile/recruiter/CompleteRecruiterProfileContext';
import Button from '../../postjob/Button';

const CompanyVideo = ({setStep}) => {
    const {state:{companyVideo} , dispatch} = useProfileData(); 

    if(companyVideo)
    return (
        <section className='space-y-6 mx-1'>
            <button className='underline'>Watch Demo & Tips</button>
            <video controls width="400" className='w-full rounded-3xl'>
                <source src={URL.createObjectURL(companyVideo)} type={companyVideo.type} />
                Your browser does not support the video tag.
            </video>
            <button className='text-red-600 font-medium text-lg hover:underline mt-4'
             onClick={()=>dispatch({type:"VIDEO",payload:null})}>Clear Video</button>
            <Button isDisabled={()=>false} clickHandler={()=>setStep(7)} />
        </section>
    )

    return (
        <section className='space-y-6 mx-1'>
            <button className='underline'>Watch Demo & Tips</button>
            <label htmlFor='video' className='w-full flex flex-col justify-center items-center h-60 border-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                <input id="video" className='sr-only' type='file' accept="video/*" onChange={(e)=>dispatch({type:"VIDEO",payload:e.target.files[0]})} />
                <aside className='p-6 bg-primary-light w-fit rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAF2FF" className=" w-8 h-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </aside>
                <p className='text-center mt-3 mx-1'>Upload 1-3 min video with the Owner / Founder / CEO / HR Director</p>
            </label>
            <Button isDisabled={()=>true} clickHandler={()=>setStep(7)} />
        </section>
  )
}

export default CompanyVideo
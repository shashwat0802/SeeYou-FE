import React, { useRef, useState } from 'react'
import { useData } from '../../../post-job/PostJobContext'

import Button from '../Button';

const JobDescriptionVideo = () =>
{   
    const {state:{video:{descriptionVideo}} , dispatch} = useData();

    if(descriptionVideo)
    return (
        <section className='space-y-3 mx-1'>
            <label className='text-lg font-black block'>Job Description Video<span className='text-required'>*</span> </label>
            <video controls width="400" className='w-full rounded-3xl'>
                <source src={URL.createObjectURL(descriptionVideo)} type={descriptionVideo.type} />
                Your browser does not support the video tag.
            </video>
            <button className='text-red-600 font-medium text-lg hover:underline mt-4'
             onClick={()=>dispatch({type:"VIDEO_FIELDS",payload:{inputField:"descriptionVideo",userInput:null}})}>Clear Video</button>
        </section>
    )

    return (
        <section className='space-y-3 mx-1'>
            <label className='text-lg font-black block'>Job Description Video<span className='text-required'>*</span> </label>
            <label htmlFor='video' className='w-full flex flex-col justify-center items-center h-60 border-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                <input id="video" className='sr-only' type='file' accept="video/*" onChange={(e)=>dispatch({type:"VIDEO_FIELDS",payload:{inputField:"descriptionVideo",userInput:e.target.files[0]}})} />
                <aside className='p-6 bg-primary-light w-fit rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAF2FF" className=" w-8 h-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </aside>
                <p className='text-center mt-3'>Upload max 3 minutes video with HR manager / Recruiter / Company representative describing the job</p>
            </label>
        </section>

    )
}

const ManagerVideo = () =>
{   
    const {state:{video:{managerVideo}} , dispatch} = useData();

    return (
        <section className='space-y-3 mx-1'>
            <aside className='space-y-1'>
                <h2 className='text-lg font-black'>Direct Future Manager Video </h2>
                <small className='text-xs text-[#3AC0A0] block'>Optional but Highly Recommended</small>
            </aside>
            {managerVideo
            ?<video controls width="400" className='w-full rounded-3xl'>
                <source src={URL.createObjectURL(managerVideo)} type={managerVideo.type} />
                Your browser does not support the video tag.
            </video>
            :<label htmlFor='video' className='w-full flex flex-col justify-center items-center h-60 border-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                <input id="video" className='sr-only' type='file' accept="video/*" onChange={(e)=>dispatch({type:"VIDEO_FIELDS",payload:{inputField:"managerVideo",userInput:e.target.files[0]}})} />
                <aside className='p-6 bg-primary-light w-fit rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAF2FF" className=" w-8 h-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </aside>
                <p className='text-center mt-3'>Upload max 3 minutes video with HR manager / Recruiter / Company representative describing the job</p>
            </label>}
            {managerVideo && <button className='text-red-600 font-medium text-lg hover:underline mt-4'
             onClick={()=>dispatch({type:"VIDEO_FIELDS",payload:{inputField:"managerVideo",userInput:null}})}>Clear Video</button>}
        </section>

    )
}

const Video = ({setQuestionNumber}) => {
    const {state:{video:{descriptionVideo}}} = useData();

    const isDisabled = () => !descriptionVideo

  return (
    <>
        <a className='underline block'>Watch Demo & Tips</a>
        <JobDescriptionVideo />
        <ManagerVideo />
        <Button isDisabled={isDisabled} clickHandler={()=>setQuestionNumber(5)}/>
    </>
  )
}

export default Video
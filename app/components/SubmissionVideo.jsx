import React, { useState } from 'react'

const SubmissionVideo = ({profileVideo , setProfileVideo}) => {

    if(profileVideo)
    return (
        <section className='space-y-6 mx-1'>
            <button className='underline mt-4'>Watch Demo & Tips</button>
            <video controls width="400" className='w-full rounded-3xl'>
                <source src={URL.createObjectURL(profileVideo)} type={profileVideo.type} />
                Your browser does not support the video tag.
            </video>
            <button className='text-red-600 font-medium text-lg hover:underline mt-4'
             onClick={()=> setProfileVideo(null)}>Clear Video</button>
        </section>
    )

    return (
        <section className='space-y-6 mx-1'>
            <button className='underline mt-4'>Watch Demo & Tips</button>
            <label htmlFor='video' className='w-full flex flex-col justify-center items-center h-60 border-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                <input id="video" className='sr-only' type='file' accept="video/*" onChange={(e) => {
                    setProfileVideo(e.target.files[0])
                }} />
                <aside className='p-6 bg-primary-light w-fit rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EAF2FF" className=" w-8 h-8">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </aside>
                <p className='text-center mt-3 mx-1 max-w-52'>Upload 1-3 min video talking about yourself</p>
            </label>
   
        </section>
  )
}

export default SubmissionVideo
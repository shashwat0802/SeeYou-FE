import React from 'react'
import Image from 'next/image';
import {useProfileData} from "../../../complete-profile/candidate/CompleteCandidateProfileContext";
import Button from '../../postjob/Button';

const UploadProfilePhoto = ({setStep}) => {
    const {state:{profilePhoto},dispatch} = useProfileData();

    const isDisabled = () => profilePhoto===""

  return (
    <>
        <section>
            <label htmlFor='profilePhoto' className=' mx-auto size-60 flex flex-col justify-center items-center border-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                {profilePhoto===""
                ?(<>
                    <input id="profilePhoto" className='sr-only' type='file' accept="image/png, image/jpeg" onChange={(e)=>dispatch({type:"PROFILE_PHOTO",payload:e.target.files[0]})} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className='text-center text-sm'>Upload your photo from device<span className='text-required'>*</span> <br /> (Max 10 MB) </p>
                </>)
                :<Image src={URL.createObjectURL(profilePhoto)} alt='company profilePhoto' width={340} height={340} className=' size-full object-cover' />}
            </label>
        </section>

        {profilePhoto!=="" && <button className='text-[#FC4646] flex items-center space-x-2 ml-auto' onClick={()=>dispatch({type:"PROFILE_PHOTO",payload:""})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <span >Remove</span>
        </button>}

        <Button isDisabled={isDisabled} clickHandler={()=>setStep(3)} />
    </>
  )
}

export default UploadProfilePhoto
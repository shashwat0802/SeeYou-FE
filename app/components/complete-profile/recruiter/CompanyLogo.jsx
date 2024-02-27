import React from 'react'
import Image from 'next/image';
import { useProfileData } from '../../../complete-profile/recruiter/CompleteRecruiterProfileContext';
import Button from '../../postjob/Button';



const CompanyLogo = ({setStep}) => {
    const {state:{logo},dispatch} = useProfileData();

    const isDisabled = () => logo===""

  return (
    <>
        <section>
            <label htmlFor='logo' className='w-full flex flex-col justify-center items-center h-60 border-2 p-2 border-dashed bg-bg-light border-white rounded-lg hover:cursor-pointer'>
                {logo===""
                ?(<>
                    <input id="logo" className='sr-only' type='file' accept="image/png, image/jpeg, image/svg+xml" onChange={(e)=>dispatch({type:"LOGO",payload:e.target.files[0]})} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className='text-center text-sm'>Upload your logo from device<span className='text-required'>*</span> <br /> (Max 10 MB) </p>
                </>)
                :<Image src={URL.createObjectURL(logo)} alt='company logo' width={340} height={340} className=' size-full' />}
            </label>
        </section>

        {logo!=="" && <button className='text-[#FC4646] flex items-center space-x-2 ml-auto' onClick={()=>dispatch({type:"LOGO",payload:""})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <span >Remove</span>
        </button>}

        <Button isDisabled={isDisabled} clickHandler={()=>setStep(4)} />
    </>
  )
}

export default CompanyLogo
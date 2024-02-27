import React from 'react'
import { useProfileData } from '../../../complete-profile/recruiter/CompleteRecruiterProfileContext';
import Input from '../../postjob/location/Input';
import Button from '../../postjob/Button';


const Attachment=({state,dispatch,type,inputField,resume})=>
{
    const convertFileSize=(size)=> {
        // Define conversion factors
        const KB = 1024;
        const MB = KB * 1024;
      
        if (size < KB) {
          return `${size} bytes`;
        }
   
        if (size < MB) {
          return `${(size / KB).toFixed(2)} KB`;
        }
      
        return `${(size / MB).toFixed(2)} MB`;
      }

    const formatDate=(timestamp)=> {
    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Extract individual components
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hour = date.getHours() % 12 || 12; // Format for 12-hour clock
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    // Build the formatted string without commas
    return `${month} ${day} ${year} at ${hour}:${minutes} ${ampm}`;
    }  
    return (
        <main className='space-y-4 flex flex-col justify-between w-full self-stretch '>
            <section className='pl-2 flex space-x-5'>
                <div className='relative size-fit'>
                    <svg width="35" height="44" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.421875 6C0.421875 2.68629 3.10817 0 6.42188 0H21.8357L34.8964 13V38C34.8964 41.3137 32.2101 44 28.8964 44H6.42187C3.10817 44 0.421875 41.3137 0.421875 38V6Z" fill={resume?"#FF464B":"#E86339"}/>
                        <path d="M21.8359 13V0L34.8956 13H21.8359Z" fill={resume?"#FF8689":"#FFB37C"}/>
                    </svg>
                    <small className=' font-bold absolute top-5 left-1/2 -translate-x-1/2  '>{state?.type==="application/pdf"?"PDF":"PPT"}</small>
                </div>
                <aside className='grid'>
                    <small>{state?.name}</small>
                    <small className='text-[#B5B6B7]'>{convertFileSize(state?.size)} , {formatDate(state?.lastModified)}</small>
                </aside>
            </section>
            <button className='flex items-center text-[#FC4646] text-xs ' onClick={()=>dispatch({type,payload:{inputField,userInput:""}})}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                Remove
            </button>
        </main>
    )
}

export const UploadPresentation=({state,dispatch,type,inputField,label,resume})=>
{

    return (
        <section className='flex flex-col space-y-2.5'>
            <h1 className='text-xs font-bold'>{label} <span className='text-success font-normal'>(optional but recommended)</span></h1>
            <aside className={`flex min-h-20 border p-3 border-dashed ${state===""?"bg-transparent":"bg-bg-light"} border-white-darkest rounded-2xl`}>
            
                {state===""
                ?(
                <label htmlFor='presentation' className='flex justify-center items-center  hover:cursor-pointer grow'>
                    <input id='presentation' className='sr-only' type='file' accept={resume?"application/pdf":".ppt, .pptx, application/pdf"} onChange={(e)=>dispatch({type,payload:{inputField,userInput:e.target.files[0]}})} />
                    <aside className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <p className='text-sm'>Upload {resume?"CV/Resume":"PPT/PDF"}</p>
                    </aside>
                </label>
                )
                :<Attachment state={state} dispatch={dispatch} type={type} inputField={inputField} resume={resume}/>
                }
            
            </aside>
            <small className='text-[#AAA6B9]'>Upload files in {resume?"PDF":"PPT/PDF"} format up to {resume?"10":"50"} MB.</small>
        </section>
    )
}

const AboutCompany = ({setStep}) => {
    const {state:{aboutCompany:{about,companyPPT,websiteurl}}, dispatch} = useProfileData();

    const isDisabled=()=>about==="" || websiteurl===""
  return (
    <>
        <aside className='relative py-3 px-4 border border-white-darkest rounded-xl bg-transparent h-72'>
            <textarea className=' resize-none outline-none h-full w-full bg-transparent peer ' value={about} onChange={(e)=>dispatch({type:"ABOUT_COMPANY_FIELDS",payload:{inputField:"about",userInput:e.target.value}})} />
            <span className=" invisible absolute left-4 text-sm text-[#8F9098] peer-empty:visible  ">About our company in maximum 500 characters<span className='text-required'>*</span></span>
        </aside>
        <UploadPresentation state={companyPPT} dispatch={dispatch} type="ABOUT_COMPANY_FIELDS" inputField="companyPPT" label="Upload Company Presentation" />
        <Input id="websiteurl" value={websiteurl} changeHandler={(inputField,userInput)=>dispatch({type:"ABOUT_COMPANY_FIELDS" , payload:{inputField, userInput} })} type={"text"} placeholder={"Company website URL"} label="Company website"  required={true}/>
        <Button isDisabled={isDisabled} clickHandler={()=>setStep(5)} />
    </>
  )
}

export default AboutCompany
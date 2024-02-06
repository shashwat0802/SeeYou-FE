import React, { useState } from 'react'
import { useData } from '../../../post-job/PostJobContext'

const currencySymbol = (currency) =>
{
    const currencySymbols = [
        { name: "USD Dollar", symbol: "$" },
        { name: "Euros", symbol: "€" },
        { name: "Krone", symbol: "kr" },
        { name: "Pound", symbol: "£" },
        { name: "Rial", symbol: "﷼" },
        { name: "Rupee INR", symbol: "₹" },
        { name: "Won", symbol: "₩" },
        { name: "Yen", symbol: "¥" },
      ];
    return currencySymbols.find((c) => c.name === currency)?.symbol
}

const Heading = ({title,editHandler,children}) =>
{
    return (
        <header className='flex space-x-3 items-center mb-6'>
            {children}
            <h1 className=' text-2xl shrink-0 font-black tracking-wide text-white grow'>{title}</h1>
            <svg onClick={editHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
        </header>
    )
}

const PreviewField = ({label , field}) =>
{
    return (
        <>
        {field && <aside className='grid grid-cols-2 items-center justify-start p-2.5 '>
            <span className='text-white-darkest'>{label}</span>
            <span className='pl-2.5 capitalize'>{field}</span>
        </aside>}
        </>
    )
}

const JobPostSummary = ({setQuestionNumber}) =>
{
    const {state:{location,salary,description}, dispatch} = useData();
    const {jobTitle,jobType:workMode} = location;
    const {jobIndustry,jobType,minExperience,currency,period} = salary;
    const {languages} = description;

    const selectedCurrency = currencySymbol(currency);

    return (
        <section className='pb-6'>
            <Heading title={"Job Post Summary"} editHandler={()=>{dispatch({type:"TOGGLE_NAVIGATION",payload:false});setQuestionNumber(1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
            </Heading>
            {/* Fetch Company Name from API later */}
            <PreviewField label="Company Name" field={"Google"} />
            <PreviewField label={"Posted By"} field={"Recruiter"} />
            <PreviewField label={"Job Title"} field={jobTitle} />
            <PreviewField label={"Job Industry"} field={jobIndustry} />
            <PreviewField label={"Remote/Onsite/ Hybrid "} field={workMode} />
            <PreviewField label={"Job Type"} field={jobType} />
            <PreviewField label="Experience Level" field={minExperience} />
            <PreviewField label="Salary Period" field={period} />
            {salary?.fromRange &&  <PreviewField label="Salary Range" field={`${selectedCurrency} ${salary?.fromRange} - ${selectedCurrency} ${salary?.toRange}`} />}
            <PreviewField label="Language/s Required" field={languages.join(' ')} />
        
        </section>
    )
}

const LocationInformation = ({setQuestionNumber}) =>
{
    const {state:{location},dispatch} = useData();

    return (
        <section className='py-6'>
            <Heading title={"Location Information"} editHandler={()=>{dispatch({type:"TOGGLE_NAVIGATION",payload:true});setQuestionNumber(1)}} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white-medium">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </Heading>
            <PreviewField label="Street" field={location?.streetAddress} />
            <PreviewField label="City" field={location?.city} />
            <PreviewField label="County/Region/State" field={location?.state} />
            <PreviewField label="Country" field={location?.country} />
        
        </section>
    )
}

const AdditionalBenefits = ({setQuestionNumber})=>
{
    const {state:{salary:{benefits}}, dispatch} = useData();

    return (
        <section className='py-6'>
            <Heading title="Additional Benefits" editHandler={()=>{dispatch({type:"TOGGLE_NAVIGATION",payload:true});setQuestionNumber(2)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.857 17.917C17.732 17.917 19.25 16.398 19.25 14.524V11.824C18.01 11.824 17.01 10.824 17.01 9.585C17.01 8.345 18.01 7.346 19.25 7.346L19.248 4.643C19.248 2.769 17.73 1.25 15.856 1.25H4.144C2.27 1.25 0.751 2.769 0.751 4.643L0.75 7.433C1.989 7.433 2.989 8.345 2.989 9.585C2.989 10.824 1.989 11.824 0.75 11.824V14.524C0.75 16.398 2.268 17.917 4.142 17.917H15.857Z" stroke="#E8E9F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99835 11.3545L11.7383 12.2695C11.9013 12.3545 12.0923 12.2165 12.0613 12.0355L11.7283 10.0965L13.1373 8.72553C13.2693 8.59653 13.1963 8.37353 13.0143 8.34653L11.0683 8.06353L10.1973 6.29953C10.1163 6.13453 9.88135 6.13453 9.79935 6.29953L8.92835 8.06353L6.98335 8.34653C6.80135 8.37353 6.72835 8.59653 6.86035 8.72553L8.26835 10.0965L7.93535 12.0355C7.90435 12.2165 8.09535 12.3545 8.25835 12.2695L9.99835 11.3545Z" stroke="#E8E9F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Heading>
            <PreviewField label="Additional Perks" field="Yes" />
            <ul className='ml-1'>
                {benefits.map((benefit,index)=>(
                    <li key={index} className='p-2.5'>
                        {index + 1}. {benefit}
                    </li>
                ))}
            </ul>
        </section>
    )
}

const Videos = () =>
{
    const {state:{video}} = useData();

    return (
        <section className='py-6 space-y-6'>
            <Heading title="Videos">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white-medium">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
            </Heading>
            <aside className='space-y-3'>
                <h1 className='text-lg'>Video 1 Demo</h1>
                <video controls width="400" className='w-full rounded-3xl'>
                    <source src={URL.createObjectURL(video.descriptionVideo)} type={video.descriptionVideo.type} />
                    Your browser does not support the video tag.
                </video>
            </aside>
            {video?.managerVideo && <aside className='space-y-3'>
                <h1 className='text-lg'>Video 2 Demo</h1>
                <video controls width="400" className='w-full rounded-3xl'>
                    <source src={URL.createObjectURL(video.managerVideo)} type={video.managerVideo.type} />
                    Your browser does not support the video tag.
                </video>
            </aside>}
        </section>
    )
}

const JobInformation = ({setQuestionNumber})=>
{
    const {state:{description:{jobDescription,requiredSkills}},dispatch} = useData();

    return (
        <section className='pb-6 space-y-6'>
            <Heading title="Job Information" editHandler={()=>{dispatch({type:"TOGGLE_NAVIGATION",payload:true});setQuestionNumber(3)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white-medium">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </Heading>
            <aside className='space-y-2'>
                <label className="text-white-medium text-xs font-bold">Job Description<span className='text-required'>*</span></label>
                <article className='px-4 py-3 border border-white-darkest rounded-xl'>
                    {jobDescription.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                    ))}
                </article>
            </aside>
            <aside className='space-y-2'>
                <label className="text-white-medium text-xs font-bold">List the Required Skills<span className='text-required'>*</span></label>
                <ul className='px-4 py-3 border border-white-darkest rounded-xl list-disc'>
                    {requiredSkills.split('\n').map((line, index) => (
                    <li key={index} className='ml-4'>
                        {line}
                    </li>
                    ))}
                </ul>
            </aside>
        </section>
    )
}

const TermsAndCondition = ()=>
{
    const [check,setCheck] = useState(false);

    const clickHandler = () => {
        // Call API here
    }
    return (
        <>
        <section className='flex items-center space-x-3 pb-3'>
            <label htmlFor='terms'>
                <input id='terms' type='checkbox' checked={check} className=' sr-only peer' onChange={()=>setCheck(prev=>!prev)}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 p-0.5 text-primary box-content border-2 border-white-medium rounded-md peer-checked:text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </label>
            <p className=''>By clicking this you accept all SeeYou’s <b>Terms & Condition*</b> </p>
        </section>
        <button className=' bg-white-light px-4 py-3 rounded-xl text-sm font-semibold text-primary disabled:brightness-50 hover:cursor-not-allowed w-full' disabled={!check} onClick={clickHandler}>Publish</button>
        </>
    )
}

const Preview = ({setQuestionNumber}) => 
{
  return (
    <div className='space-y-3'>
        <JobPostSummary setQuestionNumber={setQuestionNumber}/>
        <LocationInformation setQuestionNumber={setQuestionNumber}/>
        <AdditionalBenefits setQuestionNumber={setQuestionNumber}/>
        <Videos />
        <JobInformation setQuestionNumber={setQuestionNumber}/>
        <TermsAndCondition />
    </div>
  )
}

export default Preview
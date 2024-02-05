import React from 'react'
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

const JobPostSummary = () =>
{
    const {state:{location,salary,description}} = useData();
    const {jobTitle,jobType:workMode} = location;
    const {jobIndustry,jobType,minExperience,currency,period} = salary;
    const {languages} = description;

    const selectedCurrency = currencySymbol(currency);

    return (
        <section>
            <header className='flex space-x-3 items-center mb-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <h1 className=' text-2xl font-black tracking-wide text-white grow'>Job Post Summary</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
            </header>
            {/* Fetch Company Name from API later */}
            <PreviewField label="Company Name" field={"Google"} />
            <PreviewField label={"Posted By"} field={"Recruiter"} />
            <PreviewField label={"Job Title"} field={jobTitle} />
            <PreviewField label={"Job Industry"} field={jobIndustry} />
            <PreviewField label={"Remote/Onsite/ Hybrid "} field={workMode} />
            <PreviewField label={"Job Type"} field={jobType} />
            <PreviewField label="Experience Level" field={minExperience} />
            <PreviewField label="Salary Period" field={period} />
            <PreviewField label="Salary Range" field={`${selectedCurrency} ${salary?.fromRange} - ${selectedCurrency} ${salary?.toRange}`} />
            <PreviewField label="Language/s Required" field={languages.join(' ')} />
        
        </section>
    )
}

const Preview = () => 
{
    const {state:{location,salary,description,video}} = useData();
  return (
    <div>
        <JobPostSummary />
    </div>
  )
}

export default Preview
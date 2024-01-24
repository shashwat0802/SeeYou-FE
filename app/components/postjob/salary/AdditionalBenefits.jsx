import React , {useRef, useState} from 'react'
import { useData } from '../../../post-job/PostJobContext'

const AddedBenefits = () =>
{
    const inputRef = useRef();
    const {state:{salary:{benefits, addedBenefits}} , dispatch } = useData();
    
    const clickHandler=(event)=>
    {
        if (event.key === 'Enter')
        {
            const benefit = inputRef.current.value
            dispatch({type:"SALARY_FIELDS" , payload:{inputField:"addedBenefits" , userInput:[...addedBenefits,benefit] }})
            inputRef.current.value = '';
        }
    }

    const changeHandler = (benefit) =>
    {
        const filteredArray = benefits.includes(benefit)
        ? benefits.filter((selectedBenefit) => selectedBenefit !== benefit)
        : [...benefits, benefit]
        dispatch({type:"SALARY_FIELDS",payload:{inputField:"benefits",userInput:filteredArray}})
    }

    const deleteAdditionalBenefit=(selectedBenefit)=>
    {
        const filteredArray = addedBenefits.filter(benefit=>benefit!==selectedBenefit);
        dispatch({type:"SALARY_FIELDS",payload:{inputField:"addedBenefits",userInput:filteredArray}})
    }

    return (
        <section className='space-y-6 mt-6'>
            <header className='space-y-2'>
                <label className=' text-white-medium text-xs font-bold'>Add Benefits</label>
                <input ref={inputRef} className=' block w-full text-sm border border-white-darkest py-3 pl-4 rounded-xl  bg-primary  outline-none ' placeholder='Write here' onKeyDown={clickHandler}/>
            </header>
            <main>
                <label className=' text-white-medium text-xs font-bold'>Added Benefits</label>
                <ul className='bg-primary'>
                {addedBenefits.map((benefit,index)=>(
                    <li key={index} className='relative'>
                        <label htmlFor={benefit} className={` flex items-center space-x-2.5 py-4 pl-0.5 `}>
                            <input className=" peer sr-only" id={benefit} type="checkbox" checked={benefits.includes(benefit)} name={"benefits"} onChange={()=>changeHandler(benefit)}/>
                                <div className="w-6 h-6 border-2 border-white-darkest rounded-md box-border flex justify-center items-center text-primary peer-checked:text-white peer-checked:border-white-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <p className="text-white-medium text-sm">{benefit}</p>
                        </label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className=" absolute right-0 z-10 top-3.5 hover:cursor-pointer w-6 h-6 text-required" 
                         onClick={()=>deleteAdditionalBenefit(benefit)}>
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                        </svg>

                    </li>
                ))
                    }
            </ul>
            </main>

        </section>
    )
}

const AdditionalBenefits = () =>
{
    const [showAddedBenefits , setShowAddedBenefits] = useState(false);
    const benefitsArray = ["Flexible Working Hours","Overtime Pay","Joining Bonus","Annual Bonus","PF","Travel Allowance (TA)","Gasoline Allowance","Mobile Allowance","Internet Allowance","Laptop","Health Insurance"];
    const {state:{salary:{benefits}} , dispatch } = useData();

    const changeHandler = (benefit) =>
    {
        const filteredArray = benefits.includes(benefit)
        ? benefits.filter((selectedBenefit) => selectedBenefit !== benefit)
        : [...benefits, benefit]
        dispatch({type:"SALARY_FIELDS",payload:{inputField:"benefits",userInput:filteredArray}})
    }

    return (
        <section>
            <h1 className='font-black text-2xl tracking-[0.24px] mb-6'>Additional Benefits</h1>
            <label className=' leading-5.5'>Do You Offer any additional Benefits?</label>
            <ul className='bg-[#1F222A] p-3 border border-[#35383F] rounded-2xl mt-3'>
                {benefitsArray.map((benefit,index)=>(
                    <li key={index} >
                        <label htmlFor={benefit} className={` flex items-center space-x-2.5 py-4  `}>
                            <input className=" peer sr-only" id={benefit} type="checkbox" checked={benefits.includes(benefit)} name={"benefits"} onChange={()=>changeHandler(benefit)}/>
                                <div className="w-6 h-6 border-2 border-white-darkest rounded-md box-border flex justify-center items-center text-[#1F222A] peer-checked:text-white peer-checked:border-white-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <p className="text-white-medium text-sm">{benefit}</p>
                        </label>
                    </li>
                ))
                    }
            </ul>
            {showAddedBenefits
            ? <AddedBenefits />
            : <button className='p-3 bg-primary text-success flex items-center text-sm my-6 hover:cursor-pointer' onClick={()=>setShowAddedBenefits(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.75} stroke="currentColor" className="w-6 h-6 mr-2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Other Perks
            </button>}
        </section>
    )
}

export default AdditionalBenefits
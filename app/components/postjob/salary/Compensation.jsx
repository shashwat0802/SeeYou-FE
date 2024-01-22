import React from 'react'

import { useData } from '../../../post-job/PostJobContext'
import Label from './Label'
import RadioButtons from "./RadioButtons";

const Range = ({state , dispatch , currency, inputField}) =>
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

    const changeHandler = (range) =>
    {
        if(range>=0)
            dispatch({type:"SALARY_FIELDS",payload:{inputField,userInput:range}});
    }

    const selectedCurrency = currencySymbols.find((c) => c.name === currency);

    return (
        <aside className='px-4 py-3 border border-white-darkest rounded-xl space-x-1.5'>
            <span className='text-[#8F9098] text-sm'>{selectedCurrency?.symbol}</span>
            <input value={state} type='number' className='text-sm border-none outline-none bg-primary text-white placeholder:text-[#8F9098] ' placeholder='Enter salary' onChange={(e)=>changeHandler(Number(e.target.value))}/>
        </aside>
    )
}

const Compensation = () =>
{
    const currencies = ["USD Dollar","Euros","Krone","Pound","Rial","Rupee INR","Won","Yen"];
    const salaryPeriods = ["Hourly" , "Weekly", "Monthly", "Annually"];
    const {state:{salary:{currency , period , fromRange , toRange}} , dispatch } = useData();

    return (
        <section className='space-y-6 pb-6 border-b border-[#35383F]'>
            <h1 className='text-white-medium font-black px-4 py-3 border border-[#35383F] tracking-wide rounded-xl '>Select Salary Currency</h1>
            <RadioButtons options={currencies} inputField={"currency"} state={currency} dispatch={dispatch} />
            <aside className='space-y-3'>
                <Label text="Select Salary Period" required={true} />
                <RadioButtons options={salaryPeriods} inputField={"period"} state={period} dispatch={dispatch} />
            </aside>
            <main className='space-y-3'>
                <Label text="Select Salary Range" required={true} />
                <section className='space-y-2'>
                    <label className=' text-xs font-bold text-white-medium'>From*</label>
                    <Range state={fromRange} dispatch={dispatch} currency={currency} inputField={"fromRange"} />
                </section>
                <h2 className=' text-sm text-white text-right'>/{period}</h2>
                <div className='p-2.5 bg-[#35383F]/15 text-sm text-white font-extrabold text-center rounded-lg '>TO</div>
                <section className='space-y-2'>
                    <label className=' text-xs font-bold text-white-medium'>To*</label>
                    <Range state={toRange} dispatch={dispatch} currency={currency} inputField={"toRange"} />
                </section>
                <h2 className=' text-sm text-white text-right'>/{period}</h2>
            </main>
        </section>
    )
}

export default Compensation
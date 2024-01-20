import React, { useState } from 'react'
import Input from "./Input";

const JobLocationDetails = () => {
    const [input,setInput] = useState({streetAddress:"",city:"",state:"",country:""});

    const changeHandler = (inputField,text) =>
    {
        setInput(prev=>({...prev , [inputField]:text }))
    }

  return (
    <section>
            <h1 className="font-black tracking-wide">Enter Job Location details</h1>
            <span className="text-xs text-white-medium font-bold">We’ll include this information in your job post.</span>
            <Input
                value={input.streetAddress}
                changeHandler={changeHandler}
                required={true}
                left={114}
                placeholder="Street address"
                id="streetAddress"
                type="address"
                />
            <Input
                value={input.city}
                changeHandler={changeHandler}
                required={true}
                left={43}
                placeholder="City"
                id="city"
                type="city"
                />
            <Input
                value={input.state}
                changeHandler={changeHandler}
                required={true}
                left={148}
                placeholder="County/region/state"
                id="state"
                type="state"
                />
            <Input
                value={input.country}
                changeHandler={changeHandler}
                required={true}
                left={70}
                placeholder="Country"
                id="country"
                type="country"
                />            
        </section>
  )
}

export default JobLocationDetails
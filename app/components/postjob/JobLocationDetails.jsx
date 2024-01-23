import React from 'react'
import { useData } from '../../post-job/PostJobContext';
import Input from "./Input";

const JobLocationDetails = () => {
    const {state:{location:{showJobLocation,streetAddress,city,state,country}} , dispatch} = useData();

    const changeHandler = (inputField,userInput) =>
    {
      dispatch({type:"LOCATION_FIELDS" , payload:{inputField, userInput}})
    }

  return (
    <section>
            <h1 className="font-black tracking-wide">Enter Job Location details</h1>
            <span className="text-xs text-white-medium font-bold">We’ll include this information in your job post.</span>
            { showJobLocation===true && <Input
                value={streetAddress}
                changeHandler={changeHandler}
                required={true}
                left={114}
                placeholder="Street address"
                id="streetAddress"
                type="address"
                />}
            <Input
                value={city}
                changeHandler={changeHandler}
                required={true}
                left={43}
                placeholder="City"
                id="city"
                type="city"
                />
            <Input
                value={state}
                changeHandler={changeHandler}
                required={true}
                left={148}
                placeholder="County/region/state"
                id="state"
                type="state"
                />
            <Input
                value={country}
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
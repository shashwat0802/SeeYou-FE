import React from 'react'
import Input from '../Input'

const JobLocationDetails = () => {
    
  return (
    <section>
            <h1 className="font-black tracking-wide">Enter Job Location details</h1>
            <span className="text-xs text-white-medium font-bold">We’ll include this information in your job post.</span>
            <Input
                required={true}
                left={111}
                placeholder="Street address"
                id="StreetAddress"
                type="address"
                />
            <Input
                required={true}
                left={43}
                placeholder="City"
                id="city"
                type="city"
                />
            <Input
                required={true}
                left={143}
                placeholder="County/region/state"
                id="state"
                type="state"
                />
            <Input
                required={true}
                left={68}
                placeholder="Country"
                id="country"
                type="country"
                />            
        </section>
  )
}

export default JobLocationDetails
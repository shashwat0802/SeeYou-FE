'use client';
import React, { useState } from 'react'

import ProgressBar from "../components/ProgressBar";
import Input from '../components/Input';
import SelectJobType from "../components/postjob/SelectJobType"
import SelectJobLocation from "../components/postjob/SelectJobLocation";

const page = () => {
    const [step, setStep] = useState(1);
  return (
    <div className=" my-4 mx-6 space-y-4">
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="Post a job"
      />
      <main className="pt-6 space-y-6">
        <header>
            <h1 className="text-2xl font-black tracking-wide">Create a Job Post</h1>
            <span className="text-sm text-required">*Marked fields are mandatory</span>
        </header>
        <Input id="jobTitle" type={"text"} placeholder={"Job title (maximum 160 Characters)"} label="Job Title" required={true}/>

        <SelectJobType />
        <SelectJobLocation />

        <button className="px-4 py-3 bg-white-light rounded-xl text-sm font-bold w-full text-primary disabled:brightness-50">Continue</button>
      </main>
    </div>
  )
}

export default page
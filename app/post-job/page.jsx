'use client';
import React, { useState } from 'react'
import { PostJobProvider } from "./PostJobContext";

import ProgressBar from "../components/ProgressBar";
import JobLocation from "../components/postjob/JobLocation";

const page = () => {
    const [step, setStep] = useState(1);
    const [questionNumber, setQuestionNumber] = useState(1)

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
        <PostJobProvider>
          <JobLocation setQuestionNumber={setQuestionNumber}/>
        </PostJobProvider>
      </main>
    </div>
  )
}

export default page
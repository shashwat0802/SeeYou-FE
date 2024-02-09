'use client';
import React, { useState , useEffect } from 'react'
import { PostJobProvider } from "./PostJobContext";

import ProgressBar from "../components/ProgressBar";
import JobLocation from "../components/postjob/location/JobLocation";
import Salary from "../components/postjob/salary/Salary";
import Description from "../components/postjob/description/Description";
import Video from "../components/postjob/video/Video";
import Preview from "../components/postjob/preview/Preview";

const page = () => {
  const [step, setStep] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1)

  useEffect(()=>{window.scrollTo(0, 0)},[questionNumber])

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
            <h1 className="text-2xl font-black tracking-wide">{true?"Upload Job Post Videos":"Create a Job Post"}</h1>
            <span className="text-sm text-required">*Marked fields are mandatory</span>
        </header>
        <PostJobProvider>
          {questionNumber==1 && <JobLocation setQuestionNumber={setQuestionNumber}/>}
          {questionNumber==2 && <Salary setQuestionNumber={setQuestionNumber}/>}
          {questionNumber==3 && <Description setQuestionNumber={setQuestionNumber} />}
          {questionNumber==4 && <Video setQuestionNumber={setQuestionNumber}/>}
          {questionNumber==5 && <Preview setQuestionNumber={setQuestionNumber} />}
        </PostJobProvider>
      </main>
    </div>
  )
}

export default page
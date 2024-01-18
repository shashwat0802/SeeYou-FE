'use client';
import React, { useState } from 'react'
import ProgressBar from "../components/ProgressBar";

const page = () => {
    const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="Post a job"
      />
    </div>
  )
}

export default page
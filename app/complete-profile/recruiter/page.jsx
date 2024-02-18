'use client';

import ProgressBar from '@/app/components/ProgressBar';
import Details from "../../components/recruiterProfile/Details";
import { useState } from 'react';
import {CompleteRecruiterProfileProvider} from "./CompleteRecruiterProfileContext";

const CompleteProfileRecruiter = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="Complete Details"
      />
      <main className="pt-6 space-y-6">
        <header>
          <h1 className="text-2xl font-black tracking-wide">Are You?</h1>
          <span className="text-sm text-required">*Marked fields are mandatory</span>
        </header>
        <CompleteRecruiterProfileProvider>
          <Details setStep={setStep}/>
        </CompleteRecruiterProfileProvider>

      </main>
    </div>
  );
};

export default CompleteProfileRecruiter;

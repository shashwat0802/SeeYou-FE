'use client';

import { useState } from 'react';
import {CompleteCandidateProfileProvider} from "./CompleteCandidateProfileContext";

import ProgressBar from '@/app/components/ProgressBar';
import CandidateProfile from "../../components/complete-profile/candidate/CandidateProfile";
import UploadProfilePhoto from "../../components/complete-profile/candidate/UploadProfilePhoto";
import ProfileVideo from "../../components/complete-profile/candidate/ProfileVideo";
import TermsAndConditions from "../../components/complete-profile/candidate/TermsAndConditions";

const heading = (step)=>
{
  switch(step)
  {
    case 1: return "Complete your Profile";
    case 2: return "Upload your Profile Photo"
    case 3: return "Upload your Profile Video"
    case 4: return "Terms & Conditions"
    default: return "Fill Details?"
  }
}

const CompleteProfileCandidate = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="Fill the Form"
      />
      <main className="pt-6 space-y-6">
        <header className={step===4?"hidden":""}>
          <h1 className="text-2xl font-black tracking-wide">{heading(step)}</h1>
          {step!==4 && <span className="text-sm text-required">*Marked fields are mandatory</span>}
        </header>
        <CompleteCandidateProfileProvider>
          {step===1 && <CandidateProfile setStep={setStep} />}
          {step===2 && <UploadProfilePhoto setStep={setStep} />}
          {step===3 && <ProfileVideo setStep={setStep} />}
          {step===4 && <TermsAndConditions setStep={setStep} />}
        </CompleteCandidateProfileProvider >

      </main>
    </div>
  );
};

export default CompleteProfileCandidate;

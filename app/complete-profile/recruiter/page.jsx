'use client';

import { useState } from 'react';
import {CompleteRecruiterProfileProvider} from "./CompleteRecruiterProfileContext";

import ProgressBar from '@/app/components/ProgressBar';
import Details from "../../components/complete-profile/recruiter/Details";
import CompanyInformation from "../../components/complete-profile/recruiter/CompanyInformation";
import CompanyLogo from "../../components/complete-profile/recruiter/CompanyLogo";
import AboutCompany from "../../components/complete-profile/recruiter/AboutCompany";
import CompanyBrands from "../../components/complete-profile/recruiter/CompanyBrands";
import CompanyVideo from "../../components/complete-profile/recruiter/CompanyVideo";
import TermsAndCondition from "../../components/complete-profile/recruiter/TermsAndCondition";

const heading = (step)=>
{
  switch(step)
  {
    case 1: return "Are You?";
    case 2: return "Enter Company Information"
    case 3: return "Upload company logo"
    case 4: return "About our company"
    case 5: return "Brand/s of the company"
    case 6: return "Upload Company Presentation Video"
    case 7: return "Terms & Conditions"
    default: return "Are You?"
  }
}

const CompleteProfileRecruiter = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={7}
        type="Complete Details"
      />
      <main className="pt-6 space-y-6">
        <header className={step===7?"hidden":""}>
          <h1 className="text-2xl font-black tracking-wide">{heading(step)}</h1>
          {step!==5 && <span className="text-sm text-required">*Marked fields are mandatory</span>}
        </header>
        <CompleteRecruiterProfileProvider>
          {step===1 && <Details setStep={setStep}/>}
          {step===2 && <CompanyInformation setStep={setStep}/>}
          {step===3 && <CompanyLogo setStep={setStep}/>}
          {step===4 && <AboutCompany setStep={setStep} /> }
          {step===5 && <CompanyBrands setStep={setStep} />}
          {step===6 && <CompanyVideo setStep={setStep} />}
          {step===7 && <TermsAndCondition setStep={setStep} />}
        </CompleteRecruiterProfileProvider >

      </main>
    </div>
  );
};

export default CompleteProfileRecruiter;

'use client';

import Input from '@/app/components/Input';
import ProgressBar from '@/app/components/ProgressBar';
import { useState } from 'react';

const CompleteProfileCandidate = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="candidate"
      />
      <form action="">
        {step === 1 && (
          <>
            <p className="break-words font-black text-2xl mt-6">
              Complete your Profile
            </p>
            <p className="text-sm text-[#FF616D] my-2">
              *Marked fields are mandatory
            </p>
          </>
        )}
        <Input
          label="About Myself"
          id="AboutMyself"
          required={true}
          placeholder="Introduce yourself in maximum 160 characters"
        />
        <label
          htmlFor="About My Experience"
          className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mt-4 text-white"
        >
          About My Experience
          <span className="text-[#FF616D]">*</span>
        </label>
        <textarea
          name=""
          id="AboutExperience"
          cols="30"
          rows="8"
          placeholder="Maximum 2000 characters"
          className="peer relative w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white font-bold placeholder:text-sm"
        ></textarea>
      </form>
    </div>
  );
};

export default CompleteProfileCandidate;

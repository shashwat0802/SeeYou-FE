'use client';

import ProgressBar from '@/app/components/ProgressBar';
import { useState } from 'react';

const CompleteProfileCandidate = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      <ProgressBar
        steps={step}
        setStep={setStep}
        totalStep={5}
        type="candidate"
      />
    </div>
  );
};

export default CompleteProfileCandidate;

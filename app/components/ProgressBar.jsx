'use client';
import { FaChevronLeft } from 'react-icons/fa';

const ProgressBar = ({ step, setStep, totalSteps, type }) => {
  const progressBarWidth = `${(step / totalSteps) * 100}%`;

  return (
    <div>
      <p className="text-lg">
        <button
          className="mr-3 cursor-pointer place-self-start"
          onClick={(e) => {
            e.preventDefault();
            if (step > 1) setStep(step - 1);
          }}
        >
          <FaChevronLeft />
        </button>
        {type}
      </p>

      <div className="w-full bg-[#34373F] rounded-full h-2.5">
        <div
          className="bg-white h-2.5 rounded-full my-2"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

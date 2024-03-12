'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const ProgressBar = ({ step, setStep, totalSteps, type }) => {
  const router = useRouter()
  const progressBarWidth = `${(step / totalSteps) * 100}%`;

  return (
    // Make the progress bar sticky so that when content overflows, it is still visible
    // Need to add pt-4 and remove pt-4 so that progress bar does not shift up
    <div className="sticky top-0 bg-primary z-10 pt-4">
      <p className="text-lg">
        <button
          className="mr-3 cursor-pointer place-self-start"
          onClick={(e) => {
            e.preventDefault();
            if (step > 1) setStep(step - 1);
            if(step === 1) router.back()
          }}
        >
          <FaChevronLeft />
        </button>
        {/* Let type be here so that progress bar can be used at multiple pages */}
        <span className="capitalize">{type}</span>
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

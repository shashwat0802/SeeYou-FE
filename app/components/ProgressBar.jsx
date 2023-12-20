'use client';
import { FaChevronLeft } from 'react-icons/fa';

const ProgressBar = ({ step, setStep, totalStep, type }) => {
  return (
    <div>
      <p className="text-lg">
        <button
          className="mr-3 cursor-pointer place-self-start"
          onClick={(e) => {
            e.preventDefault();
            setStep(step - 1);
          }}
        >
          <FaChevronLeft />
        </button>{' '}
        {type === 'candidate' ? 'Fill the Form' : 'Complete Details'}
      </p>

      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-blue-600 h-2.5 rounded-full"
          style={`width: ${100 / totalStep}%`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

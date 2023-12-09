'use client';
import { toast } from 'react-toastify';
const CandidatePage = () => {
  const notify = () => toast('Wow so easy!');
  return (
    <div>
      candidate
      <button
        onClick={() => {
          notify();
        }}
      >
        click
      </button>
    </div>
  );
};

export default CandidatePage;

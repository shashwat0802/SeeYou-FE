'use client';
import Registration from '@/app/components/Registration';
import { toast } from 'react-toastify';
const CandidatePage = () => {
  return (
    <div>
      <div>
        <Registration type="candidate" />
      </div>
    </div>
  );
};

export default CandidatePage;

'use client';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { LuFilter } from 'react-icons/lu';
import placeholder from '@/public/images/placeholder-2.svg';

const CandidateMyApplication = () => {
    const searchApplication = () => {

    }
  return (
    <div>
      <div className="rounded-lg flex bg-[#34373F] p-3 items-center w-full justify-between text-lg my-4">
        <button onClick={searchApplication}>
          <FaSearch />
        </button>
        <input
          type="search"
          id="job-application"
          name="application-job"
          placeholder="Search “title, description or skills”"
          className="placeholder:text-[#8F9098] bg-transparent focus:outline-none placeholder:text-sm ml-2"
        />
        <button>
          <LuFilter />
        </button>
      </div>
      {/* main section */}
      
    </div>
  );
}

export default CandidateMyApplication
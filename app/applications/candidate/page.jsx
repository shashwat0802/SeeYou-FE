'use client';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { LuFilter } from 'react-icons/lu';
import placeholder from '@/public/images/placeholder-2.svg';

const CandidateMyApplication = () => {
  const searchApplication = () => {};
  return (
    <div className="px-4">
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
      <p className="text-lg font-black my-3">Recommended Jobs</p>
      <div className="rounded-lg flex items-center bg-[#1f222a] p-4 border border-[#35383f] my-2">
        <Image height={110} width={80} alt="#" src={placeholder} />
        <div className="mx-4">
          <p className="text-white text-lg">Product Management</p>
          <p className="text-[#71727A] text-sm mb-2">GothaCapital</p>
          <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
            Video Application sent
          </div>

          {/* <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
            Tag
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CandidateMyApplication;

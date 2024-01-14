'use client';
import React from 'react';
import { CiFilter } from 'react-icons/ci';
import placeholder from '@/public/images/placeholder-2.svg';
import { BsBookmarkDash } from 'react-icons/bs';
import { BsBookmarkDashFill } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { LuArrowUpDown } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { LuFilter } from 'react-icons/lu';
import Image from 'next/image';

const SavedJobs = () => {
  return (
    <div className="px-4">
      <div className="rounded-lg flex bg-[#34373F] p-3 items-center w-full justify-between text-lg my-4">
        <FaSearch />
        <input
          type="search"
          id="job-search"
          name="search-job"
          placeholder="Search “title, description or skills”"
          className="placeholder:text-[#8F9098] bg-transparent focus:outline-none placeholder:text-sm ml-2"
        />
        <button>
          <LuFilter />
        </button>
      </div>
      {/* recent jobs */}
      <ul className="flex justify-between w-full items-center my-4">
        <li className="text-lg font-black">
          <span>20</span> Saved Jobs
        </li>
        <li>
          <button className="text-xl">
            <CiFilter />
          </button>
        </li>
      </ul>
      {/* saved jobs list */}
      <div className="bg-[#1F222A] rounded-lg p-4">
        <div className="flex pb-2  border-b border-[#35383F] items-center">
          <div className="mr-3">
            <Image width={90} height={90} src={placeholder} />
          </div>
          <div>
            <div className="blue-bg p-2 my-2">
              <p className="text-xs font-boldrounded-md">20 minutes ago</p>
            </div>
            <p className="text-[#D4D6DD] mt-1">Linear company</p>
            <p className="text-2xl font-black mt-2">UI/UX Designer</p>
          </div>
          <button className="self-start text-lg font-black cursor-pointer text-[#ffc02d] mt-4 ml-4">
            <BsBookmarkDashFill />
          </button>
        </div>
        <p className="text-lg mt-2">
          $ <span>50,000</span>- <span>55,000</span> /month
        </p>
        <ul className="my-2">
          <li className="text-sm flex items-center">
            <span className="text-lg mr-1">
              <GoHome />
            </span>
            <span>Information Technology</span> &nbsp;&nbsp;.
          </li>
        </ul>
        <ul className="flex my-2">
          <li className="text-sm flex items-center mr-6 ">
            <span className="text-lg mr-1">
              <IoLocationOutline />
            </span>
            <span>Brussels, Belgium</span> &nbsp;&nbsp;.
          </li>
          <li className="text-sm flex items-center mr-6 ">
            <span className="text-lg mr-1">
              {' '}
              <LuArrowUpDown />
            </span>
            <span>Onsite</span> &nbsp;&nbsp;.
          </li>
        </ul>
        <ul className="flex">
          <li className="text-sm flex items-center mr-6 ">
            <span className="text-lg mr-1">
              <IoBriefcaseOutline />
            </span>
            <span>Entry Level</span> &nbsp;&nbsp;.
          </li>
          <li className="text-sm flex items-center mr-6 ">
            <span className="text-lg mr-1">
              <GoClock />
            </span>
            <span>Full time</span>&nbsp;&nbsp; .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SavedJobs;

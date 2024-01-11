'use client';
import ProtectedRoute from '@/app/components/protectedRoute';
import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { LuFilter } from 'react-icons/lu';
import { BsBookmarkDash } from 'react-icons/bs';
import placeholder from '@/public/images/placeholder-2.svg';
import coFounderImg from '@/public/images/co-founder.svg';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { LuArrowUpDown } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import Input from '@/app/components/Input';

const CandidateDashboard = () => {
  return (
    <div className="flex flex-col items-center px-4">
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
      <div className="flex">
        <div className="w-1/2 bg-[#E5E6EA] p-4  rounded-l-lg">
          <h1 className="text-xl font-black text-black">
            Best Way to find Jobs
          </h1>
          <p className="text-[#494A50] text-xs mt-2 my-4">
            SeeYou provides you the opportunity you deserve.
          </p>
          <button className="rounded-lg bg-[#F8F9FE] p-2 text-black font-bold text-xs w-24">
            Read More
          </button>
        </div>
        <div className="w-1/2 bg-[#FFFDD0] p-4  rounded-r-lg"></div>
      </div>
      <ul className="flex justify-between w-full items-center my-4">
        <li className="text-lg font-black">Recommended Jobs</li>
        <li>
          <button>See All</button>
        </li>
      </ul>
      {/* job div */}
      <div className="bg-[#1F222A] rounded-lg p-4">
        <div className="flex pb-2  border-b border-[#35383F]">
          <div className="mr-3">
            <Image width={90} height={90} src={placeholder} />
          </div>
          <div>
            <Image objectFit="contain" src={coFounderImg} />
            <p className="text-[#D4D6DD] mt-1">Linear company</p>
            <p className="text-2xl font-black mt-2">UI/UX Designer</p>
          </div>
          <div className="text-[#D4D6DD] align-self-start text-lg font-black cursor-pointer">
            <BsBookmarkDash />
          </div>
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
      {/* recent jobs */}
      <ul className="flex justify-between w-full items-center my-4">
        <li className="text-lg font-black">Recent Jobs</li>
        <li>
          <button>See All</button>
        </li>
      </ul>

      {/* email me once section */}
      <form className="rounded-lg p-3 bg-[#1F222A]">
        <p className="text-lg text-white">
          Email me once per day for new jobs with these keywords:
        </p>
        <label htmlFor="keywords" className="text-[#E8E9F1] text-xs mt-4 mb-2">
          Maximum 3000 characters
        </label>
        <textarea
          name=""
          id="AboutExperience"
          cols="30"
          rows="3"
          placeholder="Enter here"
          className="peer relative w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white font-bold placeholder:text-sm"
        ></textarea>
        <div className="flex items-center justify-between">
          <input
            type="email"
            className="bg-transparent border border-[#35383F] rounded-md text-white placeholder:text-white p-2 focus:outline-none"
            id="subscribe-email"
            placeholder="email"
          />
          <button type="submit" className="bg-[#35383F] p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProtectedRoute(CandidateDashboard, 'candidate');

'use client';
import ProtectedRoute from '@/app/components/protectedRoute';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { LuFilter } from 'react-icons/lu';
import Job from '../../components/Job'
import { customFetch } from '@/utils/fetchHelper';
import { toast } from 'react-toastify';

const CandidateDashboard = () => {
  const [recommendedJobs , setRecommendedJobs] = useState([])
  const [allJobs , setAllJobs] = useState([])
  useEffect(() => {
    customFetch('/jobs' , {
      method:'GET'
    }).then((response) => {
      setAllJobs(response.data)
      setRecommendedJobs(response.data)
    }).catch((err) => {
      console.log(err)
    })
  } , [])
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
      {/* ads */}
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
      {/* recommended job list */}
        {recommendedJobs.length !== 0 && (
          recommendedJobs.map((job) => (
            <Job job={job} key={job.id} />
          ))
        )}
      {/* recent jobs */}
      <ul className="flex justify-between w-full items-center my-4">
        <li className="text-lg font-black">Recent Jobs</li>
        <li>
          <button>See All</button>
        </li>
      </ul>
      {/* all jobs list */}
      {allJobs.length !== 0 && (
          allJobs.map((job) => (
            <Job job={job} key={job.id} />
          ))
        )}
      {/* email me once section */}
      <form className="rounded-lg p-3 bg-[#1F222A] mt-8">
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

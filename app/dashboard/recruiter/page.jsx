"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

// This Dashboard needs to be visited later to integrate correctly with backend apis

const JobPostsDataFetchedFromBackend = [
  {jobId:"1",jobName:"UI Designer",location:"Brussel, Belgium",applications:0,type:"DRAFT",status:"Almost published"},
  {jobId:"2",jobName:"UI Designer",location:"Brussel, Belgium",applications:0,type:"",status:"In Review"},
  {jobId:"3",jobName:"Content Writer",location:"Brussel, Belgium",applications:556,type:"OPEN",status:"Expiring in 3 days"},
  {jobId:"4",jobName:"Product Manager",location:"Brussel, Belgium",applications:256,type:"OPEN",status:""},
  {jobId:"5",jobName:"Product Manager",location:"Brussel, Belgium",applications:56,type:"PAUSED",status:""}]

const TopTab = () =>
{
  const [check,setCheck] = useState(true);

  return (
    <section className="grid grid-cols-2 -mx-2.5">
        <label htmlFor="openPause" className="flex flex-col items-center" >
          <input className="peer sr-only" type="radio" checked={check} name="openClosed" id="openPause" onChange={()=>setCheck(true)} />
          <h1 className=" peer-checked:text-white text-[#35383F] shrink-0 text-lg  mb-3">Open & Paused(4)</h1>
          <aside className="self-stretch bg-[#35383F] peer-checked:bg-white rounded-full mt-[1px] h-0.5 peer-checked:h-1 peer-checked:mt-0"></aside>
        </label>
        <label htmlFor="expiredClosed" className="flex flex-col items-center">
          <input className="peer sr-only" type="radio" checked={!check} name="openClosed" id="expiredClosed" onChange={()=>setCheck(false)} />
          <h1 className=" peer-checked:text-white text-[#35383F] text-lg  mb-3">Expired/Closed(0)</h1>
          <aside className=" self-stretch bg-[#35383F] peer-checked:bg-white rounded-full mt-[1px] h-0.5 peer-checked:h-1 peer-checked:mt-0"></aside>
        </label>
      </section>
  )
}
const Filters = () =>
{
  const [selectedFilter,setSelectedFilter] = useState("Recently Edited");
  const filters = ["Recently Edited","In Review","Open","Paused","Expiring Soon","Ascending (A to Z)","Descending (Z to A)"];

  return (
    <section className="flex justify-between relative">
        <h1 className="text-sm font-extrabold">2 Jobs Posted</h1>
        <button className="group outline-none text-left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="size-4 text-white group-focus:text-success">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
          <ul className="absolute z-10 top-6 right-0 p-3 bg-bg-light rounded-2xl text-sm text-white-light hidden group-focus:block" >
          {filters.map((filter,index)=>(
            <li key={index} className={` ${filter===selectedFilter?"bg-primary-light":"hover:bg-primary-light"} rounded-xl py-4 px-3`} onClick={()=>setSelectedFilter(filter)}>{filter}</li>
          ))}
        </ul>
        </button>
        
      </section>
  )
}
const TagSelector = ({tag}) =>
{
  switch(tag) {
    case "Almost published":
      return <span className="bg-white text-xs underline text-primary p-1.5 rounded-lg font-medium">{tag}</span>

    case "In Review":
      return <span className="text-xs text-[#2897FF] bg-[#2897FF2E] p-1.5 rounded-lg tracking-wide">{tag}</span>

    case "Expiring in 3 days":
      return <span className="text-xs text-required bg-[#FF616D2E] p-1.5 rounded-lg tracking-wide underline">{tag}</span>

    case "PAUSED":
      return <span>{tag}</span>

    default:
      return ""  ;
  }
}
const PostedJobList=()=>
{
  return (
    <ul>
        {JobPostsDataFetchedFromBackend.map((jobPost)=>(
          <li key={jobPost?.jobId} className="p-4 border-b border-[#35383F]">
            <label htmlFor={jobPost?.jobId} className="flex items-center gap-x-4">
              <input type="checkbox" id={jobPost?.jobId}/>
              <section className="grow">
                <h1 className="text-lg">{jobPost?.jobName}</h1>
                <p className="text-xs tracking-wide text-white-medium">{jobPost?.location} 
                <span className={`empty:hidden underline ml-1 ${jobPost?.type==="OPEN"?" text-success":jobPost?.type==="DRAFT"?"text-required":"text-[#2897FF]"}`}>{jobPost?.type}</span>
                </p>
                <aside className="flex space-x-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                  <span className="text-xs tracking-wide">{jobPost?.applications} Applications</span>
                </aside>
              </section>
              <TagSelector tag={jobPost?.status} />
            </label>
          </li>
        ))}
      </ul>
  )
}

const RecruiterDashboard = () => {
  return (
    <div className="mx-6 pt-4 space-y-6 pb-10">
      {/* <Navbar /> */}
      <header className="grid grid-cols-2 items-end">
        <aside>
          <h1 className=" text-xs">Welcome</h1>
          <h1 className=" text-lg">Dave Dus</h1>
        </aside>
        <button className="px-4 py-3 border-2 border-white-medium text-sm font-semibold text-white-medium rounded-xl"> 
          +
          Post a Job</button>
      </header>

      <aside className="px-4 py-3 rounded-xl space-x-4 flex items-center bg-primary-light">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input className="outline-none grow bg-transparent text-sm" placeholder="Filter & Search Jobs"/>
      </aside>
      <TopTab />
      <Filters />
      <PostedJobList />

    </div>
  )
};

export default RecruiterDashboard;

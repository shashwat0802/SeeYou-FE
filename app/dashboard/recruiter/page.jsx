import React from "react";

const TopTab = () =>
{
  return (
    <section className="grid grid-cols-2 -mx-2.5">
        <label htmlFor="openPause" className="flex flex-col items-center" >
          <input className="peer sr-only" type="radio" name="openClosed" id="openPause" />
          <h1 className=" peer-checked:text-white text-[#35383F] shrink-0 text-lg  mb-3">Open & Paused(4)</h1>
          <aside className="self-stretch bg-[#35383F] peer-checked:bg-white rounded-full mt-[1px] h-0.5 peer-checked:h-1 peer-checked:mt-0"></aside>
        </label>
        <label htmlFor="expiredClosed" className="flex flex-col items-center">
          <input className="peer sr-only" type="radio" name="openClosed" id="expiredClosed" />
          <h1 className=" peer-checked:text-white text-[#35383F] text-lg  mb-3">Expired/Closed(0)</h1>
          <aside className=" self-stretch bg-[#35383F] peer-checked:bg-white rounded-full mt-[1px] h-0.5 peer-checked:h-1 peer-checked:mt-0"></aside>
        </label>
      </section>
  )
}

const RecruiterDashboard = () => {
  return (
    <div className="mx-6 pt-4 space-y-6">
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
      
    </div>
  )
};

export default RecruiterDashboard;

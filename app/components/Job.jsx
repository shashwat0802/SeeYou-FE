'use client';
import { BsBookmarkDash } from 'react-icons/bs';
import placeholder from '@/public/images/placeholder-2.svg';
import coFounderImg from '@/public/images/co-founder.svg';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { LuArrowUpDown } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import Image from 'next/image';

const Job = ({job}) => {
  return (
    <div className="bg-[#1F222A] rounded-lg p-4">
    <div className="flex pb-2  border-b border-[#35383F]">
      <div className="mr-3">
        <Image alt="#" width={90} height={90} src={job.CompanyID.Logo.URL ? job.CompanyID.Logo.URL : placeholder} />
      </div>
      <div>
        <Image alt="#" src={coFounderImg} />
        <p className="text-[#D4D6DD] mt-1 font-black">{job.CompanyID.CompanyName}</p>
        <p className="text-lg mt-2">{job.JobTitle}</p>
      </div>
      <div className="text-[#D4D6DD] align-self-start text-lg font-black cursor-pointer">
        <BsBookmarkDash />
      </div>
    </div>
    <p className="text-lg mt-2">
      $ <span>{job.SalaryMin}</span>- <span>{job.SalaryMax}</span> /month
    </p>
    <ul className="my-2">
      <li className="text-sm flex items-center">
        <span className="text-lg mr-1">
          <GoHome />
        </span>
        <span>{job.JobIndustry}</span> &nbsp;&nbsp;.
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
        <span>{job.Location}</span> &nbsp;&nbsp;.
      </li>
    </ul>
    <ul className="flex">
      <li className="text-sm flex items-center mr-6 ">
        <span className="text-lg mr-1">
          <IoBriefcaseOutline />
        </span>
        <span>{job.ExperianceLevel}</span> &nbsp;&nbsp;.
      </li>
      <li className="text-sm flex items-center mr-6 ">
        <span className="text-lg mr-1">
          <GoClock />
        </span>
        <span>{job.JobType}</span>&nbsp;&nbsp; .
      </li>
    </ul>
  </div>
  )
}

export default Job
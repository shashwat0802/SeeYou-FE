'use client';
import { BsBookmarkDash } from 'react-icons/bs';
import placeholder from '@/public/images/placeholder-2.svg';
import coFounderImg from '@/public/images/co-founder.svg';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { LuArrowUpDown } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import Image from 'next/image';
import { customFetch } from '@/utils/fetchHelper';
import { toast } from 'react-toastify';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Job = ({ job }) => {
    // check from api if the job is bookmarked or not
  const [isBookMarked, setIsBookMarked] = useState(false);
  const router = useRouter();
  const bookMarkJob = (e) => {
    if (!isBookMarked) {
      customFetch(`/jobs/save/${job._id}`, {
        method: 'POST',
      })
        .then((res) => {
          setIsBookMarked(!isBookMarked);
          toast.success('Job Bookmarked !');
          return;
        })
        .catch((err) => {
          toast.error('Unable to Bookmark Job');
        });
    } else {
      customFetch(`/jobs/unsave/${job._id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          setIsBookMarked(!isBookMarked);
          toast.success('Bookmark Removed !');
        })
        .catch((err) => {
          toast.error('Unable to Remove Bookmark ');
        });
    }
  };


  useEffect(() => { 
    setIsBookMarked(job.isSaved)
  } , [])

  return (
    <div className="bg-[#1F222A] rounded-lg p-4 cursor-pointer my-4 w-full">
      <div className="flex pb-2  border-b border-[#35383F] justify-between">
        <div className="">
          <Image
            alt="#"
            width={90}
            height={90}
            src={job.CompanyDetails.LogoURL? job.CompanyDetails.LogoURL : placeholder}
          />
        </div>
        <div>
          <Image alt="#" src={coFounderImg} />
          <p className="text-[#D4D6DD] mt-1 font-black">
            {job.CompanyDetails.CompanyName}
          </p>
          <p className="text-lg mt-2">{job.JobTitle}</p>
        </div>
        <div className="align-self-start text-lg font-black cursor-pointer">
          <button
            onClick={bookMarkJob}
            className={isBookMarked ? 'text-yellow-300' : ''}
          >
            <BsBookmarkDash />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-lg">
          $ <span>{job.SalaryMin}</span>- <span>{job.SalaryMax}</span> /month
        </p>
        <button
          className="bg-[#35383F] px-2 rounded-md py-1"
          onClick={() => {
            router.push(`/job-apply/${job._id}`);
          }}
        >
          APPLY
        </button>
      </div>
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
  );
};

export default Job;

'use client';
import Image from 'next/image';
import { BsBookmarkDash } from 'react-icons/bs';
import placeholder from '../../../public/images/placeholder-2.svg';
import coFounderImg from '../../../public/images/co-founder.svg';
import { GoHome } from 'react-icons/go';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';
import { LuArrowUpDown } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import TabPane from 'antd/es/tabs/TabPane';
import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { customFetch } from '@/utils/fetchHelper';
import ReactPlayer from 'react-player'

const ApplyJobPage = ({ params }) => {
  const router = useRouter();
  const [job, setJob] = useState();
  const [isBookMarked, setIsBookMarked] = useState(false);

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
    customFetch(`/jobs/${params.id}`, {
      method: 'GET',
    })
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        toast.error('Unable to get job !');
      });
  }, []);
  return (
    <div className="">
      {job && (
        <>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4 text-xl">
              <button
                onClick={() => {
                  router.back();
                }}
              >
                <FaChevronLeft />
              </button>
              {/* <div className="flex items-center">
                <button className="mr-3 text-2xl">
                  <MdIosShare />
                </button>
                <button>
                  <BsBookmarkDash />
                </button>
              </div> */}
            </div>
            <div className="bg-[#1F222A] rounded-lg p-4">
              <div className="border-b border-[#35383F] pb-2">
                <div className=" flex ">
                  <div className="mr-3">
                    <Image
                      alt="#"
                      width={90}
                      height={90}
                      src={
                        job.CompanyID.Logo.URL
                          ? job.CompanyID.Logo.URL
                          : placeholder
                      }
                    />
                    <div>
                      <p className="text-[#D4D6DD] mt-1">
                        {job.CompanyID.CompanyName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image objectFit="contain" src={coFounderImg} alt="#" />
                    <div className="blue-bg p-2 my-2">
                      <p className="text-xs font-boldrounded-md">
                        Posted by Recruiter
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-2xl font-black mt-2">{job.JobTitle}</p>
              </div>
              <p className="text-lg mt-2">
                $ <span>{job.SalaryMin}</span>- <span>{job.SalaryMax}</span>{' '}
                /month
              </p>
              <ul className="my-2">
                <li className="text-sm flex items-center">
                  <span className="text-lg mr-1">
                    <GoHome />
                  </span>
                  <span>{job.JobIndustry}</span> .
                </li>
              </ul>
              <ul className="my-2">
                <li className="text-sm flex items-center my-2">
                  <span className="text-lg mr-1">
                    <IoLocationOutline />
                  </span>
                  <span>Brussels, Belgium</span> .
                </li>
                <li className="text-sm flex items-center my-2">
                  <span className="text-lg mr-1">
                    <LuArrowUpDown />
                  </span>
                  <span>{job.Location}</span> .
                </li>
                <li className="text-sm flex items-center my-2">
                  <span className="text-lg my-2 mr-1">
                    <IoBriefcaseOutline />
                  </span>
                  <span>{job.ExperianceLevel}</span> .
                </li>
                <li className="text-sm flex items-center my-2">
                  <span className="text-lg mr-1">
                    <GoClock />
                  </span>
                  <span>{job.JobType}</span> .
                </li>
              </ul>
              <p className="text-[#8F9098]">
                Applicants <span className="text-white mx-2">158</span>
              </p>
              <p className="text-[#8F9098] my-2">
                Posted 28 min ago. ends in 31 dec.
              </p>
            </div>
          </div>
          <div className="w-full bg-white-9 p-4">
            <div className="grid grid-cols-5 gap-4">
              <button className="col-span-3 rounded-lg bg-white text-black font-bold" onClick={() => {
                router.push(`/job-apply/${job._id}/submission`);
              }}>
                Apply
              </button>
              {/* <button className="bg-[#35383F] flex items-center justify-center col-span-1 rounded-lg text-xl p-2">
                <MdIosShare />
              </button> */}
              <button className={`bg-[#35383F] flex items-center justify-center col-span-1 rounded-lg text-xl p-2 ${isBookMarked ? 'text-yellow-300' : ''}`}   onClick={bookMarkJob} >
                <BsBookmarkDash />
              </button>
            </div>
            <p className="text-[#8F9098] text-xs flex mt-4 items-center">
              <span className="text-white mr-2">
                <FiUsers />
              </span>
              Preferred candidates from:{' '}
              <span className="text-white">
                {' '}
                &nbsp;&nbsp;Greece, Italy, India
              </span>
            </p>
          </div>
          {/* tabs */}
          <div className="px-8 py-4">
            <Tabs defaultActiveKey="1" tabBarStyle={{}}>
              <TabPane key={1} tab="Job Description">
                <ul className="list-disc text-white">
                  <span className="text-lg font-bold">Job Description</span>
                  {job.JobDescription.split('\n').map(
                    (item, index) => item.trim() && <li key={index}>{item}</li>
                  )}
                </ul>
                <p className="text-lg font-bold text-white">Job Description Video</p>
                {job.JobVideo.URL && <ReactPlayer url={job.JobVideo.URL} controls={true} height={150} width={300} /> }
              </TabPane>
              <TabPane key={2} tab="Job Skills">
                <ul className="list-disc text-white">
                  <span className="text-lg font-bold">Job Skills</span>
                  {job.SkillDescription.split('\n').map(
                    (item, index) => item.trim() && <li key={index}>{item}</li>
                  )}
                </ul>
              </TabPane>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default ApplyJobPage;

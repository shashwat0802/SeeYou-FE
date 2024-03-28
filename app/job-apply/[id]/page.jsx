"use client";
import Image from "next/image";
import { BsBookmarkDash } from "react-icons/bs";
import placeholder from "../../../public/images/placeholder-2.svg";
import coFounderImg from "../../../public/images/co-founder.svg";
import { GoHome } from "react-icons/go";
import {
  IoAccessibility,
  IoBriefcaseOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import TabPane from "antd/es/tabs/TabPane";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { customFetch } from "@/utils/fetchHelper";
import ReactPlayer from "react-player";
import Job from "../../components/Job";

const ApplyJobPage = ({ params }) => {
  const router = useRouter();
  const [job, setJob] = useState();
  const [isBookMarked, setIsBookMarked] = useState(false);

  const bookMarkJob = (e) => {
    if (!isBookMarked) {
      customFetch(`/jobs/save/${job._id}`, {
        method: "POST",
      })
        .then((res) => {
          setIsBookMarked(!isBookMarked);
          toast.success("Job Bookmarked !");
          return;
        })
        .catch((err) => {
          toast.error("Unable to Bookmark Job");
        });
    } else {
      customFetch(`/jobs/unsave/${job._id}`, {
        method: "DELETE",
      })
        .then((res) => {
          setIsBookMarked(!isBookMarked);
          toast.success("Bookmark Removed !");
        })
        .catch((err) => {
          toast.error("Unable to Remove Bookmark ");
        });
    }
  };

  useEffect(() => {
    customFetch(`/jobs/${params.id}`, {
      method: "GET",
    })
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        toast.error("Unable to get job !");
      });
  }, []);
  // console.log(job.CompanyID.Brands);
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
                $ <span>{job.SalaryMin}</span>- <span>{job.SalaryMax}</span>{" "}
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
              <button
                className="col-span-3 rounded-lg bg-white text-black font-bold"
                onClick={() => {
                  router.push(`/job-apply/${job._id}/submission`);
                }}
              >
                Apply
              </button>
              {/* <button className="bg-[#35383F] flex items-center justify-center col-span-1 rounded-lg text-xl p-2">
                <MdIosShare />
              </button> */}
              <button
                className={`bg-[#35383F] flex items-center justify-center col-span-1 rounded-lg text-xl p-2 ${
                  isBookMarked ? "text-yellow-300" : ""
                }`}
                onClick={bookMarkJob}
              >
                <BsBookmarkDash />
              </button>
            </div>
            <p className="text-[#8F9098] text-xs flex mt-4 items-center">
              <span className="text-white mr-2">
                <FiUsers />
              </span>
              Preferred candidates from:{" "}
              <span className="text-white">
                {" "}
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
                  {job.JobDescription.split("\n").map(
                    (item, index) => item.trim() && <li key={index}>{item}</li>
                  )}
                </ul>
                <p className="text-lg font-bold text-white my-3">
                  Job Description Video
                </p>
                {job.JobVideo.URL && (
                  <ReactPlayer
                    url={job.JobVideo.URL}
                    controls={true}
                    height={150}
                    width={300}
                  />
                )}
                <p className="text-lg font-bold text-white my-3">
                  Direct Future Manager Video
                </p>
                {job.JobVideo.URL && (
                  <ReactPlayer
                    url={job.JobVideo.URL}
                    controls={true}
                    height={150}
                    width={300}
                  />
                )}
              </TabPane>
              <TabPane key={2} tab="Job Skills">
                <ul className="list-disc text-white">
                  <span className="text-lg font-bold">Job Skills</span>
                  {job.SkillDescription.split("\n").map(
                    (item, index) => item.trim() && <li key={index}>{item}</li>
                  )}
                </ul>
              </TabPane>
            </Tabs>
          </div>
          {/* General Information */}
          <div className="px-8 py-4 flex flex-col gap-2">
            <p>General Information</p>
            <p>
              <span className="text-[#8F9098]">Job Title: </span>
              <span>{job?.JobTitle}</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Salary: </span>
              <span>{job?.Salary}</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Job Industry: </span>
              <span>{job?.JobIndustry}</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Job Type: </span>
              <span>{job?.JobType}</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Employment Type: </span>
              <span>{job?.JobType}</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Required Languages : </span>
              <span>{job?.JobSkills.map((data) => data + ", ")}</span>
            </p>
          </div>
          {/* Additional Benefits */}
          <div className="px-8 py-4 flex flex-col gap-2">
            <p>Additional Benefits</p>
            {job?.AdditionalBenefits.map((data, index) => (
              <p>
                <span>{index + 1}. </span>
                <span>{data}</span>
              </p>
            ))}
          </div>
          {/* Location */}
          <div className="px-8 py-4 flex flex-col gap-2">
            <p>Location</p>
            <p>
              <span className="text-[#8F9098]">City: </span>
              <span>Berlin</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Country/Region/State: </span>
              <span>Germany</span>
            </p>
            <p>
              <span className="text-[#8F9098]">Country: </span>
              <span>Europe</span>
            </p>
            <button className="border-none p-2 mt-1 bg-white font-bold text-black rounded-md w-full">
              Apply
            </button>
          </div>
          {/* About Company */}
          <div className="px-8 py-4">
            <p className="text-lg font-bold text-white my-3">About Company</p>
            <ul className="list-disc">
              <li className="mt-1">
                Tata Motors Group (Tata Motors) is a leading global automobile
                manufacturing company. Its diverse portfolio includes
                anextensive range of cars, sports utility vehicles, trucks,
                buses and defence vehicles
              </li>
            </ul>
          </div>
          <Image
            src={require("../../../public/images/co-founder-crown.svg")}
            className="my-3 mx-auto"
          />
          <p>
            <span className="text-[#8F9098] px-8">Website: </span>
            <span>www.linear.inc</span>
          </p>
          {/* Company Video */}
          <div className="px-8 py-4">
            <p className="text-lg font-bold text-white my-3">Company Video</p>
            {job.JobVideo.URL && (
              <ReactPlayer
                url={job.JobVideo.URL}
                controls={true}
                height={150}
                width={300}
              />
            )}
          </div>
          {/* Brands Of Our Company */}
          <div className="px-8 py-4">
            <p className="text-lg font-bold text-white mb-3">
              Brands of Our Company
            </p>
            <div className="flex items-center gap-3 flex-wrap my-2">
              {job?.CompanyID?.Brands.map((data, index) => (
                <Image key={index} src={data.URL} width={100} height={100} />
              ))}
            </div>
          </div>
          {/* Other Jobs in Our Company */}
          <div className="px-8 py-4">
            {/* <p className="text-lg font-bold text-white mb-3">
              Other Jobs in Our Company
            </p> */}
            {/* <div>
              {savedJobs.map((data, index) => (
                <div key={index} className="bg-[#1F222A] rounded-lg p-4 mt-2">
                  <div className="flex pb-2  border-b border-[#35383F] items-center">
                    <div className="mr-3">
                      <Image
                        alt="#"
                        width={90}
                        height={90}
                        src={
                          data?.CompanyID?.Logo.URL
                            ? data?.CompanyID?.Logo.URL
                            : placeholder
                        }
                      />
                    </div>
                    <div>
                      <div className="blue-bg p-2 my-2">
                        <p className="text-xs font-boldrounded-md">
                          {data?.jobDetails?.createdAtHumanReadable}
                        </p>
                      </div>
                      <p className="text-[#D4D6DD] mt-1">
                        {data?.jobDetails?.companyName}
                      </p>
                      <p className="text-2xl font-black mt-2">
                        {data?.jobDetails?.JobTitle}
                      </p>
                    </div>
                    <button className="self-start text-lg font-black cursor-pointer text-[#ffc02d] mt-4 ml-4">
                      <BsBookmarkDashFill />
                    </button>
                  </div>
                  <p className="text-lg mt-2">
                    {data?.jobDetails?.salaryRange}
                  </p>
                  <ul className="my-2">
                    <li className="text-sm flex items-center">
                      <span className="text-lg mr-1">
                        <GoHome />
                      </span>
                      <span>{data?.jobDetails?.JobIndustry}</span> &nbsp;&nbsp;.
                    </li>
                  </ul>
                  <ul className="flex my-2">
                    <li className="text-sm flex items-center mr-6 ">
                      <span className="text-lg mr-1">
                        <IoLocationOutline />
                      </span>
                      <span>{data?.jobDetails?.City}</span> &nbsp;&nbsp;.
                    </li>
                    <li className="text-sm flex items-center mr-6 ">
                      <span className="text-lg mr-1">
                        {" "}
                        <LuArrowUpDown />
                      </span>
                      <span>{data?.jobDetails?.Location}</span> &nbsp;&nbsp;.
                    </li>
                  </ul>
                  <ul className="flex">
                    <li className="text-sm flex items-center mr-6 ">
                      <span className="text-lg mr-1">
                        <IoBriefcaseOutline />
                      </span>
                      <span>{data?.jobDetails?.ExperianceLevel}</span>{" "}
                      &nbsp;&nbsp;.
                    </li>
                    <li className="text-sm flex items-center mr-6 ">
                      <span className="text-lg mr-1">
                        <GoClock />
                      </span>
                      <span>{data?.jobDetails?.JobType}</span>&nbsp;&nbsp; .
                    </li>
                  </ul>
                </div>
              ))}
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default ApplyJobPage;

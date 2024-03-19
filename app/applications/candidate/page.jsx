"use client";
import Image from "next/image";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import placeholder from "@/public/images/placeholder-2.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { customFetch } from "@/utils/fetchHelper";
import { BsBookmarkDash } from "react-icons/bs";

const CandidateMyApplication = () => {
  const [applications, setApplications] = useState();
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [openTopFilter, setOpenTopFilter] = useState(false);

  useEffect(() => {
    customFetch("/applications", {
      method: "GET",
    })
      .then((res) => {
        setApplications(res.data);
      })
      .catch((err) => {
        toast.error("Unable to get your application");
      });
  }, []);

  const searchApplication = () => {};
  return (
    <div className="px-4">
      <div className="relative">
        <div className="border border-gray-500 text-gray-500 rounded-xl p-2 mt-2 w-[80%]">
          <div
            className="flex p-1 justify-between items-center"
            onClick={() => setOpenTopFilter(!openTopFilter)}
          >
            <p>All Applications (300)</p>
            <FaChevronDown />
          </div>
        </div>

        {openTopFilter && (
          <div className="absolute">
            <div
              className="fixed left-0 right-0 bottom-0 top-0 opacity-80 z-50"
              onClick={() => setOpenTopFilter(false)}
            ></div>
            <div
              onClick={""}
              className="absolute w-[250px] transform translate-y-4 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F] flex flex-col gap-5"
            >
              <p>All Applications (300)</p>
              <p>Unread (52)</p>
              <p className="flex gap-2 items-center"><Image src={require('../../../public/images/green-star-group.svg')}/>Great (06)</p>
              <p className="flex gap-2 items-center"><Image src={require('../../../public/images/blue-star-group.svg')}/>Good (78)</p>
              <p className="flex gap-2 items-center"><Image src={require('../../../public/images/yellow-star-group.svg')}/>Medium (69)</p>
              <p className="flex gap-2 items-center"><Image src={require('../../../public/images/orange-star-group.svg')}/>Worst (86)</p>
              <p className="flex gap-2 items-center"><Image src={require('../../../public/images/red-star.svg')}/>Not Recommended (6)</p>
            </div>
          </div>
        )}

        {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L4 6h12z"/></svg>
      </div> */}
      </div>

      <div className="rounded-lg flex bg-[#34373F] p-3 items-center w-full justify-between text-lg my-4">
        <button onClick={searchApplication}>
          <FaSearch />
        </button>
        <input
          type="search"
          id="job-application"
          name="application-job"
          placeholder='Find "Candidate"'
          className="placeholder:text-[#8F9098] bg-transparent focus:outline-none placeholder:text-sm ml-2"
        />
        <button>
          <LuFilter />
        </button>
      </div>
      {/* main section */}
      <div className="my-4 mx-1 flex justify-between items-center">
        <p className=" font-bold text-xl ">300 Applications found</p>
        <Image
          src={require("../../../public/images/Right Button.svg")}
          className="w-[20px] h-[20px] cursor-pointer"
          color={openFilter && "green"}
          onClick={() => setOpenFilter(!openFilter)}
        />
        {openFilter && (
          <div className="absolute">
            <div
              className="fixed left-0 right-0 bottom-0 top-0 opacity-80 z-50"
              onClick={() => setOpenFilter(false)}
            ></div>
            <div
              onClick={""}
              className="absolute w-[200px] transform translate-x-[140px] translate-y-4 bg-[#1F222A] text-white rounded-2xl z-50 p-4 outline outline-[#35383F] flex flex-col gap-2"
            >
              <p>Newest</p>
              <p>Oldest</p>
            </div>
          </div>
        )}
      </div>

      {applications && (
        <>
          {applications.map((app, index) => (
            <div
              className="rounded-lg flex items-center bg-[#1f222a] p-4 border border-[#35383f] my-2"
              key={index}
            >
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
          ))}
        </>
      )}

      {/* Candidate Application Profile Card */}
      <div className="p-3 rounded-lg bg-[#1F222A]">
        <div className="flex gap-2">
          <Image
            src={require("../../../public/images/woman.svg")}
            className="rounded-md w-[100px] h-[100px]"
          />
          <div className="flex w-full justify-between">
            <div>
              <div className="flex gap-2 text-xs p-1 bg-gray-800 rounded-md">
                <div className="flex text-[#2897FF]">
                  <p>Unread</p>
                </div>
              </div>
              <p className="text-[#D4D6DD] mt-2">John Brunos</p>
              <p className="font-extrabold text-xl mt-1">UI/UX Designer</p>
            </div>
            <div>
              <BsBookmarkDash size={22} />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-light mt-2 text-sm">
          <p>Received: 15 min ago</p>
          <p className="flex items-center gap-1 text-[#2897FF] underline">
            View Profile{" "}
            <span>
              <FaChevronRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateMyApplication;

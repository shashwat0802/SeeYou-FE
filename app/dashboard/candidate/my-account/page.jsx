"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Skills from "../../../components/postjob/description/Skills";
import { UploadPresentation } from "../../../components/complete-profile/recruiter/AboutCompany";

export default function CandidateMyAccount() {
  const [showContact, setShowContact] = useState(false);
  const [showAboutMyself, setShowAboutMyself] = useState(false);
  const [showMyExp, setShowMyExp] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-[100vh] p-3">
      <div className="mt-2 mb-4">
        <p className="text-xl font-extrabold ml-1 mt-2">My Account</p>
        <div className="flex flex-col gap-2 justify-center items-center pt-3">
          <div>
            <Image
              src={require("../../../../public/images/Avatar.svg")}
              className="w-[135px] h-[135px]"
            />
            <Image
              src={require("../../../../public/images/edit.svg")}
              className="absolute translate-x-[90px] -translate-y-[25px] cursor-pointer"
            />
          </div>
          <p>Ciprian Lopata</p>
        </div>
      </div>

      <hr className="border border-[#35383F]" />

      <div className="m-2">
        <div className="pt-5">
          <p className="text-sm pb-2 font-bold">First Name</p>
          <input
            className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
            type="text"
            placeholder="Ciprian"
          />
          <Image
            src={require("../../../../public/images/Icon.svg")}
            className="absolute right-8 -translate-y-9 w-6 h-6"
          />
        </div>

        <div className="pt-5 mb-5">
          <p className="text-sm pb-2 font-bold">Last Name</p>
          <input
            className="h-[48px] p-2 w-full rounded-xl bg-inherit outline outline-[#C5C6CC]"
            type="text"
            placeholder="Lopata"
          />
          <Image
            src={require("../../../../public/images/Icon.svg")}
            className="absolute right-8 -translate-y-9 w-6 h-6"
          />
        </div>

        <div>
          <div
            onClick={() => setShowContact(!showContact)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-2 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image src={require("../../../../public/images/faa.svg")} />
                <div>
                  <p>Contact Info</p>
                  <p className="text-[#71727A] text-xs">Personal Information</p>
                </div>
              </div>
            </div>
            {showContact ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showContact && (
            <div>
              <div className="my-3">
                <input
                  className="h-[48px] p-2 w-full text-sm rounded-xl bg-inherit outline outline-[#C5C6CC]"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="my-3">
                <input
                  className="h-[48px] p-2 w-full text-sm rounded-xl bg-inherit outline outline-[#C5C6CC]"
                  type="text"
                  placeholder="Number"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setShowAboutMyself(!showAboutMyself)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-3 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src={require("../../../../public/images/about-me.svg")}
                />
                <div>
                  <p>About Myself</p>
                  <p className="text-[#71727A] text-xs">
                    (Maximum 160 characters)
                  </p>
                </div>
              </div>
            </div>
            {showAboutMyself ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showAboutMyself && (
            <div>
              <div className="my-3">
                <input
                  className="h-[48px] p-2 w-full text-sm rounded-xl bg-inherit outline outline-[#C5C6CC]"
                  type="text"
                  placeholder="About Myself"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setShowMyExp(!showMyExp)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-3 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image src={require("../../../../public/images/my-exp.svg")} />
                <div>
                  <p>My Experiences</p>
                  <p className="text-[#71727A] text-xs">
                    (Maximum 10,000 characters)
                  </p>
                </div>
              </div>
            </div>
            {showMyExp ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showMyExp && (
            <div>
              <div className="my-3">
                <input
                  className="h-[48px] p-2 w-full text-sm rounded-xl bg-inherit outline outline-[#C5C6CC]"
                  type="text"
                  placeholder="My Experiences"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-3 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src={require("../../../../public/images/my-skills.svg")}
                />
                <div>
                  <p>My Skills</p>
                  <p className="text-[#71727A] text-xs">
                    (Maximum 1000 characters)
                  </p>
                </div>
              </div>
            </div>
            {showSkills ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showSkills && (
            <div className="pt-3">
              <Skills />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setShowResume(!showResume)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-3 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src={require("../../../../public/images/upload-resume.svg")}
                />
                <div>
                  <p>Uploaded CV/Resume</p>
                  <p className="text-[#71727A] text-xs">Maximum 10MB size</p>
                </div>
              </div>
            </div>
            {showResume ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showResume && (
            <div>
              <div className="my-3">
                <UploadPresentation />
              </div>
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => setShowVideo(!showVideo)}
            className="flex gap-3 items-center justify-between bg-[#1F222A] p-3 mt-3 outline outline-[#35383F] rounded-2xl cursor-pointer"
          >
            <div>
              <div className="flex gap-2 items-center">
                <Image src={require("../../../../public/images/my-exp.svg")} />
                <div>
                  <p>Uploaded Profile Video</p>
                  <p className="text-[#71727A] text-xs">1-3 minutes</p>
                </div>
              </div>
            </div>
            {showVideo ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {showVideo && (
            <div>
              <div className="my-3">
                <div>
                  <div className="flex gap-3 items-center my-2">
                    <Image
                      src={require("../../../../public/images/Play.svg")}
                    />
                    <p className="text-lg font-[900]">Uploaded Company Video</p>
                  </div>
                  <div className="my-4">
                    <p className="underline">See Demo & Tips</p>
                    <div>{/* missing */}</div>
                    <p className="text-sm text-[#C5C6CC] text-center">OR</p>
                    <div className="bg-[#1F222A] h-[80px] my-3 rounded-2xl outline outline-[#35383F] flex gap-3 items-center justify-between px-3">
                      <div>
                        <p className="text-lg">Shoot using Camera</p>
                        <p className="text-[#C5C6CC]">
                          Capture realtime video of your video
                        </p>
                      </div>
                      <Image
                        className="w-4 h-4"
                        src={require("../../../../public/images/Camera.svg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 my-4 pt-4">
          <button className="bg-inherit text-white text-[14px] outline outline-white font-semibold px-4 py-3 w-full rounded-lg">
            Cancel
          </button>
          <button className="bg-white text-[14px] font-semibold text-black px-4 py-3 w-full rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

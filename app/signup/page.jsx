'use client';
import Image from 'next/image';
import logoPath from '@/public/images/logo.svg';
import { FaBriefcase, FaChevronLeft, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [type, setType] = useState();
  const router = useRouter();
  return (
    <div className="container mx-auto text-center grid place-items-center p-4 ">
      <p className="text-lg place-self-start mb-6">
        <button
          className="mr-3 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          <FaChevronLeft />
        </button>{' '}
        Signup
      </p>
      <Image src={logoPath} height={90} width={90} alt="" />
      <p className="break-words font-black text-2xl my-3">
        Choose who you are?
      </p>
      <p className="break-words text-base my-3">Take 30 seconds to register</p>
      <div className="grid grid-cols-2 gap-4 my-4">
        <button
          className="focus:border focus:border-white bg-[#1F222A] grid place-items-center rounded-[30px] p-6 cursor-pointer"
          onClick={() => {
            setType('candidate');
          }}
        >
          <div className="bg-white-20 rounded-[32px] flex items-center justify-center mb-4 h-20 w-20 text-3xl">
            <FaBriefcase />
          </div>
          <p className="break-words font-black text-lg my-4">Candidate</p>
          <p className="break-words text-sm">I want to find a job for me</p>
        </button>
        <button
          className="focus:border focus:border-white bg-[#1F222A] grid place-items-center rounded-[30px] p-6 cursor-pointer"
          onClick={() => {
            setType('recruiter');
          }}
        >
          <div className="bg-white-20 rounded-[32px] flex items-center justify-center mb-4 h-20 w-20 text-3xl">
            <FaUser />
          </div>
          <p className="break-words font-black text-lg my-4">
            Employer/{'\n'}Recruiter
          </p>
          <p className="break-words text-sm">I want to hire employees.</p>
        </button>
      </div>
      <button
        onClick={() => {
          router.push(`/signup/${type}`);
        }}
        className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4 max-w-xs"
      >
        Continue
      </button>
    </div>
  );
};

export default SignUpPage;

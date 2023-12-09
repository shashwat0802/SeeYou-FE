'use client';
import Image from 'next/image';
import logoPath from '@/public/images/logo.svg';
import Input from './Input';
import PasswordInput from './PasswordInput';
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
const Registration = ({ type }) => {
  const [phone, setPhone] = useState();
  return (
    <div className="container mx-auto text-center grid place-items-center p-4">
      <Image src={logoPath} height={90} width={90} alt="" />
      <p className="break-words font-black text-2xl my-3">Register as {type}</p>
      <p className="text-sm text-[#FF616D]">*Marked fields are mandatory</p>
      <form action="" className="border-b border-b-[#D4D6DD] pb-4">
        <Input
          required={true}
          left={100}
          placeholder="First Name"
          id="FirstName"
          type="text"
        />
        <Input
          required={true}
          left={100}
          placeholder="Last Name"
          id="LastName"
          type="text"
        />
        <Input
          required={true}
          left={200}
          placeholder={
            type === 'recruiter'
              ? 'Corporate Email Address'
              : 'Personal Email Address'
          }
          id="Email"
          type="email"
        />

        <PhoneInput
          country={'in'}
          className={'group  w-72 md:w-80 lg:w-96'}
          inputProps={{
            name: 'Mobile',
            required: true,
            autoFocus: true,
            id: 'Mobile',
            className:
              'peer relative h-10 w-full rounded-md bg-transparent border-[#C5C6CC] border pl-14 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white font-bold mt-5 mb-0',
            placeholder: 'Mobile Number',
          }}
        />

        <PasswordInput
          required={true}
          left={90}
          placeholder="Password"
          id="Password"
        />
        <button
          type="submit"
          className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-3"
        >
          Sign Up
        </button>
      </form>
      <p className="text-[#C5C6CC] text-xs text-center my-3">
        Or continue with
      </p>
      <ul className="grid grid-cols-3 gap-4">
        <li>
          <button className="rounded-full bg-[#ED3241] text-white w-10 h-10 flex justify-center items-center">
            <FaGoogle />
          </button>
        </li>
        <li>
          <button className="rounded-full bg-[#34373F] text-white w-10 h-10 flex justify-center items-center">
            <FaApple />
          </button>
        </li>
        <li>
          <button className="rounded-full bg-[#006FFD] text-white w-10 h-10 flex justify-center items-center">
            <FaFacebookF />
          </button>
        </li>
      </ul>
      <div className="text-center mt-4">
        <span className="text-[#71727A] font-bold text-xs">
          Already have an account?{' '}
          <Link href={'/signup'} className="text-white text-sm">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;

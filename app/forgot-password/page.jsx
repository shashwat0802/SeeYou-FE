'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import Input from '../components/Input';
import { customFetch } from '@/utils/fetchHelper';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import PasswordInput from '../components/PasswordInput';
import Image from 'next/image';
import starPath from '@/public/images/star.svg';

const ForgotPassword = () => {
  const router = useRouter();
  const [isTab, setIsTab] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = e.currentTarget.email.value;
    setEmail(emailValue);
    try {
      const response = await customFetch('/users/forgotpassword', {
        method: 'POST',
        body: JSON.stringify({
          Email: emailValue,
        }),
      });
      console.log(response);
      setIsTab('otp');
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await customFetch('/users/verifyresetotp', {
        method: 'POST',
        body: JSON.stringify({
          Email: email,
          OTP: otp,
        }),
      });
      console.log(response);
      setIsTab('password');
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await customFetch('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col justify-between items-center h-full">
        {isTab === 'email' && (
          <form action="" className="mt-6" onSubmit={handleSubmit}>
            <p className="text-lg">
              <button
                className="mr-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
              >
                <FaChevronLeft />
              </button>{' '}
              Forgot Password
            </p>
            <p className="text-2xl font-black mt-6">Forgot Password?</p>
            <p className="text-base my-3">
              Don’t worry! It happens. Please enter the email associated with
              your account.
            </p>
            <Input
              type="email"
              label="Enter registered Email"
              id="email"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4"
            >
              Send Code
            </button>
          </form>
        )}
        {isTab === 'otp' && (
          <form action="" onSubmit={handleVerify} className="mt-6">
            <p className="text-lg">
              <button
                className="mr-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsTab('email');
                }}
              >
                <FaChevronLeft />
              </button>{' '}
              Forgot Password
            </p>
            <p className="text-2xl font-black mt-6">Please check your email</p>
            <p className="text-base my-3">We’ve sent a code to {email}</p>
            <OtpInput
              containerStyle="mt-8 justify-between"
              inputStyle="border-[#35383F] focus:border-white bg-transparent rounded-lg border focus:outline-none text-red !w-14 h-14 md:mx-2"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
              inputType="tel"
            />
            <button
              type="submit"
              className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4"
            >
              Verify
            </button>
          </form>
        )}
        {isTab === 'password' && (
          <form action="" onSubmit={handlePassword} className="mt-6">
            <p className="text-lg">
              <button
                className="mr-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsTab('email');
                }}
              >
                <FaChevronLeft />
              </button>{' '}
              Forgot Password
            </p>
            <p className="text-2xl font-black mt-6">Please check your email</p>
            <p className="text-base my-3">We’ve sent a code to {email}</p>
            <div className="my-3">
              <PasswordInput
                label="New Password"
                id="new-pass"
                placeholder="Must be min 8 characters "
              />
            </div>
            <PasswordInput
              label="Confirm New Password"
              id="confirm-pass"
              placeholder="Repeat password "
            />
            <button
              type="submit"
              className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4"
            >
              Continue
            </button>
          </form>
        )}
        {isTab === 'success' && (
          <div className="grid h-screen place-items-center text-center">
            <div className="flex flex-col items-center">
              <Image src={starPath} height={90} width={90} alt="" />
              <p className="text-2xl font-black mt-6">Password Changed!</p>
              <p className="text-base my-3">
                Your password has been changed succesfully
              </p>
              <button
                onClick={() => {
                  router.push('/signin');
                }}
                className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4"
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
        <span className="text-[#71727A] font-bold text-xs my-4">
          Remember password?{' '}
          <Link href={'/signin'} className="text-white text-sm">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;

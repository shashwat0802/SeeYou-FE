'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import Input from '../components/Input';

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col justify-between items-center h-full">
        <form action="" className="mt-6">
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
            Don’t worry! It happens. Please enter the email associated with your
            account.
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

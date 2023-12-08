'use client';
import Image from 'next/image';
import logoPath from '@/public/images/logo.svg';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import { customFetch } from '@/utils/fetchHelper';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    try {
      const response = await customFetch('/users/login', {
        method: 'POST',
        body: JSON.stringify(formJson),
      });
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      // call toast
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid place-items-center h-screen">
        <div className="grid place-items-center">
          <Image src={logoPath} height={90} width={90} alt="" />
          <p className="font-black text-2xl my-3">Welcome!</p>
          <form
            action=""
            className="border-b border-b-[#D4D6DD] pb-4"
            onSubmit={handleSubmit}
          >
            <Input type="email" id="Email" placeholder="Email Address" />
            <PasswordInput
              type="password"
              id="Password"
              placeholder="Password"
            />
            <Link
              href={'/forgot-password'}
              className="text-white font-bold text-xs"
            >
              Forgot password?
            </Link>

            <button
              type="submit"
              className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-3"
            >
              Sign In
            </button>
            <div className="text-center">
              <span className="text-[#71727A] font-bold text-xs">
                Not a member?{' '}
                <Link href={'/forgot-password'} className="text-white text-sm">
                  Register now
                </Link>
              </span>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;

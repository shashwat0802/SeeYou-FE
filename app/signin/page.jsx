'use client';
import Image from 'next/image';
import logoPath from '@/public/images/logo.svg';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import Link from 'next/link';
import { customFetch } from '@/utils/fetchHelper';
import { useRouter } from 'next/navigation';
import SocialLogins from '../components/SocialLogins';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

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
      if (response) {
        const { token, role } = response;
        setCookie('jwt', token);
        setCookie('role', role);
      } else {
        throw new Error('failed to login');
      }
      toast.success('Sucess');
      router.push(`/dashboard/${response.role}`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const setCookie = (name, data) => {
    // If data is a string, don't stringify it
    const value = typeof data === 'string' ? data : JSON.stringify(data);
    Cookies.set(name, value, { expires: 1 });
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
            <Input
              type="email"
              id="Email"
              placeholder="Email Address"
              required={true}
              left={120}
            />
            <PasswordInput
              type="password"
              id="Password"
              placeholder="Password"
              required={true}
              left={90}
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
                <Link href={'/signup'} className="text-white text-sm">
                  Register now
                </Link>
              </span>
            </div>
          </form>
          {/* <SocialLogins /> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

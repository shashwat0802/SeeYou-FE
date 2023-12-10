'use client';
import { FaApple, FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
const SocialLogins = () => {
  return (
    <div>
      <p className="text-[#C5C6CC] text-xs text-center my-3">
        Or continue with
      </p>
      <ul className="grid grid-cols-4 gap-4">
        <li>
          <button className="rounded-full bg-[#006FFD] text-white w-10 h-10 flex justify-center items-center">
            <FaLinkedinIn />
          </button>
        </li>
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
  );
};

export default SocialLogins;

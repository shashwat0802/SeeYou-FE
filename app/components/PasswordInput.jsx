'use client';
import { useState } from 'react';
import { BiSolidHide } from 'react-icons/bi';

const PasswordInput = ({ id, placeholder, label }) => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const handleToggle = (e) => {
    if (type === 'password') {
      setType('text');
      e.target.className.add = '';
    } else {
      setType('password');
    }
  };
  return (
    <div className="group w-72 md:w-80 lg:w-96">
      <label
        htmlFor={id}
        className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          type={type}
          name={id}
          placeholder={placeholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer relative h-10 w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white"
        />
        <span
          className={`absolute right-4 rounded-md transition-all duration-200 ease-in-out cursor-pointer ${
            type === 'text' ? 'text-white' : ' text-[#8F9098]'
          }`}
          onClick={handleToggle}
        >
          <BiSolidHide />
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;

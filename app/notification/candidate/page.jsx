'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import emptyLogo from '@/public/images/empty.svg';

const CandidateNotification = () => {
  let [isActive, setIsActive] = useState(true);
  let [content, setContent] = useState([]);
  return (
    <div className="p-4">
      <div className="bg-[#1F222A] rounded-lg flex items-center">
        <div
          className={`flex items-center justify-center text-center w-1/2 p-2 rounded-lg ${
            isActive
              ? 'text-white bg-[#34373F]'
              : 'bg-transparent text-[#71727A]'
          }`}
          onClick={() => {
            setIsActive(true);
          }}
        >
          General
        </div>
        <div
          className={`flex items-center justify-center text-center w-1/2 p-2 rounded-lg ${
            !isActive
              ? 'text-white bg-[#34373F]'
              : 'bg-transparent text-[#71727A]'
          }`}
          onClick={() => {
            setIsActive(false);
          }}
        >
          Application
        </div>
      </div>
      {content.length === 0 && (
        <div className="my-12">
          <Image width={350} height={250} src={emptyLogo} />
          <h1 className="text-center text-2xl font-black">Empty</h1>
          <p className="text-center my-2">
            You don’t have any notifications at this time
          </p>
        </div>
      )}
    </div>
  );
};

export default CandidateNotification;

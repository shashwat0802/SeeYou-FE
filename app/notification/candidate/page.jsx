'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import emptyLogo from '@/public/images/empty.svg';
import { FaExclamationCircle } from 'react-icons/fa';

const CandidateNotification = () => {
  let [isActive, setIsActive] = useState(true);
  let [content, setContent] = useState([{}]);
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
      {/* notification  general*/}
      {isActive && content.length !== 0 && (
        <div>
          <div className="flex justify-end my-4">
            <button className="text-xs">Clear all</button>
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <p className="text-xs">18:35 PM</p>
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <p className="text-xs">18:35 PM</p>
          </div>
          <div className="flex justify-between p-2  border-b border-[#35383F] items-center">
            <div className="text-xl self-start mr-2 mt-1 text-blue-500">
              <FaExclamationCircle />
            </div>
            <div>
              <p className="text-lg">Security Updates!!</p>
              <p className="text-sm my-2">
                Now SeeYou has a 2 factor authentication. More secure.
              </p>
            </div>
            <p className="text-xs">18:35 PM</p>
          </div>
        </div>
      )}
      {!isActive && content.length !== 0 && (
        <div>
          <div className="flex justify-end my-4">
            <button className="text-xs">Clear all</button>
          </div>
          <div></div>
        </div>
      )}
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

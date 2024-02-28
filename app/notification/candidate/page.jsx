'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import emptyLogo from '@/public/images/empty.svg';
import { FaExclamationCircle } from 'react-icons/fa';
import newLogo from '@/public/images/new-logo.svg';
import Notification from '../../components/Notification';

const CandidateNotification = () => {
  return (
    <>
      <Notification role={'candidate'} />
    </>
  );
};

export default CandidateNotification;

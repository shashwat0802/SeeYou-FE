'use client';
import ProtectedRoute from '@/app/components/protectedRoute';
import React from 'react';

const CandidateDashboard = () => {
  return <div>CandidateDashboard</div>;
};

export default ProtectedRoute(CandidateDashboard, 'candidate');

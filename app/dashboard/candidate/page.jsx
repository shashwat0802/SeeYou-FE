'use client';
import ProtectedRoute from '@/app/components/protectedRoute';
import React from 'react';

const CandidateDashboard = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default ProtectedRoute(CandidateDashboard, 'candidate');

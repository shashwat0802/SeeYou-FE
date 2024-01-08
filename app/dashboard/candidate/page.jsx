'use client';
import ProtectedRoute from '@/app/components/protectedRoute';
import React from 'react';

const CandidateDashboard = () => {
  return (
    <div>
      <input type="search" id="site-search" name="q" />
    </div>
  );
};

export default ProtectedRoute(CandidateDashboard, 'candidate');

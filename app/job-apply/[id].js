'use client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ApplyJobPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log('Job application ID:', id);
  }, [id]);

  return (
    <div>
      <h1>Job Application</h1>
      <p>Applying for job ID: {id}</p>
    </div>
  );
};

export default ApplyJobPage;

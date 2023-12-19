'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { customFetch } from '@/utils/fetchHelper';

const ProtectedRoute = (WrappedComponent, role) => {
  return ({ props }) => {
    const router = useRouter();
    const verifyAccess = async () => {
      try {
        let response = await customFetch('/users/me', {
          method: 'GET',
        });
        if (response && role) {
          if (response.Role !== role) {
            router.push(
              role === 'candidate'
                ? '/dashboard/candidate'
                : '/dashboard/recruiter'
            );
          }
        } else {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        toast.error('Session Expired, Log In again to continue');
        router.push('/signin');
      }
    };

    useEffect(() => {
      verifyAccess();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;

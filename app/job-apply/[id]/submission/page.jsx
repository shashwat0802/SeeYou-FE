'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { customFetch } from '@/utils/fetchHelper';
import { toast } from 'react-toastify';
import { FaChevronLeft } from 'react-icons/fa';
import SubmissionVideo from '@/app/components/SubmissionVideo';

const JobSubmission = ({params}) => {
  const router = useRouter();
  const [profileVideo, setProfileVideo] = useState();

  const clickHandler = async () => {
    const formData = new FormData();
    formData.append('Video', profileVideo);
    customFetch(
      `/applications/apply/${params.id}`,
      {
        method: 'POST',
        body: formData,
      },
      false
    )
      .then((res) => {
        toast.success('Success!');
        router.push('/dashboard/candidate');
      })
      .catch((err) => {
        toast.error('Failed to Complete Profile, please try again later');
      });
  };

  return (
    <div className="p-4">
      <div className="sticky top-0 bg-primary z-10 pt-4">
        <p className="text-lg">
          <button
            className="mr-3 cursor-pointer place-self-start"
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <FaChevronLeft />
          </button>
          {/* Let type be here so that progress bar can be used at multiple pages */}
          <span className="capitalize">Apply for Job</span>
        </p>

        <div className="w-full bg-[#34373F] rounded-full h-2.5">
          <div
            className="bg-white h-2.5 rounded-full my-2"
            style={{ width: profileVideo ? '100%' : '80%' }}
          ></div>
        </div>
        {/* upload */}
        <p className="text-xl font-black mt-4">
          Upload your Video from device
          <span className="text-[#FF616D]"> *</span>
          <br />
        </p>
        <span className="text-sm ">(Max 10 MB)</span>
        <SubmissionVideo profileVideo={profileVideo} setProfileVideo={setProfileVideo} />
        <button className="px-4 py-3 bg-white-light rounded-xl text-sm font-bold w-full text-primary disabled:brightness-50 my-4" disabled={profileVideo ? false : true} onClick={() => clickHandler()}>Continue</button>
      </div>
    </div>
  );
};

export default JobSubmission;

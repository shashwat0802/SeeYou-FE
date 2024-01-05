'use client';
import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import Webcam from 'react-webcam';
import { TbCapture } from 'react-icons/tb';
import { FaCamera, FaPlus } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import Link from 'next/link';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error('Image must smaller than 10MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UploadVideo = () => {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const [isWebCamActive, setWebCamActive] = useState(false);

  const handleChange = (info) => {
    setLoading(true);

    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setVideoUrl(url);
    });
  };

  const videoConstraints = {
    // facingMode: 'user',
    facingMode: { exact: 'environment' },
  };

  const uploadButton = (
    <div>
      {loading ? (
        <BiLoaderCircle />
      ) : (
        <button className="text-white flex flex-col justify-center items-center w-full py-4 h-full bg-[#1F222A]">
          <div className="text-3xl my-4">
            <FaPlus />
          </div>
          <p>
            Upload your photo from device
            <span className="text-[#FF616D]"> *</span>
            <br />
            (Max 10 MB)
          </p>
        </button>
      )}
    </div>
  );

  return (
    <div>
      <p className="break-words font-black text-2xl mt-6">
        Upload your Profile Video <span className="text-[#FF616D]">*</span>
      </p>
      <p className="text-sm text-[#FF616D] my-2">
        *Marked fields are mandatory
      </p>
      <Link href="#" className="text-white text-base underline">
        Watch Demo & Tips
      </Link>
      <Upload.Dragger
        className="my-4"
        name="avatar"
        listType="picture-card"
        maxCount={1}
        multiple={false}
        showUploadList={false}
        action=""
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {videoUrl ? (
          <img
            src={videoUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload.Dragger>
      <p className="text-center text-[#C5C6CC] my-4">OR</p>
      <button
        className="flex items-center justify-between p-4 bg-[#1F222A] w-full rounded-lg border border-[#35383F] my-4"
        onClick={() => {
          setWebCamActive(!isWebCamActive);
        }}
      >
        {/* {isWebCamActive ? 'close' : 'activate'} */}
        <div className="text-left">
          <p className="text-white text-lg">
            {isWebCamActive ? 'Close Camera' : 'Use your Camera'}
          </p>
          <p className=" text-[#C5C6CC]">Capture realtime photo of yourself</p>
        </div>
        <div>
          <FaCamera />
        </div>
      </button>
      {isWebCamActive && (
        <Webcam videoConstraints={videoConstraints}>
          {({ getScreenshot }) => (
            <div className="flex justify-center my-4">
              <div className="border border-white flex items-center justify-center rounded-full p-4 border-dashed">
                <button
                  className="text-4xl text-red-400"
                  onClick={() => {
                    const imageSrc = getScreenshot();
                    setVideoUrl(imageSrc);
                  }}
                >
                  <TbCapture />
                </button>
              </div>
            </div>
          )}
        </Webcam>
      )}
    </div>
  );
};

export default UploadVideo;

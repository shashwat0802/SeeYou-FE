'use client';

import Input from '@/app/components/Input';
import ProgressBar from '@/app/components/ProgressBar';
import { Modal, Select, Space } from 'antd';
import { useState } from 'react';
import { message, Upload } from 'antd';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import Webcam from 'react-webcam';

const { Dragger } = Upload;

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

const CompleteProfileCandidate = () => {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isWebCamActive, setWebCamActive] = useState(false);

  const handleChange = (info) => {
    setLoading(true);

    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
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

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div>
      <ProgressBar
        step={step}
        setStep={setStep}
        totalSteps={5}
        type="candidate"
      />
      <form action="">
        {/* step 1 */}
        <div className={step === 1 ? 'block' : 'hidden'}>
          <p className="break-words font-black text-2xl mt-6">
            Complete your Profile
          </p>
          <p className="text-sm text-[#FF616D] my-2">
            *Marked fields are mandatory
          </p>

          <Input
            label="About Myself"
            id="AboutMyself"
            required={true}
            placeholder="Introduce yourself in maximum 160 characters"
          />
          <label
            htmlFor="About My Experience"
            className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mt-4 text-white my-2"
          >
            About My Experience
            <span className="text-[#FF616D]">*</span>
          </label>
          <textarea
            name=""
            id="AboutExperience"
            cols="30"
            rows="5"
            placeholder="Maximum 2000 characters"
            className="peer relative w-full rounded-md bg-transparent border-[#C5C6CC] border pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg placeholder:text-[#8F9098] placeholder:text-white rounded-xl py-6 focus:border-white font-bold placeholder:text-sm"
          ></textarea>
          <label
            htmlFor="About My Experience"
            className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mt-4 text-white my-2"
          >
            My Skills
            <span className="text-[#FF616D]">*</span>
          </label>
          <Select
            mode="multiple"
            style={{
              width: '100%',
            }}
            placeholder="Search and add “skills”"
            onChange={() => {}}
            optionLabelProp="label"
            options={options}
            optionRender={(option) => (
              <Space>
                <span role="img" aria-label={option.data.label}>
                  {option.data.emoji}
                </span>
                {option.data.desc}
              </Space>
            )}
          />
          <p className="text-[#8F9098] text-[10px] my-2">
            Add maximum 50 skills with 100 characters tag limit
          </p>
          <label
            htmlFor="About My Experience"
            className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mt-4 text-white my-2"
          >
            Add Resume{' '}
            <span className="text-[#3AC0A0]">(optional but recommended)</span>
          </label>
          <Dragger {...props} className="border-white !my-4">
            <p className="ant-upload-text !text-white flex items-center justify-center">
              <span className="text-2xl mx-2">
                <MdOutlineDriveFolderUpload />
              </span>
              Upload CV/Resume
            </p>
            <p className="ant-upload-hint !text-white">
              Upload files in PDF format up to 10 MB.
            </p>
          </Dragger>
          <div className="my-4"></div>
          <Input
            label="My Personal Website/Portfolio"
            id="AboutMyself"
            placeholder="Portfolio/Resume Website Link URL"
          />
        </div>
        {/* step 2 */}
        <div className={step == 2 ? 'block' : 'hidden'}>
          <p className="break-words font-black text-2xl mt-6">
            Complete your Profile
          </p>
          <p className="text-sm text-[#FF616D] my-2">
            *Marked fields are mandatory
          </p>
          <Upload.Dragger
            name="avatar"
            listType="picture-card"
            maxCount={1}
            multiple={false}
            showUploadList={false}
            action=""
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload.Dragger>
          <p>OR</p>
          <button
            className=""
            onClick={() => {
              setWebCamActive(!isWebCamActive);
            }}
          >
            {isWebCamActive ? 'close' : 'activate'}
          </button>
          {isWebCamActive && (
            <Webcam screenshotFormat="image/jpeg">
              {({ getScreenshot }) => (
                <button
                  onClick={() => {
                    const imageSrc = getScreenshot();
                    setImageUrl(imageSrc);
                  }}
                >
                  Capture photo
                </button>
              )}
            </Webcam>
          )}
        </div>
      </form>
      <button
        onClick={() => {
          setStep(step + 1);
        }}
        className="py-4 rounded-md block w-full font-bold bg-white text-black text-center text-sm my-4"
      >
        Continue
      </button>
    </div>
  );
};

export default CompleteProfileCandidate;

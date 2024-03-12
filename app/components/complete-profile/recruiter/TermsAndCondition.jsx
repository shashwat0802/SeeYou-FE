import React, { useState } from 'react';
import Button from '../../postjob/Button';
import { useProfileData } from '../../../complete-profile/recruiter/CompleteRecruiterProfileContext';
import { customFetch } from '@/utils/fetchHelper';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const AllTerms = ({ check, setCheck }) => {
  return (
    <div className="">
      <h1 className=" text-2xl font-black leading-8 tracking-wide -mt-4 pb-2">
        Terms & Conditions
      </h1>
      <p>
        SeeYou is a job search platform that connects companies with candidates.
        By using SeeYou, you agree to the following terms and conditions:
      </p>
      <ol className="list-inside text-white-medium">
        <li>
          1. Eligibility
          <ol className=" list-disc list-item ml-5 ">
            <li>
              To use SeeYou, you must be at least 18 years old and have the
              legal capacity to enter into a contract.
            </li>
          </ol>
        </li>
        <li>
          2. Use of SeeYou
          <p>
            You may use SeeYou to search for jobs, post jobs, and communicate
            with other users. You agree to use SeeYou in a way that is
            consistent with all applicable laws and regulations.
          </p>
        </li>
        <li>
          3. Prohibited Content and Activities
          <p>
            You agree not to post or transmit any content or engage in any
            activities that:
          </p>
          <ol className=" list-disc list-item ml-14 ">
            <li>
              Are illegal, harmful, threatening, abusive, harassing, tortious,
              defamatory, vulgar, obscene, or racially, ethnically, or otherwise
              objectionable.
            </li>
            <li>Infringe on the intellectual property rights of others.</li>
            <li>Contain viruses or other malicious code.</li>
            <li>Are spam or unsolicited commercial communications.</li>
            <li>Impersonate another person or entity.</li>
            <li>
              Interfere with the operation of SeeYou or disrupt the use of
              SeeYou by others.
            </li>
          </ol>
        </li>
        <li>
          4. Privacy and Data Protection
          <p>
            SeeYou collects and uses your personal information in accordance
            with its Privacy Policy. By using SeeYou, you agree to the
            collection and use of your personal information in accordance with
            the Privacy Policy.
          </p>
        </li>
        <li>
          5. Disclaimers
          <p>
            SeeYou makes no representations or warranties about the accuracy,
            completeness, or timeliness of any information on SeeYou. SeeYou
            does not endorse any opinions or views expressed by users on SeeYou.
          </p>
        </li>
        <li>
          6. Limitation of Liability
          <p>
            To the fullest extent permitted by law, SeeYou shall not be liable
            for any direct, indirect, incidental, special, or consequential
            damages arising out of or in connection with your use of SeeYou.
          </p>
        </li>
        <li>
          7. Termination
          <p>
            SeeYou may terminate your account and access to SeeYou at any time
            without notice or reason.
          </p>
        </li>
        <li>
          8. Governing Law
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of the State of California, without regard
            to its conflict of law provisions.
          </p>
        </li>
        <li>
          9. Entire Agreement
          <p>
            These terms and conditions constitute the entire agreement between
            you and SeeYou and supersede all prior agreements, representations,
            and understandings between the parties, whether written or oral.
          </p>
        </li>
        <li>
          10. Severability
          <p>
            If any provision of these terms and conditions is held to be invalid
            or unenforceable, such provision shall be struck from these terms
            and conditions and the remaining provisions shall remain in full
            force and effect.
          </p>
        </li>
        <li>
          11. Waiver
          <p>
            No waiver of any provision of these terms and conditions shall be
            effective unless in writing and signed by both parties.
          </p>
        </li>
        <li>
          12. Notices
          <p>
            All notices and other communications under these terms and
            conditions shall be in writing and shall be deemed to have been duly
            given when delivered in person, upon the first business day
            following deposit in the United States mail, postage prepaid,
            certified or registered, return receipt requested, addressed as
            follows:
          </p>
          <ol className=" list-disc list-item ml-6 ">
            <li>
              If to SeeYou: SeeYou, Inc. 123 Main Street Anytown, CA 91234
            </li>
            <li>If to you: [Your Name] [Your Address]</li>
            <li>
              or to such other address as either party may designate in writing
              from time to time..
            </li>
          </ol>
        </li>
        <li>
          13. Headings
          <ol className=" list-disc list-item ml-6 ">
            <li>
              The headings in these terms and conditions are for convenience
              only and shall not affect their interpretation.
            </li>
          </ol>
        </li>
        <li>
          14. Counterparts
          <ol className=" list-disc list-item ml-6 ">
            <li>
              These terms and conditions may be executed in one or more
              counterparts, each of which shall be deemed an original, but all
              of which together shall constitute one and the same instrument.
            </li>
            <li>
              By using SeeYou, you agree to be bound by these terms and
              conditions. If you do not agree to these terms and conditions,
              please do not use SeeYou.
            </li>
          </ol>
        </li>
      </ol>
      <section className="flex items-center space-x-3 pb-2 mt-6 ml-1">
        <label htmlFor="terms">
          <input
            id="terms"
            type="checkbox"
            checked={check}
            className=" sr-only peer"
            onChange={() => setCheck((prev) => !prev)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4 p-0.5 text-primary box-content border-2 border-white-medium rounded-md peer-checked:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </label>
        <p className="text-white-light">
          I agree to all SeeYou’s <b>Terms & Condition*</b>{' '}
        </p>
      </section>
    </div>
  );
};

const TermsAndCondition = () => {
  const [check, setCheck] = useState(false);
  const { state, dispatch } = useProfileData();
  const router = useRouter();

  const clickHandler = async () => {
    console.log(state)
    const formData = new FormData();
    formData.append('CompanyName', state.companyInfo.companyName);
    formData.append('RegNumber', state.companyInfo.registrationNumber);
    formData.append('VATNumber', state.companyInfo.vat);
    formData.append('Industry', state.companyInfo.industry);
    formData.append('Employee', state.companyInfo.numberOfEmployees);
    formData.append('City', state.companyInfo.city);
    formData.append('State', state.companyInfo.state);
    formData.append('Country', state.companyInfo.country);
    formData.append('Website', state.aboutCompany.websiteurl);
    formData.append('Description', state.aboutCompany.about);

    if (state.logo instanceof File) {
      formData.append('Photo', state.logo);
    }
    state.companyBrands.forEach((file) => {
      formData.append('Brands', file);
    });
    if (state.companyVideo instanceof File) {
      formData.append('Video', state.companyVideo);
    }

    customFetch(
      `/companies/register`,
      {
        method: 'POST',
        body: formData,
      },
      false
    )
      .then((res) => {
        toast.success('Success!');
        router.push('/dashboard/recruiter');
      })
      .catch((err) => {
        toast.error('Failed to Complete Profile, please try again later');
      });
  };

  return (
    <>
      <AllTerms check={check} setCheck={setCheck} />
      <Button isDisabled={() => !check} clickHandler={clickHandler} />
    </>
  );
};

export default TermsAndCondition;

import React from 'react'
import { useProfileData } from '../../../complete-profile/candidate/CompleteCandidateProfileContext';
import Button from '../../postjob/Button';
import Image from 'next/image';
import visibleImage from '@/public/images/profile-visible.svg'
import hiddenImage from '@/public/images/profile-hidden.svg'
import { customFetch } from '@/utils/fetchHelper';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const ProfileVisibility = () => {
    const {state, dispatch} = useProfileData();
    const router = useRouter();
    const clickHandler = async()=>
    {
        console.log(state)
        const payload = {
            AboutMyself: state.details.bio,
            AboutExperience: state.details.experience,
            Skills: state.details.skills.toString(),
            Resume: state.details.resume,
            Website: state.details.portfolioLink,
            isHidden: state.hideProfile,
            Video: state.profilePhoto,
            Photo: state.profileVideo
        }
       try {
        const response = await customFetch('/candidates/register' , {
            method:'POST',
            body: JSON.stringify(payload)
        })
        if(response){
            console.log(response)
            toast.success('Success !')
            // router.push('/dashboard/candidate')
        }
       } catch (error) {
        toast.error('Failed to Complete Profile , please try again later')
       }
    }

  return (
    <div className='space-y-4'>
        <label htmlFor='hideProfile' className='flex items-start gap-x-4 -mt-8 p-4 border-b-[0.5px] border-[#35383F] rounded-xl'>
            <input id='hideProfile' type='radio' name="profileVisibilty" value={state.hideProfile} className='sr-only peer' onChange={()=>dispatch({type:"PROFILE_VISIBILITY",payload:true})} />
            <div className='p-2 rounded-full border-2 border-white-darkest size-fit peer-checked:border-white-medium'>
                <aside className={` size-2 rounded-full ${state.hideProfile?"bg-white":"bg-primary"} `}></aside>
            </div>
            <main className='space-y-1'>
                <h1 className='text-lg'>Make it Hidden</h1>
                <p className=' text-white-medium text-xs'>Hidden will lead not showcasing of your seeyou profile by recruiters during search process.</p>
                <Image alt='#' width={380} height={325} src={hiddenImage}/>
            </main>
        </label>
        <label htmlFor='showProfile' className='flex items-start gap-x-4 p-4 border-b-[0.5px] border-[#35383F] rounded-xl'>
            <input id='showProfile' type='radio' name="profileVisibilty" value={!state.hideProfile} className='sr-only peer' onChange={()=>dispatch({type:"PROFILE_VISIBILITY",payload:false})} />
            <div className='p-2 rounded-full border-2 border-white-darkest size-fit peer-checked:border-white-medium'>
                <aside className={` size-2 rounded-full ${state.hideProfile?"bg-primary":"bg-white"} `}></aside>
            </div>
            <main className='space-y-1'>
                <h1 className='text-lg'>Make it Visible</h1>
                <p className=' text-white-medium text-xs'>Visible will lead showcasing of your seeyou profile by recruiters during search process.</p>
                <Image alt='#' width={380} height={325} src={visibleImage}/>
            </main>
        </label>
        {/* Mobile image would be added later */}
        <Button isDisabled={()=>false} clickHandler={clickHandler} />
    </div>
  )
}

export default ProfileVisibility
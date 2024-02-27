import React from 'react'
import { useProfileData } from '../../../complete-profile/candidate/CompleteCandidateProfileContext';
import Button from '../../postjob/Button';

const ProfileVisibility = () => {
    const {state:{hideProfile}, dispatch} = useProfileData();

    const clickHandler=()=>
    {
        // call the api here
    }

  return (
    <div className='space-y-4'>
        <label htmlFor='hideProfile' className='flex items-start gap-x-4 -mt-8 p-4 border-b-[0.5px] border-[#35383F] rounded-xl'>
            <input id='hideProfile' type='radio' name="profileVisibilty" value={hideProfile} className='sr-only peer' onChange={()=>dispatch({type:"PROFILE_VISIBILITY",payload:true})} />
            <div className='p-2 rounded-full border-2 border-white-darkest size-fit peer-checked:border-white-medium'>
                <aside className={` size-2 rounded-full ${hideProfile?"bg-white":"bg-primary"} `}></aside>
            </div>
            <main className='space-y-1'>
                <h1 className='text-lg'>Make it Hidden</h1>
                <p className=' text-white-medium text-xs'>Hidden will lead not showcasing of your seeyou profile by recruiters during search process.</p>
            </main>
        </label>
        <label htmlFor='showProfile' className='flex items-start gap-x-4 p-4 border-b-[0.5px] border-[#35383F] rounded-xl'>
            <input id='showProfile' type='radio' name="profileVisibilty" value={!hideProfile} className='sr-only peer' onChange={()=>dispatch({type:"PROFILE_VISIBILITY",payload:false})} />
            <div className='p-2 rounded-full border-2 border-white-darkest size-fit peer-checked:border-white-medium'>
                <aside className={` size-2 rounded-full ${hideProfile?"bg-primary":"bg-white"} `}></aside>
            </div>
            <main className='space-y-1'>
                <h1 className='text-lg'>Make it Visible</h1>
                <p className=' text-white-medium text-xs'>Visible will lead showcasing of your seeyou profile by recruiters during search process.</p>
            </main>
        </label>
        {/* Mobile image would be added later */}
        <Button isDisabled={()=>false} clickHandler={clickHandler} />
    </div>
  )
}

export default ProfileVisibility
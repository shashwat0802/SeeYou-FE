import React , {useState} from 'react'
import { useData } from '../../search-candidate/SearchCandidateContext'
import VideoComponent from '../../components/VideoComponent';

const CandidateProfile = () => {
    const {state:{candidate},dispatch} = useData();
    const [unlocked,setUnlocked] = useState(false);
    // Write logic here for video then set unlocked state to true
  return (
    <div className='px-2 space-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-2" onClick={()=>dispatch({type:"BACK_TO_SEARCH_RESULTS",payload:""})}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>

        <section className='p-6 bg-bg-light rounded-3xl space-y-4'>
            <header className='space-x-2.5 flex items-center'>
                {unlocked
                ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-success">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-required`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>}
                <h1 className={` font-black ${unlocked?"text-success":"text-required"}  `}>Profile Locked</h1>
            </header>
            {!unlocked && <p className='text-required text-sm'>*Watch minimum 30 seconds to unlock profile details</p>}
            <section className=' grid grid-cols-[auto,1fr,auto] gap-x-2 items-start ' >
                <img src={candidate.pfpLink} alt="Candidate" className=' object-cover w-20 h-20 rounded' onClick={()=>dispatch({type:"SELECT_CANDIDATE_PROFILE",payload:candidate})} />
                <aside className='space-y-1 hover:cursor-pointer' onClick={()=>dispatch({type:"SELECT_CANDIDATE_PROFILE",payload:candidate})}>
                    <p className=' text-xs text-[#EAF2FF] font-medium bg-[#7D5AE21A] py-0.5 rounded-sm px-1.5 w-fit'>{candidate.keywordSimilarity}% Keywrods Similarity</p>
                    <h2 className='text-[#D4D6DD]'>{candidate.name}</h2>
                    <h1 className=' text-lg text-white font-black'>{candidate.jobRole}</h1>
                </aside>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 row-span-3 col-start-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </section>
            <aside>
                <label className='text-sm text-[#D4D6DD]'>Watch Profile Video</label>
                {/* <video width="640" height="360" controls className=' rounded-3xl pt-1.5'>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <VideoComponent />
            </aside>
            <hr className=' border-[#35383F] ' />
            <p className=' line-clamp-2 text-[#8F9098]'>{candidate.intro}</p>
        </section>

        <button className={` py-3 px-4 ${unlocked?"bg-success":"bg-required"} text-sm text-white font-semibold rounded-xl flex items-center w-full justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={` w-4 h-4 mr-1.5 text-white`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Unlock Profile
        </button>
    </div>
  )
}

export default CandidateProfile
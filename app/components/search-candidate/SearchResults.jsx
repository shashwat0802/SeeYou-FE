import React , {useState} from 'react'
import { useData } from '../../search-candidate/SearchCandidateContext';

const Filters = () => {
    const [selectedFilter, setSelectedFilter] = useState('Alphabetical (A to Z)');
    const filters = [
      'Alphabetical (A to Z)',
      'Most Relevant',
      'Recently Edited',
    ];
  
    return (
      <section className=" relative">
        <button className="group outline-none text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.3}
            stroke="currentColor"
            className="size-5 text-white group-focus:text-success"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
          <ul className="absolute z-10 top-6 right-0 p-3 bg-bg-light rounded-2xl text-sm text-white-light hidden  group-focus:block">
            {filters.map((filter, index) => (
              <li
                key={index}
                className={` ${
                  filter === selectedFilter
                    ? 'bg-primary-light'
                    : 'hover:bg-primary-light'
                } rounded-xl py-4 px-3 w-40`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </button>
      </section>
    );
  };

const SearchResults = ({candidateData}) => {
    const {dispatch} = useData();
  return (
    <div>
        <header className="flex justify-between items-center py-6 px-4">
            <p className=' text-sm font-extrabold'>3,7444 Found</p>
            <Filters />
        </header>
        <ul className=' space-y-3 max-h-[80vh] overflow-y-scroll'>
            {candidateData.map(candidate=>(
                <li className='p-3 rounded-xl bg-bg-light space-y-3' key={candidate.id}>
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
                    <hr className=' border-[#35383F] ' />
                    <p className=' line-clamp-2 text-[#8F9098]'>{candidate.intro}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SearchResults
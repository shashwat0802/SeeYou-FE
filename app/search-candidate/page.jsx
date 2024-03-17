'use client'
import React from 'react'
import SearcBar from "../components/search-candidate/SearchBar";
import AdvancedFilters from "../components/search-candidate/AdvancedFilters";
import SearchResults from "../components/search-candidate/SearchResults";

import { SearchCandidateProvider } from "./SearchCandidateContext";
import { useData } from './SearchCandidateContext';

const candidateData = [
  {id:1,keywordSimilarity:100,name:"John Brunos",jobRole:"UI/UX Designer",
  intro:"I am a UI/UX Designer with 2 years of experience trying to understand the world of design",
  pfpLink:"https://www.shutterstock.com/shutterstock/photos/1714666150/display_1500/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg"
},
{id:2,keywordSimilarity:95,name:"Ahmed Mukatmer",jobRole:"UI/UX Designer",
intro:"I am a UI/UX Designer with 2 years of experience trying to understand the world of design",
pfpLink:"https://www.shutterstock.com/shutterstock/photos/1714666150/display_1500/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg"
},
{id:3,keywordSimilarity:75,name:"John Brunos",jobRole:"UI/UX Designer",
intro:"I am a UI/UX Designer with 2 years of experience trying to understand the world of design",
pfpLink:"https://www.shutterstock.com/shutterstock/photos/1714666150/display_1500/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg"
},
{id:4,keywordSimilarity:75,name:"Ahmed Mukatmer",jobRole:"UI/UX Designer",
intro:"I am a UI/UX Designer with 2 years of experience trying to understand the world of design",
pfpLink:"https://www.shutterstock.com/shutterstock/photos/1714666150/display_1500/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg"
}
]

const page = () => {
  const {state:{showModal}} = useData();
  return (
    <>
    {showModal && <AdvancedFilters />}
    <div className='pt-4 px-4 h-screen'>
        <SearcBar />
        <SearchResults candidateData={candidateData} />
    </div>
    </>
  )
}

export default page
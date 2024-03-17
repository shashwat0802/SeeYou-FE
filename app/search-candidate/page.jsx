'use client'
import React from 'react'
import SearcBar from "../components/search-candidate/SearchBar";
import AdvancedFilters from "../components/search-candidate/AdvancedFilters";

import { SearchCandidateProvider } from "./SearchCandidateContext";
import { useData } from './SearchCandidateContext';

const page = () => {
  const {state:{showModal}} = useData();
  return (
    <>
    {showModal && <AdvancedFilters />}
    <div className='pt-4 px-3'>
        <SearcBar />
        page
    </div>
    </>
  )
}

export default page
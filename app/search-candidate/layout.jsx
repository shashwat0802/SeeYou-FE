'use client'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { SearchCandidateProvider } from "./SearchCandidateContext";

export default function layout ({ children }) {
    return(
        <>
        <Navbar/>
        <SearchCandidateProvider>
            {children}
        </SearchCandidateProvider>
        <Footer />
        </>
    )
}
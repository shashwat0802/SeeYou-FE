import { createContext , useReducer , useContext } from "react";

const SearchCandidateContext = createContext();

export const SearchCandidateProvider = ({children}) =>
{
    const SearchCandidateReducer = (state, {type , payload}) =>
    {
        const {advancedFilter} = state
        switch(type)
        {
            case "TOGGLE_MODAL":
            
                return {...state,showModal:payload}   

            case "ADVANCED_FILTER":
        
                return {...state,advancedFilter:{...advancedFilter,[payload.inputField]:payload.userInput}}    

            case "RESET_ADVANCED_FILTERS":
                return {...state,advancedFilter:{cvKeywords:"",noneKeywords:"",profileLastUpdated:""}}

            case "SELECT_CANDIDATE_PROFILE":
                return {...state,showProfile:true,candidate:payload}   
                
            case "BACK_TO_SEARCH_RESULTS":
                return {...state,showProfile:false}    

            default:
                return state;
        }
    }

    const initialState = {
        showModal:false,
        advancedFilter:{cvKeywords:"",noneKeywords:"",profileLastUpdated:""},
        showProfile:false,
        candidate:{}
    }

    const [state,dispatch] = useReducer( SearchCandidateReducer , initialState);

    return (
        <SearchCandidateContext.Provider value={{state , dispatch}}>
            {children}
        </SearchCandidateContext.Provider>
    )
}

export const useData = () => useContext(SearchCandidateContext);
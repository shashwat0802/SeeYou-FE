import { createContext , useReducer , useContext } from "react";

const CompleteCandidateProfileContext = createContext();

export const CompleteCandidateProfileProvider = ({children}) =>
{
    const CandidateProfileReducer = (state, {type , payload}) =>
    {
        const {details,aboutCompany} = state;
        switch(type)
        {
            case "DETAILS_FIELDS":
            
                return {...state,details:{...details,[payload.inputField]:payload.userInput}} ;

            case "PROFILE_PHOTO":
                return {...state,profilePhoto:payload}

            case "VIDEO":
                return {...state,profileVideo:payload}    
                
            default:
                return state;
        }
    }

    const initialState = {
        details:{linkedin:"",bio:"",experience:"",skills:[],resume:"",portfolioLink:""},
        profilePhoto:"",
        profileVideo:null
    }

    const [state,dispatch] = useReducer( CandidateProfileReducer , initialState);

    return (
        <CompleteCandidateProfileContext.Provider value={{state , dispatch}}>
            {children}
        </CompleteCandidateProfileContext.Provider>
    )
}

export const useProfileData = () => useContext(CompleteCandidateProfileContext);
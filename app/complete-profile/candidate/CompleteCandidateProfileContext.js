import { createContext , useReducer , useContext } from "react";

const CompleteCandidateProfileContext = createContext();

export const CompleteCandidateProfileProvider = ({children}) =>
{
    const CandidateProfileReducer = (state, {type , payload}) =>
    {
        const {details,companyInfo,aboutCompany,companyVideo} = state;
        switch(type)
        {
            case "DETAILS_FIELDS":
            
                return {...state,details:{...details,[payload.inputField]:payload.userInput}} ;

            case "COMPANY_INFO_FIELDS":

                return {...state,companyInfo:{...companyInfo,[payload.inputField]:payload.userInput}} ;

            case "LOGO":
                return {...state,logo:payload}

            case "ABOUT_COMPANY_FIELDS":
                return {...state,aboutCompany:{...aboutCompany,[payload.inputField]:payload.userInput}} ;

            case "BRANDS":
                return {...state,companyBrands:payload}

            case "VIDEO":
                return {...state,companyVideo:payload}    
                
            default:
                return state;
        }
    }

    const initialState = {
        details:{linkedin:"",bio:"",experience:"",skills:[],resume:"",portfolioLink:""},
        companyInfo:{companyName:"",registrationNumber:"",vat:"",industry:"",numberOfEmployees:"",city:"",state:"",country:""},
        logo:"",
        aboutCompany:{about:"",companyPPT:"",websiteurl:""},
        companyBrands:[],
        companyVideo:null
    }

    const [state,dispatch] = useReducer( CandidateProfileReducer , initialState);

    return (
        <CompleteCandidateProfileContext.Provider value={{state , dispatch}}>
            {children}
        </CompleteCandidateProfileContext.Provider>
    )
}

export const useProfileData = () => useContext(CompleteCandidateProfileContext);
import { createContext , useReducer , useContext } from "react";

const CompleteRecruiterProfileContext = createContext();

export const CompleteRecruiterProfileProvider = ({children}) =>
{
    const RecruiterProfileReducer = (state, {type , payload}) =>
    {
        const {details,companyInfo,aboutCompany} = state;
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
            default:
                return state;
        }
    }

    const initialState = {
        details:{type:"",position:"",linkedin:""},
        companyInfo:{companyName:"",registrationNumber:"",vat:"",industry:"",numberOfEmployees:"",city:"",state:"",country:""},
        logo:"",
        aboutCompany:{about:"",companyPPT:"",websiteurl:""}
    }

    const [state,dispatch] = useReducer( RecruiterProfileReducer , initialState);

    return (
        <CompleteRecruiterProfileContext.Provider value={{state , dispatch}}>
            {children}
        </CompleteRecruiterProfileContext.Provider>
    )
}

export const useProfileData = () => useContext(CompleteRecruiterProfileContext);
import { createContext , useReducer , useContext } from "react";

const CompleteRecruiterProfileContext = createContext();

export const CompleteRecruiterProfileProvider = ({children}) =>
{
    const RecruiterProfileReducer = (state, {type , payload}) =>
    {
        const {details} = state;
        switch(type)
        {
            case "DETAILS_FIELDS":
            
                return {...state,details:{...details,[payload.inputField]:payload.userInput}} 

            default:
                return state;
        }
    }

    const initialState = {
        details:{type:"",position:"",linkedin:""}
    }

    const [state,dispatch] = useReducer( RecruiterProfileReducer , initialState);

    return (
        <CompleteRecruiterProfileContext.Provider value={{state , dispatch}}>
            {children}
        </CompleteRecruiterProfileContext.Provider>
    )
}

export const useProfileData = () => useContext(CompleteRecruiterProfileContext);
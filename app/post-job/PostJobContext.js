import { createContext , useReducer , useContext } from "react";

const PostJobContext = createContext();

export const PostJobProvider = ({children}) =>
{
    const PostJobReducer = (state, {type , payload}) =>
    {
        const {location,salary} = state;
        switch(type)
        {
            case "LOCATION_FIELDS":
            
                return {...state,location:{...location,[payload.inputField]:payload.userInput}}

            case "SALARY_FIELDS":
                
                return {...state,salary:{...salary,[payload.inputField]:payload.userInput}}

            default:
                return state;
        }
    }

    const initialState = {
        location:{jobTitle:"",jobType:"",showJobLocation:"",streetAddress:"",city:"",state:"",country:"",preferredLocations:[]},
        salary:{jobIndustry:"",minExperience:""},
    }

    const [state,dispatch] = useReducer( PostJobReducer , initialState);

    return (
        <PostJobContext.Provider value={{state , dispatch}}>
            {children}
        </PostJobContext.Provider>
    )
}

export const useData = () => useContext(PostJobContext);
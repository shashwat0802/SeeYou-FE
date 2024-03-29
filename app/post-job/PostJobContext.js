import { createContext , useReducer , useContext } from "react";

const PostJobContext = createContext();

export const PostJobProvider = ({children}) =>
{
    const PostJobReducer = (state, {type , payload}) =>
    {
        const {location,salary,description,video} = state;
        switch(type)
        {
            case "LOCATION_FIELDS":
            
                return {...state,location:{...location,[payload.inputField]:payload.userInput}}

            case "SALARY_FIELDS":
                
                return {...state,salary:{...salary,[payload.inputField]:payload.userInput}}

            case "DESCRIPTION_FIELDS":
            
                return {...state,description:{...description,[payload.inputField]:payload.userInput}}   
                 
            case "VIDEO_FIELDS":
                return {...state,video:{...video,[payload.inputField]:payload.userInput}}     

            case "TOGGLE_NAVIGATION":
                return {...state,navigation:payload}    

            default:
                return state;
        }
    }

    const initialState = {
        location:{jobTitle:"",jobType:"",showJobLocation:"",streetAddress:"",city:"",state:"",country:"",preferredLocations:[]},
        salary:{jobIndustry:"",minExperience:"", jobType:"", specifySalary:true , currency:"USD Dollar", period:"",fromRange:"",toRange:"",benefits:[],addedBenefits:[]},
        description:{jobDescription:"",requiredSkills:"",skills:[], languages:[]},
        video:{descriptionVideo:null,managerVideo:null},
        navigation:false
    }

    const [state,dispatch] = useReducer( PostJobReducer , initialState);

    return (
        <PostJobContext.Provider value={{state , dispatch}}>
            {children}
        </PostJobContext.Provider>
    )
}

export const useData = () => useContext(PostJobContext);
import { createContext , useReducer , useContext } from "react";
import Cookies from 'js-cookie';

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

    const postJobApi = async () => {
        const token = Cookies.get('jwt');
        try {
            const formData = new FormData();
            formData.append('JobTitle', state.location.jobTitle);
            formData.append('Location', state.location.showJobLocation);
            formData.append('includeStreetAddress', state.location.showJobLocation === "onsite" || state.location.showJobLocation === "hybrid" ? "true" : "false");
            formData.append('StreetAddress', state.location.streetAddress);
            formData.append('City', state.location.city);
            formData.append('RegionState', state.location.state);
            formData.append('Country', state.location.country);
            formData.append('CandidatesFrom', state.location.preferredLocations.join(","));
            formData.append('JobIndustry', state.salary.jobIndustry);
            formData.append('ExperianceLevel', state.salary.minExperience);
            formData.append('JobType', state.salary.jobType);
            formData.append('Salary', state.salary.specifySalary ? "specify" : "not specify");
            formData.append('SalaryCurrency', state.salary.currency);
            formData.append('SalaryPeriod', state.salary.period);
            formData.append('SalaryMin', state.salary.fromRange);
            formData.append('SalaryMax', state.salary.toRange);
            formData.append('AdditionalBenefits', state.salary.addedBenefits.join(","));
            formData.append('JobDescription', state.description.jobDescription);
            formData.append('SkillDescription', state.description.requiredSkills);
            formData.append('JobSkills', state.description.skills.join(","));
            formData.append('Language', state.description.languages.join(","));
            formData.append('JobVideo', state.video.descriptionVideo);
    
            const response = await fetch("http://localhost:4000/api/v1/jobs/postjob/65ff0f09c9d396025c3eb454", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            });
            const data = await response.json();
            console.log(data);
    
            // Handle response
        } catch (error) {
            // Handle error
            console.log(error);
        }
    }

    return (
        <PostJobContext.Provider value={{state , dispatch , postJobApi}}>
            {children}
        </PostJobContext.Provider>
    )
}

export const useData = () => useContext(PostJobContext);
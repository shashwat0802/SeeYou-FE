import React , {useRef , useState} from 'react'
import Label from '../salary/Label';
import {useData} from "../../../post-job/PostJobContext";

const Dropdown = ({search,clickHandler}) =>
{
    const languages = ["Aregentina","Armenia","Austrian","Arabic","Chinese (Mandarin)","Dutch","English (US)",
    "English (UK)","French","German","Hindi","Indonesian","Italian","Japanese","Korean","Portuguese","Russian","Romenian","Spanish",
    "Vietnamese"];

    const filteredLanguages = languages.filter(language=>(language.toLocaleLowerCase()).includes(search.toLocaleLowerCase()));
    if(filteredLanguages.length==0)
    return;

    return (
        <ul className='p-3 space-y-2 rounded-2xl bg-[#1F222A] overflow-scroll min-h-fit max-h-72 mb-4'>
            {filteredLanguages.map((language,index)=>(
                <li key={index} className='text-sm text-white-light py-4 px-3 rounded-xl hover:bg-[#34373F] ' onClick={()=>clickHandler(language)} >{language}</li>
            ))}
        </ul>
    )
}

const Langauges=()=>
{
    const [search , setSearch] = useState("");
    const {state:{description:{languages}} , dispatch} = useData();
    
    const clickHandler = (language) =>
    {
        dispatch({type:"DESCRIPTION_FIELDS" , payload:{inputField:"languages" , userInput:[...languages,language] }})
        setSearch("");
    }

    const deleteHandler = (language) =>
    {
        const filteredLanguages = [...languages].filter(item=>item!==language);
        dispatch({type:"DESCRIPTION_FIELDS" , payload:{inputField:"languages" , userInput:filteredLanguages }})
    }

  return (
    <section>
        <Label text="Select required Language/s" required={true} bold={true} />
        <aside className='flex w-full py-3 px-4 mt-2 mb-3 space-x-1.5 items-center border border-white-darkest rounded-xl bg-primary'>
            <input value={search} className='grow text-sm  bg-primary  outline-none ' placeholder='Search "English" ' onChange={(e)=>setSearch(e.target.value)} />
        </aside>
        {search!=="" && <Dropdown search={search} clickHandler={clickHandler} />}
        <ul className=' space-y-3'>
            {languages?.map((language , index)=>(
                <li key={index} className='flex grow justify-between bg-[#1F222A] items-center p-4 space-x-4 border border-[#35383F] rounded-2xl'>
                    <span className='text-white text-lg'>{language}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-6 h-6 text-required hover:cursor-pointer"
                     onClick={()=>deleteHandler(language)}
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </li>
            ))}
        </ul>
        
    </section>
  )
}

export default Langauges
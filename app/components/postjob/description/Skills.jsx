import React , {useRef} from 'react'
import {useData} from "../../../post-job/PostJobContext";

const Skills = () => {
    const inputRef = useRef();
    const {state:{description:{skills}} , dispatch} = useData();
    

    const clickHandler = (event) =>
    {
        if (event.key === 'Enter')
        {
            const skill = inputRef.current.value
            dispatch({type:"DESCRIPTION_FIELDS" , payload:{inputField:"skills" , userInput:[...skills,skill] }})
            inputRef.current.value = '';
        }
    }

    const deleteHandler = (skill) =>
    {
        const filteredSkills = [...skills].filter(item=>item!==skill);
        dispatch({type:"DESCRIPTION_FIELDS" , payload:{inputField:"skills" , userInput:filteredSkills }})
    }

  return (
    <section>
        <h1 className=' text-white-medium text-xs font-bold mb-2'>My Skills Keywords</h1>
        <aside className='flex w-full py-3 px-4 space-x-1.5 items-center border border-white-darkest rounded-xl bg-primary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input ref={inputRef} className='grow text-sm  bg-primary  outline-none ' placeholder='Search and add "skills" ' onKeyDown={clickHandler}/>
        </aside>
        <small className='text-[10px] text-[#8F9098]'>Add maximum 50 skills with 100 characters tag limit</small>
        <ul className=' gap-3 flex flex-wrap'>
            {skills?.map((skill , index)=>(
                <li key={index} className='flex grow justify-between bg-[#1F222A] items-center p-4 space-x-4 border border-[#35383F] rounded-2xl'>
                    <span className='text-white text-lg'>{skill}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-6 h-6 text-required hover:cursor-pointer"
                     onClick={()=>deleteHandler(skill)}
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </li>
            ))}
        </ul>
        
    </section>
  )
}

export default Skills
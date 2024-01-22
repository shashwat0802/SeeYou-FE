import React from 'react'

const CurrencySymbolSelector = ({currency}) =>
{
    switch(currency)
    {
        case "USD Dollar":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.7501 4.79956C12.7501 4.38535 12.4143 4.04956 12.0001 4.04956C11.5858 4.04956 11.2501 4.38535 11.2501 4.79956V6.46569C10.526 6.51276 9.77505 6.67118 9.16245 7.05274C8.51619 7.45527 8.05771 8.0885 7.95369 8.96428C7.87102 9.66025 7.94763 10.2748 8.19316 10.8048C8.4396 11.3367 8.82834 11.7233 9.26952 12.0073C10.1061 12.5459 11.2244 12.7655 12.1396 12.9451L12.1479 12.9467L12.2297 12.9628C12.6836 13.0518 13.0995 13.1333 13.4784 13.2357C13.8813 13.3446 14.1914 13.4645 14.4159 13.6059C14.6295 13.7404 14.7412 13.8783 14.7984 14.0305C14.8583 14.1898 14.8917 14.454 14.7834 14.8963C14.7018 15.2298 14.474 15.493 14.0448 15.6962C13.5991 15.9072 12.9872 16.0235 12.2866 16.0456C10.8673 16.0905 9.37583 15.7448 8.74972 15.4149C8.38328 15.2218 7.92967 15.3623 7.73655 15.7287C7.54344 16.0951 7.68395 16.5488 8.05039 16.7419C8.762 17.1169 9.98732 17.4246 11.2501 17.5194V19.1996C11.2501 19.6138 11.5858 19.9496 12.0001 19.9496C12.4143 19.9496 12.7501 19.6138 12.7501 19.1996V17.5218C13.4264 17.4676 14.1036 17.3279 14.6866 17.052C15.4059 16.7115 16.0236 16.1383 16.2404 15.2531C16.3971 14.6131 16.3988 14.0249 16.2025 13.5027C16.0036 12.9734 15.6346 12.6008 15.2153 12.3367C14.807 12.0795 14.3319 11.9126 13.8697 11.7877C13.4376 11.6709 12.9722 11.5797 12.5328 11.4936L12.4368 11.4748C11.4476 11.2806 10.633 11.1012 10.0815 10.7461C9.82743 10.5825 9.65753 10.3973 9.5542 10.1743C9.44996 9.94924 9.38568 9.62562 9.44322 9.1412C9.48999 8.74738 9.66961 8.50403 9.95549 8.32597C10.2741 8.1275 10.7481 8.00122 11.3499 7.96236C12.5515 7.88479 13.9795 8.17202 14.8749 8.47319C15.2675 8.60524 15.6928 8.39402 15.8249 8.00142C15.9569 7.60882 15.7457 7.1835 15.3531 7.05146C14.6775 6.82422 13.7332 6.59935 12.7501 6.50107V4.79956Z" fill="white"/>
            </svg>
            
        case "Euros":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.077 5.07925C12.8626 4.80869 11.6088 4.96406 10.4789 5.51798C9.35148 6.0707 8.4077 6.98982 7.7517 8.14157C7.51593 8.55552 7.32034 8.99408 7.16651 9.44947H5.7002C5.28598 9.44947 4.9502 9.78526 4.9502 10.1995C4.9502 10.6137 5.28598 10.9495 5.7002 10.9495H6.81943C6.77399 11.296 6.75098 11.647 6.75098 11.9995C6.75098 12.352 6.77399 12.7029 6.81943 13.0495H5.7002C5.28598 13.0495 4.9502 13.3853 4.9502 13.7995C4.9502 14.2137 5.28598 14.5495 5.7002 14.5495H7.16651C7.32034 15.0049 7.51593 15.4434 7.7517 15.8574C8.4077 17.0091 9.35148 17.9283 10.4789 18.481C11.6088 19.0349 12.8626 19.1903 14.077 18.9197C15.2896 18.6495 16.3888 17.9717 17.2447 16.9933C17.5174 16.6815 17.4858 16.2077 17.174 15.935C16.8623 15.6623 16.3884 15.6939 16.1157 16.0057C15.4526 16.7637 14.6271 17.2604 13.7508 17.4556C12.8763 17.6504 11.9699 17.5413 11.1392 17.1341C10.3061 16.7257 9.5761 16.0297 9.05511 15.115C8.95135 14.9328 8.85704 14.744 8.77252 14.5495H12.9002C13.3144 14.5495 13.6502 14.2137 13.6502 13.7995C13.6502 13.3853 13.3144 13.0495 12.9002 13.0495H8.33525C8.27955 12.7056 8.25098 12.3542 8.25098 11.9995C8.25098 11.6448 8.27955 11.2933 8.33525 10.9495H12.9002C13.3144 10.9495 13.6502 10.6137 13.6502 10.1995C13.6502 9.78526 13.3144 9.44947 12.9002 9.44947H8.77252C8.85704 9.25499 8.95135 9.06612 9.05511 8.88395C9.5761 7.96924 10.3061 7.27328 11.1392 6.86484C11.9699 6.45761 12.8763 6.34851 13.7508 6.54336C14.6271 6.7386 15.4526 7.23526 16.1157 7.9933C16.3884 8.30505 16.8623 8.33669 17.174 8.06396C17.4858 7.79123 17.5174 7.31741 17.2447 7.00566C16.3888 6.02729 15.2896 5.34941 14.077 5.07925Z" fill="white"/>
            </svg>

        case "Krone":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.99951V17.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 11.9995C8.5 11.9995 11 8.99951 11 5.99951" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 11.9995C8.5 11.9995 11 14.9995 11 17.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9.99951V17.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9.99951C17.9391 9.99951 16.9217 10.4209 16.1716 11.1711C15.4214 11.9212 15 12.9386 15 13.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
    
        case "Pound":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.65 9.03579C14.5 7.87336 13.66 5.64813 11.5 6.04668C8.8 6.54486 8.35 9.53398 9.7 12.5231C10.78 14.9144 8.35 17.8371 7 18.9995C7.75 18.5013 9.91683 17.1028 11.95 18.0031C14.2 18.9995 15.55 18.1692 16 18.0031" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.2002 13.1995H7.2002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
        
        case "Rial":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9.53993C17 9.56714 16.9992 10.5943 16.9977 10.6212C16.9545 11.3895 16.3005 11.9995 15.5 11.9995C14.6995 11.9995 14.0455 11.3895 14.0023 10.6212C14.0008 10.5943 14 5.02672 14 4.99951" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12.8388C5 12.8976 5.00153 13.962 5.00455 14.02C5.09103 15.6808 6.39907 16.9995 8 16.9995C9.60093 16.9995 10.909 15.6808 10.9954 14.02C10.9985 13.962 11 5.05832 11 4.99951" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 11.9995C20 16.4178 16.4183 19.9995 12 19.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 14.9995H16.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 14.9995H14.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            

        case "Rupee INR":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4.99951H7H10C11.0609 4.99951 12.0783 5.42094 12.8284 6.17108C13.5786 6.92123 14 7.93865 14 8.99951C14 10.0604 13.5786 11.0778 12.8284 11.8279C12.0783 12.5781 11.0609 12.9995 10 12.9995H7L13 18.9995" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 8.99951H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            

        case "Won":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4.99951L8 18.9995L12 8.04299L16 18.9995L20 4.99951" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 9.99951H3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 13.9995H3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            

        case "Yen":
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 18.9995V12.4995M13 12.4995L8 5.99951M13 12.4995L18 5.99951" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.6001 16.7996H16.8001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.6001 13.1995H16.8001" stroke="#253D35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            

        default:
            return ""    
            

    }
}

const RadioButtons = ({options , inputField , state , dispatch }) => {
  return (
    <ul className='bg-[#1F222A] p-3 border border-[#35383F] rounded-2xl'>
        {options.map((option,index)=>(
            <li key={index} className=''>
                <label htmlFor={option} className={` flex items-center ${inputField==="currency"?"space-x-1 pl-1.5" :"space-x-2.5"} py-4  `}>
                    <input className=" peer sr-only" id={option} type="radio" name={inputField} onChange={()=>dispatch({type:"SALARY_FIELDS",payload:{inputField,userInput:option}})}/>
                        <div className="w-6 h-6 border-2 border-white-darkest rounded-full box-border flex justify-center items-center group">
                            <aside className={`w-2 h-2 ${state===option?"bg-white":"bg-transparent"} rounded-full`}></aside>
                        </div>
                        { inputField==="currency" && <CurrencySymbolSelector currency={option}/>}
                        <p className="text-white-medium text-sm">{option}</p>
                </label>
            </li>
        ))
            }
    </ul>
  )
}

export default RadioButtons
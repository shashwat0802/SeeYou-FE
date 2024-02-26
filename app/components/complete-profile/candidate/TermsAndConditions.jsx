import React , {useState} from 'react'
import Button from '../../postjob/Button'
import { AllTerms } from '../recruiter/TermsAndCondition';

const TermsAndCondition = ({setStep}) => {
    const [check,setCheck] = useState(false);

  return (
    <>
        <AllTerms check={check} setCheck={setCheck} />
        <Button isDisabled={()=>!check} clickHandler={()=>setStep(5)} />
    </>
  )
}

export default TermsAndCondition
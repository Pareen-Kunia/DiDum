import React from 'react'
import ProceedIcon from "../../assets/images/ProceedIcon.svg";

const SubmitButton = ({onClick,text,type="button"}) => {
  return (
    <button className="step-btn get-started" onClick={onClick} type={type}>
          <img src={ProceedIcon} alt='Submit' />
          {text}
        </button>
  )
}

export default SubmitButton
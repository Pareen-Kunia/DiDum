import React from 'react'
import BackIcon from "../../assets/images/BackIcon.svg";

const BackButton = ({onClick,text,type="button"}) => {
  return (
    <button className="step-btn back-btn" onClick={onClick} type={type}>
          <img src={BackIcon} alt='Back' />
          {text}
        </button>
  )
}

export default BackButton
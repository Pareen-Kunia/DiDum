import React from 'react'
import LeadingIcon from "../../assets/images/Leading.svg";

const CustomEditButton = ({onClick,text,icon=LeadingIcon,type="button"}) => {
  return (
    <button className="step-btn edit-btn btn-spacer" onClick={onClick} type={type}>
          <img src={icon} alt='Edit' />
          {text}
        </button>
  )
}

export default CustomEditButton
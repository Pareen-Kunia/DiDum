import React from 'react'
import LeadingIcon from "../../assets/images/Leading.svg";

const EditButton = ({onClick,text,type="button"}) => {
  return (
    <button className="step-btn edit-btn" onClick={onClick} type={type}>
          <img src={LeadingIcon} alt='Edit' />
          {text}
        </button>
  )
}

export default EditButton
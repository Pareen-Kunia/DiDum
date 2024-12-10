import React from 'react'
import CancelIcon from "../../assets/images/Cancel.svg";

const CancelButton = ({onClick,text,type="button"}) => {
  return (
    <button className="step-btn cancel-btn" onClick={onClick} type={type}>
          <img src={CancelIcon} alt='Cancel' />
            {text}
        </button>
  )
}

export default CancelButton
import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import CancelButton from "../Buttons/CancelButton";
import BackButton from "../Buttons/BackButton";


const PreLiveCheck = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Whakatūturutia te pono o tāu e kī nei ko wai koe</h2>
        <hr />
        <h1 className="intro-title">Prove you are who you say you are</h1>

        <div className="step-container">
          
          <p className="mb-4">You're about to take a live photo using a photo verification application.</p>
          <p className="mb-4">Once you've taken your photo, you'll return here to continue your application.</p>
        </div>
      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Continue"} onClick={handleNext}/>
      
      
    </div>
    <div className="checkbox-wrapper mb-5">
    <label className="terms-label"><a href="javascript:void();" className="cancel-link" onClick={handleCancel}>I want to get my photo taken at a RealMe partner store</a></label>
    </div>
    </>
  )
}

export default PreLiveCheck;

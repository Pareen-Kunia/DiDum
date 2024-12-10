import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import CancelButton from "../Buttons/CancelButton";
import BackButton from "../Buttons/BackButton";


export const Step2 = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Körero mai ko wai koe</h2>
        <hr />
        <h1 className="intro-title">Tell us who you are</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Do you have a New Zealand passport?</h2>
          <p className="mb-4">You can use an expired passport.</p>
        </div>
      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Yes"} onClick={handleNext}/>
      <CancelButton text={"No"} onClick={handleCancel}/>
      <BackButton text={"Back"} onClick={handleBack}/>
    </div>
    </>
  )
}

export default Step2;

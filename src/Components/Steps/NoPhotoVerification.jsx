import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";


const NoPhotoVerification = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Kāore anō kia oti i a koe tō hāpono whakaahua</h2>
        <hr />
        <h1 className="intro-title">You have not completed photo verification</h1>

        <div className="step-container">
          
          <p className="mb-4">If you do not complete photo verification online, you'll need to finish your application in person at a RealMe partner store.</p>
          
        </div>
        <h2 className="step-title mb-2">How would you like to continue?</h2>
        <br />
      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Try photo verification again"} onClick={handleNext}/>
      
      
    </div>
    <div className="checkbox-wrapper mb-5">
    <label className="terms-label"><a href="javascript:void();" className="cancel-link" onClick={handleCancel}>I want my photo taken at a RealMe partner store</a></label>
    </div>
    </>
  )
}

export default NoPhotoVerification;

import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";


const ApplicationAtStore = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Whakaotihia tō tono ki tētahi toa rangapū o RealMe</h2>
        <hr />
        <h1 className="intro-title">Finish your application at a RealMe partner store</h1>

        <div className="step-container">
          <div className="step-container-box">
                  
                  <p className="value">Fred James Abagnale</p>
                  <br />
                  <p className="label-noblock">Your application number: <strong>ABC123</strong></p>
                  
              </div>
          <div className="spacer-64"></div>
          
          <p className="mb-4">We need to check your details in person and take a photo of you to complete your application.</p>
          <p className="mb-4">We’ve sent a confirmation email to <b>frankabg@gmail.com</b> with these instructions.</p>
          <h2 className="step-title mb-2">What you need to do</h2>
          <p className="mb-4">Visit a RealMe partner store before <b>14 November 2024</b> with:</p>
          <ul className="step-listing">
                <li className="step-item">your application number ABC123</li>
                <li className="step-item"><b>one</b> valid photo ID, which can be any of the following:</li>
                <ul className="step-listing">

                  <li className="step-item">NZ passport</li>
                  <li className="step-item">current NZ driver licence</li>
                  <li className="step-item">HNZ 18+ or Kiwi Access Card</li>
                  <li className="step-item">overseas passport</li>
                </ul>
                <li className="step-item">proof of your name change</li>
                <li className="step-item">proof of your gender change</li>
                <li className="step-item">certificate of identity</li>
                <li className="step-item">refugee travel document</li>

          </ul>
          <br />
          <div className="checkbox-wrapper mb-5">
          <label className="terms-label">You must provide original documents. If you do not have a valid photo ID<a href="https://www.realme.govt.nz/how-apply/find-participating-photostore/" className="cancel-link" onClick={handleCancel}> contact us.</a></label>
          </div>
        </div>
        
      </div>
      <div className="checkbox-wrapper mb-5">
        <label className="terms-label"><a href="https://www.realme.govt.nz/how-apply/find-participating-photostore/" className="cancel-link" onClick={handleCancel}>Find a RealMe partner store</a></label>
      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Back to RealMe"} onClick={handleNext}/>
      
      
    </div>
    </>
  )
}

export default ApplicationAtStore;

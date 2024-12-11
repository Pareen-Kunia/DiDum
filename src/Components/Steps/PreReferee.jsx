import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";


const PreReferee = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Whakaratoa he kaitautoko tuakiri, hei whakaū i ō taipitopito</h2>
        <hr />
        <h1 className="intro-title">Provide an identity referee to confirm your details</h1>

        <div className="step-container">
          
          <p className="mb-4">We need you to provide a referee who can confirm that you are who you say you are.</p>
          <p className="mb-4"><strong>The referee must:</strong></p>
          <ul className="step-listing">
                <li className="step-item">be aged 16 or over</li>
                <li className="step-item">have a current or expired New Zealand passport</li>
                <li className="step-item">have known the applicant for at least 1 year</li>
                <li className="step-item">be able to complete an online identity check</li>
                <li className="step-item">agree to be your referee (we may contact them)</li>
                <li className="step-item">be available if we call or email them to verify details about your application — this will help avoid delays.</li>
          </ul>
          <p className="mb-4"><strong>The referee cannot:</strong></p>
          <ul className="step-listing">
                <li className="step-item">be related to you or part of your extended family (this includes spouses and partners)</li>
                <li className="step-item">live at the same address as you.</li>
          </ul>
          <p className="mb-4"><strong>You need the referee's:</strong></p>
          <ul className="step-listing">
                <li className="step-item">current or expired New Zealand passport number</li>
                <li className="step-item">full name</li>
                <li className="step-item">phone number</li>
                <li className="step-item">date of birth</li>
                <li className="step-item">email address.</li>
          </ul>
        </div>
      </div>
      
      <div className="step-button-container">
        <SubmitButton text={"Continue"} onClick={handleNext}/>
      </div>
      <div className="checkbox-wrapper mb-5">
        <label className="terms-label">If you do not know anyone who can be a referee, you can<a href="javascript:void();" className="cancel-link" onClick={handleCancel}>complete your <br /> application in person at a RealMe partner store.</a></label>
      </div>
    
    </>
  )
}

export default PreReferee;

import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";


const RefereeDetails = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Ngā taipitopito a tō kaitautoko tuakiri</h2>
        <hr />
        <h1 className="intro-title">Your identity referee details</h1>

        <div className="step-container">
          {/* <h2 className="step-title mb-2">Your birth certificate details</h2> */}
          <p className="mb-4">Enter the following details exactly as they appear on the referee's passport.</p>
          <div className="field-wrapper mb-3">
            <label className="field-label">Given name(s)<span className="req-text">*</span></label>
            <input type="text"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Surname or family name<span className="req-text">*</span></label>
            <input type="text"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">New Zealand passport number<span className="req-text">*</span></label>
            <input type="text"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Date of birth<span className="req-text">*</span></label>
            <input type="date"  className="common-field" />
          </div>
        </div>
        <div className="step-container">
          <h2 className="step-title mb-2">How many years has the referee known the applicant?<span className="req-text">*</span></h2>
          <div className="field-wrapper mb-3">
            <input type="number" placeholder="e.g. 4"  className="common-field" />
          </div>
        </div>

        <div className="step-container">
          <h2 className="step-title mb-2">Identity referee contact details</h2>
          <div className="field-wrapper mb-3">
            <label className="field-label">Phone number<span className="req-text">*</span></label>
            <input type="number"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Email address<span className="req-text">*</span></label>
            <input type="number"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Address country<span className="req-text">*</span></label>
            <select className="common-field" >
            <option value=""></option>
              <option value="New Zealand">New Zealand</option>
              <option value="Austrilia">Austrilia</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Phone number<span className="req-text">*</span></label>
            <input type="number"  className="common-field" />
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">Address search<span className="req-text">*</span></label>
            <input type="number"  className="common-field" />
            
          </div>
          <label className="terms-label"><a href="javascript:void();" className="cancel-link">Enter address manually</a></label>

        </div>
        <div className="checkbox-wrapper mb-5">
        <input type="checkbox" id="consent-check" className="terms-check" />
        <label htmlFor="consent-check" className="terms-label">The person stated above has consented to act as an identity referee.</label>

        </div>
        <div className="checkbox-wrapper mb-5">
        <input type="checkbox" id="consent-check" className="terms-check" />
        <label htmlFor="consent-check" className="terms-label">The referee is aware the Department may contact them to verify the<br /> applicant's identity, and the applicant authorises the Department to share <br /> details from their application as part of this verification process.</label>

        </div>
          
          
      </div>
      
      <div className="step-button-container">
        <SubmitButton text={"Submit"} onClick={handleNext}/>
        <BackButton text={"Back"} onClick={handleBack}/>
      </div>
      <div className="checkbox-wrapper mb-5">
        <label className="terms-label">If you do not know anyone who can be a referee, you can<a href="javascript:void();" className="cancel-link" onClick={handleCancel}>complete your <br /> application in person at a RealMe partner store.</a></label>
      </div>
    
    </>
  )
}

export default RefereeDetails;

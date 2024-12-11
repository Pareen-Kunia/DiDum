import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";


const ApplicationSubmit = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Ngā mihi, kua tae mai tō tono</h2>
        <hr />
        <h1 className="intro-title">Thanks, we've received your application</h1>

        <div className="step-container">
          
        <div className="step-container-box">
                
                <p className="value">Fred James Abagnale</p>
                <br />
                <p className="label-noblock">Your application number: <strong>ABC123</strong></p>
                
                
            </div>
        </div>

      </div>
      <div className="step-container">
      <h2 className="step-title mb-2">What happens next?</h2>
      <p className="mb-4">We're processing your application. Check our website for current processing times.</p>
      <label className="terms-label"><a href="javascript:void();" className="cancel-link" onClick={handleCancel}>RealMe — How long it takes to get a verified identity</a></label>
      <p className="mb-4">You'll receive an email confirming your application for a verified identity. We'll contact you if we need more information. When your verified identity is ready to use, we'll send an email to <strong>Adagnale@email.com</strong>.</p>
      <label className="terms-label">If you have any questions, <a href="javascript:void();" className="cancel-link" onClick={handleCancel}>contact us</a>.</label>

      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Back to RealMe"} onClick={handleNext}/>
      
      
    </div>
    
    </>
  )
}

export default ApplicationSubmit;

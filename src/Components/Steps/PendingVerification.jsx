import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";
import InfoIcon from "../../assets/images/Info.svg";

const ReviewPassport = ({handleNext, handleBack}) => {

    const {
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        handleNext();
      }
      
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Tono e tāria ana</h2>
        <hr />
        <h1 className="intro-title">Pending verification</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your application is being processed</h2>
          <p className="mb-4">We're processing your application. Check our website for current processing times.</p>
          <label className="terms-label"><a href="javascript:void();" className="cancel-link" >RealMe — How long it takes to get a verified identity</a></label>
          <p className="mb-4">You'll receive an email confirming your application for a verified identity. We'll contact you if we need more information. When your verified identity is ready to use, we'll send an email to <strong>Adagnale@email.com</strong>.</p>
          <label className="terms-label">If you have any questions, <a href="javascript:void();" className="cancel-link" >contact us</a>.</label>

          <div className="step-button-container"></div>
          <h3 className="step-title mb-2">Your application details</h3>
            <div className="step-container-box">
                <p className="label">Application number</p>
                <p className="value">ABC123</p>
            </div>
            <div className="step-container-box">
                <p className="label">Full name</p>
                <p className="value">Frank Abagnale</p>
            </div>
            <div className="step-container-box">
                <p className="label">Date of birth</p>
                <p className="value">27 April 1948</p>
            </div>
            <div className="step-container-box">
                <p className="label">Place of birth</p>
                <p className="value">Auckland, New Zealand</p>
            </div>
            <div className="step-container-box">
                <p className="label">Gender</p>
                <p className="value">Male</p>
            </div>
            
      </div>
      <div className="step-button-container">
      <SubmitButton text={"Back to RealMe"} type="submit"/>
      
    </div>
    </div>
    </form>
    </>
  )
}

export default ReviewPassport;
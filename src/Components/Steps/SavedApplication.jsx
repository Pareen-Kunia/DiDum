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
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Tono kua tiakina</h2>
        <hr />
        <h1 className="intro-title">Saved application</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">An application is in progress</h2>
          <p className="mb-4">You have previously started an application which is saved. These details will be saved for 30 days.</p> 
          <h3 className="step-title mb-2">To be completed</h3>
          <div className="info"><img src={InfoIcon} alt="Info" />To submit your application, you must complete all sections below.</div>
          <div className="step-container-nospace">
            <div className="step-container-box">
                <p className="label">Tell us about any changes</p>
                
            </div>
            <div className="step-container-box">
                <p className="label">Photo verification</p>
               
            </div>
        
            <div className="step-container-box">
                <p className="label">Referee</p>
                
            </div>
            </div>
            <div className="step-container">
          <h2 className="step-title mb-2">Your application details</h2>
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
          
        </div>
      </div>
      <div className="step-button-container">
      <SubmitButton text={"Continue application"} type="submit"/>
      <BackButton text={"Back"} onClick={handleBack}/>
    </div>
    </form>
    </>
  )
}

export default ReviewPassport;
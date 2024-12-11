import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";

const ReviewPassport = ({handleNext, handleBack}) => {

    const {
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        handleNext();
      }
      console.log(errors,"kjkfsfsdjkl")
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Arotakehia ō taipitopito</h2>
        <hr />
        <h1 className="intro-title">Review your details</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your passport details</h2>
          <div className="step-container-nospace">
            <div className="step-container-box">
                <p className="label">Given name(s)</p>
                <p className="value">Frank</p>
            </div>
            <div className="step-container-box">
                <p className="label">Surname or family name</p>
                <p className="value">Abagnale</p>
            </div>
        
            <div className="step-container-box">
                <p className="label">Passport number</p>
                <p className="value">AB1233472</p>
            </div>
            <div className="step-container-box">
                <p className="label">Date of birth</p>
                <p className="value">27 April 1948</p>
            </div>
            <div className="step-container-box">
                <p className="label">Place of birth (town/city)</p>
                <p className="value">Auckland</p>
            </div>
            <div className="step-container-box">
                <p className="label">Country of birth</p>
                <p className="value">New Zealand</p>
            </div>
            <div className="step-container-box">
                <p className="label">Gender</p>
                <p className="value">Male</p>
            </div>

            
            
          </div>
          
        </div>
      </div>
      <div className="step-button-container">
      <SubmitButton text={"Confirm"} type="submit"/>
      <BackButton text={"Back"} onClick={handleBack}/>
    </div>
    </form>
    </>
  )
}

export default ReviewPassport;
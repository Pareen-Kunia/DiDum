import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";
import InfoIcon from "../../assets/images/Info.svg";

const ReviewCitizenship = ({handleNext, handleBack}) => {

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
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Tono mo to tuakiri kua whakaarohia</h2>
        <hr />
        <h1 className="intro-title">Review your details</h1>

        <div className="step-container">
          <div className="info"><img src={InfoIcon} alt="Info" />Please check this information is correct. This is the information we'll use to verify your identity.</div>
        </div>

        <div className="step-container">
          <h2 className="step-title mb-2">Your citizenship details</h2>
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
                <p className="label">Citizenship certificate number</p>
                <p className="value">AB1233472</p>
            </div>
            <div className="step-container-box">
                <p className="label">Date of birth</p>
                <p className="value">27 April 1948</p>
            </div>
            <div className="step-container-box">
                <p className="label">Place of birth (town/city)</p>
                <p className="value">Sydney</p>
            </div>
            <div className="step-container-box">
                <p className="label">Country of birth</p>
                <p className="value">Australia</p>
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

export default ReviewCitizenship;
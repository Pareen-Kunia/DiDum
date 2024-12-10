import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";
import EditButton from "../Buttons/EditButton";

export const Step4 = ({handleNext, handleBack}) => {

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
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Kōrero mai mēnā he whakahoutanga anō</h2>
        <hr />
        <h1 className="intro-title">Tell us about any changes</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Are the following details correct?</h2>
          <div className="step-container">
            <div className="step-container-box">
                <p className="label">Full name</p>
                <p className="value">Full name</p>
            </div>
            
            <EditButton text={"I’ve changed my name"}/>
            <div className="spacer-64"></div>
            <div className="step-container-box">
                <p className="label">Gender</p>
                <p className="value">Male</p>
            </div>
            <EditButton text={"I’ve changed my gender"}/>
            
          </div>
          
        </div>
      </div>
      <div className="step-button-container">
      <SubmitButton text={"Save and continue"} type="submit"/>
      <BackButton text={"Back"} onClick={handleBack}/>
    </div>
    </form>
    </>
  )
}

export default Step4;
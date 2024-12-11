import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";
import EditButton from "../Buttons/EditButton";
import CancelButton from "../Buttons/CancelButton";

const RequestChangeNameGender = ({handleNext, handleBack}) => {

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
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Kōrero mai mēnā he whakahoutanga anō</h2>
        <hr />
        <h1 className="intro-title">Tell us about any changes</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your name details</h2>
          <div className="step-container-nospace">
            <div className="step-container-box">
                <p className="label">Full name</p>
                <p className="value">Full name</p>
            </div>
            
            <CancelButton text={"Cancel name change"}/>
            <div className="step-container-nospace">
            <div className="field-wrapper mb-4_5">
            <label className="field-label">Select why your name has changed<span className="req-text">*</span></label>
            <select className="common-field" >
            <option value=""></option>
              <option value="New Zealand">New Zealand</option>
              <option value="Austrilia">Austrilia</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
            </div>
            <p className="mb-4">Enter your details exactly as they appear on the document.</p>
            <div className="field-wrapper mb-3">
            <label className="field-label">Given name(s)<span className="req-text">*</span></label>
            <input type="text"  className="common-field" />
            </div>
            
            <div className="field-wrapper mb-4_5">
              <label className="field-label">Surname or family name<span className="req-text">*</span></label>
              <input type="text"  className="common-field" />
            </div>
            <div className="field-wrapper mb-4_5">
              <label className="field-label">Date of name change<span className="req-text">*</span></label>
              <input type="date"  className="common-field" />
            </div>
            <div className="field-wrapper mb-4_5">
            <label className="field-label">Country of name change<span className="req-text">*</span></label>
            <select className="common-field" >
            <option value=""></option>
              <option value="New Zealand">New Zealand</option>
              <option value="Austrilia">Austrilia</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
            </div>
            </div>

            <h2 className="step-title mb-2">Your gender details</h2>
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

export default RequestChangeNameGender;
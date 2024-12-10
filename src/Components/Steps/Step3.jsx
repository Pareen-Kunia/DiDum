import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";

export const Step3 = ({handleNext, handleBack}) => {

    const {
        register,
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
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Körero mai ko wai koe</h2>
        <hr />
        <h1 className="intro-title">Tell us who you are</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your birth certificate details</h2>
          <p className="mb-4">Enter the details exactly as they appear on your birth certificate.</p>
          <div className="field-wrapper mb-3">
            <label className="field-label">Your given name(s)</label>
            <input type="text" placeholder="Enter your name" className="common-field" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Your surname or family name <span className="req-text">*</span></label>
            <input type="text" placeholder="Enter your surname" className="common-field" 
            {...register("surname", { required: "This field is required" })}
            />
          </div>
          {errors?.surname && (
              <p className="error-text">{errors?.surname?.message}</p>
            )}
          <div className="field-wrapper mb-3">
            <label className="field-label">Date of birth <span className="req-text">*</span></label>
            <input type="date" className="common-field" 
            {...register("dateOfBirth", { required: "This field is required" })}
            />
          </div>
          {errors?.dateOfBirth && (
              <p className="error-text">{errors?.dateOfBirth?.message}</p>
            )}
          <div className="field-wrapper mb-3">
            <label className="field-label">Place of birth (town/city) <span className="req-text">*</span></label>
            <select className="common-field" {...register("placeOfBirth", { required: "This field is required" })}>
              <option value="auckland">Auckland</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Tauranga">Tauranga</option>
            </select>
          </div>
          {errors?.placeOfBirth && (
                <p className="error-text">{errors?.placeOfBirth?.message}</p>
              )}
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Country of birth <span className="req-text">*</span></label>
            <select className="common-field" {...register("country", { required: "This field is required" })}>
            <option value="">Select Country</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Austrilia">Austrilia</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
          </div>
          {errors?.gender && (
                <p className="error-text">{errors?.country?.message}</p>
              )}
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Gender <span className="req-text">*</span></label>
            <select className="common-field" {...register("gender", { required: "This field is required" })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors?.gender && (
                <p className="error-text">{errors?.gender?.message}</p>
              )}
          <div className="field-wrapper mb-3">
            <label className="field-label">Parent 1/Mother's given name(s)</label>
            <input type="text" className="common-field" placeholder="Enter Mother given name" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Parent 1/Mother's surname or family name <span className="req-text">*</span></label>
            <input type="text" className="common-field" placeholder="Enter Mother/Family surname" {...register("motherFamily", { required: "This field is required" })}/>
          </div>
          {errors?.motherFamily && (
              <p className="error-text">{errors?.motherFamily?.message}</p>
            )}
          <div className="field-wrapper mb-3">
            <label className="field-label">Parent 2/Father's given name(s)</label>
            <input type="text" className="common-field" placeholder="Enter Father's given name" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Parent 2/Father's surname or family name</label>
            <input type="text" className="common-field" placeholder="Enter Father/Family surname" />
          </div>
        </div>
      </div>
      <div className="step-button-container">
      <SubmitButton text={"Save and continue"} type="submit" onClick={handleNext}/>
      <BackButton text={"Back"} onClick={handleBack}/>
    </div>
    </form>
    </>
  )
}

export default Step3;

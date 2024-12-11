import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";

const Passport = ({handleNext, handleBack}) => {

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
        
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Körero mai ko wai koe</h2>
        <hr />
        <h1 className="intro-title">Tell us who you are</h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your passport details</h2>
          <p className="mb-4">Enter the details exactly as they appear on your passport.</p>
          <div className="field-wrapper mb-3">
            <label className="field-label">Given name(s)<span className="req-text">*</span></label>
            <input type="text" placeholder="Enter your name" className="common-field" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Surname or family name<span className="req-text">*</span></label>
            <input type="text" placeholder="Enter your surname" className="common-field" 
            {...register("surname", { required: "This field is required" })}
            />
          </div>
          {errors?.surname && (
              <p className="error-text">{errors?.surname?.message}</p>
            )}
          
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Passport number<span className="req-text">*</span></label>
            <input type="text" placeholder="AB1233472" className="common-field" 
            {...register("passportNumber", { required: "This field is required" })}
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

export default Passport;

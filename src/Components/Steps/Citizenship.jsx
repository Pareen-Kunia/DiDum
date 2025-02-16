import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";

const Citizenship = ({handleNext, handleBack}) => {

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
        
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Kōrero mai ko wai koe</h2>
        <hr />
        <h1 className="intro-title">Tell us who you are </h1>

        <div className="step-container">
          <h2 className="step-title mb-2">Your citizenship details</h2>
          <p className="mb-4">Enter your details exactly as they appear on your NZ citizenship certificate.</p>
          <div className="field-wrapper mb-3">
            <label className="field-label">Given name(s)<span className="req-text">*</span></label>
            <input type="text"  className="common-field" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Surname or family name<span className="req-text">*</span></label>
            <input type="text"  className="common-field" 
            {...register("surname", { required: "This field is required" })}
            />
          </div>
          {errors?.surname && (
              <p className="error-text">{errors?.surname?.message}</p>
            )}
          
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Citizenship certificate number<span className="req-text">*</span></label>
            <input type="text" placeholder="" className="common-field" 
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

export default Citizenship;

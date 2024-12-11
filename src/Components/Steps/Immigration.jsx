import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";
import BackButton from "../Buttons/BackButton";
import { useForm } from "react-hook-form";

const Immigration = ({handleNext, handleBack}) => {

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
          <h2 className="step-title mb-2">Your details when you entered NZ</h2>
          <p className="mb-4">Enter the details exactly as they appeared on your official travel documents when you entered New Zealand. 
          For example, your passport, visa, or immigration documentation.</p>
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
          <p className="mb-4" style={{"fontSize":14}}>If you have one name please enter it in Surname or family name, and leave Given name(s) blank.</p>
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
            <input type="text" className="common-field" />
          </div>
          {errors?.placeOfBirth && (
                <p className="error-text">{errors?.placeOfBirth?.message}</p>
              )}
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Country of birth <span className="req-text">*</span></label>
            <select className="common-field" {...register("country", { required: "This field is required" })}>
            <option value=""></option>
              <option value="New Zealand">New Zealand</option>
              <option value="Austrilia">Austrilia</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
            </select>
          </div>
          
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Current Passport number<span className="req-text">*</span></label>
            <input type="text" placeholder="WS11111" className="common-field" 
            {...register("passportNumber", { required: "This field is required" })}
            />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Issuing country <span className="req-text">*</span></label>
            <select className="common-field" >
            <option value=""></option>
              <option value="New Zealand">Male</option>
              <option value="Austrilia">Female</option>
              <option value="India">Non-binary</option>
              
            </select>
          </div>
          <div className="field-wrapper mb-3">
            <label className="field-label">NZ immigration visa number <span className="req-text">*</span></label>
            <input type="text" className="common-field" />
          </div>
          <div className="field-wrapper mb-4_5">
            <label className="field-label">Gender <span className="req-text">*</span></label>
            <select className="common-field" >
            <option value=""></option>
              <option value="New Zealand">Male</option>
              <option value="Austrilia">Female</option>
              <option value="India">Non-binary</option>
              
            </select>
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

export default Immigration;
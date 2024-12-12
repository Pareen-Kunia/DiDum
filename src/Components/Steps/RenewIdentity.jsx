import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import Verified from "../../assets/images/Verified.svg";
import Camera from "../../assets/images/Camera.svg";
import SubmitButton from "../Buttons/SubmitButton";
import CancelButton from "../Buttons/CancelButton";
import { useForm } from "react-hook-form";

const RenewIdentity = ({handleNext,handleCancel}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="intro">
        {/* <Progress progress={0} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Tono i tētahi tuakiri hāpono</h2>
        <hr />
        <h1 className="intro-title">Apply for your verified identity</h1>

        <div className="step-container">
          <h2 className="step-title mb-4">How it works </h2>
          <div className="step-wrapper">
            <div className="step-imgbx">
              <img src={Verified} alt="Verified" />
            </div>
            <div>
              <h2 className="step-heading mb-2">1. Tell us about any changes</h2>
              <p className="step-text">Confirm your current details such as name and gender.</p>
            </div>
          </div>
          <div className="step-wrapper align-items-center">
            <div className="step-imgbx">
              <img src={Camera} alt="camera" />
            </div>
            <h2 className="step-heading mb-0">2. Take a live photo using your device</h2>
          </div>
          
        </div>
        <h2 className="step-title mb-2">Terms of use</h2>
        <div className="checkbox-wrapper mb-5">
          <input type="checkbox" id="terms-checkbox" className="terms-check" {...register("terms", { required: "You must accept the terms to proceed." })}/>
          <label className="terms-label" htmlFor="terms-checkbox">I accept the <a href="https://developers.realme.govt.nz/about/new-content-page-2">RealMe Verified Identity Terms of use</a><span className="req-text">*</span></label>
        </div>
        {errors?.terms && (
              <p className="error-text">
                {errors?.terms.message}
              </p>
            )}
      </div>
      <div className="step-button-container">
        <SubmitButton text={"Get Started"} type="submit"/>
        <CancelButton text={"Cancel"} onClick={handleCancel}/>
      </div>
      </form>
      </>
  )
}

export default RenewIdentity;
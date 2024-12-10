import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import Verified from "../../assets/images/Verified.svg";
import Camera from "../../assets/images/Camera.svg";
import Computer from "../../assets/images/Computer.svg";
import InfoIcon from '../../assets/images/Information.svg';
import SubmitButton from "../Buttons/SubmitButton";
import CancelButton from "../Buttons/CancelButton";
import { useForm } from "react-hook-form";

export const Step1 = ({handleNext,handleCancel}) => {
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
              <h2 className="step-heading mb-2">1. Tell us who you are</h2>
              <p className="step-text">Provide the details from <strong>one</strong> of the following official identity documents.</p>
              <ul className="step-listing">
                <li className="step-item">
                  <span className="hover-container">NZ passport <img src={InfoIcon} className="info-icon" alt="Info" /><span className="hover-tooltip">You can use an expired passport.</span></span></li>
                <li className="step-item">NZ birth certificate</li>
                <li className="step-item">NZ citizenship certificate</li>
                <li className="step-item">Overseas passport or NZ immigration travel document</li>
              </ul>
            </div>
          </div>
          <div className="step-wrapper align-items-center">
            <div className="step-imgbx">
              <img src={Camera} alt="camera" />
            </div>
            <h2 className="step-heading mb-0">2. Take a live photo using your device</h2>
          </div>
          <div className="step-wrapper align-items-center">
            <div className="step-imgbx">
              <img src={Computer} alt="computer" />
            </div>
            <h2 className="step-heading mb-0">3. In some cases, you'll need an identity referee to confirm your details</h2>
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

export default Step1;
import React from "react";
import { useForm } from "react-hook-form";
import "../ContentPages/style.css";
import "../ContentPages/identityimagestyle.css";
import BackButton from "../Buttons/BackButton";
import CustomEditButton from "../Buttons/CustomEditButton";
import BrandedInfo from "../../assets/images/BrandedInfo.svg";
import BrandedHistory from "../../assets/images/BrandedHistory.svg";
import CancelIcon from "../../assets/images/Cancel.svg";
import LoadImageIcon from "../../assets/images/LoadImage.svg";

const MyIdentity = ({ handleNext, handleBack }) => {
  const { handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="intro1">
          <h2 className="intro-title" style={{ marginTop: 60 }}>Aku taipitopito tuakiri hāpono</h2>
          <hr />
          <h1 className="intro-title">My verified identity details</h1>

          <div className="step-container1">
            <div className="step-container-details1">
              <div className="step-container-box">
                <p className="label">Full name</p>
                <p className="value">Frank Abagnale</p>
              </div>
              <div className="step-container-box">
                <p className="label">Date of birth</p>
                <p className="value">27 April 1948</p>
              </div>
              <div className="step-container-box">
                <p className="label">Place of birth</p>
                <p className="value">Auckland, New Zealand</p>
              </div>
              <div className="step-container-box">
                <p className="label">Gender</p>
                <p className="value">Male</p>
              </div>
              <div className="step-container-box">
                <p className="label">Status</p>
                <p className="value">Active</p>
              </div>
              <div className="step-container-box">
                <p className="label">Expiry date</p>
                <p className="value">03 July 2025</p>
              </div>
              <div className="step-container-box">
                <p className="label">Gender</p>
                <p className="value">Male</p>
              </div>
              <label className="terms-label" htmlFor="terms-checkbox">
                Use options below to update your name or gender. To correct any other details, <a href='https://www.realme.govt.nz/contact-us/'>contact us</a>.
              </label>
            </div>
            <div>
            <div className="image-container1">
              <center><CustomEditButton icon={LoadImageIcon} text={"View Image"} type="button" /></center>
            </div>
            
            <div className="image-container-text1">
              <h3 className="step-title mb-2">Your identity image</h3>
              <p >This image was captured during your application. See the terms of use for how we'll use this image.</p>
            </div>
            </div>
          </div>

          <div className="step-container-nospace">
            <CustomEditButton text={"Update my name or gender"} onClick={() => { }} type="button" />
            <CustomEditButton text={"View account activity"} onClick={() => { }} type="button" icon={BrandedHistory} />
            <CustomEditButton text={"View shared information"} onClick={() => { }} type="button" icon={BrandedInfo} />
            <CustomEditButton text={"Cancel my verified identity"} onClick={() => { }} type="button" icon={CancelIcon} />
            <BackButton text={"Back"} onClick={handleBack} />
          </div>
        </div>
      </form>
    </>
  );
};

export default MyIdentity;
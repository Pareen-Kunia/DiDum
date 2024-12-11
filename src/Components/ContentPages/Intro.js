import React, { useState } from "react";
import Progress from "../Progress";
import "./style.css";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import BirthCertificate from "../Steps/Birthcertificate";
import Passport from "../Steps/Passport";
import RequestChange from "../Steps/RequestChange";
import ReviewPassport from "../Steps/ReviewPassport";
import PreLiveCheck from "../Steps/PreLiveCheck";
import PostLiveCheck from "../Steps/PostLiveCheck";
import PreReferee from "../Steps/PreReferee";
import RefereeDetails from "../Steps/RefereeDetails";
import ApplicationSubmit from "../Steps/ApplicationSubmit";
import RequestChangeNameGender from "../Steps/RequestChangeNameGender";
import NoPhotoVerification from "../Steps/NoPhotoVerification";
import ApplicationAtStore from "../Steps/ApplicationAtStore";
import Citizenship from "../Steps/Citizenship";
import ReviewCitizenship from "../Steps/ReviewCitizenship";
import Immigration from "../Steps/Immigration";
import SavedApplication from "../Steps/SavedApplication";
import PendingVerification from "../Steps/PendingVerification";

export default function Intro() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const totalSteps = 20;

  const calculateProgress = (currentStep) => {
    return ((currentStep - 1) / totalSteps) * 100;
  };

  const handleNext = () => {
    console.log(step, totalSteps);
    if (step <= totalSteps){ 
      setStep(step + 1);
    }
    setProgress(calculateProgress(step + 1));
  };

  const handleBack = () => {
    if (step > 1){
      setStep(step - 1);
    setProgress(calculateProgress(step - 1));
    }
  };

  const handleCancel = () => {
    setStep(1);
    setProgress(0);
  };

  return (
    <>
    <Progress progress={progress}/>
      {step === 1 && <Step1 handleNext={handleNext} handleCancel={handleCancel} />}
      {step === 2 && <Step2 handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 3 && <Passport handleNext={handleNext} handleBack={handleBack} />}
      {step === 4 && <BirthCertificate handleNext={handleNext} handleBack={handleBack} />}
      {step === 5 && <RequestChange handleNext={handleNext} handleBack={handleBack} />}
      {step === 6 && <ReviewPassport handleNext={handleNext} handleBack={handleBack} />}
      {step === 7 && <PreLiveCheck handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 8 && <PostLiveCheck handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 9 && <PreReferee handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 10 && <RefereeDetails handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 11 && <ApplicationSubmit handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 12 && <RequestChangeNameGender handleNext={handleNext} handleBack={handleBack} />}
      {step === 13 && <NoPhotoVerification handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 14 && <ApplicationAtStore handleNext={handleNext} handleCancel={handleCancel} handleBack={handleBack} />}
      {step === 15 && <Citizenship handleNext={handleNext} handleBack={handleBack} />}
      {step === 16 && <ReviewCitizenship handleNext={handleNext} handleBack={handleBack} />}
      {step === 17 && <Immigration handleNext={handleNext} handleBack={handleBack} />}
      {step === 18 && <SavedApplication handleNext={handleNext} handleBack={handleBack} />}
      {step === 19 && <PendingVerification handleNext={handleNext} handleBack={handleBack} />}

    </>
  );
}

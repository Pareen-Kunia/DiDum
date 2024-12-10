import React, { useState } from "react";
import Progress from "../Progress";
import "./style.css";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";

export default function Intro() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const totalSteps = 4;

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
      {step === 3 && <Step3 handleNext={handleNext} handleBack={handleBack} />}
      {step === 4 && <Step4 handleNext={handleNext} handleBack={handleBack} />}
    </>
  );
}

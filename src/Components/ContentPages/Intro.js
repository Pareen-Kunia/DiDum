import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Progress from "../Progress";
import steps from "./ComponentMap";
import "./style.css";

export default function Intro() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(true);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = (currentStep) => {
    const stepKeys = Object.keys(steps);
    const nextIndex = stepKeys.indexOf(currentStep) + 1;
    if (nextIndex < stepKeys.length) {
      const nextStep = stepKeys[nextIndex];
      navigate(nextStep);
      setProgress(steps[nextStep].progress);
      setShowProgress(steps[nextStep].showProgress);
    }
  };

  const handleBack = (currentStep) => {
    const stepKeys = Object.keys(steps);
    const prevIndex = stepKeys.indexOf(currentStep) - 1;
    if (prevIndex >= 0) {
      const prevStep = stepKeys[prevIndex];
      navigate(prevStep);
      setProgress(steps[prevStep].progress);
      setShowProgress(steps[prevStep].showProgress);
    }
  };

  const handleCancel = () => {
    navigate("/step1");
    setProgress(steps["/step1"].progress);
    setShowProgress(steps["/step1"].showProgress);
  };

  return (
    <React.Fragment>
      {showProgress && <Progress progress={progress} />}
      <Routes>
        {Object.entries(steps).map(([path, { component: Component }], index) => (
          <Route 
            key={path} 
            path={path} 
            element={
              <Component
                handleNext={() => handleNext(path)}
                handleBack={() => handleBack(path)}
                handleCancel={handleCancel}
              />
            } 
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

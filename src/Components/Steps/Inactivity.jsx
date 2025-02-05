import React     from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";

export const Inactive = () => {

  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={0} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Kua takiputa koe</h2>
        <hr />
        <h1 className="intro-title">You've been logged out</h1>

        <div className="step-container">
          
          <p className="mb-4">You've been inactive for 15 minutes and have been logged out for your security.</p>
          <p className="mb-4">The completed sections of your application have been saved, but you need to restart any incomplete sections.
          </p>
          <p className="mb-4">Log in again to continue your application.</p>
        </div>
        <div className="step-button-container">
            <SubmitButton text={"Login"} />
        </div>
    </div>
    
    </>
  )
}

export default Inactive;
import React from "react";
import Progress from "../Progress";
import "./style.css";
import Verified from "../../assets/images/Verified.svg";

export default function Intro() {
  return (
    <div className="intro">
        <Progress progress={0} />
        <h2 className="intro-title" style={{"marginTop":60}}>Tono i tētahi tuakiri hāpono</h2>
        <hr />
        <h1 className="intro-title">Apply for your verified identity</h1>
   
        <div className="step-container">
            <h2 className="step-title">How it works </h2>
            
        </div>

        
    </div>
    
  );
}
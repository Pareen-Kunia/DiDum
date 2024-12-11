import React from "react";
// import Progress from "../Progress";
import "../ContentPages/style.css";
import SubmitButton from "../Buttons/SubmitButton";


const PostLiveCheck = ({handleNext, handleCancel,handleBack}) => {
  return (
    <>
   
    <div className="intro">
        {/* <Progress progress={40} /> */}
        <h2 className="intro-title" style={{ "marginTop": 60 }}>Ngā mihi, kua oti i a koe te hāpono whakaahua</h2>
        <hr />
        <h1 className="intro-title">Thanks, you've completed photo verification</h1>

        <div className="step-container">
          
          <p className="mb-4">We're reviewing your photo to check it matches other records we have of you.</p>
          <p className="mb-4">You can request access to the photo you've just taken — see the Privacy statement for details.</p>
          <label className="terms-label">
            <a href="javascript:void();" className="cancel-link" onClick={handleCancel}>Privacy statement — Identity Verification Service &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5725 0.843745V5.34316C20.5725 6.09764 19.6453 6.46745 19.1092 5.93979L17.8339 4.6844L9.1366 13.2457C8.80185 13.5752 8.25917 13.5752 7.92441 13.2457L7.1163 12.4502C6.78155 12.1207 6.78155 11.5865 7.1163 11.257L15.8137 2.69563L14.5386 1.44038C14.0003 0.910542 14.3815 0 15.1447 0L19.7153 0C20.1887 0 20.5725 0.377752 20.5725 0.843745ZM14.5369 9.52006L13.9655 10.0826C13.8047 10.2408 13.7144 10.4554 13.7144 10.6792V15.7499H2.28574V4.49998H11.7144C11.9417 4.49997 12.1597 4.41109 12.3205 4.25287L12.8919 3.69038C13.4319 3.15882 13.0494 2.25 12.2858 2.25H1.7143C0.767507 2.25 0 3.0055 0 3.93749L0 16.3124C0 17.2444 0.767507 17.9999 1.7143 17.9999H14.2858C15.2326 17.9999 16.0001 17.2444 16.0001 16.3124V10.1167C16.0001 9.36495 15.0769 8.9885 14.5369 9.52006Z" fill="#D64309"/>
              </svg>
            </a>
          </label>
        </div>
      </div>
      
      <div className="step-button-container">
      <SubmitButton text={"Continue"} onClick={handleNext}/>
      
      
    </div>
    
    </>
  )
}

export default PostLiveCheck;

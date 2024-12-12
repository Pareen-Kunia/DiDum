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
import RenewIdentity from "../Steps/RenewIdentity";
import MyIdentity from "../Steps/MyIdentity";

const steps = {
  "/": { component: Step1, progress: 5, showProgress: true },
  "/step1": { component: Step1, progress: 5, showProgress: true },
  "/step2": { component: Step2, progress: 10, showProgress: true },
  "/passport": { component: Passport, progress: 15, showProgress: true },
  "/birth-certificate": { component: BirthCertificate, progress: 20, showProgress: true },
  "/request-change": { component: RequestChange, progress: 25, showProgress: true },
  "/review-passport": { component: ReviewPassport, progress: 30, showProgress: true },
  "/pre-live-check": { component: PreLiveCheck, progress: 35, showProgress: true },
  "/post-live-check": { component: PostLiveCheck, progress: 40, showProgress: true },
  "/pre-referee": { component: PreReferee, progress: 45, showProgress: true },
  "/referee-details": { component: RefereeDetails, progress: 50, showProgress: true },
  "/application-submit": { component: ApplicationSubmit, progress: 55, showProgress: true },
  "/request-change-name-gender": { component: RequestChangeNameGender, progress: 60, showProgress: true },
  "/no-photo-verification": { component: NoPhotoVerification, progress: 65, showProgress: true },
  "/application-at-store": { component: ApplicationAtStore, progress: 70, showProgress: true },
  "/citizenship": { component: Citizenship, progress: 75, showProgress: true },
  "/review-citizenship": { component: ReviewCitizenship, progress: 80, showProgress: true },
  "/immigration": { component: Immigration, progress: 85, showProgress: true },
  "/saved-application": { component: SavedApplication, progress: 90, showProgress: true },
  "/pending-verification": { component: PendingVerification, progress: 95, showProgress: true },
  "/renew-identity": { component: RenewIdentity, progress: 100, showProgress: true },
  "/my-identity": { component: MyIdentity, progress: 100, showProgress: false },
};

export default steps;

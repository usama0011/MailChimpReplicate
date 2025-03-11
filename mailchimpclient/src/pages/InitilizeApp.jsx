import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Test from "./Test";
import AllCampaings from "./AllCampaings";
import Account from "./Account";
import MarkingDashboard from "./MarkingDashboard";
import AudienceAnalytics from "./AudienceAnalytics";
import CustomReports from "./CustomReports";
import AutomationOver from "./AutomationOver";
import CustomJourneys from "./CustomJourneys";
import NewCompaing from "./NewCompaing";
import Website from "./Website";
import WebsiteSetting from "./WebsiteSetting";
import WebsiteReports from "./WebsiteReports";
import CreativeAssistence from "./CreativeAssistence";
import Discover from "./Discover";
import IntegrationManage from "./IntegrationManage";
import EmailRegular from "./EmailRegular";
import EmailPlainText from "./EmailPlainText";
import Multivariate from "./Multivariate";
import EmailTemplate from "./EmailTemplate";
import Automations from "./Automations";
import NewCampaingWebsite from "./NewCampaingWebsite";
import NewCampaingLandingPage from "./NewCampaingLandingPage";
import SignUpEmbaddedForm from "./SignUpEmbaddedForm";
import SignUpPopUpForm from "./SignUpPopUpForm";
import SignUpLandingPage from "./SignUpLandingPage";
import Survays from "./Survays";
import FacebookInstaAd from "./FacebookInstaAd";
import GoogleMarktingAd from "./GoogleMarktingAd";
import SocialPost from "./SocialPost";
import PostCardOneTimeSend from "./PostCardOneTimeSend";
import PostCardRecurring from "./PostCardRecurring";
import AbandonedCart from "./AbandonedCart";
import CreateEmail from "./CreateEmail";
import ChooseEmail from "./ChooseEmail";
import TransactionalEmail from "./TransactionalEmail";
import AudienceDashboard from "./AudienceDashboard";
import SignupForms from "./SignupForms";
import Tags from "./Tags";
import Segments from "./Segments";
import MailChimpSurvey from "./MailChimpSurvey";
import Reports from "./Reports";
import ViewCompaing from "./ViewCompaing";
import TestEditor from "./TestEditor";
import SideBar from "../components/SideBar";
import AllContacts from "./AllContacts";
import EditCompaing from "./EditCompaing";
import AddContact from "./AddContact";
import HidePages from "./HidePages";
import ViewAllComapingHide from "./ViewAllComapingHide";
import HideEditComaping from "./HideEditComaping";
import ViewReport from "./ViewReport";
import UpdateReport from "./UpdateReport";
import MyReports from "./MyReports";
import EditReport from "./EditReport";
import AddFrom from "./AddFrom";
import ViewFroms from "./ViewFroms";
import EditMyFrom from "./EditMyFrom";
import FileUPloadContact from "./FileUPloadContact";
import UploadLargeData from "./UploadContacts";
import LargeCampaignEdit from "./LargeCampaing";
import UpdateLargeCampaing from "./UpdateLargeCampaing";

const InitilizeApp = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCampaings />} />
      <Route path="/sidebar" element={<SideBar />} />
      <Route path="/editfrom/:id" element={<EditMyFrom />} />
      <Route path="/updatelarge/:id" element={<UpdateLargeCampaing />} />
      <Route path="/myreports" element={<MyReports />} />
      <Route path="/myreports/:id" element={<EditReport />} />
      <Route path="/viewallcompaingshides" element={<ViewAllComapingHide />} />
      <Route path="/hideeditcompaing/:id" element={<HideEditComaping />} />
      <Route path="/viewreport/:id" element={<UpdateReport />} />
      <Route path="/hidepages" element={<HidePages />} />
      <Route path="/fileuplaods" element={<FileUPloadContact />} />
      <Route path="/addcontacts" element={<AddContact />} />
      <Route path="/viewlargecampaingspage" element={<LargeCampaignEdit />} />
      <Route path="/email/editor" element={<TestEditor />} />
      <Route path="/allcompaings/:id" element={<ViewCompaing />} />
      <Route path="/reports/:id" element={<ViewReport />} />
      <Route path="/login" element={<Login />} />
      <Route path="/allcontacts" element={<AllContacts />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/editcompaing/:id" element={<EditCompaing />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/mailchimpsurvy" element={<MailChimpSurvey />} />
      <Route path="/segments" element={<Segments />} />
      <Route path="/test" element={<Test />} />
      <Route path="/signupforms" element={<SignupForms />} />
      <Route path="/choosetemplate" element={<ChooseEmail />} />
      <Route path="/from" element={<AddFrom />} />
      <Route path="/audiencedashboard" element={<AudienceDashboard />} />
      <Route path="/allcompaings" element={<AllCampaings />} />
      <Route path="/viewfroms" element={<ViewFroms />} />
      <Route path="/marketingdashboard" element={<MarkingDashboard />} />
      <Route path="/audienceanalytics" element={<AudienceAnalytics />} />
      <Route path="/customreports" element={<CustomReports />} />
      <Route path="/automationoverview" element={<AutomationOver />} />
      <Route path="/account" element={<Account />} />
      <Route path="/customjourneys" element={<CustomJourneys />} />
      <Route path="/websiteoverview" element={<Website />} />
      <Route path="/newcomaping" element={<NewCompaing />} />
      <Route path="/websitesetting" element={<WebsiteSetting />} />
      <Route path="/websitereports" element={<WebsiteReports />} />
      <Route path="/creativeassistant" element={<CreativeAssistence />} />
      <Route path="/integrationdiscover" element={<Discover />} />
      <Route path="/integrationmanage" element={<IntegrationManage />} />
      <Route path="/emailregular" element={<EmailRegular />} />
      <Route path="/emailplaintext" element={<EmailPlainText />} />
      <Route path="/emailmultvariate" element={<Multivariate />} />
      <Route path="/emailtemplate" element={<EmailTemplate />} />
      <Route path="/newcampaingsautomations" element={<Automations />} />
      <Route path="/newcampaingwebsite" element={<NewCampaingWebsite />} />
      <Route path="/signupembaddedform" element={<SignUpEmbaddedForm />} />
      <Route path="/signuppopupform" element={<SignUpPopUpForm />} />
      <Route path="/signuplandingpage" element={<SignUpLandingPage />} />
      <Route path="/newcampaingsurverys" element={<Survays />} />
      <Route path="/transactional" element={<TransactionalEmail />} />
      <Route path="/uploadlargedta" element={<UploadLargeData />} />
      <Route
        path="/newcampaingfacebookinstaads"
        element={<FacebookInstaAd />}
      />
      <Route
        path="/newcampainggooglemarketingads"
        element={<GoogleMarktingAd />}
      />
      <Route path="/newcampaing/createemail" element={<CreateEmail />} />
      <Route
        path="/newcampainpostcardonetimesend"
        element={<PostCardOneTimeSend />}
      />
      <Route
        path="/newcampainpostcardonerecurring"
        element={<PostCardRecurring />}
      />
      <Route path="/newcampainpostabanddone" element={<AbandonedCart />} />
      <Route path="/newcampaingsocialpost" element={<SocialPost />} />
      <Route
        path="/newcampainglandingpage"
        element={<NewCampaingLandingPage />}
      />
      <Route path="*" element={<AllCampaings />} />
    </Routes>
  );
};

export default InitilizeApp;

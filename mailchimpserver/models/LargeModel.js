// models/LargeCampaign.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const ClickPerformanceEmailSchema = new Schema(
  {
    cpelink: { type: String, required: false },
    cpeclicks: { type: String, required: false },
    cpepercentage: { type: String, required: false },
    cpeuniquelinks: { type: String, required: false },
    cpeuniqueclickpercentage: { type: String, required: false },
  },
  { _id: false }
);

const EmailDomainPerformanceSchema = new Schema(
  {
    edpdomain: { type: String, required: false },
    edpemailCount: { type: String, required: false },
    edpemailPercentage: { type: String, required: false },
    edpbouncesCount: { type: String, required: false },
    edpbouncesPercentage: { type: String, required: false },
    edpopensCount: { type: String, required: false },
    edpopensPercentage: { type: String, required: false },
    edpclicksCount: { type: String, required: false },
    edpclicksPercentage: { type: String, required: false },
    edpunsubsCount: { type: String, required: false },
    edpunsubsPercentage: { type: String, required: false },
    edpdomainTwo: { type: String, required: false },
    edpemailCountTwo: { type: String, required: false },
    edpemailPercentageTwo: { type: String, required: false },
    edpbouncesCountTwo: { type: String, required: false },
    edpbouncesPercentageTwo: { type: String, required: false },
    edpopensCountTwo: { type: String, required: false },
    edpopensPercentageTwo: { type: String, required: false },
    edpclicksCountTwo: { type: String, required: false },
    edpclicksPercentageTwo: { type: String, required: false },
    edpunsubsCountTwo: { type: String, required: false },
    edpunsubsPercentageTwo: { type: String, required: false },
    edpdomainThree: { type: String, required: false },
    edpemailCountThree: { type: String, required: false },
    edpemailPercentageThree: { type: String, required: false },
    edpbouncesCountThree: { type: String, required: false },
    edpbouncesPercentageThree: { type: String, required: false },
    edpopensCountThree: { type: String, required: false },
    edpopensPercentageThree: { type: String, required: false },
    edpclicksCountThree: { type: String, required: false },
    edpclicksPercentageThree: { type: String, required: false },
    edpunsubsCountThree: { type: String, required: false },
    edpunsubsPercentageThree: { type: String, required: false },
    edpdomainFour: { type: String, required: false },
    edpemailCountFour: { type: String, required: false },
    edpemailPercentageFour: { type: String, required: false },
    edpbouncesCountFour: { type: String, required: false },
    edpbouncesPercentageFour: { type: String, required: false },
    edpopensCountFour: { type: String, required: false },
    edpopensPercentageFour: { type: String, required: false },
    edpclicksCountFour: { type: String, required: false },
    edpclicksPercentageFour: { type: String, required: false },
    edpunsubsCountFour: { type: String, required: false },
    edpunsubsPercentageFour: { type: String, required: false },
    edpdomainFive: { type: String, required: false },
    edpemailCountFive: { type: String, required: false },
    edpemailPercentageFive: { type: String, required: false },
    edpbouncesCountFive: { type: String, required: false },
    edpbouncesPercentageFive: { type: String, required: false },
    edpopensCountFive: { type: String, required: false },
    edpopensPercentageFive: { type: String, required: false },
    edpclicksCountFive: { type: String, required: false },
    edpclicksPercentageFive: { type: String, required: false },
    edpunsubsCountFive: { type: String, required: false },
    edpunsubsPercentageFive: { type: String, required: false },
    edpdomainSix: { type: String, required: false },
    edpemailCountSix: { type: String, required: false },
    edpemailPercentageSix: { type: String, required: false },
    edpbouncesCountSix: { type: String, required: false },
    edpbouncesPercentageSix: { type: String, required: false },
    edpopensCountSix: { type: String, required: false },
    edpopensPercentageSix: { type: String, required: false },
    edpclicksCountSix: { type: String, required: false },
    edpclicksPercentageSix: { type: String, required: false },
    edpunsubsCountSix: { type: String, required: false },
    edpunsubsPercentageSix: { type: String, required: false },
  },
  { _id: false }
);

const LargeCampaignSchema = new Schema(
  {
    campaignName: { type: String, required: false },
    campaignImage: { type: String, required: false },
    campaignType: { type: String, required: false },
    lastEditDate: { type: String, required: false },
    editedByUsername: { type: String, required: false },
    sendTime: { type: String, required: false },
    sendTime: { type: String, required: false },
    audienceName: { type: String, required: false },
    audienceRecipients: { type: String, required: false },
    opened: { type: String, required: false },
    clicks: { type: String, required: false },
    openedPercentage: { type: String, required: false },
    clickedPercentage: { type: String, required: false },
    subject: { type: String, required: false },
    deliveredDate: { type: String, required: false },
    bounced: { type: String, required: false },
    unsubscribed: { type: String, required: false },
    successfulDeliveriesCount: { type: String, required: false },
    successfulDeliveriesPercentage: { type: String, required: false },
    clickPerUniqueOpens: { type: String, required: false },
    lastOpened: { type: String, required: false },
    lastClicked: { type: String, required: false },
    forwarded: { type: String, required: false },
    abuseReports: { type: String, required: false },
    orders: { type: String, required: false },
    averageOrderRevenue: { type: String, required: false },
    totalRevenue: { type: String, required: false },
    clickPerformanceLink: { type: String, required: false },
    clickPerformanceCount: { type: String, required: false },
    emailOne: { type: String, required: false },
    emailTwo: { type: String, required: false },
    emailThree: { type: String, required: false },
    emailOneC: { type: String, required: false },
    emailTwoC: { type: String, required: false },
    emailThreeC: { type: String, required: false },
    tweets: { type: String, required: false },
    campaignUrlClicks: { type: String, required: false },
    clickPerformanceEmail: ClickPerformanceEmailSchema,
    emailDomainPerformance: EmailDomainPerformanceSchema,
    TLCLinkOneTitle: { type: String, required: false },
    TLCLinkOneValue: { type: String, required: false },
    TLCLinkOnePercentage: { type: String, required: false },
    TCLUniqueClicksOne: { type: String, required: false },
    TCLUniquePercentageOne: { type: String, required: false },
    TLCLinkTwoTitle: { type: String, required: false },
    TLCLinkTwoValue: { type: String, required: false },
    TLCLinkTwoPercentage: { type: String, required: false },
    TCLUniqueClicksTwo: { type: String, required: false },
    TCLUniquePercentageTwo: { type: String, required: false },
    TLCLinkThreeTitle: { type: String, required: false },
    TLCLinkThreeValue: { type: String, required: false },
    TLCLinkThreePercentage: { type: String, required: false },
    TCLUniqueClicksThree: { type: String, required: false },
    TCLUniquePercentageThree: { type: String, required: false },
    TLCLinkFourTitle: { type: String, required: false },
    TLCLinkFourValue: { type: String, required: false },
    TLCLinkFourPercentage: { type: String, required: false },
    TCLUniqueClicksFour: { type: String, required: false },
    TCLUniquePercentageFour: { type: String, required: false },
    bouncedpercentage: { type: String, required: false },
    unsubscribedpercentage: { type: String, required: false },
  },
  { timestamps: true }
);

const LargeCampaign = mongoose.model("LargeCampaign", LargeCampaignSchema);
export default LargeCampaign;

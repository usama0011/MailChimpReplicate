import mongoose from "mongoose";

const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    recipients: {
      type: String,
    },
    Audience: {
      type: String,
    },
    subject: {
      type: String,
    },
    deliveredtime: {
      type: String,
    },
    opened: {
      type: String,
    },
    clicked: {
      type: String,
    },
    sendtime: {
      type: String,
    },
    chooseemailtemplate: {
      type: String,
    },
    comapingemail: {
      type: String,
    },
    previewtext: {
      type: String,
    },
    bounced: {
      type: String,
    },
    unsubscribed: {
      type: String,
    },
    Successfuldeliveries: {
      type: String,
    },
    bounced: {
      type: String,
    },
    Clicksperuniqueopens: {
      type: String,
    },
    Totalopens: {
      type: String,
    },
    Lastopened: {
      type: String,
    },
    lastCliked: {
      type: String,
    },
    Forwarded: {
      type: String,
    },
    Abusereports: {
      type: String,
    },
    Orders: {
      type: String,
    },
    clickpercentge: {
      type: String,
    },
    openedpercentage: {
      type: String,
    },
    Averageorderrevenue: {
      type: String,
    },
    Totalrevenue: {
      type: String,
    },
    Toplinksclicked: {
      type: [
        {
          linkname: { type: String },
          linkvalue: { type: String },
        },
      ],
    },
    male: {
      type: String,
    },
    female: {
      type: String,
    },
    otherIdentity: {
      type: String,
    },
    unknow: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("NewReport", reportSchema);

// addmore  here

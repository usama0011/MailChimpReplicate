import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    emailaddress: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    address: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    birthday: {
      type: String,
    },
    tags: {
      type: String,
    },
    emailmarkting: {
      type: String,
    },
    source: {
      type: String,
    },
    contactrating: {
      type: String,
    },
    contactDateAdded: {
      type: String,
    },
    lastChanged: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("NewContact", contactSchema);

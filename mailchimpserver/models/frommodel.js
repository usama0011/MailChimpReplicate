import mongoose from "mongoose";

const { Schema } = mongoose;

const fromSchema = new Schema(
    {
        from: {
            type: String,
        }
    },
    { timestamps: true }
);

export default mongoose.model("From", fromSchema);

// addmore  here
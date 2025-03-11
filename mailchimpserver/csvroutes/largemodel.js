import express from "express";
import multer from "multer";
import csv from "csv-parser";
import { Readable } from "stream"; // Import Readable for stream processing
import LargeCampaign from "../models/LargeModel.js"; // Adjust the path based on your project structure

const router = express.Router();

// Use memory storage to avoid using the file system
const upload = multer({ storage: multer.memoryStorage() });

// Route to upload CSV
router.post("/upload", upload.single("file"), (req, res) => {
  const results = [];

  // Create a readable stream from the buffer
  const stream = Readable.from(req.file.buffer.toString());

  stream
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      // Save to database
      try {
        await LargeCampaign.insertMany(results);
        res
          .status(200)
          .json({ message: "CSV data uploaded successfully", data: results });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error saving data to the database", error });
      }
    })
    .on("error", (error) => {
      res.status(500).json({ message: "Error processing CSV data", error });
    });
});

// Route to view all data with pagination
router.get("/view", async (req, res) => {
  const { page = 1, limit = 50 } = req.query; // Default to page 1 and 50 items per page

  try {
    // Ensure `sendTime` is treated as a Date in MongoDB aggregation
    const campaigns = await LargeCampaign.aggregate([
      {
        $addFields: {
          sendTimeISO: { $toDate: "$sendTime" }, // Convert string date to actual Date object
        },
      },
      { $sort: { sendTimeISO: -1 } }, // Sort by Date (latest first)
      { $skip: (page - 1) * limit },
      { $limit: parseInt(limit) },
      { $project: { sendTimeISO: 0 } }, // Remove temporary field from output
    ]);

    const totalCampaigns = await LargeCampaign.countDocuments();

    const startItem = (page - 1) * limit + 1;
    const endItem = Math.min(page * limit, totalCampaigns);

    res.status(200).json({
      campaigns,
      totalPages: Math.ceil(totalCampaigns / limit),
      currentPage: parseInt(page),
      totalCampaigns,
      showingResults: `${startItem} - ${endItem} of ${totalCampaigns}`,
      totalCampaignsLength: totalCampaigns, // Added total campaigns length for frontend display
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving data from the database",
      error: error.message,
    });
  }
});

// Route to view all data
router.get("/view/all", async (req, res) => {
  try {
    const campaigns = await LargeCampaign.find({});
    res.status(200).json(campaigns);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving data from the database", error });
  }
});

// Route to view a single campaign by ID
router.get("/view/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters

  try {
    const campaign = await LargeCampaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving campaign from the database", error });
  }
});

// Route to update a campaign by ID
router.put("/view/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  const updateData = req.body; // Data to update

  try {
    const updatedCampaign = await LargeCampaign.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run validators on the updated data
      }
    );

    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res
      .status(200)
      .json({ message: "Campaign updated successfully", updatedCampaign });
  } catch (error) {
    res.status(500).json({ message: "Error updating campaign", error });
  }
});

// Route to delete a campaign by ID
router.delete("/view/:id", async (req, res) => {
  const { id } = req.params; // Extract ID from request parameters

  try {
    const deletedCampaign = await LargeCampaign.findByIdAndDelete(id);

    if (!deletedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting campaign", error });
  }
});

export default router;

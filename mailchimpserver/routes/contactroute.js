// routes/contactRoutes.js
import express from "express";
import multer from "multer";
import csv from "csv-parser";
import Contact from "../models/contactmodel.js";
import { Readable } from "stream"; // Import Readable for stream handling

const router = express.Router();

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle CSV upload for contacts
router.post("/uploadContacts", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const results = [];
    const fileBuffer = req.file.buffer.toString("utf8");
    const readableStream = Readable.from(fileBuffer.split("\n"));

    await new Promise((resolve, reject) => {
      readableStream
        .pipe(csv())
        .on("data", (data) => {
          // Ensure all necessary fields are present before pushing to results
          if (data.emailaddress && data.firstname && data.lastname) {
            results.push({
              emailaddress: data.emailaddress,
              firstname: data.firstname,
              lastname: data.lastname,
              address: data.address || "", // Default to empty string if not provided
              phonenumber: data.phonenumber || "",
              birthday: data.birthday || "",
              tags: data.tags || "",
              emailmarkting: data.emailmarkting || "",
              source: data.source || "",
              contactrating: data.contactrating || "",
              contactDateAdded: data.contactDateAdded || "",
              lastChanged: data.lastChanged || "",
            });
          }
        })
        .on("end", resolve)
        .on("error", (error) => {
          console.error("Error parsing CSV:", error.message);
          reject(error);
        });
    });

    // Insert the parsed data into the MongoDB collection
    if (results.length > 0) {
      console.log("Inserting contacts:", results);
      await Contact.insertMany(results);
    } else {
      return res.status(400).json({
        success: false,
        message: "No valid contacts found in the uploaded file.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contacts data successfully uploaded",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Error inserting contacts data",
      errormsg: error.message,
    });
  }
});

import dayjs from "dayjs"; // Ensure dayjs is imported

router.get("/getAllContacts", async (req, res) => {
  try {
    const {
      page = 1,
      pageSize = 10,
      campaignId,
      currentCount = 100,
      filterStartDate,
      filterEndDate,
    } = req.query;

    console.log(
      "Received Dates from Frontend:",
      filterStartDate,
      filterEndDate
    );

    // Convert pageSize & currentCount to numbers
    const parsedPageSize = parseInt(pageSize);
    const parsedCurrentCount = parseInt(currentCount);

    // Initialize query
    let query = {};

    // **Check if Start Date or End Date exist and filter correctly**
    if (filterStartDate || filterEndDate) {
      query.lastChanged = {};

      if (filterStartDate) {
        let formattedStartDate = dayjs(filterStartDate, "MMM DD, YYYY").format(
          "DD/MM/YYYY"
        );
        query.lastChanged.$gte = formattedStartDate;
      }
      if (filterEndDate) {
        let formattedEndDate = dayjs(filterEndDate, "MMM DD, YYYY").format(
          "DD/MM/YYYY"
        );
        query.lastChanged.$lte = formattedEndDate;
      }
    }

    console.log("MongoDB Query Filter:", JSON.stringify(query, null, 2));

    // Fetch only the first `currentCount` records from the database
    let contactsQuery = Contact.find(query).limit(parsedCurrentCount);

    // Apply pagination on the fetched `currentCount` records
    let contacts = await contactsQuery
      .skip((page - 1) * parsedPageSize)
      .limit(parsedPageSize);

    // ✅ Ensure lastChanged format remains "DD/MM/YYYY HH:mm"
    contacts = contacts.map((contact) => {
      return {
        ...contact._doc,
      };
    });

    // Debug the actual fetched data
    console.log("Fetched Contacts:", contacts.length);

    // Shuffle contacts when campaignId changes
    if (campaignId) {
      contacts = contacts.sort(() => Math.random() - 0.5); // Simple shuffle logic
    }

    const total = await Contact.countDocuments(query); // Count filtered records

    res.status(200).json({
      success: true,
      data: contacts, // Send paginated contacts from `currentCount`
      total, // Send total count for pagination
    });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      errormsg: error.message,
    });
  }
});

export default router;

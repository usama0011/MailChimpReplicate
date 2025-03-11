import React, { useState } from "react";
import axios from "axios";
import { Upload, Button, message, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { Title } = Typography;

const FileUploadContact = () => {
  const [file, setFile] = useState(null); // Store the selected file
  const [loading, setLoading] = useState(false); // Store loading state

  // Handle file selection through drag-and-drop or file input
  const handleFileChange = (info) => {
    if (info.fileList.length > 0) {
      setFile(info.fileList[0].originFileObj); // Save the first file from the list
      message.success("File selected successfully.");
    } else {
      setFile(null);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      message.error("Please select or drag a file first.");
      return;
    }

    setLoading(true); // Show loading state

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://latest-mail-chimp-server.vercel.app/api/contacts/uploadContacts", // Replace with your API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message || "Upload failed.");
      }
    } catch (error) {
      setLoading(false);
      message.error("Error uploading file.");
    }
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Upload CSV File for Contacts
      </Title>

      {/* Drag and drop area */}
      <Dragger
        onChange={handleFileChange}
        beforeUpload={() => false} // Prevent automatic upload on file selection
        style={styles.dragger}
        accept=".csv" // Only accept CSV files
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag CSV file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for single upload. Only CSV files are accepted.
        </p>
      </Dragger>

      {/* Upload button */}
      <Button
        type="primary"
        onClick={handleUpload}
        style={styles.uploadButton}
        loading={loading} // Show loading state
        icon={<UploadOutlined />}
      >
        {loading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "30px auto",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  dragger: {
    padding: "20px",
    backgroundColor: "#fafafa",
    border: "2px dashed #d9d9d9",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  uploadButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
};

export default FileUploadContact;

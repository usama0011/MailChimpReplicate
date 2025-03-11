import React, { useState } from "react";
import { Upload, message, Button, Typography } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { Dragger } = Upload;
const { Title } = Typography;

const UploadLargeData = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (info) => {
    if (info.fileList.length > 0) {
      setFile(info.fileList[0].originFileObj);
      message.success("File selected successfully.");
    } else {
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      message.error("Please select a file to upload.");
      return;
    }

    setLoading(true); // Show loading state

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://latest-mail-chimp-server.vercel.app/api/largecampaigns/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      message.success("Upload successful: " + response.data.message);
    } catch (error) {
      setLoading(false);
      message.error(
        "Error uploading file: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Upload Large Data File
      </Title>

      {/* Drag and drop area */}
      <Dragger
        accept=".csv"
        beforeUpload={() => false}
        onChange={handleChange}
        style={styles.dragger}
        multiple={false}
        maxCount={1}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Supports single CSV file upload.</p>
      </Dragger>

      {/* Upload button */}
      <Button
        type="primary"
        onClick={handleUpload}
        style={styles.uploadButton}
        loading={loading}
        icon={<UploadOutlined />}
      >
        {loading ? "Uploading..." : "Upload CSV"}
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

export default UploadLargeData;

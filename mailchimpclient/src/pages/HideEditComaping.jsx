import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, message, Spin } from "antd";
import { useParams } from "react-router-dom";

const HideEditComaping = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data for the specific campaign on component mount
  useEffect(() => {
    const fetchCampaignData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://latest-mail-chimp-server.vercel.app/api/newcompaing/${id}`
        );
        form.setFieldsValue(response.data); // Populate form with fetched data
        setLoading(false);
      } catch (err) {
        setError("Error fetching campaign data");
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, [id, form]);

  // Handle form submission
  const onFinish = async (values) => {
    setSaving(true);
    try {zz
      await axios.put(
        `https://latest-mail-chimp-server.vercel.app/api/newcompaing/${id}`,
        values
      );
      message.success("Campaign updated successfully");
      setSaving(false);
    } catch (err) {
      message.error("Failed to update campaign");
      setSaving(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Edit Campaign</h2>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="compaingname"
            label="Campaign Name"
            rules={[{ required: true, message: "Please enter campaign name" }]}
          >
            <Input placeholder="Enter campaign name" />
          </Form.Item>
          <Form.Item name="comapingemail" label="Campaign Email">
            <Input placeholder="Enter campaign email" />
          </Form.Item>
          <Form.Item name="subject" label="Subject">
            <Input placeholder="Enter email subject" />
          </Form.Item>
          <Form.Item name="previewtext" label="Preview Text">
            <Input placeholder="Enter preview text" />
          </Form.Item>
          <Form.Item name="sendtime" label="Send Time">
            <Input placeholder="Enter send time" />
          </Form.Item>
          <Form.Item name="chooseemailtemplate" label="Email Template">
            <Input placeholder="Enter email template name" />
          </Form.Item>
          <Form.Item name="imageurl" label="Image URL">
            <Input placeholder="Enter image URL" />
          </Form.Item>
          <Form.Item name="visits" label="Visits">
            <Input placeholder="Enter number of visits" />
          </Form.Item>
          <Form.Item name="vistitPercentage" label="Visit Percentage">
            <Input placeholder="Enter visit percentage" />
          </Form.Item>
          <Form.Item name="clicks" label="Clicks">
            <Input placeholder="Enter number of clicks" />
          </Form.Item>
          <Form.Item name="clickPercentage" label="Click Percentage">
            <Input placeholder="Enter click percentage" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={saving}>
              Update Campaign
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default HideEditComaping;

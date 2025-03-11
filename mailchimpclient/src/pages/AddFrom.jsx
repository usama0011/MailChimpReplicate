import axios from "axios";
import React, { useState } from "react";

const AddFrom = () => {
  const [formData, setFormData] = useState({
    from: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://latest-mail-chimp-server.vercel.app/api/from",
        formData
      );
      console.log(response.data); // You can handle success response here
      setSuccess(true);
      setFormData({
        from: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2>Add From</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <br />
        <input
          style={{ marginBottom: "10px" }}
          type="email"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />

        <button type="submit" disabled={loading}>
          Submit
        </button>
        {success && (
          <p style={{ color: "green" }}>From created successfully!</p>
        )}
      </form>
    </div>
  );
};

export default AddFrom;

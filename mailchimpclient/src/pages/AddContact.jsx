import React, { useState } from "react";
import axios from "axios";
import "../styles/AddContact.css";

const AddContact = () => {
  const [formData, setFormData] = useState({
    emailaddress: "",
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
    birthday: "",
    tags: [],
    emailmarkting: "",
    source: "",
    contactrating: "",
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
        "https://latest-mail-chimp-server.vercel.app/api/newcontact",
        formData
      );
      console.log(response.data); // You can handle success response here
      setSuccess(true);
      setFormData({
        emailaddress: "",
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        birthday: "",
        tags: [],
        emailmarkting: "",
        source: "",
        contactrating: "",
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
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Contact Form
        </h2>
        <br />
        <input
          style={{ marginBottom: "10px" }}
          type="email"
          name="emailaddress"
          value={formData.emailaddress}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="tel"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          placeholder="Birthday"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="emailmarkting"
          value={formData.emailmarkting}
          onChange={handleChange}
          placeholder="Email Marketing"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
          placeholder="Source"
        />
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          name="contactrating"
          value={formData.contactrating}
          onChange={handleChange}
          placeholder="Contact Rating"
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
        {success && (
          <p style={{ color: "green" }}>Contact created successfully!</p>
        )}
      </form>
    </div>
  );
};

export default AddContact;

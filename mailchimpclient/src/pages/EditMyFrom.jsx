import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditMyForm = () => {
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({ from: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchFrom = async () => {
      try {
        const response = await axios.get(
          `https://latest-mail-chimp-server.vercel.app/api/from/${id}`
        );
        setData(response.data);
        setEmail(response.data.from); // Initialize email state
        setSuccess(true);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };
    fetchFrom();
  }, [id]);

  const handleUpdateForm = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      setLoading(true);
      const response = await axios.put(
        `https://latest-mail-chimp-server.vercel.app/api/from/${id}`,
        { from: email }
      );
      setData((prevData) => ({ ...prevData, from: email })); // Update data state
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Edit page</h2>
      <div className="item">
        <form onSubmit={handleUpdateForm}>
          <input
            name="from"
            value={email} // Bind input value to email state
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <button type="submit">{loading ? "submiting..." : "submit"}</button>
        </form>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Update successful!</p>}
    </div>
  );
};

export default EditMyForm;

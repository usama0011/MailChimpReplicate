import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFrom = () => {
  const navigation = useNavigate();
  const [froms, setfroms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFroms = async (e) => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://mail-chimp-replicate.vercel.app/api/from"
        );
        console.log(response.data); // You can handle success response here
        setfroms(response.data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
      setLoading(false);
    };
    fetchFroms();
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      {error && <p>Error: {error}</p>}
      <h2>Add From</h2>
      {loading
        ? "loading..."
        : froms?.map((item) => (
            <div
              style={{ display: "flex", alignItems: "center", padding: "30px" }}
            >
              <h3>{item.from}</h3>
              <button
                onClick={() => navigation(`/editfrom/${item?._id}`)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>
              <button style={{ marginLeft: "10px" }}>Delete</button>
            </div>
          ))}
    </div>
  );
};

export default AddFrom;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ViewAllHideCompaing.css";
import { useNavigate } from "react-router-dom";
const ViewAllComapingHide = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://latest-mail-chimp-server.vercel.app/api/newcompaing"
        );
        setCampaigns(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchCampaigns();
  }, []);

  const handleEdit = (id) => {
    navigate(`/hideeditcompaing/${id}`);
  };

  const deleteCampaign = async (id) => {
    try {
      await axios.delete(
        `https://latest-mail-chimp-server.vercel.app/api/newcompaing/${id}`
      );
      // If successful, remove the campaign from the state
      setCampaigns((prevCampaigns) =>
        prevCampaigns.filter((campaign) => campaign._id !== id)
      );
      alert("Compaing Delete Successfully!!");
    } catch (error) {
      console.error("Error deleting campaign:", error);
    }
  };

  return (
    <div className="hidecompaingmaincontianer">
      <h2>All Campaigns ({campaigns?.length})</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul style={{ maxWidth: "900px" }}>
        {campaigns.map((campaign) => (
          <li className="myliItemcomaping" key={campaign._id}>
            <div>Campaign Name: {campaign.compaingname}</div>
            <div>Email: {campaign.compaingemail}</div>
            <div>Subject: {campaign.subject}</div>
            <div>Preview Text: {campaign.previewtext}</div>
            <div>Send Time: {campaign.sendtime}</div>
            <div>Email Template: {campaign.chooseemailtemplate}</div>
            <div>Image URL: {campaign.imageurl}</div>
            <br />
            <div>
              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => handleEdit(campaign._id)}
              >
                Edit
              </button>
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => deleteCampaign(campaign._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAllComapingHide;

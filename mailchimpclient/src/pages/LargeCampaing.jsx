import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LargeCampaignEdit = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          "https://mail-chimp-replicate.vercel.app/api/largecampaigns/view"
        );
        setCampaigns(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch campaigns");
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleDeleteFunction = async (id) => {
    try {
      await axios.delete(
        `https://mail-chimp-replicate.vercel.app/api/largecampaigns/view/${id}`
      );
      alert("Campaign deleted successfully");
      setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
    } catch (err) {
      setError("Failed to delete campaign");
    }
  };

  const handleEdit = (id) => {
    navigate(`/updatelarge/${id}`);
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
    );
  if (error)
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Large Campaigns</h1>
      {campaigns.length === 0 ? (
        <div style={{ textAlign: "center" }}>No campaigns found</div>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Campaign Name
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Type
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                Last Edit Date
              </th>
              <th
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {campaign._id}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {campaign.campaignName}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {campaign.campaignType}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {campaign.lastEditDate}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      backgroundColor: "#007BFF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEdit(campaign._id)}
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#DC3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteFunction(campaign._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LargeCampaignEdit;

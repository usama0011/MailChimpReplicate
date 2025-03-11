import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateLargeCampaign = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(
          `https://latest-mail-chimp-server.vercel.app/api/largecampaigns/view/${id}`
        );
        setCampaign(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch campaign details");
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prev) => {
      const updatedCampaign = { ...prev };
      const keys = name.split(".");
      if (keys.length > 1) {
        let nestedObject = updatedCampaign;
        keys.forEach((key, idx) => {
          if (idx === keys.length - 1) {
            nestedObject[key] = value;
          } else {
            nestedObject = nestedObject[key];
          }
        });
      } else {
        updatedCampaign[name] = value;
      }
      return updatedCampaign;
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://latest-mail-chimp-server.vercel.app/api/largecampaigns/view/${id}`,
        campaign
      );
      setSuccessMessage("Campaign updated successfully");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError("Failed to update campaign");
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
    );
  if (error)
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Update Campaign
      </h1>
      {successMessage && (
        <div
          style={{
            backgroundColor: "#D4EDDA",
            color: "#155724",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          {successMessage}
        </div>
      )}
      <form style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {campaign &&
            Object.keys(campaign).map((key, index) => {
              const isObject =
                typeof campaign[key] === "object" && campaign[key] !== null;
              return isObject ? (
                Object.keys(campaign[key]).map((nestedKey) => (
                  <div
                    key={`${key}.${nestedKey}`}
                    style={{ flex: "1 1 calc(33.33% - 15px)" }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                      htmlFor={`${key}.${nestedKey}`}
                    >
                      {`${key}.${nestedKey}`}:
                    </label>
                    <input
                      type="text"
                      name={`${key}.${nestedKey}`}
                      value={campaign[key][nestedKey] || ""}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
                ))
              ) : (
                <div key={key} style={{ flex: "1 1 calc(33.33% - 15px)" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                    htmlFor={key}
                  >
                    {key}:
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={campaign[key] || ""}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              );
            })}
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          style={{
            display: "block",
            width: "100%",
            padding: "15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Update Campaign
        </button>
      </form>
    </div>
  );
};

export default UpdateLargeCampaign;

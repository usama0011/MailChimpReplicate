import React from "react";
import { useNavigate } from "react-router-dom";

const HidePages = () => {
  const navigate = useNavigate();

  const containerStyle = {
    padding: "30px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Hidden Pages</h2>
      <div style={buttonContainerStyle}>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/addcontacts")}
        >
          Add Contact
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/viewallcompaingshides")}
        >
          View All Campaigns
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/fileuplaods")}
        >
          Upload Contacts
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/myreports")}
        >
          View All Reports
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/viewfroms")}
        >
          View Forms
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/from")}
        >
          Add Form
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/uploadlargedta")}
        >
          Upload All Campaigns
        </span>
        <span
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={() => navigate("/viewlargecampaingspage")}
        >
          CSV Campaings
        </span>
      </div>
    </div>
  );
};

export default HidePages;

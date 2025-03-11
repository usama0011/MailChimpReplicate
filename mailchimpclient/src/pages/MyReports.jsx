import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://mail-chimp-replicate.vercel.app/api/reports")
      .then((response) => {
        setReports(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching reports");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mail-chimp-replicate.vercel.app/api/reports/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(reports, "reports");
  return (
    <div style={{ padding: "30px" }} className="my-reports">
      <h1>My Reports</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {reports.map((report, index) => (
        <div
          key={index}
          className="report-item"
          style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}
        >
          <h2>{report.comapingemail}</h2>
          <p>Recipients: {report.recipients}</p>
          <p>Subject: {report.subject}</p>
          <p>Audience: {report.Audience}</p>
          <p>Delivered Time: {report.deliveredtime}</p>
          <p>Opened: {report.opened}</p>
          <p>Clicked: {report.clicked}</p>
          <p>Bounced: {report.bounced}</p>
          <p>Unsubscribed: {report.unsubscribed}</p>
          <p>Successful Deliveries: {report.Successfuldeliveries}</p>
          <p>Clicks per Unique Opens: {report.Clicksperuniqueopens}</p>
          <p>Total Opens: {report.Totalopens}</p>
          <p>Last Opened: {report.Lastopened}</p>
          <p>Last Clicked: {report.lastCliked}</p>
          <p>Forwarded: {report.Forwarded}</p>
          <p>Abuse Reports: {report.Abusereports}</p>
          <p>Orders: {report.Orders}</p>
          <p>Average Order Revenue: {report.Averageorderrevenue}</p>
          <p>Total Revenue: {report.Totalrevenue}</p>
          <p>Male: {report.male}</p>
          <p>Female: {report.female}</p>
          <p>Other Identity: {report.otherIdentity}</p>
          <p>Unknown: {report.unknow}</p>
          <p>Top Links Clicked:</p>
          <ul>
            {report.Toplinksclicked.map((link, i) => (
              <li key={i}>
                {link.linkname}: {link.linkvalue}
              </li>
            ))}
          </ul>
          <br />
          <button
            onClick={() => navigate(`/viewreport/${report._id}`)}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Edit Report
          </button>
          <button
            onClick={() => handleDelete(report._id)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete Report
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyReports;

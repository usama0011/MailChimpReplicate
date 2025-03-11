import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    comapingemail: "",
    recipients: "",
    Audience: "",
    subject: "",
    deliveredtime: "",
    opened: "",
    sendtime: "",
    clicked: "",
    clickpercentge: "",
    openedpercentage: "",
    bounced: "",
    unsubscribed: "",
    Successfuldeliveries: "",
    Clicksperuniqueopens: "",
    Totalopens: "",
    Lastopened: "",
    lastCliked: "",
    Forwarded: "",
    Abusereports: "",
    Orders: "",
    Averageorderrevenue: "",
    Totalrevenue: "",
    Toplinksclicked: [{ linkname: "", linkvalue: "" }],
    male: "",
    female: "",
    otherIdentity: "",
    unknow: "",
  });
  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://mail-chimp-replicate.vercel.app/api/reports/${id}`
        );
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchReport();
  }, [id]);
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedLinks = [...formData.Toplinksclicked];
    updatedLinks[index] = { ...updatedLinks[index], [name]: value };
    setFormData({ ...formData, Toplinksclicked: updatedLinks });
  };

  const handleAddClick = () => {
    setFormData({
      ...formData,
      Toplinksclicked: [
        ...formData.Toplinksclicked,
        { linkname: "", linkvalue: "" },
      ],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `https://mail-chimp-replicate.vercel.app/api/reports/${id}`,
        formData
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Update Report</h2>
      <form onSubmit={handleSubmit}>
        <label>Compaing Email</label>
        <input
          type="text"
          name="comapingemail"
          value={formData.comapingemail}
          onChange={(event) =>
            setFormData({ ...formData, comapingemail: event.target.value })
          }
        />
        <label>Recipients:</label>
        <input
          type="text"
          name="recipients"
          value={formData.recipients}
          onChange={(event) =>
            setFormData({ ...formData, recipients: event.target.value })
          }
        />
        <label>Audience:</label>
        <input
          type="text"
          name="Audience"
          value={formData.Audience}
          onChange={(event) =>
            setFormData({ ...formData, Audience: event.target.value })
          }
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={(event) =>
            setFormData({ ...formData, subject: event.target.value })
          }
        />
        <label>Opened:</label>
        <input
          type="text"
          name="opened"
          value={formData.opened}
          onChange={(event) =>
            setFormData({ ...formData, opened: event.target.value })
          }
        />
        <label>Clicked:</label>
        <input
          type="text"
          name="clicked"
          value={formData.clicked}
          onChange={(event) =>
            setFormData({ ...formData, clicked: event.target.value })
          }
        />
        <label>Click Percentage:</label>
        <input
          type="text"
          name="clickpercentge"
          value={formData.clickpercentge}
          onChange={(event) =>
            setFormData({ ...formData, clickpercentge: event.target.value })
          }
        />
        <label>Opend Percentage:</label>
        <input
          type="text"
          name="openedpercentage"
          value={formData.openedpercentage}
          onChange={(event) =>
            setFormData({ ...formData, openedpercentage: event.target.value })
          }
        />

        <label>Bounced:</label>
        <input
          type="text"
          name="bounced"
          value={formData.bounced}
          onChange={(event) =>
            setFormData({ ...formData, bounced: event.target.value })
          }
        />
        <label>Send Time:</label>
        <input
          type="text"
          name="bounced"
          value={formData.sendtime}
          onChange={(event) =>
            setFormData({ ...formData, sendtime: event.target.value })
          }
        />
        <label>UnSubscribed:</label>
        <input
          type="text"
          name="unsubscribed"
          value={formData.unsubscribed}
          onChange={(event) =>
            setFormData({ ...formData, unsubscribed: event.target.value })
          }
        />
        <label>Successfuldeliveries:</label>
        <input
          type="text"
          name="Successfuldeliveries"
          value={formData.Successfuldeliveries}
          onChange={(event) =>
            setFormData({
              ...formData,
              Successfuldeliveries: event.target.value,
            })
          }
        />
        <label>Clicksperuniqueopens:</label>
        <input
          type="text"
          name="Clicksperuniqueopens"
          value={formData.Clicksperuniqueopens}
          onChange={(event) =>
            setFormData({
              ...formData,
              Clicksperuniqueopens: event.target.value,
            })
          }
        />

        <label>Totalopens:</label>
        <input
          type="text"
          name="Totalopens"
          value={formData.Totalopens}
          onChange={(event) =>
            setFormData({ ...formData, Totalopens: event.target.value })
          }
        />
        <label>Lastopened:</label>
        <input
          type="date"
          name="Lastopened"
          value={formData.Lastopened}
          onChange={(event) =>
            setFormData({ ...formData, Lastopened: event.target.value })
          }
        />
        <label>lastCliked:</label>
        <input
          type="date"
          name="lastCliked"
          value={formData.lastCliked}
          onChange={(event) =>
            setFormData({ ...formData, lastCliked: event.target.value })
          }
        />
        <label>Forwarded:</label>
        <input
          type="text"
          name="Forwarded"
          value={formData.Forwarded}
          onChange={(event) =>
            setFormData({ ...formData, Forwarded: event.target.value })
          }
        />
        <label>Abusereports:</label>
        <input
          type="text"
          name="Abusereports"
          value={formData.Abusereports}
          onChange={(event) =>
            setFormData({ ...formData, Abusereports: event.target.value })
          }
        />
        <label>Orders:</label>
        <input
          type="text"
          name="Orders"
          value={formData.Orders}
          onChange={(event) =>
            setFormData({ ...formData, Orders: event.target.value })
          }
        />
        <label>Averageorderrevenue:</label>
        <input
          type="text"
          name="Averageorderrevenue"
          value={formData.Averageorderrevenue}
          onChange={(event) =>
            setFormData({
              ...formData,
              Averageorderrevenue: event.target.value,
            })
          }
        />
        <label>Totalrevenue:</label>
        <input
          type="text"
          name="Totalrevenue"
          value={formData.Totalrevenue}
          onChange={(event) =>
            setFormData({ ...formData, Totalrevenue: event.target.value })
          }
        />

        {formData?.Toplinksclicked?.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="linkname"
              placeholder="Link Name"
              value={item.linkname}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="text"
              name="linkvalue"
              placeholder="Link Value"
              value={item.linkvalue}
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddClick}>
          Add Link
        </button>
        <br />
        <label>Male:</label>
        <input
          type="text"
          name="male"
          value={formData.male}
          onChange={(event) =>
            setFormData({ ...formData, male: event.target.value })
          }
        />
        <label>Female:</label>
        <input
          type="text"
          name="female"
          value={formData.female}
          onChange={(event) =>
            setFormData({ ...formData, female: event.target.value })
          }
        />
        <label>OtherIdentity:</label>
        <input
          type="text"
          name="otherIdentity"
          value={formData.otherIdentity}
          onChange={(event) =>
            setFormData({ ...formData, otherIdentity: event.target.value })
          }
        />
        <label>Unknown:</label>
        <input
          type="text"
          name="unknow"
          value={formData.unknow}
          onChange={(event) =>
            setFormData({ ...formData, unknow: event.target.value })
          }
        />

        <button type="submit">{loading ? "Updating..." : "Update"}</button>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default UpdateReport;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CampaingsCalender.css"; // Add your CSS file
import { Link } from "react-router-dom";

const CampaingsCalender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedCampaign, setSelectedCampaign] = useState(null); // For modal
  const campaignsUrl =
    "https://mail-chimp-replicate.vercel.app/api/largecampaigns/view/all";

  // Fetch campaigns data
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(campaignsUrl);
        const campaigns = response.data; // Assuming data is an array of campaigns
        const formattedEvents = {};

        campaigns.forEach((campaign) => {
          const sendTime = new Date(campaign.sendTime);
          const dateKey = `${sendTime.getFullYear()}-${(sendTime.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${sendTime
            .getDate()
            .toString()
            .padStart(2, "0")}`;

          if (!formattedEvents[dateKey]) {
            formattedEvents[dateKey] = [];
          }
          formattedEvents[dateKey].push({
            name: campaign.campaignName,
            sendTime: campaign.sendTime,
            details: campaign, // Storing all campaign details
          });
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days of the previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    // Actual days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      );
      days.push(
        <div className="calendar-day" key={day}>
          <span className="date">{day}</span>
          <ul style={{ width: "100%" }} className="events">
            {events[dateKey]?.map((event, index) => (
              <div
                style={{
                  backgroundColor: "#d9ebcb",
                  marginBottom: "3px",
                  width: "100%",
                  borderRadius: "4px",
                  paddingLeft: "3px",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => setSelectedCampaign(event.details)} // Open modal with details
                aria-label={`campaign ${event.name}`}
                className="eventElement-26mu_ success-36VdS defaultEventRightBorder-18f8p snipcss-HsXMW style-7S6Nj"
                draggable="false"
                role="listitem"
                tabIndex="0"
                title={`${event.name}, Sent, ${new Date(
                  event.sendTime
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
                id={`style-7S6Nj-${index}`}
              >
                <p className="root-3TDqk small-bold-6R-6E">{event.name}</p>
                <div
                  style={{ paddingLeft: 0, marginLeft: 0 }}
                  className="iconAndStatusContainer-3t2M2"
                >
                  <svg
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    aria-label="email"
                    className="wink-icon eventIcon-mMqoE"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                    ></path>
                  </svg>
                  <p className="root-3TDqk small-2qKd5 statusText-9KJ5L">
                    sent
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      );
    }

    // Calculate remaining empty cells after the last day
    const totalCells = firstDay + daysInMonth;
    const remainingCells = 7 - (totalCells % 7);
    if (remainingCells < 7) {
      for (let i = 0; i < remainingCells; i++) {
        days.push(
          <div className="calendar-day empty" key={`empty-end-${i}`}></div>
        );
      }
    }

    return days;
  };
  console.log(selectedCampaign);
  return (
    <div className="calendar-container" style={{ padding: "30px" }}>
      <div class="calendarHeaderV2-23E7R snipcss-YU7km">
        <div class="navigationV2-3meU5">
          <button onClick={handlePrevMonth} class="root-1khsy" type="button">
            <span class="wink-visually-hidden">Previous month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              class="wink-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
              ></path>
            </svg>
          </button>
          <button onClick={handleNextMonth} class="root-1khsy" type="button">
            <span class="wink-visually-hidden">Next month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              class="wink-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.586 12L9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707-1.414-1.414L13.586 12z"
              ></path>
            </svg>
          </button>
          <div class="currentTimePeriodV2-1pWfM" id="calendarheader">
            <span class="root-3TDqk large-bold-3R9__">
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </span>
          </div>
        </div>
        <div class="headerRightV2-3J00J">
          <div class="todayLink-rVV2v">
            <span
              style={{ color: "#007c89" }}
              class="root-3TDqk medium-bold-2nZ0J"
              tabindex="0"
              role="link"
            >
              Today
            </span>
          </div>
          <div class="viewDropdown-2712q">
            <div class="root-TXRyV">
              <label id="mc:218" for="mc:217" class="wink-visually-hidden">
                Select the view of the calendar
              </label>
              <select id="mc:217">
                <option value="day">Day</option>
                <option value="month">Month</option>
                <option value="week">Week</option>
              </select>
              <span
                style={{ color: "#007c89" }}
                data-testid="selectedValue"
                class="selectedValue-1AZV5"
                aria-hidden="true"
              >
                Month
                <span class="indicator-1Co1h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    class="wink-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                    ></path>
                  </svg>
                </span>
              </span>
            </div>
          </div>
          <div class="sdoToggleV2-10_Fa">
            <div class="root-3VS64 hideLabel-1M2Ld">
              <div class="content-1vvD0">
                <div id="mc:219" class="wink-visually-hidden">
                  Optimize dates:
                </div>
              </div>
              <div class="toggleGroup-3QVDw">
                <button
                  class="toggle-2Rjco"
                  type="button"
                  aria-pressed="false"
                  aria-labelledby="mc:219"
                >
                  <span class="knob-iNyaw"></span>
                </button>
              </div>
            </div>
            <button class="root-1khsy" type="button">
              <span class="wink-visually-hidden">Optimize dates info</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                class="wink-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm1-16.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM9 12v-1l2-1h2v6l2 1v1H9v-1l2-1v-4H9z"
                ></path>
              </svg>
            </button>
            <span role="status" aria-atomic="true">
              <span class="wink-visually-hidden"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {[...Array(7)].map((_, i) => (
          <div
            style={{
              borderTop: "1px solid #ececec",
              borderBottom: "1px solid #ececec",
              borderLeft: i === 0 ? "1px solid #ececec" : "none",
              borderRight: i === 6 ? "1px solid #ececec" : "none",
              textAlign: "center",
            }}
            className="calendar-day-header"
            key={i}
          >
            {
              [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][i]
            }
          </div>
        ))}
        {renderDays()}
      </div>

      {/* Modal */}
      {selectedCampaign && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setSelectedCampaign(null)}
            >
              &times;
            </button>
            <div class="wink light snipcss-6I7AR">
              <div
                class="dialog-1NSI7 container-1Cqy1"
                role="dialog"
                tabindex="-1"
                aria-labelledby="mc:157"
              >
                <div class="overlay-2Q-6X"></div>
                <div class="root-Hg5IF sm-3xLCd style-Cbcg4" id="style-Cbcg4">
                  <button
                    onClick={() => setSelectedCampaign(null)}
                    class="root-1khsy closeButton-1pytm"
                    type="button"
                  >
                    <span class="wink-visually-hidden">Close Modal</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                      class="wink-icon"
                    >
                      <path d="M12 13.414l6.293 6.293 1.414-1.414L13.414 12l6.293-6.293-1.414-1.414L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293 1.414 1.414L12 13.414z"></path>
                    </svg>
                  </button>
                  <div class="header-33UyO">
                    <h1 id="mc:157" class="title-hZdI7">
                      Email details
                    </h1>
                  </div>
                  <div class="body-Qf-7h">
                    <div class="switcher-2RqDX">
                      <div class="">
                        <div class="content-2Oz_g style-TYhZs" id="style-TYhZs">
                          <div
                            class="root-209cT gap6-U7x7I gridLayout-1jdH5 style-ZPUg1"
                            id="style-ZPUg1"
                          >
                            <div class="colSpan2-3G95R">
                              <h3 class="heading-3-eDQNF primaryText-1YRYU root-PihPG">
                                <span class="titleSpace-2E6cf">
                                  {selectedCampaign?.campaignName}
                                </span>
                                <span class="root-1tapB success-1pnBG badge-E6V6Q">
                                  sent
                                </span>
                              </h3>
                            </div>
                            <div class="detailHeaders-2kwm-">
                              <p class="root-3TDqk medium-bold-2nZ0J">
                                Subject
                              </p>
                            </div>
                            <div id="style-Iw35i" class="style-Iw35i">
                              <p class="root-3TDqk medium-3AcAC">
                                {selectedCampaign?.subject}
                              </p>
                            </div>
                            <div class="detailHeaders-2kwm-">
                              <p class="root-3TDqk medium-bold-2nZ0J">Date</p>
                            </div>
                            <div class="detailTextContainer-3ta3h">
                              <p class="root-3TDqk medium-3AcAC">
                                {selectedCampaign?.sendTime}
                              </p>
                            </div>
                            <div class="detailHeaders-2kwm-">
                              <p class="root-3TDqk medium-bold-2nZ0J">
                                Audience
                              </p>
                            </div>
                            <div class="detailTextContainer-3ta3h">
                              <span class="root-3TDqk medium-3AcAC">
                                <span class="root-3TDqk medium-bold-2nZ0J">
                                  All subscribers
                                </span>{" "}
                                in the audience{" "}
                                <span class="root-3TDqk medium-bold-2nZ0J">
                                  {selectedCampaign?.audienceName}
                                </span>
                              </span>
                              <p class="root-3TDqk medium-secondary-1YIN8">
                                Recipient count:{" "}
                                {selectedCampaign?.audienceRecipients}
                              </p>
                            </div>
                            <div class="detailHeaders-2kwm-">
                              <p class="root-3TDqk medium-bold-2nZ0J">Link</p>
                            </div>
                            <div class="detailTextContainer-3ta3h">
                              <a
                                style={{ color: "#017b89" }}
                                class="underline-NQrc-"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://mailchi.mp/8a8d03c11a42/solar-for-life"
                              >
                                View email in browser
                              </a>
                              <button
                                class="root-1khsy copyButton-1PI8r"
                                type="button"
                                title="Copy to clipboard"
                              >
                                <span class="wink-visually-hidden">
                                  Copy to clipboard
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M18 4H4v14H2V2h16v2z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6 22V6h16v16H6zM8 8h12v12H8V8z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="emailMetricsContainer-2LhnZ">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div>
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    {selectedCampaign?.audienceRecipients}
                                  </p>
                                  <p class="root-3TDqk medium-secondary-1YIN8">
                                    Recipients
                                  </p>
                                </div>
                                <div>
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    {selectedCampaign?.openedPercentage}%
                                  </p>
                                  <p class="root-3TDqk medium-secondary-1YIN8">
                                    Open rate
                                  </p>
                                </div>
                                <div>
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    {selectedCampaign?.clickedPercentage}%
                                  </p>
                                  <p class="root-3TDqk medium-secondary-1YIN8">
                                    Click rate
                                  </p>
                                </div>
                                <div>
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    {selectedCampaign?.unsubscribed}
                                  </p>
                                  <p class="root-3TDqk medium-secondary-1YIN8">
                                    Unsubscribes
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="detailContainer-1RO8n">
                            <div id="style-p3fpQ" class="style-p3fpQ">
                              <div class="previewImage-3eQna">
                                <div class="root-2l2oQ">
                                  <div
                                    class="container-30qab"
                                    style={{
                                      backgroundColor: "white",
                                      width: "100%",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      style={{
                                        width: "100%",
                                        height: "900px",
                                        objectFit: "cover",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                      }}
                                      src={selectedCampaign?.campaignImage}
                                      alt=""
                                    />
                                    <div
                                      style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        padding: "10px 0px",
                                      }}
                                      class="cluster-3D5Qr"
                                    >
                                      <div
                                        style={{
                                          width: "100%",
                                          justifyContent: "center",
                                        }}
                                        class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR"
                                      >
                                        <a
                                          style={{
                                            color: "#017b89",
                                            border: "1px solid #017b89",
                                            fontWeight: "bold",
                                          }}
                                          class="root-sBgFt container-3-bH7 secondary-1_P2K"
                                          href="https://us13.admin.mailchimp.com/campaigns/replicate-email?id=6741582"
                                        >
                                          <span class="temporarySpan-2iF2p">
                                            Learn more
                                          </span>
                                        </a>
                                        <div class="root-2PJHr">
                                          <a
                                            style={{
                                              backgroundColor: "#017b89",
                                              cursor: "pointer",
                                              color: "white",
                                            }}
                                            class="root-sBgFt container-3-bH7 primary-33czz button-1TVkv"
                                          >
                                            <span class="temporarySpan-2iF2p">
                                              More offers
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        width: "100%",
                                        backgroundColor: "white",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        fontSize: "11px",
                                      }}
                                    >
                                      <p
                                        style={{
                                          paddingBottom: "10px",
                                          fontStyle: "italic",
                                        }}
                                      >
                                        Copyright (C) 2024{" "}
                                        {selectedCampaign?.campaignName}. All
                                        right's reserved
                                      </p>
                                      <p style={{ paddingBottom: "10px" }}>
                                        You are receiving this email because you
                                        opted in via our website.
                                      </p>
                                      <p style={{ paddingBottom: "10px" }}>
                                        Our mailing address is:
                                      </p>
                                      <span>
                                        {/* {selectedCampaign?.audienceName} */}
                                        Selani Media
                                      </span>

                                      <p style={{ textAlign: "center" }}>
                                        Chicago IL, USA
                                      </p>
                                      <p style={{ paddingBottom: "10px" }}>
                                        Want to change how you receive these
                                        emails?
                                      </p>
                                      <p style={{ paddingBottom: "10px" }}>
                                        You can{" "}
                                        <span
                                          style={{
                                            textDecoration: "underline",
                                            color: "teal",
                                          }}
                                        >
                                          update your preferences{" "}
                                        </span>
                                        or
                                        <span
                                          style={{
                                            textDecoration: "underline",
                                            color: "teal",
                                          }}
                                        >
                                          unsubscribed
                                        </span>
                                      </p>
                                    </div>

                                    <p
                                      style={{
                                        textAlign: "center",
                                        fontSize: "10px",
                                      }}
                                    >
                                      This Email was sent to{" "}
                                      {selectedCampaign?.audienceName}
                                    </p>
                                    <span
                                      style={{
                                        textDecoration: "underline",

                                        fontSize: "10px",
                                      }}
                                    >
                                      Why did I get this?
                                    </span>
                                    <span>
                                      <p
                                        style={{
                                          fontSize: "10px",
                                        }}
                                      >
                                        unsubscribed from this list
                                      </p>
                                    </span>
                                    <span
                                      style={{
                                        textDecoration: "underline",
                                        fontSize: "10px",
                                      }}
                                    >
                                      <p>Update subscription preferences</p>
                                    </span>
                                  </div>
                                  <div class="overlay-2SoDS"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="footer-GeAzX"
                    style={{ width: "100%", justifyContent: "end" }}
                  >
                    <div
                      style={{ width: "100%", justifyContent: "end" }}
                      class="cluster-3D5Qr"
                    >
                      <div
                        style={{ width: "100%", justifyContent: "end" }}
                        class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR"
                      >
                        <a
                          style={{
                            color: "#017b89",
                            border: "1px solid #017b89",
                            fontWeight: "bold",
                          }}
                          class="root-sBgFt container-3-bH7 secondary-1_P2K"
                          href="https://us13.admin.mailchimp.com/campaigns/replicate-email?id=6741582"
                        >
                          <span class="temporarySpan-2iF2p">Replicate</span>
                        </a>
                        <div class="root-2PJHr">
                          <a
                            style={{
                              backgroundColor: "#017b89",
                              color: "white",
                            }}
                            class="root-sBgFt container-3-bH7 primary-33czz button-1TVkv"
                          >
                            <span class="temporarySpan-2iF2p">
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "unset",
                                }}
                                to={`/allcompaings/${selectedCampaign?._id}`}
                              >
                                View report{" "}
                              </Link>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaingsCalender;

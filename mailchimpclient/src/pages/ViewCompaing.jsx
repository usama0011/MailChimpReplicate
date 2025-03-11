import React, { useEffect, useState } from "react";
import "../styles/ViewCompaing.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReceiptTable from "../components/ReceiptTable";

const ViewCompaing = () => {
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("sent");
  const [error, setError] = useState(null);
  const [showbarreceipts, sethsowBarReceipts] = useState(false);
  const [currentpage, setcurrentpage] = useState("overview");
  const [showTAbleCotnact, setShowTabltContacts] = useState(false);
  const [singlereport, setSingleReport] = useState({});
  const [currentComponentLoding, setCurrentComponentLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://mail-chimp-replicate.vercel.app/api/largecampaigns/view/${id}`
        );
        setSingleReport(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchReport();
  }, [id]);
  const sendTime = new Date(singlereport?.sendTime);
  const formattedDate = sendTime.toLocaleDateString("en-US", {
    month: "short", // Short month name (e.g., Dec)
    day: "numeric", // Numeric day (e.g., 12)
    year: "numeric", // Full year (e.g., 2024)
  });
  const TodayTime = new Date();
  // Set end date to 3 days after start date
  const endTime = new Date(sendTime);
  endTime.setDate(sendTime.getDate() + 3);

  // Get current date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize time to midnight

  // Calculate difference in days between startDate and today
  const diffInDays = Math.floor((today - sendTime) / (1000 * 60 * 60 * 24));

  let todaysFormatDate = "";

  // If start date is more than 3 days ago, calculate end date
  if (diffInDays > 3) {
    const endTime = new Date(sendTime);
    endTime.setDate(sendTime.getDate() + 3);
    todaysFormatDate = endTime.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  const yesterdayTime = new Date(TodayTime);
  yesterdayTime.setDate(yesterdayTime.getDate() - 1);

  const yesterdaysFormatDate = yesterdayTime.toLocaleDateString("en-US", {
    month: "short", // Short month name (e.g., Dec)
    day: "numeric", // Numeric day (e.g., 11)
    year: "numeric", // Full year (e.g., 2024)
  });

  const handlloadingandChange = (currentpage) => {
    setcurrentpage(currentpage);
    setCurrentComponentLoading(true); // Start loading
    setTimeout(() => {
      setcurrentpage(page); // Change the page after 2 seconds
      setCurrentComponentLoading(false); // Stop loading
    }, 2000);
  };
  console.log(singlereport);
  const handleDynamicLInk = (linkName) => {
    switch (linkName) {
      case "/":
        navigate("/");
        break;
      case "/newcomaping":
        navigate("/newcomaping");
        break;
      case "/allcompaings":
        navigate("/allcompaings");
        break;
      case "/automationoverview":
        navigate("/automationoverview");
        break;
      case "/transactional":
        navigate("/transactional");
        break;
      case "/audiencedashboard":
        navigate("/audiencedashboard");
        break;
      case "/allcontacts":
        navigate("/allcontacts");
        break;
      case "/signupforms":
        navigate("/signupforms");
        break;
      case "/tags":
        navigate("/tags");
        break;
      case "/segments":
        navigate("/segments");
        break;
      case "/mailchimpsurvy":
        navigate("/mailchimpsurvy");
        break;
      case "/marketingdashboard":
        navigate("/marketingdashboard");
        break;
      case "/audienceanalytics":
        navigate("/audienceanalytics");
        break;
      case "/reports":
        navigate("/reports");
        break;
      case "/websiteoverview":
        navigate("/websiteoverview");
        break;
      case "/websitesetting":
        navigate("/websitesetting");
        break;
      case "/websitereports":
        navigate("/websitereports");
        break;
      case "/creativeassistant":
        navigate("/creativeassistant");
        break;
      case "/integrationdiscover":
        navigate("/integrationdiscover");
        break;
      case "/integrationmanage":
        navigate("/integrationmanage");
        break;
      default:
        console.error("Unknown link name:", linkName);
        break;
    }
  };
  const handleourhidPages = () => {
    navigate("/hidepages");
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const getCurrentCount = () => {
    if (selectedStatus === "sent") {
      return Number(singlereport?.audienceRecipients) || 0;
    } else if (selectedStatus === "sent_opened") {
      return Number(singlereport?.opened) || 0;
    } else if (selectedStatus === "didnt_opened") {
      return (
        Number(singlereport?.audienceRecipients) -
          Number(singlereport?.opened) || 0
      );
    } else if (selectedStatus === "clicked") {
      return Number(singlereport?.clicks) || 0;
    } else if (selectedStatus === "bounced") {
      return Number(singlereport?.bounced) || 0;
    } else if (selectedStatus === "subscribed") {
      return Number(singlereport?.subscribed) || 0;
    } else if (selectedStatus === "unsubscribed") {
      return Number(singlereport?.unsubscribed) || 0;
    }
    return 0; // Default count if no status matches
  };
  return (
    <div className="mainmainview">
      <div
        className="animation-theme snipcss0-0-0-1 snipcss-zRclk"
        cz-shortcut-listen="true"
      >
        <div id="root" aria-hidden="true" className="snipcss0-1-1-5">
          <div className="redesignNavigationExpandedRRClosed-1Pz4X snipcss0-2-5-6">
            <div className="metaTop-XCUCj snipcss0-3-6-7"></div>
            <div className="headerTop-2Y-yB snipcss0-3-6-18">
              <div className="wink snipcss0-4-18-19">
                <nav className="app-header-1maWO universal-search-29i1W snipcss0-5-19-20">
                  <div className="content-R4qGr universal-search-29i1W handle-live-help-1vaaS snipcss0-6-20-21">
                    <div className="align-left-S-hBc snipcss0-7-21-22">
                      <button
                        onClick={() => handleDynamicLInk("/")}
                        type="button"
                        role="link"
                        className="root-1mTPe snipcss0-8-22-23"
                        aria-label="Home"
                      >
                        <div className="freddieContainer-3BkOH snipcss0-9-23-24">
                          <img
                            className="freddie-2UE1a snipcss0-10-24-25"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAySDkuNTAyYzIuNzM0IDYuMyA4LjgwOCAxMC4wMTcgMTYuMDE2IDEwLjM3MmwuMjg1LjAxMnYuMDAyaC4wMDd2LS4wMDJjNy43MTQuMjczIDE0LjQ1NC0zLjQ1NCAxNy4yMTktMTAuMDc4LjM0OC0uODk2IDIuMjktNi4yNzUtLjY5MS03LjAzNnptLTMyLjIzMiA0Ljk2Yy0uMjM5LjA0LS40ODIuMDU2LS43MjguMDUtMi4zNzMtLjA2My00LjkzNy0yLjItNS4xOTItNC43MzQtLjI4MS0yLjggMS4xNS00Ljk1NiAzLjY4NC01LjQ2N2E0LjMxMyA0LjMxMyAwIDAxMS4wNjQtLjA3NmMxLjQyLjA3OCAzLjUxMSAxLjE2OCAzLjk5IDQuMjYuNDIzIDIuNzQtLjI1IDUuNTI4LTIuODE4IDUuOTY2em0tMi42Ni0xMS44MjVsLjAxLS4wMDJjMS45NTMtNS4zNDcgNS4zNi0xMC4zNTYgOS43OTgtMTMuNzczLjA4NC0uMDcuMTctLjE0LjI2LS4yMSAyLjE4Ny0xLjc4NSA0LjQyOC0zLjMwNSA2LjU4NS00LjUwOCAwIDAtMS45MTMtMi4yMTgtMi40OS0yLjM4MUMxOC4wNTYuODUgMTAuMzggNi4xNDMgNS40NzkgMTMuMTM2Yy0xLjk4MiAyLjgzLTQuODIgNy44NC0zLjQ2MyAxMC40MTguMTY3LjMyIDEuMTE0IDEuMTQgMS42MjIgMS41NjQuODUtMS4yMzUgMi4xNS0yLjEgMy44MDgtMi40MzR6bTkuMDQtOS41NTNjMS43NDYtMi4wMjMgMy45LTMuNzgzIDUuODI5LTQuNzcuMDY2LS4wMzQuMTM3LjAzOC4xLjEwMy0uMTUzLjI4LS40NS44NzgtLjU0MSAxLjMyOC0uMDEzLjA2Ni4wNi4xMTQuMTE2LjA3NiAxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3LTEuODM2LjUyNy00LjMyLjkzMi03LjA5MS43NjctLjMwMi0uMDI0LS41ODQtLjA2MS0uODQ1LS4wOTUtMS4wNjgtLjE0LTEuNzg1LS4yMzQtMi4wOTMuNzY1YTUuMTM3IDUuMTM3IDAgMDAuMjkyLjExYy4xNDMuMDQ4LjI5LjA5My40MzguMTM1YTE1LjAzMSAxNS4wMzEgMCAwMDEuODIuNDAxYy4zMDguMDQ5LjYxNy4wOTMuOTI4LjEyNWExNC41MDMgMTQuNTAzIDAgMDAxLjQwMi4wOCAxMy4wOTIgMTMuMDkyIDAgMDAxLjExNS0uMDJjLjA5OC0uMDA0LjE5Ni0uMDA4LjI5NC0uMDE0LjMxMy0uMDIyLjYyNi0uMDUuOTQyLS4wODFhLjEzMS4xMzEgMCAwMS4wNjQuMjVsLS4wMDkuMDA0Yy0uMzAyLjEyOC0uNjE1LjIzLS45MzMuMzFhOC4zODQgOC4zODQgMCAwMS0xLjQ1Ny4yMjYgMTQuNDEgMTQuNDEgMCAwMS0xLjQ3Ny4wMTkgMTMuODIyIDEzLjgyMiAwIDAxLS45ODMtLjA3NiAxNS43NDUgMTUuNzQ1IDAgMDEtMS40Ni0uMjQ3IDEwLjA3NiAxMC4wNzYgMCAwMS0xLjA3NC0uMzA3Yy4xMjUgMS4wNjQgMS4xNjIgMS41NDEgMS42NTggMS43MzRhNy40NzggNy40NzggMCAwMDEuMzA2LjM1NGM1LjYyLjk2NyAxMC44NzUtMi4yNDYgMTIuMDU4LTMuMDU2LjA4OC0uMDYuMTQ3LS4wMDEuMDc2LjEwNmExLjk2IDEuOTYgMCAwMS0uMTE2LjE2NWMtMS40NDggMS44NjgtNS4zNCA0LjAzLTEwLjQwNCA0LjAzLTIuMjEgMC00LjQxNy0uNzc5LTUuMjI3LTEuOTc0LTEuMjU4LTEuODU1LS4wNjItNC41NjMgMi4wMzMtNC4yODEuMDAyIDAgLjcxNy4wOC45MTguMTA0IDQuNDA4LjQ5MyA5LjczLS45NTkgMTIuMDk0LTMuMTQybC4xMTYtLjA4M2MuODE5LS43NzIgMS4yMzYtMS41NyAxLjEwMi0yLjI3MWExLjcgMS43IDAgMDAtLjQ5My0uOTY3Yy0uNTEzLS41MDMtMS4zMjgtLjg5NC0yLjcwMi0xLjI4bC0uMTE0LS4wMzItLjE0NS0uMDRjLS4zMi0uMDktLjU3LS4xNTktLjgzNS0uMjQ2LS41OS0uMTk0LS44ODItLjM1LS45NDgtMS40Ni0uMDMtLjQ4Ni0uMTE0LTIuMTc2LS4xNDQtMi44NzUtLjA1NC0xLjIyNC0uMjAxLTIuODk4LTEuMjQtMy41ODhhMS43NCAxLjc0IDAgMDAtLjg4Ny0uMjg0Yy0uMjU1LS4wMTItLjQwNS4wMjMtLjQ4NS4wNDJsLS4wNDIuMDFjLS41Ni4wOTQtLjkwNC4zODItMS4zMS43MmwtLjA3LjA2Yy0xLjI5NSAxLjA3OS0yLjM4OSAxLjI1NS0zLjYwNCAxLjIwMy0uMzgtLjAxNi0uNzctLjA1NC0xLjE4My0uMDk1LS4zNzgtLjAzNy0uNzc0LS4wNzYtMS4xOTctLjEwMWwtLjEtLjAwNmMtLjEzOS0uMDA4LS4yNzctLjAxNy0uNDE2LS4wMjQtMi4wMzYtLjEwNC00LjIyIDEuNjU1LTQuNTg0IDQuMTUzLS40MDUgMi43ODcgMS4xMzMgNC40OTQgMi4xMzMgNS42MDUuMjQ4LjI3NS40NjIuNTEzLjYwNy43MjJhLjc1Ni43NTYgMCAwMS0uMDYuOTdsLjAwMS4wMDFjLTIuMDc4IDIuMTM3LTIuNzQyIDUuNTMyLTEuOTYgOC4zNi4wOTkuMzU0LjIyMi42OTIuMzcgMS4wMTQgMS44MzYgNC4yOTQgNy41MzUgNi4yOTMgMTMuMTAzIDQuNDc0YTEzLjY3NyAxMy42NzcgMCAwMDIuMTE1LS44OTMgMTEuMTEyIDExLjExMiAwIDAwMy4yNC0yLjQyem0tNi41Ni0xNi4wMzdjLjM0LS4wNC42NjctLjA0Mi45NjcgMCAuMTczLS4zOTguMjAzLTEuMDg0LjA0Ny0xLjgzMS0uMjMyLTEuMTExLS41NDYtMS43ODMtMS4xOTUtMS42NzgtLjY1LjEwNC0uNjczLjkwOS0uNDQxIDIuMDIuMTMuNjI0LjM2MyAxLjE1OS42MjIgMS40OXptLTUuNTcyLjg4Yy0xLjAwMS0uNDMyLTEuNzc3LS41NjUtMy4yNC0uMDk0bC0uMTE1LjAzOGMtLjI5MS4wOTUtLjQ5NC4xNjEtLjYyMy4xNTVhLjI2LjI2IDAgMDEtLjA0LS4wMDVjLS4wNjktLjAxNC0uMTE2LS4wNTctLjEzLS4xMTktLjA0Mi0uMTkxLjI1My0uNTA3LjU2NC0uNzM0Ljk0LS42NzcgMi4xNi0uODIzIDMuMTg0LS4zODMuNS4yMTMuOTcxLjU5MyAxLjIuOTY3LjExMS4xODEuMTMzLjMyMS4wNjEuMzk1LS4xMTIuMTE4LS4zMzUuMDE3LS43NC0uMTY2aC0uMDAxbC0uMTItLjA1NXptLS45MzUuNTMyYy0uMDk0LjAxLS4xODEuMDMtLjI2Ni4wNWwtLjAwNi4wMDFhNC45NTIgNC45NTIgMCAwMS0uMDc1LjAxNyAyLjAxIDIuMDEgMCAwMC0uODA1LjQxM2MtLjE4My4xNi0uMjk2LjMzNi0uMjk1LjQ2IDAgLjA2LjAyNi4wOTMuMDQ2LjExLjAyOC4wMjUuMDYuMDM2LjEuMDM4LjA4My4wMDQuMTk2LS4wMzYuMzUxLS4wOWwuMDkxLS4wMzJhMy43NzcgMy43NzcgMCAwMTEuOTEtLjIwN2wuMDM4LjAwNWMuMjc5LjAzMy40NDcuMDUzLjUxNC0uMDUyLjAyLS4wMy4wNDQtLjA5NS0uMDE3LS4xOTMtLjE0Mi0uMjMtLjc1My0uNjE4LTEuNTg2LS41MnptNS42MzUgMS43OGMtLjE0Ny4zLS42LjM3OS0xLjAxLjE3Ny0uNDEtLjIwMi0uNjI0LS42MDgtLjQ3Ny0uOTA3LjE0Ny0uMy42LS4zOCAxLjAxLS4xNzcuNDEuMjAxLjYyNC42MDguNDc3LjkwN3ptMS42My0yLjEzYy0uMzMzLS4wMDYtLjYxLjM2LS42MTguODE4LS4wMDguNDU4LjI1Ny44MzMuNTkuODM5LjMzNC4wMDYuNjEtLjM2LjYxOC0uODE4LjAwOC0uNDU4LS4yNTYtLjgzMy0uNTktLjgzOXptLTIyLjc2MSA4LjIwOGMuMTMyLS4wMy4yNjgtLjA2Mi4zNTEuMDQyLjAzLjAzNC4wNzguMTEzLjAyMi4yNDItLjA5NS4yMi0uNDY4LjUyLTEuMDAyLjUtLjU1LS4wNDMtMS4xNi0uNDQzLTEuMjQ0LTEuNDM3LS4wNC0uNDkuMTQ1LTEuMDg5LjI2LTEuNDAxLjIyLS42MDUuMDItMS4yMzgtLjQ5Ni0xLjU3N2ExLjM0IDEuMzQgMCAwMC0xLjg1OC4zODdjLS4xNTguMjQ3LS4yNTUuNTU1LS4zMDYuNzItLjAxNC4wNDUtLjAyNS4wOC0uMDM0LjEwMi0uMTE2LjMxMy0uMzAyLjQwNS0uNDI3LjM4OC0uMDYtLjAwOC0uMTQyLS4wNDgtLjE5NC0uMTkxLS4xNDMtLjM5Mi0uMDI3LTEuNS43MS0yLjMxNGEyLjIzMyAyLjIzMyAwIDAxMS45MTUtLjY5Yy43NDIuMDk0IDEuMzU5LjU0MyAxLjczNyAxLjI2My41MDMuOTU4LjA1NSAxLjk2My0uMjEyIDIuNTYzbC0uMDA1LjAxYTguNSA4LjUgMCAwMC0uMDc0LjE2OWMtLjE2Ny4zOTgtLjE3Ni43NDYtLjAyNC45OC4xMTcuMTc5LjMyNC4yODQuNTcuMjg4LjExNC4wMDIuMjE4LS4wMjIuMzEtLjA0M2guMDAxeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
                            alt=""
                          />
                        </div>
                      </button>
                    </div>
                    <div className="align-center-1O1Ww snipcss0-7-21-26">
                      <form className="root-1WdPk handle-live-help-_OgMK snipcss0-8-26-27">
                        <button
                          className="search-button-1spEe snipcss0-9-27-28"
                          type="button"
                        >
                          <span
                            aria-hidden="true"
                            className="search-icon-YhRw5 snipcss0-10-28-29"
                          ></span>
                          <span className="button-text-2V1Gs snipcss0-10-28-30">
                            Search Mailchimp
                          </span>
                        </button>
                      </form>
                    </div>
                    <div className="align-right-3B6pa cluster-3D5Qr nowrap-34OZ- snipcss0-7-21-31">
                      <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing6-zD2QG snipcss0-8-31-32">
                        <button
                          className="root-sBgFt container-3-bH7 primary-33czz liveExpertHelpBtn-3ju2V appHeaderliveExpertHelpBtn-1RFSO snipcss0-9-32-33"
                          data-id="ipd-appHeader-liveExpertHelpBtn"
                          type="button"
                        >
                          <span className="temporarySpan-2iF2p snipcss0-10-33-34">
                            <div className="cluster-3D5Qr nowrap-34OZ- snipcss0-11-34-35">
                              <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe snipcss0-12-35-36">
                                <div className="online-xMPbD snipcss0-13-36-37"></div>
                                <span className="snipcss0-13-36-38">
                                  Live expert help
                                </span>
                              </div>
                            </div>
                          </span>
                        </button>
                        <div
                          className="avatarRoot-3kLoc snipcss0-9-32-39"
                          data-testid="app-header-avatar-menu"
                          data-id="ipd-appHeader-accountMenuIcon"
                          data-pendo-target="account-menu"
                        >
                          <div className="identityGroup-2kpTi snipcss0-10-39-40">
                            <div className="identityRoot-3EJCo snipcss0-11-40-41">
                              <div className="container-3dbgU snipcss0-12-41-42">
                                <button
                                  id="account-settings-btn"
                                  data-analytics-tag="AppHeader-Identity"
                                  type="button"
                                  className="btn-2N1xe snipcss0-13-42-43"
                                  aria-controls="mc:2"
                                  aria-expanded="false"
                                  aria-label="account settings button"
                                >
                                  <div className="avatar-2-CVF snipcss0-14-43-44">
                                    <img
                                      alt="Signed in as Ali Next Web Lines, Account Menu"
                                      className="avatarImage-1YlIs snipcss0-15-44-45"
                                      src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fElUfGVufDB8fDB8fHww"
                                    />
                                  </div>
                                </button>
                                <span className="root-3ALOt default-3A6wB notificationBadge-2RFjU snipcss0-13-42-46">
                                  <span className="wink-visually-hidden snipcss0-14-46-47">
                                    (
                                  </span>
                                  2
                                  <span className="wink-visually-hidden snipcss0-14-46-48">
                                    )
                                  </span>
                                </span>
                                <span className="wink-visually-hidden snipcss0-13-42-49">
                                  {" "}
                                  notifications
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="light snipcss0-10-39-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="wink snipcss0-3-6-51">
              <div className="theme-1OLRx snipcss0-4-51-52">
                <div className="light snipcss0-5-52-53">
                  <div
                    data-testid="LeftNavigation"
                    className="root-kjeIf shellNavigationLeftNav-3iPdf snipcss0-6-53-54"
                  >
                    <nav className="navItems-1Kfmk snipcss0-7-54-55">
                      <ul className="stack-1qp4V spacing4-1xt6w navItems-1Kfmk minHeightNav-2mej_ snipcss0-8-55-56">
                        <li
                          onClick={() => handleDynamicLInk("/newcomaping")}
                          className="createItem-1mIzO snipcss0-9-56-57"
                        >
                          <a
                            style={{ outline: "1px solid #1b8a95" }}
                            className="root-sBgFt container-3-bH7 secondary-1_P2K createButton-1NK_y snipcss0-10-57-58"
                          >
                            <span className="temporarySpan-2iF2p snipcss0-11-58-59">
                              <span className="createIcon-qJ3Qk snipcss0-12-59-60"></span>
                              Create
                            </span>
                          </a>
                        </li>
                        {/* HOme */}
                        <li
                          data-analytics-tag="Nav-Campaigns"
                          className="navItem-GOmDa snipcss0-9-56-61"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-61-62"
                            aria-controls="mc:4"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy campaigns-3-h-u expanded-222wz snipcss0-11-62-63"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-62-64">
                              <span
                                className="label-30mF1 snipcss0-12-64-65"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Campaigns
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-64-66">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-66-67"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-61-68">
                            <div
                              className="snipcss0-11-68-69 style-Rtn1I"
                              id="style-Rtn1I"
                            >
                              <ul id="mc:4" className="snipcss0-12-69-70">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/allcompaings")
                                  }
                                  data-analytics-tag="SecondaryNav-All campaigns"
                                  className="snipcss0-13-70-71"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All campaigns
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Automations"
                          className="navItem-GOmDa snipcss0-9-56-75"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-75-76"
                            aria-controls="mc:6"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy automations-Vsn6O expanded-222wz snipcss0-11-76-77"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-76-78">
                              <span
                                className="label-30mF1 snipcss0-12-78-79"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Automations
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-78-80">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-80-81"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-75-82">
                            <div
                              className="snipcss0-11-82-83 style-FZrke"
                              id="style-FZrke"
                            >
                              <ul id="mc:6" className="snipcss0-12-83-84">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/automationoverview")
                                  }
                                  data-analytics-tag="SecondaryNav-Overview"
                                  className="snipcss0-13-84-85"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        OverViews
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/automationoverview")
                                  }
                                  data-analytics-tag="SecondaryNav-All journeys"
                                  className="snipcss0-13-84-89"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All Journeys
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/automationoverview")
                                  }
                                  data-analytics-tag="SecondaryNav-Pre-built journeys"
                                  className="snipcss0-13-84-93"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-94-95">
                                      <span className="snipcss0-16-95-96">
                                        Pre-built journeys
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/transactional")
                                  }
                                  data-analytics-tag="SecondaryNav-Transactional email"
                                  className="snipcss0-13-84-97"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-98-99">
                                      <span className="snipcss0-16-99-100">
                                        Transactional email
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Audience"
                          className="navItem-GOmDa snipcss0-9-56-101"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-101-102"
                            aria-controls="mc:11"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy audience-A6AiK expanded-222wz snipcss0-11-102-103"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-102-104">
                              <span
                                className="label-30mF1 snipcss0-12-104-105"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Audience
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-104-106">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-106-107"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-101-108">
                            <div
                              className="snipcss0-11-108-109 style-JdVoN"
                              id="style-JdVoN"
                            >
                              <ul id="mc:11" className="snipcss0-12-109-110">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/audiencedashboard")
                                  }
                                  data-analytics-tag="SecondaryNav-Audience dashboard"
                                  className="snipcss0-13-110-111"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-112-113">
                                      <span className="snipcss0-16-113-114">
                                        Audience dashboard
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/allcontacts")
                                  }
                                  data-analytics-tag="SecondaryNav-All contacts"
                                  className="snipcss0-13-110-115"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-116-117">
                                      <span className="snipcss0-16-117-118">
                                        All contacts
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/signupforms")
                                  }
                                  data-analytics-tag="SecondaryNav-Signup forms"
                                  className="snipcss0-13-110-119"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-120-121">
                                      <span className="snipcss0-16-121-122">
                                        Signup forms
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() => handleDynamicLInk("/tags")}
                                  data-analytics-tag="SecondaryNav-Tags"
                                  className="snipcss0-13-110-123"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-124-125">
                                      <span className="snipcss0-16-125-126">
                                        Tags
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() => handleDynamicLInk("/segments")}
                                  data-analytics-tag="SecondaryNav-Segments"
                                  className="snipcss0-13-110-127"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-128-129">
                                      <span className="snipcss0-16-129-130">
                                        Segments
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/mailchimpsurvy")
                                  }
                                  data-analytics-tag="SecondaryNav-Surveys"
                                  className="snipcss0-13-110-131"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-132-133">
                                      <span className="snipcss0-16-133-134">
                                        Surveys
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Subscriber preferences"
                                  className="snipcss0-13-110-135"
                                >
                                  <a
                                    aria-label="Subscriber preferences"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-135-136"
                                    role="link"
                                    aria-describedby="mc:53"
                                  >
                                    <div className="snipcss0-15-136-137">
                                      <span className="snipcss0-16-137-138">
                                        Subscriber preferences
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Inbox"
                                  className="snipcss0-13-110-139"
                                >
                                  <a
                                    aria-label="Inbox"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-139-140"
                                    role="link"
                                    aria-describedby="mc:54"
                                  >
                                    <div className="snipcss0-15-140-141">
                                      <span className="snipcss0-16-141-142">
                                        Inbox
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Analytics"
                          className="navItem-GOmDa snipcss0-9-56-143"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-143-144"
                            aria-controls="mc:20"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy analytics-3SiQv expanded-222wz snipcss0-11-144-145"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-144-146">
                              <span
                                className="label-30mF1 snipcss0-12-146-147"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Analytics
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-146-148">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-148-149"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-143-150">
                            <div
                              className="snipcss0-11-150-151 style-GtTVY"
                              id="style-GtTVY"
                            >
                              <ul id="mc:20" className="snipcss0-12-151-152">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/marketingdashboard")
                                  }
                                  data-analytics-tag="SecondaryNav-Marketing dashboard"
                                  className="snipcss0-13-152-153"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-154-155">
                                      <span className="snipcss0-16-155-156">
                                        Marketing dashboard
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/audienceanalytics")
                                  }
                                  data-analytics-tag="SecondaryNav-Audience"
                                  className="snipcss0-13-152-157"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-158-159">
                                      <span className="snipcss0-16-159-160">
                                        Audience
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-152-161"
                                >
                                  <a
                                    onClick={() =>
                                      handleDynamicLInk("/reports")
                                    }
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-162-163">
                                      <span className="snipcss0-16-163-164">
                                        Reports
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Custom reports"
                                  className="snipcss0-13-152-165"
                                >
                                  <a
                                    aria-label="Custom reports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-165-166"
                                    role="link"
                                    aria-describedby="mc:58"
                                    href="/analytics/custom-reports"
                                  >
                                    <div className="snipcss0-15-166-167">
                                      <span className="snipcss0-16-167-168">
                                        Custom reports
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Website"
                          className="navItem-GOmDa snipcss0-9-56-169"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-169-170"
                            aria-controls="mc:25"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy websites-39YWq expanded-222wz snipcss0-11-170-171"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-170-172">
                              <span
                                className="label-30mF1 snipcss0-12-172-173"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Website
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-172-174">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-174-175"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-169-176">
                            <div
                              className="snipcss0-11-176-177 style-EgfMh"
                              id="style-EgfMh"
                            >
                              <ul id="mc:25" className="snipcss0-12-177-178">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/websiteoverview")
                                  }
                                  data-analytics-tag="SecondaryNav-Website"
                                  className="snipcss0-13-178-179"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-180-181">
                                      <span className="snipcss0-16-181-182">
                                        Website
                                      </span>
                                    </div>
                                  </a>
                                </li>

                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/websitesetting")
                                  }
                                  data-analytics-tag="SecondaryNav-Settings"
                                  className="snipcss0-13-178-183"
                                >
                                  <a className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72">
                                    <div className="snipcss0-15-184-185">
                                      <span className="snipcss0-16-185-186">
                                        Settings
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/websitereports")
                                  }
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-178-187"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-188-189">
                                      <span className="snipcss0-16-189-190">
                                        Reports
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Content"
                          className="navItem-GOmDa snipcss0-9-56-191"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-191-192"
                            aria-controls="mc:29"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy contentStudio-1mjjE expanded-222wz snipcss0-11-192-193"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-192-194">
                              <span
                                className="label-30mF1 snipcss0-12-194-195"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Content
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-194-196">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-196-197"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-191-198">
                            <div
                              className="snipcss0-11-198-199 style-rY2xm"
                              id="style-rY2xm"
                            >
                              <ul id="mc:29" className="snipcss0-12-199-200">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/creativeassistant")
                                  }
                                  data-analytics-tag="SecondaryNav-Creative Assistant"
                                  className="snipcss0-13-200-201"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-202-203">
                                      <span className="snipcss0-16-203-204">
                                        Creative Assistant
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-My files"
                                  className="snipcss0-13-200-205"
                                >
                                  <a
                                    aria-label="My files"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-205-206"
                                    role="link"
                                    aria-describedby="mc:63"
                                    href="/content/#myfiles"
                                  >
                                    <div className="snipcss0-15-206-207">
                                      <span className="snipcss0-16-207-208">
                                        My files
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Email templates"
                                  className="snipcss0-13-200-209"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-210-211">
                                      <span className="snipcss0-16-211-212">
                                        Email templates
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          data-analytics-tag="Nav-Integrations"
                          className="navItem-GOmDa snipcss0-9-56-213"
                        >
                          <button
                            aria-expanded="true"
                            type="button"
                            className="button-1_vuD snipcss0-10-213-214"
                            aria-controls="mc:33"
                            data-testid="primary-button"
                            role="button"
                          >
                            <span className="icon-1Nsyy integrations-1x251 expanded-222wz snipcss0-11-214-215"></span>
                            <div className="labelContainer-XqeX9 snipcss0-11-214-216">
                              <span
                                className="label-30mF1 snipcss0-12-216-217"
                                data-analytics-tag="leftnav-primnav-inner-link-label"
                              >
                                Integrations
                              </span>
                              <div className="downArrow--nVw9 snipcss0-12-216-218">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  className="wink-icon snipcss0-13-218-219"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div className="snipcss0-10-213-220">
                            <div
                              className="snipcss0-11-220-221 style-bVLoe"
                              id="style-bVLoe"
                            >
                              <ul id="mc:33" className="snipcss0-12-221-222">
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/integrationdiscover")
                                  }
                                  data-analytics-tag="SecondaryNav-Discover"
                                  className="snipcss0-13-222-223"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-224-225">
                                      <span className="snipcss0-16-225-226">
                                        Discover
                                      </span>
                                      <span className="root-3ALOt new-1T1aO badge_padding-2UxcF snipcss0-16-225-227">
                                        <span className="wink-visually-hidden snipcss0-17-227-228">
                                          (
                                        </span>
                                        New
                                        <span className="wink-visually-hidden snipcss0-17-227-229">
                                          )
                                        </span>
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  onClick={() =>
                                    handleDynamicLInk("/integrationmanage")
                                  }
                                  data-analytics-tag="SecondaryNav-Manage"
                                  className="snipcss0-13-222-230"
                                >
                                  <a
                                    to="#"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-231-232">
                                      <span className="snipcss0-16-232-233">
                                        Manage
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="account-3ri0E appHeaderNotCollapsed-311nL scrollBorderBottom-2LDg0 snipcss0-8-55-234">
                        <div className="collapseIcon--FJm2 snipcss0-9-234-235">
                          <button
                            type="button"
                            data-testid="collapse-icon-button"
                            className="collapse-2FuQj snipcss0-10-235-236"
                            aria-label="Collapse navigation"
                          >
                            <span className="icon-1HgY2 snipcss0-11-236-237"></span>
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="wink snipcss0-3-6-238">
              <div className="root-35Mg8 snipcss0-4-238-239">
                <ul className="stack-1qp4V spacing1-2v2JO root-3AJ2b supportButtons-1wLtK snipcss0-5-239-240">
                  <li className="snipcss0-6-240-241">
                    <div className="root-2SOqc snipcss0-7-241-242">
                      <button
                        onClick={handleourhidPages}
                        className="root-1khsy helpMenuButton-10MYH snipcss0-8-242-243"
                        id="mc:38"
                        aria-expanded="false"
                        type="button"
                        aria-haspopup="true"
                      >
                        <span className="wink-visually-hidden snipcss0-9-243-244">
                          Help
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          focusable="false"
                          aria-hidden="true"
                          className="wink-icon snipcss0-9-243-245"
                        >
                          <path d="M10.92 15.2h2.24v-.64c.06-1.12 1.02-1.94 1.96-2.84.9-.88 1.76-1.8 1.76-3.22 0-1.94-1.34-3.5-4.2-3.5C10 5 8.14 6.64 8 9.26h2.32c.14-1.38 1-2.26 2.24-2.26 1.22 0 1.78.66 1.78 1.68 0 .879-.66 1.52-1.4 2.26-.96.94-2.02 1.92-2.02 3.5v.76zm1.1 4.44c.88 0 1.6-.68 1.6-1.54 0-.88-.72-1.56-1.6-1.56-.9 0-1.64.68-1.64 1.56 0 .86.74 1.54 1.64 1.54z"></path>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <main
              id="content"
              className="body-1uBId snipcss0-3-6-246"
              style={{ position: "relative" }}
            >
              <div className="">
                {currentpage === "overview" && (
                  <>
                    {/*  */}

                    {/* overview header start */}
                    <header
                      style={{
                        width: "100%",
                        border: "1px solid gainsboro",
                        position: "sticky",
                        backgroundColor: "white",
                        zIndex: 999,
                        top: "0px",
                      }}
                      class="root-1rj4d standard-2H4cn header-3IL6q snipcss-jGiIL"
                    >
                      <div class="cluster-3D5Qr nowrap-34OZ-">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <div
                            class="stack-1qp4V spacing1-2v2JO style-mDVKE"
                            id="style-mDVKE"
                          >
                            <nav
                              aria-labelledby="mc:241"
                              class="breadcrumbs-1_9F-"
                            >
                              <span id="mc:241" class="wink-visually-hidden">
                                Breadcrumbs
                              </span>
                              <ul>
                                <li>
                                  <a
                                    class="root-sBgFt breadcrumb-1MaXq"
                                    href="/campaigns"
                                  >
                                    All campaigns
                                  </a>
                                </li>
                              </ul>
                            </nav>
                            <div class="titleMenuContainer-QrDF_">
                              <h1 class="heading-4-3r-mu root-PihPG">
                                Email report
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="cluster-3D5Qr">
                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                            <div>
                              <div class="root-eTq9L">
                                <button
                                  style={{ border: "1px solid  #007c89" }}
                                  class="root-sBgFt container-3-bH7 secondary-1_P2K inlineSelect-3Hi8G"
                                  id="mc:242"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Switch report
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
                                </button>
                              </div>
                            </div>
                            <div class="root-eTq9L">
                              <button
                                style={{ border: "1px solid  #007c89" }}
                                class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-3oYdr"
                                id="mc:243"
                                aria-expanded="false"
                                aria-haspopup="true"
                                type="button"
                              >
                                <span class="temporarySpan-2iF2p">
                                  Actions
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
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
                    {/* Feedback start */}
                    <div
                      style={{ maxWidth: "90%", margin: "auto" }}
                      class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR snipcss-5O7LJ"
                    >
                      <div id="userFeedback" class="">
                        <div class="cluster-3D5Qr">
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "end",
                            }}
                            class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ"
                          >
                            <p>Share feedback about this page</p>
                            <button class="root-1khsy" type="button">
                              <span class="wink-visually-hidden">
                                Thumbs up
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon feedbackIcon-2UiVl"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.555 2.168a1 1 0 00-1.45.385L6.383 10H3a2 2 0 00-2 2v8a2 2 0 002 2h16.153a2 2 0 001.973-1.671l1.666-10A2 2 0 0020.82 8H15V5.535a2 2 0 00-.89-1.664l-2.555-1.703zM8 20h11.153l1.667-10H14a1 1 0 01-1-1V5.535L11.388 4.46 8 11.236V20zm-5-8h3v8H3v-8z"
                                ></path>
                              </svg>
                            </button>
                            <button class="root-1khsy" type="button">
                              <span class="wink-visually-hidden">
                                Thumbs down
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon feedbackIcon-2UiVl"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.445 21.832a1 1 0 001.45-.385L17.617 14H21a2 2 0 002-2V4a2 2 0 00-2-2H4.847a2 2 0 00-1.973 1.671l-1.666 10A2 2 0 003.18 16H9v2.465a2 2 0 00.89 1.664l2.555 1.703zM16 4H4.847L3.18 14H10a1 1 0 011 1v3.465l1.612 1.075L16 12.764V4zm5 8h-3V4h3v8z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Feed back end  */}
                    {/* New Sender start */}
                    <div
                      style={{ maxWidth: "90%", margin: "auto" }}
                      class="root-W0b4G default-2kLnG cluster-3D5Qr nowrap-34OZ- snipcss-Kp8Xi"
                    >
                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <span class="icon-3fYw1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            focusable="false"
                            aria-hidden="true"
                            class="wink-icon"
                          >
                            <path d="M9 12v-1l2-1h2v6l2 1v1H9v-1l2-1v-4H9zm2.75-4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
                            ></path>
                          </svg>
                        </span>
                        <div class="content-2tUie cluster-3D5Qr nowrap-34OZ-">
                          <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing2-3-fWQ">
                            <div class="copy-1hjCu">
                              <p class="root-3TDqk small-bold-6R-6E">
                                New sender requirements for your domain
                              </p>
                              <span class="root-3TDqk small-secondary-3_Rq2">
                                Google and Yahoo have announced{" "}
                                <span class="root-3TDqk small-bold-6R-6E">
                                  <a
                                    href="https://mailchimp.com/newsroom/google-changes-bulk-senders/"
                                    id="style-p2UBr"
                                    class="style-p2UBr"
                                  >
                                    new requirements for email senders
                                  </a>
                                </span>
                                . To ensure delivery of emails you send in the
                                future, we recommend you authenticate your
                                domain,{" "}
                                <span class="root-3TDqk small-bold-6R-6E">
                                  sm@selanimedia.xyz
                                </span>
                                .
                              </span>
                            </div>
                            <div class="cluster-3D5Qr nowrap-34OZ-">
                              <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR">
                                <button
                                  class="root-sBgFt root-22EAH"
                                  type="button"
                                >
                                  Start authentication
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* New Sender End */}
                    {/* overview header end  */}
                    {/* New Testing Section start  */}
                    <div>
                      <div
                        style={{
                          maxWidth: "90%",
                          margin: "30px auto",
                          backgroundColor: "#f6f6f4",
                        }}
                        class="switcher-2RqDX switcher-3xpn_ snipcss-3Nhcz"
                        tabindex="0"
                      >
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          class="spacing2-1pqd3"
                        >
                          <div class="stack-1qp4V spacing2-3AKCb leftSide-2vVZY">
                            <p class="root-3TDqk heading-3-2i9Gm campaignName-ZCCNZ">
                              {singlereport?.campaignName}
                            </p>
                            <a
                              href="/reports/show?id=6741586"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="viewEmailLink-1eW-8"
                            >
                              View email
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                                style={{
                                  verticalAlign: "middle",
                                  height: "1rem",
                                }}
                              >
                                <path d="M2 2h7v2H4v16h16v-5h2v7H2V2z"></path>
                                <path d="M20 5.414V11h2V2h-9v2h5.586l-9.293 9.293 1.414 1.414L20 5.414z"></path>
                              </svg>
                              <span class="wink-visually-hidden">
                                (opens in new window)
                              </span>
                            </a>
                          </div>
                          <div class="stack-1qp4V spacing1-2v2JO rightSide-19yXN">
                            <div
                              style={{ borderBottom: "none" }}
                              class="detailRow-187Kt cluster-3D5Qr"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  borderBottom: "none",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Recipients</p>
                                <a
                                  class="recipientsLink-15QX6"
                                  href="/reports/activity/sent?id=6741586"
                                >
                                  {Number(
                                    singlereport?.audienceRecipients
                                  )?.toLocaleString()}
                                </a>
                              </div>
                            </div>
                            <div class="detailRow-187Kt cluster-3D5Qr">
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Audience</p>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                    <p class="root-3TDqk small-2qKd5">
                                      {singlereport?.audienceName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="detailRow-187Kt cluster-3D5Qr">
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Subject</p>
                                <p class="root-3TDqk small-2qKd5">
                                  {singlereport?.subject}
                                </p>
                              </div>
                            </div>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY">
                                <div
                                  style={{ width: "100%" }}
                                  class="cluster-3D5Qr"
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      marginTop: "3px",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ"
                                  >
                                    <span
                                      style={{ marginTop: "-3px" }}
                                      class=""
                                    >
                                      status
                                    </span>
                                    <p class="root-3TDqk small-2qKd5">
                                      <span
                                        style={{
                                          backgroundColor: "#d9ebcb",
                                          fontSize: "14px",
                                          padding: "2px 4px",
                                          borderRadius: "3px",
                                        }}
                                        class="root-1tapB success-1pnBG badge-2l1DO"
                                      >
                                        Sent
                                      </span>
                                      {singlereport?.sendTime}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* New Testing Section end */}
                    {/* Main Navigation start */}
                    <div style={{ maxWidth: "90%", margin: "auto" }}>
                      <nav
                        style={{ margin: "50px 0px", position: "relative" }}
                        class="navigationMenu-1zK9M"
                      >
                        <ul class="menu-gUP8n">
                          <li
                            onClick={() => handlloadingandChange("overview")}
                            class="isActive-2tLXY"
                          >
                            <a style={{ color: "#007c89" }} href="#">
                              Overview
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("clickperformance")}
                          >
                            <a style={{ color: "gray" }} href="#">
                              Click performance
                            </a>
                          </li>
                          <li
                            class=""
                            onClick={() => setcurrentpage("recipientactivity")}
                          >
                            <div style={{ paddingBottom: "15px" }}>
                              Recipient activity
                            </div>
                            {/*  */}
                          </li>
                          <li
                            onClick={() => setcurrentpage("ecommerace")}
                            class=""
                          >
                            <a href="#">Ecommerce</a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("contentoptimzer")}
                            class=""
                          >
                            <a href="#">Content Optimizer</a>
                          </li>
                          {/* <li onClick={() => setcurrentpage("social")} class="">
                            <a href="#">Social</a>
                          </li> */}
                          <li onClick={() => setcurrentpage("more")} class="">
                            <a href="#">More</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Main Navigation End */}
                    {/* Email Performace  start */}
                    <div style={{ maxWidth: "90%", margin: "50px auto" }}>
                      <div class="stack-1qp4V snipcss-DIRVn">
                        <div
                          style={{ padding: "20px 30px" }}
                          class="container-1QcyQ dataCardWrap-1C6cF"
                        >
                          <div class="header-epI_B">
                            <div
                              style={{ marginBottom: "10px" }}
                              class="stack-1qp4V spacing1-2v2JO"
                            >
                              <p
                                style={{ paddingBottom: "10px" }}
                                class="root-3TDqk heading-4-EoGPh"
                              >
                                Email performance
                              </p>

                              <p class="root-3TDqk small-secondary-3_Rq2">
                                {todaysFormatDate
                                  ? `${formattedDate} - ${todaysFormatDate}`
                                  : formattedDate}
                              </p>
                            </div>
                          </div>
                          <div class="section-kJ-Iy">
                            <div class="borderTop-14P4Y">
                              <div class="cluster-3D5Qr">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                  }}
                                  class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                >
                                  <div class="stack-1qp4V">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="coin-1Lahx">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Open rate"
                                          />
                                        </div>
                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                              <div class="kaleUnderline-2gW5D">
                                                <p class="root-3TDqk medium-3AcAC">
                                                  Open rate
                                                </p>
                                              </div>
                                              <span
                                                role="status"
                                                aria-atomic="true"
                                              >
                                                <span class="wink-visually-hidden"></span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                              <h3 class="heading-3-eDQNF root-PihPG">
                                                {singlereport?.openedPercentage}
                                                %
                                              </h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="linkMargin-3VxI6 cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <a
                                          class="kaleText-kjDis"
                                          href="/reports/activity/opened?id=6741586"
                                        >
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            {Number(
                                              singlereport?.opened
                                            )?.toLocaleString()}{" "}
                                            opened
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="coin-1Lahx">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Click rate"
                                          />
                                        </div>
                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                              <div class="kaleUnderline-2gW5D">
                                                <p class="root-3TDqk medium-3AcAC">
                                                  Click rate
                                                </p>
                                              </div>
                                              <span
                                                role="status"
                                                aria-atomic="true"
                                              >
                                                <span class="wink-visually-hidden"></span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                              <h3 class="heading-3-eDQNF root-PihPG">
                                                {
                                                  singlereport?.clickedPercentage
                                                }
                                                %
                                              </h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="linkMargin-3VxI6 cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <a
                                          class="kaleText-kjDis"
                                          href="/reports/activity/clicked?id=6741586"
                                        >
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            {Number(
                                              singlereport?.clicks
                                            )?.toLocaleString()}{" "}
                                            clicked
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="coin-1Lahx">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Bounce rate"
                                          />
                                        </div>
                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                              <div class="kaleUnderline-2gW5D">
                                                <p class="root-3TDqk medium-3AcAC">
                                                  Bounce rate
                                                </p>
                                              </div>
                                              <span
                                                role="status"
                                                aria-atomic="true"
                                              >
                                                <span class="wink-visually-hidden"></span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                              <h3 class="heading-3-eDQNF root-PihPG">
                                                {
                                                  singlereport?.bouncedpercentage
                                                }
                                                %
                                              </h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="linkMargin-3VxI6 cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <a
                                          class="kaleText-kjDis"
                                          href="/reports/activity/bounced?id=6741586"
                                        >
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            {Number(
                                              singlereport?.bounced
                                            )?.toLocaleString()}{" "}
                                            bounced
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="coin-1Lahx">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Unsubscribe rate"
                                          />
                                        </div>
                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                              <div class="kaleUnderline-2gW5D">
                                                <p class="root-3TDqk medium-3AcAC">
                                                  Unsubscribe rate
                                                </p>
                                              </div>
                                              <span
                                                role="status"
                                                aria-atomic="true"
                                              >
                                                <span class="wink-visually-hidden"></span>
                                              </span>
                                            </div>
                                          </div>
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                              <h3 class="heading-3-eDQNF root-PihPG">
                                                {
                                                  singlereport?.unsubscribedpercentage
                                                }
                                                %
                                              </h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="linkMargin-3VxI6 cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <a
                                          class="kaleText-kjDis"
                                          href="/reports/activity/unsubscribed?id=6741586"
                                        >
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            {Number(
                                              singlereport?.unsubscribed
                                            )?.toLocaleString()}{" "}
                                            unsubscribed
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class=""
                          style={{
                            border: "1px solid gainsboro",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                            borderTop: "none",
                          }}
                        >
                          <ul role="list" class="">
                            <li class="" style={{ padding: "20px 30px" }}>
                              <div class="item-1QjiG">
                                <button
                                  style={{ backgroundColor: "transparent" }}
                                  aria-expanded="true"
                                  type="button"
                                  class="heading-2XXAK"
                                >
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
                                  Additional email details
                                </button>
                                <div class="body-Xc_xO">
                                  <div id="style-hJwjv" class="style-hJwjv">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                        <div class="stack-1qp4V spacing2-3AKCb column-3NIVq">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Successful deliveries
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                <a href="/reports/activity/sent?id=6741586">
                                                  {Number(
                                                    singlereport?.successfulDeliveriesCount
                                                  )?.toLocaleString()}{" "}
                                                  (
                                                  {
                                                    singlereport?.successfulDeliveriesPercentage
                                                  }
                                                  %)
                                                </a>
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Total opens
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                <a href="/reports/activity/opened?id=6741586">
                                                  {Number(
                                                    singlereport?.opened
                                                  )?.toLocaleString()}{" "}
                                                </a>
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Last opened
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.lastOpened}
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Forwarded
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.forwarded}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="stack-1qp4V spacing2-3AKCb column-3NIVq">
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Clicks per unique opens
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                <a href="/analytics/reports/click-performance?id=6741586">
                                                  {
                                                    singlereport?.clickPerUniqueOpens
                                                  }
                                                  %
                                                </a>
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Total clicks
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                <a href="/analytics/reports/click-performance?id=6741586">
                                                  {Number(
                                                    singlereport?.clicks
                                                  )?.toLocaleString()}{" "}
                                                </a>
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Last clicked
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.lastClicked}
                                              </p>
                                            </div>
                                          </div>
                                          <hr />
                                          <div class="cluster-3D5Qr">
                                            <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                              <p class="root-3TDqk small-2qKd5">
                                                Abuse reports
                                              </p>
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.abuseReports}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Email Performance End */}
                    {/* Click Performace End */}
                    {/* 24 hours grpah start */}
                    {/* <div style={{ maxWidth: "90%", margin: "auto" }}>
                      <div class="chartWrapper-32qb6 snipcss-xJxHm">
                        <div
                          style={{ padding: "20px 30px" }}
                          class="container-1QcyQ"
                        >
                          <div class="header-epI_B">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsFlexEnd-3W8aW justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <h4 class="heading-4-3r-mu root-PihPG">
                                    24 hour performance snapshot
                                  </h4>
                                  <p class="root-3TDqk small-secondary-3_Rq2">
                                    {yesterdaysFormatDate}{" "}
                                    {todaysFormatDate ? "-" : ""}{" "}
                                    {todaysFormatDate}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div class="section-kJ-Iy">
                            <div class="borderTop-14P4Y">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR">
                                    <div
                                      style={{ width: "100%" }}
                                      class="root-TXRyV inlineSmall-RhQ4P"
                                    >
                                      <label
                                        style={{ justifyContent: "flex-end" }}
                                        id="mc:269"
                                        for="mc:268"
                                        class=""
                                      >
                                        Metric:
                                      </label>
                                      <div class="listbox-1KRYD">
                                        <span
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                          tabindex="0"
                                          class="selectedValue-1AZV5"
                                          id="mc:270-trigger"
                                          aria-labelledby="mc:269"
                                          role="combobox"
                                          aria-autocomplete="none"
                                          aria-haspopup="listbox"
                                          aria-expanded="false"
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                            class="metricLabelWithCoin-2nJLT cluster-3D5Qr"
                                            data-testid="metric-label-with-coin"
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                              class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe"
                                            >
                                              <div class="coin-1Lahx">
                                                <img
                                                  src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                  alt="Click rate"
                                                />
                                              </div>
                                              <p
                                                style={{
                                                  color: "#007c89",
                                                  marginTop: "15px",
                                                }}
                                                class="root-3TDqk small-bold-6R-6E"
                                              >
                                                Click rate
                                              </p>
                                            </div>
                                          </div>
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
                                  </div>
                                </div>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div class="chartContainerFull-3DbFo">
                                      <div
                                        data-highcharts-chart="5"
                                        id="style-DQWMR"
                                        class="style-DQWMR"
                                      >
                                        <div
                                          id="highcharts-zjqvp5f-70"
                                          dir="ltr"
                                          class="highcharts-container  style-3lTgO"
                                        >
                                          <svg
                                            version="1.1"
                                            class="highcharts-root"
                                            style={{
                                              fontFamily: "sans-serif",
                                              fontSize: "1rem",
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="982"
                                            height="255"
                                            viewBox="0 0 982 255"
                                            role="img"
                                            aria-label=""
                                          >
                                            <desc>
                                              Created with Highcharts 11.1.0
                                            </desc>
                                            <defs>
                                              <filter id="highcharts-drop-shadow-5">
                                                <fedropshadow
                                                  dx="1"
                                                  dy="1"
                                                  flood-color="#000000"
                                                  flood-opacity="0.75"
                                                  stdDeviation="2.5"
                                                ></fedropshadow>
                                              </filter>
                                              <clipPath id="highcharts-zjqvp5f-71-">
                                                <rect
                                                  x="0"
                                                  y="0"
                                                  width="914"
                                                  height="162"
                                                  fill="none"
                                                ></rect>
                                              </clipPath>
                                              <clipPath id="highcharts-zjqvp5f-96-">
                                                <rect
                                                  x="0"
                                                  y="0"
                                                  width="914"
                                                  height="162"
                                                  fill="none"
                                                ></rect>
                                              </clipPath>
                                            </defs>
                                            <rect
                                              fill="#ffffff"
                                              class="highcharts-background"
                                              filter="none"
                                              x="0"
                                              y="0"
                                              width="982"
                                              height="255"
                                              rx="0"
                                              ry="0"
                                            ></rect>
                                            <rect
                                              fill="none"
                                              class="highcharts-plot-background"
                                              x="58"
                                              y="10"
                                              width="914"
                                              height="162"
                                              filter="none"
                                            ></rect>
                                            <rect
                                              fill="none"
                                              class="highcharts-plot-border"
                                              data-z-index="1"
                                              stroke="#cccccc"
                                              stroke-width="0"
                                              x="58"
                                              y="10"
                                              width="914"
                                              height="162"
                                            ></rect>
                                            <g
                                              class="highcharts-grid highcharts-xaxis-grid"
                                              data-z-index="1"
                                            >
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 95.5 10 L 95.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 133.5 10 L 133.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 171.5 10 L 171.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 209.5 10 L 209.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 247.5 10 L 247.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 285.5 10 L 285.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 324.5 10 L 324.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 362.5 10 L 362.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 400.5 10 L 400.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 438.5 10 L 438.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 476.5 10 L 476.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 514.5 10 L 514.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 552.5 10 L 552.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 590.5 10 L 590.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 628.5 10 L 628.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 666.5 10 L 666.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 704.5 10 L 704.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 742.5 10 L 742.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 781.5 10 L 781.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 819.5 10 L 819.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 857.5 10 L 857.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 895.5 10 L 895.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 933.5 10 L 933.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 971.5 10 L 971.5 172"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="0"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 57.5 10 L 57.5 172"
                                                opacity="1"
                                              ></path>
                                            </g>
                                            <g
                                              class="highcharts-grid highcharts-yaxis-grid"
                                              data-z-index="1"
                                            >
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="1"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 58 172.5 L 972 172.5"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="1"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 58 132.5 L 972 132.5"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="1"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 58 91.5 L 972 91.5"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="1"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 58 51.5 L 972 51.5"
                                                opacity="1"
                                              ></path>
                                              <path
                                                fill="none"
                                                stroke="#e6e6e6"
                                                stroke-width="1"
                                                stroke-dasharray="none"
                                                data-z-index="1"
                                                class="highcharts-grid-line"
                                                d="M 58 9.5 L 972 9.5"
                                                opacity="1"
                                              ></path>
                                            </g>
                                            <g
                                              class="highcharts-axis highcharts-xaxis"
                                              data-z-index="2"
                                            >
                                              <path
                                                fill="none"
                                                class="highcharts-axis-line"
                                                stroke="#333333"
                                                stroke-width="1"
                                                data-z-index="7"
                                                d="M 58 172.5 L 972 172.5"
                                              ></path>
                                            </g>
                                            <g
                                              class="highcharts-axis highcharts-yaxis"
                                              data-z-index="2"
                                            >
                                              <path
                                                fill="none"
                                                class="highcharts-axis-line"
                                                stroke="#333333"
                                                stroke-width="0"
                                                data-z-index="7"
                                                d="M 58 10 L 58 172"
                                              ></path>
                                            </g>
                                            <g
                                              class="highcharts-series-group"
                                              data-z-index="3"
                                              filter="none"
                                            >
                                              <g
                                                class="highcharts-series highcharts-series-0 highcharts-line-series"
                                                data-z-index="0.1"
                                                opacity="1"
                                                transform="translate(58,10) scale(1 1)"
                                                clip-path="url(#highcharts-zjqvp5f-96-)"
                                              >
                                                <path
                                                  fill="none"
                                                  d="M 19.041666666667 162 L 57.125 162 L 95.208333333334 162 L 133.29166666667 162 L 171.375 162 L 209.45833333334 162 L 247.54166666667 162 L 285.625 162 L 323.70833333334 162 L 361.79166666667 162 L 399.875 162 L 437.95833333334 162 L 476.04166666667 162 L 514.125 162 L 552.20833333334 162 L 590.29166666667 162 L 628.375 162 L 666.45833333334 162 L 704.54166666667 162 L 742.625 162 L 780.70833333334 162 L 818.79166666667 162 L 856.875 162 L 894.95833333334 162"
                                                  class="highcharts-graph"
                                                  data-z-index="1"
                                                  stroke="#8F4BFF"
                                                  stroke-width="1"
                                                  stroke-linejoin="round"
                                                  stroke-linecap="round"
                                                  filter="none"
                                                ></path>
                                                <path
                                                  fill="none"
                                                  d="M 19.041666666667 162 L 57.125 162 L 95.208333333334 162 L 133.29166666667 162 L 171.375 162 L 209.45833333334 162 L 247.54166666667 162 L 285.625 162 L 323.70833333334 162 L 361.79166666667 162 L 399.875 162 L 437.95833333334 162 L 476.04166666667 162 L 514.125 162 L 552.20833333334 162 L 590.29166666667 162 L 628.375 162 L 666.45833333334 162 L 704.54166666667 162 L 742.625 162 L 780.70833333334 162 L 818.79166666667 162 L 856.875 162 L 894.95833333334 162"
                                                  data-z-index="2"
                                                  class="highcharts-tracker-line"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke="rgba(192,192,192,0.0001)"
                                                  stroke-width="21"
                                                ></path>
                                              </g>
                                              <g
                                                class="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker"
                                                data-z-index="0.1"
                                                opacity="1"
                                                transform="translate(58,10) scale(1 1)"
                                                clip-path="none"
                                              >
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 19 166 A 4 4 0 1 1 19.003999999333335 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 57 166 A 4 4 0 1 1 57.00399999933334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 95 166 A 4 4 0 1 1 95.00399999933333 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 133 166 A 4 4 0 1 1 133.00399999933333 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 171 166 A 4 4 0 1 1 171.00399999933333 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 209 166 A 4 4 0 1 1 209.00399999933333 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 247 166 A 4 4 0 1 1 247.00399999933333 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 285 166 A 4 4 0 1 1 285.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 323 166 A 4 4 0 1 1 323.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 361 166 A 4 4 0 1 1 361.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 399 166 A 4 4 0 1 1 399.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 437 166 A 4 4 0 1 1 437.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 476 166 A 4 4 0 1 1 476.00399999933336 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 514 166 A 4 4 0 1 1 514.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 552 166 A 4 4 0 1 1 552.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 590 166 A 4 4 0 1 1 590.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 628 166 A 4 4 0 1 1 628.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 666 166 A 4 4 0 1 1 666.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 704 166 A 4 4 0 1 1 704.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 742 166 A 4 4 0 1 1 742.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 780 166 A 4 4 0 1 1 780.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 818 166 A 4 4 0 1 1 818.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 856 166 A 4 4 0 1 1 856.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 894 166 A 4 4 0 1 1 894.0039999993334 165.99999800000018 Z"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                  class="highcharts-point"
                                                ></path>
                                              </g>
                                            </g>
                                            <text
                                              x="10"
                                              text-anchor="start"
                                              class="highcharts-title style-Htkw9"
                                              data-z-index="4"
                                              y="19"
                                              id="style-Htkw9"
                                            ></text>
                                            <text
                                              x="491"
                                              text-anchor="middle"
                                              class="highcharts-subtitle style-goKWB"
                                              data-z-index="4"
                                              y="21"
                                              id="style-goKWB"
                                            ></text>
                                            <text
                                              x="10"
                                              text-anchor="start"
                                              class="highcharts-caption style-mAh2Z"
                                              data-z-index="4"
                                              y="249"
                                              id="style-mAh2Z"
                                            ></text>
                                            <g
                                              class="highcharts-legend highcharts-no-tooltip"
                                              data-z-index="7"
                                              transform="translate(877,209)"
                                            >
                                              <rect
                                                fill="none"
                                                class="highcharts-legend-box"
                                                rx="0"
                                                ry="0"
                                                stroke="#999999"
                                                stroke-width="0"
                                                filter="none"
                                                x="0"
                                                y="0"
                                                width="94"
                                                height="31"
                                              ></rect>
                                              <g data-z-index="1">
                                                <g>
                                                  <g
                                                    class="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                                                    data-z-index="1"
                                                    transform="translate(8,3)"
                                                  >
                                                    <path
                                                      fill="none"
                                                      class="highcharts-graph"
                                                      stroke-width="1"
                                                      stroke-linecap="round"
                                                      d="M 0.5 14 L 15.5 14"
                                                      stroke="#8F4BFF"
                                                    ></path>
                                                    <path
                                                      fill="#8F4BFF"
                                                      d="M 8 18 A 4 4 0 1 1 8.003999999333336 17.99999800000017 Z"
                                                      class="highcharts-point"
                                                      stroke="#ffffff"
                                                      stroke-width="0"
                                                      opacity="1"
                                                    ></path>
                                                    <text
                                                      x="21"
                                                      y="18"
                                                      text-anchor="start"
                                                      data-z-index="2"
                                                      id="style-oInOE"
                                                      class="style-oInOE"
                                                    >
                                                      Click rate
                                                    </text>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                            <g
                                              class="highcharts-axis-labels highcharts-xaxis-labels"
                                              data-z-index="7"
                                            >
                                              <text
                                                x="77.04166666666733"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-xNVi8"
                                                class="style-xNVi8"
                                              >
                                                7:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-ESQWQ"
                                                class="style-ESQWQ"
                                              >
                                                8:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-I2BhR"
                                                class="style-I2BhR"
                                              >
                                                9:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-GGFO3"
                                                class="style-GGFO3"
                                              >
                                                10:00AM
                                              </text>
                                              <text
                                                x="229.37500000000335"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-4opHr"
                                                class="style-4opHr"
                                              >
                                                11:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-XK4sb"
                                                class="style-XK4sb"
                                              >
                                                12:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-vaLGh"
                                                class="style-vaLGh"
                                              >
                                                1:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-xPr8O"
                                                class="style-xPr8O"
                                              >
                                                2:00PM
                                              </text>
                                              <text
                                                x="381.7083333333333"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-8y1IQ"
                                                class="style-8y1IQ"
                                              >
                                                3:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-f3fBa"
                                                class="style-f3fBa"
                                              >
                                                4:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-2pQoY"
                                                class="style-2pQoY"
                                              >
                                                5:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-erosg"
                                                class="style-erosg"
                                              >
                                                6:00PM
                                              </text>
                                              <text
                                                x="534.0416666666733"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-x8Elj"
                                                class="style-x8Elj"
                                              >
                                                7:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-J62Tp"
                                                class="style-J62Tp"
                                              >
                                                8:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-NVDGJ"
                                                class="style-NVDGJ"
                                              >
                                                9:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-OwbFM"
                                                class="style-OwbFM"
                                              >
                                                10:00PM
                                              </text>
                                              <text
                                                x="686.3750000000034"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-MwXdD"
                                                class="style-MwXdD"
                                              >
                                                11:00PM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-yyeEA"
                                                class="style-yyeEA"
                                              >
                                                12:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-eaFRc"
                                                class="style-eaFRc"
                                              >
                                                1:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-ikC1D"
                                                class="style-ikC1D"
                                              >
                                                2:00AM
                                              </text>
                                              <text
                                                x="838.7083333333334"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                y="195"
                                                opacity="1"
                                                id="style-TV4n7"
                                                class="style-TV4n7"
                                              >
                                                3:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-yhVqq"
                                                class="style-yhVqq"
                                              >
                                                4:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-ID3Ow"
                                                class="style-ID3Ow"
                                              >
                                                5:00AM
                                              </text>
                                              <text
                                                x="0"
                                                text-anchor="middle"
                                                transform="translate(0,0)"
                                                visibility="hidden"
                                                id="style-iz9Tt"
                                                class="style-iz9Tt"
                                              >
                                                6:00AM
                                              </text>
                                            </g>
                                            <g
                                              class="highcharts-axis-labels highcharts-yaxis-labels"
                                              data-z-index="7"
                                            >
                                              <text
                                                x="43"
                                                text-anchor="end"
                                                transform="translate(0,0)"
                                                y="177"
                                                opacity="1"
                                                id="style-4b4Fn"
                                                class="style-4b4Fn"
                                              >
                                                0%
                                              </text>
                                              <text
                                                x="43"
                                                text-anchor="end"
                                                transform="translate(0,0)"
                                                y="137"
                                                opacity="1"
                                                id="style-S9tiG"
                                                class="style-S9tiG"
                                              >
                                                25%
                                              </text>
                                              <text
                                                x="43"
                                                text-anchor="end"
                                                transform="translate(0,0)"
                                                y="96"
                                                opacity="1"
                                                id="style-fx2cn"
                                                class="style-fx2cn"
                                              >
                                                50%
                                              </text>
                                              <text
                                                x="43"
                                                text-anchor="end"
                                                transform="translate(0,0)"
                                                y="56"
                                                opacity="1"
                                                id="style-M5PGg"
                                                class="style-M5PGg"
                                              >
                                                75%
                                              </text>
                                              <text
                                                x="43"
                                                text-anchor="end"
                                                transform="translate(0,0)"
                                                y="15"
                                                opacity="1"
                                                id="style-t7MfS"
                                                class="style-t7MfS"
                                              >
                                                100%
                                              </text>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* 24 hour graph end  */}
                    {/* Email Benchmarking start */}
                    <div style={{ maxWidth: "90%", margin: "20px auto" }}>
                      <div
                        style={{ padding: "20px 30px" }}
                        class="container-1QcyQ snipcss0-0-0-1 snipcss-CULE9"
                      >
                        <div class="header-epI_B snipcss0-1-1-2">
                          <div class="stack-1qp4V spacing1-2v2JO snipcss0-2-2-3">
                            <p class="root-3TDqk heading-4-EoGPh snipcss0-3-3-4">
                              Email benchmarking
                            </p>
                            <p class="root-3TDqk small-secondary-3_Rq2 snipcss0-3-3-5">
                              {todaysFormatDate
                                ? `${formattedDate} - ${todaysFormatDate}`
                                : formattedDate}
                            </p>
                            <p class="root-3TDqk small-secondary-3_Rq2 snipcss0-3-3-6">
                              Your email campaign performance compared to
                              similar businesses. Learn more about{" "}
                              <a
                                class="textLinkRemove-18sDw snipcss0-4-6-7"
                                target="_blank"
                                href="https://mailchimp.com/help/about-campaign-benchmarking/"
                              >
                                benchmarking
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                        <br />
                        <div class="section-kJ-Iy snipcss0-1-1-8">
                          <div class="borderTop-14P4Y snipcss0-2-8-9">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              class="stack-1qp4V spacing2-3AKCb textBlock-1SKMR snipcss0-3-9-10"
                            >
                              <p class="root-3TDqk medium-bold-2nZ0J snipcss0-4-10-11">
                                Get context with your email performance
                              </p>
                              <div class="stack-1qp4V textBlock-1SKMR snipcss0-4-10-12">
                                <p class="root-3TDqk small-2qKd5 snipcss0-5-12-13">
                                  You can now see how your emails perform in
                                  context to similar businesses.
                                </p>
                                <p
                                  style={{ textAlign: "center" }}
                                  class="root-3TDqk small-2qKd5 snipcss0-5-12-14"
                                >
                                  To get this data, you'll need to select your
                                  industry
                                </p>
                              </div>
                              <br />
                              <a
                                style={{ border: "1px solid #007c89" }}
                                class="root-sBgFt container-3-bH7 secondary-1_P2K errorButton-319Q2 snipcss0-4-10-15"
                                href="/account/details?referrer=/analytics/reports/overview&amp;referrer_id=6741586#help-us-improve-stats"
                              >
                                <span class="temporarySpan-2iF2p snipcss0-5-15-16">
                                  Select my industry
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Email Bancharmking End */}
                    {/* Content Optimizer here  */}

                    <br />
                    <br />
                    {/* Content Optimizer end */}
                    {/* Click Performance start */}
                    <div style={{ maxWidth: "90%", margin: "auto" }}>
                      <div class="container-1QcyQ snipcss-71jHQ">
                        <div class="header-epI_B">
                          <div class="header-2UA-4 cluster-3D5Qr">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "25px",
                              }}
                              class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                            >
                              <div class="stack-1qp4V spacing1-2v2JO">
                                <p class="root-3TDqk heading-4-EoGPh">
                                  Click performance
                                </p>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                    <p class="root-3TDqk small-secondary-3_Rq2">
                                      {todaysFormatDate
                                        ? `${formattedDate} - ${todaysFormatDate}`
                                        : formattedDate}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <button
                                style={{ border: "1px solid #007c89" }}
                                class="root-sBgFt container-3-bH7 secondary-1_P2K ctaButton-3RZJ2"
                                id="click-map-button"
                                type="button"
                              >
                                <span class="temporarySpan-2iF2p">
                                  View click maps
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="section-1BGU4">
                          <div class="bottomSection-2n6uU cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="topLinksSection-1Vbr-">
                                <div class="stack-1qp4V spacing1-2v2JO stackClass-1bwFB">
                                  <p class="root-3TDqk medium-3AcAC topLinksHeaderClass-XdQ89">
                                    Top links clicked
                                  </p>
                                  <div>
                                    <div>
                                      <div class="trackStatContainer-3AiwB cluster-3D5Qr nowrap-34OZ-">
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                          class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                        >
                                          <div>
                                            <a
                                              href={
                                                singlereport?.TLCLinkOneTitle
                                              }
                                              class="url-2iSzf"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {singlereport?.TLCLinkOneTitle}
                                              </p>
                                            </a>
                                          </div>
                                          <div class="clicksSection-iwY9s">
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.TLCLinkOneValue}
                                              </p>
                                            </div>
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {
                                                  singlereport?.TLCLinkOnePercentage
                                                }
                                                %
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="trackStatContainer-3AiwB cluster-3D5Qr nowrap-34OZ-">
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                          class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                        >
                                          <div>
                                            <a
                                              href={
                                                singlereport?.TLCLinkTwoTitle
                                              }
                                              class="url-2iSzf"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {singlereport?.TLCLinkTwoTitle}
                                              </p>
                                            </a>
                                          </div>
                                          <div class="clicksSection-iwY9s">
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.TLCLinkTwoValue}
                                              </p>
                                            </div>
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {
                                                  singlereport?.TLCLinkTwoPercentage
                                                }
                                                %
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="trackStatContainer-3AiwB cluster-3D5Qr nowrap-34OZ-">
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                          class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                        >
                                          <div>
                                            <a
                                              href={
                                                singlereport?.TLCLinkThreeTitle
                                              }
                                              class="url-2iSzf"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {singlereport?.TLCLinkThreeTitle &&
                                                  (singlereport
                                                    .TLCLinkThreeTitle.length >
                                                  30
                                                    ? `${singlereport.TLCLinkThreeTitle.slice(
                                                        0,
                                                        30
                                                      )}...`
                                                    : singlereport.TLCLinkThreeTitle)}
                                              </p>
                                            </a>
                                          </div>
                                          <div class="clicksSection-iwY9s">
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-2qKd5">
                                                {
                                                  singlereport?.TLCLinkThreeValue
                                                }
                                              </p>
                                            </div>
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {
                                                  singlereport?.TLCLinkThreePercentage
                                                }
                                                %
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="trackStatContainer-3AiwB cluster-3D5Qr nowrap-34OZ-">
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                          class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                        >
                                          <div>
                                            <a
                                              href={
                                                singlereport?.TLCLinkFourTitle
                                              }
                                              class="url-2iSzf"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {singlereport?.TLCLinkFourTitle}
                                              </p>
                                            </a>
                                          </div>
                                          <div class="clicksSection-iwY9s">
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-2qKd5">
                                                {singlereport?.TLCLinkFourValue}
                                              </p>
                                            </div>
                                            <div class="clicksCell-2tKcS">
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                {
                                                  singlereport?.TLCLinkFourPercentage
                                                }
                                                %
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <a
                                        class="ViewAllLinksClass-39eRl"
                                        href="/analytics/reports/click-performance?id=6741586"
                                      >
                                        <div class="viewLinksClass-3i7AH cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                            <p class="root-3TDqk small-bold-6R-6E">
                                              View all links
                                            </p>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon"
                                            >
                                              <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="" style={{ width: "400px" }}>
                                <div class="previewSection-3JjwF snipcss0-0-0-1 snipcss-Zoi9o">
                                  <div class="previewHtmlContainer-20rUD">
                                    <img
                                      style={{
                                        width: "100%",
                                        height: "265px",
                                        borderRadius: "10px",
                                      }}
                                      src={singlereport?.campaignImage}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    {/*  */}
                    {/* Content Optimizer Start */}
                    <div style={{ maxWidth: "90%", margin: "30px auto" }}>
                      <div class="container-1QcyQ snipcss-9aGfm">
                        <div class="header-epI_B">
                          <div class="cluster-3D5Qr">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                              class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                            >
                              <div class="stack-1qp4V spacing1-2v2JO">
                                <h4 class="heading-4-3r-mu root-PihPG">
                                  Content Optimizer
                                </h4>
                                <p class="root-3TDqk small-secondary-3_Rq2">
                                  {todaysFormatDate
                                    ? `${formattedDate} - ${todaysFormatDate}`
                                    : formattedDate}
                                </p>
                                <p class="root-3TDqk small-secondary-3_Rq2">
                                  See how your email’s content performed and how
                                  to improve it in the future.
                                </p>
                              </div>
                              <button
                                style={{ border: "1px solid #007c89" }}
                                class="root-sBgFt container-3-bH7 secondary-1_P2K"
                                type="button"
                              >
                                <span class="temporarySpan-2iF2p">
                                  View full report
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="section-kJ-Iy">
                          <div class="borderTop-14P4Y">
                            <div class="switcher-2RqDX">
                              <div class="spacing2-1pqd3">
                                <div class="sectionOne-1IFO5">
                                  <p class="root-3TDqk medium-3AcAC">
                                    We analyzed your email content and have{" "}
                                    <a
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      href="/reports/content?id=6741586"
                                    >
                                      2 suggestions
                                    </a>{" "}
                                    for improvement to try next time.
                                  </p>
                                </div>
                                <div class="sectionTwo-2luNV">
                                  <div
                                    class="root-209cT gap7-16IsZ gridHeight-3yPH1 style-HhtgR"
                                    id="style-HhtgR"
                                  >
                                    <span>
                                      <div class="root-z2y3S">
                                        <div class="before-3BYvd">
                                          <span
                                            class="mcds-label-default"
                                            id="mc:127"
                                          >
                                            <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                              Skimmability
                                            </span>
                                          </span>
                                          <p
                                            class="root-3TDqk medium-secondary-1YIN8"
                                            id="mc:129"
                                          >
                                            2 out of 3
                                          </p>
                                        </div>
                                        <div
                                          id="mc:126"
                                          role="progressbar"
                                          aria-labelledby="mc:127"
                                          aria-describedby="mc:129"
                                          aria-valuenow="2"
                                          aria-valuemin="0"
                                          aria-valuemax="3"
                                          class="meterTrack-1pXt2"
                                        >
                                          <div
                                            class="meterFill-3POEf style-JXD7B"
                                            id="style-JXD7B"
                                          ></div>
                                        </div>
                                        <div class="after-2-NpD cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"></div>
                                        </div>
                                      </div>
                                    </span>
                                    <span>
                                      <div class="root-z2y3S">
                                        <div class="before-3BYvd">
                                          <span
                                            class="mcds-label-default"
                                            id="mc:131"
                                          >
                                            <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                              Text &amp; Visuals
                                            </span>
                                          </span>
                                          <p
                                            class="root-3TDqk medium-secondary-1YIN8"
                                            id="mc:133"
                                          >
                                            2 out of 2
                                          </p>
                                        </div>
                                        <div
                                          id="mc:130"
                                          role="progressbar"
                                          aria-labelledby="mc:131"
                                          aria-describedby="mc:132 mc:133"
                                          aria-valuenow="2"
                                          aria-valuemin="0"
                                          aria-valuemax="2"
                                          class="meterTrack-1pXt2 positive-15J9m"
                                        >
                                          <div
                                            class="meterFill-3POEf style-HCWPD"
                                            id="style-HCWPD"
                                          ></div>
                                        </div>
                                        <div class="after-2-NpD cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                            <span
                                              class="root-3TDqk small-2qKd5"
                                              id="mc:132"
                                            >
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                    class="wink-icon iconBg-upd0P"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                                    ></path>
                                                  </svg>
                                                  <p class="root-3TDqk small-2qKd5">
                                                    Great work
                                                  </p>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                    <span>
                                      <div class="root-z2y3S">
                                        <div class="before-3BYvd">
                                          <span
                                            class="mcds-label-default"
                                            id="mc:135"
                                          >
                                            <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                              Links &amp; CTAs
                                            </span>
                                          </span>
                                          <p
                                            class="root-3TDqk medium-secondary-1YIN8"
                                            id="mc:137"
                                          >
                                            3 out of 3
                                          </p>
                                        </div>
                                        <div
                                          id="mc:134"
                                          role="progressbar"
                                          aria-labelledby="mc:135"
                                          aria-describedby="mc:136 mc:137"
                                          aria-valuenow="3"
                                          aria-valuemin="0"
                                          aria-valuemax="3"
                                          class="meterTrack-1pXt2 positive-15J9m"
                                        >
                                          <div
                                            class="meterFill-3POEf style-8XOFJ"
                                            id="style-8XOFJ"
                                          ></div>
                                        </div>
                                        <div class="after-2-NpD cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                            <span
                                              class="root-3TDqk small-2qKd5"
                                              id="mc:136"
                                            >
                                              <div class="cluster-3D5Qr">
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                  }}
                                                  class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ"
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                    class="wink-icon iconBg-upd0P"
                                                  >
                                                    <path
                                                      fill-rule="evenodd"
                                                      clip-rule="evenodd"
                                                      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                                    ></path>
                                                  </svg>
                                                  <p
                                                    style={{
                                                      paddingTop: "10px",
                                                    }}
                                                    class="root-3TDqk small-2qKd5"
                                                  >
                                                    Awesome
                                                  </p>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </span>
                                    <span>
                                      <div class="root-z2y3S">
                                        <div class="before-3BYvd">
                                          <span
                                            class="mcds-label-default"
                                            id="mc:139"
                                          >
                                            <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                              Typography
                                            </span>
                                          </span>
                                          <p
                                            class="root-3TDqk medium-secondary-1YIN8"
                                            id="mc:141"
                                          >
                                            4 out of 5
                                          </p>
                                        </div>
                                        <div
                                          id="mc:138"
                                          role="progressbar"
                                          aria-labelledby="mc:139"
                                          aria-describedby="mc:141"
                                          aria-valuenow="4"
                                          aria-valuemin="0"
                                          aria-valuemax="5"
                                          class="meterTrack-1pXt2"
                                        >
                                          <div
                                            class="meterFill-3POEf style-pm8eQ"
                                            id="style-pm8eQ"
                                          ></div>
                                        </div>
                                        <div class="after-2-NpD cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"></div>
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content Optimzer End */}
                    <br />
                    {/* Top Location Opens */}
                    <div
                      className=""
                      style={{ maxWidth: "90%", margin: "auto" }}
                    >
                      <div
                        style={{ padding: "20px 30px" }}
                        class="container-1QcyQ snipcss-cfIMt"
                      >
                        <div class="header-epI_B">
                          <div class="stack-1qp4V spacing1-2v2JO">
                            <p class="root-3TDqk heading-4-EoGPh">
                              Top locations by opens
                            </p>
                            <p
                              style={{ paddingTop: "5px" }}
                              class="root-3TDqk small-secondary-3_Rq2"
                            >
                              {todaysFormatDate
                                ? `${formattedDate} - ${todaysFormatDate}`
                                : formattedDate}
                            </p>
                          </div>
                        </div>
                        <br />
                        <div class="section-kJ-Iy">
                          <div class="borderTop-14P4Y">
                            <div
                              class="root-209cT gap2-1Qme7 style-ChxBv"
                              id="style-ChxBv"
                            >
                              <div class="stack-1qp4V spacing1-2v2JO">
                                <div class="topLocationsContainerLabels-3BJqv cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR">
                                    <div
                                      style={{
                                        width: "100%",
                                        display: "flex",
                                        justifySelf: "end",
                                      }}
                                      class="opensSection-1ih-s"
                                    >
                                      <div class="opensCell-3lep5">
                                        <p class="root-3TDqk small-bold-6R-6E">
                                          Opens
                                        </p>
                                      </div>
                                      <div
                                        style={{ textAlign: "center" }}
                                        class="opensCell-3lep5"
                                      >
                                        <p class="root-3TDqk small-bold-6R-6E">
                                          % of total opens
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="topLocationsContainer-2tNWt cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing2-3-fWQ">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="flagIcon-R7EBQ">
                                          <img
                                            src="https://cdn-images.mailchimp.com/icons/flags_iso/flat/32/US.png"
                                            alt="US"
                                          />
                                        </div>
                                        <p
                                          style={{ paddingTop: "10px" }}
                                          class="root-3TDqk small-2qKd5"
                                        >
                                          United States
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      style={{ marginLeft: "30px" }}
                                      class="opensSection-1ih-s"
                                    >
                                      <div class="opensCell-3lep5">
                                        <p class="root-3TDqk small-2qKd5">
                                          {Number(
                                            singlereport?.opened
                                          )?.toLocaleString()}{" "}
                                        </p>
                                      </div>
                                      <div
                                        style={{ paddingLeft: "20px" }}
                                        class="opensCell-3lep5"
                                      >
                                        <p class="root-3TDqk small-bold-6R-6E">
                                          {singlereport?.openedPercentage}%
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="stack-1qp4V spacing4-1xt6w rightColumn-2x6x0">
                                <div
                                  data-highcharts-chart="4"
                                  id="style-AjTOW"
                                  class="style-AjTOW"
                                >
                                  <div
                                    id="highcharts-zjqvp5f-66"
                                    dir="ltr"
                                    class="highcharts-container  style-YdGjb"
                                  >
                                    <svg
                                      version="1.1"
                                      class="highcharts-root"
                                      style={{
                                        fontFamily: "Helvetica, Arial",
                                        fontSize: "1rem",
                                      }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="400"
                                      height="300"
                                      viewBox="0 0 400 300"
                                      role="img"
                                      aria-label=""
                                    >
                                      <desc>
                                        Created with Highcharts 11.1.0
                                      </desc>
                                      <defs>
                                        <filter id="highcharts-drop-shadow-4">
                                          <fedropshadow
                                            dx="1"
                                            dy="1"
                                            flood-color="#000000"
                                            flood-opacity="0.75"
                                            stdDeviation="2.5"
                                          ></fedropshadow>
                                        </filter>
                                        <clipPath id="highcharts-zjqvp5f-67-">
                                          <rect
                                            x="0"
                                            y="0"
                                            width="245"
                                            height="283"
                                            fill="none"
                                          ></rect>
                                        </clipPath>
                                        <clipPath id="highcharts-zjqvp5f-69-">
                                          <rect
                                            x="0"
                                            y="0"
                                            width="245"
                                            height="283"
                                            fill="none"
                                          ></rect>
                                        </clipPath>
                                        <filter id="highcharts-drop-shadow-4--1--1">
                                          <fedropshadow
                                            dx="-1"
                                            dy="-1"
                                            flood-color="#000000"
                                            flood-opacity="0.75"
                                            stdDeviation="2.5"
                                          ></fedropshadow>
                                        </filter>
                                      </defs>
                                      <rect
                                        fill="#ffffff"
                                        class="highcharts-background"
                                        filter="none"
                                        x="0"
                                        y="0"
                                        width="400"
                                        height="300"
                                        rx="0"
                                        ry="0"
                                      ></rect>
                                      <rect
                                        fill="none"
                                        class="highcharts-plot-background"
                                        x="107"
                                        y="10"
                                        width="283"
                                        height="245"
                                        filter="none"
                                      ></rect>
                                      <rect
                                        fill="none"
                                        class="highcharts-plot-border"
                                        data-z-index="1"
                                        stroke="#cccccc"
                                        stroke-width="0"
                                        x="107"
                                        y="10"
                                        width="283"
                                        height="245"
                                      ></rect>
                                      <g
                                        class="highcharts-grid highcharts-xaxis-grid"
                                        data-z-index="1"
                                      >
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="0"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 107 255.5 L 390 255.5"
                                          opacity="1"
                                        ></path>
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="0"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 107 10.5 L 390 10.5"
                                          opacity="1"
                                        ></path>
                                      </g>
                                      <g
                                        class="highcharts-grid highcharts-yaxis-grid"
                                        data-z-index="1"
                                      >
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="1"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 106.5 10 L 106.5 255"
                                          opacity="1"
                                        ></path>
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="1"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 196.5 10 L 196.5 255"
                                          opacity="1"
                                        ></path>
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="1"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 286.5 10 L 286.5 255"
                                          opacity="1"
                                        ></path>
                                        <path
                                          fill="none"
                                          stroke="#e6e6e6"
                                          stroke-width="1"
                                          stroke-dasharray="none"
                                          data-z-index="1"
                                          class="highcharts-grid-line"
                                          d="M 376.5 10 L 376.5 255"
                                          opacity="1"
                                        ></path>
                                      </g>
                                      <g
                                        class="highcharts-axis highcharts-xaxis"
                                        data-z-index="2"
                                      >
                                        <path
                                          fill="none"
                                          class="highcharts-axis-line"
                                          stroke="#333333"
                                          stroke-width="1"
                                          data-z-index="7"
                                          d="M 106.5 10 L 106.5 255"
                                        ></path>
                                      </g>
                                      <g
                                        class="highcharts-axis highcharts-yaxis"
                                        data-z-index="2"
                                      >
                                        <path
                                          fill="none"
                                          class="highcharts-axis-line"
                                          stroke="#333333"
                                          stroke-width="0"
                                          data-z-index="7"
                                          d="M 107 255 L 390 255"
                                        ></path>
                                      </g>
                                      <g
                                        class="highcharts-series-group"
                                        data-z-index="3"
                                        filter="none"
                                      >
                                        <g
                                          class="highcharts-series highcharts-series-0 highcharts-bar-series highcharts-tracker"
                                          data-z-index="0.1"
                                          opacity="1"
                                          transform="translate(107,10) rotate(90 19 264) scale(-1 1)"
                                          clip-path="url(#highcharts-zjqvp5f-69-)"
                                        >
                                          <path
                                            fill="#2B77CC"
                                            d="M 67 14 L 179 14 A 3 3 0 0 1 182 17 L 182 284 A 0 0 0 0 1 182 284 L 64 284 A 0 0 0 0 1 64 284 L 64 17 A 3 3 0 0 1 67 14 Z"
                                            stroke="#ffffff"
                                            stroke-width="0"
                                            opacity="1"
                                            filter="none"
                                            class="highcharts-point highcharts-drilldown-point"
                                            style={{ cursor: "pointer" }}
                                          ></path>
                                        </g>
                                        <g
                                          class="highcharts-markers highcharts-series-0 highcharts-bar-series"
                                          data-z-index="0.1"
                                          opacity="1"
                                          transform="translate(107,10) scale(1 1)"
                                          clip-path="none"
                                        ></g>
                                      </g>
                                      <text
                                        x="200"
                                        text-anchor="middle"
                                        class="highcharts-title style-qoX71"
                                        data-z-index="4"
                                        y="19"
                                        id="style-qoX71"
                                      ></text>
                                      <text
                                        x="200"
                                        text-anchor="middle"
                                        class="highcharts-subtitle style-DvcgA"
                                        data-z-index="4"
                                        y="21"
                                        id="style-DvcgA"
                                      ></text>
                                      <text
                                        x="10"
                                        text-anchor="start"
                                        class="highcharts-caption style-hFD1e"
                                        data-z-index="4"
                                        y="294"
                                        id="style-hFD1e"
                                      ></text>
                                      <g
                                        class="highcharts-axis-labels highcharts-xaxis-labels"
                                        data-z-index="7"
                                      >
                                        <text
                                          x="92"
                                          text-anchor="end"
                                          transform="translate(0,0)"
                                          y="138"
                                          opacity="1"
                                          class="highcharts-drilldown-axis-label style-hkTcP"
                                          id="style-hkTcP"
                                        >
                                          United States
                                        </text>
                                      </g>
                                      <g
                                        class="highcharts-axis-labels highcharts-yaxis-labels"
                                        data-z-index="7"
                                      >
                                        <text
                                          x="107"
                                          text-anchor="middle"
                                          transform="translate(0,0)"
                                          y="283"
                                          opacity="1"
                                          id="style-Ks8Lh"
                                          class="style-Ks8Lh"
                                        >
                                          0
                                        </text>
                                        <text
                                          x="196.84126984127"
                                          text-anchor="middle"
                                          transform="translate(0,0)"
                                          y="283"
                                          opacity="1"
                                          id="style-boKr4"
                                          class="style-boKr4"
                                        >
                                          1
                                        </text>
                                        <text
                                          x="286.68253968254"
                                          text-anchor="middle"
                                          transform="translate(0,0)"
                                          y="283"
                                          opacity="1"
                                          id="style-8GcfS"
                                          class="style-8GcfS"
                                        >
                                          2
                                        </text>
                                        <text
                                          x="376.52380952381"
                                          text-anchor="middle"
                                          transform="translate(0,0)"
                                          y="283"
                                          opacity="1"
                                          id="style-95bsV"
                                          class="style-95bsV"
                                        >
                                          3
                                        </text>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Top LOcation Close */}
                  </>
                )}
                {currentpage === "clickperformance" && (
                  <>
                    <div
                      style={{ maxWidth: "90%", margin: "30px auto" }}
                      class="stack-1qp4V spacing6-nznRY pagePaddingTop-ZGH4_ snipcss-Zk5pw"
                    >
                      {/* new testing here is  */}
                      <div
                        class="switcher-2RqDX switcher-3xpn_ snipcss-3Nhcz"
                        tabindex="0"
                      >
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          class="spacing2-1pqd3"
                        >
                          <div class="stack-1qp4V spacing2-3AKCb leftSide-2vVZY">
                            <p class="root-3TDqk heading-3-2i9Gm campaignName-ZCCNZ">
                              {singlereport?.campaignName}
                            </p>
                            <a
                              href="/reports/show?id=6741586"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="viewEmailLink-1eW-8"
                            >
                              View email
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                class="wink-icon"
                                style={{
                                  verticalAlign: "middle",
                                  height: "1rem",
                                }}
                              >
                                <path d="M2 2h7v2H4v16h16v-5h2v7H2V2z"></path>
                                <path d="M20 5.414V11h2V2h-9v2h5.586l-9.293 9.293 1.414 1.414L20 5.414z"></path>
                              </svg>
                              <span class="wink-visually-hidden">
                                (opens in new window)
                              </span>
                            </a>
                          </div>
                          <div class="stack-1qp4V spacing1-2v2JO rightSide-19yXN">
                            <div class="detailRow-187Kt cluster-3D5Qr">
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Recipients</p>
                                <a
                                  class="recipientsLink-15QX6"
                                  href="/reports/activity/sent?id=6741586"
                                >
                                  {Number(
                                    singlereport?.audienceRecipients
                                  )?.toLocaleString()}{" "}
                                </a>
                              </div>
                            </div>
                            <div class="detailRow-187Kt cluster-3D5Qr">
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Audience</p>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                    <p class="root-3TDqk small-2qKd5">
                                      {singlereport?.audienceName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="detailRow-187Kt cluster-3D5Qr">
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                              >
                                <p class="root-3TDqk small-2qKd5">Subject</p>
                                <p class="root-3TDqk small-2qKd5">
                                  {singlereport?.subject}
                                </p>
                              </div>
                            </div>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY">
                                <div
                                  style={{ width: "100%" }}
                                  class="cluster-3D5Qr"
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      marginTop: "3px",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ"
                                  >
                                    <span
                                      style={{ marginTop: "-3px" }}
                                      class=""
                                    >
                                      status
                                    </span>
                                    <p class="root-3TDqk small-2qKd5">
                                      <span
                                        style={{
                                          backgroundColor: "#d9ebcb",
                                          fontSize: "14px",
                                          padding: "2px 4px",
                                          borderRadius: "3px",
                                        }}
                                        class="root-1tapB success-1pnBG badge-2l1DO"
                                      >
                                        Sent
                                      </span>
                                      {singlereport?.sendTime}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <nav
                        style={{ margin: "50px 0px", position: "relative" }}
                        class="navigationMenu-1zK9M"
                      >
                        <ul class="menu-gUP8n">
                          <li onClick={() => setcurrentpage("overview")}>
                            <a style={{ color: "gray" }} href="#">
                              Overview
                            </a>
                          </li>
                          <li class="isActive-2tLXY">
                            <a style={{ color: "#007c89" }} href="#">
                              Click performance
                            </a>
                          </li>
                          <li
                            class=""
                            onClick={() => setcurrentpage("recipientactivity")}
                          >
                            <div style={{ paddingBottom: "15px" }}>
                              Recipient activity
                            </div>
                            {/*  */}
                          </li>
                          <li
                            onClick={() => setcurrentpage("ecommerace")}
                            class=""
                          >
                            <a href="#">Ecommerce</a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("contentoptimzer")}
                            class=""
                          >
                            <a href="#">Content Optimizer</a>
                          </li>
                          {/* <li onClick={() => setcurrentpage("social")} class="">
                            <a href="#">Social</a>
                          </li> */}
                          <li onClick={() => setcurrentpage("more")} class="">
                            <a href="#">More</a>
                          </li>
                        </ul>
                      </nav>
                      <div class="stack-1qp4V spacing4-1xt6w">
                        <div class="stack-1qp4V spacing4-1xt6w">
                          <div class="cluster-3D5Qr">
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                              class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                            >
                              <div class="stack-1qp4V spacing2-3AKCb">
                                <h4 class="heading-4-3r-mu root-PihPG">
                                  Links in this email
                                </h4>
                                <p class="root-3TDqk small-secondary-3_Rq2">
                                  {todaysFormatDate
                                    ? `${formattedDate} - ${todaysFormatDate}`
                                    : formattedDate}{" "}
                                  • 4 links
                                </p>
                              </div>
                              <div>
                                <button
                                  style={{
                                    border: "1px solid #007c89",
                                    backgroundColor: "#007c89",
                                    color: "white",
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                  }}
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    View click map
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{ marginTop: "50px" }}
                            class="stack-1qp4V spacing4-1xt6w"
                          >
                            <div class="stack-1qp4V tableContainer-O2anw">
                              <table class="root-3I1Nd table-O82ne">
                                <thead>
                                  <tr style={{ height: "50px" }}>
                                    <th class="">
                                      <div class="cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                          <p
                                            style={{ paddingLeft: "20px" }}
                                            class="root-3TDqk small-bold-6R-6E"
                                          >
                                            URL
                                          </p>
                                          <div class="sortIconContainer-_-V9C">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon iconNoSorting-LGR-d"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="m7.293 5.293 3-3L11 1.586l.707.707 3 3-1.414 1.414-1.49-1.49L12 13.5h-2l.197-8.283-1.49 1.49-1.414-1.414Zm-1.49 5.99 1.49-1.49 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414 1.49 1.49L4 3h2l-.197 8.283Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th class="">
                                      <div
                                        style={{ marginTop: "10px" }}
                                        class="cluster-3D5Qr"
                                      >
                                        <div class=" justifyFlexStart-ejJl1 ">
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            Total clicks
                                          </p>
                                          <div class="sortIconContainer-_-V9C">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon iconNoSorting-LGR-d"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="m7.293 5.293 3-3L11 1.586l.707.707 3 3-1.414 1.414-1.49-1.49L12 13.5h-2l.197-8.283-1.49 1.49-1.414-1.414Zm-1.49 5.99 1.49-1.49 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414 1.49 1.49L4 3h2l-.197 8.283Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th class="">
                                      <div
                                        style={{ marginTop: "10px" }}
                                        class="cluster-3D5Qr"
                                      >
                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 ">
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            % of Total clicks
                                          </p>
                                          <div class="sortIconContainer-_-V9C">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon iconNoSorting-LGR-d"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="m7.293 5.293 3-3L11 1.586l.707.707 3 3-1.414 1.414-1.49-1.49L12 13.5h-2l.197-8.283-1.49 1.49-1.414-1.414Zm-1.49 5.99 1.49-1.49 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414 1.49 1.49L4 3h2l-.197 8.283Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th class="">
                                      <div
                                        style={{ marginTop: "10px" }}
                                        class="cluster-3D5Qr"
                                      >
                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 ">
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            Unique clicks
                                          </p>
                                          <div class="sortIconContainer-_-V9C">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon iconNoSorting-LGR-d"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="m7.293 5.293 3-3L11 1.586l.707.707 3 3-1.414 1.414-1.49-1.49L12 13.5h-2l.197-8.283-1.49 1.49-1.414-1.414Zm-1.49 5.99 1.49-1.49 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414 1.49 1.49L4 3h2l-.197 8.283Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                    <th class="">
                                      <div
                                        style={{ marginTop: "10px" }}
                                        class="cluster-3D5Qr"
                                      >
                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 ">
                                          <p class="root-3TDqk small-bold-6R-6E">
                                            % of Unique clicks
                                          </p>
                                          <div class="sortIconContainer-_-V9C">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon iconNoSorting-LGR-d"
                                              style={{
                                                width: "16px",
                                                height: "16px",
                                              }}
                                            >
                                              <path d="m7.293 5.293 3-3L11 1.586l.707.707 3 3-1.414 1.414-1.49-1.49L12 13.5h-2l.197-8.283-1.49 1.49-1.414-1.414Zm-1.49 5.99 1.49-1.49 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414 1.49 1.49L4 3h2l-.197 8.283Z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_blank"
                                        href="https://dailytipsblog.net/solar-companies/"
                                      >
                                        {singlereport?.TLCLinkOneTitle}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TLCLinkOneValue
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TLCLinkOnePercentage}%
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TCLUniqueClicksOne
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TCLUniquePercentageOne}%
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_blank"
                                        href="https://dailytipsblog.net/solar-companies/"
                                      >
                                        {singlereport?.TLCLinkTwoTitle}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TLCLinkTwoValue
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TLCLinkTwoPercentage}%
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TCLUniqueClicksTwo
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TCLUniquePercentageTwo}%
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_blank"
                                        href="https://dailytipsblog.net/solar-companies/"
                                      >
                                        {singlereport?.TLCLinkThreeTitle}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TLCLinkThreeValue}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TLCLinkThreePercentage}%
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TCLUniqueClicksThree
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TCLUniquePercentageThree}
                                        %
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_blank"
                                        href="https://dailytipsblog.net/solar-companies/"
                                      >
                                        {singlereport?.TLCLinkFourTitle}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TLCLinkFourValue
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TLCLinkFourPercentage}%
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {Number(
                                          singlereport?.TCLUniqueClicksFour
                                        )?.toLocaleString()}
                                      </a>
                                    </td>
                                    <td class="">
                                      <a
                                        class="linkCell-1BCwm"
                                        target="_self"
                                        href="/reports/activity/all-clicks/?id=6741586&amp;url=https%3A%2F%2Fdailytipsblog.net%2Fsolar-companies%2F"
                                      >
                                        {singlereport?.TCLUniquePercentageFour}%
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentpage === "recipientactivity" && (
                  <>
                    {true && (
                      <>
                        <div style={{ maxWidth: "90%", margin: "30px auto" }}>
                          <h1 style={{ fontSize: "35px" }}>
                            {singlereport?.campaignName}
                          </h1>
                          <div
                            class="switcher-2RqDX switcher-3xpn_ snipcss-3Nhcz"
                            tabindex="0"
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                              class="spacing2-1pqd3"
                            >
                              <div class="stack-1qp4V spacing2-3AKCb leftSide-2vVZY">
                                <p class="root-3TDqk heading-3-2i9Gm campaignName-ZCCNZ">
                                  {singlereport?.campaignName}
                                </p>
                                <a
                                  href="/reports/show?id=6741586"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  class="viewEmailLink-1eW-8"
                                >
                                  View email
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    aria-hidden="true"
                                    class="wink-icon"
                                    style={{
                                      verticalAlign: "middle",
                                      height: "1rem",
                                    }}
                                  >
                                    <path d="M2 2h7v2H4v16h16v-5h2v7H2V2z"></path>
                                    <path d="M20 5.414V11h2V2h-9v2h5.586l-9.293 9.293 1.414 1.414L20 5.414z"></path>
                                  </svg>
                                  <span class="wink-visually-hidden">
                                    (opens in new window)
                                  </span>
                                </a>
                              </div>
                              <div class="stack-1qp4V spacing1-2v2JO rightSide-19yXN">
                                <div class="detailRow-187Kt cluster-3D5Qr">
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                                  >
                                    <p class="root-3TDqk small-2qKd5">
                                      Recipients
                                    </p>
                                    <a
                                      class="recipientsLink-15QX6"
                                      href="/reports/activity/sent?id=6741586"
                                    >
                                      {Number(
                                        singlereport?.audienceRecipients
                                      )?.toLocaleString()}{" "}
                                    </a>
                                  </div>
                                </div>
                                <div class="detailRow-187Kt cluster-3D5Qr">
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                                  >
                                    <p class="root-3TDqk small-2qKd5">
                                      Audience
                                    </p>
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                        <p class="root-3TDqk small-2qKd5">
                                          {singlereport?.audienceName}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="detailRow-187Kt cluster-3D5Qr">
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY"
                                  >
                                    <p class="root-3TDqk small-2qKd5">
                                      Subject
                                    </p>
                                    <p class="root-3TDqk small-2qKd5">
                                      {singlereport?.subject}
                                    </p>
                                  </div>
                                </div>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY">
                                    <div
                                      style={{ width: "100%" }}
                                      class="cluster-3D5Qr"
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "100%",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                          marginTop: "3px",
                                        }}
                                        class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ"
                                      >
                                        <span
                                          style={{ marginTop: "-3px" }}
                                          class=""
                                        >
                                          status
                                        </span>
                                        <p class="root-3TDqk small-2qKd5">
                                          <span
                                            style={{
                                              backgroundColor: "#d9ebcb",
                                              fontSize: "14px",
                                              padding: "2px 4px",
                                              borderRadius: "3px",
                                            }}
                                            class="root-1tapB success-1pnBG badge-2l1DO"
                                          >
                                            Sent
                                          </span>
                                          {singlereport?.sendTime}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br />
                          <span>
                            <span style={{ color: "#007c89" }}>
                              Switch report
                            </span>
                          </span>
                          <br />

                          <nav
                            style={{ margin: "30px 0px", position: "relative" }}
                            class="navigationMenu-1zK9M"
                          >
                            <ul class="menu-gUP8n">
                              <li onClick={() => setcurrentpage("overview")}>
                                <a style={{ color: "" }} href="#">
                                  Overview
                                </a>
                              </li>
                              <li
                                onClick={() =>
                                  setcurrentpage("clickperformance")
                                }
                              >
                                <a style={{ color: "gray" }} href="#">
                                  Click performance
                                </a>
                              </li>

                              <li
                                style={{
                                  color: "#007c89",
                                  paddingBottom: "15px",
                                }}
                                onClick={() =>
                                  setcurrentpage("recipientactivity")
                                }
                                class="isActive-2tLXY"
                              >
                                <a style={{ color: "#007c89" }} href="#">
                                  Recipient activity
                                </a>
                                {/*  */}
                              </li>
                              <li
                                onClick={() => setcurrentpage("ecommerace")}
                                class=""
                              >
                                <a href="#">Ecommerce</a>
                              </li>
                              <li
                                onClick={() =>
                                  setcurrentpage("contentoptimzer")
                                }
                                class=""
                              >
                                <a href="#">Content Optimizer</a>
                              </li>
                              {/* <li
                                onClick={() => setcurrentpage("social")}
                                class=""
                              >
                                <a href="#">Social</a>
                              </li> */}
                              <li
                                onClick={() => setcurrentpage("more")}
                                class=""
                              >
                                <a href="#">More</a>
                              </li>
                            </ul>
                          </nav>
                          <div>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-5ezKF">
                                <div
                                  class="root-1cS4q"
                                  style={{ maxWidth: "250px" }}
                                >
                                  <div class="before-fjpii">
                                    <label
                                      class="mcds-label-default"
                                      id="mc:559"
                                      for="mc:558"
                                    >
                                      Filter by recipient status
                                    </label>
                                  </div>
                                  <div class="selectWrapper-1gG6j">
                                    <div class="">
                                      <select
                                        tabindex="0"
                                        class="trigger-2GY5P style-OPU2K"
                                        id="mc:562-trigger"
                                        value={selectedStatus}
                                        onChange={handleStatusChange}
                                      >
                                        <option value="sent">Sent</option>
                                        <option value="sent_opened">
                                          Sent Opened
                                        </option>
                                        <option value="didnt_opened">
                                          Didn't Open
                                        </option>
                                        <option value="clicked">Clicked</option>
                                        <option value="bounced">Bounced</option>

                                        <option value="unsubscribed">
                                          Unsubscribed
                                        </option>
                                      </select>
                                    </div>
                                    <div
                                      class="indicator-3GTSs"
                                      style={{ marginRight: "10px" }}
                                    >
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {selectedStatus === "clicked" && (
                                <div
                                  style={{ marginLeft: "30px" }}
                                  class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-5ezKF"
                                >
                                  <div
                                    class="root-1cS4q"
                                    style={{ maxWidth: "250px" }}
                                  >
                                    <div class="before-fjpii">
                                      <label
                                        class="mcds-label-default"
                                        id="mc:559"
                                        for="mc:558"
                                      >
                                        Links in email
                                      </label>
                                    </div>
                                    <div class="selectWrapper-1gG6j">
                                      <div class="">
                                        <select
                                          tabindex="0"
                                          class="trigger-2GY5P style-OPU2K"
                                          id="mc:562-trigger"
                                        >
                                          <option value="https://dailytipsblog.net/solar-companies/">
                                            4 link selected
                                          </option>
                                          <option value="https://dailytipsblog.net/solar-companies/">
                                            https://dailytipsblog.net/solar-companies/
                                          </option>
                                          <option value="https://instagram.com/">
                                            https://instagram.com/
                                          </option>
                                          <option value="https://facebook.com/">
                                            https://facebook.com/
                                          </option>
                                          <option value="https://x.com/">
                                            https://x.com/
                                          </option>
                                        </select>
                                      </div>
                                      <div
                                        class="indicator-3GTSs"
                                        style={{ marginRight: "10px" }}
                                      >
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "bounced" && (
                                <div
                                  style={{ marginLeft: "5px" }}
                                  class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-5ezKF"
                                >
                                  <div
                                    class="root-1cS4q"
                                    style={{ width: "300px" }}
                                  >
                                    <div class="before-fjpii">
                                      <label
                                        class="mcds-label-default"
                                        id="mc:559"
                                        for="mc:558"
                                      >
                                        Bounce type
                                      </label>
                                    </div>
                                    <div class="selectWrapper-1gG6j">
                                      <div class="">
                                        <select
                                          tabindex="0"
                                          class="trigger-2GY5P style-OPU2K"
                                          id="mc:562-trigger"
                                        >
                                          <option value="https://dailytipsblog.net/solar-companies/">
                                            2 types selected
                                          </option>
                                          <option value="https://dailytipsblog.net/solar-companies/">
                                            Soft
                                          </option>
                                          <option value="https://instagram.com/">
                                            Hard
                                          </option>
                                        </select>
                                      </div>
                                      <div
                                        class="indicator-3GTSs"
                                        style={{ marginRight: "10px" }}
                                      >
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {selectedStatus === "unsubscribed" && (
                                <div
                                  style={{ marginLeft: "5px" }}
                                  class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-5ezKF"
                                >
                                  <div
                                    class="root-1cS4q"
                                    style={{ width: "300px" }}
                                  >
                                    <div class="before-fjpii">
                                      <label
                                        class="mcds-label-default"
                                        id="mc:559"
                                        for="mc:558"
                                      >
                                        Unsubscribe reason
                                      </label>
                                    </div>
                                    <div class="selectWrapper-1gG6j">
                                      <div class="">
                                        <select
                                          tabindex="0"
                                          class="trigger-2GY5P style-OPU2K"
                                          id="mc:562-trigger"
                                        >
                                          <option value="no_longer_interested">
                                            6 reasons selected
                                          </option>
                                          <option value="no_longer_interested">
                                            No longer interested
                                          </option>
                                          <option value="did_not_sign_up">
                                            Did not sign up
                                          </option>
                                          <option value="inappropriate_content">
                                            Inappropriate content
                                          </option>
                                          <option value="spam">Spam</option>
                                          <option value="other">Other</option>
                                          <option value="unspecified">
                                            Unspecified
                                          </option>
                                        </select>
                                      </div>
                                      <div
                                        class="indicator-3GTSs"
                                        style={{ marginRight: "10px" }}
                                      >
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            <br />

                            <div className="status-display">
                              {/* sendtableboxhere */}
                              {selectedStatus === "sent" && (
                                <div className="status-box">
                                  <br />
                                  <div class="container-1QcyQ snipcss-dqFv4">
                                    <div class="header-epI_B">
                                      <div class="stack-1qp4V spacing1-2v2JO">
                                        <p class="root-3TDqk heading-4-EoGPh">
                                          Recipient activity summary
                                        </p>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          {todaysFormatDate
                                            ? `${formattedDate} - ${todaysFormatDate}`
                                            : formattedDate}
                                        </p>
                                      </div>
                                    </div>
                                    <div class="section-kJ-Iy">
                                      <div class="borderTop-14P4Y">
                                        <div class="cluster-3D5Qr">
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "space-between",
                                            }}
                                            class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                          >
                                            <div class="cluster-3D5Qr">
                                              <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                <div class="coin-1Lahx">
                                                  <img
                                                    src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                    alt="Total sends"
                                                  />
                                                </div>
                                                <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                      <button type="button">
                                                        <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                          Total sends
                                                        </p>
                                                      </button>
                                                      <span
                                                        role="status"
                                                        aria-atomic="true"
                                                      >
                                                        <span class="wink-visually-hidden"></span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <h3
                                                        style={{
                                                          marginLeft: "30px",
                                                        }}
                                                        class="heading-3-eDQNF root-PihPG"
                                                      >
                                                        {Number(
                                                          singlereport?.audienceRecipients
                                                        )?.toLocaleString()}{" "}
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="cluster-3D5Qr">
                                              <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                <div class="coin-1Lahx">
                                                  <img
                                                    src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                    alt="Deliveries"
                                                  />
                                                </div>
                                                <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                      <button type="button">
                                                        <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                          Delivery Rate
                                                        </p>
                                                      </button>
                                                      <span
                                                        role="status"
                                                        aria-atomic="true"
                                                      >
                                                        <span class="wink-visually-hidden"></span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <h3
                                                        style={{
                                                          marginLeft: "30px",
                                                        }}
                                                        class="heading-3-eDQNF root-PihPG"
                                                      >
                                                        {Number(
                                                          singlereport?.successfulDeliveriesPercentage
                                                        )?.toLocaleString()}{" "}
                                                        %
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="cluster-3D5Qr">
                                              <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                <div class="coin-1Lahx">
                                                  <img
                                                    src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                    alt="Open rate"
                                                  />
                                                </div>
                                                <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                      <button type="button">
                                                        <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                          Click rate
                                                        </p>
                                                      </button>
                                                      <span
                                                        role="status"
                                                        aria-atomic="true"
                                                      >
                                                        <span class="wink-visually-hidden"></span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <h3
                                                        style={{
                                                          marginLeft: "30px",
                                                        }}
                                                        class="heading-3-eDQNF root-PihPG"
                                                      >
                                                        {Number(
                                                          singlereport?.clickedPercentage
                                                        )?.toLocaleString()}{" "}
                                                        %
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="cluster-3D5Qr">
                                              <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                <div class="coin-1Lahx">
                                                  <img
                                                    src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                    alt="Open rate"
                                                  />
                                                </div>
                                                <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                      <button type="button">
                                                        <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                          Open rate
                                                        </p>
                                                      </button>
                                                      <span
                                                        role="status"
                                                        aria-atomic="true"
                                                      >
                                                        <span class="wink-visually-hidden"></span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <h3
                                                        style={{
                                                          marginLeft: "30px",
                                                        }}
                                                        class="heading-3-eDQNF root-PihPG"
                                                      >
                                                        {Number(
                                                          singlereport?.openedPercentage
                                                        )?.toLocaleString()}{" "}
                                                        %
                                                      </h3>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                    class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                  >
                                    <div class="stack-1qp4V spacing2-3AKCb">
                                      <h4 class="heading-4-3r-mu root-PihPG">
                                        Sent
                                      </h4>
                                      <p class="root-3TDqk small-secondary-3_Rq2">
                                        {todaysFormatDate
                                          ? `${formattedDate} - ${todaysFormatDate}`
                                          : formattedDate}{" "}
                                        • {singlereport?.audienceRecipients}{" "}
                                        recipients
                                      </p>
                                    </div>
                                    <div>
                                      <a
                                        style={{
                                          backgroundColor: "#007c89",
                                          color: "white",
                                        }}
                                        class="root-sBgFt container-3-bH7 primary-33czz"
                                        href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                        download="members_new_testing_sent_Feb_16_2025.csv"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Export recipients
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                  <br />
                                  <ReceiptTable
                                    filterStartDate={formattedDate}
                                    filterEndDate={todaysFormatDate}
                                    campaignId={id}
                                    selectedStatus={selectedStatus}
                                    audienceRecipients={Number(
                                      singlereport?.audienceRecipients
                                    )}
                                    currentCount={getCurrentCount()}
                                  />
                                </div>
                              )}
                              {/* opned table box  */}
                              {selectedStatus === "sent_opened" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <br />
                                    <div class="container-1QcyQ snipcss-dqFv4">
                                      <div class="header-epI_B">
                                        <div class="stack-1qp4V spacing1-2v2JO">
                                          <p class="root-3TDqk heading-4-EoGPh">
                                            Recipient activity summary
                                          </p>
                                          <p class="root-3TDqk small-secondary-3_Rq2">
                                            June 3, 2024 - February 15, 2025
                                          </p>
                                        </div>
                                      </div>
                                      <div class="section-kJ-Iy">
                                        <div class="borderTop-14P4Y">
                                          <div class="cluster-3D5Qr">
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                              }}
                                              class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                            >
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Total sends"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Total sends
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.audienceRecipients
                                                          )?.toLocaleString()}{" "}
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Open rate"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Total opens
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.opened
                                                          )?.toLocaleString()}{" "}
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Open rate"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Open rate
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.openedPercentage
                                                          )?.toLocaleString()}{" "}
                                                          %
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                      }}
                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                    >
                                      <div class="stack-1qp4V spacing2-3AKCb">
                                        <h4 class="heading-4-3r-mu root-PihPG">
                                          Opened
                                        </h4>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          {todaysFormatDate
                                            ? `${formattedDate} - ${todaysFormatDate}`
                                            : formattedDate}{" "}
                                          • {singlereport?.audienceRecipients}{" "}
                                          recipients
                                        </p>
                                      </div>
                                      <div>
                                        <a
                                          style={{
                                            backgroundColor: "#007c89",
                                            color: "white",
                                          }}
                                          class="root-sBgFt container-3-bH7 primary-33czz"
                                          href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                          download="members_new_testing_sent_Feb_16_2025.csv"
                                        >
                                          <span class="temporarySpan-2iF2p">
                                            Export recipients
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <br />
                                    <ReceiptTable
                                      filterStartDate={formattedDate}
                                      filterEndDate={todaysFormatDate}
                                      campaignId={id}
                                      selectedStatus={selectedStatus}
                                      audienceRecipients={Number(
                                        singlereport?.audienceRecipients
                                      )}
                                      currentCount={getCurrentCount()}
                                    />
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "didnt_opened" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <div className="status-box">
                                      <br />
                                      <div class="container-1QcyQ snipcss-dqFv4">
                                        <div class="header-epI_B">
                                          <div class="stack-1qp4V spacing1-2v2JO">
                                            <p class="root-3TDqk heading-4-EoGPh">
                                              Recipient activity summary
                                            </p>
                                            <p class="root-3TDqk small-secondary-3_Rq2">
                                              June 3, 2024 - February 15, 2025
                                            </p>
                                          </div>
                                        </div>
                                        <div class="section-kJ-Iy">
                                          <div class="borderTop-14P4Y">
                                            <div class="cluster-3D5Qr">
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-between",
                                                }}
                                                class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                              >
                                                <div class="cluster-3D5Qr">
                                                  <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                    <div class="coin-1Lahx">
                                                      <img
                                                        src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                        alt="Total sends"
                                                      />
                                                    </div>
                                                    <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                          <button type="button">
                                                            <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                              Total sends
                                                            </p>
                                                          </button>
                                                          <span
                                                            role="status"
                                                            aria-atomic="true"
                                                          >
                                                            <span class="wink-visually-hidden"></span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <h3
                                                            style={{
                                                              marginLeft:
                                                                "30px",
                                                            }}
                                                            class="heading-3-eDQNF root-PihPG"
                                                          >
                                                            {Number(
                                                              singlereport?.audienceRecipients
                                                            )?.toLocaleString()}{" "}
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="cluster-3D5Qr">
                                                  <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                    <div class="coin-1Lahx">
                                                      <img
                                                        src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                        alt="Open rate"
                                                      />
                                                    </div>
                                                    <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                          <button type="button">
                                                            <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                              Deliveries
                                                            </p>
                                                          </button>
                                                          <span
                                                            role="status"
                                                            aria-atomic="true"
                                                          >
                                                            <span class="wink-visually-hidden"></span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <h3
                                                            style={{
                                                              marginLeft:
                                                                "30px",
                                                            }}
                                                            class="heading-3-eDQNF root-PihPG"
                                                          >
                                                            {Number(
                                                              singlereport?.successfulDeliveriesCount
                                                            )?.toLocaleString()}{" "}
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="cluster-3D5Qr">
                                                  <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                    <div class="coin-1Lahx">
                                                      <img
                                                        src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                        alt="Open rate"
                                                      />
                                                    </div>
                                                    <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                          <button type="button">
                                                            <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                              Open rate
                                                            </p>
                                                          </button>
                                                          <span
                                                            role="status"
                                                            aria-atomic="true"
                                                          >
                                                            <span class="wink-visually-hidden"></span>
                                                          </span>
                                                        </div>
                                                      </div>
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <h3
                                                            style={{
                                                              marginLeft:
                                                                "30px",
                                                            }}
                                                            class="heading-3-eDQNF root-PihPG"
                                                          >
                                                            {Number(
                                                              singlereport?.openedPercentage
                                                            )?.toLocaleString()}{" "}
                                                            %
                                                          </h3>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        }}
                                        class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                      >
                                        <div class="stack-1qp4V spacing2-3AKCb">
                                          <h4 class="heading-4-3r-mu root-PihPG">
                                            Didn't open
                                          </h4>
                                          <p class="root-3TDqk small-secondary-3_Rq2">
                                            {todaysFormatDate
                                              ? `${formattedDate} - ${todaysFormatDate}`
                                              : formattedDate}{" "}
                                            • {singlereport?.audienceRecipients}{" "}
                                            recipients
                                          </p>
                                        </div>
                                        <div>
                                          <a
                                            style={{
                                              backgroundColor: "#007c89",
                                              color: "white",
                                            }}
                                            class="root-sBgFt container-3-bH7 primary-33czz"
                                            href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                            download="members_new_testing_sent_Feb_16_2025.csv"
                                          >
                                            <span class="temporarySpan-2iF2p">
                                              Export recipients
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <br />
                                      <ReceiptTable
                                        filterStartDate={formattedDate}
                                        filterEndDate={todaysFormatDate}
                                        campaignId={id}
                                        selectedStatus={selectedStatus}
                                        audienceRecipients={Number(
                                          singlereport?.audienceRecipients
                                        )}
                                        currentCount={getCurrentCount()}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "clicked" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <div className="status-box">
                                      <div className="status-box">
                                        <br />
                                        <div class="container-1QcyQ snipcss-dqFv4">
                                          <div class="header-epI_B">
                                            <div class="stack-1qp4V spacing1-2v2JO">
                                              <p class="root-3TDqk heading-4-EoGPh">
                                                Recipient activity summary
                                              </p>
                                              <p class="root-3TDqk small-secondary-3_Rq2">
                                                June 3, 2024 - February 15, 2025
                                              </p>
                                            </div>
                                          </div>
                                          <div class="section-kJ-Iy">
                                            <div class="borderTop-14P4Y">
                                              <div class="cluster-3D5Qr">
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent:
                                                      "space-between",
                                                  }}
                                                  class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <div class="coin-1Lahx">
                                                        <img
                                                          src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                          alt="Total sends"
                                                        />
                                                      </div>
                                                      <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                            <button type="button">
                                                              <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                Total sends
                                                              </p>
                                                            </button>
                                                            <span
                                                              role="status"
                                                              aria-atomic="true"
                                                            >
                                                              <span class="wink-visually-hidden"></span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                            <h3
                                                              style={{
                                                                marginLeft:
                                                                  "30px",
                                                              }}
                                                              class="heading-3-eDQNF root-PihPG"
                                                            >
                                                              {Number(
                                                                singlereport?.audienceRecipients
                                                              )?.toLocaleString()}{" "}
                                                            </h3>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <div class="coin-1Lahx">
                                                        <img
                                                          src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                          alt="Open rate"
                                                        />
                                                      </div>
                                                      <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                            <button type="button">
                                                              <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                Clicked
                                                              </p>
                                                            </button>
                                                            <span
                                                              role="status"
                                                              aria-atomic="true"
                                                            >
                                                              <span class="wink-visually-hidden"></span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                            <h3
                                                              style={{
                                                                marginLeft:
                                                                  "30px",
                                                              }}
                                                              class="heading-3-eDQNF root-PihPG"
                                                            >
                                                              {Number(
                                                                singlereport?.clicks
                                                              )?.toLocaleString()}{" "}
                                                            </h3>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <div class="coin-1Lahx">
                                                        <img
                                                          src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                          alt="Open rate"
                                                        />
                                                      </div>
                                                      <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                            <button type="button">
                                                              <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                Click rate
                                                              </p>
                                                            </button>
                                                            <span
                                                              role="status"
                                                              aria-atomic="true"
                                                            >
                                                              <span class="wink-visually-hidden"></span>
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <div class="cluster-3D5Qr">
                                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                            <h3
                                                              style={{
                                                                marginLeft:
                                                                  "30px",
                                                              }}
                                                              class="heading-3-eDQNF root-PihPG"
                                                            >
                                                              {Number(
                                                                singlereport?.clickedPercentage
                                                              )?.toLocaleString()}{" "}
                                                              %
                                                            </h3>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <br />
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                          }}
                                          class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                        >
                                          <div class="stack-1qp4V spacing2-3AKCb">
                                            <h4 class="heading-4-3r-mu root-PihPG">
                                              Cliked
                                            </h4>
                                            <p class="root-3TDqk small-secondary-3_Rq2">
                                              {todaysFormatDate
                                                ? `${formattedDate} - ${todaysFormatDate}`
                                                : formattedDate}{" "}
                                              •{" "}
                                              {singlereport?.audienceRecipients}{" "}
                                              recipients
                                            </p>
                                          </div>
                                          <div>
                                            <a
                                              style={{
                                                backgroundColor: "#007c89",
                                                color: "white",
                                              }}
                                              class="root-sBgFt container-3-bH7 primary-33czz"
                                              href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                              download="members_new_testing_sent_Feb_16_2025.csv"
                                            >
                                              <span class="temporarySpan-2iF2p">
                                                Export recipients
                                              </span>
                                            </a>
                                          </div>
                                        </div>
                                        <br />
                                        <ReceiptTable
                                          filterStartDate={formattedDate}
                                          filterEndDate={todaysFormatDate}
                                          campaignId={id}
                                          selectedStatus={selectedStatus}
                                          audienceRecipients={Number(
                                            singlereport?.audienceRecipients
                                          )}
                                          currentCount={getCurrentCount()}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "bounced" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <div className="status-box">
                                      <div className="status-box">
                                        <div className="status-box">
                                          <br />
                                          <div class="container-1QcyQ snipcss-dqFv4">
                                            <div class="header-epI_B">
                                              <div class="stack-1qp4V spacing1-2v2JO">
                                                <p class="root-3TDqk heading-4-EoGPh">
                                                  Recipient activity summary
                                                </p>
                                                <p class="root-3TDqk small-secondary-3_Rq2">
                                                  June 3, 2024 - February 15,
                                                  2025
                                                </p>
                                              </div>
                                            </div>
                                            <div class="section-kJ-Iy">
                                              <div class="borderTop-14P4Y">
                                                <div class="cluster-3D5Qr">
                                                  <div
                                                    style={{
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent:
                                                        "space-between",
                                                    }}
                                                    class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                                  >
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <div class="coin-1Lahx">
                                                          <img
                                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                            alt="Total sends"
                                                          />
                                                        </div>
                                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                              <button type="button">
                                                                <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                  Bounces
                                                                </p>
                                                              </button>
                                                              <span
                                                                role="status"
                                                                aria-atomic="true"
                                                              >
                                                                <span class="wink-visually-hidden"></span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <h3
                                                                style={{
                                                                  marginLeft:
                                                                    "30px",
                                                                }}
                                                                class="heading-3-eDQNF root-PihPG"
                                                              >
                                                                {Number(
                                                                  singlereport?.bounced
                                                                )?.toLocaleString()}{" "}
                                                              </h3>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <div class="coin-1Lahx">
                                                          <img
                                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                            alt="Open rate"
                                                          />
                                                        </div>
                                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                              <button type="button">
                                                                <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                  Bounced Rate
                                                                </p>
                                                              </button>
                                                              <span
                                                                role="status"
                                                                aria-atomic="true"
                                                              >
                                                                <span class="wink-visually-hidden"></span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <h3
                                                                style={{
                                                                  marginLeft:
                                                                    "30px",
                                                                }}
                                                                class="heading-3-eDQNF root-PihPG"
                                                              >
                                                                {Number(
                                                                  singlereport?.bouncedpercentage
                                                                )?.toLocaleString()}{" "}
                                                                %
                                                              </h3>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <div class="coin-1Lahx">
                                                          <img
                                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                            alt="Open rate"
                                                          />
                                                        </div>
                                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                              <button type="button">
                                                                <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                  Soft Bounces
                                                                </p>
                                                              </button>
                                                              <span
                                                                role="status"
                                                                aria-atomic="true"
                                                              >
                                                                <span class="wink-visually-hidden"></span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <h3
                                                                style={{
                                                                  marginLeft:
                                                                    "30px",
                                                                }}
                                                                class="heading-3-eDQNF root-PihPG"
                                                              >
                                                                0
                                                              </h3>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <div class="coin-1Lahx">
                                                          <img
                                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                            alt="Open rate"
                                                          />
                                                        </div>
                                                        <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                              <button type="button">
                                                                <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                  Hard Bounces
                                                                </p>
                                                              </button>
                                                              <span
                                                                role="status"
                                                                aria-atomic="true"
                                                              >
                                                                <span class="wink-visually-hidden"></span>
                                                              </span>
                                                            </div>
                                                          </div>
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <h3
                                                                style={{
                                                                  marginLeft:
                                                                    "30px",
                                                                }}
                                                                class="heading-3-eDQNF root-PihPG"
                                                              >
                                                                {
                                                                  singlereport?.bounced
                                                                }
                                                              </h3>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <br />
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "space-between",
                                            }}
                                            class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                          >
                                            <div class="stack-1qp4V spacing2-3AKCb">
                                              <h4 class="heading-4-3r-mu root-PihPG">
                                                Bounced
                                              </h4>
                                              <p class="root-3TDqk small-secondary-3_Rq2">
                                                {todaysFormatDate
                                                  ? `${formattedDate} - ${todaysFormatDate}`
                                                  : formattedDate}
                                                •{" "}
                                                {
                                                  singlereport?.audienceRecipients
                                                }{" "}
                                                recipients
                                              </p>
                                            </div>
                                            <div>
                                              <a
                                                style={{
                                                  backgroundColor: "#007c89",
                                                  color: "white",
                                                }}
                                                class="root-sBgFt container-3-bH7 primary-33czz"
                                                href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                                download="members_new_testing_sent_Feb_16_2025.csv"
                                              >
                                                <span class="temporarySpan-2iF2p">
                                                  Export recipients
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                          <br />
                                          <ReceiptTable
                                            filterStartDate={formattedDate}
                                            filterEndDate={todaysFormatDate}
                                            campaignId={id}
                                            selectedStatus={selectedStatus}
                                            audienceRecipients={Number(
                                              singlereport?.audienceRecipients
                                            )}
                                            currentCount={getCurrentCount()}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "subscribed" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <div className="status-box">
                                      <div className="status-box">
                                        <div className="status-box">
                                          <div className="status-box">
                                            <br />
                                            <div class="container-1QcyQ snipcss-dqFv4">
                                              <div class="header-epI_B">
                                                <div class="stack-1qp4V spacing1-2v2JO">
                                                  <p class="root-3TDqk heading-4-EoGPh">
                                                    Recipient activity summary
                                                  </p>
                                                  <p class="root-3TDqk small-secondary-3_Rq2">
                                                    June 3, 2024 - February 15,
                                                    2025
                                                  </p>
                                                </div>
                                              </div>
                                              <div class="section-kJ-Iy">
                                                <div class="borderTop-14P4Y">
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                                    >
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <div class="coin-1Lahx">
                                                            <img
                                                              src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                              alt="Total sends"
                                                            />
                                                          </div>
                                                          <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                                <button type="button">
                                                                  <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                    Bounces
                                                                  </p>
                                                                </button>
                                                                <span
                                                                  role="status"
                                                                  aria-atomic="true"
                                                                >
                                                                  <span class="wink-visually-hidden"></span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                                <h3
                                                                  style={{
                                                                    marginLeft:
                                                                      "30px",
                                                                  }}
                                                                  class="heading-3-eDQNF root-PihPG"
                                                                >
                                                                  {Number(
                                                                    singlereport?.bounced
                                                                  )?.toLocaleString()}{" "}
                                                                </h3>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <div class="coin-1Lahx">
                                                            <img
                                                              src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                              alt="Open rate"
                                                            />
                                                          </div>
                                                          <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                                <button type="button">
                                                                  <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                    Bounced Rate
                                                                  </p>
                                                                </button>
                                                                <span
                                                                  role="status"
                                                                  aria-atomic="true"
                                                                >
                                                                  <span class="wink-visually-hidden"></span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                                <h3
                                                                  style={{
                                                                    marginLeft:
                                                                      "30px",
                                                                  }}
                                                                  class="heading-3-eDQNF root-PihPG"
                                                                >
                                                                  {Number(
                                                                    singlereport?.bouncedpercentage
                                                                  )?.toLocaleString()}{" "}
                                                                  %
                                                                </h3>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <div class="coin-1Lahx">
                                                            <img
                                                              src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                              alt="Open rate"
                                                            />
                                                          </div>
                                                          <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                                <button type="button">
                                                                  <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                    Soft Bounces
                                                                  </p>
                                                                </button>
                                                                <span
                                                                  role="status"
                                                                  aria-atomic="true"
                                                                >
                                                                  <span class="wink-visually-hidden"></span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                                <h3
                                                                  style={{
                                                                    marginLeft:
                                                                      "30px",
                                                                  }}
                                                                  class="heading-3-eDQNF root-PihPG"
                                                                >
                                                                  0
                                                                </h3>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div class="cluster-3D5Qr">
                                                        <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                          <div class="coin-1Lahx">
                                                            <img
                                                              src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                              alt="Open rate"
                                                            />
                                                          </div>
                                                          <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                                <button type="button">
                                                                  <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                                    Hard Bounces
                                                                  </p>
                                                                </button>
                                                                <span
                                                                  role="status"
                                                                  aria-atomic="true"
                                                                >
                                                                  <span class="wink-visually-hidden"></span>
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div class="cluster-3D5Qr">
                                                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                                <h3
                                                                  style={{
                                                                    marginLeft:
                                                                      "30px",
                                                                  }}
                                                                  class="heading-3-eDQNF root-PihPG"
                                                                >
                                                                  {
                                                                    singlereport?.bounced
                                                                  }
                                                                </h3>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <br />
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                              }}
                                              class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                            >
                                              <div class="stack-1qp4V spacing2-3AKCb">
                                                <h4 class="heading-4-3r-mu root-PihPG">
                                                  Bounced
                                                </h4>
                                                <p class="root-3TDqk small-secondary-3_Rq2">
                                                  June 3, 2024 - February 16,
                                                  2025 •{" "}
                                                  {
                                                    singlereport?.audienceRecipients
                                                  }{" "}
                                                  recipients
                                                </p>
                                              </div>
                                              <div>
                                                <a
                                                  style={{
                                                    backgroundColor: "#007c89",
                                                    color: "white",
                                                  }}
                                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                                  href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                                  download="members_new_testing_sent_Feb_16_2025.csv"
                                                >
                                                  <span class="temporarySpan-2iF2p">
                                                    Export recipients
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                            <br />
                                            <ReceiptTable
                                              filterStartDate={formattedDate}
                                              filterEndDate={todaysFormatDate}
                                              campaignId={id}
                                              selectedStatus={selectedStatus}
                                              audienceRecipients={Number(
                                                singlereport?.audienceRecipients
                                              )}
                                              currentCount={getCurrentCount()}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedStatus === "unsubscribed" && (
                                <div className="status-box">
                                  <div className="status-box">
                                    <br />
                                    <div class="container-1QcyQ snipcss-dqFv4">
                                      <div class="header-epI_B">
                                        <div class="stack-1qp4V spacing1-2v2JO">
                                          <p class="root-3TDqk heading-4-EoGPh">
                                            Recipient activity summary
                                          </p>
                                          <p class="root-3TDqk small-secondary-3_Rq2">
                                            June 3, 2024 - February 15, 2025
                                          </p>
                                        </div>
                                      </div>
                                      <div class="section-kJ-Iy">
                                        <div class="borderTop-14P4Y">
                                          <div class="cluster-3D5Qr">
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                              }}
                                              class="alignItemsCenter-1HCiJ justifySpaceAround-m9RGY spacing4-1S_zR"
                                            >
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Total sends"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Total sends
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.audienceRecipients
                                                          )?.toLocaleString()}{" "}
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Deliveries"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Unsubscribed
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.unsubscribed
                                                          )?.toLocaleString()}{" "}
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <div class="coin-1Lahx">
                                                    <img
                                                      src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                      alt="Open rate"
                                                    />
                                                  </div>
                                                  <div class="stack-1qp4V spacing1-2v2JO container-2JvaY">
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                                        <button type="button">
                                                          <p class="root-3TDqk medium-3AcAC kaleUnderline-2gW5D">
                                                            Unsubscribe rate
                                                          </p>
                                                        </button>
                                                        <span
                                                          role="status"
                                                          aria-atomic="true"
                                                        >
                                                          <span class="wink-visually-hidden"></span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div class="cluster-3D5Qr">
                                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                        <h3
                                                          style={{
                                                            marginLeft: "30px",
                                                          }}
                                                          class="heading-3-eDQNF root-PihPG"
                                                        >
                                                          {Number(
                                                            singlereport?.unsubscribedpercentage
                                                          )?.toLocaleString()}{" "}
                                                          %
                                                        </h3>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    {/* Unsub Reasons */}
                                    <div class="container-1QcyQ snipcss-1DDK5">
                                      <div class="header-epI_B">
                                        <div class="stack-1qp4V spacing1-2v2JO">
                                          <p class="root-3TDqk medium-bold-2nZ0J metricHeader-oGj-k">
                                            Unsubscribe reasons
                                          </p>
                                        </div>
                                      </div>
                                      <div class="section-kJ-Iy">
                                        <div class="borderTop-14P4Y">
                                          <div class="stack-1qp4V spacing1-2v2JO">
                                            <div
                                              class="root-209cT gap5--6s4d style-rDgIk"
                                              id="style-rDgIk"
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-evenly",
                                                  width: "100%",
                                                  marginBottom: "15px",
                                                }}
                                              >
                                                <div
                                                  style={{ width: "100%" }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        No longer interested
                                                      </p>
                                                      <p class="root-3TDqk small-2qKd5"></p>
                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NORMAL"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    marginLeft: "40px",
                                                  }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        Did not sign up
                                                      </p>

                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NOSIGNUP"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-evenly",
                                                  width: "100%",
                                                  marginBottom: "15px",
                                                }}
                                              >
                                                <div
                                                  style={{ width: "100%" }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        Inappropriate content
                                                      </p>

                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NORMAL"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    marginLeft: "40px",
                                                  }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        Spam
                                                      </p>

                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NOSIGNUP"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                              </div>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent:
                                                    "space-evenly",
                                                  width: "100%",
                                                  marginBottom: "15px",
                                                }}
                                              >
                                                <div
                                                  style={{ width: "100%" }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        Other
                                                      </p>

                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NORMAL"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                                <div
                                                  style={{
                                                    width: "100%",
                                                    marginLeft: "40px",
                                                  }}
                                                  class="stack-1qp4V spacing2-3AKCb"
                                                >
                                                  <div class="cluster-3D5Qr">
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "space-between",
                                                      }}
                                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"
                                                    >
                                                      <p class="root-3TDqk small-2qKd5">
                                                        Unspecified
                                                      </p>

                                                      <p
                                                        class="root-3TDqk small-2qKd5"
                                                        data-testid="metric-link-NOSIGNUP"
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <hr />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <br />
                                    {/* Endresas */}
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                      }}
                                      class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss-KLL4F"
                                    >
                                      <div class="stack-1qp4V spacing2-3AKCb">
                                        <h4 class="heading-4-3r-mu root-PihPG">
                                          Unsubscribed
                                        </h4>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          {todaysFormatDate
                                            ? `${formattedDate} - ${todaysFormatDate}`
                                            : formattedDate}{" "}
                                          • {singlereport?.audienceRecipients}{" "}
                                          recipients
                                        </p>
                                      </div>
                                      <div>
                                        <a
                                          style={{
                                            backgroundColor: "#007c89",
                                            color: "white",
                                          }}
                                          class="root-sBgFt container-3-bH7 primary-33czz"
                                          href="/analytics/reports/recipient-activity/sent?id=6741586&amp;sort=email:asc&amp;export"
                                          download="members_new_testing_sent_Feb_16_2025.csv"
                                        >
                                          <span class="temporarySpan-2iF2p">
                                            Export recipients
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <br />
                                    <ReceiptTable
                                      filterStartDate={formattedDate}
                                      filterEndDate={todaysFormatDate}
                                      campaignId={id}
                                      selectedStatus={selectedStatus}
                                      audienceRecipients={Number(
                                        singlereport?.audienceRecipients
                                      )}
                                      currentCount={getCurrentCount()}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
                {currentpage === "ecommerace" && (
                  <>
                    <div style={{ maxWidth: "85%", margin: "50px auto" }}>
                      <h1>{singlereport?.campaignName}</h1>
                      <span style={{ color: "#007c89" }}>Switch report</span>
                      <nav
                        style={{ margin: "50px 0px", position: "relative" }}
                        class="navigationMenu-1zK9M"
                      >
                        <ul class="menu-gUP8n">
                          <li onClick={() => setcurrentpage("overview")}>
                            <a style={{ color: "gray" }} href="#">
                              Overview
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("clickperformance")}
                          >
                            <a style={{ color: "gray" }} href="#">
                              Click performance
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("recipientactivity")}
                            class=""
                          >
                            <div style={{ paddingBottom: "15px" }}>
                              Recipient activity
                            </div>
                            {/*  */}
                          </li>
                          <li
                            onClick={() => setcurrentpage("ecommerace")}
                            style={{ color: "#007c89" }}
                            class="isActive-2tLXY"
                          >
                            <a style={{ color: "#007c89" }} href="#">
                              Ecommerce
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("contentoptimzer")}
                            class=""
                          >
                            <a href="#">Content Optimizer</a>
                          </li>
                          {/* <li onClick={() => setcurrentpage("social")} class="">
                            <a href="#">Social</a>
                          </li> */}
                          <li onClick={() => setcurrentpage("more")} class="">
                            <a href="#">More</a>
                          </li>
                        </ul>
                      </nav>
                      <div style={{ margin: "5px" }}>
                        <h2 style={{ margin: "28px" }}>Order history</h2>
                        <div class="dfoisid">
                          {" "}
                          <div class="">
                            {" "}
                            <h3 class="fsn !margin--lv0">
                              <a
                                data-mc-stat="openCountStat"
                                href="https://hayzeltech.com/mailing/reports/"
                                title="View"
                              >
                                {singlereport?.orders}
                              </a>{" "}
                            </h3>{" "}
                            <p>Orders</p>{" "}
                          </div>{" "}
                          <div class="">
                            {" "}
                            <h3 class="">
                              <a
                                data-mc-stat="clickCountStat"
                                class="not-active"
                                href="https://hayzeltech.com/mailing/reports/"
                                title="View"
                              >
                                {singlereport?.averageOrderRevenue}$
                              </a>
                            </h3>{" "}
                            <p>Average order revenue</p>{" "}
                          </div>{" "}
                          <div class="">
                            {" "}
                            <h3 class="fsn !margin--lv0">
                              <a
                                data-mc-el="bounceCountStat"
                                class="not-active"
                                href="https://hayzeltech.com/mailing/reports/"
                                title="View"
                              >
                                {singlereport?.totalRevenue}$
                              </a>
                            </h3>{" "}
                            <p>Total revenue</p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div style={{ margin: "35px" }}>
                          <div>
                            <div>
                              {" "}
                              <div
                                style={{
                                  border: "1px solid gray",
                                  minHeight: "400px",
                                }}
                                class="c-noDataBlock text-align--center border-gray border-radius--lv2"
                                id="dijit__TemplatedMixin_0"
                                lang="en"
                                widgetid="dijit__TemplatedMixin_0"
                              >
                                <div data-dojo-attach-point="containerNode">
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <img
                                      style={{ width: "300px" }}
                                      src="https://cdn-images.mailchimp.com/product/brand_assets/illos/art-empty-products.png"
                                      alt=""
                                    />
                                  </div>
                                  <h2
                                    class="c-noDataBlock_title"
                                    data-dojo-attach-point="noDataTitle"
                                  >
                                    You don't have any eCommerce data yet
                                  </h2>
                                  <p
                                    style={{
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                    class=""
                                    data-dojo-attach-point="noDataMessage"
                                  >
                                    Once you have a{" "}
                                    <a
                                      href="https://mailchimp.com/help/about-connected-sites/"
                                      target="_blank"
                                    >
                                      store connected
                                    </a>
                                    , you can view your data here at any time.
                                  </p>
                                  <a
                                    href="#"
                                    class="c-noDataBlock_action button-wink button-wink-primary float--none  hide"
                                    data-dojo-attach-point="noDataButton"
                                  ></a>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentpage === "contentoptimzer" && (
                  <>
                    <div style={{ maxWidth: "90%", margin: "auto" }}>
                      <nav
                        style={{ margin: "50px 0px", position: "relative" }}
                        class="navigationMenu-1zK9M"
                      >
                        <ul class="menu-gUP8n">
                          <li onClick={() => setcurrentpage("overview")}>
                            <a style={{ color: "gray" }} href="#">
                              Overview
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("clickperformance")}
                          >
                            <a style={{ color: "gray" }} href="#">
                              Click performance
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("recipientactivity")}
                            class=""
                          >
                            <div style={{ paddingBottom: "15px" }}>
                              Recipient activity
                            </div>
                            {/*  */}
                          </li>
                          <li
                            onClick={() => setcurrentpage("ecommerace")}
                            class=""
                          >
                            <a href="#">Ecommerce</a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("contentoptimzer")}
                            class="isActive-2tLXY"
                          >
                            <a style={{ color: "#007c89" }} href="#">
                              Content Optimizer
                            </a>
                          </li>
                          {/* <li
                            onClick={() => setcurrentpage("overview")}
                            class=""
                          >
                            <a href="#">Social</a>
                          </li> */}
                          <li onClick={() => setcurrentpage("more")} class="">
                            <a href="#">More</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div style={{ margin: "32px" }}>
                      <div class="stack-1qp4V spacing3-1OKHB headingContainer-3dt3O snipcss-ITg9i">
                        <h2 class="heading-2-ZDzRe root-PihPG">
                          Get suggestions based on your industry
                        </h2>
                        <p class="root-3TDqk medium-secondary-1YIN8">
                          Tell us your industry and we'll make content
                          suggestions that are based specifically on those
                          industry best practices.
                        </p>
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                          class="cluster-3D5Qr"
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            class="alignItemsFlexEnd-3W8aW justifyFlexStart-ejJl1 spacing4-1S_zR"
                          >
                            <div class="root-1cS4q">
                              <div class="before-fjpii">
                                <label
                                  class="mcds-label-default"
                                  id="mc:79"
                                  for="mc:78"
                                >
                                  Industry
                                </label>
                              </div>
                              <div class="selectWrapper-1gG6j">
                                <select id="mc:78">
                                  <option value="" disabled="" selected="">
                                    Select an industry
                                  </option>
                                  <option value="Agriculture and Food Services">
                                    Agriculture and Food Services
                                  </option>
                                  <option value="Architecture and Construction">
                                    Architecture and Construction
                                  </option>
                                  <option value="Arts and Artists">
                                    Arts and Artists
                                  </option>
                                  <option value="Beauty and Personal Care">
                                    Beauty and Personal Care
                                  </option>
                                  <option value="Business and Finance">
                                    Business and Finance
                                  </option>
                                  <option value="Computers and Electronics">
                                    Computers and Electronics
                                  </option>
                                  <option value="Consulting">Consulting</option>
                                  <option value="Creative Services/Agency">
                                    Creative Services/Agency
                                  </option>
                                  <option value="Daily Deals/E-Coupons">
                                    Daily Deals/E-Coupons
                                  </option>
                                  <option value="Education and Training">
                                    Education and Training
                                  </option>
                                  <option value="Entertainment and Events">
                                    Entertainment and Events
                                  </option>
                                  <option value="Games">Games</option>
                                  <option value="Government">Government</option>
                                  <option value="Health and Fitness">
                                    Health and Fitness
                                  </option>
                                  <option value="Hobbies">Hobbies</option>
                                  <option value="Home and Garden">
                                    Home and Garden
                                  </option>
                                  <option value="Insurance">Insurance</option>
                                  <option value="Legal">Legal</option>
                                  <option value="Manufacturing">
                                    Manufacturing
                                  </option>
                                  <option value="Marketing and Advertising">
                                    Marketing and Advertising
                                  </option>
                                  <option value="Media and Publishing">
                                    Media and Publishing
                                  </option>
                                  <option value="Medical, Dental, and Healthcare">
                                    Medical, Dental, and Healthcare
                                  </option>
                                  <option value="Mobile">Mobile</option>
                                  <option value="Music and Musicians">
                                    Music and Musicians
                                  </option>
                                  <option value="Non-Profit">Non-Profit</option>
                                  <option value="Not selected">
                                    Not selected
                                  </option>
                                  <option value="Photo and Video">
                                    Photo and Video
                                  </option>
                                  <option value="Politics">Politics</option>
                                  <option value="Professional Services">
                                    Professional Services
                                  </option>
                                  <option value="Public Relations">
                                    Public Relations
                                  </option>
                                  <option value="Real Estate">
                                    Real Estate
                                  </option>
                                  <option value="Recruitment and Staffing">
                                    Recruitment and Staffing
                                  </option>
                                  <option value="Religion">Religion</option>
                                  <option value="Restaurant and Venue">
                                    Restaurant and Venue
                                  </option>
                                  <option value="Retail">Retail</option>
                                  <option value="Social Networks and Online Communities">
                                    Social Networks and Online Communities
                                  </option>
                                  <option value="Software and Web App">
                                    Software and Web App
                                  </option>
                                  <option value="Sports">Sports</option>
                                  <option value="Telecommunications">
                                    Telecommunications
                                  </option>
                                  <option value="Travel and Transportation">
                                    Travel and Transportation
                                  </option>
                                  <option value="Vitamin Supplements">
                                    Vitamin Supplements
                                  </option>
                                  <option value="eCommerce">eCommerce</option>
                                </select>
                                <div class="indicator-3GTSs">
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
                                </div>
                              </div>
                            </div>
                            <button
                              style={{
                                marginTop: "50px",
                                backgroundColor: "#007C89",
                                color: "white",
                              }}
                              class="root-sBgFt container-3-bH7 primary-33czz"
                              type="button"
                            >
                              <span class="temporarySpan-2iF2p">Save</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: "20px",
                          marginLeft: "3px",
                          marginRight: "30px",
                        }}
                        class="scoreCardContainer-3BtV4 snipcss-88oOt"
                      >
                        <div class="scoreCardComponent-11j0w cluster-3D5Qr nowrap-34OZ-">
                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                            <div
                              class="stack-1qp4V spacing2-3AKCb dataWellContainer-2cvq1 alignCenter-2xW_H dataWellContainer-2eRIv style-wxfIM"
                              id="style-wxfIM"
                            >
                              <p class="root-3TDqk medium-3AcAC statistic-3Fegn large-20nKS">
                                11
                              </p>
                              <p class="root-3TDqk small-bold-6R-6E miscText-Ubfdi">
                                out of 13
                              </p>
                              <span class="root-3TDqk medium-3AcAC">
                                <div class="cluster-3D5Qr">
                                  <span class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                    <span>Best practices met</span>
                                    <button class="root-1khsy" type="button">
                                      <span class="wink-visually-hidden">
                                        Best practices info
                                      </span>
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
                                  </span>
                                </div>
                              </span>
                            </div>
                            <div
                              class="root-209cT gap7-16IsZ meterContainer-8IjnZ style-mTv5B"
                              id="style-mTv5B"
                            >
                              <span class="meterLink-1Y-X5">
                                <div class="root-z2y3S meter-2G9Uh">
                                  <div class="before-3BYvd">
                                    <span class="mcds-label-default" id="mc:84">
                                      <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                        Skimmability
                                      </span>
                                    </span>
                                    <p
                                      class="root-3TDqk medium-secondary-1YIN8"
                                      id="mc:86"
                                    >
                                      2 out of 3
                                    </p>
                                  </div>
                                  <div
                                    id="mc:83"
                                    role="progressbar"
                                    aria-labelledby="mc:84"
                                    aria-describedby="mc:86"
                                    aria-valuenow="2"
                                    aria-valuemin="0"
                                    aria-valuemax="3"
                                    class="meterTrack-1pXt2"
                                  >
                                    <div
                                      class="meterFill-3POEf style-LwlA9"
                                      id="style-LwlA9"
                                    ></div>
                                  </div>
                                  <div class="after-2-NpD cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"></div>
                                  </div>
                                </div>
                              </span>
                              <span class="meterLink-1Y-X5">
                                <div class="root-z2y3S meter-2G9Uh">
                                  <div class="before-3BYvd">
                                    <span class="mcds-label-default" id="mc:88">
                                      <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                        Text &amp; Visuals
                                      </span>
                                    </span>
                                    <p
                                      class="root-3TDqk medium-secondary-1YIN8"
                                      id="mc:90"
                                    >
                                      2 out of 2
                                    </p>
                                  </div>
                                  <div
                                    id="mc:87"
                                    role="progressbar"
                                    aria-labelledby="mc:88"
                                    aria-describedby="mc:89 mc:90"
                                    aria-valuenow="2"
                                    aria-valuemin="0"
                                    aria-valuemax="2"
                                    class="meterTrack-1pXt2 positive-15J9m"
                                  >
                                    <div
                                      class="meterFill-3POEf style-UnBoG"
                                      id="style-UnBoG"
                                    ></div>
                                  </div>
                                  <div class="after-2-NpD cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <span
                                        class="root-3TDqk small-2qKd5"
                                        id="mc:89"
                                      >
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon chartIcon-1PVQJ"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                              ></path>
                                            </svg>
                                            <p class="root-3TDqk small-2qKd5">
                                              Great work
                                            </p>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <span class="meterLink-1Y-X5">
                                <div class="root-z2y3S meter-2G9Uh">
                                  <div class="before-3BYvd">
                                    <span class="mcds-label-default" id="mc:92">
                                      <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                        Links &amp; CTAs
                                      </span>
                                    </span>
                                    <p
                                      class="root-3TDqk medium-secondary-1YIN8"
                                      id="mc:94"
                                    >
                                      3 out of 3
                                    </p>
                                  </div>
                                  <div
                                    id="mc:91"
                                    role="progressbar"
                                    aria-labelledby="mc:92"
                                    aria-describedby="mc:93 mc:94"
                                    aria-valuenow="3"
                                    aria-valuemin="0"
                                    aria-valuemax="3"
                                    class="meterTrack-1pXt2 positive-15J9m"
                                  >
                                    <div
                                      class="meterFill-3POEf style-SrxDV"
                                      id="style-SrxDV"
                                    ></div>
                                  </div>
                                  <div class="after-2-NpD cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <span
                                        class="root-3TDqk small-2qKd5"
                                        id="mc:93"
                                      >
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon chartIcon-1PVQJ"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                              ></path>
                                            </svg>
                                            <p class="root-3TDqk small-2qKd5">
                                              Awesome
                                            </p>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </span>
                              <span class="meterLink-1Y-X5">
                                <div class="root-z2y3S meter-2G9Uh">
                                  <div class="before-3BYvd">
                                    <span class="mcds-label-default" id="mc:96">
                                      <span class="root-3TDqk medium-bold-2nZ0J label-2pCr-">
                                        Typography
                                      </span>
                                    </span>
                                    <p
                                      class="root-3TDqk medium-secondary-1YIN8"
                                      id="mc:98"
                                    >
                                      4 out of 5
                                    </p>
                                  </div>
                                  <div
                                    id="mc:95"
                                    role="progressbar"
                                    aria-labelledby="mc:96"
                                    aria-describedby="mc:98"
                                    aria-valuenow="4"
                                    aria-valuemin="0"
                                    aria-valuemax="5"
                                    class="meterTrack-1pXt2"
                                  >
                                    <div
                                      class="meterFill-3POEf style-U88FK"
                                      id="style-U88FK"
                                    ></div>
                                  </div>
                                  <div class="after-2-NpD cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR"></div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss-QtMwf">
                        <div class="stack-1qp4V spacing7-3UvBh campaignStatsContainer-3KoD9">
                          <div class="stack-1qp4V spacing2-3AKCb">
                            <p class="root-3TDqk heading-4-EoGPh">
                              1 skimmability suggestion
                            </p>
                            <p class="root-3TDqk small-secondary-3_Rq2">
                              Short and simple content is easier to skim and
                              understand quickly, which could help increase your
                              audience's intake and retention.
                            </p>
                          </div>
                          <div class="stack-1qp4V spacing3-1OKHB">
                            <p class="root-3TDqk small-bold-6R-6E">
                              Campaign stats
                            </p>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing6-zD2QG">
                                <div
                                  class="stack-1qp4V dataWellContainer-2cvq1 campaignStat-2Ly8r style-721oC"
                                  id="style-721oC"
                                >
                                  <p class="root-3TDqk medium-3AcAC statistic-3Fegn extra-small-i-pZX">
                                    27
                                  </p>
                                  <p class="root-3TDqk small-2qKd5">
                                    Total Words
                                  </p>
                                </div>
                                <div
                                  class="stack-1qp4V dataWellContainer-2cvq1 campaignStat-2Ly8r style-ofocQ"
                                  id="style-ofocQ"
                                >
                                  <p class="root-3TDqk medium-3AcAC statistic-3Fegn extra-small-i-pZX">
                                    0 min 6 sec
                                  </p>
                                  <p class="root-3TDqk small-2qKd5">
                                    Estimated Reading Time
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="stack-1qp4V spacing4-1xt6w recoListContainer-2XIm3">
                          <div
                            class="stack-1qp4V spacing6-nznRY recContainer-1DuW0"
                            aria-expanded="false"
                            tabindex="0"
                          >
                            <div class="stack-1qp4V spacing1-2v2JO">
                              <button
                                class="root-1khsy infoIcon-1kBbb"
                                aria-describedby="mc:99"
                                type="button"
                              >
                                <span class="wink-visually-hidden">
                                  Recommendation Explanation
                                </span>
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
                              <p class="root-3TDqk small-bold-6R-6E labelText-3oMqg"></p>
                              <p class="root-3TDqk large-23Nnp recoText-34tO9">
                                Avoid using large words and long sentences to
                                ensure your audience can easily understand your
                                content.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentpage === "more" && (
                  <>
                    <div style={{ margin: "30px" }}>
                      <h1 style={{ fontSize: "35px" }}>
                        {singlereport?.campaignName}
                      </h1>
                      <br />
                      <span>
                        <span style={{ color: "#007c89" }}>Switch report</span>
                      </span>
                      <br />

                      <nav
                        style={{ margin: "30px 0px", position: "relative" }}
                        class="navigationMenu-1zK9M"
                      >
                        <ul class="menu-gUP8n">
                          <li onClick={() => setcurrentpage("overview")}>
                            <a style={{ color: "" }} href="#">
                              Overview
                            </a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("clickperformance")}
                          >
                            <a style={{ color: "gray" }} href="#">
                              Click performance
                            </a>
                          </li>
                          <li
                            style={{ color: "" }}
                            onClick={() => setcurrentpage("recipientactivity")}
                          >
                            <div style={{ paddingBottom: "15px" }}>
                              Recipient activity
                            </div>
                            {/*  */}
                          </li>
                          <li
                            onClick={() => setcurrentpage("ecommerace")}
                            class=""
                          >
                            <a href="#">Ecommerce</a>
                          </li>
                          <li
                            onClick={() => setcurrentpage("contentoptimzer")}
                            class=""
                          >
                            <a href="#">Content Optimizer</a>
                          </li>
                          {/* <li onClick={() => setcurrentpage("social")} class="">
                            <a href="#">Social</a>
                          </li> */}
                          <li
                            class="isActive-2tLXY"
                            style={{ paddingRight: "20px", color: "#007c89" }}
                            onClick={() => setcurrentpage("more")}
                          >
                            <a style={{ color: "#007c89" }} href="#">
                              More
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div id="" class="line">
                        {" "}
                        <div id="" class="">
                          <div class="">
                            {" "}
                            <div class="">
                              {" "}
                              <table
                                style={{ width: "100%" }}
                                class="mc-table scroll-small"
                              >
                                {" "}
                                <thead>
                                  {" "}
                                  <tr style={{ height: "50px" }} class="odd">
                                    {" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Domain
                                    </th>{" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Email
                                    </th>{" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Bounces
                                    </th>{" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Opens
                                    </th>{" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Clicks
                                    </th>{" "}
                                    <th style={{ paddingLeft: "10px" }}>
                                      Unsubs
                                    </th>{" "}
                                  </tr>{" "}
                                </thead>{" "}
                                <tbody>
                                  {singlereport?.emailDomainPerformance &&
                                    [
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomain,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCount,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentage,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCount,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentage,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCount,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentage,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCount,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentage,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCount,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentage,
                                      },
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomainTwo,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCountTwo,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentageTwo,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCountTwo,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentageTwo,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCountTwo,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentageTwo,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCountTwo,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentageTwo,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCountTwo,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentageTwo,
                                      },
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomainThree,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCountThree,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentageThree,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCountThree,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentageThree,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCountThree,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentageThree,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCountThree,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentageThree,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCountThree,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentageThree,
                                      },
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomainFour,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCountFour,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentageFour,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCountFour,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentageFour,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCountFour,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentageFour,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCountFour,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentageFour,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCountFour,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentageFour,
                                      },
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomainFive,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCountFive,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentageFive,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCountFive,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentageFive,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCountFive,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentageFive,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCountFive,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentageFive,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCountFive,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentageFive,
                                      },
                                      {
                                        domain:
                                          singlereport.emailDomainPerformance
                                            .edpdomainSix,
                                        emailCount:
                                          singlereport.emailDomainPerformance
                                            .edpemailCountSix,
                                        emailPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpemailPercentageSix,
                                        bouncesCount:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesCountSix,
                                        bouncesPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpbouncesPercentageSix,
                                        opensCount:
                                          singlereport.emailDomainPerformance
                                            .edpopensCountSix,
                                        opensPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpopensPercentageSix,
                                        clicksCount:
                                          singlereport.emailDomainPerformance
                                            .edpclicksCountSix,
                                        clicksPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpclicksPercentageSix,
                                        unsubsCount:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsCountSix,
                                        unsubsPercentage:
                                          singlereport.emailDomainPerformance
                                            .edpunsubsPercentageSix,
                                      },
                                    ]
                                      .filter((row) => row.domain) // Filter out rows with empty domains
                                      .map((row, index) => (
                                        <tr
                                          key={index}
                                          style={{ height: "50px" }}
                                          className={
                                            index % 2 === 0 ? "even" : "odd"
                                          }
                                        >
                                          <td style={{ paddingLeft: "5px" }}>
                                            {row.domain}
                                          </td>
                                          <td>
                                            {row.emailCount || ""}{" "}
                                            {row.emailPercentage
                                              ? `(${row.emailPercentage}%)`
                                              : ""}
                                          </td>
                                          <td>
                                            {row.bouncesCount || ""}{" "}
                                            {row.bouncesPercentage
                                              ? `(${row.bouncesPercentage}%)`
                                              : ""}
                                          </td>
                                          <td>
                                            {row.opensCount || ""}{" "}
                                            {row.opensPercentage
                                              ? `(${row.opensPercentage}%)`
                                              : ""}
                                          </td>
                                          <td>
                                            {row.clicksCount || ""}{" "}
                                            {row.clicksPercentage
                                              ? `(${row.clicksPercentage}%)`
                                              : ""}
                                          </td>
                                          <td>
                                            {row.unsubsCount || ""}{" "}
                                            {row.unsubsPercentage
                                              ? `(${row.unsubsPercentage}%)`
                                              : ""}
                                          </td>
                                        </tr>
                                      ))}
                                </tbody>
                              </table>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </>
                )}
                {currentpage === "social" && (
                  <>
                    <div>social</div>
                  </>
                )}
                <br />
                <br />
                <br />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCompaing;

import React, { useEffect, useState } from "react";
import "../styles/Reports.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Reports = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleviewreport = (id) => {
    navigate(`/allcompaings/${id}`);
  };
  useEffect(() => {
    axios
      .get("https://mail-chimp-replicate.vercel.app/api/largecampaigns/view")
      .then((response) => {
        setReports(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching reports");
        setLoading(false);
      });
  }, []);
  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const today = new Date();

  console.log("reports", reports);
  return (
    <div>
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
                        type="button"
                        role="link"
                        className="root-1mTPe snipcss0-8-22-23"
                        aria-label="Home"
                      >
                        <Link to="/">
                          <div className="freddieContainer-3BkOH snipcss0-9-23-24">
                            <img
                              className="freddie-2UE1a snipcss0-10-24-25"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAySDkuNTAyYzIuNzM0IDYuMyA4LjgwOCAxMC4wMTcgMTYuMDE2IDEwLjM3MmwuMjg1LjAxMnYuMDAyaC4wMDd2LS4wMDJjNy43MTQuMjczIDE0LjQ1NC0zLjQ1NCAxNy4yMTktMTAuMDc4LjM0OC0uODk2IDIuMjktNi4yNzUtLjY5MS03LjAzNnptLTMyLjIzMiA0Ljk2Yy0uMjM5LjA0LS40ODIuMDU2LS43MjguMDUtMi4zNzMtLjA2My00LjkzNy0yLjItNS4xOTItNC43MzQtLjI4MS0yLjggMS4xNS00Ljk1NiAzLjY4NC01LjQ2N2E0LjMxMyA0LjMxMyAwIDAxMS4wNjQtLjA3NmMxLjQyLjA3OCAzLjUxMSAxLjE2OCAzLjk5IDQuMjYuNDIzIDIuNzQtLjI1IDUuNTI4LTIuODE4IDUuOTY2em0tMi42Ni0xMS44MjVsLjAxLS4wMDJjMS45NTMtNS4zNDcgNS4zNi0xMC4zNTYgOS43OTgtMTMuNzczLjA4NC0uMDcuMTctLjE0LjI2LS4yMSAyLjE4Ny0xLjc4NSA0LjQyOC0zLjMwNSA2LjU4NS00LjUwOCAwIDAtMS45MTMtMi4yMTgtMi40OS0yLjM4MUMxOC4wNTYuODUgMTAuMzggNi4xNDMgNS40NzkgMTMuMTM2Yy0xLjk4MiAyLjgzLTQuODIgNy44NC0zLjQ2MyAxMC40MTguMTY3LjMyIDEuMTE0IDEuMTQgMS42MjIgMS41NjQuODUtMS4yMzUgMi4xNS0yLjEgMy44MDgtMi40MzR6bTkuMDQtOS41NTNjMS43NDYtMi4wMjMgMy45LTMuNzgzIDUuODI5LTQuNzcuMDY2LS4wMzQuMTM3LjAzOC4xLjEwMy0uMTUzLjI4LS40NS44NzgtLjU0MSAxLjMyOC0uMDEzLjA2Ni4wNi4xMTQuMTE2LjA3NiAxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3LTEuODM2LjUyNy00LjMyLjkzMi03LjA5MS43NjctLjMwMi0uMDI0LS41ODQtLjA2MS0uODQ1LS4wOTUtMS4wNjgtLjE0LTEuNzg1LS4yMzQtMi4wOTMuNzY1YTUuMTM3IDUuMTM3IDAgMDAuMjkyLjExYy4xNDMuMDQ4LjI5LjA5My40MzguMTM1YTE1LjAzMSAxNS4wMzEgMCAwMDEuODIuNDAxYy4zMDguMDQ5LjYxNy4wOTMuOTI4LjEyNWExNC41MDMgMTQuNTAzIDAgMDAxLjQwMi4wOCAxMy4wOTIgMTMuMDkyIDAgMDAxLjExNS0uMDJjLjA5OC0uMDA0LjE5Ni0uMDA4LjI5NC0uMDE0LjMxMy0uMDIyLjYyNi0uMDUuOTQyLS4wODFhLjEzMS4xMzEgMCAwMS4wNjQuMjVsLS4wMDkuMDA0Yy0uMzAyLjEyOC0uNjE1LjIzLS45MzMuMzFhOC4zODQgOC4zODQgMCAwMS0xLjQ1Ny4yMjYgMTQuNDEgMTQuNDEgMCAwMS0xLjQ3Ny4wMTkgMTMuODIyIDEzLjgyMiAwIDAxLS45ODMtLjA3NiAxNS43NDUgMTUuNzQ1IDAgMDEtMS40Ni0uMjQ3IDEwLjA3NiAxMC4wNzYgMCAwMS0xLjA3NC0uMzA3Yy4xMjUgMS4wNjQgMS4xNjIgMS41NDEgMS42NTggMS43MzRhNy40NzggNy40NzggMCAwMDEuMzA2LjM1NGM1LjYyLjk2NyAxMC44NzUtMi4yNDYgMTIuMDU4LTMuMDU2LjA4OC0uMDYuMTQ3LS4wMDEuMDc2LjEwNmExLjk2IDEuOTYgMCAwMS0uMTE2LjE2NWMtMS40NDggMS44NjgtNS4zNCA0LjAzLTEwLjQwNCA0LjAzLTIuMjEgMC00LjQxNy0uNzc5LTUuMjI3LTEuOTc0LTEuMjU4LTEuODU1LS4wNjItNC41NjMgMi4wMzMtNC4yODEuMDAyIDAgLjcxNy4wOC45MTguMTA0IDQuNDA4LjQ5MyA5LjczLS45NTkgMTIuMDk0LTMuMTQybC4xMTYtLjA4M2MuODE5LS43NzIgMS4yMzYtMS41NyAxLjEwMi0yLjI3MWExLjcgMS43IDAgMDAtLjQ5My0uOTY3Yy0uNTEzLS41MDMtMS4zMjgtLjg5NC0yLjcwMi0xLjI4bC0uMTE0LS4wMzItLjE0NS0uMDRjLS4zMi0uMDktLjU3LS4xNTktLjgzNS0uMjQ2LS41OS0uMTk0LS44ODItLjM1LS45NDgtMS40Ni0uMDMtLjQ4Ni0uMTE0LTIuMTc2LS4xNDQtMi44NzUtLjA1NC0xLjIyNC0uMjAxLTIuODk4LTEuMjQtMy41ODhhMS43NCAxLjc0IDAgMDAtLjg4Ny0uMjg0Yy0uMjU1LS4wMTItLjQwNS4wMjMtLjQ4NS4wNDJsLS4wNDIuMDFjLS41Ni4wOTQtLjkwNC4zODItMS4zMS43MmwtLjA3LjA2Yy0xLjI5NSAxLjA3OS0yLjM4OSAxLjI1NS0zLjYwNCAxLjIwMy0uMzgtLjAxNi0uNzctLjA1NC0xLjE4My0uMDk1LS4zNzgtLjAzNy0uNzc0LS4wNzYtMS4xOTctLjEwMWwtLjEtLjAwNmMtLjEzOS0uMDA4LS4yNzctLjAxNy0uNDE2LS4wMjQtMi4wMzYtLjEwNC00LjIyIDEuNjU1LTQuNTg0IDQuMTUzLS40MDUgMi43ODcgMS4xMzMgNC40OTQgMi4xMzMgNS42MDUuMjQ4LjI3NS40NjIuNTEzLjYwNy43MjJhLjc1Ni43NTYgMCAwMS0uMDYuOTdsLjAwMS4wMDFjLTIuMDc4IDIuMTM3LTIuNzQyIDUuNTMyLTEuOTYgOC4zNi4wOTkuMzU0LjIyMi42OTIuMzcgMS4wMTQgMS44MzYgNC4yOTQgNy41MzUgNi4yOTMgMTMuMTAzIDQuNDc0YTEzLjY3NyAxMy42NzcgMCAwMDIuMTE1LS44OTMgMTEuMTEyIDExLjExMiAwIDAwMy4yNC0yLjQyem0tNi41Ni0xNi4wMzdjLjM0LS4wNC42NjctLjA0Mi45NjcgMCAuMTczLS4zOTguMjAzLTEuMDg0LjA0Ny0xLjgzMS0uMjMyLTEuMTExLS41NDYtMS43ODMtMS4xOTUtMS42NzgtLjY1LjEwNC0uNjczLjkwOS0uNDQxIDIuMDIuMTMuNjI0LjM2MyAxLjE1OS42MjIgMS40OXptLTUuNTcyLjg4Yy0xLjAwMS0uNDMyLTEuNzc3LS41NjUtMy4yNC0uMDk0bC0uMTE1LjAzOGMtLjI5MS4wOTUtLjQ5NC4xNjEtLjYyMy4xNTVhLjI2LjI2IDAgMDEtLjA0LS4wMDVjLS4wNjktLjAxNC0uMTE2LS4wNTctLjEzLS4xMTktLjA0Mi0uMTkxLjI1My0uNTA3LjU2NC0uNzM0Ljk0LS42NzcgMi4xNi0uODIzIDMuMTg0LS4zODMuNS4yMTMuOTcxLjU5MyAxLjIuOTY3LjExMS4xODEuMTMzLjMyMS4wNjEuMzk1LS4xMTIuMTE4LS4zMzUuMDE3LS43NC0uMTY2aC0uMDAxbC0uMTItLjA1NXptLS45MzUuNTMyYy0uMDk0LjAxLS4xODEuMDMtLjI2Ni4wNWwtLjAwNi4wMDFhNC45NTIgNC45NTIgMCAwMS0uMDc1LjAxNyAyLjAxIDIuMDEgMCAwMC0uODA1LjQxM2MtLjE4My4xNi0uMjk2LjMzNi0uMjk1LjQ2IDAgLjA2LjAyNi4wOTMuMDQ2LjExLjAyOC4wMjUuMDYuMDM2LjEuMDM4LjA4My4wMDQuMTk2LS4wMzYuMzUxLS4wOWwuMDkxLS4wMzJhMy43NzcgMy43NzcgMCAwMTEuOTEtLjIwN2wuMDM4LjAwNWMuMjc5LjAzMy40NDcuMDUzLjUxNC0uMDUyLjAyLS4wMy4wNDQtLjA5NS0uMDE3LS4xOTMtLjE0Mi0uMjMtLjc1My0uNjE4LTEuNTg2LS41MnptNS42MzUgMS43OGMtLjE0Ny4zLS42LjM3OS0xLjAxLjE3Ny0uNDEtLjIwMi0uNjI0LS42MDgtLjQ3Ny0uOTA3LjE0Ny0uMy42LS4zOCAxLjAxLS4xNzcuNDEuMjAxLjYyNC42MDguNDc3LjkwN3ptMS42My0yLjEzYy0uMzMzLS4wMDYtLjYxLjM2LS42MTguODE4LS4wMDguNDU4LjI1Ny44MzMuNTkuODM5LjMzNC4wMDYuNjEtLjM2LjYxOC0uODE4LjAwOC0uNDU4LS4yNTYtLjgzMy0uNTktLjgzOXptLTIyLjc2MSA4LjIwOGMuMTMyLS4wMy4yNjgtLjA2Mi4zNTEuMDQyLjAzLjAzNC4wNzguMTEzLjAyMi4yNDItLjA5NS4yMi0uNDY4LjUyLTEuMDAyLjUtLjU1LS4wNDMtMS4xNi0uNDQzLTEuMjQ0LTEuNDM3LS4wNC0uNDkuMTQ1LTEuMDg5LjI2LTEuNDAxLjIyLS42MDUuMDItMS4yMzgtLjQ5Ni0xLjU3N2ExLjM0IDEuMzQgMCAwMC0xLjg1OC4zODdjLS4xNTguMjQ3LS4yNTUuNTU1LS4zMDYuNzItLjAxNC4wNDUtLjAyNS4wOC0uMDM0LjEwMi0uMTE2LjMxMy0uMzAyLjQwNS0uNDI3LjM4OC0uMDYtLjAwOC0uMTQyLS4wNDgtLjE5NC0uMTkxLS4xNDMtLjM5Mi0uMDI3LTEuNS43MS0yLjMxNGEyLjIzMyAyLjIzMyAwIDAxMS45MTUtLjY5Yy43NDIuMDk0IDEuMzU5LjU0MyAxLjczNyAxLjI2My41MDMuOTU4LjA1NSAxLjk2My0uMjEyIDIuNTYzbC0uMDA1LjAxYTguNSA4LjUgMCAwMC0uMDc0LjE2OWMtLjE2Ny4zOTgtLjE3Ni43NDYtLjAyNC45OC4xMTcuMTc5LjMyNC4yODQuNTcuMjg4LjExNC4wMDIuMjE4LS4wMjIuMzEtLjA0M2guMDAxeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
                              alt=""
                            />
                          </div>
                        </Link>
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
                                      src="https://img.icons8.com/?size=50&id=66724&format=png"
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
                        <li className="createItem-1mIzO snipcss0-9-56-57">
                          <Link
                            style={{ border: "1px solid #017b89" }}
                            className="root-sBgFt container-3-bH7 secondary-1_P2K createButton-1NK_y snipcss0-10-57-58"
                            to="/newcomaping"
                          >
                            <span
                              style={{ fontWeight: "500", color: "#017b89" }}
                              className="temporarySpan-2iF2p snipcss0-11-58-59"
                            >
                              <span className="createIcon-qJ3Qk snipcss0-12-59-60"></span>
                              Create
                            </span>
                          </Link>
                        </li>
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
                                  data-analytics-tag="SecondaryNav-All campaigns"
                                  className="snipcss0-13-70-71"
                                >
                                  <Link
                                    to="/allcompaings"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All campaigns
                                      </span>
                                    </div>
                                  </Link>
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
                                  data-analytics-tag="SecondaryNav-Overview"
                                  className="snipcss0-13-84-85"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        OverViews
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-All journeys"
                                  className="snipcss0-13-84-89"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-72-73">
                                      <span className="snipcss0-16-73-74">
                                        All Journeys
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Pre-built journeys"
                                  className="snipcss0-13-84-93"
                                >
                                  <Link
                                    to="/automationoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-94-95">
                                      <span className="snipcss0-16-95-96">
                                        Pre-built journeys
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Transactional email"
                                  className="snipcss0-13-84-97"
                                >
                                  <Link
                                    to="/transactional"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-98-99">
                                      <span className="snipcss0-16-99-100">
                                        Transactional email
                                      </span>
                                    </div>
                                  </Link>
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
                                  data-analytics-tag="SecondaryNav-Audience dashboard"
                                  className="snipcss0-13-110-111"
                                >
                                  <Link
                                    to="/audiencedashboard"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-112-113">
                                      <span className="snipcss0-16-113-114">
                                        Audience dashboard
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-All contacts"
                                  className="snipcss0-13-110-115"
                                >
                                  <a
                                    aria-label="All contacts"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-115-116"
                                    role="link"
                                    aria-describedby="mc:48"
                                    href="/lists/members"
                                  >
                                    <div className="snipcss0-15-116-117">
                                      <span className="snipcss0-16-117-118">
                                        All contacts
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Signup forms"
                                  className="snipcss0-13-110-119"
                                >
                                  <Link
                                    to="/signupforms"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-120-121">
                                      <span className="snipcss0-16-121-122">
                                        Signup forms
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Tags"
                                  className="snipcss0-13-110-123"
                                >
                                  <Link
                                    to="/tags"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-124-125">
                                      <span className="snipcss0-16-125-126">
                                        Tags
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Segments"
                                  className="snipcss0-13-110-127"
                                >
                                  <Link
                                    to="/segments"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-128-129">
                                      <span className="snipcss0-16-129-130">
                                        Segments
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Surveys"
                                  className="snipcss0-13-110-131"
                                >
                                  <Link
                                    to="/mailchimpsurvy"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-132-133">
                                      <span className="snipcss0-16-133-134">
                                        Surveys
                                      </span>
                                    </div>
                                  </Link>
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
                                    href="#"
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
                                    href="#"
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
                                  data-analytics-tag="SecondaryNav-Marketing dashboard"
                                  className="snipcss0-13-152-153"
                                >
                                  <Link
                                    to="/marketingdashboard"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-154-155">
                                      <span className="snipcss0-16-155-156">
                                        Marketing dashboard
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Audience"
                                  className="snipcss0-13-152-157"
                                >
                                  <Link
                                    to="/audienceanalytics"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-158-159">
                                      <span className="snipcss0-16-159-160">
                                        Audience
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-152-161"
                                >
                                  <a
                                    aria-label="Reports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-161-162"
                                    role="link"
                                    aria-describedby="mc:57"
                                    href="/reports"
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
                                  data-analytics-tag="SecondaryNav-Website"
                                  className="snipcss0-13-178-179"
                                >
                                  <Link
                                    to="/websiteoverview"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-180-181">
                                      <span className="snipcss0-16-181-182">
                                        Website
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Settings"
                                  className="snipcss0-13-178-183"
                                >
                                  <Link
                                    to="/websitesetting"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-184-185">
                                      <span className="snipcss0-16-185-186">
                                        Settings
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Reports"
                                  className="snipcss0-13-178-187"
                                >
                                  <Link
                                    to="/websitereports"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-188-189">
                                      <span className="snipcss0-16-189-190">
                                        Reports
                                      </span>
                                    </div>
                                  </Link>
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
                                  data-analytics-tag="SecondaryNav-Creative Assistant"
                                  className="snipcss0-13-200-201"
                                >
                                  <Link
                                    to="/creativeassistant"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-202-203">
                                      <span className="snipcss0-16-203-204">
                                        Creative Assistant
                                      </span>
                                    </div>
                                  </Link>
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
                                  <Link
                                    to="/"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-210-211">
                                      <span className="snipcss0-16-211-212">
                                        Email templates
                                      </span>
                                    </div>
                                  </Link>
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
                                  data-analytics-tag="SecondaryNav-Discover"
                                  className="snipcss0-13-222-223"
                                >
                                  <Link
                                    to="/integrationdiscover"
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
                                  </Link>
                                </li>
                                <li
                                  data-analytics-tag="SecondaryNav-Manage"
                                  className="snipcss0-13-222-230"
                                >
                                  <Link
                                    to="/integrationmanage"
                                    className="root-2MzAS fullHeight-2grW3 snipcss0-14-71-72"
                                  >
                                    <div className="snipcss0-15-231-232">
                                      <span className="snipcss0-16-232-233">
                                        Manage
                                      </span>
                                    </div>
                                  </Link>
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
            <main id="content" className="body-1uBId snipcss0-3-6-246">
              <div className="frame-1q4n0 snipcss0-4-246-247">
                <div className="loading-_VrqD snipcss0-5-247-248"></div>
                <br />

                <div className="lastUnit">
                  <h1>Reports</h1>{" "}
                  <div>
                    <button
                      style={{ backgroundColor: "#716b67", color: "white" }}
                    >
                      Create Comparative Reports
                    </button>
                  </div>{" "}
                </div>
                <div
                  data-dojo-attach-point="switcherContainer"
                  class="margin-bottom--lv4"
                >
                  <p data-dojo-attach-point="selectLabel" class="ddkjsldfj"></p>
                </div>

                <div class="">
                  <div class="maintestwarp">
                    <div class="wrapper-2GUvc">
                      <div
                        role="tablist"
                        class="boxShadowNone-QWU1Z tabList-2ZCac"
                      >
                        <span
                          style={{ color: "#1b8a95" }}
                          class="root-TPnFr "
                          role="tab"
                          id="mc:89:tabs:0"
                          tabindex="0"
                          aria-selected="true"
                          aria-controls="mc:89:tabs:0:panel"
                        >
                          Campaigns
                        </span>
                        <span
                          style={{ paddingLeft: "50px" }}
                          class="root-TPnFr"
                          role="tab"
                          id="mc:89:tabs:1"
                          tabindex="-1"
                          aria-selected="false"
                          aria-controls="mc:89:tabs:1:panel"
                        >
                          Comparative
                        </span>
                      </div>
                      <span
                        class="tabIndicator-2Ph-g className-CXx7Q"
                        id="className-CXx7Q"
                      ></span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "50px" }}
                  className="mainpareonecontainer"
                >
                  <div style={{ display: "flex" }}>
                    <div className="mymy" style={{ minWidth: "200px" }}>
                      <div
                        lang="en"
                        id="campaigns-nav"
                        widgetid="campaigns-nav"
                      >
                        <div
                          style={{ marginBottom: "10px", fontWeight: "500" }}
                          class="fwb padding--lv1 margin-bottom--lv1 c-campaignManager_sidebar_title"
                        >
                          View by Status
                        </div>
                        <ul
                          class="mybuttonuls"
                          data-dojo-attach-point="node_bucketList"
                        >
                          <li style={{ backgroundColor: "#efeeea" }}>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1 c-campaignManager_sidebar_link--selected"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/all.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              All
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/ongoing.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Ongoing
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/draft.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Draft
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/completed.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Completed
                            </a>
                          </li>
                        </ul>
                        <div class="border-bottom-light c-campaignManager_sidebar_divider margin--lv2 margin-left--lv0 margin-right--lv0"></div>
                        <div
                          style={{ marginBottom: "10px", fontWeight: "500" }}
                          class="fwb padding--lv1 margin-bottom--lv1 c-campaignManager_sidebar_title"
                        >
                          View by Type
                        </div>
                        <ul
                          class="mybuttonuls"
                          data-dojo-attach-point="node_typeBucketList"
                        >
                          <li style={{ backgroundColor: "#efeeea" }}>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1 c-campaignManager_sidebar_link--selected"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/all.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              All
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/email.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Emails
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/sms-filter.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              SMS
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/automation.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Automations
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/landing-page.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Landing pages
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/ad.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Ads
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/postcard.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Postcards
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/social-post.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Social Posts
                            </a>
                          </li>
                          <li>
                            <a
                              data-mc-el="bucket-link"
                              href="#0"
                              class="c-campaignManager_sidebar_link padding--lv1 border-radius--lv1"
                            >
                              <img
                                class="c-autocomplete_suggestion_iconImage padding-right--lv2"
                                src="https://cdn-images.mailchimp.com/product/campaigns/nav-icons/survey.svg"
                              />
                              <span class="freddicon display--none !deprecated-textColorGray4 padding-right--lv2"></span>{" "}
                              Surveys
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="comapingdetaissl">
                      {loading
                        ? "Loading..."
                        : reports?.campaigns?.map((item) => (
                            <>
                              <div className="comapingdetail">
                                <div style={{ display: "flex" }}>
                                  <div class="root-1olwd checkbox-2UQgU snipcss0-2-2-3">
                                    <input
                                      style={{
                                        marginRight: "10px",
                                        marginTop: "5px",
                                      }}
                                      class="input-2v40B noMargin-2qkhq snipcss0-3-3-4"
                                      id="mc:46"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                      tabindex="0"
                                    />
                                    <div class="text-vFMr3 snipcss0-3-3-5">
                                      <label
                                        id="mc:47"
                                        for="mc:46"
                                        class="wink-visually-hidden snipcss0-4-5-6"
                                      >
                                        Select all 25 on page
                                      </label>
                                    </div>
                                  </div>
                                  <svg
                                    style={{ marginRight: "10px" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    aria-hidden="true"
                                    class="wink-icon detailIcon-1_cym snipcss-kXU9S"
                                    data-testid="regular-icon"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="emailsection">
                                  {/* icon is here  */}
                                  <p
                                    className="mail"
                                    style={{ fontWeight: 500 }}
                                  >
                                    {item?.campaignName}
                                  </p>
                                  <p
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                    className="regularemail"
                                  >
                                    {" "}
                                    <span style={{ marginLeft: "6px" }}>
                                      {item?.campaignType}
                                    </span>
                                  </p>
                                  <p
                                    style={{ fontSize: "14px" }}
                                    className="largeid"
                                  >
                                    Sent{" "}
                                    <span style={{ fontWeight: 500 }}>
                                      {item?.sendTime} am
                                    </span>{" "}
                                    <br />
                                    by {item?.editedByUsername}
                                  </p>
                                  <span
                                    style={{ fontSize: "12px", color: "gray" }}
                                  >
                                    Edited {item?.lastEditDate} am by{" "}
                                    {item?.editedByUsername}
                                  </span>
                                </div>
                                <div className="draftnewuilder">
                                  <p
                                    style={{
                                      backgroundColor: "#D8EACC",
                                      fontWeight: "400",
                                      fontSize: "13px",
                                      color: "#004e56",
                                      padding: "0px 8px",
                                    }}
                                  >
                                    Sent
                                  </p>
                                  <p>New Builder</p>
                                  <br />
                                </div>

                                <div
                                  style={{ marginLeft: "0px" }}
                                  className="clickonpend"
                                >
                                  <div>
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                      className="oneone"
                                    >
                                      {item?.openedPercentage}%
                                    </div>
                                    <div
                                      className="two"
                                      style={{ fontSize: "14px" }}
                                    >
                                      {item?.opened}
                                    </div>
                                    <div style={{ fontSize: "14px" }}>
                                      Opened
                                    </div>
                                  </div>
                                  <div>
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                      }}
                                      className="oneone"
                                    >
                                      {item?.clickedPercentage}%
                                    </div>
                                    <div
                                      className="two"
                                      style={{ fontSize: "14px" }}
                                    >
                                      {item?.clicks}
                                    </div>
                                    <div style={{ fontSize: "14px" }}>
                                      Clicked
                                    </div>
                                  </div>
                                </div>
                                <div style={{ marginLeft: "-50px" }}>
                                  <button
                                    onClick={() =>
                                      navigate(`/allcompaings/${item._id}`)
                                    }
                                  >
                                    View Report <span></span>
                                  </button>
                                </div>
                                {/* Edit */}
                              </div>
                              <hr />
                            </>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

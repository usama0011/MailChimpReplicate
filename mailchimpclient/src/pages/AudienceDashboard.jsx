import React from "react";
import { Link } from "react-router-dom";
import "../styles/AudienceDashboard.css";

const AudienceDashboard = () => {
  return (
    <div
      class="animation-theme snipcss0-0-0-1 snipcss-zRclk"
      cz-shortcut-listen="true"
    >
      <div
        id="adaCampaignObserverNode"
        aria-hidden="true"
        class="snipcss0-1-1-2"
      ></div>
      <noscript aria-hidden="true" class="snipcss0-1-1-3">
        {" "}
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MCZTKL"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        >
          {" "}
        </iframe>{" "}
      </noscript>
      <div class="dojoShim snipcss0-1-1-4" aria-hidden="true">
        {" "}
      </div>
      <div id="root" aria-hidden="true" class="snipcss0-1-1-5">
        <div class="redesignNavigationExpandedRRClosed-1Pz4X snipcss0-2-5-6">
          <div class="metaTop-XCUCj snipcss0-3-6-7">
            <a href="#content" class="skipToContent-3Sx-7 snipcss0-4-7-8">
              Skip to main content
            </a>
            <div
              id="🙈"
              data-auto-enablement-allowed="true"
              class="snipcss0-4-7-9"
            ></div>
          </div>
          <div class="headerTop-2Y-yB snipcss0-3-6-18">
            <div class="wink snipcss0-4-18-19">
              <nav class="app-header-1maWO universal-search-29i1W snipcss0-5-19-20">
                <div class="content-R4qGr universal-search-29i1W handle-live-help-1vaaS snipcss0-6-20-21">
                  <div class="align-left-S-hBc snipcss0-7-21-22">
                    <button
                      type="button"
                      role="link"
                      class="root-1mTPe snipcss0-8-22-23"
                      aria-label="Home"
                    >
                      <div class="freddieContainer-3BkOH snipcss0-9-23-24">
                        <img
                          class="freddie-2UE1a snipcss0-10-24-25"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAySDkuNTAyYzIuNzM0IDYuMyA4LjgwOCAxMC4wMTcgMTYuMDE2IDEwLjM3MmwuMjg1LjAxMnYuMDAyaC4wMDd2LS4wMDJjNy43MTQuMjczIDE0LjQ1NC0zLjQ1NCAxNy4yMTktMTAuMDc4LjM0OC0uODk2IDIuMjktNi4yNzUtLjY5MS03LjAzNnptLTMyLjIzMiA0Ljk2Yy0uMjM5LjA0LS40ODIuMDU2LS43MjguMDUtMi4zNzMtLjA2My00LjkzNy0yLjItNS4xOTItNC43MzQtLjI4MS0yLjggMS4xNS00Ljk1NiAzLjY4NC01LjQ2N2E0LjMxMyA0LjMxMyAwIDAxMS4wNjQtLjA3NmMxLjQyLjA3OCAzLjUxMSAxLjE2OCAzLjk5IDQuMjYuNDIzIDIuNzQtLjI1IDUuNTI4LTIuODE4IDUuOTY2em0tMi42Ni0xMS44MjVsLjAxLS4wMDJjMS45NTMtNS4zNDcgNS4zNi0xMC4zNTYgOS43OTgtMTMuNzczLjA4NC0uMDcuMTctLjE0LjI2LS4yMSAyLjE4Ny0xLjc4NSA0LjQyOC0zLjMwNSA2LjU4NS00LjUwOCAwIDAtMS45MTMtMi4yMTgtMi40OS0yLjM4MUMxOC4wNTYuODUgMTAuMzggNi4xNDMgNS40NzkgMTMuMTM2Yy0xLjk4MiAyLjgzLTQuODIgNy44NC0zLjQ2MyAxMC40MTguMTY3LjMyIDEuMTE0IDEuMTQgMS42MjIgMS41NjQuODUtMS4yMzUgMi4xNS0yLjEgMy44MDgtMi40MzR6bTkuMDQtOS41NTNjMS43NDYtMi4wMjMgMy45LTMuNzgzIDUuODI5LTQuNzcuMDY2LS4wMzQuMTM3LjAzOC4xLjEwMy0uMTUzLjI4LS40NS44NzgtLjU0MSAxLjMyOC0uMDEzLjA2Ni4wNi4xMTQuMTE2LjA3NiAxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3LTEuODM2LjUyNy00LjMyLjkzMi03LjA5MS43NjctLjMwMi0uMDI0LS41ODQtLjA2MS0uODQ1LS4wOTUtMS4wNjgtLjE0LTEuNzg1LS4yMzQtMi4wOTMuNzY1YTUuMTM3IDUuMTM3IDAgMDAuMjkyLjExYy4xNDMuMDQ4LjI5LjA5My40MzguMTM1YTE1LjAzMSAxNS4wMzEgMCAwMDEuODIuNDAxYy4zMDguMDQ5LjYxNy4wOTMuOTI4LjEyNWExNC41MDMgMTQuNTAzIDAgMDAxLjQwMi4wOCAxMy4wOTIgMTMuMDkyIDAgMDAxLjExNS0uMDJjLjA5OC0uMDA0LjE5Ni0uMDA4LjI5NC0uMDE0LjMxMy0uMDIyLjYyNi0uMDUuOTQyLS4wODFhLjEzMS4xMzEgMCAwMS4wNjQuMjVsLS4wMDkuMDA0Yy0uMzAyLjEyOC0uNjE1LjIzLS45MzMuMzFhOC4zODQgOC4zODQgMCAwMS0xLjQ1Ny4yMjYgMTQuNDEgMTQuNDEgMCAwMS0xLjQ3Ny4wMTkgMTMuODIyIDEzLjgyMiAwIDAxLS45ODMtLjA3NiAxNS43NDUgMTUuNzQ1IDAgMDEtMS40Ni0uMjQ3IDEwLjA3NiAxMC4wNzYgMCAwMS0xLjA3NC0uMzA3Yy4xMjUgMS4wNjQgMS4xNjIgMS41NDEgMS42NTggMS43MzRhNy40NzggNy40NzggMCAwMDEuMzA2LjM1NGM1LjYyLjk2NyAxMC44NzUtMi4yNDYgMTIuMDU4LTMuMDU2LjA4OC0uMDYuMTQ3LS4wMDEuMDc2LjEwNmExLjk2IDEuOTYgMCAwMS0uMTE2LjE2NWMtMS40NDggMS44NjgtNS4zNCA0LjAzLTEwLjQwNCA0LjAzLTIuMjEgMC00LjQxNy0uNzc5LTUuMjI3LTEuOTc0LTEuMjU4LTEuODU1LS4wNjItNC41NjMgMi4wMzMtNC4yODEuMDAyIDAgLjcxNy4wOC45MTguMTA0IDQuNDA4LjQ5MyA5LjczLS45NTkgMTIuMDk0LTMuMTQybC4xMTYtLjA4M2MuODE5LS43NzIgMS4yMzYtMS41NyAxLjEwMi0yLjI3MWExLjcgMS43IDAgMDAtLjQ5My0uOTY3Yy0uNTEzLS41MDMtMS4zMjgtLjg5NC0yLjcwMi0xLjI4bC0uMTE0LS4wMzItLjE0NS0uMDRjLS4zMi0uMDktLjU3LS4xNTktLjgzNS0uMjQ2LS41OS0uMTk0LS44ODItLjM1LS45NDgtMS40Ni0uMDMtLjQ4Ni0uMTE0LTIuMTc2LS4xNDQtMi44NzUtLjA1NC0xLjIyNC0uMjAxLTIuODk4LTEuMjQtMy41ODhhMS43NCAxLjc0IDAgMDAtLjg4Ny0uMjg0Yy0uMjU1LS4wMTItLjQwNS4wMjMtLjQ4NS4wNDJsLS4wNDIuMDFjLS41Ni4wOTQtLjkwNC4zODItMS4zMS43MmwtLjA3LjA2Yy0xLjI5NSAxLjA3OS0yLjM4OSAxLjI1NS0zLjYwNCAxLjIwMy0uMzgtLjAxNi0uNzctLjA1NC0xLjE4My0uMDk1LS4zNzgtLjAzNy0uNzc0LS4wNzYtMS4xOTctLjEwMWwtLjEtLjAwNmMtLjEzOS0uMDA4LS4yNzctLjAxNy0uNDE2LS4wMjQtMi4wMzYtLjEwNC00LjIyIDEuNjU1LTQuNTg0IDQuMTUzLS40MDUgMi43ODcgMS4xMzMgNC40OTQgMi4xMzMgNS42MDUuMjQ4LjI3NS40NjIuNTEzLjYwNy43MjJhLjc1Ni43NTYgMCAwMS0uMDYuOTdsLjAwMS4wMDFjLTIuMDc4IDIuMTM3LTIuNzQyIDUuNTMyLTEuOTYgOC4zNi4wOTkuMzU0LjIyMi42OTIuMzcgMS4wMTQgMS44MzYgNC4yOTQgNy41MzUgNi4yOTMgMTMuMTAzIDQuNDc0YTEzLjY3NyAxMy42NzcgMCAwMDIuMTE1LS44OTMgMTEuMTEyIDExLjExMiAwIDAwMy4yNC0yLjQyem0tNi41Ni0xNi4wMzdjLjM0LS4wNC42NjctLjA0Mi45NjcgMCAuMTczLS4zOTguMjAzLTEuMDg0LjA0Ny0xLjgzMS0uMjMyLTEuMTExLS41NDYtMS43ODMtMS4xOTUtMS42NzgtLjY1LjEwNC0uNjczLjkwOS0uNDQxIDIuMDIuMTMuNjI0LjM2MyAxLjE1OS42MjIgMS40OXptLTUuNTcyLjg4Yy0xLjAwMS0uNDMyLTEuNzc3LS41NjUtMy4yNC0uMDk0bC0uMTE1LjAzOGMtLjI5MS4wOTUtLjQ5NC4xNjEtLjYyMy4xNTVhLjI2LjI2IDAgMDEtLjA0LS4wMDVjLS4wNjktLjAxNC0uMTE2LS4wNTctLjEzLS4xMTktLjA0Mi0uMTkxLjI1My0uNTA3LjU2NC0uNzM0Ljk0LS42NzcgMi4xNi0uODIzIDMuMTg0LS4zODMuNS4yMTMuOTcxLjU5MyAxLjIuOTY3LjExMS4xODEuMTMzLjMyMS4wNjEuMzk1LS4xMTIuMTE4LS4zMzUuMDE3LS43NC0uMTY2aC0uMDAxbC0uMTItLjA1NXptLS45MzUuNTMyYy0uMDk0LjAxLS4xODEuMDMtLjI2Ni4wNWwtLjAwNi4wMDFhNC45NTIgNC45NTIgMCAwMS0uMDc1LjAxNyAyLjAxIDIuMDEgMCAwMC0uODA1LjQxM2MtLjE4My4xNi0uMjk2LjMzNi0uMjk1LjQ2IDAgLjA2LjAyNi4wOTMuMDQ2LjExLjAyOC4wMjUuMDYuMDM2LjEuMDM4LjA4My4wMDQuMTk2LS4wMzYuMzUxLS4wOWwuMDkxLS4wMzJhMy43NzcgMy43NzcgMCAwMTEuOTEtLjIwN2wuMDM4LjAwNWMuMjc5LjAzMy40NDcuMDUzLjUxNC0uMDUyLjAyLS4wMy4wNDQtLjA5NS0uMDE3LS4xOTMtLjE0Mi0uMjMtLjc1My0uNjE4LTEuNTg2LS41MnptNS42MzUgMS43OGMtLjE0Ny4zLS42LjM3OS0xLjAxLjE3Ny0uNDEtLjIwMi0uNjI0LS42MDgtLjQ3Ny0uOTA3LjE0Ny0uMy42LS4zOCAxLjAxLS4xNzcuNDEuMjAxLjYyNC42MDguNDc3LjkwN3ptMS42My0yLjEzYy0uMzMzLS4wMDYtLjYxLjM2LS42MTguODE4LS4wMDguNDU4LjI1Ny44MzMuNTkuODM5LjMzNC4wMDYuNjEtLjM2LjYxOC0uODE4LjAwOC0uNDU4LS4yNTYtLjgzMy0uNTktLjgzOXptLTIyLjc2MSA4LjIwOGMuMTMyLS4wMy4yNjgtLjA2Mi4zNTEuMDQyLjAzLjAzNC4wNzguMTEzLjAyMi4yNDItLjA5NS4yMi0uNDY4LjUyLTEuMDAyLjUtLjU1LS4wNDMtMS4xNi0uNDQzLTEuMjQ0LTEuNDM3LS4wNC0uNDkuMTQ1LTEuMDg5LjI2LTEuNDAxLjIyLS42MDUuMDItMS4yMzgtLjQ5Ni0xLjU3N2ExLjM0IDEuMzQgMCAwMC0xLjg1OC4zODdjLS4xNTguMjQ3LS4yNTUuNTU1LS4zMDYuNzItLjAxNC4wNDUtLjAyNS4wOC0uMDM0LjEwMi0uMTE2LjMxMy0uMzAyLjQwNS0uNDI3LjM4OC0uMDYtLjAwOC0uMTQyLS4wNDgtLjE5NC0uMTkxLS4xNDMtLjM5Mi0uMDI3LTEuNS43MS0yLjMxNGEyLjIzMyAyLjIzMyAwIDAxMS45MTUtLjY5Yy43NDIuMDk0IDEuMzU5LjU0MyAxLjczNyAxLjI2My41MDMuOTU4LjA1NSAxLjk2My0uMjEyIDIuNTYzbC0uMDA1LjAxYTguNSA4LjUgMCAwMC0uMDc0LjE2OWMtLjE2Ny4zOTgtLjE3Ni43NDYtLjAyNC45OC4xMTcuMTc5LjMyNC4yODQuNTcuMjg4LjExNC4wMDIuMjE4LS4wMjIuMzEtLjA0M2guMDAxeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                  <div class="align-center-1O1Ww snipcss0-7-21-26">
                    <form class="root-1WdPk handle-live-help-_OgMK snipcss0-8-26-27">
                      <button
                        class="search-button-1spEe snipcss0-9-27-28"
                        type="button"
                      >
                        <span
                          aria-hidden="true"
                          class="search-icon-YhRw5 snipcss0-10-28-29"
                        ></span>
                        <span class="button-text-2V1Gs snipcss0-10-28-30">
                          Search Mailchimp
                        </span>
                      </button>
                    </form>
                  </div>
                  <div class="align-right-3B6pa cluster-3D5Qr nowrap-34OZ- snipcss0-7-21-31">
                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing6-zD2QG snipcss0-8-31-32">
                      <button
                        class="root-sBgFt container-3-bH7 primary-33czz liveExpertHelpBtn-3ju2V appHeaderliveExpertHelpBtn-1RFSO snipcss0-9-32-33"
                        data-id="ipd-appHeader-liveExpertHelpBtn"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p snipcss0-10-33-34">
                          <div class="cluster-3D5Qr nowrap-34OZ- snipcss0-11-34-35">
                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe snipcss0-12-35-36">
                              <div class="online-xMPbD snipcss0-13-36-37"></div>
                              <span class="snipcss0-13-36-38">
                                Live expert help
                              </span>
                            </div>
                          </div>
                        </span>
                      </button>
                      <div
                        class="avatarRoot-3kLoc snipcss0-9-32-39"
                        data-testid="app-header-avatar-menu"
                        data-id="ipd-appHeader-accountMenuIcon"
                        data-pendo-target="account-menu"
                      >
                        <div class="identityGroup-2kpTi snipcss0-10-39-40">
                          <div class="identityRoot-3EJCo snipcss0-11-40-41">
                            <div class="container-3dbgU snipcss0-12-41-42">
                              <button
                                id="account-settings-btn"
                                data-analytics-tag="AppHeader-Identity"
                                type="button"
                                class="btn-2N1xe snipcss0-13-42-43"
                                aria-controls="mc:2"
                                aria-expanded="false"
                                aria-label="account settings button"
                              >
                                <div class="avatar-2-CVF snipcss0-14-43-44">
                                  <img
                                    alt="Signed in as Ali Next Web Lines, Account Menu"
                                    class="avatarImage-1YlIs snipcss0-15-44-45"
                                    src="https://img.icons8.com/?size=50&id=63063&format=png"
                                  />
                                </div>
                              </button>
                              <span class="root-3ALOt default-3A6wB notificationBadge-2RFjU snipcss0-13-42-46">
                                <span class="wink-visually-hidden snipcss0-14-46-47">
                                  (
                                </span>
                                2
                                <span class="wink-visually-hidden snipcss0-14-46-48">
                                  )
                                </span>
                              </span>
                              <span class="wink-visually-hidden snipcss0-13-42-49">
                                {" "}
                                notifications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="light snipcss0-10-39-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="wink snipcss0-3-6-51">
            <div class="theme-1OLRx snipcss0-4-51-52">
              <div class="light snipcss0-5-52-53">
                <div
                  data-testid="LeftNavigation"
                  class="root-kjeIf shellNavigationLeftNav-3iPdf snipcss0-6-53-54"
                >
                  <nav class="navItems-1Kfmk snipcss0-7-54-55">
                    <ul className="stack-1qp4V spacing4-1xt6w navItems-1Kfmk minHeightNav-2mej_ snipcss0-8-55-56">
                      <li className="createItem-1mIzO snipcss0-9-56-57">
                        <Link
                          style={{ outline: "1px solid #1b8a95" }}
                          className="root-sBgFt container-3-bH7 secondary-1_P2K createButton-1NK_y snipcss0-10-57-58"
                          to="/newcomaping"
                        >
                          <span className="temporarySpan-2iF2p snipcss0-11-58-59">
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
                    <div class="account-3ri0E appHeaderNotCollapsed-311nL scrollBorderBottom-2LDg0 snipcss0-8-55-234">
                      <div class="collapseIcon--FJm2 snipcss0-9-234-235">
                        <button
                          type="button"
                          data-testid="collapse-icon-button"
                          class="collapse-2FuQj snipcss0-10-235-236"
                          aria-label="Collapse navigation"
                        >
                          <span class="icon-1HgY2 snipcss0-11-236-237"></span>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="wink snipcss0-3-6-238">
            <div class="root-35Mg8 snipcss0-4-238-239">
              <ul class="stack-1qp4V spacing1-2v2JO root-3AJ2b supportButtons-1wLtK snipcss0-5-239-240">
                <li class="snipcss0-6-240-241">
                  <div class="root-2SOqc snipcss0-7-241-242">
                    <button
                      class="root-1khsy helpMenuButton-10MYH snipcss0-8-242-243"
                      id="mc:38"
                      aria-expanded="false"
                      type="button"
                      aria-haspopup="true"
                    >
                      <span class="wink-visually-hidden snipcss0-9-243-244">
                        Help
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        focusable="false"
                        aria-hidden="true"
                        class="wink-icon snipcss0-9-243-245"
                      >
                        <path d="M10.92 15.2h2.24v-.64c.06-1.12 1.02-1.94 1.96-2.84.9-.88 1.76-1.8 1.76-3.22 0-1.94-1.34-3.5-4.2-3.5C10 5 8.14 6.64 8 9.26h2.32c.14-1.38 1-2.26 2.24-2.26 1.22 0 1.78.66 1.78 1.68 0 .879-.66 1.52-1.4 2.26-.96.94-2.02 1.92-2.02 3.5v.76zm1.1 4.44c.88 0 1.6-.68 1.6-1.54 0-.88-.72-1.56-1.6-1.56-.9 0-1.64.68-1.64 1.56 0 .86.74 1.54 1.64 1.54z"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <main id="content" class="body-1uBId snipcss0-3-6-246">
            <div class="frame-1q4n0 snipcss0-4-246-247">
              <div class="loading-_VrqD snipcss0-5-247-248"></div>
              <main id="content" class="body-1uBId snipcss-Yl8V1">
                <div class="page-3fTnL audienceOverview-3I5WX">
                  <section class="section-xAWB7">
                    <header class="header-2BdKg">
                      <div class="row-2OMu_">
                        <button
                          type="button"
                          class="heading-3gudz"
                          aria-expanded="false"
                        >
                          <h1>Audience</h1>
                        </button>
                      </div>
                    </header>
                    <div class="container-celSC">
                      <div class="audienceContainer-3axU2">
                        <h2 class="h3 singleAudienceHeader-UEOMc">
                          Next Web Lines
                        </h2>
                        <h2 class="h4 audienceCounts-2QS1f">
                          Your audience has{" "}
                          <a href="/lists/members/clear-and-view?id=4955578">
                            500
                          </a>{" "}
                          contacts.{" "}
                          <div class="wink style-yvUSQ" id="style-yvUSQ">
                            <button
                              class="root-sBgFt root-22EAH tertiaryButton-10tMu"
                              type="button"
                            >
                              500
                            </button>
                          </div>{" "}
                          of these are subscribed.
                        </h2>
                      </div>
                      <div class="buttonContainer-2Hnyj">
                        <div data-analytics-tag="view-contacts-button">
                          <a
                            href="/lists/members/clear-and-view?id=4955578"
                            class="container-2Ay6k secondary-2qA7k"
                            rel="noopener"
                          >
                            View Contacts
                          </a>
                        </div>
                        <div data-analytics-tag="manage-audience-dropdown">
                          <div class="root-Hh20X">
                            <button
                              type="button"
                              class="container-3LlCI dropdownTrigger-28YCm clearMargin-3EsXp"
                              aria-expanded="false"
                            >
                              Manage Audience
                              <span
                                aria-hidden="true"
                                class="freddicon-2LtSi menu-down-eYtKX"
                              ></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="section-137bm">
                    <div class="columns-1BJb1 singleColumn-3N8qb">
                      <div class="column-21-zM">
                        <div class="inboxOverviewContainer-31ZW4">
                          <section class="section-15lkc">
                            <header class="header-6RFqy">
                              <div class="row-2bcC_">
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/inbox.svg"
                                  class="icon-iEtPd"
                                />
                                <h3 class="title-2V2Vk">
                                  Messages Inbox&nbsp;
                                </h3>
                              </div>
                              <div class="bylineRow-1Huhq">
                                <p class="byline-1jw7n">
                                  You've received 0 messages in the last 30
                                  days.
                                </p>
                                <p class="splitByline-1T2oD">
                                  <a href="/audience/inbox?id=4955578">
                                    View Inbox
                                  </a>
                                </p>
                              </div>
                            </header>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div id="style-QWvlc" class="style-QWvlc">
                    <div id="mc:63-ipd/page-message">
                      <div
                        class="adk-wrapper"
                        data-theme="mailchimp"
                        data-colorscheme="light"
                      ></div>
                    </div>
                  </div>
                  <section class="section-137bm">
                    <div class="columns-1BJb1">
                      <div class="column-21-zM">
                        <section class="section-xAWB7">
                          <header class="header-2BdKg border-1NF58 paddingAllAround-1KuMf">
                            <div class="row-2OMu_">
                              <img
                                alt=""
                                src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/growth.svg"
                                class="icon-1dR2X"
                              />
                              <button
                                type="button"
                                class="heading-3gudz"
                                aria-expanded="false"
                              >
                                <h3>Recent growth</h3>
                              </button>
                            </div>
                            <p class="byline-FTLJT">
                              New contacts added to this audience in the last 30
                              days.
                            </p>
                          </header>
                          <section class="outerContainer-2q3dI">
                            <div class="emptyState-3H_ct">
                              No contacts were added to this audience in the
                              last 30 days.
                            </div>
                            <div class="container-VHfjh">
                              <div>
                                <h2 class="countHeader-oIFUQ">0</h2>
                                <p class="inactiveCountHeader-2Sfab">
                                  New Contacts
                                </p>
                                <p class="dateLabel-8C5Mp">
                                  From March 28, 2024 to April 27, 2024
                                </p>
                              </div>
                              <div class="statisticsListContainer-2apDH">
                                <div class="statisticContainer-HQvNi">
                                  <h3 class="h4 countHeader-oIFUQ">0</h3>
                                  <span class="contactBucketInactive-_nyWT">
                                    Subscribed
                                  </span>
                                </div>
                                <div class="statisticContainer-HQvNi">
                                  <h3 class="h4 countHeader-oIFUQ">0</h3>
                                  <span class="contactBucketInactive-_nyWT">
                                    Non-Subscribed
                                  </span>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div class="container-2GnNH">
                            <img
                              src="https://cdn-images.mailchimp.com/product/audience-overview/add-source-icon.svg"
                              alt=""
                              role="presentation"
                              class="icon-1sM2z"
                            />
                            <span>
                              <a href="/audience/forms/dashboard?id=4955578">
                                Add a pop-up form
                              </a>{" "}
                              to your site and collect contacts up to 50%
                              faster.
                            </span>
                          </div>
                          <div class="container-2GnNH">
                            <img
                              src="https://cdn-images.mailchimp.com/product/audience-overview/add-source-icon.svg"
                              alt=""
                              role="presentation"
                              class="icon-1sM2z"
                            />
                            <span>
                              <a href="/#/create-campaign/explore/page">
                                Create a landing page
                              </a>{" "}
                              to collect new contacts or promote your product.
                            </span>
                          </div>
                          <div class="container-2GnNH">
                            <img
                              src="https://cdn-images.mailchimp.com/product/audience-overview/add-source-icon.svg"
                              alt=""
                              role="presentation"
                              class="icon-1sM2z"
                            />
                            <span>
                              <a href="/account/connected-sites/app-selection/">
                                Connect your site
                              </a>{" "}
                              to sync your data and send more targeted campaigns
                              to your customers.
                            </span>
                          </div>
                        </section>
                      </div>
                      <div class="column-21-zM">
                        <section class="section-xAWB7">
                          <header class="header-2BdKg border-1NF58 paddingAllAround-1KuMf">
                            <div class="row-2OMu_">
                              <img
                                alt=""
                                src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/tags.svg"
                                class="icon-1dR2X"
                              />
                              <button
                                type="button"
                                class="heading-3gudz"
                                aria-expanded="false"
                              >
                                <h3>Tags</h3>
                              </button>
                            </div>
                            <p class="byline-FTLJT">
                              Your contacts, organized by your tags.
                            </p>
                          </header>
                          <div class="outerContainer-Sj-j8">
                            <div class="clickArea-2gAoC container-2dIwR">
                              <div class="container-3eYOU activeContainer-29_2d">
                                <h4 class="number-2Cy7X">499</h4>
                                <div class="content-3KolX">
                                  <div class="content-1DJyT">
                                    <span class="title-28hRA">Auto</span>
                                  </div>
                                </div>
                                <span class="text-2-HTt">
                                  Target with Campaign
                                </span>
                                <button
                                  aria-label="Target with Campaign"
                                  class="button-L745d"
                                  type="button"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="icon-1-8zd"
                                  >
                                    <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="outerContainer-Sj-j8">
                            <div class="clickArea-2gAoC container-2dIwR">
                              <div class="container-3eYOU activeContainer-29_2d">
                                <h4 class="number-2Cy7X">499</h4>
                                <div class="content-3KolX">
                                  <div class="content-1DJyT">
                                    <span class="title-28hRA">Insurance</span>
                                  </div>
                                </div>
                                <span class="text-2-HTt">
                                  Target with Campaign
                                </span>
                                <button
                                  aria-label="Target with Campaign"
                                  class="button-L745d"
                                  type="button"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="icon-1-8zd"
                                  >
                                    <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="container-2GnNH">
                            <img
                              src="https://cdn-images.mailchimp.com/product/audience-overview/add-source-icon.svg"
                              alt=""
                              role="presentation"
                              class="icon-1sM2z"
                            />
                            <span>
                              <a href="/lists/members/?id=4955578&amp;showTagsInfoBlock=true">
                                Add a tag
                              </a>{" "}
                              to organize your audience.
                            </span>
                          </div>
                          <div class="viewAll-14JBT">
                            <a
                              href="/audience/tags?id=4955578"
                              class="container-2Ay6k tertiary-3oIvQ viewAllButton-33nwQ"
                              rel="noopener"
                            >
                              View all tags
                              <span
                                class="viewAllButtonIcon-1e76h"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                  <section class="section-137bm">
                    <div class="columns-1BJb1 singleColumn-3N8qb">
                      <div class="column-21-zM">
                        <section class="section-xAWB7">
                          <header class="header-2BdKg border-1NF58 paddingAllAround-1KuMf">
                            <div class="row-2OMu_">
                              <img
                                alt=""
                                src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/predicted-demographics.svg"
                                class="icon-1dR2X"
                              />
                              <button
                                type="button"
                                class="heading-3gudz"
                                aria-expanded="false"
                              >
                                <h3>Predicted demographics</h3>
                              </button>
                              <span class="root-3ALOt success-3BGCN badge-3X3tL">
                                <span class="wink-visually-hidden">(</span>Paid
                                Feature
                                <span class="wink-visually-hidden">)</span>
                              </span>
                            </div>
                            <p class="byline-FTLJT">
                              Your contacts broken down by their predicted
                              gender and age.
                            </p>
                          </header>
                          <div>
                            <div class="splitColumn-14J8y">
                              <div>
                                <h4>Gender</h4>
                                <figure class="genderChartContainer-6pb1A">
                                  <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 42 42"
                                    class="genderChart-PN-PB"
                                    role="img"
                                    aria-labelledby="chart_idqmz"
                                  >
                                    <title id="chart_idqmz">Gender</title>
                                    <circle
                                      class="background-18K3m"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                    ></circle>
                                    <circle
                                      class="blankSection-2-8Wl"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                      fill="transparent"
                                      stroke-width="5"
                                    ></circle>
                                    <circle
                                      class="donutSection-3fN65 color_1-RZ_gu"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                      fill="transparent"
                                      stroke-width="5"
                                      stroke-dasharray="51 49"
                                      stroke-dashoffset="125"
                                    ></circle>
                                    <circle
                                      class="donutSection-3fN65 color_2-21hgT"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                      fill="transparent"
                                      stroke-width="5"
                                      stroke-dasharray="34 66"
                                      stroke-dashoffset="74"
                                    ></circle>
                                    <circle
                                      class="donutSection-3fN65 color_3-1RdKp"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                      fill="transparent"
                                      stroke-width="5"
                                      stroke-dasharray="0 100"
                                      stroke-dashoffset="40"
                                    ></circle>
                                    <circle
                                      class="donutSection-3fN65 color_4-1diPp"
                                      cx="21"
                                      cy="21"
                                      r="15.91549430918954"
                                      fill="transparent"
                                      stroke-width="5"
                                      stroke-dasharray="14 86"
                                      stroke-dashoffset="40"
                                    ></circle>
                                  </svg>
                                  <figcaption class="genderChartLegend-_3zq0">
                                    <ul>
                                      <li class="row-3JfVL">
                                        <div class="clickArea-2gAoC targetwithCampaign-1QhY9">
                                          <div class="container-3eYOU activeContainer-29_2d">
                                            <div class="legendItem-37hMD color_1-2RDMV"></div>
                                            <div class="content-3KolX">
                                              <div class="rowContent-RedmX">
                                                <strong class="percentage-31XWx">
                                                  51.2%
                                                </strong>
                                                <span class="label-3pIE0">
                                                  Female
                                                </span>
                                              </div>
                                            </div>
                                            <span class="text-2-HTt">
                                              Target with Campaign
                                            </span>
                                            <button
                                              aria-label="Target with Campaign"
                                              class="button-L745d"
                                              type="button"
                                            >
                                              <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                                class="icon-1-8zd"
                                              >
                                                <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="row-3JfVL">
                                        <div class="clickArea-2gAoC targetwithCampaign-1QhY9">
                                          <div class="container-3eYOU activeContainer-29_2d">
                                            <div class="legendItem-37hMD color_2-6xahh"></div>
                                            <div class="content-3KolX">
                                              <div class="rowContent-RedmX">
                                                <strong class="percentage-31XWx">
                                                  34.4%
                                                </strong>
                                                <span class="label-3pIE0">
                                                  Male
                                                </span>
                                              </div>
                                            </div>
                                            <span class="text-2-HTt">
                                              Target with Campaign
                                            </span>
                                            <button
                                              aria-label="Target with Campaign"
                                              class="button-L745d"
                                              type="button"
                                            >
                                              <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                                class="icon-1-8zd"
                                              >
                                                <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="row-3JfVL">
                                        <div class="clickArea-2gAoC targetwithCampaign-1QhY9">
                                          <div class="container-3eYOU">
                                            <div class="legendItem-37hMD color_3-3LCa-"></div>
                                            <div class="content-3KolX">
                                              <div class="rowContent-RedmX">
                                                <strong class="percentage-31XWx">
                                                  0.0%
                                                </strong>
                                                <span class="label-3pIE0">
                                                  Another Identity
                                                </span>
                                              </div>
                                            </div>
                                            <span class="text-2-HTt">
                                              Target with Campaign
                                            </span>
                                            <button
                                              aria-label="Target with Campaign"
                                              class="button-L745d"
                                              type="button"
                                            >
                                              <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                                class="icon-1-8zd"
                                              >
                                                <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="row-3JfVL">
                                        <div class="clickArea-2gAoC targetwithCampaign-1QhY9">
                                          <div class="container-3eYOU activeContainer-29_2d">
                                            <div class="legendItem-37hMD color_4-ifi9S"></div>
                                            <div class="content-3KolX">
                                              <div class="rowContent-RedmX">
                                                <strong class="percentage-31XWx">
                                                  14.4%
                                                </strong>
                                                <span class="label-3pIE0">
                                                  Unknown
                                                </span>
                                              </div>
                                            </div>
                                            <span class="text-2-HTt">
                                              Target with Campaign
                                            </span>
                                            <button
                                              aria-label="Target with Campaign"
                                              class="button-L745d"
                                              type="button"
                                            >
                                              <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                                class="icon-1-8zd"
                                              >
                                                <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </figcaption>
                                </figure>
                              </div>
                              <div>
                                <h4>Age Range</h4>
                                <div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">18-24</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-iiiGD"
                                              id="style-iiiGD"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-ZQ5TY"
                                              id="style-ZQ5TY"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            1.2%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">25-34</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-QKhy7"
                                              id="style-QKhy7"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-UfwcV"
                                              id="style-UfwcV"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            7.8%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">35-44</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-Zndi9"
                                              id="style-Zndi9"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-7DQop"
                                              id="style-7DQop"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            16.4%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">45-54</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-4h7Po"
                                              id="style-4h7Po"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-7WoPe"
                                              id="style-7WoPe"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            20.0%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">55-64</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-eyALK"
                                              id="style-eyALK"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-Jbwh9"
                                              id="style-Jbwh9"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            17.4%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row-13lP_">
                                    <div class="clickArea-2gAoC targetwithCampaign-PGk0d">
                                      <div class="container-3eYOU activeContainer-29_2d">
                                        <span class="label-1rkn2">65+</span>
                                        <div class="content-3KolX">
                                          <ul
                                            class="container-3aDrJ ageRangeChart-QceMY"
                                            aria-hidden="true"
                                          >
                                            <li
                                              class="section-2-yBP color_1-3idki style-XKQr4"
                                              id="style-XKQr4"
                                            ></li>
                                            <li
                                              class="section-2-yBP color_2-sim0Y style-nyQkf"
                                              id="style-nyQkf"
                                            ></li>
                                            <li class="section-2-yBP fillerSection-2hKPY"></li>
                                          </ul>
                                          <strong class="percentage-J6FTc">
                                            22.8%
                                          </strong>
                                        </div>
                                        <span class="text-2-HTt">
                                          Target with Campaign
                                        </span>
                                        <button
                                          aria-label="Target with Campaign"
                                          class="button-L745d"
                                          type="button"
                                        >
                                          <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                            class="icon-1-8zd"
                                          >
                                            <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                  <h2 class="header-2fOWg">Engagement</h2>
                  <section class="section-137bm">
                    <div class="columns-1BJb1">
                      <div class="column-21-zM">
                        <section class="section-xAWB7">
                          <header class="header-2BdKg border-1NF58 paddingAllAround-1KuMf">
                            <div class="row-2OMu_">
                              <img
                                alt=""
                                src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/email-marketing.svg"
                                class="icon-1dR2X"
                              />
                              <button
                                type="button"
                                class="heading-3gudz"
                                aria-expanded="false"
                              >
                                <h3>Email marketing engagement</h3>
                              </button>
                            </div>
                            <p class="byline-FTLJT">
                              Your subscribers, broken down by how often they
                              open and click your emails.
                            </p>
                          </header>
                          <div class="outerContainer-Sj-j8">
                            <div class="clickArea-2gAoC container-2dIwR">
                              <div class="container-3eYOU activeContainer-29_2d">
                                <h4 class="number-2Cy7X">0%</h4>
                                <div class="content-3KolX">
                                  <div class="content-1DJyT">
                                    <span class="title-28hRA">Often</span>
                                    <p class="byline-34Hiy">
                                      Your percentage of subscribers who are
                                      highly engaged and often open and click
                                      your emails.
                                    </p>
                                  </div>
                                </div>
                                <span class="text-2-HTt">
                                  Target with Campaign
                                </span>
                                <button
                                  aria-label="Target with Campaign"
                                  class="button-L745d"
                                  type="button"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="icon-1-8zd"
                                  >
                                    <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="outerContainer-Sj-j8">
                            <div class="clickArea-2gAoC container-2dIwR">
                              <div class="container-3eYOU activeContainer-29_2d">
                                <h4 class="number-2Cy7X">0%</h4>
                                <div class="content-3KolX">
                                  <div class="content-1DJyT">
                                    <span class="title-28hRA">Sometimes</span>
                                    <p class="byline-34Hiy">
                                      Your percentage of subscribers who are
                                      moderately engaged and sometimes open and
                                      click your emails.
                                    </p>
                                  </div>
                                </div>
                                <span class="text-2-HTt">
                                  Target with Campaign
                                </span>
                                <button
                                  aria-label="Target with Campaign"
                                  class="button-L745d"
                                  type="button"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="icon-1-8zd"
                                  >
                                    <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="outerContainer-Sj-j8">
                            <div class="clickArea-2gAoC container-2dIwR">
                              <div class="container-3eYOU activeContainer-29_2d">
                                <h4 class="number-2Cy7X">100%</h4>
                                <div class="content-3KolX">
                                  <div class="content-1DJyT">
                                    <span class="title-28hRA">Rarely</span>
                                    <p class="byline-34Hiy">
                                      Your percentage of subscribers who are not
                                      very engaged and rarely open and click
                                      your emails.
                                    </p>
                                  </div>
                                </div>
                                <span class="text-2-HTt">
                                  Target with Campaign
                                </span>
                                <button
                                  aria-label="Target with Campaign"
                                  class="button-L745d"
                                  type="button"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="icon-1-8zd"
                                  >
                                    <path d="M12.37 17.75l-1.56 2.14a1 1 0 0 1-1.8-.59v-3.43l-7.73-4.31L21.81 3.6l-4.44 16.94-5-2.79zm6.15-9.48l-6.55 6.96 4.12 2.3 2.43-9.26zm-8.35 5.96l5.87-6.25-10.07 3.9 4.2 2.35z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div class="column-21-zM">
                        <section class="section-xAWB7">
                          <header class="header-2BdKg border-1NF58 paddingAllAround-1KuMf">
                            <div class="row-2OMu_">
                              <img
                                alt=""
                                src="https://cdn-images.mailchimp.com/product/audience-overview/section-icons/location.svg"
                                class="icon-1dR2X"
                              />
                              <button
                                type="button"
                                class="heading-3gudz"
                                aria-expanded="false"
                              >
                                <h3>Top locations</h3>
                              </button>
                            </div>
                            <p class="byline-FTLJT">
                              Based on your contact’s IP address when they
                              interact with your{" "}
                              <a
                                href="https://mailchimp.com/help/about-geolocation/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                emails and signup forms
                              </a>
                              .
                            </p>
                          </header>
                          <section class="container-3cDyZ">
                            <img
                              class="illustration-2a8MU"
                              src="https://cdn-images.mailchimp.com/product/brand_assets/illos/art-empty-default.png"
                              alt=""
                              role="presentation"
                            />
                            <h2 class="header-3z2xg">
                              No location data to show just yet
                            </h2>
                            <a
                              class="noDataLink-3XIOh"
                              href="http://mailchimp.com/help/audience-overview-page/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              What data will show here?
                            </a>
                          </section>
                        </section>
                      </div>
                    </div>
                  </section>
                  <div class="wink"></div>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AudienceDashboard;

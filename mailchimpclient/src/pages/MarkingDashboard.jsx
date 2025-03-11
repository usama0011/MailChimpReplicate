import React from "react";
// import "../styles/MarktingDashboard.css"
import { Link } from "react-router-dom";
const MarkingDashboard = () => {
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
                                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fElUfGVufDB8fDB8fHww"
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
            <div class="root-3uY95 bgColorGrey-HmZgy snipcss-oSGCs">
              <div class="container-2aeSm">
                <header class="root-1rj4d standard-2H4cn header-3IL6q">
                  <div class="cluster-3D5Qr nowrap-34OZ-">
                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                      <div
                        class="stack-1qp4V className-qskdv"
                        id="className-qskdv"
                      >
                        <h1 class="heading-3-eDQNF root-PihPG">
                          Marketing dashboard
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                      href="/campaigns/#f_list:all;t:campaigns-list"
                    >
                      <span class="temporarySpan-2iF2p">All campaigns</span>
                    </a>
                  </div>
                </header>
              </div>
              <div class="selectionPanel-1bLJT">
                <div class="root-1rj4d standard-2H4cn">
                  <div class="cluster-3D5Qr nowrap-34OZ-">
                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing6-zD2QG">
                      <div class="stack-1qp4V spacing2-3AKCb">
                        <p class="root-3TDqk medium-bold-2nZ0J">Date range</p>
                        <button
                          type="button"
                          data-testid="trigger"
                          class="datePopoverTrigger-x7thJ"
                        >
                          Last 30 days
                          <div class="indicator-2sUY5">
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
                        </button>
                      </div>
                      <div class="cluster-3D5Qr">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                          <div class="root-1cS4q inlineSmall-1E7w2">
                            <div class="before-fjpii">
                              <label
                                class="mcds-label-default"
                                id="mc:83"
                                for="mc:82"
                              >
                                Comparison
                              </label>
                            </div>
                            <div class="selectWrapper-1gG6j">
                              <div class="">
                                <div
                                  tabindex="0"
                                  class="trigger-2GY5P"
                                  id="mc:86-trigger"
                                  aria-labelledby="mc:83"
                                  data-testid="compare-against-dropdown"
                                  role="combobox"
                                  aria-autocomplete="none"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                >
                                  Previous 30 days
                                </div>
                              </div>
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
                        </div>
                      </div>
                      <div class="stack-1qp4V spacing2-3AKCb">
                        <span class="root-3TDqk medium-bold-2nZ0J channelFilterTriggerLabel-2Br-q">
                          Filter by message name
                        </span>
                        <div class="cluster-3D5Qr">
                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                            <button
                              type="button"
                              data-testid="email-filter-trigger"
                              class="channelFilterTrigger-20nrE"
                            >
                              0 messages selected
                              <div class="channelFilterTriggerCarat-6zRqr">
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
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabsHeader-3tUEF">
                <div class="root-1rj4d standard-2H4cn">
                  <div class="wrapper-2GUvc">
                    <div
                      role="tablist"
                      class="boxShadowNone-QWU1Z tabList-2ZCac"
                    >
                      <span
                        class="root-TPnFr large-1lNYH"
                        role="tab"
                        id="mc:89:tabs:0"
                        tabindex="0"
                        aria-selected="true"
                        aria-controls="mc:89:tabs:0:panel"
                      >
                        Performance
                      </span>
                      <span
                        class="root-TPnFr large-1lNYH"
                        role="tab"
                        id="mc:89:tabs:1"
                        tabindex="-1"
                        aria-selected="false"
                        aria-controls="mc:89:tabs:1:panel"
                      >
                        Compare message performance
                      </span>
                    </div>
                    <span
                      class="tabIndicator-2Ph-g className-CXx7Q"
                      id="className-CXx7Q"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="tabContentMarginTop-1rh8i">
                <div class="root-1rj4d standard-2H4cn withBottomGutter-1OHF7">
                  <div
                    class="tabPanel-JU-57"
                    tabindex="-1"
                    role="tabpanel"
                    id="mc:89:tabs:0:panel"
                    aria-labelledby="mc:89:tabs:0"
                  >
                    <div class="stack-1qp4V spacing6-nznRY">
                      <div class="container-1QcyQ">
                        <div class="header-epI_B">
                          <div class="cluster-3D5Qr">
                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                              <h4 class="heading-4-3r-mu root-PihPG">
                                Monitor performance
                              </h4>
                              <button
                                class="root-sBgFt root-22EAH"
                                type="button"
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
                                    d="M20.414 6L16 1.586 3.148 14.438l-2.076 5.19 1.3 1.3 5.19-2.076L20.414 6zM3.795 18.205l1.057-2.643L16 4.414 17.586 6 6.438 17.148l-2.643 1.057z"
                                  ></path>
                                  <path d="M8 22l2-2h12v2H8z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p class="root-3TDqk small-secondary-3_Rq2">
                            compared to previous 30 days
                          </p>
                        </div>
                        <div class="section-kJ-Iy">
                          <div class="metricPerformanceBlock-370df cluster-3D5Qr">
                            <div class="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                              <div class="stack-1qp4V spacing4-1xt6w performanceWell-18c4a">
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr nowrap-34OZ-">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="coinContainer-28lga">
                                        <div class="coin-C67mg small-2ebXO">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Mailchimp logo"
                                            height="16"
                                            width="16"
                                          />
                                        </div>
                                      </div>
                                      <button type="button">
                                        <p class="root-3TDqk medium-3AcAC tooltipText-2c5iH">
                                          Total sends
                                        </p>
                                      </button>
                                      <span role="status" aria-atomic="true">
                                        <span class="wink-visually-hidden"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V spacing4-1xt6w indentation-82W9h">
                                    <p class="root-3TDqk heading-3-2i9Gm">0</p>
                                    <div class="pill-3WmP1">
                                      <div class="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p class="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="channelInfo-GtCnm">
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
                                            d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <p class="root-3TDqk small-bold-6R-6E">
                                        --
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="stack-1qp4V spacing4-1xt6w performanceWell-18c4a">
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr nowrap-34OZ-">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="coinContainer-28lga">
                                        <div class="coin-C67mg small-2ebXO">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Mailchimp logo"
                                            height="16"
                                            width="16"
                                          />
                                        </div>
                                      </div>
                                      <button type="button">
                                        <p class="root-3TDqk medium-3AcAC tooltipText-2c5iH">
                                          Open rate
                                        </p>
                                      </button>
                                      <span role="status" aria-atomic="true">
                                        <span class="wink-visually-hidden"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V spacing4-1xt6w indentation-82W9h">
                                    <p class="root-3TDqk heading-3-2i9Gm">--</p>
                                    <div class="pill-3WmP1">
                                      <div class="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p class="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="channelInfo-GtCnm">
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
                                            d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <p class="root-3TDqk small-2qKd5">--</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="stack-1qp4V spacing4-1xt6w performanceWell-18c4a">
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr nowrap-34OZ-">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="coinContainer-28lga">
                                        <div class="coin-C67mg small-2ebXO">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Mailchimp logo"
                                            height="16"
                                            width="16"
                                          />
                                        </div>
                                      </div>
                                      <button type="button">
                                        <p class="root-3TDqk medium-3AcAC tooltipText-2c5iH">
                                          Click rate
                                        </p>
                                      </button>
                                      <span role="status" aria-atomic="true">
                                        <span class="wink-visually-hidden"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V spacing4-1xt6w indentation-82W9h">
                                    <p class="root-3TDqk heading-3-2i9Gm">--</p>
                                    <div class="pill-3WmP1">
                                      <div class="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p class="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="channelInfo-GtCnm">
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
                                            d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <p class="root-3TDqk small-2qKd5">--</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="stack-1qp4V spacing4-1xt6w performanceWell-18c4a">
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr nowrap-34OZ-">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="coinContainer-28lga">
                                        <div class="coin-C67mg small-2ebXO">
                                          <img
                                            src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                            alt="Mailchimp logo"
                                            height="16"
                                            width="16"
                                          />
                                        </div>
                                      </div>
                                      <button type="button">
                                        <p class="root-3TDqk medium-3AcAC tooltipText-2c5iH">
                                          Unsubscribe rate
                                        </p>
                                      </button>
                                      <span role="status" aria-atomic="true">
                                        <span class="wink-visually-hidden"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="stack-1qp4V spacing4-1xt6w indentation-82W9h">
                                    <p class="root-3TDqk heading-3-2i9Gm">--</p>
                                    <div class="pill-3WmP1">
                                      <div class="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p class="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO">
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div class="channelInfo-GtCnm">
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
                                            d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM3 5h18v.57L12.101 14h-.203L3 5.57V5zm0 3.325v7.891l4.219-3.894L3 8.325zM3 19v-.062L8.674 13.7l2.428 2.3h1.796l2.428-2.3L21 18.938V19H3zm18-2.784V8.325l-4.219 3.997L21 16.216z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <p class="root-3TDqk small-2qKd5">--</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container-1QcyQ">
                        <div class="header-epI_B">
                          <div class="stack-1qp4V spacing1-2v2JO">
                            <h4 class="heading-4-3r-mu root-PihPG">
                              Performance over time
                            </h4>
                          </div>
                        </div>
                        <div class="section-kJ-Iy">
                          <div class="stack-1qp4V spacing4-1xt6w">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="stack-1qp4V spacing4-1xt6w">
                                  <div class="dataSetItemContainer-3kdvX">
                                    <div class="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p class="root-3TDqk medium-bold-2nZ0J">
                                          Click rate
                                        </p>
                                      </button>
                                    </div>
                                    <span role="status" aria-atomic="true">
                                      <span class="wink-visually-hidden"></span>
                                    </span>
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <h3 class="heading-3-eDQNF root-PihPG">
                                          0.00%
                                        </h3>
                                        <div class="root-3cL-b neutral-3W0gC">
                                          <span>
                                            <p class="root-3TDqk medium-bold-2nZ0J value">
                                              --
                                            </p>
                                          </span>
                                        </div>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          compared to previous 30 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div class="root-TXRyV selectMetric-I37AE">
                                      <label id="mc:92" for="mc:91" class="">
                                        Metrics:
                                      </label>
                                      <div class="listbox-1KRYD">
                                        <span
                                          tabindex="0"
                                          class="selectedValue-1AZV5"
                                          id="mc:93-trigger"
                                          aria-labelledby="mc:92"
                                          role="combobox"
                                          aria-autocomplete="none"
                                          aria-haspopup="listbox"
                                          aria-expanded="false"
                                        >
                                          <div
                                            class="metricLabelWithCoin-2nJLT cluster-3D5Qr"
                                            data-testid="metric-label-with-coin"
                                          >
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                              <div class="coin-1Lahx">
                                                <img
                                                  src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                  alt="Click rate"
                                                />
                                              </div>
                                              <p class="root-3TDqk small-bold-6R-6E">
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
                                    <div
                                      role="radiogroup"
                                      class="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:94"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:95"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:96"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div class="chartContainer-XZ2Hd">
                                  <div
                                    data-highcharts-chart="0"
                                    id="className-bRtKi"
                                    class="className-bRtKi"
                                  >
                                    <div
                                      id="highcharts-f0l7yf2-0"
                                      dir="ltr"
                                      class="highcharts-container  className-2B2aC"
                                    >
                                      <svg
                                        version="1.1"
                                        class="highcharts-root"
                                        className="font-family: Helvetica, Arial, sans-serif; font-size: 1rem;"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="604"
                                        height="255"
                                        viewBox="0 0 604 255"
                                        role="img"
                                        aria-label=""
                                      >
                                        <desc>
                                          Created with Highcharts 11.1.0
                                        </desc>
                                        <defs>
                                          <filter id="highcharts-drop-shadow-0">
                                            <fedropshadow
                                              dx="1"
                                              dy="1"
                                              flood-color="#000000"
                                              flood-opacity="0.75"
                                              stdDeviation="2.5"
                                            ></fedropshadow>
                                          </filter>
                                          <clipPath id="highcharts-f0l7yf2-1-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="535"
                                              height="147"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-f0l7yf2-18-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="535"
                                              height="147"
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
                                          width="604"
                                          height="255"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-background"
                                          x="59"
                                          y="10"
                                          width="535"
                                          height="147"
                                          filter="none"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="59"
                                          y="10"
                                          width="535"
                                          height="147"
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
                                            d="M 91.5 10 L 91.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 125.5 10 L 125.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 158.5 10 L 158.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 192.5 10 L 192.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 225.5 10 L 225.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 259.5 10 L 259.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 292.5 10 L 292.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 326.5 10 L 326.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 359.5 10 L 359.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 392.5 10 L 392.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 426.5 10 L 426.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 459.5 10 L 459.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 493.5 10 L 493.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 526.5 10 L 526.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 560.5 10 L 560.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 593.5 10 L 593.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 58.5 10 L 58.5 157"
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
                                            d="M 59 157.5 L 594 157.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 59 120.5 L 594 120.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 59 84.5 L 594 84.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 59 47.5 L 594 47.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 59 9.5 L 594 9.5"
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
                                            d="M 59 157.5 L 594 157.5"
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
                                            d="M 59 10 L 59 157"
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
                                            transform="translate(59,10) scale(1 1)"
                                            clip-path="url(#highcharts-f0l7yf2-18-)"
                                          >
                                            <path
                                              fill="none"
                                              d="M 16.71875 147 L 50.15625 147 L 83.59375 147 L 117.03125 147 L 150.46875 147 L 183.90625 147 L 217.34375 147 L 250.78125 147 L 284.21875 147 L 317.65625 147 L 351.09375 147 L 384.53125 147 L 417.96875 147 L 451.40625 147 L 484.84375 147 L 518.28125 147"
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
                                              d="M 16.71875 147 L 50.15625 147 L 83.59375 147 L 117.03125 147 L 150.46875 147 L 183.90625 147 L 217.34375 147 L 250.78125 147 L 284.21875 147 L 317.65625 147 L 351.09375 147 L 384.53125 147 L 417.96875 147 L 451.40625 147 L 484.84375 147 L 518.28125 147"
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
                                            transform="translate(59,10) scale(1 1)"
                                            clip-path="none"
                                          >
                                            <path
                                              fill="#8F4BFF"
                                              d="M 16 151 A 4 4 0 1 1 16.003999999333335 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 50 151 A 4 4 0 1 1 50.00399999933334 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 83 151 A 4 4 0 1 1 83.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 117 151 A 4 4 0 1 1 117.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 150 151 A 4 4 0 1 1 150.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 183 151 A 4 4 0 1 1 183.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 217 151 A 4 4 0 1 1 217.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 250 151 A 4 4 0 1 1 250.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 284 151 A 4 4 0 1 1 284.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 317 151 A 4 4 0 1 1 317.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 351 151 A 4 4 0 1 1 351.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 384 151 A 4 4 0 1 1 384.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 417 151 A 4 4 0 1 1 417.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 451 151 A 4 4 0 1 1 451.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 484 151 A 4 4 0 1 1 484.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 518 151 A 4 4 0 1 1 518.0039999993334 150.99999800000018 Z"
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
                                          class="highcharts-title className-KZ77i"
                                          data-z-index="4"
                                          y="19"
                                          id="className-KZ77i"
                                        ></text>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          class="highcharts-subtitle className-qyVgH"
                                          data-z-index="4"
                                          y="21"
                                          id="className-qyVgH"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          class="highcharts-caption className-h4tp7"
                                          data-z-index="4"
                                          y="249"
                                          id="className-h4tp7"
                                        ></text>
                                        <g
                                          class="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(527,210)"
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
                                            width="67"
                                            height="30"
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
                                                  d="M 0.5 13 L 15.5 13"
                                                  stroke="#8F4BFF"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 8 17 A 4 4 0 1 1 8.003999999333336 16.99999800000017 Z"
                                                  class="highcharts-point"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                ></path>
                                                <text
                                                  x="21"
                                                  y="17"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  id="className-sQyYM"
                                                  class="className-sQyYM"
                                                >
                                                  Email
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
                                            x="75.71875"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 75.71875 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-Q19Iy"
                                            class="className-Q19Iy"
                                          >
                                            Mar 21
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-OHsDp"
                                            class="className-OHsDp"
                                          >
                                            Mar 22
                                          </text>
                                          <text
                                            x="142.59375"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 142.59375 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-AzRz2"
                                            class="className-AzRz2"
                                          >
                                            Mar 23
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-AlpHt"
                                            class="className-AlpHt"
                                          >
                                            Mar 24
                                          </text>
                                          <text
                                            x="209.46875"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 209.46875 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-cJzk2"
                                            class="className-cJzk2"
                                          >
                                            Mar 25
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-MTVC4"
                                            class="className-MTVC4"
                                          >
                                            Mar 26
                                          </text>
                                          <text
                                            x="276.34375"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 276.34375 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-vBh3F"
                                            class="className-vBh3F"
                                          >
                                            Mar 27
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-FQ8TO"
                                            class="className-FQ8TO"
                                          >
                                            Mar 28
                                          </text>
                                          <text
                                            x="343.21875"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 343.21875 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-GmSmW"
                                            class="className-GmSmW"
                                          >
                                            Mar 29
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-TcbYf"
                                            class="className-TcbYf"
                                          >
                                            Mar 30
                                          </text>
                                          <text
                                            x="410.09375"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 410.09375 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-wqYpH"
                                            class="className-wqYpH"
                                          >
                                            Mar 31
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-O9MlA"
                                            class="className-O9MlA"
                                          >
                                            Apr 01
                                          </text>
                                          <text
                                            x="476.96875"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 476.96875 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-onCw1"
                                            class="className-onCw1"
                                          >
                                            Apr 02
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-yM9Zc"
                                            class="className-yM9Zc"
                                          >
                                            Apr 03
                                          </text>
                                          <text
                                            x="543.84375"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 543.84375 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-wwld7"
                                            class="className-wwld7"
                                          >
                                            Apr 04
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-pHYHL"
                                            class="className-pHYHL"
                                          >
                                            Apr 05
                                          </text>
                                        </g>
                                        <g
                                          class="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="44"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="162"
                                            opacity="1"
                                            id="className-5YdH9"
                                            class="className-5YdH9"
                                          >
                                            0.00%
                                          </text>
                                          <text
                                            x="44"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="125"
                                            opacity="1"
                                            id="className-gayCn"
                                            class="className-gayCn"
                                          >
                                            25%
                                          </text>
                                          <text
                                            x="44"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="89"
                                            opacity="1"
                                            id="className-KQslN"
                                            class="className-KQslN"
                                          >
                                            50%
                                          </text>
                                          <text
                                            x="44"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="52"
                                            opacity="1"
                                            id="className-A6PK5"
                                            class="className-A6PK5"
                                          >
                                            75%
                                          </text>
                                          <text
                                            x="44"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="15"
                                            opacity="1"
                                            id="className-ioAJA"
                                            class="className-ioAJA"
                                          >
                                            100%
                                          </text>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="paginationContainer-2_e4x">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyCenter-27O02 spacing4-1S_zR">
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                                            <p class="root-3TDqk small-bold-6R-6E">
                                              0 - 16 of 30
                                            </p>
                                          </div>
                                        </div>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          disabled=""
                                          type="button"
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
                                              d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                                            ></path>
                                          </svg>{" "}
                                          Previous
                                        </button>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          type="button"
                                        >
                                          Next{" "}
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing2-3AKCb chartDetails-1roKD">
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk medium-bold-2nZ0J">
                                        Total message count
                                      </p>
                                      <p class="root-3TDqk medium-bold-2nZ0J">
                                        0
                                      </p>
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Email
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk medium-bold-2nZ0J totalSentLabel-2plMd">
                                        Total messages sent
                                      </p>
                                      <p class="root-3TDqk medium-bold-2nZ0J">
                                        0
                                      </p>
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Email
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container-1QcyQ dataCardWithTabs-1aR0s">
                        <div class="header-epI_B">
                          <div class="stack-1qp4V spacing1-2v2JO">
                            <h4 class="heading-4-3r-mu root-PihPG">
                              Conversions
                            </h4>
                          </div>
                        </div>
                        <div class="wrapper-2GUvc">
                          <div role="tablist" class="tabList-2ZCac">
                            <span
                              class="root-TPnFr large-1lNYH"
                              role="tab"
                              id="mc:110:tabs:0"
                              tabindex="0"
                              aria-selected="true"
                              aria-controls="mc:110:tabs:0:panel"
                            >
                              Conversion funnel
                            </span>
                            <span
                              class="root-TPnFr large-1lNYH"
                              role="tab"
                              id="mc:110:tabs:1"
                              tabindex="-1"
                              aria-selected="false"
                              aria-controls="mc:110:tabs:1:panel"
                            >
                              Channel breakdown
                            </span>
                          </div>
                          <span
                            class="tabIndicator-2Ph-g className-GsxEQ"
                            id="className-GsxEQ"
                          ></span>
                        </div>
                        <div
                          class="tabPanel-JU-57"
                          tabindex="-1"
                          role="tabpanel"
                          id="mc:110:tabs:0:panel"
                          aria-labelledby="mc:110:tabs:0"
                        >
                          <div class="stack-1qp4V spacing2-3AKCb">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="stack-1qp4V spacing4-1xt6w">
                                  <div class="dataSetItemContainer-3kdvX">
                                    <div class="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p class="root-3TDqk medium-bold-2nZ0J">
                                          Click rate
                                        </p>
                                      </button>
                                    </div>
                                    <span role="status" aria-atomic="true">
                                      <span class="wink-visually-hidden"></span>
                                    </span>
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <h3 class="heading-3-eDQNF root-PihPG">
                                          --
                                        </h3>
                                        <div class="root-3cL-b neutral-3W0gC">
                                          <span>
                                            <p class="root-3TDqk medium-bold-2nZ0J value">
                                              --
                                            </p>
                                          </span>
                                        </div>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          compared to previous 30 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-highcharts-chart="2"
                              id="className-gBURV"
                              class="className-gBURV"
                            >
                              <div
                                id="highcharts-f0l7yf2-42"
                                dir="ltr"
                                class="highcharts-container  className-eref8"
                              >
                                <svg
                                  version="1.1"
                                  class="highcharts-root"
                                  className="font-family: Helvetica, Arial, sans-serif; font-size: 1rem;"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="982"
                                  height="200"
                                  viewBox="0 0 982 200"
                                  role="img"
                                  aria-label=""
                                >
                                  <desc>Created with Highcharts 11.1.0</desc>
                                  <defs>
                                    <filter id="highcharts-drop-shadow-2">
                                      <fedropshadow
                                        dx="1"
                                        dy="1"
                                        flood-color="#000000"
                                        flood-opacity="0.75"
                                        stdDeviation="2.5"
                                      ></fedropshadow>
                                    </filter>
                                    <clipPath id="highcharts-f0l7yf2-43-">
                                      <rect
                                        x="0"
                                        y="0"
                                        width="982"
                                        height="175"
                                        fill="none"
                                      ></rect>
                                    </clipPath>
                                    <clipPath id="highcharts-f0l7yf2-47-">
                                      <rect
                                        x="0"
                                        y="0"
                                        width="982"
                                        height="175"
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
                                    height="200"
                                    rx="0"
                                    ry="0"
                                  ></rect>
                                  <rect
                                    fill="none"
                                    class="highcharts-plot-background"
                                    x="0"
                                    y="10"
                                    width="982"
                                    height="175"
                                    filter="none"
                                  ></rect>
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
                                      d="M 0 98.5 L 982 98.5"
                                      opacity="1"
                                    ></path>
                                  </g>
                                  <rect
                                    fill="none"
                                    class="highcharts-plot-border"
                                    data-z-index="1"
                                    stroke="#cccccc"
                                    stroke-width="0"
                                    x="0"
                                    y="10"
                                    width="982"
                                    height="175"
                                  ></rect>
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
                                      d="M 0 10 L 0 185"
                                    ></path>
                                  </g>
                                  <g
                                    class="highcharts-series-group"
                                    data-z-index="3"
                                    filter="none"
                                  >
                                    <g
                                      class="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
                                      data-z-index="0.1"
                                      opacity="1"
                                      transform="translate(0,10) scale(1 1)"
                                      clip-path="url(#highcharts-f0l7yf2-47-)"
                                    >
                                      <path
                                        fill="#EFEEEA"
                                        d="M 62 89 L 266 89 A 3 3 0 0 1 266 89 L 266 89 A 0 0 0 0 1 266 89 L 266 89 A 0 0 0 0 1 62 89 L 62 89 A 3 3 0 0 1 62 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                      <path
                                        fill="#EFEEEA"
                                        d="M 389 89 L 593 89 A 3 3 0 0 1 593 89 L 593 89 A 0 0 0 0 1 593 89 L 593 89 A 0 0 0 0 1 389 89 L 389 89 A 3 3 0 0 1 389 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                      <path
                                        fill="#EFEEEA"
                                        d="M 717 89 L 921 89 A 3 3 0 0 1 921 89 L 921 89 A 0 0 0 0 1 921 89 L 921 89 A 0 0 0 0 1 717 89 L 717 89 A 3 3 0 0 1 717 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                    </g>
                                    <g
                                      class="highcharts-markers highcharts-series-0 highcharts-column-series"
                                      data-z-index="0.1"
                                      opacity="1"
                                      transform="translate(0,10) scale(1 1)"
                                      clip-path="none"
                                    ></g>
                                    <g
                                      class="highcharts-series highcharts-series-1 highcharts-column-series highcharts-tracker"
                                      data-z-index="0.1"
                                      opacity="1"
                                      transform="translate(0,10) scale(1 1)"
                                      clip-path="url(#highcharts-f0l7yf2-47-)"
                                    >
                                      <path
                                        fill="#C0ABFF"
                                        d="M 62 89 L 266 89 A 3 3 0 0 1 266 89 L 266 89 A 0 0 0 0 1 266 89 L 266 89 A 0 0 0 0 1 62 89 L 62 89 A 3 3 0 0 1 62 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                      <path
                                        fill="#C0ABFF"
                                        d="M 389 89 L 593 89 A 3 3 0 0 1 593 89 L 593 89 A 0 0 0 0 1 593 89 L 593 89 A 0 0 0 0 1 389 89 L 389 89 A 3 3 0 0 1 389 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                      <path
                                        fill="#C0ABFF"
                                        d="M 717 89 L 921 89 A 3 3 0 0 1 921 89 L 921 89 A 0 0 0 0 1 921 89 L 921 89 A 0 0 0 0 1 717 89 L 717 89 A 3 3 0 0 1 717 89 Z"
                                        stroke="#ffffff"
                                        stroke-width="0"
                                        opacity="1"
                                        filter="none"
                                        class="highcharts-point"
                                      ></path>
                                    </g>
                                    <g
                                      class="highcharts-markers highcharts-series-1 highcharts-column-series"
                                      data-z-index="0.1"
                                      opacity="1"
                                      transform="translate(0,10) scale(1 1)"
                                      clip-path="none"
                                    ></g>
                                  </g>
                                  <text
                                    x="491"
                                    text-anchor="middle"
                                    class="highcharts-title className-FSjQj"
                                    data-z-index="4"
                                    y="19"
                                    id="className-FSjQj"
                                  ></text>
                                  <text
                                    x="491"
                                    text-anchor="middle"
                                    class="highcharts-subtitle className-7qG1j"
                                    data-z-index="4"
                                    y="21"
                                    id="className-7qG1j"
                                  ></text>
                                  <text
                                    x="10"
                                    text-anchor="start"
                                    class="highcharts-caption className-IAYDT"
                                    data-z-index="4"
                                    y="194"
                                    id="className-IAYDT"
                                  ></text>
                                  <g
                                    class="highcharts-axis-labels highcharts-yaxis-labels"
                                    data-z-index="7"
                                  ></g>
                                </svg>
                              </div>
                            </div>
                            <div class="conversionSteps-H5P2j cluster-3D5Qr">
                              <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="dataSetItemContainer-3kdvX">
                                  <div class="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p class="root-3TDqk small-2qKd5">
                                        Deliveries
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span class="wink-visually-hidden"></span>
                                  </span>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 class="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO dropOffIndicator-3TD_z">
                                  <div class="arrow-2OPvj"></div>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                      <p class="root-3TDqk medium-bold-2nZ0J">
                                        --
                                      </p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        focusable="false"
                                        aria-hidden="true"
                                        class="wink-icon"
                                      >
                                        <path d="M8.8 10.422 9 2H7l.2 8.422L3.174 6.76 1.827 8.24 8 13.85l6.173-5.611-1.346-1.48L8.8 10.422Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <p class="root-3TDqk small-2qKd5">Drop-off</p>
                                </div>
                                <div class="dataSetItemContainer-3kdvX">
                                  <div class="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p class="root-3TDqk small-2qKd5">
                                        Opened
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span class="wink-visually-hidden"></span>
                                  </span>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 class="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing1-2v2JO dropOffIndicator-3TD_z">
                                  <div class="arrow-2OPvj"></div>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                      <p class="root-3TDqk medium-bold-2nZ0J">
                                        --
                                      </p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        focusable="false"
                                        aria-hidden="true"
                                        class="wink-icon"
                                      >
                                        <path d="M8.8 10.422 9 2H7l.2 8.422L3.174 6.76 1.827 8.24 8 13.85l6.173-5.611-1.346-1.48L8.8 10.422Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <p class="root-3TDqk small-2qKd5">Drop-off</p>
                                </div>
                                <div class="dataSetItemContainer-3kdvX">
                                  <div class="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p class="root-3TDqk small-2qKd5">
                                        Clicked
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span class="wink-visually-hidden"></span>
                                  </span>
                                  <div class="cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 class="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tabPanel-JU-57"
                          tabindex="-1"
                          hidden=""
                          role="tabpanel"
                          id="mc:110:tabs:1:panel"
                          aria-labelledby="mc:110:tabs:1"
                          className=""
                        >
                          <div class="stack-1qp4V spacing4-1xt6w">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="stack-1qp4V spacing4-1xt6w">
                                  <div class="dataSetItemContainer-3kdvX">
                                    <div class="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p class="root-3TDqk medium-bold-2nZ0J">
                                          Clicked
                                        </p>
                                      </button>
                                    </div>
                                    <span role="status" aria-atomic="true">
                                      <span class="wink-visually-hidden"></span>
                                    </span>
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <h3 class="heading-3-eDQNF root-PihPG">
                                          0
                                        </h3>
                                        <div class="root-3cL-b neutral-3W0gC">
                                          <span>
                                            <p class="root-3TDqk medium-bold-2nZ0J value">
                                              --
                                            </p>
                                          </span>
                                        </div>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          compared to previous 30 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div
                                      role="radiogroup"
                                      class="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:116"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:117"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:118"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div class="chartContainer-33B-J">
                                  <div
                                    data-highcharts-chart="3"
                                    id="className-myFiD"
                                    class="className-myFiD"
                                  >
                                    <div
                                      id="highcharts-f0l7yf2-51"
                                      dir="ltr"
                                      class="highcharts-container  className-UYxhW"
                                    >
                                      <svg
                                        version="1.1"
                                        class="highcharts-root"
                                        className="font-family: Helvetica, Arial, sans-serif; font-size: 1rem;"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="604"
                                        height="281"
                                        viewBox="0 0 604 281"
                                        role="img"
                                        aria-label=""
                                      >
                                        <desc>
                                          Created with Highcharts 11.1.0
                                        </desc>
                                        <defs>
                                          <filter id="highcharts-drop-shadow-3">
                                            <fedropshadow
                                              dx="1"
                                              dy="1"
                                              flood-color="#000000"
                                              flood-opacity="0.75"
                                              stdDeviation="2.5"
                                            ></fedropshadow>
                                          </filter>
                                          <clipPath id="highcharts-f0l7yf2-52-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="562"
                                              height="173"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-f0l7yf2-69-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="562"
                                              height="173"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                        <rect
                                          fill="rgba(0,0,0,0)"
                                          class="highcharts-background"
                                          filter="none"
                                          x="0"
                                          y="0"
                                          width="604"
                                          height="281"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-background"
                                          x="32"
                                          y="10"
                                          width="562"
                                          height="173"
                                          filter="none"
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
                                            d="M 66.5 10 L 66.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 101.5 10 L 101.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 136.5 10 L 136.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 172.5 10 L 172.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 207.5 10 L 207.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 242.5 10 L 242.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 277.5 10 L 277.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 312.5 10 L 312.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 347.5 10 L 347.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 382.5 10 L 382.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 417.5 10 L 417.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 453.5 10 L 453.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 488.5 10 L 488.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 523.5 10 L 523.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 558.5 10 L 558.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 593.5 10 L 593.5 183"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 31.5 10 L 31.5 183"
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
                                            d="M 32 183.5 L 594 183.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 32 140.5 L 594 140.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 32 97.5 L 594 97.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 32 53.5 L 594 53.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 32 9.5 L 594 9.5"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="32"
                                          y="10"
                                          width="562"
                                          height="173"
                                        ></rect>
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
                                            d="M 32 183.5 L 594 183.5"
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
                                            d="M 32 10 L 32 183"
                                          ></path>
                                        </g>
                                        <g
                                          class="highcharts-series-group"
                                          data-z-index="3"
                                          filter="none"
                                        >
                                          <g
                                            class="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(32,10) scale(1 1)"
                                            clip-path="url(#highcharts-f0l7yf2-69-)"
                                          >
                                            <path
                                              fill="#C0ABFF"
                                              d="M 9 174 L 26 174 A 3 3 0 0 1 26 174 L 26 174 A 0 0 0 0 1 26 174 L 26 174 A 0 0 0 0 1 9 174 L 9 174 A 3 3 0 0 1 9 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 44 174 L 61 174 A 3 3 0 0 1 61 174 L 61 174 A 0 0 0 0 1 61 174 L 61 174 A 0 0 0 0 1 44 174 L 44 174 A 3 3 0 0 1 44 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 80 174 L 97 174 A 3 3 0 0 1 97 174 L 97 174 A 0 0 0 0 1 97 174 L 97 174 A 0 0 0 0 1 80 174 L 80 174 A 3 3 0 0 1 80 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 115 174 L 132 174 A 3 3 0 0 1 132 174 L 132 174 A 0 0 0 0 1 132 174 L 132 174 A 0 0 0 0 1 115 174 L 115 174 A 3 3 0 0 1 115 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 150 174 L 167 174 A 3 3 0 0 1 167 174 L 167 174 A 0 0 0 0 1 167 174 L 167 174 A 0 0 0 0 1 150 174 L 150 174 A 3 3 0 0 1 150 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 185 174 L 202 174 A 3 3 0 0 1 202 174 L 202 174 A 0 0 0 0 1 202 174 L 202 174 A 0 0 0 0 1 185 174 L 185 174 A 3 3 0 0 1 185 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 220 174 L 237 174 A 3 3 0 0 1 237 174 L 237 174 A 0 0 0 0 1 237 174 L 237 174 A 0 0 0 0 1 220 174 L 220 174 A 3 3 0 0 1 220 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 255 174 L 272 174 A 3 3 0 0 1 272 174 L 272 174 A 0 0 0 0 1 272 174 L 272 174 A 0 0 0 0 1 255 174 L 255 174 A 3 3 0 0 1 255 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 290 174 L 307 174 A 3 3 0 0 1 307 174 L 307 174 A 0 0 0 0 1 307 174 L 307 174 A 0 0 0 0 1 290 174 L 290 174 A 3 3 0 0 1 290 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 325 174 L 342 174 A 3 3 0 0 1 342 174 L 342 174 A 0 0 0 0 1 342 174 L 342 174 A 0 0 0 0 1 325 174 L 325 174 A 3 3 0 0 1 325 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 361 174 L 378 174 A 3 3 0 0 1 378 174 L 378 174 A 0 0 0 0 1 378 174 L 378 174 A 0 0 0 0 1 361 174 L 361 174 A 3 3 0 0 1 361 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 396 174 L 413 174 A 3 3 0 0 1 413 174 L 413 174 A 0 0 0 0 1 413 174 L 413 174 A 0 0 0 0 1 396 174 L 396 174 A 3 3 0 0 1 396 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 431 174 L 448 174 A 3 3 0 0 1 448 174 L 448 174 A 0 0 0 0 1 448 174 L 448 174 A 0 0 0 0 1 431 174 L 431 174 A 3 3 0 0 1 431 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 466 174 L 483 174 A 3 3 0 0 1 483 174 L 483 174 A 0 0 0 0 1 483 174 L 483 174 A 0 0 0 0 1 466 174 L 466 174 A 3 3 0 0 1 466 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 501 174 L 518 174 A 3 3 0 0 1 518 174 L 518 174 A 0 0 0 0 1 518 174 L 518 174 A 0 0 0 0 1 501 174 L 501 174 A 3 3 0 0 1 501 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#C0ABFF"
                                              d="M 536 174 L 553 174 A 3 3 0 0 1 553 174 L 553 174 A 0 0 0 0 1 553 174 L 553 174 A 0 0 0 0 1 536 174 L 536 174 A 3 3 0 0 1 536 174 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              filter="none"
                                              class="highcharts-point"
                                            ></path>
                                          </g>
                                          <g
                                            class="highcharts-markers highcharts-series-0 highcharts-column-series"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(32,10) scale(1 1)"
                                            clip-path="none"
                                          ></g>
                                        </g>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          class="highcharts-title className-wjPZw"
                                          data-z-index="4"
                                          y="19"
                                          id="className-wjPZw"
                                        ></text>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          class="highcharts-subtitle className-xrLhS"
                                          data-z-index="4"
                                          y="21"
                                          id="className-xrLhS"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          class="highcharts-caption className-oDBdP"
                                          data-z-index="4"
                                          y="275"
                                          id="className-oDBdP"
                                        ></text>
                                        <g
                                          class="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(527,236)"
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
                                            width="67"
                                            height="30"
                                          ></rect>
                                          <g data-z-index="1">
                                            <g>
                                              <g
                                                class="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-0"
                                                data-z-index="1"
                                                transform="translate(8,3)"
                                              >
                                                <text
                                                  x="21"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  y="17"
                                                  id="className-Ir1yn"
                                                  class="className-Ir1yn"
                                                >
                                                  Email
                                                </text>
                                                <rect
                                                  x="2"
                                                  y="6"
                                                  rx="0"
                                                  ry="0"
                                                  width="12"
                                                  height="12"
                                                  fill="#C0ABFF"
                                                  class="highcharts-point"
                                                  data-z-index="3"
                                                ></rect>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                        <g
                                          class="highcharts-axis-labels highcharts-xaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="49.5625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 49.5625 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-zUboL"
                                            class="className-zUboL"
                                          >
                                            Mar 21
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-2wo9o"
                                            class="className-2wo9o"
                                          >
                                            Mar 22
                                          </text>
                                          <text
                                            x="119.8125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 119.8125 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-irv1e"
                                            class="className-irv1e"
                                          >
                                            Mar 23
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-dU3tP"
                                            class="className-dU3tP"
                                          >
                                            Mar 24
                                          </text>
                                          <text
                                            x="190.0625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 190.0625 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-FRVVE"
                                            class="className-FRVVE"
                                          >
                                            Mar 25
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-cAfoM"
                                            class="className-cAfoM"
                                          >
                                            Mar 26
                                          </text>
                                          <text
                                            x="260.3125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 260.3125 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-YNfeh"
                                            class="className-YNfeh"
                                          >
                                            Mar 27
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-39Um1"
                                            class="className-39Um1"
                                          >
                                            Mar 28
                                          </text>
                                          <text
                                            x="330.5625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 330.5625 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-71fTO"
                                            class="className-71fTO"
                                          >
                                            Mar 29
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-h4idT"
                                            class="className-h4idT"
                                          >
                                            Mar 30
                                          </text>
                                          <text
                                            x="400.8125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 400.8125 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-9xgHK"
                                            class="className-9xgHK"
                                          >
                                            Mar 31
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-flrrV"
                                            class="className-flrrV"
                                          >
                                            Apr 01
                                          </text>
                                          <text
                                            x="471.0625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 471.0625 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-xs2VT"
                                            class="className-xs2VT"
                                          >
                                            Apr 02
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-lzT9p"
                                            class="className-lzT9p"
                                          >
                                            Apr 03
                                          </text>
                                          <text
                                            x="541.3125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 541.3125 200)"
                                            y="200"
                                            opacity="1"
                                            id="className-orQd5"
                                            class="className-orQd5"
                                          >
                                            Apr 04
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-3cb2d"
                                            class="className-3cb2d"
                                          >
                                            Apr 05
                                          </text>
                                        </g>
                                        <g
                                          class="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="17"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="188"
                                            opacity="1"
                                            id="className-GQIDv"
                                            class="className-GQIDv"
                                          >
                                            0
                                          </text>
                                          <text
                                            x="17"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="145"
                                            opacity="1"
                                            id="className-xcXNY"
                                            class="className-xcXNY"
                                          >
                                            1
                                          </text>
                                          <text
                                            x="17"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="102"
                                            opacity="1"
                                            id="className-qgw9o"
                                            class="className-qgw9o"
                                          >
                                            2
                                          </text>
                                          <text
                                            x="17"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="58"
                                            opacity="1"
                                            id="className-dP7kR"
                                            class="className-dP7kR"
                                          >
                                            3
                                          </text>
                                          <text
                                            x="17"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="15"
                                            opacity="1"
                                            id="className-JPROX"
                                            class="className-JPROX"
                                          >
                                            4
                                          </text>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="paginationContainer-3adi7">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyCenter-27O02 spacing4-1S_zR">
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                                            <p class="root-3TDqk small-bold-6R-6E">
                                              0 - 16 of 30
                                            </p>
                                          </div>
                                        </div>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          disabled=""
                                          type="button"
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
                                              d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                                            ></path>
                                          </svg>{" "}
                                          Previous
                                        </button>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          type="button"
                                        >
                                          Next{" "}
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing2-3AKCb chartDetails-1GdE4">
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    Total clicks by channel breakdown
                                  </p>
                                  <div class="chartDetailsItem-1GIB6 cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Email
                                      </p>
                                      <p class="root-3TDqk small-bold-6R-6E">
                                        0.00%
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container-1QcyQ">
                        <div class="header-epI_B">
                          <div class="stack-1qp4V spacing1-2v2JO">
                            <h4 class="heading-4-3r-mu root-PihPG">Delivery</h4>
                          </div>
                        </div>
                        <div class="wrapper-2GUvc">
                          <div role="tablist" class="tabList-2ZCac">
                            <span
                              class="root-TPnFr large-1lNYH"
                              role="tab"
                              id="mc:97:tabs:0"
                              tabindex="0"
                              aria-selected="true"
                              aria-controls="mc:97:tabs:0:panel"
                            >
                              Email
                            </span>
                          </div>
                          <span
                            class="tabIndicator-2Ph-g className-NCwqL"
                            id="className-NCwqL"
                          ></span>
                        </div>
                        <div
                          class="tabPanel-JU-57"
                          tabindex="-1"
                          role="tabpanel"
                          id="mc:97:tabs:0:panel"
                          aria-labelledby="mc:97:tabs:0"
                        >
                          <div class="stack-1qp4V spacing4-1xt6w">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div class="stack-1qp4V spacing4-1xt6w">
                                  <div class="dataSetItemContainer-3kdvX">
                                    <div class="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p class="root-3TDqk medium-bold-2nZ0J">
                                          Total deliveries
                                        </p>
                                      </button>
                                    </div>
                                    <span role="status" aria-atomic="true">
                                      <span class="wink-visually-hidden"></span>
                                    </span>
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <h3 class="heading-3-eDQNF root-PihPG">
                                          0
                                        </h3>
                                        <div class="root-3cL-b neutral-3W0gC">
                                          <span>
                                            <p class="root-3TDqk medium-bold-2nZ0J value">
                                              --
                                            </p>
                                          </span>
                                        </div>
                                        <p class="root-3TDqk small-secondary-3_Rq2">
                                          compared to previous 30 days
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="cluster-3D5Qr">
                                  <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div class="root-TXRyV inlineSmall-1erbF">
                                      <label id="mc:100" for="mc:99" class="">
                                        Metric:
                                      </label>
                                      <div class="listbox-1KRYD">
                                        <span
                                          tabindex="0"
                                          class="selectedValue-1AZV5"
                                          id="mc:101-trigger"
                                          aria-labelledby="mc:100"
                                          role="combobox"
                                          aria-autocomplete="none"
                                          aria-haspopup="listbox"
                                          aria-expanded="false"
                                        >
                                          <div
                                            class="metricLabelWithCoin-2nJLT cluster-3D5Qr"
                                            data-testid="metric-label-with-coin"
                                          >
                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
                                              <div class="coin-1Lahx">
                                                <img
                                                  src="https://cdn-images.mailchimp.com/freddie/freddie-small-16x16.svg"
                                                  alt="Delivery rate"
                                                />
                                              </div>
                                              <p class="root-3TDqk small-bold-6R-6E">
                                                Delivery rate
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
                                    <div
                                      role="radiogroup"
                                      class="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:102"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:103"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        class="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:104"
                                        type="button"
                                      >
                                        <span class="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div class="chartContainer-7YEjv">
                                  <div
                                    data-highcharts-chart="1"
                                    id="className-KtAED"
                                    class="className-KtAED"
                                  >
                                    <div
                                      id="highcharts-f0l7yf2-21"
                                      dir="ltr"
                                      class="highcharts-container  className-YXf3P"
                                    >
                                      <svg
                                        version="1.1"
                                        class="highcharts-root"
                                        className="font-family: Helvetica, Arial, sans-serif; font-size: 1rem;"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="604"
                                        height="255"
                                        viewBox="0 0 604 255"
                                        role="img"
                                        aria-label=""
                                      >
                                        <desc>
                                          Created with Highcharts 11.1.0
                                        </desc>
                                        <defs>
                                          <filter id="highcharts-drop-shadow-1">
                                            <fedropshadow
                                              dx="1"
                                              dy="1"
                                              flood-color="#000000"
                                              flood-opacity="0.75"
                                              stdDeviation="2.5"
                                            ></fedropshadow>
                                          </filter>
                                          <clipPath id="highcharts-f0l7yf2-22-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="538"
                                              height="147"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-f0l7yf2-39-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="538"
                                              height="147"
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
                                          width="604"
                                          height="255"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-background"
                                          x="56"
                                          y="10"
                                          width="538"
                                          height="147"
                                          filter="none"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          class="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="56"
                                          y="10"
                                          width="538"
                                          height="147"
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
                                            d="M 89.5 10 L 89.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 122.5 10 L 122.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 156.5 10 L 156.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 190.5 10 L 190.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 223.5 10 L 223.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 257.5 10 L 257.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 290.5 10 L 290.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 324.5 10 L 324.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 358.5 10 L 358.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 391.5 10 L 391.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 425.5 10 L 425.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 459.5 10 L 459.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 492.5 10 L 492.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 526.5 10 L 526.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 559.5 10 L 559.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 593.5 10 L 593.5 157"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 55.5 10 L 55.5 157"
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
                                            d="M 56 157.5 L 594 157.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 56 120.5 L 594 120.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 56 84.5 L 594 84.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 56 47.5 L 594 47.5"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            class="highcharts-grid-line"
                                            d="M 56 9.5 L 594 9.5"
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
                                            d="M 56 157.5 L 594 157.5"
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
                                            d="M 56 10 L 56 157"
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
                                            transform="translate(56,10) scale(1 1)"
                                            clip-path="url(#highcharts-f0l7yf2-39-)"
                                          >
                                            <path
                                              fill="none"
                                              d="M 16.8125 147 L 50.4375 147 L 84.0625 147 L 117.6875 147 L 151.3125 147 L 184.9375 147 L 218.5625 147 L 252.1875 147 L 285.8125 147 L 319.4375 147 L 353.0625 147 L 386.6875 147 L 420.3125 147 L 453.9375 147 L 487.5625 147 L 521.1875 147"
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
                                              d="M 16.8125 147 L 50.4375 147 L 84.0625 147 L 117.6875 147 L 151.3125 147 L 184.9375 147 L 218.5625 147 L 252.1875 147 L 285.8125 147 L 319.4375 147 L 353.0625 147 L 386.6875 147 L 420.3125 147 L 453.9375 147 L 487.5625 147 L 521.1875 147"
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
                                            transform="translate(56,10) scale(1 1)"
                                            clip-path="none"
                                          >
                                            <path
                                              fill="#8F4BFF"
                                              d="M 16 151 A 4 4 0 1 1 16.003999999333335 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 50 151 A 4 4 0 1 1 50.00399999933334 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 84 151 A 4 4 0 1 1 84.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 117 151 A 4 4 0 1 1 117.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 151 151 A 4 4 0 1 1 151.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 184 151 A 4 4 0 1 1 184.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 218 151 A 4 4 0 1 1 218.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 252 151 A 4 4 0 1 1 252.00399999933333 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 285 151 A 4 4 0 1 1 285.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 319 151 A 4 4 0 1 1 319.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 353 151 A 4 4 0 1 1 353.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 386 151 A 4 4 0 1 1 386.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 420 151 A 4 4 0 1 1 420.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 453 151 A 4 4 0 1 1 453.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 487 151 A 4 4 0 1 1 487.00399999933336 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#8F4BFF"
                                              d="M 521 151 A 4 4 0 1 1 521.0039999993334 150.99999800000018 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              class="highcharts-point"
                                            ></path>
                                          </g>
                                        </g>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          class="highcharts-title className-VnHtG"
                                          data-z-index="4"
                                          y="19"
                                          id="className-VnHtG"
                                        ></text>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          class="highcharts-subtitle className-ZNovi"
                                          data-z-index="4"
                                          y="21"
                                          id="className-ZNovi"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          class="highcharts-caption className-owZ75"
                                          data-z-index="4"
                                          y="249"
                                          id="className-owZ75"
                                        ></text>
                                        <g
                                          class="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(489,210)"
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
                                            width="104"
                                            height="30"
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
                                                  d="M 0.5 13 L 15.5 13"
                                                  stroke="#8F4BFF"
                                                ></path>
                                                <path
                                                  fill="#8F4BFF"
                                                  d="M 8 17 A 4 4 0 1 1 8.003999999333336 16.99999800000017 Z"
                                                  class="highcharts-point"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                ></path>
                                                <text
                                                  x="21"
                                                  y="17"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  id="className-8P2y6"
                                                  class="className-8P2y6"
                                                >
                                                  Delivery rate
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
                                            x="72.8125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 72.8125 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-zzKwg"
                                            class="className-zzKwg"
                                          >
                                            Mar 21
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-CYgnk"
                                            class="className-CYgnk"
                                          >
                                            Mar 22
                                          </text>
                                          <text
                                            x="140.0625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 140.0625 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-sfsLm"
                                            class="className-sfsLm"
                                          >
                                            Mar 23
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-Xpzx9"
                                            class="className-Xpzx9"
                                          >
                                            Mar 24
                                          </text>
                                          <text
                                            x="207.3125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 207.3125 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-yeVhx"
                                            class="className-yeVhx"
                                          >
                                            Mar 25
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-qoJNc"
                                            class="className-qoJNc"
                                          >
                                            Mar 26
                                          </text>
                                          <text
                                            x="274.5625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 274.5625 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-Yzoii"
                                            class="className-Yzoii"
                                          >
                                            Mar 27
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-scWH9"
                                            class="className-scWH9"
                                          >
                                            Mar 28
                                          </text>
                                          <text
                                            x="341.8125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 341.8125 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-Tp3IS"
                                            class="className-Tp3IS"
                                          >
                                            Mar 29
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-TBIcf"
                                            class="className-TBIcf"
                                          >
                                            Mar 30
                                          </text>
                                          <text
                                            x="409.0625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 409.0625 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-1CxZa"
                                            class="className-1CxZa"
                                          >
                                            Mar 31
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-Mrqsc"
                                            class="className-Mrqsc"
                                          >
                                            Apr 01
                                          </text>
                                          <text
                                            x="476.3125"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 476.3125 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-gPcFM"
                                            class="className-gPcFM"
                                          >
                                            Apr 02
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-V98vY"
                                            class="className-V98vY"
                                          >
                                            Apr 03
                                          </text>
                                          <text
                                            x="543.5625"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 543.5625 174)"
                                            y="174"
                                            opacity="1"
                                            id="className-vdLR2"
                                            class="className-vdLR2"
                                          >
                                            Apr 04
                                          </text>
                                          <text
                                            x="0"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 0 0)"
                                            visibility="hidden"
                                            id="className-82iKR"
                                            class="className-82iKR"
                                          >
                                            Apr 05
                                          </text>
                                        </g>
                                        <g
                                          class="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="41"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="162"
                                            opacity="1"
                                            id="className-iH3Mq"
                                            class="className-iH3Mq"
                                          >
                                            0%
                                          </text>
                                          <text
                                            x="41"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="125"
                                            opacity="1"
                                            id="className-XFx6v"
                                            class="className-XFx6v"
                                          >
                                            25%
                                          </text>
                                          <text
                                            x="41"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="89"
                                            opacity="1"
                                            id="className-evCtP"
                                            class="className-evCtP"
                                          >
                                            50%
                                          </text>
                                          <text
                                            x="41"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="52"
                                            opacity="1"
                                            id="className-JVv1v"
                                            class="className-JVv1v"
                                          >
                                            75%
                                          </text>
                                          <text
                                            x="41"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="15"
                                            opacity="1"
                                            id="className-mVq9I"
                                            class="className-mVq9I"
                                          >
                                            100%
                                          </text>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="paginationContainer-h-_57">
                                    <div class="cluster-3D5Qr">
                                      <div class="alignItemsCenter-1HCiJ justifyCenter-27O02 spacing4-1S_zR">
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                                            <p class="root-3TDqk small-bold-6R-6E">
                                              0 - 16 of 30
                                            </p>
                                          </div>
                                        </div>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          disabled=""
                                          type="button"
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
                                              d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                                            ></path>
                                          </svg>{" "}
                                          Previous
                                        </button>
                                        <button
                                          class="root-sBgFt root-22EAH"
                                          type="button"
                                        >
                                          Next{" "}
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="stack-1qp4V spacing2-3AKCb chartDetails-1nExG">
                                  <p class="root-3TDqk medium-bold-2nZ0J">
                                    Delivery details
                                  </p>
                                  <div class="chartDetailsItem-3vGHR cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Emails sent
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                  <div class="chartDetailsItem-3vGHR cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Deliveries
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                  <div class="chartDetailsItem-3vGHR cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Bounces
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                  <div class="chartDetailsItem-3vGHR cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Unsubscribed
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
                                    </div>
                                  </div>
                                  <div class="chartDetailsItem-3vGHR cluster-3D5Qr">
                                    <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                      <p class="root-3TDqk small-2qKd5">
                                        Abuse reports
                                      </p>
                                      <p class="root-3TDqk small-2qKd5">0</p>
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
                  <div
                    class="tabPanel-JU-57"
                    tabindex="-1"
                    hidden=""
                    role="tabpanel"
                    id="mc:89:tabs:1:panel"
                    aria-labelledby="mc:89:tabs:1"
                  >
                    <div class="stack-1qp4V spacing6-nznRY">
                      <div class="stack-1qp4V">
                        <div class="stack-1qp4V spacing4-1xt6w chartContainer-16Dry">
                          <div class="cluster-3D5Qr">
                            <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR">
                              <div class="container-1QcyQ">
                                <div class="header-epI_B">
                                  <h4 class="heading-4-3r-mu root-PihPG">
                                    Individual message performance
                                  </h4>
                                </div>
                                <div class="section-kJ-Iy">
                                  <div class="statusContainer-29Qe9">
                                    <div class="stack-1qp4V spacing1-2v2JO skeletonContainer-2ASGV">
                                      <img
                                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/core-analytics/chart-skeleton-no-data.svg"
                                        alt="There is no data available for the filters provided. Try changing the page filters. "
                                      />
                                      <p class="root-3TDqk large-bold-3R9__">
                                        No data available
                                      </p>
                                      <p class="root-3TDqk medium-3AcAC">
                                        There is no data available for the
                                        filters provided. Try changing the page
                                        filters.{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="stack-1qp4V">
                        <div class="stack-1qp4V spacing2-3AKCb performanceTableHeader-v2olo">
                          <h4 class="heading-4-3r-mu root-PihPG">
                            Detailed message performance
                          </h4>
                          <p class="root-3TDqk small-secondary-3_Rq2">
                            Sent between Mar 21, 2024 - Apr 19, 2024
                          </p>
                        </div>
                        <div class="container-1QcyQ">
                          <div class="noDataContainer-PumTQ">
                            <div class="stack-1qp4V spacing1-2v2JO skeletonContainer-2ASGV">
                              <img
                                src="https://cdn-images.mailchimp.com/product/brand_assets/illos/ILLO_Eyeglasses-transparent-2x.png"
                                alt="There is no data available for the filters provided. Try changing the page filters. "
                              />
                              <p class="root-3TDqk large-bold-3R9__">
                                No data available
                              </p>
                              <p class="root-3TDqk medium-3AcAC">
                                There is no data available for the filters
                                provided. Try changing the page filters.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MarkingDashboard;

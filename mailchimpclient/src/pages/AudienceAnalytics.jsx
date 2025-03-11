import React from "react";
// import "../styles/AudienceAnalytics.css";
import { Link } from "react-router-dom";
const AudienceAnalytics = () => {
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
            <div>
              <div className="root-3uY95 snipcss-gj3dB">
                <div className="container-2aeSm">
                  <header className="root-1rj4d standard-2H4cn header-3IL6q">
                    <div className="cluster-3D5Qr nowrap-34OZ-">
                      <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <div
                          className="stack-1qp4V style-YSXaQ"
                          id="style-YSXaQ"
                        >
                          <h1 className="heading-3-eDQNF root-PihPG">
                            Audience analytics
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div className="actions-1bN9W cluster-3D5Qr">
                      <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <a
                          className="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                          href="/lists/members"
                        >
                          <span className="temporarySpan-2iF2p">
                            Manage contacts
                          </span>
                        </a>
                      </div>
                    </div>
                  </header>
                </div>
                <div className="root-1rj4d standard-2H4cn">
                  <div className="selectorContainer-2lD9s cluster-3D5Qr">
                    <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                      <div className="root-1cS4q audienceSelectBox-3Rybf">
                        <div className="before-fjpii">
                          <label
                            className="mcds-label-default"
                            id="mc:59"
                            for="mc:58"
                          >
                            Audience
                          </label>
                        </div>
                        <div className="selectWrapper-1gG6j">
                          <div className="">
                            <div
                              tabindex="0"
                              className="trigger-2GY5P"
                              id="mc:62-trigger"
                              aria-labelledby="mc:59"
                              data-testid="audience-analytics-audience-selector"
                              role="combobox"
                              aria-autocomplete="none"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                            >
                              <p className="root-3TDqk medium-3AcAC">
                                Next Web Lines
                              </p>
                            </div>
                          </div>
                          <br />
                          <div className="indicator-3GTSs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              className="wink-icon"
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
                </div>
                <div className="bannerContainer-2Ax4p contentContainer-e4xJV">
                  <div className="root-1rj4d standard-2H4cn">
                    <div className="stack-1qp4V spacing7-3UvBh">
                      <div className="container-1QcyQ">
                        <div className="header-epI_B">
                          <div className="stack-1qp4V spacing1-2v2JO titleText-3uhmQ">
                            <p className="root-3TDqk heading-3-2i9Gm">
                              Summary
                            </p>
                            <br />
                            <p className="root-3TDqk small-secondary-3_Rq2">
                              Contact counts are cumulative to date
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="section-kJ-Iy">
                          <div className="cluster-3D5Qr">
                            <div className="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div className="dataWellItem-2I2SV">
                                <div className="stack-1qp4V spacing4-1xt6w">
                                  <div
                                    data-testid="total"
                                    className="dataSetItemContainer-3kdvX"
                                  >
                                    <div className="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p className="root-3TDqk medium-3AcAC">
                                          Total contacts
                                        </p>
                                      </button>
                                    </div>
                                    <br />
                                    <span role="status" aria-atomic="true">
                                      <span className="wink-visually-hidden"></span>
                                    </span>
                                    <h2 className="heading-2-ZDzRe root-PihPG">
                                      500
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="dataWellItem-2I2SV">
                                <div className="stack-1qp4V spacing4-1xt6w">
                                  <div
                                    data-testid="subscribed"
                                    className="dataSetItemContainer-3kdvX"
                                  >
                                    <div className="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p className="root-3TDqk medium-3AcAC">
                                          Subscribed
                                        </p>
                                      </button>
                                    </div>
                                    <br />
                                    <span role="status" aria-atomic="true">
                                      <span className="wink-visually-hidden"></span>
                                    </span>
                                    <h2 className="heading-2-ZDzRe root-PihPG">
                                      500
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="dataWellItem-2I2SV">
                                <div className="stack-1qp4V spacing4-1xt6w">
                                  <div
                                    data-testid="non-subscribed"
                                    className="dataSetItemContainer-3kdvX"
                                  >
                                    <div className="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p className="root-3TDqk medium-3AcAC">
                                          Non-subscribed
                                        </p>
                                      </button>
                                    </div>
                                    <br />
                                    <span role="status" aria-atomic="true">
                                      <span className="wink-visually-hidden"></span>
                                    </span>
                                    <h2 className="heading-2-ZDzRe root-PihPG">
                                      0
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="dataWellItem-2I2SV">
                                <div className="stack-1qp4V spacing4-1xt6w">
                                  <div
                                    data-testid="unsubscribed"
                                    className="dataSetItemContainer-3kdvX"
                                  >
                                    <div className="kaleUnderline-2dGJI">
                                      <button type="button">
                                        <p className="root-3TDqk medium-3AcAC">
                                          Unsubscribed
                                        </p>
                                      </button>
                                    </div>
                                    <br />
                                    <span role="status" aria-atomic="true">
                                      <span className="wink-visually-hidden"></span>
                                    </span>
                                    <h2 className="heading-2-ZDzRe root-PihPG">
                                      0
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="stack-1qp4V spacing2-3AKCb">
                        <p className="root-3TDqk medium-bold-2nZ0J">
                          Date range
                        </p>
                        <br />
                        <button
                          type="button"
                          data-testid="trigger"
                          className="datePopoverTrigger-x7thJ"
                        >
                          Last 30 days
                          <div className="indicator-2sUY5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              className="wink-icon"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.293 10.707l1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414l-5.707-5.707z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <br />
                      </div>
                      <div className="root-W0b4G default-2kLnG smsContainer-1p3Qc cluster-3D5Qr nowrap-34OZ-">
                        <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <span className="icon-3fYw1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              aria-hidden="true"
                              className="wink-icon"
                            >
                              <path d="M9 12v-1l2-1h2v6l2 1v1H9v-1l2-1v-4H9zm2.75-4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
                              ></path>
                            </svg>
                          </span>
                          <div className="content-2tUie cluster-3D5Qr nowrap-34OZ-">
                            <div className="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing2-3-fWQ">
                              <div className="copy-1hjCu">
                                <p className="root-3TDqk small-bold-6R-6E">
                                  SMS data is coming soon
                                </p>
                                <span className="root-3TDqk small-secondary-3_Rq2">
                                  Analyze your multi-channel performance with
                                  the addition of SMS analytics.
                                </span>
                              </div>
                              <div className="cluster-3D5Qr nowrap-34OZ-">
                                <div className="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR"></div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button className="root-1khsy" type="button">
                              <span className="wink-visually-hidden">
                                Dismiss alert
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                focusable="false"
                                aria-hidden="true"
                                className="wink-icon"
                              >
                                <path d="M12 13.414l6.293 6.293 1.414-1.414L13.414 12l6.293-6.293-1.414-1.414L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293 1.414 1.414L12 13.414z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="container-1QcyQ">
                        <div className="header-epI_B">
                          <div className="stack-1qp4V spacing1-2v2JO">
                            <p className="root-3TDqk heading-3-2i9Gm">
                              Contacts breakdown
                            </p>
                            <p className="root-3TDqk small-secondary-3_Rq2">
                              Mar 21, 2024 - Apr 19, 2024
                            </p>
                          </div>
                        </div>
                        <br />
                        <div className="wrapper-2GUvc">
                          <div role="tablist" className="tabList-2ZCac">
                            <span
                              className="root-TPnFr large-1lNYH"
                              role="tab"
                              id="mc:69:tabs:0"
                              tabindex="0"
                              aria-selected="true"
                              aria-controls="mc:69:tabs:0:panel"
                            >
                              Channel summary
                            </span>
                            <span
                              className="root-TPnFr large-1lNYH"
                              role="tab"
                              id="mc:69:tabs:1"
                              tabindex="-1"
                              aria-selected="false"
                              aria-controls="mc:69:tabs:1:panel"
                            >
                              Email
                            </span>
                          </div>
                          <span
                            className="tabIndicator-2Ph-g style-PjLwQ"
                            id="style-PjLwQ"
                          ></span>
                        </div>
                        <div
                          className="tabPanel-JU-57"
                          tabindex="-1"
                          role="tabpanel"
                          id="mc:69:tabs:0:panel"
                          aria-labelledby="mc:69:tabs:0"
                        >
                          <div className="stack-1qp4V spacing4-1xt6w pageMargin-3M-y4">
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div className="dataSetItemContainer-3kdvX">
                                  <div className="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p className="root-3TDqk medium-bold-2nZ0J">
                                        Total subscribers
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span className="wink-visually-hidden"></span>
                                  </span>
                                  <div className="cluster-3D5Qr">
                                    <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 className="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                      <div className="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p className="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                      <p className="root-3TDqk small-secondary-3_Rq2">
                                        compared to last year
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="cluster-3D5Qr">
                                  <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div
                                      role="radiogroup"
                                      className="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:71"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:72"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:73"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div className="chartContainer-2BLuE">
                                  <div
                                    data-highcharts-chart="0"
                                    id="style-yX5Jf"
                                    className="style-yX5Jf"
                                  >
                                    <div
                                      id="highcharts-590lkmd-0"
                                      dir="ltr"
                                      className="highcharts-container  style-ePfTB"
                                    >
                                      <svg
                                        version="1.1"
                                        className="highcharts-root"
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                          fontSize: "1rem",
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="604"
                                        height="266"
                                        viewBox="0 0 604 266"
                                        role="img"
                                        aria-label="Chart title"
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
                                          <clipPath id="highcharts-590lkmd-1-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="547"
                                              height="144"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-590lkmd-36-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="547"
                                              height="144"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                        <rect
                                          fill="#ffffff"
                                          className="highcharts-background"
                                          filter="none"
                                          x="0"
                                          y="0"
                                          width="604"
                                          height="266"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-background"
                                          x="47"
                                          y="10"
                                          width="547"
                                          height="144"
                                          filter="none"
                                        ></rect>
                                        <g
                                          className="highcharts-plot-lines-0"
                                          data-z-index="0"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-plot-line "
                                            stroke="#000000"
                                            stroke-width="2"
                                          ></path>
                                        </g>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="47"
                                          y="10"
                                          width="547"
                                          height="144"
                                        ></rect>
                                        <g
                                          className="highcharts-grid highcharts-xaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 64.5 10 L 64.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 82.5 10 L 82.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 101.5 10 L 101.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 119.5 10 L 119.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 137.5 10 L 137.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 155.5 10 L 155.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 174.5 10 L 174.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 192.5 10 L 192.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 210.5 10 L 210.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 228.5 10 L 228.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 247.5 10 L 247.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 265.5 10 L 265.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 283.5 10 L 283.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 301.5 10 L 301.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 319.5 10 L 319.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 338.5 10 L 338.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 356.5 10 L 356.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 374.5 10 L 374.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 392.5 10 L 392.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 411.5 10 L 411.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 429.5 10 L 429.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 447.5 10 L 447.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 465.5 10 L 465.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 484.5 10 L 484.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 502.5 10 L 502.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 520.5 10 L 520.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 538.5 10 L 538.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 557.5 10 L 557.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 575.5 10 L 575.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 593.5 10 L 593.5 154"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 46.5 10 L 46.5 154"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-grid highcharts-yaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 47 82.5 L 594 82.5"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-xaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="1"
                                            data-z-index="7"
                                            d="M 47 154.5 L 594 154.5"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-yaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="0"
                                            data-z-index="7"
                                            d="M 47 10 L 47 154"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-series-group"
                                          data-z-index="3"
                                          filter="none"
                                        >
                                          <g
                                            className="highcharts-series highcharts-series-0 highcharts-line-series"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="url(#highcharts-590lkmd-36-)"
                                          >
                                            <path
                                              fill="none"
                                              d="M 9.1166666666667 72 L 27.35 72 L 45.583333333334 72 L 63.816666666667 72 L 82.05 72 L 100.28333333333 72 L 118.51666666667 72 L 136.75 72 L 154.98333333334 72 L 173.21666666667 72 L 191.45 72 L 209.68333333334 72 L 227.91666666667 72 L 246.15 72 L 264.38333333334 72 L 282.61666666667 72 L 300.85 72 L 319.08333333334 72 L 337.31666666667 72 L 355.55 72 L 373.78333333334 72 L 392.01666666667 72 L 410.25 72 L 428.48333333334 72 L 446.71666666667 72 L 464.95 72 L 483.18333333334 72 L 501.41666666667 72 L 519.65 72 L 537.88333333334 72"
                                              className="highcharts-graph"
                                              data-z-index="1"
                                              stroke="#2B77CC"
                                              stroke-width="2"
                                              stroke-linejoin="round"
                                              stroke-linecap="round"
                                              filter="none"
                                            ></path>
                                            <path
                                              fill="none"
                                              d="M 9.1166666666667 72 L 27.35 72 L 45.583333333334 72 L 63.816666666667 72 L 82.05 72 L 100.28333333333 72 L 118.51666666667 72 L 136.75 72 L 154.98333333334 72 L 173.21666666667 72 L 191.45 72 L 209.68333333334 72 L 227.91666666667 72 L 246.15 72 L 264.38333333334 72 L 282.61666666667 72 L 300.85 72 L 319.08333333334 72 L 337.31666666667 72 L 355.55 72 L 373.78333333334 72 L 392.01666666667 72 L 410.25 72 L 428.48333333334 72 L 446.71666666667 72 L 464.95 72 L 483.18333333334 72 L 501.41666666667 72 L 519.65 72 L 537.88333333334 72"
                                              data-z-index="2"
                                              className="highcharts-tracker-line"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke="rgba(192,192,192,0.0001)"
                                              stroke-width="22"
                                            ></path>
                                          </g>
                                          <g
                                            className="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="none"
                                          >
                                            <path
                                              fill="#2B77CC"
                                              d="M 9 76 A 4 4 0 1 1 9.003999999333336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 27 76 A 4 4 0 1 1 27.003999999333335 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 45 76 A 4 4 0 1 1 45.00399999933334 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 63 76 A 4 4 0 1 1 63.00399999933334 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 82 76 A 4 4 0 1 1 82.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 100 76 A 4 4 0 1 1 100.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 118 76 A 4 4 0 1 1 118.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 136 76 A 4 4 0 1 1 136.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 154 76 A 4 4 0 1 1 154.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 173 76 A 4 4 0 1 1 173.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 191 76 A 4 4 0 1 1 191.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 209 76 A 4 4 0 1 1 209.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 227 76 A 4 4 0 1 1 227.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 246 76 A 4 4 0 1 1 246.00399999933333 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 264 76 A 4 4 0 1 1 264.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 282 76 A 4 4 0 1 1 282.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 300 76 A 4 4 0 1 1 300.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 319 76 A 4 4 0 1 1 319.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 337 76 A 4 4 0 1 1 337.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 355 76 A 4 4 0 1 1 355.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 373 76 A 4 4 0 1 1 373.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 392 76 A 4 4 0 1 1 392.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 410 76 A 4 4 0 1 1 410.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 428 76 A 4 4 0 1 1 428.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 446 76 A 4 4 0 1 1 446.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 464 76 A 4 4 0 1 1 464.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 483 76 A 4 4 0 1 1 483.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 501 76 A 4 4 0 1 1 501.00399999933336 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 519 76 A 4 4 0 1 1 519.0039999993334 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 537 76 A 4 4 0 1 1 537.0039999993334 75.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                          </g>
                                        </g>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          className="highcharts-subtitle style-7pY3o"
                                          data-z-index="4"
                                          y="21"
                                          id="style-7pY3o"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          className="highcharts-caption style-8JVzm"
                                          data-z-index="4"
                                          y="260"
                                          id="style-8JVzm"
                                        ></text>
                                        <text
                                          x="302"
                                          text-anchor="middle"
                                          className="highcharts-title style-eetv4"
                                          data-z-index="4"
                                          y="19"
                                          id="style-eetv4"
                                        ></text>
                                        <g
                                          className="highcharts-axis-labels highcharts-xaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="59.18079605180804"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 59.18079605180804 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-SriTQ"
                                            className="style-SriTQ"
                                          >
                                            Mar 20
                                          </text>
                                          <text
                                            x="77.41412938514205"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 77.41412938514205 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-HHLJr"
                                            className="style-HHLJr"
                                          >
                                            Mar 21
                                          </text>
                                          <text
                                            x="95.64746271847505"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 95.64746271847505 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-Wy45e"
                                            className="style-Wy45e"
                                          >
                                            Mar 22
                                          </text>
                                          <text
                                            x="113.88079605180505"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 113.88079605180505 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-eAbiO"
                                            className="style-eAbiO"
                                          >
                                            Mar 23
                                          </text>
                                          <text
                                            x="132.11412938514505"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 132.11412938514505 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-Lph3j"
                                            className="style-Lph3j"
                                          >
                                            Mar 24
                                          </text>
                                          <text
                                            x="150.34746271847504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 150.34746271847504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-kRPVi"
                                            className="style-kRPVi"
                                          >
                                            Mar 25
                                          </text>
                                          <text
                                            x="168.58079605181504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 168.58079605181504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-ffvTS"
                                            className="style-ffvTS"
                                          >
                                            Mar 26
                                          </text>
                                          <text
                                            x="186.81412938514504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 186.81412938514504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-qylbx"
                                            className="style-qylbx"
                                          >
                                            Mar 27
                                          </text>
                                          <text
                                            x="205.04746271847503"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 205.04746271847503 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-jDOoG"
                                            className="style-jDOoG"
                                          >
                                            Mar 28
                                          </text>
                                          <text
                                            x="223.28079605181503"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 223.28079605181503 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-xVFpr"
                                            className="style-xVFpr"
                                          >
                                            Mar 29
                                          </text>
                                          <text
                                            x="241.51412938514503"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 241.51412938514503 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-cvv1L"
                                            className="style-cvv1L"
                                          >
                                            Mar 30
                                          </text>
                                          <text
                                            x="259.74746271847505"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 259.74746271847505 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-jseaD"
                                            className="style-jseaD"
                                          >
                                            Mar 31
                                          </text>
                                          <text
                                            x="277.98079605181505"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 277.98079605181505 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-5h1NS"
                                            className="style-5h1NS"
                                          >
                                            Apr 01
                                          </text>
                                          <text
                                            x="296.21412938514504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 296.21412938514504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-671DY"
                                            className="style-671DY"
                                          >
                                            Apr 02
                                          </text>
                                          <text
                                            x="314.44746271847504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 314.44746271847504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-Ar4C9"
                                            className="style-Ar4C9"
                                          >
                                            Apr 03
                                          </text>
                                          <text
                                            x="332.68079605181504"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 332.68079605181504 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-xE3yC"
                                            className="style-xE3yC"
                                          >
                                            Apr 04
                                          </text>
                                          <text
                                            x="350.91412938514503"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 350.91412938514503 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-mQsDf"
                                            className="style-mQsDf"
                                          >
                                            Apr 05
                                          </text>
                                          <text
                                            x="369.147462718475"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 369.147462718475 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-tjNhK"
                                            className="style-tjNhK"
                                          >
                                            Apr 06
                                          </text>
                                          <text
                                            x="387.380796051815"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 387.380796051815 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-XAoIy"
                                            className="style-XAoIy"
                                          >
                                            Apr 07
                                          </text>
                                          <text
                                            x="405.614129385145"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 405.614129385145 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-RtcWr"
                                            className="style-RtcWr"
                                          >
                                            Apr 08
                                          </text>
                                          <text
                                            x="423.847462718475"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 423.847462718475 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-UeOrO"
                                            className="style-UeOrO"
                                          >
                                            Apr 09
                                          </text>
                                          <text
                                            x="442.080796051815"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 442.080796051815 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-X4oak"
                                            className="style-X4oak"
                                          >
                                            Apr 10
                                          </text>
                                          <text
                                            x="460.31412938514507"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 460.31412938514507 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-TOSwU"
                                            className="style-TOSwU"
                                          >
                                            Apr 11
                                          </text>
                                          <text
                                            x="478.54746271847506"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 478.54746271847506 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-YOVcS"
                                            className="style-YOVcS"
                                          >
                                            Apr 12
                                          </text>
                                          <text
                                            x="496.78079605181506"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 496.78079605181506 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-pxZII"
                                            className="style-pxZII"
                                          >
                                            Apr 13
                                          </text>
                                          <text
                                            x="515.014129385145"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 515.014129385145 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-jilPF"
                                            className="style-jilPF"
                                          >
                                            Apr 14
                                          </text>
                                          <text
                                            x="533.2474627184749"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 533.2474627184749 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-LOe1o"
                                            className="style-LOe1o"
                                          >
                                            Apr 15
                                          </text>
                                          <text
                                            x="551.480796051815"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 551.480796051815 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-sfH4Q"
                                            className="style-sfH4Q"
                                          >
                                            Apr 16
                                          </text>
                                          <text
                                            x="569.7141293851449"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 569.7141293851449 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-w3U5r"
                                            className="style-w3U5r"
                                          >
                                            Apr 17
                                          </text>
                                          <text
                                            x="587.947462718475"
                                            text-anchor="end"
                                            transform="translate(0,0) rotate(-45 587.947462718475 178)"
                                            y="178"
                                            opacity="1"
                                            id="style-1SV36"
                                            className="style-1SV36"
                                          >
                                            Apr 18
                                          </text>
                                        </g>
                                        <g
                                          className="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="32"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="88"
                                            opacity="1"
                                            id="style-CRImX"
                                            className="style-CRImX"
                                          >
                                            500
                                          </text>
                                        </g>
                                        <g
                                          className="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(524,220)"
                                        >
                                          <rect
                                            fill="none"
                                            className="highcharts-legend-box"
                                            rx="0"
                                            ry="0"
                                            stroke="#999999"
                                            stroke-width="0"
                                            filter="none"
                                            x="0"
                                            y="0"
                                            width="69"
                                            height="31"
                                          ></rect>
                                          <g data-z-index="1">
                                            <g>
                                              <g
                                                className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                                                data-z-index="1"
                                                transform="translate(8,3)"
                                              >
                                                <path
                                                  fill="none"
                                                  className="highcharts-graph"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  d="M 1 14 L 15 14"
                                                  stroke="#2B77CC"
                                                ></path>
                                                <path
                                                  fill="#2B77CC"
                                                  d="M 8 18 A 4 4 0 1 1 8.003999999333336 17.99999800000017 Z"
                                                  className="highcharts-point"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                ></path>
                                                <text
                                                  x="21"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  y="18"
                                                  id="style-8naYg"
                                                  className="style-8naYg"
                                                >
                                                  Email
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="stack-1qp4V spacing2-3AKCb chartDetails-3_GLs">
                                  <p className="root-3TDqk medium-bold-2nZ0J metaDataMargin-1PsCR">
                                    Total subscribers by channel
                                  </p>
                                  <div className="chartDetailsColumns-i9DuQ cluster-3D5Qr">
                                    <div className="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-lslRU"
                                        id="style-lslRU"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelLeft-16UKc">
                                          Email
                                        </p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-WiN2i"
                                        id="style-WiN2i"
                                      >
                                        <p className="root-3TDqk medium-bold-2nZ0J breakdownLabel-3rbtq"></p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-b955v"
                                        id="style-b955v"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelRight-2UoAF">
                                          0
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tabPanel-JU-57"
                          tabindex="-1"
                          hidden=""
                          role="tabpanel"
                          id="mc:69:tabs:1:panel"
                          aria-labelledby="mc:69:tabs:1"
                        >
                          <div className="stack-1qp4V spacing4-1xt6w pageMargin-3M-y4">
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div className="dataSetItemContainer-3kdvX">
                                  <div className="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p className="root-3TDqk medium-bold-2nZ0J">
                                        Total subscribers
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span className="wink-visually-hidden"></span>
                                  </span>
                                  <div className="cluster-3D5Qr">
                                    <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 className="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                      <div className="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p className="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                      <p className="root-3TDqk small-secondary-3_Rq2">
                                        compared to last year
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="cluster-3D5Qr">
                                  <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div
                                      role="radiogroup"
                                      className="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:75"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:76"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:77"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div className="chartContainer-2BLuE">
                                  <div
                                    data-highcharts-chart="1"
                                    id="style-VUEyM"
                                    className="style-VUEyM"
                                  >
                                    <div
                                      id="highcharts-590lkmd-2"
                                      dir="ltr"
                                      className="highcharts-container  style-RtYE1"
                                    >
                                      <svg
                                        version="1.1"
                                        className="highcharts-root"
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                          fontSize: "1rem",
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="600"
                                        height="266"
                                        viewBox="0 0 600 266"
                                        role="img"
                                        aria-label="Chart title"
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
                                          <clipPath id="highcharts-590lkmd-3-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="543"
                                              height="168"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-590lkmd-69-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="543"
                                              height="168"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                        <rect
                                          fill="#ffffff"
                                          className="highcharts-background"
                                          filter="none"
                                          x="0"
                                          y="0"
                                          width="600"
                                          height="266"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-background"
                                          x="47"
                                          y="10"
                                          width="543"
                                          height="168"
                                          filter="none"
                                        ></rect>
                                        <g
                                          className="highcharts-plot-lines-0"
                                          data-z-index="0"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-plot-line "
                                            stroke="#000000"
                                            stroke-width="2"
                                          ></path>
                                        </g>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="47"
                                          y="10"
                                          width="543"
                                          height="168"
                                        ></rect>
                                        <g
                                          className="highcharts-grid highcharts-xaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 64.5 10 L 64.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 82.5 10 L 82.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 100.5 10 L 100.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 118.5 10 L 118.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 137.5 10 L 137.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 155.5 10 L 155.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 173.5 10 L 173.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 191.5 10 L 191.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 209.5 10 L 209.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 227.5 10 L 227.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 245.5 10 L 245.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 263.5 10 L 263.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 281.5 10 L 281.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 299.5 10 L 299.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 318.5 10 L 318.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 336.5 10 L 336.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 354.5 10 L 354.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 372.5 10 L 372.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 390.5 10 L 390.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 408.5 10 L 408.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 426.5 10 L 426.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 444.5 10 L 444.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 462.5 10 L 462.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 480.5 10 L 480.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 499.5 10 L 499.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 517.5 10 L 517.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 535.5 10 L 535.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 553.5 10 L 553.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 571.5 10 L 571.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 589.5 10 L 589.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 46.5 10 L 46.5 178"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-grid highcharts-yaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 47 94.5 L 590 94.5"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-xaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="1"
                                            data-z-index="7"
                                            d="M 47 178.5 L 590 178.5"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-yaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="0"
                                            data-z-index="7"
                                            d="M 47 10 L 47 178"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-series-group"
                                          data-z-index="3"
                                          filter="none"
                                        >
                                          <g
                                            className="highcharts-series highcharts-series-0 highcharts-line-series"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="url(#highcharts-590lkmd-69-)"
                                          >
                                            <path
                                              fill="none"
                                              d="M 9.05 84 L 27.15 84 L 45.25 84 L 63.35 84 L 81.45 84 L 99.55 84 L 117.65 84 L 135.75 84 L 153.85 84 L 171.95 84 L 190.05 84 L 208.15 84 L 226.25 84 L 244.35 84 L 262.45 84 L 280.55 84 L 298.65 84 L 316.75 84 L 334.85 84 L 352.95 84 L 371.05 84 L 389.15 84 L 407.25 84 L 425.35 84 L 443.45 84 L 461.55 84 L 479.65 84 L 497.75 84 L 515.85 84 L 533.95 84"
                                              className="highcharts-graph"
                                              data-z-index="1"
                                              stroke="#2B77CC"
                                              stroke-width="2"
                                              stroke-linejoin="round"
                                              stroke-linecap="round"
                                              filter="none"
                                            ></path>
                                            <path
                                              fill="none"
                                              d="M 9.05 84 L 27.15 84 L 45.25 84 L 63.35 84 L 81.45 84 L 99.55 84 L 117.65 84 L 135.75 84 L 153.85 84 L 171.95 84 L 190.05 84 L 208.15 84 L 226.25 84 L 244.35 84 L 262.45 84 L 280.55 84 L 298.65 84 L 316.75 84 L 334.85 84 L 352.95 84 L 371.05 84 L 389.15 84 L 407.25 84 L 425.35 84 L 443.45 84 L 461.55 84 L 479.65 84 L 497.75 84 L 515.85 84 L 533.95 84"
                                              data-z-index="2"
                                              className="highcharts-tracker-line"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke="rgba(192,192,192,0.0001)"
                                              stroke-width="22"
                                            ></path>
                                          </g>
                                          <g
                                            className="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="none"
                                          >
                                            <path
                                              fill="#2B77CC"
                                              d="M 9 88 A 4 4 0 1 1 9.003999999333336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 27 88 A 4 4 0 1 1 27.003999999333335 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 45 88 A 4 4 0 1 1 45.00399999933334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 63 88 A 4 4 0 1 1 63.00399999933334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 81 88 A 4 4 0 1 1 81.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 99 88 A 4 4 0 1 1 99.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 117 88 A 4 4 0 1 1 117.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 135 88 A 4 4 0 1 1 135.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 153 88 A 4 4 0 1 1 153.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 171 88 A 4 4 0 1 1 171.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 190 88 A 4 4 0 1 1 190.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 208 88 A 4 4 0 1 1 208.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 226 88 A 4 4 0 1 1 226.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 244 88 A 4 4 0 1 1 244.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 262 88 A 4 4 0 1 1 262.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 280 88 A 4 4 0 1 1 280.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 298 88 A 4 4 0 1 1 298.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 316 88 A 4 4 0 1 1 316.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 334 88 A 4 4 0 1 1 334.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 352 88 A 4 4 0 1 1 352.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 371 88 A 4 4 0 1 1 371.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 389 88 A 4 4 0 1 1 389.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 407 88 A 4 4 0 1 1 407.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 425 88 A 4 4 0 1 1 425.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 443 88 A 4 4 0 1 1 443.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 461 88 A 4 4 0 1 1 461.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 479 88 A 4 4 0 1 1 479.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 497 88 A 4 4 0 1 1 497.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 515 88 A 4 4 0 1 1 515.0039999993334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 533 88 A 4 4 0 1 1 533.0039999993334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                          </g>
                                        </g>
                                        <text
                                          x="300"
                                          text-anchor="middle"
                                          className="highcharts-subtitle style-9BU21"
                                          data-z-index="4"
                                          y="21"
                                          id="style-9BU21"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          className="highcharts-caption style-b138L"
                                          data-z-index="4"
                                          y="260"
                                          id="style-b138L"
                                        ></text>
                                        <text
                                          x="300"
                                          text-anchor="middle"
                                          className="highcharts-title style-6QCqC"
                                          data-z-index="4"
                                          y="19"
                                          id="style-6QCqC"
                                        ></text>
                                        <g
                                          className="highcharts-axis-labels highcharts-xaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="56.05"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-C5gX7"
                                            className="style-C5gX7"
                                          ></text>
                                          <text
                                            x="74.15"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-hQQZv"
                                            className="style-hQQZv"
                                          ></text>
                                          <text
                                            x="92.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-FeZIS"
                                            className="style-FeZIS"
                                          ></text>
                                          <text
                                            x="110.35000000000001"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-96ocS"
                                            className="style-96ocS"
                                          ></text>
                                          <text
                                            x="128.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-dkbAw"
                                            className="style-dkbAw"
                                          ></text>
                                          <text
                                            x="146.54999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-wggnk"
                                            className="style-wggnk"
                                          ></text>
                                          <text
                                            x="164.64999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-NBdqC"
                                            className="style-NBdqC"
                                          ></text>
                                          <text
                                            x="182.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-lNYRw"
                                            className="style-lNYRw"
                                          ></text>
                                          <text
                                            x="200.85"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-JsEKR"
                                            className="style-JsEKR"
                                          ></text>
                                          <text
                                            x="218.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-6lAnR"
                                            className="style-6lAnR"
                                          ></text>
                                          <text
                                            x="237.04999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-WOQhn"
                                            className="style-WOQhn"
                                          ></text>
                                          <text
                                            x="255.14999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-9WNvJ"
                                            className="style-9WNvJ"
                                          ></text>
                                          <text
                                            x="273.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-8jiyg"
                                            className="style-8jiyg"
                                          ></text>
                                          <text
                                            x="291.34999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-NE4SM"
                                            className="style-NE4SM"
                                          ></text>
                                          <text
                                            x="309.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-oiRsV"
                                            className="style-oiRsV"
                                          ></text>
                                          <text
                                            x="327.55"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-wzCsO"
                                            className="style-wzCsO"
                                          ></text>
                                          <text
                                            x="345.65"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-XrVg5"
                                            className="style-XrVg5"
                                          ></text>
                                          <text
                                            x="363.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-aawsM"
                                            className="style-aawsM"
                                          ></text>
                                          <text
                                            x="381.84999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-m5oEK"
                                            className="style-m5oEK"
                                          ></text>
                                          <text
                                            x="399.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-L8bax"
                                            className="style-L8bax"
                                          ></text>
                                          <text
                                            x="418.05"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-RyF3N"
                                            className="style-RyF3N"
                                          ></text>
                                          <text
                                            x="436.15"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-Kys8p"
                                            className="style-Kys8p"
                                          ></text>
                                          <text
                                            x="454.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-hmwAW"
                                            className="style-hmwAW"
                                          ></text>
                                          <text
                                            x="472.34999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-4mY2o"
                                            className="style-4mY2o"
                                          ></text>
                                          <text
                                            x="490.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-MwKrs"
                                            className="style-MwKrs"
                                          ></text>
                                          <text
                                            x="508.55"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-OPrwC"
                                            className="style-OPrwC"
                                          ></text>
                                          <text
                                            x="526.6500000000001"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-OIHEP"
                                            className="style-OIHEP"
                                          ></text>
                                          <text
                                            x="544.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-QcMlV"
                                            className="style-QcMlV"
                                          ></text>
                                          <text
                                            x="562.85"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-oK9se"
                                            className="style-oK9se"
                                          ></text>
                                          <text
                                            x="580.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-VmLnw"
                                            className="style-VmLnw"
                                          ></text>
                                        </g>
                                        <g
                                          className="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="32"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="100"
                                            opacity="1"
                                            id="style-AB8hl"
                                            className="style-AB8hl"
                                          >
                                            500
                                          </text>
                                        </g>
                                        <g
                                          className="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(520,220)"
                                        >
                                          <rect
                                            fill="none"
                                            className="highcharts-legend-box"
                                            rx="0"
                                            ry="0"
                                            stroke="#999999"
                                            stroke-width="0"
                                            filter="none"
                                            x="0"
                                            y="0"
                                            width="69"
                                            height="31"
                                          ></rect>
                                          <g data-z-index="1">
                                            <g>
                                              <g
                                                className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                                                data-z-index="1"
                                                transform="translate(8,3)"
                                              >
                                                <path
                                                  fill="none"
                                                  className="highcharts-graph"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  d="M 1 14 L 15 14"
                                                  stroke="#2B77CC"
                                                ></path>
                                                <path
                                                  fill="#2B77CC"
                                                  d="M 8 18 A 4 4 0 1 1 8.003999999333336 17.99999800000017 Z"
                                                  className="highcharts-point"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                ></path>
                                                <text
                                                  x="21"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  y="18"
                                                  id="style-wNTQQ"
                                                  className="style-wNTQQ"
                                                >
                                                  Email
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="stack-1qp4V spacing2-3AKCb chartDetails-3_GLs">
                                  <p className="root-3TDqk medium-bold-2nZ0J metaDataMargin-1PsCR">
                                    Total subscribers by channel
                                  </p>
                                  <div className="chartDetailsColumns-i9DuQ cluster-3D5Qr">
                                    <div className="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-olmzT"
                                        id="style-olmzT"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelLeft-16UKc">
                                          Email
                                        </p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-qaGZ6"
                                        id="style-qaGZ6"
                                      >
                                        <p className="root-3TDqk medium-bold-2nZ0J breakdownLabel-3rbtq"></p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-wYG5A"
                                        id="style-wYG5A"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelRight-2UoAF">
                                          0
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tabPanel-JU-57"
                          tabindex="-1"
                          hidden=""
                          role="tabpanel"
                          id="mc:69:tabs:2:panel"
                          aria-labelledby="mc:69:tabs:2"
                        >
                          <div className="stack-1qp4V spacing4-1xt6w pageMargin-3M-y4">
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                                <div className="dataSetItemContainer-3kdvX">
                                  <div className="kaleUnderline-2dGJI">
                                    <button type="button">
                                      <p className="root-3TDqk medium-bold-2nZ0J">
                                        Total subscribers
                                      </p>
                                    </button>
                                  </div>
                                  <span role="status" aria-atomic="true">
                                    <span className="wink-visually-hidden"></span>
                                  </span>
                                  <div className="cluster-3D5Qr">
                                    <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <h3 className="heading-3-eDQNF root-PihPG">
                                        0
                                      </h3>
                                      <div className="root-3cL-b neutral-3W0gC">
                                        <span>
                                          <p className="root-3TDqk medium-bold-2nZ0J value">
                                            --
                                          </p>
                                        </span>
                                      </div>
                                      <p className="root-3TDqk small-secondary-3_Rq2">
                                        compared to last year
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="cluster-3D5Qr">
                                  <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <div
                                      role="radiogroup"
                                      className="segmentedControl-2-hHc small-1mUSe"
                                    >
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="true"
                                        aria-labelledby="mc:79"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Day
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:80"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Week
                                        </span>
                                      </button>
                                      <button
                                        className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                        role="radio"
                                        aria-checked="false"
                                        aria-labelledby="mc:81"
                                        type="button"
                                      >
                                        <span className="temporarySpan-2iF2p">
                                          Month
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cluster-3D5Qr">
                              <div className="alignItemsStretch-1lRpL justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <div className="chartContainer-2BLuE">
                                  <div
                                    data-highcharts-chart="2"
                                    id="style-kvFKe"
                                    className="style-kvFKe"
                                  >
                                    <div
                                      id="highcharts-590lkmd-4"
                                      dir="ltr"
                                      className="highcharts-container  style-RQBmR"
                                    >
                                      <svg
                                        version="1.1"
                                        className="highcharts-root"
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                          fontSize: "1rem",
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="600"
                                        height="266"
                                        viewBox="0 0 600 266"
                                        role="img"
                                        aria-label="Chart title"
                                      >
                                        <desc>
                                          Created with Highcharts 11.1.0
                                        </desc>
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
                                          <clipPath id="highcharts-590lkmd-5-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="543"
                                              height="168"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                          <clipPath id="highcharts-590lkmd-102-">
                                            <rect
                                              x="0"
                                              y="0"
                                              width="543"
                                              height="168"
                                              fill="none"
                                            ></rect>
                                          </clipPath>
                                        </defs>
                                        <rect
                                          fill="#ffffff"
                                          className="highcharts-background"
                                          filter="none"
                                          x="0"
                                          y="0"
                                          width="600"
                                          height="266"
                                          rx="0"
                                          ry="0"
                                        ></rect>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-background"
                                          x="47"
                                          y="10"
                                          width="543"
                                          height="168"
                                          filter="none"
                                        ></rect>
                                        <g
                                          className="highcharts-plot-lines-0"
                                          data-z-index="0"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-plot-line "
                                            stroke="#000000"
                                            stroke-width="2"
                                          ></path>
                                        </g>
                                        <rect
                                          fill="none"
                                          className="highcharts-plot-border"
                                          data-z-index="1"
                                          stroke="#cccccc"
                                          stroke-width="0"
                                          x="47"
                                          y="10"
                                          width="543"
                                          height="168"
                                        ></rect>
                                        <g
                                          className="highcharts-grid highcharts-xaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 64.5 10 L 64.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 82.5 10 L 82.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 100.5 10 L 100.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 118.5 10 L 118.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 137.5 10 L 137.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 155.5 10 L 155.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 173.5 10 L 173.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 191.5 10 L 191.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 209.5 10 L 209.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 227.5 10 L 227.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 245.5 10 L 245.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 263.5 10 L 263.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 281.5 10 L 281.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 299.5 10 L 299.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 318.5 10 L 318.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 336.5 10 L 336.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 354.5 10 L 354.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 372.5 10 L 372.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 390.5 10 L 390.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 408.5 10 L 408.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 426.5 10 L 426.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 444.5 10 L 444.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 462.5 10 L 462.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 480.5 10 L 480.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 499.5 10 L 499.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 517.5 10 L 517.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 535.5 10 L 535.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 553.5 10 L 553.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 571.5 10 L 571.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 589.5 10 L 589.5 178"
                                            opacity="1"
                                          ></path>
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="0"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 46.5 10 L 46.5 178"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-grid highcharts-yaxis-grid"
                                          data-z-index="1"
                                        >
                                          <path
                                            fill="none"
                                            stroke="#e6e6e6"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            data-z-index="1"
                                            className="highcharts-grid-line"
                                            d="M 47 94.5 L 590 94.5"
                                            opacity="1"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-xaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="1"
                                            data-z-index="7"
                                            d="M 47 178.5 L 590 178.5"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-axis highcharts-yaxis"
                                          data-z-index="2"
                                        >
                                          <path
                                            fill="none"
                                            className="highcharts-axis-line"
                                            stroke="#333333"
                                            stroke-width="0"
                                            data-z-index="7"
                                            d="M 47 10 L 47 178"
                                          ></path>
                                        </g>
                                        <g
                                          className="highcharts-series-group"
                                          data-z-index="3"
                                          filter="none"
                                        >
                                          <g
                                            className="highcharts-series highcharts-series-0 highcharts-line-series"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="url(#highcharts-590lkmd-102-)"
                                          >
                                            <path
                                              fill="none"
                                              d="M 9.05 84 L 27.15 84 L 45.25 84 L 63.35 84 L 81.45 84 L 99.55 84 L 117.65 84 L 135.75 84 L 153.85 84 L 171.95 84 L 190.05 84 L 208.15 84 L 226.25 84 L 244.35 84 L 262.45 84 L 280.55 84 L 298.65 84 L 316.75 84 L 334.85 84 L 352.95 84 L 371.05 84 L 389.15 84 L 407.25 84 L 425.35 84 L 443.45 84 L 461.55 84 L 479.65 84 L 497.75 84 L 515.85 84 L 533.95 84"
                                              className="highcharts-graph"
                                              data-z-index="1"
                                              stroke="#2B77CC"
                                              stroke-width="2"
                                              stroke-linejoin="round"
                                              stroke-linecap="round"
                                              filter="none"
                                            ></path>
                                            <path
                                              fill="none"
                                              d="M 9.05 84 L 27.15 84 L 45.25 84 L 63.35 84 L 81.45 84 L 99.55 84 L 117.65 84 L 135.75 84 L 153.85 84 L 171.95 84 L 190.05 84 L 208.15 84 L 226.25 84 L 244.35 84 L 262.45 84 L 280.55 84 L 298.65 84 L 316.75 84 L 334.85 84 L 352.95 84 L 371.05 84 L 389.15 84 L 407.25 84 L 425.35 84 L 443.45 84 L 461.55 84 L 479.65 84 L 497.75 84 L 515.85 84 L 533.95 84"
                                              data-z-index="2"
                                              className="highcharts-tracker-line"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke="rgba(192,192,192,0.0001)"
                                              stroke-width="22"
                                            ></path>
                                          </g>
                                          <g
                                            className="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker"
                                            data-z-index="0.1"
                                            opacity="1"
                                            transform="translate(47,10) scale(1 1)"
                                            clip-path="none"
                                          >
                                            <path
                                              fill="#2B77CC"
                                              d="M 9 88 A 4 4 0 1 1 9.003999999333336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 27 88 A 4 4 0 1 1 27.003999999333335 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 45 88 A 4 4 0 1 1 45.00399999933334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 63 88 A 4 4 0 1 1 63.00399999933334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 81 88 A 4 4 0 1 1 81.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 99 88 A 4 4 0 1 1 99.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 117 88 A 4 4 0 1 1 117.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 135 88 A 4 4 0 1 1 135.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 153 88 A 4 4 0 1 1 153.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 171 88 A 4 4 0 1 1 171.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 190 88 A 4 4 0 1 1 190.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 208 88 A 4 4 0 1 1 208.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 226 88 A 4 4 0 1 1 226.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 244 88 A 4 4 0 1 1 244.00399999933333 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 262 88 A 4 4 0 1 1 262.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 280 88 A 4 4 0 1 1 280.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 298 88 A 4 4 0 1 1 298.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 316 88 A 4 4 0 1 1 316.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 334 88 A 4 4 0 1 1 334.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 352 88 A 4 4 0 1 1 352.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 371 88 A 4 4 0 1 1 371.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 389 88 A 4 4 0 1 1 389.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 407 88 A 4 4 0 1 1 407.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 425 88 A 4 4 0 1 1 425.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 443 88 A 4 4 0 1 1 443.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 461 88 A 4 4 0 1 1 461.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 479 88 A 4 4 0 1 1 479.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 497 88 A 4 4 0 1 1 497.00399999933336 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 515 88 A 4 4 0 1 1 515.0039999993334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                            <path
                                              fill="#2B77CC"
                                              d="M 533 88 A 4 4 0 1 1 533.0039999993334 87.99999800000016 Z"
                                              stroke="#ffffff"
                                              stroke-width="0"
                                              opacity="1"
                                              className="highcharts-point"
                                            ></path>
                                          </g>
                                        </g>
                                        <text
                                          x="300"
                                          text-anchor="middle"
                                          className="highcharts-subtitle style-Wtl2y"
                                          data-z-index="4"
                                          y="21"
                                          id="style-Wtl2y"
                                        ></text>
                                        <text
                                          x="10"
                                          text-anchor="start"
                                          className="highcharts-caption style-hBBjA"
                                          data-z-index="4"
                                          y="260"
                                          id="style-hBBjA"
                                        ></text>
                                        <text
                                          x="300"
                                          text-anchor="middle"
                                          className="highcharts-title style-tSMqP"
                                          data-z-index="4"
                                          y="19"
                                          id="style-tSMqP"
                                        ></text>
                                        <g
                                          className="highcharts-axis-labels highcharts-xaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="56.05"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-jpZvH"
                                            className="style-jpZvH"
                                          ></text>
                                          <text
                                            x="74.15"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-PDClj"
                                            className="style-PDClj"
                                          ></text>
                                          <text
                                            x="92.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-oipZS"
                                            className="style-oipZS"
                                          ></text>
                                          <text
                                            x="110.35000000000001"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-LQFqA"
                                            className="style-LQFqA"
                                          ></text>
                                          <text
                                            x="128.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-dncGN"
                                            className="style-dncGN"
                                          ></text>
                                          <text
                                            x="146.54999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-3mQh2"
                                            className="style-3mQh2"
                                          ></text>
                                          <text
                                            x="164.64999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-FzaRk"
                                            className="style-FzaRk"
                                          ></text>
                                          <text
                                            x="182.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-UScvK"
                                            className="style-UScvK"
                                          ></text>
                                          <text
                                            x="200.85"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-VTYY6"
                                            className="style-VTYY6"
                                          ></text>
                                          <text
                                            x="218.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-ESErd"
                                            className="style-ESErd"
                                          ></text>
                                          <text
                                            x="237.04999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-CxxFf"
                                            className="style-CxxFf"
                                          ></text>
                                          <text
                                            x="255.14999999999998"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-tLB8j"
                                            className="style-tLB8j"
                                          ></text>
                                          <text
                                            x="273.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-2fbby"
                                            className="style-2fbby"
                                          ></text>
                                          <text
                                            x="291.34999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-OUFUE"
                                            className="style-OUFUE"
                                          ></text>
                                          <text
                                            x="309.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-dkw7L"
                                            className="style-dkw7L"
                                          ></text>
                                          <text
                                            x="327.55"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-oKWCY"
                                            className="style-oKWCY"
                                          ></text>
                                          <text
                                            x="345.65"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-JQsXB"
                                            className="style-JQsXB"
                                          ></text>
                                          <text
                                            x="363.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-Cr9lt"
                                            className="style-Cr9lt"
                                          ></text>
                                          <text
                                            x="381.84999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-hmcci"
                                            className="style-hmcci"
                                          ></text>
                                          <text
                                            x="399.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-ya428"
                                            className="style-ya428"
                                          ></text>
                                          <text
                                            x="418.05"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-TQ3hw"
                                            className="style-TQ3hw"
                                          ></text>
                                          <text
                                            x="436.15"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-s6He7"
                                            className="style-s6He7"
                                          ></text>
                                          <text
                                            x="454.25"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-tpxBg"
                                            className="style-tpxBg"
                                          ></text>
                                          <text
                                            x="472.34999999999997"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-ejrkE"
                                            className="style-ejrkE"
                                          ></text>
                                          <text
                                            x="490.45"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-pCTHK"
                                            className="style-pCTHK"
                                          ></text>
                                          <text
                                            x="508.55"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-i7wdX"
                                            className="style-i7wdX"
                                          ></text>
                                          <text
                                            x="526.6500000000001"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-IigKn"
                                            className="style-IigKn"
                                          ></text>
                                          <text
                                            x="544.75"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-dED9F"
                                            className="style-dED9F"
                                          ></text>
                                          <text
                                            x="562.85"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-imrWw"
                                            className="style-imrWw"
                                          ></text>
                                          <text
                                            x="580.95"
                                            text-anchor="middle"
                                            transform="translate(0,0)"
                                            y="206"
                                            opacity="1"
                                            id="style-WBVxE"
                                            className="style-WBVxE"
                                          ></text>
                                        </g>
                                        <g
                                          className="highcharts-axis-labels highcharts-yaxis-labels"
                                          data-z-index="7"
                                        >
                                          <text
                                            x="32"
                                            text-anchor="end"
                                            transform="translate(0,0)"
                                            y="100"
                                            opacity="1"
                                            id="style-MYRzp"
                                            className="style-MYRzp"
                                          >
                                            500
                                          </text>
                                        </g>
                                        <g
                                          className="highcharts-legend highcharts-no-tooltip"
                                          data-z-index="7"
                                          transform="translate(520,220)"
                                        >
                                          <rect
                                            fill="none"
                                            className="highcharts-legend-box"
                                            rx="0"
                                            ry="0"
                                            stroke="#999999"
                                            stroke-width="0"
                                            filter="none"
                                            x="0"
                                            y="0"
                                            width="69"
                                            height="31"
                                          ></rect>
                                          <g data-z-index="1">
                                            <g>
                                              <g
                                                className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                                                data-z-index="1"
                                                transform="translate(8,3)"
                                              >
                                                <path
                                                  fill="none"
                                                  className="highcharts-graph"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  d="M 1 14 L 15 14"
                                                  stroke="#2B77CC"
                                                ></path>
                                                <path
                                                  fill="#2B77CC"
                                                  d="M 8 18 A 4 4 0 1 1 8.003999999333336 17.99999800000017 Z"
                                                  className="highcharts-point"
                                                  stroke="#ffffff"
                                                  stroke-width="0"
                                                  opacity="1"
                                                ></path>
                                                <text
                                                  x="21"
                                                  text-anchor="start"
                                                  data-z-index="2"
                                                  y="18"
                                                  id="style-SBhxF"
                                                  className="style-SBhxF"
                                                >
                                                  Email
                                                </text>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="stack-1qp4V spacing2-3AKCb chartDetails-3_GLs">
                                  <p className="root-3TDqk medium-bold-2nZ0J metaDataMargin-1PsCR">
                                    Total subscribers by channel
                                  </p>
                                  <div className="chartDetailsColumns-i9DuQ cluster-3D5Qr">
                                    <div className="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-ioE1o"
                                        id="style-ioE1o"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelLeft-16UKc">
                                          Email
                                        </p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-N7kWN"
                                        id="style-N7kWN"
                                      >
                                        <p className="root-3TDqk medium-bold-2nZ0J breakdownLabel-3rbtq"></p>
                                      </div>
                                      <div
                                        className="stack-1qp4V spacing2-3AKCb style-vSANY"
                                        id="style-vSANY"
                                      >
                                        <p className="root-3TDqk medium-3AcAC breakdownLabelRight-2UoAF">
                                          0
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
                      <div className="container-1QcyQ">
                        <div className="header-epI_B">
                          <div className="stack-1qp4V spacing1-2v2JO titleText-1GL5B">
                            <p className="root-3TDqk heading-3-2i9Gm">
                              What's changed
                            </p>
                            <p className="root-3TDqk small-secondary-3_Rq2">
                              Mar 21, 2024 - Apr 19, 2024
                            </p>
                          </div>
                        </div>
                        <div className="section-kJ-Iy">
                          <div className="cluster-3D5Qr">
                            <div className="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div
                                data-testid="whatsChangedData"
                                className="dataSetItemContainer-3kdvX"
                              >
                                <div className="kaleUnderline-2dGJI">
                                  <button type="button">
                                    <p className="root-3TDqk medium-bold-2nZ0J">
                                      Total net subscriber growth
                                    </p>
                                  </button>
                                </div>
                                <span role="status" aria-atomic="true">
                                  <span className="wink-visually-hidden"></span>
                                </span>
                                <div className="cluster-3D5Qr">
                                  <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                    <h3 className="heading-3-eDQNF root-PihPG">
                                      0
                                    </h3>
                                    <div className="root-3cL-b neutral-3W0gC">
                                      <span>
                                        <p className="root-3TDqk medium-bold-2nZ0J value">
                                          0.00%
                                        </p>
                                      </span>
                                    </div>
                                    <p className="root-3TDqk small-secondary-3_Rq2">
                                      compared to last year
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                role="radiogroup"
                                className="segmentedControl-2-hHc small-1mUSe"
                              >
                                <button
                                  className="root-sBgFt container-3-bH7 tertiary-Wmhgk active-2tGQM textButton-3Hkxp"
                                  role="radio"
                                  aria-checked="true"
                                  type="button"
                                >
                                  <span className="temporarySpan-2iF2p">
                                    Day
                                  </span>
                                </button>
                                <button
                                  className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                  role="radio"
                                  aria-checked="false"
                                  type="button"
                                >
                                  <span className="temporarySpan-2iF2p">
                                    Week
                                  </span>
                                </button>
                                <button
                                  className="root-sBgFt container-3-bH7 tertiary-Wmhgk textButton-3Hkxp"
                                  role="radio"
                                  aria-checked="false"
                                  type="button"
                                >
                                  <span className="temporarySpan-2iF2p">
                                    Month
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            data-highcharts-chart="3"
                            id="style-oMi7X"
                            className="style-oMi7X"
                          >
                            <div
                              id="highcharts-590lkmd-105"
                              dir="ltr"
                              className="highcharts-container  style-JztTs"
                            >
                              <svg
                                version="1.1"
                                className="highcharts-root"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: "1rem",
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="982"
                                height="400"
                                viewBox="0 0 982 400"
                                role="img"
                                aria-label=""
                              >
                                <desc>Created with Highcharts 11.1.0</desc>
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
                                  <clipPath id="highcharts-590lkmd-106-">
                                    <rect
                                      x="0"
                                      y="0"
                                      width="940"
                                      height="278"
                                      fill="none"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="highcharts-590lkmd-137-">
                                    <rect
                                      x="0"
                                      y="0"
                                      width="940"
                                      height="278"
                                      fill="none"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <rect
                                  fill="#ffffff"
                                  className="highcharts-background"
                                  filter="none"
                                  x="0"
                                  y="0"
                                  width="982"
                                  height="400"
                                  rx="0"
                                  ry="0"
                                ></rect>
                                <rect
                                  fill="none"
                                  className="highcharts-plot-background"
                                  x="32"
                                  y="10"
                                  width="940"
                                  height="278"
                                  filter="none"
                                ></rect>
                                <g
                                  className="highcharts-plot-lines-0"
                                  data-z-index="0"
                                >
                                  <path
                                    fill="none"
                                    className="highcharts-plot-line "
                                    stroke="#000000"
                                    stroke-width="2"
                                    d="M 32 149 L 972 149"
                                  ></path>
                                </g>
                                <g
                                  className="highcharts-grid highcharts-xaxis-grid"
                                  data-z-index="1"
                                >
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 62.5 10 L 62.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 94.5 10 L 94.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 125.5 10 L 125.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 156.5 10 L 156.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 188.5 10 L 188.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 219.5 10 L 219.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 250.5 10 L 250.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 282.5 10 L 282.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 313.5 10 L 313.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 344.5 10 L 344.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 376.5 10 L 376.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 407.5 10 L 407.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 438.5 10 L 438.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 470.5 10 L 470.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 501.5 10 L 501.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 532.5 10 L 532.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 564.5 10 L 564.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 595.5 10 L 595.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 626.5 10 L 626.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 658.5 10 L 658.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 689.5 10 L 689.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 720.5 10 L 720.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 752.5 10 L 752.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 783.5 10 L 783.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 814.5 10 L 814.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 846.5 10 L 846.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 877.5 10 L 877.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 908.5 10 L 908.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 940.5 10 L 940.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 971.5 10 L 971.5 288"
                                    opacity="1"
                                  ></path>
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 31.5 10 L 31.5 288"
                                    opacity="1"
                                  ></path>
                                </g>
                                <g
                                  className="highcharts-grid highcharts-yaxis-grid"
                                  data-z-index="1"
                                >
                                  <path
                                    fill="none"
                                    stroke="#e6e6e6"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    data-z-index="1"
                                    className="highcharts-grid-line"
                                    d="M 32 149.5 L 972 149.5"
                                    opacity="1"
                                  ></path>
                                </g>
                                <rect
                                  fill="none"
                                  className="highcharts-plot-border"
                                  data-z-index="1"
                                  stroke="#cccccc"
                                  stroke-width="0"
                                  x="32"
                                  y="10"
                                  width="940"
                                  height="278"
                                ></rect>
                                <g
                                  className="highcharts-axis highcharts-xaxis"
                                  data-z-index="2"
                                >
                                  <path
                                    fill="none"
                                    className="highcharts-axis-line"
                                    stroke="#333333"
                                    stroke-width="1"
                                    data-z-index="7"
                                    d="M 32 288.5 L 972 288.5"
                                  ></path>
                                </g>
                                <g
                                  className="highcharts-axis highcharts-yaxis"
                                  data-z-index="2"
                                >
                                  <path
                                    fill="none"
                                    className="highcharts-axis-line"
                                    stroke="#333333"
                                    stroke-width="0"
                                    data-z-index="7"
                                    d="M 32 10 L 32 288"
                                  ></path>
                                </g>
                                <g
                                  className="highcharts-series-group"
                                  data-z-index="3"
                                  filter="none"
                                >
                                  <g
                                    className="highcharts-series highcharts-series-0 highcharts-line-series"
                                    data-z-index="0.1"
                                    opacity="1"
                                    transform="translate(32,10) scale(1 1)"
                                    clip-path="url(#highcharts-590lkmd-137-)"
                                  >
                                    <path
                                      fill="none"
                                      d="M 15.666666666667 139 L 47 139 L 78.333333333334 139 L 109.66666666667 139 L 141 139 L 172.33333333334 139 L 203.66666666667 139 L 235 139 L 266.33333333334 139 L 297.66666666667 139 L 329 139 L 360.33333333334 139 L 391.66666666667 139 L 423 139 L 454.33333333334 139 L 485.66666666667 139 L 517 139 L 548.33333333334 139 L 579.66666666667 139 L 611 139 L 642.33333333334 139 L 673.66666666667 139 L 705 139 L 736.33333333334 139 L 767.66666666667 139 L 799 139 L 830.33333333334 139 L 861.66666666667 139 L 893 139 L 924.33333333334 139"
                                      className="highcharts-graph"
                                      data-z-index="1"
                                      stroke="#769C00"
                                      stroke-width="2"
                                      stroke-linejoin="round"
                                      stroke-linecap="round"
                                      filter="none"
                                    ></path>
                                    <path
                                      fill="none"
                                      d="M 15.666666666667 139 L 47 139 L 78.333333333334 139 L 109.66666666667 139 L 141 139 L 172.33333333334 139 L 203.66666666667 139 L 235 139 L 266.33333333334 139 L 297.66666666667 139 L 329 139 L 360.33333333334 139 L 391.66666666667 139 L 423 139 L 454.33333333334 139 L 485.66666666667 139 L 517 139 L 548.33333333334 139 L 579.66666666667 139 L 611 139 L 642.33333333334 139 L 673.66666666667 139 L 705 139 L 736.33333333334 139 L 767.66666666667 139 L 799 139 L 830.33333333334 139 L 861.66666666667 139 L 893 139 L 924.33333333334 139"
                                      data-z-index="2"
                                      className="highcharts-tracker-line"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke="rgba(192,192,192,0.0001)"
                                      stroke-width="22"
                                    ></path>
                                  </g>
                                  <g
                                    className="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker"
                                    data-z-index="0.1"
                                    opacity="1"
                                    transform="translate(32,10) scale(1 1)"
                                    clip-path="none"
                                  >
                                    <path
                                      fill="#769C00"
                                      d="M 15 143 A 4 4 0 1 1 15.003999999333336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 47 143 A 4 4 0 1 1 47.00399999933334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 78 143 A 4 4 0 1 1 78.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 109 143 A 4 4 0 1 1 109.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 141 143 A 4 4 0 1 1 141.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 172 143 A 4 4 0 1 1 172.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 203 143 A 4 4 0 1 1 203.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 235 143 A 4 4 0 1 1 235.00399999933333 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 266 143 A 4 4 0 1 1 266.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 297 143 A 4 4 0 1 1 297.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 329 143 A 4 4 0 1 1 329.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 360 143 A 4 4 0 1 1 360.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 391 143 A 4 4 0 1 1 391.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 423 143 A 4 4 0 1 1 423.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 454 143 A 4 4 0 1 1 454.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 485 143 A 4 4 0 1 1 485.00399999933336 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 517 143 A 4 4 0 1 1 517.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 548 143 A 4 4 0 1 1 548.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 579 143 A 4 4 0 1 1 579.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 611 143 A 4 4 0 1 1 611.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 642 143 A 4 4 0 1 1 642.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 673 143 A 4 4 0 1 1 673.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 705 143 A 4 4 0 1 1 705.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 736 143 A 4 4 0 1 1 736.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 767 143 A 4 4 0 1 1 767.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 799 143 A 4 4 0 1 1 799.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 830 143 A 4 4 0 1 1 830.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 861 143 A 4 4 0 1 1 861.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 893 143 A 4 4 0 1 1 893.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                    <path
                                      fill="#769C00"
                                      d="M 924 143 A 4 4 0 1 1 924.0039999993334 142.99999800000018 Z"
                                      stroke="#ffffff"
                                      stroke-width="0"
                                      opacity="1"
                                      className="highcharts-point"
                                    ></path>
                                  </g>
                                </g>
                                <text
                                  x="10"
                                  className="highcharts-title style-jYJKD"
                                  data-z-index="4"
                                  y="19"
                                  id="style-jYJKD"
                                ></text>
                                <text
                                  x="491"
                                  text-anchor="middle"
                                  className="highcharts-subtitle style-t5fYG"
                                  data-z-index="4"
                                  y="21"
                                  id="style-t5fYG"
                                ></text>
                                <text
                                  x="10"
                                  text-anchor="start"
                                  className="highcharts-caption style-z1Rlo"
                                  data-z-index="4"
                                  y="394"
                                  id="style-z1Rlo"
                                ></text>
                                <g
                                  className="highcharts-legend highcharts-no-tooltip"
                                  data-z-index="7"
                                  transform="translate(843,354)"
                                >
                                  <rect
                                    fill="none"
                                    className="highcharts-legend-box"
                                    rx="0"
                                    ry="0"
                                    stroke="#999999"
                                    stroke-width="0"
                                    filter="none"
                                    x="0"
                                    y="0"
                                    width="129"
                                    height="31"
                                  ></rect>
                                  <g data-z-index="1">
                                    <g>
                                      <g
                                        className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                                        data-z-index="1"
                                        transform="translate(8,3)"
                                      >
                                        <path
                                          fill="none"
                                          className="highcharts-graph"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          d="M 1 14 L 15 14"
                                          stroke="#769C00"
                                        ></path>
                                        <path
                                          fill="#769C00"
                                          d="M 8 18 A 4 4 0 1 1 8.003999999333336 17.99999800000017 Z"
                                          className="highcharts-point"
                                          stroke="#ffffff"
                                          stroke-width="0"
                                          opacity="1"
                                        ></path>
                                        <text
                                          x="21"
                                          text-anchor="start"
                                          data-z-index="2"
                                          y="18"
                                          id="style-YvoKA"
                                          className="style-YvoKA"
                                        >
                                          Next Web Lines
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  className="highcharts-axis-labels highcharts-xaxis-labels"
                                  data-z-index="7"
                                >
                                  <text
                                    x="50.730796051809044"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 50.730796051809044 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-tLlvn"
                                    className="style-tLlvn"
                                  >
                                    Mar 21
                                  </text>
                                  <text
                                    x="82.06412938514204"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 82.06412938514204 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-dbJrf"
                                    className="style-dbJrf"
                                  >
                                    Mar 22
                                  </text>
                                  <text
                                    x="113.39746271847504"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 113.39746271847504 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-2cWaW"
                                    className="style-2cWaW"
                                  >
                                    Mar 23
                                  </text>
                                  <text
                                    x="144.73079605181505"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 144.73079605181505 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-W8nfP"
                                    className="style-W8nfP"
                                  >
                                    Mar 24
                                  </text>
                                  <text
                                    x="176.06412938514507"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 176.06412938514507 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-GxoKv"
                                    className="style-GxoKv"
                                  >
                                    Mar 25
                                  </text>
                                  <text
                                    x="207.39746271847505"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 207.39746271847505 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-E6joq"
                                    className="style-E6joq"
                                  >
                                    Mar 26
                                  </text>
                                  <text
                                    x="238.73079605181505"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 238.73079605181505 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-aSZOv"
                                    className="style-aSZOv"
                                  >
                                    Mar 27
                                  </text>
                                  <text
                                    x="270.064129385145"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 270.064129385145 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-ML1wQ"
                                    className="style-ML1wQ"
                                  >
                                    Mar 28
                                  </text>
                                  <text
                                    x="301.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 301.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-CC11Z"
                                    className="style-CC11Z"
                                  >
                                    Mar 29
                                  </text>
                                  <text
                                    x="332.73079605181505"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 332.73079605181505 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-HIYsn"
                                    className="style-HIYsn"
                                  >
                                    Mar 30
                                  </text>
                                  <text
                                    x="364.064129385145"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 364.064129385145 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-lCjH2"
                                    className="style-lCjH2"
                                  >
                                    Mar 31
                                  </text>
                                  <text
                                    x="395.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 395.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-AsOUQ"
                                    className="style-AsOUQ"
                                  >
                                    Apr 01
                                  </text>
                                  <text
                                    x="426.73079605181505"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 426.73079605181505 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-GABt1"
                                    className="style-GABt1"
                                  >
                                    Apr 02
                                  </text>
                                  <text
                                    x="458.064129385145"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 458.064129385145 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-zZkco"
                                    className="style-zZkco"
                                  >
                                    Apr 03
                                  </text>
                                  <text
                                    x="489.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 489.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-8eKBv"
                                    className="style-8eKBv"
                                  >
                                    Apr 04
                                  </text>
                                  <text
                                    x="520.730796051815"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 520.730796051815 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-vEMm8"
                                    className="style-vEMm8"
                                  >
                                    Apr 05
                                  </text>
                                  <text
                                    x="552.0641293851451"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 552.0641293851451 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-oCWtY"
                                    className="style-oCWtY"
                                  >
                                    Apr 06
                                  </text>
                                  <text
                                    x="583.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 583.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-GBOoV"
                                    className="style-GBOoV"
                                  >
                                    Apr 07
                                  </text>
                                  <text
                                    x="614.730796051815"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 614.730796051815 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-cEXn6"
                                    className="style-cEXn6"
                                  >
                                    Apr 08
                                  </text>
                                  <text
                                    x="646.0641293851451"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 646.0641293851451 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-o7NDn"
                                    className="style-o7NDn"
                                  >
                                    Apr 09
                                  </text>
                                  <text
                                    x="677.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 677.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-hVqR6"
                                    className="style-hVqR6"
                                  >
                                    Apr 10
                                  </text>
                                  <text
                                    x="708.730796051815"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 708.730796051815 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-ZIok9"
                                    className="style-ZIok9"
                                  >
                                    Apr 11
                                  </text>
                                  <text
                                    x="740.0641293851451"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 740.0641293851451 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-nqn4i"
                                    className="style-nqn4i"
                                  >
                                    Apr 12
                                  </text>
                                  <text
                                    x="771.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 771.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-NiROE"
                                    className="style-NiROE"
                                  >
                                    Apr 13
                                  </text>
                                  <text
                                    x="802.730796051815"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 802.730796051815 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-xFaEQ"
                                    className="style-xFaEQ"
                                  >
                                    Apr 14
                                  </text>
                                  <text
                                    x="834.0641293851451"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 834.0641293851451 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-6NqG7"
                                    className="style-6NqG7"
                                  >
                                    Apr 15
                                  </text>
                                  <text
                                    x="865.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 865.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-tRKgM"
                                    className="style-tRKgM"
                                  >
                                    Apr 16
                                  </text>
                                  <text
                                    x="896.730796051815"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 896.730796051815 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-sHByM"
                                    className="style-sHByM"
                                  >
                                    Apr 17
                                  </text>
                                  <text
                                    x="928.0641293851451"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 928.0641293851451 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-oAboB"
                                    className="style-oAboB"
                                  >
                                    Apr 18
                                  </text>
                                  <text
                                    x="959.397462718475"
                                    text-anchor="end"
                                    transform="translate(0,0) rotate(-45 959.397462718475 312)"
                                    y="312"
                                    opacity="1"
                                    id="style-n9OZA"
                                    className="style-n9OZA"
                                  >
                                    Apr 19
                                  </text>
                                </g>
                                <g
                                  className="highcharts-axis-labels highcharts-yaxis-labels"
                                  data-z-index="7"
                                >
                                  <text
                                    x="17"
                                    text-anchor="end"
                                    transform="translate(0,0)"
                                    y="155"
                                    opacity="1"
                                    id="style-IlFUX"
                                    className="style-IlFUX"
                                  >
                                    0
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default AudienceAnalytics;

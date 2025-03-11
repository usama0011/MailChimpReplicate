import React from "react";
import "../styles/Discover.css";
import { Link } from "react-router-dom";

const Discover = () => {
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
                                    src="https://img.icons8.com/?size=50&id=66724&format=png"
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
              <div class="root-3uY95 snipcss-oNcWW">
                <div class="container-2aeSm">
                  <header class="root-1rj4d standard-2H4cn header-3IL6q">
                    <div class="cluster-3D5Qr nowrap-34OZ-">
                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <div class="stack-1qp4V style-dTYsN" id="style-dTYsN">
                          <h1 class="heading-3-eDQNF root-PihPG">Discover</h1>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <div class="actions-1bN9W cluster-3D5Qr">
                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <a
                          class="root-sBgFt root-22EAH"
                          href="https://mailchimp.com/developer/integration-partner-program/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Become an integration partner
                        </a>
                      </div>
                    </div>
                  </header>
                </div>
                <div class="hero-QtfRj">
                  <div class="wrapper-208t4 -mc-wink-components-ContentArea-ContentArea-standard">
                    <div class="container-25wnN">
                      <div class="switcher-2RqDX">
                        <div class="spacing5-12-nZ">
                          <div id="style-7kzQ4" class="style-7kzQ4">
                            <h2 class="heading-2-ZDzRe root-PihPG">
                              Connect apps &amp; integrations
                            </h2>
                          </div>
                          <div id="style-2CLDi" class="style-2CLDi">
                            <div class="root-2RFjU">
                              <div class="before-2EDUs">
                                <label
                                  class="mcds-label-default wink-visually-hidden"
                                  id="mc:70"
                                  for="mc:69"
                                >
                                  Integration Search
                                </label>
                              </div>
                              <div class="inputWrapper-TVkf7">
                                <input
                                  type="search"
                                  id="mc:69"
                                  aria-invalid="false"
                                  placeholder="Search for an integration name or category"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="root-1rj4d standard-2H4cn withBottomGutter-1OHF7 withTopGutter-PMsAu">
                  <div class="stack-1qp4V spacing6-nznRY">
                    <div class="switcher-2RqDX">
                      <div class="spacing8-B_6pF">
                        <div id="style-StYnG" class="style-StYnG">
                          <div class="stack-1qp4V spacing6-nznRY">
                            <div class="stack-1qp4V spacing6-nznRY">
                              <div>
                                <fieldset class="fieldset-3ISha">
                                  <legend class="mcds-label-default">
                                    Discover
                                  </legend>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:76"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:77" for="mc:76" class="">
                                        Made By Mailchimp
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:80"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:81" for="mc:80" class="">
                                        Featured
                                      </label>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                            <div class="stack-1qp4V spacing6-nznRY">
                              <div>
                                <fieldset class="fieldset-3ISha">
                                  <legend class="mcds-label-default">
                                    Category
                                  </legend>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:86"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:87" for="mc:86" class="">
                                        Analytics
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:90"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:91" for="mc:90" class="">
                                        Booking &amp; Scheduling
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:94"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:95" for="mc:94" class="">
                                        Connector Services
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:98"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:99" for="mc:98" class="">
                                        Contact Management
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:102"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:103" for="mc:102" class="">
                                        Content
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:106"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:107" for="mc:106" class="">
                                        Customer Service
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:110"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:111" for="mc:110" class="">
                                        Design
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:114"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:115" for="mc:114" class="">
                                        Developer Tools
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:118"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:119" for="mc:118" class="">
                                        E-commerce
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:122"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:123" for="mc:122" class="">
                                        Finance &amp; Accounting
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:126"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:127" for="mc:126" class="">
                                        Forms &amp; Surveys
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:130"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:131" for="mc:130" class="">
                                        Loyalty
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:134"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:135" for="mc:134" class="">
                                        Marketing
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:138"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:139" for="mc:138" class="">
                                        Payments
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:142"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:143" for="mc:142" class="">
                                        Point of Sale
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:146"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:147" for="mc:146" class="">
                                        Productivity
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:150"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:151" for="mc:150" class="">
                                        Social Media
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:154"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:155" for="mc:154" class="">
                                        Subscription Management
                                      </label>
                                    </div>
                                  </div>
                                  <div class="root-1olwd">
                                    <input
                                      class="input-2v40B"
                                      id="mc:158"
                                      type="checkbox"
                                      indeterminate="false"
                                      aria-checked="false"
                                    />
                                    <div class="text-vFMr3">
                                      <label id="mc:159" for="mc:158" class="">
                                        Ticketing &amp; Event Management
                                      </label>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="additionalContent-3YHqf">
                          <div class="stack-1qp4V spacing6-nznRY">
                            <div class="stack-1qp4V spacing4-1xt6w">
                              <div class="utilHeader-2ksyq">
                                <div class="stack-1qp4V spacing3-1OKHB searchSummery-lyRh2">
                                  <h2 class="heading-2-ZDzRe root-PihPG">
                                    Bring your tools together to make the most
                                    of your data
                                  </h2>
                                  <hr />
                                  <p class="root-3TDqk medium-3AcAC">
                                    Sync contacts, content, engagement data, and
                                    more from your other apps and platforms.
                                  </p>
                                </div>
                                <div class="sortByDropdown-3NrBW">
                                  <div class="root-1cS4q">
                                    <div class="before-fjpii">
                                      <label
                                        class="mcds-label-default wink-visually-hidden"
                                        id="mc:163"
                                        for="mc:162"
                                      >
                                        Sort By
                                      </label>
                                    </div>
                                    <div class="selectWrapper-1gG6j">
                                      <select id="mc:162">
                                        <option value="installed_count">
                                          Popularity
                                        </option>
                                        <option value="average_rating">
                                          Rating
                                        </option>
                                        <option value="name">A-Z</option>
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
                                </div>
                              </div>
                            </div>
                            <div class="stack-1qp4V spacing6-nznRY">
                              <div
                                class="root-209cT gap6-U7x7I cardContainer-26g0X style-vUSPh"
                                id="style-vUSPh"
                              >
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="e77735de-7276-415e-aa59-a8087ed8c34dinapp-appcard"
                                    href="/integrations/app?name=twitter"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe">
                                          <span class="root-3ALOt default-3A6wB">
                                            <span class="wink-visually-hidden">
                                              (
                                            </span>
                                            Made by Mailchimp
                                            <span class="wink-visually-hidden">
                                              )
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="X (Formerly Twitter)"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/6P6W4zc2L7Ev8g4k4ysbDJ/87249a7353ebeec38bd5d64fed99600b/x__formerly_twitter__logo.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            X (Formerly Twitter)
                                          </h3>
                                        </div>
                                        <div class="">
                                          <p class="root-3TDqk medium-3AcAC app-description-3puhl">
                                            Add social media content to email
                                            campaigns{" "}
                                          </p>
                                        </div>
                                        <div>
                                          <p class="root-3TDqk small-2qKd5 cost-plan-10XId">
                                            Free Plan Available
                                          </p>
                                        </div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="e77735de-7276-415e-aa59-a8087ed8c34dinstallCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="ae520805-4e45-4cb8-a079-2273d8958690inapp-appcard"
                                    href="/integrations/app?name=woocommerce"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe">
                                          <span class="root-3ALOt default-3A6wB">
                                            <span class="wink-visually-hidden">
                                              (
                                            </span>
                                            Made by Mailchimp
                                            <span class="wink-visually-hidden">
                                              )
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="WooCommerce"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/27aLLlJpTGMnGMeCtTTqo3/dcbc294c84446cc60bda570faa22d16a/woocommerce_logo.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            WooCommerce
                                          </h3>
                                        </div>
                                        <div class="">
                                          <p class="root-3TDqk medium-3AcAC app-description-3puhl">
                                            Sync your customer and order data to
                                            automate tasks
                                          </p>
                                        </div>
                                        <div>
                                          <p class="root-3TDqk small-2qKd5 cost-plan-10XId">
                                            Free Plan Available
                                          </p>
                                        </div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="ae520805-4e45-4cb8-a079-2273d8958690installCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="45a6bd49-8df0-44e6-b9d6-1c7a94960387inapp-appcard"
                                    href="/integrations/app?name=squarespace-integration"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Squarespace Integration"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/saPGuhNkMp7qL1eiZe4ww/b2d288b635464854c959082f9b9caed3/squarespace-logo-stacked-black.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Squarespace Integration
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Squarespace 6 forms integrate easily
                                            with Mailchimp lists.
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="45a6bd49-8df0-44e6-b9d6-1c7a94960387installCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="09ad8252-2728-415f-9883-fbaf21fe5b81inapp-appcard"
                                    href="/integrations/app?name=shopify"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe">
                                          <span class="root-3ALOt default-3A6wB">
                                            <span class="wink-visually-hidden">
                                              (
                                            </span>
                                            Made by Mailchimp
                                            <span class="wink-visually-hidden">
                                              )
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Shopify"
                                          src="https://storage.googleapis.com/mc-marketplace-assets-dev/aa862e90-a25c-43ff-b110-4807b87eb912.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Shopify
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Sync Shopify customers, products,
                                            and more to Mailchimp to create
                                            highly targeted campaigns
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="09ad8252-2728-415f-9883-fbaf21fe5b81installCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="0d94a1c3-8afd-4a76-b0b6-98c97d60cd1cinapp-appcard"
                                    href="/integrations/app?name=shopify-plus"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe">
                                          <span class="root-3ALOt default-3A6wB">
                                            <span class="wink-visually-hidden">
                                              (
                                            </span>
                                            Made by Mailchimp
                                            <span class="wink-visually-hidden">
                                              )
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Shopify Plus"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/4mL46vX0yZUp88rw8Gqw9W/2e52b5fcde9f6517058f9c8578dd4777/shopify-plus-logo--black.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Shopify Plus
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Sync Shopify customers, products,
                                            and purchase data to Mailchimp and
                                            access 24/7 customer support
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="0d94a1c3-8afd-4a76-b0b6-98c97d60cd1cinstallCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="b0cf2d23-0d7b-4bf5-b657-72fb0f0abc6ainapp-appcard"
                                    href="/integrations/app?name=zapier"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Zapier"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/1rFHUX2VBmsu6YCkYS0CsM/5ea7100c6fb456d07e1b9aa348fee19f/logo_black.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Zapier
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Zapier allow you to automatically
                                            pass data to and from other web
                                            services without writing a single
                                            line of code.
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="b0cf2d23-0d7b-4bf5-b657-72fb0f0abc6ainstallCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="35b5700d-57c4-441e-a857-7a8c5d00fc3cinapp-appcard"
                                    href="/integrations/app?name=mailmunch"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Mailmunch Email List Builder"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/2tE7HFnKHSw8SOKuiG0eUk/aa9322a648ed3047da0fb8d146021105/5f3a33a074c2eb1da4f1647a_Mailmunch_logo.svg"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Mailmunch Email List Builder
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Grow your Mailchimp list with
                                            Mailmunch's free exit intent popups,
                                            signup forms, and widgets.
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="35b5700d-57c4-441e-a857-7a8c5d00fc3cinstallCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="d7f7d3ea-dc45-44ad-aa30-c1eeb8867a8ainapp-appcard"
                                    href="/integrations/app?name=wordpress"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="WordPress"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/2X3kXvIpOYZb9AlsGMNvkl/3f6792c5d7b0940931ea765ce3ac5803/Wordpress_Logo.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            WordPress
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Boost visitor engagement and grow
                                            your audience with the Mailchimp
                                            block
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="d7f7d3ea-dc45-44ad-aa30-c1eeb8867a8ainstallCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="e47d6c44-55e2-463e-bbe6-6b8a768d1be7inapp-appcard"
                                    href="/integrations/app?name=gravity-forms"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Gravity Forms"
                                          src="https://images.ctfassets.net/yzco4xsimv0y/4iFLGNsXi0nLpkvPEwMaIL/9e0a050013a487c066a0ceee5c04c3ab/gf-mc.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Gravity Forms
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Grow your email list with Gravity
                                            Forms, a powerful form builder for
                                            WordPress. Create custom lead
                                            generation forms, quizzes, surveys,
                                            and more.
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="e47d6c44-55e2-463e-bbe6-6b8a768d1be7installCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="root-2V0JZ card-layout-3s3mF default-2CUpY">
                                  <a
                                    class="card marketplace-shadow"
                                    data-testid="f61d6c88-755d-471d-abd2-60077094a839inapp-appcard"
                                    href="/integrations/app?name=privy"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w card-stack-3S2lU">
                                      <div class="madeby-container-Jj3cp cluster-3D5Qr">
                                        <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe"></div>
                                      </div>
                                      <div class="image-container-3lzxT">
                                        <img
                                          alt="Privy"
                                          src="https://storage.googleapis.com/mc-marketplace-assets-dev/55b947fa-1e22-4e98-84d4-813cf2692460.png"
                                          class="card-image-3Hlwa"
                                        />
                                      </div>
                                      <div class="stack-1qp4V spacing5-3tdwQ title-description-area-2dxAv">
                                        <div class="card-header-32JW3">
                                          <h3 class="heading-3-eDQNF root-PihPG">
                                            Privy
                                          </h3>
                                        </div>
                                        <div class="cost-items-uuzmN">
                                          <p class="root-3TDqk medium-3AcAC app-description-nopaddingtop-b5Tqa">
                                            Reduce abandonment with exit-intent
                                            driven website popups &amp; banners
                                          </p>
                                        </div>
                                        <div></div>
                                      </div>
                                      <div class="app-cost-and-installs-area-2aHSP">
                                        <span
                                          class="root-3TDqk small-2qKd5 app-cost-item-3Ordb"
                                          data-testid="f61d6c88-755d-471d-abd2-60077094a839installCount"
                                        >
                                          15,000+ installs
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="cluster-3D5Qr">
                                <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing1-3SkHe">
                                  <p class="root-3TDqk small-2qKd5">
                                    <strong>1</strong> - <strong>10</strong> of{" "}
                                    <strong>328</strong>
                                  </p>
                                  <button
                                    class="root-1khsy"
                                    disabled=""
                                    data-testid="first"
                                    type="button"
                                  >
                                    <span class="wink-visually-hidden">
                                      First
                                    </span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon"
                                    >
                                      <path d="M9 6H7v12h2V6zm8.707 1.707l-1.414-1.414L10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path>
                                    </svg>
                                  </button>
                                  <button
                                    class="root-1khsy"
                                    disabled=""
                                    data-testid="previous"
                                    type="button"
                                  >
                                    <span class="wink-visually-hidden">
                                      Previous
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
                                        d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <button
                                    class="root-1khsy"
                                    data-testid="next"
                                    type="button"
                                  >
                                    <span class="wink-visually-hidden">
                                      Next
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
                                        d="M13.586 12L9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707-1.414-1.414L13.586 12z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <button
                                    class="root-1khsy"
                                    data-testid="last"
                                    type="button"
                                  >
                                    <span class="wink-visually-hidden">
                                      Last
                                    </span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon"
                                    >
                                      <path d="M15 6h2v12h-2zM6.293 7.707L10.586 12l-4.293 4.293 1.414 1.414L13.414 12 7.707 6.293z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stack-1qp4V spacing6-nznRY">
                  <div class="studyFill-1ovBO">
                    <div class="content-2o9kT">
                      <div class="contentBox-12q90" data-testid="content-box">
                        <div
                          class="root-209cT gap8-aOzlW style-ghWzi"
                          id="style-ghWzi"
                        >
                          <div id="style-v7O5h" class="style-v7O5h">
                            <div class="stack-1qp4V spacing4-1xt6w">
                              <h2 level="2" appearance="heading-4">
                                Case study
                              </h2>
                              <h3 class="heading-3-eDQNF root-PihPG">
                                How Six Barrel Soda Uses the Shopify Integration
                                to Grow their Audience and Measure ROI.
                              </h3>
                              <p class="root-3TDqk medium-3AcAC">
                                The soda syrup company puts the power of
                                Mailchimp email and Shopify together to
                                organically gather newsletter contacts, and see
                                the result of their campaigns.
                              </p>
                              <div>
                                <a
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  href="https://mailchimp.com/case-studies/six-barrel-shopify-integration-grow-email-audience-roi/"
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Learn how they do it
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div id="style-bSK4f" class="style-bSK4f">
                            <img
                              src="https://us12.admin.mailchimp.com/release/1.1.190a1dd9adafd361e1e2631c825c19fef8e2cc4fa/js-src/7855a9b376140476f77bd97633d29c7b.png"
                              alt=""
                              id="style-A7KSY"
                              class="style-A7KSY"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="stack-1qp4V spacing6-nznRY mainContainer-Cc8L-">
                    <div class="actionCardContainer-H6PWt featuredContainer-18MTS content-1sFJs">
                      <div class="stack-1qp4V spacing8-10xOR">
                        <div class="stack-1qp4V spacing2-3AKCb">
                          <h2 class="heading-2-ZDzRe root-PihPG">
                            Integration Spotlight
                          </h2>
                          <hr />
                          <p class="root-3TDqk medium-3AcAC">
                            Reach customers and drive sales with tools that help
                            you market smarter and grow faster.
                          </p>
                        </div>
                        <div
                          class="root-209cT gap6-U7x7I style-sO2TZ"
                          id="style-sO2TZ"
                        >
                          <div class="root-2V0JZ root-2VQmF default-2CUpY">
                            <figure class="rootImage-ZV4q_ imgWrapper-2CWZD jasmine-35NXE basic-RqZZf">
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTciIHZpZXdCb3g9IjAgMCA5NiA5NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yODMxXzIzNTk0KSI+CjxyZWN0IHg9IjEyIiB5PSI4LjUiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgcng9IjM2IiBmaWxsPSJ3aGl0ZSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDAwMSAyMUMzNC43NDU1IDIxIDI0IDMxLjUyMDcgMjQgNDQuNTAwMUMyNCA1Ny40NzgzIDM0Ljc0NTUgNjggNDguMDAwMSA2OEM2MS4yNTQ5IDY4IDcyIDU3LjQ3ODMgNzIgNDQuNTAwMUM3MiAzMS41MjA3IDYxLjI1NDkgMjEgNDguMDAwMSAyMVpNNTQuNjY4NyAzNS4zNjE5SDU2LjAwMjFDNjEuMTU2NyAzNS4zNjE5IDY1LjMzNTQgMzkuNDUzNSA2NS4zMzU0IDQ0LjUwMDdDNjUuMzM1NCA0OS41NDggNjEuMTU2NyA1My42Mzk3IDU2LjAwMjEgNTMuNjM5N0g0OS4zMzExVjI5LjA5NTJDNTEuMjQ1NyAyOS4wOTUyIDUyLjc5NzcgMzAuNjE0OSA1Mi43OTc3IDMyLjQ4OTdWNTAuMjQ1Mkg1Ni4wMDIxQzU5LjIzNjcgNTAuMjQ1MiA2MS44Njg2IDQ3LjY2OCA2MS44Njg2IDQ0LjUwMDdDNjEuODY4NiA0MS4zMzM1IDU5LjIzNjcgMzguNzU2NCA1Ni4wMDIxIDM4Ljc1NjRINTQuNjY4N1YzNS4zNjE5Wk0zOS45OTczIDUzLjYzODJDMzQuODQyNiA1My42MzgyIDMwLjY2MzkgNDkuNTQ2NSAzMC42NjM5IDQ0LjQ5OTJDMzAuNjYzOSAzOS40NTI1IDM0Ljg0MjYgMzUuMzYwMyAzOS45OTczIDM1LjM2MDNINDYuNjY4MlY1OS45MDQ3QzQ0Ljc1MzQgNTkuOTA0NyA0My4yMDE0IDU4LjM4NTEgNDMuMjAxNCA1Ni41MTA0VjM4Ljc1NDhIMzkuOTk3M0MzNi43NjI2IDM4Ljc1NDggMzQuMTMwNSA0MS4zMzIgMzQuMTMwNSA0NC40OTkyQzM0LjEzMDUgNDcuNjY3MSAzNi43NjI2IDUwLjI0MzYgMzkuOTk3MyA1MC4yNDM2SDQxLjMzMDZWNTMuNjM4MkgzOS45OTczWiIgZmlsbD0iIzUxOUUzNiIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfMjgzMV8yMzU5NCIgeD0iMCIgeT0iMC41IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI2Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzI4MzFfMjM1OTQiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjgzMV8yMzU5NCIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                                alt="QuickBooks Online"
                                class="img-3SYic style-7QCTK"
                                id="style-7QCTK"
                              />
                            </figure>
                            <div class="content-3kp-0">
                              <div class="stack-1qp4V spacing5-3tdwQ">
                                <p class="root-3TDqk heading-3-2i9Gm">
                                  QuickBooks Online
                                </p>
                                <p class="root-3TDqk medium-secondary-1YIN8 description-3yvMB">
                                  Bring together your marketing tools and
                                  invoice data, which could help you speed up
                                  sales and accelerate your growth.
                                </p>
                                <div class="app-cost-tphuT">
                                  <p class="root-3TDqk small-bold-6R-6E">
                                    Free Plan Available
                                  </p>
                                </div>
                              </div>
                              <a
                                class="targetLink-3GCVg"
                                href="/integrations/app?name=quickbooks"
                              ></a>
                            </div>
                          </div>
                          <div class="root-2V0JZ root-2VQmF default-2CUpY">
                            <figure class="rootImage-ZV4q_ imgWrapper-2CWZD jasmine-35NXE basic-RqZZf">
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yODMxXzIzNTQ4KSI+CjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHJ4PSIzNiIgZmlsbD0id2hpdGUiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPgo8cGF0aCBkPSJNNDUuNDQyIDIyLjUwOTdDNDUuNDM1OSAyMi41MTU5IDQ1LjE2OTQgMjIuNTQ2NiA0NC44NjY2IDIyLjU2NTFDNDQuNTU3NyAyMi41ODk3IDQ0LjI0MjcgMjIuNjIwNCA0NC4xNyAyMi42MzI3QzQ0LjA5MTMgMjIuNjQ1IDQzLjg5NzQgMjIuNjY5NiA0My43Mjc4IDIyLjY5NDJDNDEuODg2NSAyMi45Mjc5IDM5LjU0MjQgMjMuNTY3NSAzNy44MjIyIDI0LjMwNTRDMzUuMDU0MiAyNS40OTg1IDMzLjEwMzggMjYuOTEyOSAzMS40MiAyOC45NjA4QzI5LjQzMzIgMzEuMzY1MyAyOC4wODg2IDM0LjkwNzUgMjcuNjcwNyAzOC44MzcxQzI3LjY1MjUgMzkuMDIxNiAyNy42MjgzIDM5LjI0MyAyNy42MTAxIDM5LjMyOTFDMjcuNTA3MSAzOS45NzQ4IDI3LjQ1ODcgNDIuNjk5MSAyNy41NDM1IDQzLjY2NDZDMjcuNjI4MyA0NC43NDA4IDI3LjczMTIgNDUuNjk0IDI3Ljc5NzggNDYuMTU1M0MyNy44MTYgNDYuMjQxNCAyNy44NDAyIDQ2LjQxOTcgMjcuODU4NCA0Ni41NTVDMjcuODgyNiA0Ni42OTAzIDI3LjkwNjkgNDYuODQ0IDI3LjkxOSA0Ni44OTMyQzI3LjkzMTEgNDYuOTQyNCAyNy45NjE0IDQ3LjA4MzkgMjcuOTc5NiA0Ny4yMDA3QzI4LjE0OTIgNDguMjMzOSAyOC43OTczIDUwLjM4MDEgMjkuMjIxMyA1MS4zMDI1QzI5LjI4NzkgNTEuNDUwMSAyOS4zNDI0IDUxLjU3OTMgMjkuMzQyNCA1MS41OTc3QzI5LjM0MjQgNTEuNjQwOCAzMC4xMjM3IDUzLjIzMzUgMzAuMjkzMyA1My41MzQ5QzMwLjk1OTYgNTQuNzI3OSAzMi4yNDk4IDU2LjYwMzYgMzIuOTQ2MyA1Ny4zODQ2QzMyLjk3NjYgNTcuNDI3NiAzMy4xNTgzIDU3LjYzMDYgMzMuMzQgNTcuODQ1OEMzMy43MDM1IDU4LjI4MjQgMzUuMjU0MSA1OS44NjI5IDM1LjczMjYgNjAuMjk5NUMzNi45ODY0IDYxLjQzMTEgMzguMTk3OCA2Mi4zNTk3IDM5LjM5NzEgNjMuMDk3NkMzOS45MTggNjMuNDE3NCA0MS42OTI3IDY0LjM1ODMgNDEuNzgzNSA2NC4zNTgzQzQxLjgwNzggNjQuMzU4MyA0MS45MzUgNjQuNDEzNyA0Mi4wODAzIDY0LjQ3NTJDNDIuNzQwNSA2NC43ODg4IDQ0LjA3OTIgNjUuMTc2MiA0NS4wNjA0IDY1LjM0ODRDNDUuMjYwMyA2NS4zNzkyIDQ1LjQ5MDQgNjUuNDIyMiA0NS41NzUyIDY1LjQ0MDdDNDUuNjYgNjUuNDU5MSA0Ni4xOTMxIDY1LjQ4MzcgNDYuNzU2NCA2NS40OTZDNDguMzY3NSA2NS41MjY4IDQ5LjMwMDMgNjUuMzg1MyA1MC45NjYgNjQuODY4N0M1My41ODI2IDY0LjA1NyA1Ni43MjYyIDYyLjE0NDQgNTkuNTY3IDU5LjYyOTJDNjAuOTc4MyA1OC4zNzQ3IDYyLjY5MjQgNTYuNjA5NyA2My43NzY2IDU1LjI4NzVDNjMuOTQ2MiA1NS4wODQ2IDY0LjA5MTYgNTQuOTA2MyA2NC4xMDk4IDU0Ljg4NzhDNjQuMTI3OSA1NC44Njk0IDY0LjI5MTUgNTQuNjYwMyA2NC40NzMyIDU0LjQyNjZDNjQuNjU0OSA1NC4xODY4IDY0LjgzMDUgNTMuOTY1NCA2NC44NTQ4IDUzLjkzNDZDNjQuODg1MSA1My44OTc3IDY1LjA3ODkgNTMuNjI3MSA2NS4yODQ4IDUzLjMyNThDNjcuMDU5NSA1MC43OTIxIDY4LjE4NjEgNDguMDQzMiA2OC40NTI2IDQ1LjYxNDFDNjguNTQzNSA0NC44MTQ2IDY4LjQ5NSA0Mi43NjY4IDY4LjM4IDQyLjM0MjVDNjguMzYxOCA0Mi4yOTMzIDY4LjMzNzYgNDIuMTUxOCA2OC4zMjU1IDQyLjAzNUM2OC4zMDEyIDQxLjg1MDUgNjguMjQ2NyA0MS41OTIyIDY4LjAxNjUgNDAuNTk1OUM2Ny43ODAzIDM5LjU1NjcgNjYuOTAyMSAzNy41MDg4IDY2LjA2MDEgMzYuMDA4M0M2NS42MzAxIDM1LjIzMzQgNjQuMzk0NCAzMy4zMjA5IDY0LjE0NjEgMzMuMDI1N0M2NC4wNjEzIDMyLjkyMTEgNjMuOTg4NiAzMi44MjI4IDYzLjk4ODYgMzIuNzk4MkM2My45ODg2IDMyLjc3MzYgNjMuOTUyMyAzMi43MTgyIDYzLjkwOTkgMzIuNjc1MkM2My44Njc1IDMyLjYzMjEgNjMuNjk3OSAzMi40MTY5IDYzLjUzNDMgMzIuMTk1NUM2My4zNjQ3IDMxLjk3NDEgNjMuMjE5NCAzMS43ODM1IDYzLjIwMTIgMzEuNzY1QzYzLjE4MyAzMS43NDY2IDYyLjk3NzEgMzEuNTAwNiA2Mi43NDY5IDMxLjIxMTVDNjIuMTE3IDMwLjQ0MjggNjEuNzY1NyAzMC4wNTU0IDYwLjY2MzMgMjguOTM2MkM1OC40NTI1IDI2LjcwMzggNTYuNjg5OSAyNS4zMzg2IDU0Ljc2MzggMjQuMzc5MkM1NC40MjQ2IDI0LjIxMzIgNTQuMDk3NSAyNC4wNDcyIDU0LjA0MyAyNC4wMTAzQzUzLjg0OTEgMjMuOTA1NyA1Mi43NjQ5IDIzLjQ4MTQgNTIuMjY4MyAyMy4zMjE1QzUxLjcwNSAyMy4xMzcgNTAuNTg0NCAyMi44NjAzIDQ5Ljk4NDggMjIuNzU1N0M0OS44ODc4IDIyLjczNzMgNDkuNzQyNSAyMi43MTI3IDQ5LjY1MTYgMjIuNjk0MkM0OS41NTQ3IDIyLjY4MTkgNDkuMzMwNiAyMi42NTEyIDQ5LjE0ODkgMjIuNjI2NkM0OC45NjcyIDIyLjYwODEgNDguNzQ5MSAyMi41Nzc0IDQ4LjY2NDMgMjIuNTU4OUM0OC41MDA4IDIyLjUyODIgNDUuNDc4MyAyMi40NzkgNDUuNDQyIDIyLjUwOTdaIiBmaWxsPSIjMjQxQzE1Ii8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8yODMxXzIzNTQ4IiB4PSIwIiB5PSIwIiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI2Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzI4MzFfMjM1NDgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjgzMV8yMzU0OCIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                                alt="Typeform"
                                class="img-3SYic style-yvHMA"
                                id="style-yvHMA"
                              />
                            </figure>
                            <div class="content-3kp-0">
                              <div class="stack-1qp4V spacing5-3tdwQ">
                                <p class="root-3TDqk heading-3-2i9Gm">
                                  Typeform
                                </p>
                                <p class="root-3TDqk medium-secondary-1YIN8 description-3yvMB">
                                  Sync leads data from Typeform into Mailchimp,
                                  automatically giving you accurate, organized,
                                  and info-rich insights.
                                </p>
                                <div class="app-cost-tphuT">
                                  <p class="root-3TDqk small-bold-6R-6E">
                                    Free Plan Available
                                  </p>
                                </div>
                              </div>
                              <a
                                class="targetLink-3GCVg"
                                href="/integrations/app?name=typeform"
                              ></a>
                            </div>
                          </div>
                          <div class="root-2V0JZ root-2VQmF default-2CUpY">
                            <figure class="rootImage-ZV4q_ imgWrapper-2CWZD jasmine-35NXE basic-RqZZf">
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yODMxXzIzNTc4KSI+CjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHJ4PSIzNiIgZmlsbD0id2hpdGUiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUzLjYxNDkgMjcuOTE2MUM1NC40MTQ2IDI3LjY3MzIgNTQuOTAxMyAyNy41MzQ0IDU0LjkwMTMgMjcuNTM0NEM1NC45MjY3IDI3LjUzNDQgNTQuOTU2OCAyNy41Mjk3IDU0Ljk5NSAyNy41MjM4QzU1LjA2MTEgMjcuNTEzNiA1NS4xNTE1IDI3LjQ5OTcgNTUuMjgzNyAyNy40OTk3VjY1LjVMMjkgNjAuOTUzOEMyOSA2MC45NTM4IDMyLjE5ODUgMzYuNTIyNiAzMi4zMDI4IDM1LjY1NUMzMi40NDE5IDM0LjUwOTggMzIuNDc2NyAzNC40NzUxIDMzLjY5MzUgMzQuMDkzM0MzMy43MjgzIDM0LjA1ODYgMzUuMzk3MSAzMy41MzgxIDM3Ljc5NiAzMi44MDkzQzM4LjAzOTQgMzAuOTcgMzguOTQzMyAyOC42MTAyIDQwLjEyNTQgMjYuNzM2MkM0MS43OTQyIDI0LjA2NCA0My44ODAyIDIyLjU3MTggNDUuOTY2MiAyMi41MDI0QzQ3LjA0NCAyMi40Njc3IDQ3Ljk0NzkgMjIuODE0NyA0OC42NDMzIDIzLjU3ODJDNDguNjYwNiAyMy42MTI5IDQ4LjY4NjcgMjMuNjM4OSA0OC43MTI4IDIzLjY2NDlDNDguNzM4OSAyMy42OTEgNDguNzY0OSAyMy43MTcgNDguNzgyMyAyMy43NTE3QzQ4LjkyMTQgMjMuNzE3IDQ5LjAyNTcgMjMuNzE3IDQ5LjEzIDIzLjcxN0M1MC43MjkzIDIzLjcxNyA1Mi4wODUyIDI0LjY1NCA1Mi45ODkxIDI2LjM4OTJDNTMuMjY3MiAyNi45NDQ0IDUzLjQ3NTggMjcuNDY1IDUzLjYxNDkgMjcuOTE2MVpNNDYuNTQwNyAzMC4xMDU0QzQ3LjMyMSAyOS44NjQgNDguMDg4MSAyOS42MjY2IDQ4LjgxNzEgMjkuNDA4NEM0OC44NTE5IDI4LjI2MzEgNDguNzEyOCAyNi41NjI3IDQ4LjEyMTggMjUuMzEzM0M0Ny41MzA3IDI1LjU5MSA0Ny4wMDkyIDI2LjA0MjEgNDYuNjI2OCAyNi40MjM5QzQ1LjY1MzMgMjcuNDk5NyA0NC44MTg5IDI5LjEzMDcgNDQuNDAxNyAzMC43NjE4QzQ1LjExMzEgMzAuNTQ3MSA0NS44MzIzIDMwLjMyNDYgNDYuNTQwNyAzMC4xMDU0Wk00Ny4yMTc4IDI0LjIzNzVDNDYuODcwMSAyNC4wMjkzIDQ2LjQ1MjkgMjMuOTI1MiA0NS45NjYyIDIzLjkyNTJDNDIuNzY3NyAyMy45OTQ2IDM5Ljk1MTYgMjkuMDI2NiAzOS4xODY3IDMyLjM1ODJDNDAuMzM0IDMyLjAxMTEgNDEuNTg1NiAzMS42Mjk0IDQyLjgzNzIgMzEuMjQ3NkM0My4yNTQ0IDI5LjEzMDcgNDQuMjYyNiAyNi45MDk3IDQ1LjU4MzggMjUuNDg2OUM0Ni4xMDUzIDI0Ljk2NjMgNDYuNjYxNSAyNC41MTUyIDQ3LjIxNzggMjQuMjM3NVpNNDQuMDg1NiA0NS4yMjk3QzQyLjkzNjMgNDQuNDk0OCA0MS45ODgxIDQzLjg4ODYgNDEuOTMzMyA0My4wMTIxQzQxLjg5ODUgNDIuNTk1NyA0MS45MzMzIDQwLjk2NDYgNDQuNTA2IDQwLjc5MTFDNDYuMjc5MSA0MC42NTIzIDQ3Ljc3NDEgNDEuMzQ2NCA0Ny43NzQxIDQxLjM0NjRMNDkuMDk1MiAzNi4zNDkxQzQ5LjA5NTIgMzYuMzQ5MSA0Ny45NDc5IDM1Ljc5MzggNDUuNjg4MSAzNS45MzI2QzM5Ljg0NzIgMzYuMzE0NCAzNy4yMDUgNDAuMzc0NyAzNy40ODMxIDQ0LjQwMDNDMzcuNjU4NyA0Ny4wODggMzkuMjQ2OSA0OC4yMTI3IDQwLjYzNzYgNDkuMTk3NEM0MS43MjQ5IDQ5Ljk2NzQgNDIuNjkxNCA1MC42NTE4IDQyLjc2NzcgNTEuOTMwOUM0Mi44MDI0IDUyLjYyNSA0Mi4zNTA1IDUzLjYzMTQgNDEuMTMzNiA1My43MDA4QzM5LjI1NjIgNTMuODM5NiAzNi45MjY4IDUyLjA2OTcgMzYuOTI2OCA1Mi4wNjk3TDM2LjAyMjkgNTUuODg3MUMzNi4wMjI5IDU1Ljg4NzEgMzguMzUyMyA1OC4zODU4IDQyLjU5MzggNTguMTA4MkM0Ni4xMDUzIDU3Ljg5OTkgNDguNTM5IDU1LjA4OSA0OC4yOTU2IDUwLjk1OTJDNDguMDg1MSA0Ny43ODY5IDQ1Ljg0ODcgNDYuMzU3IDQ0LjA4NTYgNDUuMjI5N1pNNDkuNTgyIDI1LjIwOTJDNTAuMDY4NyAyNi40NTg2IDUwLjIwNzggMjcuOTUwOCA1MC4yMDc4IDI4Ljk5MTlDNTAuOTcyNiAyOC43NDkgNTEuNjY4IDI4LjU0MDggNTIuMjkzOCAyOC4zNjczQzUxLjk0NjEgMjcuMjkxNCA1MS4xODEyIDI1LjUyMTYgNDkuNTgyIDI1LjIwOTJaIiBmaWxsPSIjOTZCRjQ4Ii8+CjxwYXRoIGQ9Ik02NyA2Mi43MjM3TDU2LjA4MzIgNjUuNDMwNlYyNy45MTYxQzU2Ljc3ODYgMjguNjEwMiA1OC42NTYgMzAuNDE0NyA1OC42NTYgMzAuNDE0N0M1OC42NTYgMzAuNDE0NyA2MS43MTU0IDMwLjQ4NDEgNjEuODg5MyAzMC40ODQxQzYyLjA2MzEgMzAuNDg0MSA2Mi4yMzY5IDMwLjYyMyA2Mi4yNzE3IDMwLjgzMTJDNjIuMzA2NSAzMS4wMzk0IDY3IDYyLjcyMzcgNjcgNjIuNzIzN1oiIGZpbGw9IiM5NkJGNDgiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzI4MzFfMjM1NzgiIHg9IjAiIHk9IjAiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjYiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEyIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjgzMV8yMzU3OCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18yODMxXzIzNTc4IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo="
                                alt="Shopify"
                                class="img-3SYic style-X6xSx"
                                id="style-X6xSx"
                              />
                            </figure>
                            <div class="content-3kp-0">
                              <div class="stack-1qp4V spacing5-3tdwQ">
                                <p class="root-3TDqk heading-3-2i9Gm">
                                  Shopify
                                </p>
                                <p class="root-3TDqk medium-secondary-1YIN8 description-3yvMB">
                                  Sync Shopify customers, products, and more to
                                  Mailchimp to create highly targeted campaigns.
                                </p>
                                <div class="app-cost-tphuT"></div>
                              </div>
                              <a
                                class="targetLink-3GCVg"
                                href="/integrations/app?name=shopify"
                              ></a>
                            </div>
                          </div>
                          <div class="root-2V0JZ root-2VQmF default-2CUpY">
                            <figure class="rootImage-ZV4q_ imgWrapper-2CWZD jasmine-35NXE basic-RqZZf">
                              <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yODMxXzIzNTYzKSI+CjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHJ4PSIzNiIgZmlsbD0id2hpdGUiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPgo8cGF0aCBkPSJNNjkuOTc4NyAzMy43OTIyQzY5Ljc4MzUgMzguMDY3MiA2Ni43OTAxIDQzLjkyMzQgNjEuMDA0MiA1MS4zNTUzQzU1LjAyMyA1OS4xMTc1IDQ5Ljk2MTQgNjMgNDUuODE5MyA2M0M0My4yNTU5IDYzIDQxLjA4NTkgNjAuNjM2NiAzOS4zMTE5IDU1LjkwN0MzOC4xMjkyIDUxLjU3MjcgMzYuOTQzOCA0Ny4yNDEyIDM1Ljc2MTEgNDIuOTA2OUMzNC40NDU1IDM4LjE4MDIgMzMuMDMzNyAzNS44MTM5IDMxLjUyMjggMzUuODEzOUMzMS4xOTQ2IDM1LjgxMzkgMzAuMDQwMyAzNi41MDU3IDI4LjA2ODIgMzcuODgzN0wyNiAzNS4yMjFDMjguMTcwMSAzMy4zMTc4IDMwLjMxMTkgMzEuNDExOSAzMi40MTk3IDI5LjUwMzFDMzUuMzE2OSAyNy4wMDcgMzcuNDg5OCAyNS42OTEyIDM4Ljk0MTIgMjUuNTU4NUM0Mi4zNjQ3IDI1LjIzMDkgNDQuNDcyNSAyNy41Njg5IDQ1LjI2NDcgMzIuNTY5NkM0Ni4xMTkyIDM3Ljk2ODQgNDYuNzEwNSA0MS4zMjU3IDQ3LjA0MTYgNDIuNjM4N0M0OC4wMjkgNDcuMTE3IDQ5LjExNTQgNDkuMzUzMyA1MC4zMDA5IDQ5LjM1MzNDNTEuMjIzMyA0OS4zNTMzIDUyLjYwNjggNDcuODk5MSA1NC40NTE1IDQ0Ljk5NjRDNTYuMjkzNCA0Mi4wOTA5IDU3LjI4MDggMzkuODggNTcuNDEzOCAzOC4zNjM3QzU3LjY3NjkgMzUuODU2MyA1Ni42ODk1IDM0LjU5OTggNTQuNDUxNSAzNC41OTk4QzUzLjM5NjIgMzQuNTk5OCA1Mi4zMDk3IDM0LjgzOTggNTEuMTk1IDM1LjMxOThDNTMuMzU2NiAyOC4yNDk0IDU3LjQ4NzQgMjQuODEzIDYzLjU4NzMgMjUuMDA3OEM2OC4xMDg2IDI1LjE0MDYgNzAuMjM5IDI4LjA2ODcgNjkuOTc4NyAzMy43OTIyWiIgZmlsbD0iIzFBQjdFQSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfMjgzMV8yMzU2MyIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNiIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMTIgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yODMxXzIzNTYzIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzI4MzFfMjM1NjMiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
                                alt="Vimeo"
                                class="img-3SYic style-iyyzJ"
                                id="style-iyyzJ"
                              />
                            </figure>
                            <div class="content-3kp-0">
                              <div class="stack-1qp4V spacing5-3tdwQ">
                                <p class="root-3TDqk heading-3-2i9Gm">Vimeo</p>
                                <p class="root-3TDqk medium-secondary-1YIN8 description-3yvMB">
                                  Connect your Vimeo account with Mailchimp to
                                  generate and convert high-quality leads and
                                  boost your email marketing performance with
                                  video.
                                </p>
                                <div class="app-cost-tphuT"></div>
                              </div>
                              <a
                                class="targetLink-3GCVg"
                                href="/integrations/app?name=vimeo"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="stack-1qp4V spacing6-nznRY filled-hIQ3r mainContainer-Cc8L-">
                    <div class="featuredContainer-18MTS content-1sFJs">
                      <div class="stack-1qp4V spacing8-10xOR">
                        <div class="stack-1qp4V spacing2-3AKCb">
                          <h2 class="heading-2-ZDzRe root-PihPG">
                            Popular categories
                          </h2>
                          <hr />
                          <p class="root-3TDqk medium-3AcAC">
                            Browse app categories popular with Mailchimp users.
                          </p>
                        </div>
                        <div
                          class="root-209cT gap6-U7x7I style-boLwN"
                          id="style-boLwN"
                        >
                          <div
                            class="popularCategoryContainer-3xTut style-htvGO"
                            id="style-htvGO"
                          >
                            <div id="style-d7Do8" class="style-d7Do8">
                              <div class="logoContainer-3Hp5q">
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yODMxXzIzNTc4KSI+CjxyZWN0IHg9IjEyIiB5PSI4IiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHJ4PSIzNiIgZmlsbD0id2hpdGUiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUzLjYxNDkgMjcuOTE2MUM1NC40MTQ2IDI3LjY3MzIgNTQuOTAxMyAyNy41MzQ0IDU0LjkwMTMgMjcuNTM0NEM1NC45MjY3IDI3LjUzNDQgNTQuOTU2OCAyNy41Mjk3IDU0Ljk5NSAyNy41MjM4QzU1LjA2MTEgMjcuNTEzNiA1NS4xNTE1IDI3LjQ5OTcgNTUuMjgzNyAyNy40OTk3VjY1LjVMMjkgNjAuOTUzOEMyOSA2MC45NTM4IDMyLjE5ODUgMzYuNTIyNiAzMi4zMDI4IDM1LjY1NUMzMi40NDE5IDM0LjUwOTggMzIuNDc2NyAzNC40NzUxIDMzLjY5MzUgMzQuMDkzM0MzMy43MjgzIDM0LjA1ODYgMzUuMzk3MSAzMy41MzgxIDM3Ljc5NiAzMi44MDkzQzM4LjAzOTQgMzAuOTcgMzguOTQzMyAyOC42MTAyIDQwLjEyNTQgMjYuNzM2MkM0MS43OTQyIDI0LjA2NCA0My44ODAyIDIyLjU3MTggNDUuOTY2MiAyMi41MDI0QzQ3LjA0NCAyMi40Njc3IDQ3Ljk0NzkgMjIuODE0NyA0OC42NDMzIDIzLjU3ODJDNDguNjYwNiAyMy42MTI5IDQ4LjY4NjcgMjMuNjM4OSA0OC43MTI4IDIzLjY2NDlDNDguNzM4OSAyMy42OTEgNDguNzY0OSAyMy43MTcgNDguNzgyMyAyMy43NTE3QzQ4LjkyMTQgMjMuNzE3IDQ5LjAyNTcgMjMuNzE3IDQ5LjEzIDIzLjcxN0M1MC43MjkzIDIzLjcxNyA1Mi4wODUyIDI0LjY1NCA1Mi45ODkxIDI2LjM4OTJDNTMuMjY3MiAyNi45NDQ0IDUzLjQ3NTggMjcuNDY1IDUzLjYxNDkgMjcuOTE2MVpNNDYuNTQwNyAzMC4xMDU0QzQ3LjMyMSAyOS44NjQgNDguMDg4MSAyOS42MjY2IDQ4LjgxNzEgMjkuNDA4NEM0OC44NTE5IDI4LjI2MzEgNDguNzEyOCAyNi41NjI3IDQ4LjEyMTggMjUuMzEzM0M0Ny41MzA3IDI1LjU5MSA0Ny4wMDkyIDI2LjA0MjEgNDYuNjI2OCAyNi40MjM5QzQ1LjY1MzMgMjcuNDk5NyA0NC44MTg5IDI5LjEzMDcgNDQuNDAxNyAzMC43NjE4QzQ1LjExMzEgMzAuNTQ3MSA0NS44MzIzIDMwLjMyNDYgNDYuNTQwNyAzMC4xMDU0Wk00Ny4yMTc4IDI0LjIzNzVDNDYuODcwMSAyNC4wMjkzIDQ2LjQ1MjkgMjMuOTI1MiA0NS45NjYyIDIzLjkyNTJDNDIuNzY3NyAyMy45OTQ2IDM5Ljk1MTYgMjkuMDI2NiAzOS4xODY3IDMyLjM1ODJDNDAuMzM0IDMyLjAxMTEgNDEuNTg1NiAzMS42Mjk0IDQyLjgzNzIgMzEuMjQ3NkM0My4yNTQ0IDI5LjEzMDcgNDQuMjYyNiAyNi45MDk3IDQ1LjU4MzggMjUuNDg2OUM0Ni4xMDUzIDI0Ljk2NjMgNDYuNjYxNSAyNC41MTUyIDQ3LjIxNzggMjQuMjM3NVpNNDQuMDg1NiA0NS4yMjk3QzQyLjkzNjMgNDQuNDk0OCA0MS45ODgxIDQzLjg4ODYgNDEuOTMzMyA0My4wMTIxQzQxLjg5ODUgNDIuNTk1NyA0MS45MzMzIDQwLjk2NDYgNDQuNTA2IDQwLjc5MTFDNDYuMjc5MSA0MC42NTIzIDQ3Ljc3NDEgNDEuMzQ2NCA0Ny43NzQxIDQxLjM0NjRMNDkuMDk1MiAzNi4zNDkxQzQ5LjA5NTIgMzYuMzQ5MSA0Ny45NDc5IDM1Ljc5MzggNDUuNjg4MSAzNS45MzI2QzM5Ljg0NzIgMzYuMzE0NCAzNy4yMDUgNDAuMzc0NyAzNy40ODMxIDQ0LjQwMDNDMzcuNjU4NyA0Ny4wODggMzkuMjQ2OSA0OC4yMTI3IDQwLjYzNzYgNDkuMTk3NEM0MS43MjQ5IDQ5Ljk2NzQgNDIuNjkxNCA1MC42NTE4IDQyLjc2NzcgNTEuOTMwOUM0Mi44MDI0IDUyLjYyNSA0Mi4zNTA1IDUzLjYzMTQgNDEuMTMzNiA1My43MDA4QzM5LjI1NjIgNTMuODM5NiAzNi45MjY4IDUyLjA2OTcgMzYuOTI2OCA1Mi4wNjk3TDM2LjAyMjkgNTUuODg3MUMzNi4wMjI5IDU1Ljg4NzEgMzguMzUyMyA1OC4zODU4IDQyLjU5MzggNTguMTA4MkM0Ni4xMDUzIDU3Ljg5OTkgNDguNTM5IDU1LjA4OSA0OC4yOTU2IDUwLjk1OTJDNDguMDg1MSA0Ny43ODY5IDQ1Ljg0ODcgNDYuMzU3IDQ0LjA4NTYgNDUuMjI5N1pNNDkuNTgyIDI1LjIwOTJDNTAuMDY4NyAyNi40NTg2IDUwLjIwNzggMjcuOTUwOCA1MC4yMDc4IDI4Ljk5MTlDNTAuOTcyNiAyOC43NDkgNTEuNjY4IDI4LjU0MDggNTIuMjkzOCAyOC4zNjczQzUxLjk0NjEgMjcuMjkxNCA1MS4xODEyIDI1LjUyMTYgNDkuNTgyIDI1LjIwOTJaIiBmaWxsPSIjOTZCRjQ4Ii8+CjxwYXRoIGQ9Ik02NyA2Mi43MjM3TDU2LjA4MzIgNjUuNDMwNlYyNy45MTYxQzU2Ljc3ODYgMjguNjEwMiA1OC42NTYgMzAuNDE0NyA1OC42NTYgMzAuNDE0N0M1OC42NTYgMzAuNDE0NyA2MS43MTU0IDMwLjQ4NDEgNjEuODg5MyAzMC40ODQxQzYyLjA2MzEgMzAuNDg0MSA2Mi4yMzY5IDMwLjYyMyA2Mi4yNzE3IDMwLjgzMTJDNjIuMzA2NSAzMS4wMzk0IDY3IDYyLjcyMzcgNjcgNjIuNzIzN1oiIGZpbGw9IiM5NkJGNDgiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzI4MzFfMjM1NzgiIHg9IjAiIHk9IjAiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSI0Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjYiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEyIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjgzMV8yMzU3OCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18yODMxXzIzNTc4IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo="
                                  alt="E-commerce"
                                />
                              </div>
                            </div>
                            <div id="style-cFrNo" class="style-cFrNo">
                              <h4 class="heading-4-3r-mu targetLink-2Z4uM root-PihPG">
                                E-commerce
                              </h4>
                              <p class="root-3TDqk medium-3AcAC descriptive-YjOS7">
                                Connect with platforms that help you sell
                                online.
                              </p>
                            </div>
                            <div id="style-6L8SE" class="style-6L8SE">
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Learn about this integration
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            class="popularCategoryContainer-3xTut style-KfeqK"
                            id="style-KfeqK"
                          >
                            <div id="style-GDP84" class="style-GDP84">
                              <div class="logoContainer-3Hp5q">
                                <img
                                  src="https://us12.admin.mailchimp.com/release/1.1.190a1dd9adafd361e1e2631c825c19fef8e2cc4fa/js-src/031e41a60f94ed1409f9b1d0569f4734.svg"
                                  alt="Design"
                                />
                              </div>
                            </div>
                            <div id="style-fEZD4" class="style-fEZD4">
                              <h4 class="heading-4-3r-mu targetLink-2Z4uM root-PihPG">
                                Design
                              </h4>
                              <p class="root-3TDqk medium-3AcAC descriptive-YjOS7">
                                Bring your brand presence to your campaigns by
                                connecting with design tools.
                              </p>
                            </div>
                            <div id="style-YCWqW" class="style-YCWqW">
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Learn about this integration
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            class="popularCategoryContainer-3xTut style-E7PVp"
                            id="style-E7PVp"
                          >
                            <div id="style-Yf4Id" class="style-Yf4Id">
                              <div class="logoContainer-3Hp5q">
                                <img
                                  src="https://us12.admin.mailchimp.com/release/1.1.190a1dd9adafd361e1e2631c825c19fef8e2cc4fa/js-src/7b6b2ffb5c60ca29b569d229ea1f7bb3.svg"
                                  alt="Contact Management"
                                />
                              </div>
                            </div>
                            <div id="style-sHBQP" class="style-sHBQP">
                              <h4 class="heading-4-3r-mu targetLink-2Z4uM root-PihPG">
                                Contact Management
                              </h4>
                              <p class="root-3TDqk medium-3AcAC descriptive-YjOS7">
                                Import and sync contact data from your business
                                tools.
                              </p>
                            </div>
                            <div id="style-wrHlt" class="style-wrHlt">
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Learn about this integration
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            class="popularCategoryContainer-3xTut style-blv9Y"
                            id="style-blv9Y"
                          >
                            <div id="style-JOq5I" class="style-JOq5I">
                              <div class="logoContainer-3Hp5q">
                                <img
                                  src="https://us12.admin.mailchimp.com/release/1.1.190a1dd9adafd361e1e2631c825c19fef8e2cc4fa/js-src/0d93ba545294a2c9657e35974e0023ab.svg"
                                  alt="Analytics"
                                />
                              </div>
                            </div>
                            <div id="style-xYclw" class="style-xYclw">
                              <h4 class="heading-4-3r-mu targetLink-2Z4uM root-PihPG">
                                Analytics
                              </h4>
                              <p class="root-3TDqk medium-3AcAC descriptive-YjOS7">
                                Sync reporting and insights from other tools
                                with Mailchimp.
                              </p>
                            </div>
                            <div id="style-F7g3Q" class="style-F7g3Q">
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Learn about this integration
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            class="popularCategoryContainer-3xTut style-Lmgdh"
                            id="style-Lmgdh"
                          >
                            <div id="style-RFUCV" class="style-RFUCV">
                              <div class="logoContainer-3Hp5q">
                                <img
                                  src="https://us12.admin.mailchimp.com/release/1.1.190a1dd9adafd361e1e2631c825c19fef8e2cc4fa/js-src/089b8926951b46a7d4c6443318462bd9.svg"
                                  alt="Forms &amp; Surveys"
                                />
                              </div>
                            </div>
                            <div id="style-AxrWC" class="style-AxrWC">
                              <h4 class="heading-4-3r-mu targetLink-2Z4uM root-PihPG">
                                Forms &amp; Surveys
                              </h4>
                              <p class="root-3TDqk medium-3AcAC descriptive-YjOS7">
                                Sync your customers' responses to their contact
                                profiles.
                              </p>
                            </div>
                            <div id="style-5crci" class="style-5crci">
                              <button class="root-1khsy" type="button">
                                <span class="wink-visually-hidden">
                                  Learn about this integration
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  focusable="false"
                                  aria-hidden="true"
                                  class="wink-icon"
                                >
                                  <path d="M16.902 12.782L2.5 13v-2l14.402.218-5.633-6.036 1.462-1.364L20.368 12l-7.637 8.182-1.462-1.364 5.633-6.036z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="root-1rj4d standard-2H4cn withBottomGutter-1OHF7 withTopGutter-PMsAu">
                  <div class="stack-1qp4V spacing6-nznRY">
                    <div class="stack-1qp4V spacing3-1OKHB">
                      <div class="cluster-3D5Qr">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <h2 class="heading-2-ZDzRe clusterGrow-2x3re root-PihPG">
                            Integration tips and inspiration
                          </h2>
                          <a
                            class="root-sBgFt root-22EAH cluster-1l1Cw"
                            href="https://mailchimp.com/help/"
                            target="_blank"
                            rel="noreferrer noopener"
                            level="3"
                          >
                            View all articles
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
                          </a>
                        </div>
                      </div>
                      <hr />
                      <p class="root-3TDqk medium-3AcAC">
                        Browse how-to articles with your connected tools and
                        platforms.
                      </p>
                    </div>
                    <div
                      class="root-209cT gap6-U7x7I gettingStartedFooter-1re6b style-rRN1T"
                      id="style-rRN1T"
                    >
                      <div>
                        <div class="root-2V0JZ root-1IDfs none-L5jAA">
                          <figure class="rootImage-ZV4q_ cornflower-1dhGY medium-3K4Vo">
                            <img
                              src="https://cdn-images.mailchimp.com/product/discovery/illo_minispot_laptop-click_800.png"
                              alt="business-sales-guide"
                              class="img-3SYic style-mN2DE"
                              id="style-mN2DE"
                            />
                          </figure>
                          <div class="content-sduDO">
                            <div class="stack-1qp4V">
                              <p class="root-3TDqk medium-bold-2nZ0J eyebrow-15Wl5">
                                Business Tip
                              </p>
                              <p class="root-3TDqk heading-4-EoGPh targetLink-SGOPT">
                                Hire A Mailchimp Expert
                              </p>
                              <p class="root-3TDqk small-secondary-3_Rq2">
                                Our talented roster of Mailchimp experts can
                                design and implement beautiful, data-driven
                                templates for your brand
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="root-2V0JZ root-1IDfs none-L5jAA">
                          <figure class="rootImage-ZV4q_ squash-obdgZ medium-3K4Vo">
                            <img
                              src="https://cdn-images.mailchimp.com/product/discovery/ILLO_Spot_Pathways_MarHernandez_1300x1300.png"
                              alt="business-marketing-tips"
                              class="img-3SYic style-eIZov"
                              id="style-eIZov"
                            />
                          </figure>
                          <div class="content-sduDO">
                            <div class="stack-1qp4V">
                              <p class="root-3TDqk medium-bold-2nZ0J eyebrow-15Wl5">
                                Guide
                              </p>
                              <p class="root-3TDqk heading-4-EoGPh targetLink-SGOPT">
                                About Integrations
                              </p>
                              <p class="root-3TDqk small-secondary-3_Rq2">
                                Learn more about how integrations work with
                                Mailchimp
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="root-2V0JZ root-1IDfs none-L5jAA">
                          <figure class="rootImage-ZV4q_ cucumber-L_n-M medium-3K4Vo">
                            <img
                              src="https://cdn-images.mailchimp.com/product/discovery/ILLO_Spot_SmallBusiness_JamesDaw_1300x1300.png"
                              alt="business-sales-guide"
                              class="img-3SYic style-IZc3b"
                              id="style-IZc3b"
                            />
                          </figure>
                          <div class="content-sduDO">
                            <div class="stack-1qp4V">
                              <p class="root-3TDqk medium-bold-2nZ0J eyebrow-15Wl5">
                                Marketing library
                              </p>
                              <p class="root-3TDqk heading-4-EoGPh targetLink-SGOPT">
                                E-Commerce Marketing Strategies &amp; Tips
                              </p>
                              <p class="root-3TDqk small-secondary-3_Rq2">
                                Learn how to create an effective e-commerce
                                marketing strategy.
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

export default Discover;

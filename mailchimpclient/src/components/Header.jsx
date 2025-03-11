import React from "react";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing6-zD2QG">
      <button
        className="root-sBgFt container-3-bH7 primary-33czz liveExpertHelpBtn-3ju2V appHeaderliveExpertHelpBtn-1RFSO"
        data-id="ipd-appHeader-liveExpertHelpBtn"
        type="button"
      >
        <span className="temporarySpan-2iF2p">
          <div className="cluster-3D5Qr nowrap-34OZ-">
            <div className="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing1-3SkHe">
              <div className="online-xMPbD"></div>
              <span>Live expert help</span>
            </div>
          </div>
        </span>
      </button>
      <div
        className="avatarRoot-3kLoc"
        data-testid="app-header-avatar-menu"
        data-id="ipd-appHeader-accountMenuIcon"
        data-pendo-target="account-menu"
      >
        <div className="identityGroup-2kpTi">
          <div className="identityRoot-3EJCo">
            <div className="container-3dbgU">
              <button
                id="account-settings-btn"
                data-analytics-tag="AppHeader-Identity"
                type="button"
                className="btn-2N1xe"
                aria-controls="mc:2"
                aria-expanded="false"
                aria-label="account settings button"
              >
                <div className="avatar-2-CVF">
                  <img
                    alt="Signed in as Ali Next Web Lines, Account Menu"
                    className="avatarImage-1YlIs"
                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fElUfGVufDB8fDB8fHww"
                  />
                </div>
              </button>
              <span className="root-3ALOt default-3A6wB notificationBadge-2RFjU">
                <span className="wink-visually-hidden">(</span>2
                <span className="wink-visually-hidden">)</span>
              </span>
              <span className="wink-visually-hidden"> notifications</span>
            </div>
          </div>
        </div>
        <div className="light"></div>
      </div>
    </div>
  );
};

export default Header;

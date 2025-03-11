import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const handleLogin=()=>{
    navigation("/")
  }
  return (
    <div
      id="login"
      className="mcd bg-login snipcss-DpoiL"
      cz-shortcut-listen="true"
    >
      <a
        href="#"
        tabIndex="-1"
        aria-hidden="true"
        rel="nofollow"
        id="style-qbPwv"
        className="style-qbPwv"
      >
        ___
      </a>
      <div id="style-cExOL" className="style-cExOL"></div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MCZTKL"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <div className="c-signupShell min-height--100vh flex-wrap--wrap overflow-y--auto jasmineBackground">
        <div className="c-signupShell_mainBody flex-col full-width-mobile full-width-legacy-ie full-width white-bg">
          <div role="banner">
            <a href="https://mailchimp.com/">
              <img
                src="https://cdn-images.mailchimp.com/product/brand_assets/logos/mc-freddie-dark.svg"
                className="c-signupShell_freddie"
                width="38"
                height="35"
                alt="Mailchimp logo"
              />
            </a>
          </div>
          <div className="lang-selector">
            <div className="globalNav__languageSelector">
              <input
                type="hidden"
                name="i18n_selector_locale"
                value="en-us"
                className="av-hidden"
                id="i18n_selector_locale"
              />
              <label
                className="margin--right-c3 signup-languageSelector"
                htmlFor="i18n_lang_selector"
              >
                <select
                  id="i18n_lang_selector"
                  name="language_selector"
                  title="Select your language"
                  onChange={() => {}}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="pt-br">Português</option>
                  <option value="it">Italiano</option>
                  <option value="de">Deutsch</option>
                  <option value="fr">Français</option>
                </select>
              </label>
            </div>
          </div>
          <div id="login-box" className="flex flex-grow-1 flex-shrink--0">
            <main id="content" className="!margin-bottom--lv8 width--100">
              <div
                id="login-form-wrap"
                className="mc-login-content-wrapper centered"
              >
                <div id="login-content" className="mc-login-content">
                  <div
                    className="overflow-visible"
                    data-analytics-tag="login-form"
                  >
                    <form
                      action="/login/post/"
                      id="login-form"
                      className="c-largeForm"
                      method="POST"
                      noValidate
                    >
                      <div className="error-container"></div>
                      <div className="!margin-bottom--lv5">
                        <h1 className="text-align--center !margin-bottom--lv3 text-transform--none">
                          Log in
                        </h1>
                        <p className="flex align-items--baseline flex-wrap--wrap">
                          <span className="padding-right--lv1">
                            Need a Mailchimp account?{" "}
                          </span>
                          <a
                            href="/signup/"
                            id="create-account-link"
                            title="Signup for a Mailchimp account"
                            onClick={() => {}}
                          >
                            Create an account
                          </a>
                        </p>
                      </div>
                      <fieldset>
                        <div className="line login-field">
                          <div className="field-wrapper">
                            <label htmlFor="username" className="">
                              Username or Email
                            </label>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              className="rounded-corners-4  av-text"
                              autoComplete="username"
                              value={username}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div id="password-section" className="">
                          <div className="line">
                            <label htmlFor="password" className="float-left">
                              Password
                            </label>
                            <div className="float-right">
                              <input
                                type="checkbox"
                                name="show-password"
                                id="show-password"
                                className="hide av-checkbox"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label
                                htmlFor="show-password"
                                title="Show Password"
                                className="c-showPassword c-showPassword--showIcon cursor-pointer relative"
                                data-mc-el="showPassword"
                              >
                                Show
                              </label>
                            </div>
                          </div>
                          <div className="line">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="rounded-corners-4  av-password"
                              maxLength="51"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="line">
                          <div className="!margin-bottom--lv5">
                            <label
                              htmlFor="stay-signed-in"
                              className="block !padding--lv0"
                            >
                              <div
                                className="dijit dijitReset dijitInline dijitCheckBox rounded-corners-4 av-checkbox"
                                role="presentation"
                                lang="en"
                                widgetid="stay-signed-in"
                              >
                                <input
                                  name="stay-signed-in"
                                  type="checkbox"
                                  role="checkbox"
                                  aria-checked="false"
                                  className="dijitReset dijitCheckBoxInput style-cWMdb"
                                  tabIndex="0"
                                  id="stay-signed-in"
                                />
                              </div>
                              Keep me logged in
                            </label>
                          </div>
                          <button onClick={handleLogin}
                            id="submit-btn"
                            type="button"
                            value="log in"
                            className="button-large button-wide p1 text-transform--none !margin-bottom--lv5 submit-btn mc-login-btn "
                          >
                            Log in
                          </button>
                        </div>
                        <div className="!margin-bottom--lv3">
                          <p className="inline-block margin--lv1 !margin-top-bottom--lv0">
                            <a href="/login/forgot-username/">
                              Forgot username?
                            </a>
                          </p>
                          <div
                            className="inline-block"
                            id="forgot-password-link"
                          >
                            <p className="inline-block margin-left--lv1 !margin-top-bottom--lv0">
                              <a href="/login/forgot/"> Forgot password?</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="inline-block !margin-top-bottom--lv0">
                            <a href="https://mailchimp.com/help/i-cant-log-in/">
                              Can't log in?
                            </a>
                          </p>
                        </div>
                      </fieldset>
                      <input
                        type="hidden"
                        name="__csrf_token"
                        id=""
                        value="9c6beb1cf414431ab2ff18685060edb600d32e68"
                        className="av-hidden"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <footer className="hide-print">
            <p
              className="c-legalNotice lastUnit size1of1 full-width"
              data-analytics-tag="login-legal-notice"
            >
              {" "}
              ©2024 Intuit Inc. All rights reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group,{" "}
              <a
                id="colophon_cookie_preferences_link"
                className="nowrap link-underline textcolor--secondary"
                href="https://mailchimp.com/legal/cookies/#optanon-toggle-display/"
                target="_blank"
                mc:track=""
                rel="noopener noreferrer"
              >
                Cookie Preferences
              </a>
              ,{" "}
              <a
                id="colophon_privacy_link"
                className="textcolor--secondary"
                href="https://www.intuit.com/privacy/statement/"
                target="_blank"
                mc:track=""
                rel="noopener noreferrer"
              >
                Privacy
              </a>
              , and{" "}
              <a
                id="colophon_terms_link"
                className="textcolor--secondary"
                href="https://mailchimp.com/legal/terms"
                target="_blank"
                mc:track=""
                rel="noopener noreferrer"
              >
                Terms
              </a>{" "}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;

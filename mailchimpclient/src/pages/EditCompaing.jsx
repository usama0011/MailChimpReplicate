import React, { useContext, useState, useEffect } from "react";
import "../styles/CreateEmail.css";
import { Link, useParams } from "react-router-dom";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
import axios from "axios";
const EditCompaing = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState("");
  const [allcomapings, setAllComapings] = useState([]);
  const [perviewtext, setPreviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const [editsubject, setEditSubject] = useState(false);
  const [edittime, setEditTime] = useState(false);
  const handleAddSubject = () => {
    setEditSubject(true);
  };
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
  const submitsaveSubject = (e) => {
    e.preventDefault();
    handleUpdateState("subject", subject);
    handleUpdateState("previewtext", perviewtext);
    setEditSubject(false);
  };
  const openaddTime = () => {
    setEditTime(true);
  };
  const handlesaveTimebtn = (e) => {
    e.preventDefault();
    setEditTime(false);
  };
  useEffect(() => {
    const fetchAllcompaings = async () => {
      try {
        setLoading(true);
        const allComaingsdata = await axios.get(
          "https://latest-mail-chimp-server.vercel.app/api/newcompaing"
        );
        setAllComapings(allComaingsdata.data);
        setLoading(false);
        console.log(allComaingsdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllcompaings();
  }, []);
  const singleComaping = allcomapings.find((item) => item._id === id);
  console.log(singleComaping);
  return (
    <div class="root-3uY95 snipcss-mSWlr">
      <div class="container-2aeSm">
        <header class="root-1rj4d standard-2H4cn header-3IL6q">
          <div class="cluster-3D5Qr nowrap-34OZ-">
            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
              <div class="stack-1qp4V style-ODyTc" id="style-ODyTc">
                <h1 class="heading-3-eDQNF root-PihPG">
                  <div class="stack-1qp4V">
                    <div class="cluster-3D5Qr">
                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <span class="root-3TDqk heading-3-2i9Gm">
                          Sending Disabled
                        </span>
                        <span class="root-3ALOt default-3A6wB">
                          <span class="wink-visually-hidden">(</span>Draft
                          <span class="wink-visually-hidden">)</span>
                        </span>
                      </div>
                    </div>
                    <p class="root-3TDqk small-2qKd5">
                      There are some issues which might impact your ability to
                      send.{" "}
                      <a
                        href="https://us12.admin.mailchimp.com/account#issues"
                        class="nowrap"
                      >
                        {" "}
                        Learn more about your account status{" "}
                      </a>
                      .
                    </p>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div></div>
          <div class="actions-1bN9W cluster-3D5Qr">
            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
              <a
                class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                href="/campaigns"
              >
                <span class="temporarySpan-2iF2p">Finish later</span>
              </a>
              <button
                class="root-sBgFt container-3-bH7 primary-33czz"
                disabled=""
                type="button"
              >
                <span class="temporarySpan-2iF2p">Send</span>
              </button>
            </div>
          </div>
        </header>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div class="root-1rj4d wide-2560n withBottomGutter-1OHF7 removeRightPadding-35gAT">
          <div class="switcher-2RqDX">
            <div class="spacing6-21N1u style-Mi7CE" id="style-Mi7CE">
              <div class="checklistContainer-OU4TG">
                <div class="stack-1qp4V spacing8-10xOR">
                  <h2 class="heading-2-ZDzRe wink-visually-hidden root-PihPG">
                    Name your email
                  </h2>
                  <div class="stack-1qp4V spacing2-3AKCb">
                    <span class="root-3TDqk heading-2-SxWi_">
                      {singleComaping?.comapingemail}
                    </span>
                    <div class="cluster-3D5Qr">
                      <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                        <button class="root-sBgFt root-22EAH" type="button">
                          Edit name
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul class="root-23kHk">
                    <li class="root-6p7-2 slat-9mBgs" id="mc-checklist-step-to">
                      <div class="wrapper-3ln44">
                        <div class="stack-1qp4V">
                          <div class="cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ-">
                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon invalid-mra6-"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 01-14.618 7.032l12.65-12.65A8.962 8.962 0 0121 12zM4.968 17.618l12.65-12.65a9 9 0 00-12.65 12.65z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="stack-1qp4V content-2tH6V">
                                    <div data-analytics-tag="checklist-heading-to">
                                      <h2 class="heading-2-ZDzRe root-PihPG">
                                        <span class="root-3TDqk large-23Nnp title-35amJ">
                                          To
                                        </span>
                                      </h2>
                                    </div>
                                    <div class="stack-1qp4V spacing4-1xt6w">
                                      <div class="stack-1qp4V">
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                            <p class="root-3TDqk medium-3AcAC">
                                              <span class="root-3TDqk medium-bold-2nZ0J">
                                                All subscribed contacts
                                              </span>{" "}
                                              in the audience{" "}
                                              <span class="root-3TDqk medium-bold-2nZ0J">
                                                Next Web Lines
                                              </span>
                                              .
                                            </p>
                                            <a
                                              href="/campaigns/wizard/recipient-popup?id=17971908"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              500&nbsp;recipients
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                focusable="false"
                                                aria-hidden="true"
                                                class="wink-icon"
                                                style={{
                                                  verticalAlign: "middle",
                                                  height: "1em",
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
                                        </div>
                                        <p class="root-3TDqk small-2qKd5">
                                          Your 'To' field is not personalized
                                          with merge tags.
                                        </p>
                                      </div>
                                      <p
                                        class="root-3TDqk medium-bold-2nZ0J error-1dkRg"
                                        data-testid="validation-message"
                                      >
                                        <span class="root-3TDqk medium-bold-2nZ0J">
                                          There are some issues which might
                                          impact your ability to send.{" "}
                                          <a
                                            href="https://us12.admin.mailchimp.com/account#issues"
                                            class="nowrap"
                                          >
                                            {" "}
                                            Learn more about your account status{" "}
                                          </a>
                                          .
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="action-20G5v"
                                data-analytics-tag="checklist-button-to"
                              >
                                <button
                                  class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-EXvCm"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Resolve
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="root-6p7-2 slat-9mBgs"
                      id="mc-checklist-step-from"
                    >
                      <div class="wrapper-3ln44">
                        <div class="stack-1qp4V">
                          <div class="cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ-">
                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                  <div>
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
                                        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="stack-1qp4V content-2tH6V">
                                    <div data-analytics-tag="checklist-heading-from">
                                      <h2 class="heading-2-ZDzRe root-PihPG">
                                        <span class="root-3TDqk large-23Nnp title-35amJ">
                                          From
                                        </span>
                                      </h2>
                                    </div>
                                    <div class="stack-1qp4V spacing2-3AKCb">
                                      <div class="stack-1qp4V">
                                        <div class="cluster-3D5Qr">
                                          <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing2-3-fWQ">
                                            <span class="root-3TDqk medium-3AcAC">
                                              Ali
                                            </span>
                                            <span
                                              class="root-3TDqk medium-3AcAC"
                                              role="separator"
                                            >
                                              •
                                            </span>
                                            <span class="root-3TDqk medium-3AcAC">
                                              farmvillekings@gmail.com
                                            </span>
                                          </div>
                                        </div>
                                        <p
                                          class="root-3TDqk small-2qKd5 style-KcqU4"
                                          data-testid="munging-help-text"
                                          id="style-KcqU4"
                                        >
                                          To{" "}
                                          <a
                                            href="https://mailchimp.com/help/limitations-of-free-email-addresses/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            ensure delivery
                                          </a>
                                          , we'll change your from address to
                                          farmvillekings@208282654.mailchimpapp.com
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="action-20G5v"
                                data-analytics-tag="checklist-button-from"
                              >
                                <button
                                  class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-EXvCm"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Edit from
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="root-6p7-2 slat-9mBgs"
                      id="mc-checklist-step-subject"
                    >
                      <div class="wrapper-3ln44 snipcss-OmtRl">
                        <div class="stack-1qp4V">
                          <div class="cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ-">
                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon empty-11uD-"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="stack-1qp4V content-2tH6V">
                                    <div data-analytics-tag="checklist-heading-subject">
                                      <h2 class="heading-2-ZDzRe root-PihPG">
                                        <span class="root-3TDqk large-23Nnp title-35amJ">
                                          Subject
                                        </span>
                                      </h2>
                                    </div>
                                    <p class="root-3TDqk medium-secondary-1YIN8">
                                      What's the subject line for this email?
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {editsubject === true ? null : (
                                <div
                                  class="action-20G5v"
                                  data-analytics-tag="checklist-button-subject"
                                >
                                  <button
                                    class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-EXvCm"
                                    type="button"
                                  >
                                    <span
                                      class="temporarySpan-2iF2p"
                                      onClick={handleAddSubject}
                                    >
                                      Add subject
                                    </span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {editsubject === true ? (
                        <div class="">
                          <div class="stack-1qp4V snipcss0-1-1-2">
                            <div class="cluster-3D5Qr nowrap-34OZ- snipcss0-2-2-3">
                              <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR snipcss0-3-3-4">
                                <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ- snipcss0-4-4-5">
                                  <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss0-5-5-6">
                                    <div class="stack-1qp4V content-2tH6V snipcss0-6-6-9">
                                      <form
                                        class="stack-1qp4V spacing7-3UvBh"
                                        novalidate=""
                                        id="form-0s0bj"
                                      >
                                        <div class="switcher-2RqDX">
                                          <div class="spacing4-3hzb7">
                                            <div class="stack-1qp4V spacing4-1xt6w">
                                              <div class="root-2RFjU">
                                                <div class="before-2EDUs">
                                                  <label
                                                    class="mcds-label-default"
                                                    id="mc:8"
                                                    for="subject-input-ai-assist"
                                                  >
                                                    <span>Subject</span>
                                                  </label>
                                                </div>
                                                <div>
                                                  <input
                                                    style={{
                                                      height: "50px",
                                                      border: "1px solid black",
                                                      paddingLeft: "10px",
                                                    }}
                                                    type="text"
                                                    id="subject-input-ai-assist"
                                                    aria-describedby="mc:9 mc:11"
                                                    aria-invalid="false"
                                                    name="subject"
                                                    value={
                                                      singleComaping?.subject
                                                    }
                                                    onChange={(e) =>
                                                      setSubject(e.target.value)
                                                    }
                                                  />
                                                  <span
                                                    id="mc:11"
                                                    class="inputSuffix-1JIHK"
                                                    data-input-suffix="true"
                                                  >
                                                    <button
                                                      class="root-1khsy"
                                                      aria-expanded="false"
                                                      type="button"
                                                    >
                                                      <span class="wink-visually-hidden">
                                                        Default EmojiIcon
                                                      </span>
                                                      <br />
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        class="wink-icon"
                                                      >
                                                        <path d="M19 0h2v3h3v2h-3v3h-2V5h-3V3h3V0zm1 12a8 8 0 11-7-7.938V2.049A10.318 10.318 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.338-.017-.671-.05-1h-2.012c.041.328.062.661.062 1z"></path>
                                                        <path d="M8 8a1 1 0 112 0v2a1 1 0 11-2 0V8zm6 0a1 1 0 112 0v2a1 1 0 11-2 0V8zm-2 10c-2.608 0-4.75-2.197-4.98-5h9.96c-.23 2.803-2.372 5-4.98 5z"></path>
                                                      </svg>
                                                    </button>
                                                  </span>
                                                </div>
                                                <br />
                                                <div
                                                  id="mc:9"
                                                  class="after-1Svqq secondary-2IrH1"
                                                >
                                                  <div>
                                                    <p class="root-3TDqk small-secondary-3_Rq2">
                                                      See how your{" "}
                                                      <button
                                                        style={{
                                                          backgroundColor:
                                                            "transparent",
                                                          textDecoration:
                                                            "underline",
                                                          color: "#007c89",
                                                          fontSize: "13px",
                                                          marginLeft: "0",
                                                          marginRight: "0",
                                                        }}
                                                      >
                                                        <span class="">
                                                          recent subject lines
                                                        </span>
                                                      </button>{" "}
                                                      performed.{" "}
                                                      <a
                                                        href="https://mailchimp.com/help/best-practices-for-email-subject-lines/"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        style={{
                                                          textDecoration:
                                                            "underline",
                                                        }}
                                                      >
                                                        View our subject line
                                                        guide.
                                                      </a>
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="root-2RFjU">
                                                <div class="before-2EDUs">
                                                  <label
                                                    class="mcds-label-default"
                                                    id="mc:15"
                                                    for="mc:14"
                                                  >
                                                    Preview Text
                                                  </label>
                                                </div>
                                                <div class="">
                                                  <input
                                                    style={{
                                                      height: "50px",
                                                      border: "1px solid black",
                                                      paddingLeft: "10px",
                                                    }}
                                                    type="text"
                                                    id="mc:14"
                                                    aria-describedby="mc:16 mc:18"
                                                    aria-invalid="false"
                                                    name="preview"
                                                    value={
                                                      singleComaping.previewtext
                                                    }
                                                    onChange={(e) =>
                                                      setPreviewText(
                                                        e.target.value
                                                      )
                                                    }
                                                  />
                                                  <span
                                                    id="mc:18"
                                                    class="inputSuffix-1JIHK"
                                                    data-input-suffix="true"
                                                  >
                                                    <button
                                                      class="root-1khsy"
                                                      aria-expanded="false"
                                                      type="button"
                                                    >
                                                      <span class="wink-visually-hidden">
                                                        Default EmojiIcon
                                                      </span>
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        focusable="false"
                                                        aria-hidden="true"
                                                        class="wink-icon"
                                                      >
                                                        <path d="M19 0h2v3h3v2h-3v3h-2V5h-3V3h3V0zm1 12a8 8 0 11-7-7.938V2.049A10.318 10.318 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.338-.017-.671-.05-1h-2.012c.041.328.062.661.062 1z"></path>
                                                        <path d="M8 8a1 1 0 112 0v2a1 1 0 11-2 0V8zm6 0a1 1 0 112 0v2a1 1 0 11-2 0V8zm-2 10c-2.608 0-4.75-2.197-4.98-5h9.96c-.23 2.803-2.372 5-4.98 5z"></path>
                                                      </svg>
                                                    </button>
                                                  </span>
                                                </div>
                                                <div
                                                  id="mc:16"
                                                  class="after-1Svqq secondary-2IrH1"
                                                >
                                                  <p class="root-3TDqk small-secondary-3_Rq2">
                                                    <a
                                                      href="https://mailchimp.com/help/about-preview-text"
                                                      rel="noopener noreferrer"
                                                      target="_blank"
                                                    >
                                                      Preview text
                                                    </a>{" "}
                                                    appears in the inbox after
                                                    the subject line.
                                                  </p>
                                                </div>
                                              </div>
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <button
                                                    onClick={submitsaveSubject}
                                                    class="root-sBgFt container-3-bH7 primary-33czz button-3mfLr"
                                                  >
                                                    <span class="temporarySpan-2iF2p">
                                                      Save
                                                    </span>
                                                  </button>
                                                  <button
                                                    class="root-sBgFt container-3-bH7 secondary-1_P2K"
                                                    type="button"
                                                  >
                                                    <span class="temporarySpan-2iF2p">
                                                      Cancel
                                                    </span>
                                                  </button>
                                                </div>
                                              </div>
                                              <br />
                                            </div>
                                            <div></div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </li>
                    <li
                      class="root-6p7-2 slat-9mBgs"
                      id="mc-checklist-step-sendTime"
                    >
                      <div class="wrapper-3ln44 snipcss-aVDRs">
                        <div class="stack-1qp4V">
                          <div class="cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ-">
                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon empty-11uD-"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="stack-1qp4V content-2tH6V">
                                    <div data-analytics-tag="checklist-heading-sendtime">
                                      <h2 class="heading-2-ZDzRe root-PihPG">
                                        <span class="root-3TDqk large-23Nnp title-35amJ">
                                          Send time
                                        </span>
                                      </h2>
                                    </div>
                                    <div class="stack-1qp4V spacing4-1xt6w">
                                      <p class="root-3TDqk medium-secondary-1YIN8">
                                        When should we send this email?
                                      </p>
                                    </div>
                                    {edittime === true ? (
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR snipcss0-5-5-6 snipcss-xUX4H">
                                        <div class="stack-1qp4V content-2tH6V snipcss0-6-6-9">
                                          <form
                                            class="stack-1qp4V"
                                            novalidate=""
                                            id="form-q3w8n"
                                          >
                                            <div class="stack-1qp4V spacing7-3UvBh">
                                              <div class="stack-1qp4V spacing6-nznRY">
                                                <div class="stack-1qp4V spacing2-3AKCb">
                                                  <div class="stack-1qp4V spacing6-nznRY"></div>
                                                  <fieldset
                                                    name="sendType"
                                                    class="fieldset-3ISha"
                                                  >
                                                    <legend class="mcds-label-default">
                                                      <p class="root-3TDqk medium-3AcAC wink-visually-hidden">
                                                        When should we send this
                                                        email?
                                                      </p>
                                                    </legend>
                                                    <div class="switcher-2RqDX">
                                                      <div class="spacing4-3hzb7">
                                                        <div class="stack-1qp4V wrapper-3mGNv checked-V5K2c horizontal-OVUIx">
                                                          <div class="selection-2lZ94">
                                                            <label
                                                              for="mc:25"
                                                              class="card-sV9SD"
                                                            >
                                                              <div class="wink-visually-hidden">
                                                                <input
                                                                  id="mc:25"
                                                                  type="radio"
                                                                  aria-describedby="mc:28"
                                                                  aria-labelledby="mc:26"
                                                                  value=""
                                                                  checked=""
                                                                />
                                                              </div>
                                                              <div class=""></div>
                                                              <div class="copy-2C1ww">
                                                                <div
                                                                  id="mc:26"
                                                                  class="label-1MzSN"
                                                                >
                                                                  Schedule a
                                                                  time
                                                                </div>
                                                                <div
                                                                  class="description-FWLr9"
                                                                  id="mc:28"
                                                                >
                                                                  Optimize your
                                                                  timing
                                                                </div>
                                                              </div>
                                                            </label>
                                                          </div>
                                                        </div>
                                                        <div class="stack-1qp4V wrapper-3mGNv horizontal-OVUIx">
                                                          <div class="selection-2lZ94">
                                                            <label
                                                              for="mc:29"
                                                              class="card-sV9SD"
                                                            >
                                                              <div class="wink-visually-hidden">
                                                                <input
                                                                  id="mc:29"
                                                                  type="radio"
                                                                  aria-describedby="mc:32"
                                                                  aria-labelledby="mc:30"
                                                                  value="sendNow"
                                                                />
                                                              </div>
                                                              <span class="unselectedCircle-2BQm_"></span>
                                                              <div class="copy-2C1ww">
                                                                <div
                                                                  id="mc:30"
                                                                  class="label-1MzSN"
                                                                >
                                                                  Send now
                                                                </div>
                                                                <div
                                                                  class="description-FWLr9"
                                                                  id="mc:32"
                                                                >
                                                                  Get your email
                                                                  out there now
                                                                </div>
                                                              </div>
                                                            </label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </fieldset>
                                                </div>
                                                <div class="stack-1qp4V spacing6-nznRY">
                                                  <div class="cluster-3D5Qr">
                                                    <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                      <div class="root-2RFjU">
                                                        <div class="before-2EDUs">
                                                          <label
                                                            class="mcds-label-default"
                                                            id="mc:34"
                                                            for="mc:33"
                                                          >
                                                            Delivery date
                                                          </label>
                                                        </div>
                                                        <div
                                                          style={{
                                                            display: "flex",
                                                            border:
                                                              "1px solid black",
                                                            height: "40px",
                                                            padding: "5px 10px",
                                                          }}
                                                        >
                                                          <input
                                                            style={{
                                                              height: "20px",
                                                            }}
                                                            type="text"
                                                            id="mc:33"
                                                            aria-describedby="mc:37"
                                                            aria-invalid="false"
                                                            name="schedule-date"
                                                            value="2024-04-30"
                                                          />
                                                          <span
                                                            id="mc:37"
                                                            class="inputSuffix-1JIHK"
                                                            data-input-suffix="true"
                                                          >
                                                            <button
                                                              class="root-1khsy"
                                                              type="button"
                                                            >
                                                              <span class="wink-visually-hidden">
                                                                Open date picker
                                                              </span>
                                                              <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                class="wink-icon"
                                                              >
                                                                <path d="M7 13a1 1 0 100-2 1 1 0 000 2zm0 5a1 1 0 100-2 1 1 0 000 2zm6-6a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2zm6-6a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                                                                <path
                                                                  fill-rule="evenodd"
                                                                  clip-rule="evenodd"
                                                                  d="M3 1a2 2 0 00-2 2v20h22V3a2 2 0 00-2-2H3zm18 7H3v13h18V8z"
                                                                ></path>
                                                              </svg>
                                                            </button>
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <br />
                                                  <fieldset
                                                    name="schedule-options"
                                                    class="fieldset-3ISha"
                                                  >
                                                    <legend class="mcds-label-default">
                                                      Delivery time
                                                    </legend>
                                                    <div class="root-bk32G">
                                                      <input
                                                        class="input-1Cccs"
                                                        id="mc:41"
                                                        type="radio"
                                                        aria-describedby="mc:42"
                                                        value="optimize"
                                                      />
                                                      <div class="text-3qpwu">
                                                        <label
                                                          for="mc:41"
                                                          class=""
                                                        >
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <p class="root-3TDqk medium-bold-2nZ0J">
                                                                Send Time
                                                                Optimization
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </label>
                                                        <div
                                                          id="mc:42"
                                                          class="description-1vTjM"
                                                        >
                                                          <div class="stack-1qp4V spacing4-1xt6w text-o3ubO">
                                                            <p class="root-3TDqk medium-secondary-1YIN8">
                                                              The best send time
                                                              for maximum
                                                              engagement when
                                                              scheduling at
                                                              least 48 hours in
                                                              advance.
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div class="root-bk32G">
                                                      <input
                                                        class="input-1Cccs"
                                                        id="mc:43"
                                                        type="radio"
                                                        aria-describedby="mc:44"
                                                        value="singled"
                                                      />
                                                      <div class="text-3qpwu">
                                                        <label
                                                          for="mc:43"
                                                          class=""
                                                        >
                                                          <div class="cluster-3D5Qr">
                                                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                              <p class="root-3TDqk medium-bold-2nZ0J">
                                                                Send at a
                                                                specific time
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </label>
                                                        <div
                                                          id="mc:44"
                                                          class="description-1vTjM"
                                                        >
                                                          <div class="stack-1qp4V spacing4-1xt6w text-o3ubO">
                                                            <p class="root-3TDqk medium-secondary-1YIN8">
                                                              Send email
                                                              according to the
                                                              time zone in your
                                                              account settings.
                                                            </p>
                                                            <br />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </fieldset>
                                                </div>
                                              </div>
                                              <div class="cluster-3D5Qr">
                                                <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                                  <button
                                                    onClick={handlesaveTimebtn}
                                                    class="root-sBgFt container-3-bH7 primary-33czz button-3mfLr"
                                                  >
                                                    <span class="temporarySpan-2iF2p">
                                                      Save
                                                    </span>
                                                  </button>
                                                  <button
                                                    class="root-sBgFt container-3-bH7 secondary-1_P2K"
                                                    type="button"
                                                  >
                                                    <span class="temporarySpan-2iF2p">
                                                      Cancel
                                                    </span>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                              {edittime === true ? null : (
                                <div
                                  class="action-20G5v"
                                  data-analytics-tag="checklist-button-sendtime"
                                >
                                  <button
                                    onClick={openaddTime}
                                    class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-EXvCm"
                                  >
                                    <span class="temporarySpan-2iF2p">
                                      Add send time
                                    </span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="root-6p7-2 slat-9mBgs"
                      id="mc-checklist-step-content"
                    >
                      <div class="wrapper-3ln44">
                        <div class="stack-1qp4V">
                          <div class="cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsFlexStart-3pYa_ justifySpaceBetween-2M_OY spacing4-1S_zR">
                              <div class="step-J8N2F cluster-3D5Qr nowrap-34OZ-">
                                <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      focusable="false"
                                      aria-hidden="true"
                                      class="wink-icon empty-11uD-"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm5.707-14.293l-1.414-1.414L10 13.586l-2.293-2.293-1.414 1.414L10 16.414l7.707-7.707z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="stack-1qp4V content-2tH6V">
                                    <div data-analytics-tag="checklist-heading-content">
                                      <h2 class="heading-2-ZDzRe root-PihPG">
                                        <span class="root-3TDqk large-23Nnp title-35amJ">
                                          Content
                                        </span>
                                      </h2>
                                    </div>
                                    <div class="root-3M7CG cluster-3D5Qr">
                                      <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                        <div class="stack-1qp4V spacing4-1xt6w">
                                          <p class="root-3TDqk medium-secondary-1YIN8">
                                            Design the Content for your email.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="action-20G5v"
                                data-analytics-tag="checklist-button-content"
                              >
                                <button
                                  class="root-sBgFt container-3-bH7 secondary-1_P2K actionButton-EXvCm"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    <Link
                                      to="/choosetemplate"
                                      style={{ color: "unset" }}
                                    >
                                      Design email
                                    </Link>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="stack-1qp4V spacing6-nznRY">
                    <br />
                    <h2 class="heading-3-eDQNF shareCampaignUrlHeading-1pvS0 root-PihPG">
                      Share Your Email
                    </h2>
                    <div class="stack-1qp4V spacing2-3AKCb">
                      <p class="root-3TDqk large-23Nnp">Email Link</p>
                      <div class="cluster-3D5Qr">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <p class="root-3TDqk small-2qKd5">
                            https://mailchi.mp/informactic/[xxxxxx]
                          </p>
                          <button class="root-sBgFt root-22EAH" type="button">
                            Edit
                          </button>
                        </div>
                      </div>
                      <p class="root-3TDqk medium-3AcAC">
                        Want to brand your email link? Click edit to create a
                        custom URL.
                      </p>
                    </div>
                  </div>
                  <div class="stack-1qp4V spacing7-3UvBh">
                    <br />
                    <h2 class="heading-3-eDQNF socialPostsHeading-1Rz3D root-PihPG">
                      Add A Social Post To Your Email
                    </h2>
                    <br />
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <div class="cluster-3D5Qr nowrap-34OZ-">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <div class="socialPostPlatformName-1JvPv cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                              <img
                                class="socialIcon-2-dGZ"
                                src="https://cdn-images.mailchimp.com/product/icons/facebook.svg"
                                alt="Facebook icon"
                              />
                              <p class="root-3TDqk medium-3AcAC">Facebook</p>
                            </div>
                          </div>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              color: "#0b8495",
                              textDecoration: "underline",
                            }}
                            type="button"
                            class="root-EzRO6"
                          >
                            <span class="span-2w7il">Connect Facebook</span>
                          </button>
                        </div>
                      </div>
                      <br />
                    </div>
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <div class="cluster-3D5Qr nowrap-34OZ-">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <div class="socialPostPlatformName-1JvPv cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                              <img
                                class="socialIcon-2-dGZ"
                                src="https://storage.googleapis.com/mc-marketplace-assets-prod/twitter_x_logo_oct1323.svg"
                                alt="X (formerly Twitter) icon"
                              />
                              <p class="root-3TDqk medium-3AcAC">
                                X (formerly Twitter)
                              </p>
                            </div>
                          </div>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              color: "#0b8495",
                              textDecoration: "underline",
                            }}
                            type="button"
                            class="root-EzRO6"
                          >
                            <span class="span-2w7il">
                              Connect X (formerly Twitter)
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <div class="cluster-3D5Qr nowrap-34OZ-">
                        <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                          <div class="socialPostPlatformName-1JvPv cluster-3D5Qr nowrap-34OZ-">
                            <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                              <img
                                class="socialIcon-2-dGZ"
                                src="https://cdn-images.mailchimp.com/product/icons/ig_2x36.png"
                                alt="Instagram icon"
                              />
                              <p class="root-3TDqk medium-3AcAC">Instagram</p>
                            </div>
                          </div>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              color: "#0b8495",
                              textDecoration: "underline",
                            }}
                            type="button"
                            class="root-EzRO6"
                          >
                            <span class="span-2w7il">Connect Instagram</span>
                          </button>
                        </div>
                        <br />
                      </div>
                      <p class="root-3TDqk medium-3AcAC">
                        To add an Instagram post, connect an Instagram business
                        profile to your Facebook page.{" "}
                        <a
                          href="https://mailchimp.com/help/add-instagram-facebook-page/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn how to connect Instagram
                        </a>
                      </p>
                    </div>
                    <br />
                  </div>
                  <div class="stack-1qp4V spacing4-1xt6w root-NPngR">
                    <div class="cluster-3D5Qr">
                      <div class="alignItemsCenter-1HCiJ justifySpaceBetween-2M_OY spacing4-1S_zR">
                        <h3 class="heading-3-eDQNF root-PihPG">
                          Settings &amp; Tracking
                        </h3>
                        <button
                          class="root-sBgFt container-3-bH7 secondary-1_P2K"
                          type="button"
                        >
                          <span class="temporarySpan-2iF2p">Edit</span>
                        </button>
                      </div>
                    </div>
                    <div class="switcher-2RqDX">
                      <div class="spacing2-1pqd3">
                        <ul class="list-2l3Ca mcds-list-ul-default medium-2MMNY">
                          <li class="listItem-YU24s">
                            You're{" "}
                            <span class="root-3TDqk medium-bold-2nZ0J">
                              not using Inbox
                            </span>{" "}
                            to manage replies.
                          </li>
                          <li class="listItem-YU24s">
                            Your{" "}
                            <span class="root-3TDqk medium-bold-2nZ0J">
                              embedded videos will not auto-convert
                            </span>{" "}
                            into linked thumbnail images.
                          </li>
                          <li class="listItem-YU24s">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                                <span class="root-3TDqk medium-3AcAC">
                                  You're{" "}
                                  <span class="root-3TDqk medium-bold-2nZ0J">
                                    {" "}
                                    tracking opens
                                  </span>
                                  .
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="listItem-YU24s">
                            <div class="cluster-3D5Qr">
                              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1">
                                <span class="root-3TDqk medium-3AcAC">
                                  You're{" "}
                                  <span class="root-3TDqk medium-bold-2nZ0J">
                                    {" "}
                                    tracking clicks
                                  </span>
                                  .
                                </span>
                              </div>
                            </div>
                          </li>
                          <li class="listItem-YU24s">
                            You're{" "}
                            <span class="root-3TDqk medium-bold-2nZ0J">
                              not tracking plain-text clicks
                            </span>
                            .
                          </li>
                          <li class="listItem-YU24s">
                            You're{" "}
                            <span class="root-3TDqk medium-bold-2nZ0J">
                              not tracking e-commerce link activity
                            </span>
                            .
                          </li>
                        </ul>
                        <ul class="list-2l3Ca mcds-list-ul-default medium-2MMNY"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="previewContainerMax-3Ssp5">
                <div id="style-wjezw" class="style-wjezw">
                  <div class="fixedContainer-1mAqZ">
                    <div class="stack-1qp4V spacing7-3UvBh">
                      <img
                        alt="Empty email preview"
                        src={singleComaping?.chooseemailtemplate}
                      />
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

export default EditCompaing;

import React, { useContext, useRef, useState } from "react";
import "../styles/ChooseTemplate.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
const ChooseEmail = () => {
  const [curretRoute, setCurrentRoute] = useState("template");
  const [openmodel, setOpenModel] = useState(false);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const navigation = useNavigate();
  const [url, setUrl] = useState("");

  const divRef = useRef(null);
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
  const handlemovenextpage = (image) => {
    handleUpdateState("chooseemailtemplate", image);
    navigation("/email/editor");
  };
  const handlecheckElement = () => {
    // Prevent the default behavior of the click event
    console.log("hello");
    console.log(divRef);
  };

  const halleakelable = (e) => {
    console.log(e);
  };
  const handleOpenPopup = () => {
    setOpenModel(true);
  };
  const openPreview = () => {
    const testLink = createTestLink(); // This function needs to be defined elsewhere or replaced with actual logic
    window.open(testLink, "Preview");
  };
  const uploadImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mailchimp");
    data.append("cloud_name", "usamaahmad");
    data.append("folder", "mailchimp");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/usamaahmad/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      console.log(res);
      setUrl(res.secure_url);
      handleUpdateState("chooseemailtemplate", res.secure_url);
      handleUpdateState("imageurl", res.secure_url);
      setLoading(false);
      // navigation("/allcompaings")
      console.log(url);
      setImage(null);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };
  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };
  const MovetoNext = async () => {
    try {
      await axios.post(
        "https://latest-mail-chimp-server.vercel.app/api/newcompaing",
        state
      );
      await axios.post(
        "https://latest-mail-chimp-server.vercel.app/api/reports",
        state
      );
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log("state", state);
  return (
    <div class="pageContainer-nmRCK pageContainer_templateSelection-20m_G snipcss-FYitB">
      <div class="root-3uY95">
        <a
          aria-label="Main dashboard"
          rel="Home"
          class="freddie-13Oae"
          data-analytics-tag="main-dashboard-link"
          href="/"
        >
          <img
            src="https://cdn-images.mailchimp.com/product/brand_assets/logos/mc-freddie-dark.svg"
            alt="Mailchimp logo"
            width="38"
            height="38"
          />
        </a>
        <div class="container-2aeSm">
          <header class="root-1rj4d standard-2H4cn header-3IL6q">
            <div class="cluster-3D5Qr nowrap-34OZ-">
              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                <div class="stack-1qp4V style-UTomA" id="style-UTomA">
                  <h1 class="heading-3-eDQNF root-PihPG">Select a template</h1>
                </div>
              </div>
            </div>
            <div></div>
            <div class="actions-1bN9W cluster-3D5Qr">
              <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                <button class="root-1khsy" type="button">
                  <span class="wink-visually-hidden">Close</span>
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
              </div>
            </div>
          </header>
        </div>
      </div>
      <div class="templateSelectionWrapperTop-RHcrm">
        <div class="root-1rj4d wide-2560n withBottomGutter-1OHF7">
          <div data-analytics-tag="tab-categories">
            <div class="wrapper-2GUvc">
              <div role="tablist" class="tabs-PDfKn tabList-2ZCac">
                <span
                  onClick={() => setCurrentRoute("template")}
                  style={
                    curretRoute === "template"
                      ? { color: "#007c89", borderBottom: "1px solid white" }
                      : { color: "unset" }
                  }
                  class="root-TPnFr large-1lNYH"
                >
                  Mailchimp Templates
                </span>
                <span
                  class="root-TPnFr large-1lNYH"
                  role="tab"
                  id="mc:10:tabs:1"
                  tabindex="-1"
                  aria-selected="false"
                  aria-controls="mc:10:tabs:1:panel"
                >
                  Saved Templates
                </span>
                <span
                  class="root-TPnFr large-1lNYH"
                  role="tab"
                  id="mc:10:tabs:2"
                  tabindex="-1"
                  aria-selected="false"
                  aria-controls="mc:10:tabs:2:panel"
                >
                  Recently Sent Emails
                </span>
                <span
                  class="root-TPnFr large-1lNYH"
                  role="tab"
                  id="mc:10:tabs:3"
                  tabindex="-1"
                  aria-selected="false"
                  aria-controls="mc:10:tabs:3:panel"
                >
                  Draft Emails
                </span>
                <span
                  style={
                    curretRoute === "codeown"
                      ? { color: "#007c89", borderBottom: "3px solid #007c89" }
                      : { color: "unset" }
                  }
                  onClick={() => setCurrentRoute("codeown")}
                  class="root-TPnFr large-1lNYH"
                  role="tab"
                  id="mc:10:tabs:4"
                  tabindex="-1"
                  aria-selected="false"
                  aria-controls="mc:10:tabs:4:panel"
                >
                  Code Your Own
                </span>
              </div>
              <span
                class="tabIndicator-2Ph-g style-xOlUL"
                id="style-xOlUL"
              ></span>
            </div>
          </div>
          {curretRoute === "template" && (
            <>
              <div
                class="tabPanel-JU-57"
                tabindex="-1"
                role="tabpanel"
                id="mc:10:tabs:0:panel"
                aria-labelledby="mc:10:tabs:0"
              >
                <div class="prebuiltTemplatesContainerFilterTop-7xToS">
                  <div class="filterContainerTop-1RZUy">
                    <div class="filterSelectContainer-3iPGr">
                      <div class="root-1cS4q filterSelectWrapper-2Jx4C">
                        <div class="before-fjpii">
                          <label
                            class="mcds-label-default wink-visually-hidden"
                            id="mc:162"
                            for="mc:161"
                          >
                            Email Purpose
                          </label>
                        </div>
                        <div class="selectWrapper-1gG6j">
                          <div class="">
                            <div
                              tabindex="0"
                              class="trigger-2GY5P"
                              id="mc:165-trigger"
                              aria-labelledby="mc:162"
                              role="combobox"
                              aria-autocomplete="none"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                            >
                              Email Purpose
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
                      <div class="root-1cS4q filterSelectWrapper-2Jx4C">
                        <div class="before-fjpii">
                          <label
                            class="mcds-label-default wink-visually-hidden"
                            id="mc:167"
                            for="mc:166"
                          >
                            Industry
                          </label>
                        </div>
                        <div class="selectWrapper-1gG6j">
                          <div class="">
                            <div
                              tabindex="0"
                              class="trigger-2GY5P"
                              id="mc:170-trigger"
                              aria-labelledby="mc:167"
                              role="combobox"
                              aria-autocomplete="none"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                            >
                              Industry
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
                      <div class="root-1cS4q filterSelectWrapper-2Jx4C">
                        <div class="before-fjpii">
                          <label
                            class="mcds-label-default wink-visually-hidden"
                            id="mc:172"
                            for="mc:171"
                          >
                            Style
                          </label>
                        </div>
                        <div class="selectWrapper-1gG6j">
                          <div class="">
                            <div
                              tabindex="0"
                              class="trigger-2GY5P"
                              id="mc:175-trigger"
                              aria-labelledby="mc:172"
                              role="combobox"
                              aria-autocomplete="none"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                            >
                              Style
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
                    <div class="buttonsRight-xvAui">
                      <button
                        type="button"
                        disabled=""
                        class="clearAllButton-3J-R5"
                      >
                        Clear all
                      </button>
                      <p
                        class="root-3TDqk medium-3AcAC templateCount-3mYNo"
                        data-testid="templateCountWithCAText"
                      >
                        137 templates
                      </p>
                      <div class="customEmailDesignsToggle-22NPO">
                        <div class="root-3VS64">
                          <div class="content-1vvD0">
                            <div id="mc:177" class="">
                              Branded emails
                            </div>
                          </div>
                          <div class="toggleGroup-3QVDw">
                            <button
                              class="toggle-2Rjco"
                              type="button"
                              aria-pressed="false"
                              aria-labelledby="mc:177"
                            >
                              <span class="knob-iNyaw"></span>
                            </button>
                          </div>
                        </div>
                        <span role="status" aria-atomic="true">
                          <span class="wink-visually-hidden"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="style-mN7As" class="style-mN7As">
                    <div
                      class="stack-1qp4V spacing2-3AKCb container-mXytM isTopPosition-rIVjA"
                      data-testid="brandImport"
                    >
                      <img
                        class="image-1-zfK"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/purchase-experience/brand-import.png"
                        alt=""
                      />
                      <div class="textContainer-26aOX">
                        <h2 class="heading-3-eDQNF root-PihPG">
                          Branded emails in one click for Next Web Lines
                        </h2>
                        <button
                          class="root-1khsy closeButton-s766W"
                          type="button"
                        >
                          <span class="wink-visually-hidden">close</span>
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
                        <div class="stack-1qp4V spacing6-nznRY">
                          <p class="root-3TDqk small-2qKd5 subtitle-1l3-h">
                            Your plan includes custom, branded email designs at{" "}
                            <strong>no additional cost.</strong>
                          </p>
                          <form
                            class="stack-1qp4V spacing6-nznRY"
                            novalidate=""
                            id="form-p8iln"
                          >
                            <div class="root-2RFjU input-23g1C">
                              <div class="before-2EDUs">
                                <label
                                  class="mcds-label-default"
                                  id="mc:14"
                                  for="mc:13"
                                >
                                  Enter Your Website URL:
                                </label>
                              </div>
                              <div class="inputWrapper-TVkf7">
                                <input
                                  type="text"
                                  id="mc:13"
                                  aria-invalid="false"
                                  name="url"
                                  value=""
                                />
                              </div>
                            </div>
                            <p class="root-3TDqk small-secondary-3_Rq2 inputDescription-2lwyZ">
                              By clicking “Import My Brand”, you represent and
                              warrant that you own or have permission to use all
                              of the content from this website.
                            </p>
                            <div>
                              <button
                                class="root-sBgFt container-3-bH7 primary-33czz button-3mfLr"
                                type="submit"
                              >
                                <span class="temporarySpan-2iF2p">
                                  Import my brand
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      class="templateOrderSelection-3nYmy"
                      data-testid="prebuiltOrderedTemplates"
                    >
                      <div>
                        <div
                          class="root-209cT gap6-U7x7I grid-3AAp- style-gTpG1"
                          id="style-gTpG1"
                        >
                          <label
                            for="Start from scratch"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Start from scratch"
                            aria-label="Start from scratch"
                          >
                            <input
                              id="Start from scratch"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Start from scratch"
                            />
                            <div
                              ref={divRef}
                              onClick={handlecheckElement}
                              class="templateThumbnailContainer-1Fp1C style-BSZRJ"
                              id="style-BSZRJ"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Start from scratch</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://s3.amazonaws.com/cdn-images.mailchimp.com/template_images/email/thumbnails/2x/scratch.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Bold"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Bold"
                            aria-label="Bold"
                          >
                            <input
                              id="Bold"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Bold"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-QcZd9"
                              id="style-QcZd9"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Bold</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Bold.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Minimal"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Minimal"
                            aria-label="Minimal"
                          >
                            <input
                              id="Minimal"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Minimal"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ntQl1"
                              id="style-ntQl1"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Minimal</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Minimal.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Natural"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Natural"
                            aria-label="Natural"
                          >
                            <input
                              id="Natural"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Natural"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-p2WrU"
                              id="style-p2WrU"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Natural</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Natural.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Simple Text"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Simple Text"
                            aria-label="Simple Text"
                          >
                            <input
                              id="Simple Text"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Simple Text"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-wEOoP"
                              id="style-wEOoP"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Simple Text</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Simple_text.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Gallery"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Gallery"
                            aria-label="Gallery"
                          >
                            <input
                              id="Gallery"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Gallery"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ipS3g"
                              id="style-ipS3g"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Gallery</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Gallery.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Survey"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Survey"
                            aria-label="Survey"
                          >
                            <input
                              id="Survey"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Survey"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-17Dld"
                              id="style-17Dld"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Survey</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Survey.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="SMS"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="SMS"
                            aria-label="SMS"
                          >
                            <input
                              id="SMS"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="SMS"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-PjUJs"
                              id="style-PjUJs"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">SMS</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/Sms.png"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="1:2:1 Column"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="1:2:1 Column"
                            aria-label="1:2:1 Column"
                          >
                            <input
                              id="1:2:1 Column"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="1:2:1 Column"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-pEEjF"
                              id="style-pEEjF"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">1:2:1 Column</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/500.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="1:2 Column"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="1:2 Column"
                            aria-label="1:2 Column"
                          >
                            <input
                              id="1:2 Column"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="1:2 Column"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-8n2BP"
                              id="style-8n2BP"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">1:2 Column</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/501.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="1:2:1:2 Column"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="1:2:1:2 Column"
                            aria-label="1:2:1:2 Column"
                          >
                            <input
                              id="1:2:1:2 Column"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="1:2:1:2 Column"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-GiaNG"
                              id="style-GiaNG"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">1:2:1:2 Column</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/502.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="1:3 Column"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="1:3 Column"
                            aria-label="1:3 Column"
                          >
                            <input
                              id="1:3 Column"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="1:3 Column"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-dpfUX"
                              id="style-dpfUX"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">1:3 Column</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/503.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="1:3:1:3 Column"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="1:3:1:3 Column"
                            aria-label="1:3:1:3 Column"
                          >
                            <input
                              id="1:3:1:3 Column"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="1:3:1:3 Column"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-vYYNF"
                              id="style-vYYNF"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">1:3:1:3 Column</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/504.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sell products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sell products"
                            aria-label="Sell products"
                          >
                            <input
                              id="Sell products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sell products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-JBCgK"
                              id="style-JBCgK"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sell products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/505.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Make an announcement"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Make an announcement"
                            aria-label="Make an announcement"
                          >
                            <input
                              id="Make an announcement"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Make an announcement"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-xLDno"
                              id="style-xLDno"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Make an announcement</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/506.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Tell a story"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Tell a story"
                            aria-label="Tell a story"
                          >
                            <input
                              id="Tell a story"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Tell a story"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-GklBo"
                              id="style-GklBo"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Tell a story</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/507.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Welcome "
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Welcome "
                            aria-label="Welcome "
                          >
                            <input
                              id="Welcome "
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Welcome "
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-yYLec"
                              id="style-yYLec"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Welcome </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/508.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Educate"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Educate"
                            aria-label="Educate"
                          >
                            <input
                              id="Educate"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Educate"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-JDtfX"
                              id="style-JDtfX"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Educate</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/509.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Weekly newsletter"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Weekly newsletter"
                            aria-label="Weekly newsletter"
                          >
                            <input
                              id="Weekly newsletter"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Weekly newsletter"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-GorY7"
                              id="style-GorY7"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Weekly newsletter</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/510.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Welcome new subscribers"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Welcome new subscribers"
                            aria-label="Welcome new subscribers"
                          >
                            <input
                              id="Welcome new subscribers"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Welcome new subscribers"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-EZTYQ"
                              id="style-EZTYQ"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Welcome new subscribers
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpageurl(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/511.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Advertise app"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Advertise app"
                            aria-label="Advertise app"
                          >
                            <input
                              id="Advertise app"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Advertise app"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Q3Abb"
                              id="style-Q3Abb"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Advertise app</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/512.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Services promotion"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Services promotion"
                            aria-label="Services promotion"
                          >
                            <input
                              id="Services promotion"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Services promotion"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-8LT6g"
                              id="style-8LT6g"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Services promotion</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/513.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New product categories"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New product categories"
                            aria-label="New product categories"
                          >
                            <input
                              id="New product categories"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New product categories"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-OaDTk"
                              id="style-OaDTk"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New product categories
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/514.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Featured services"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Featured services"
                            aria-label="Featured services"
                          >
                            <input
                              id="Featured services"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Featured services"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-WScpX"
                              id="style-WScpX"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Featured services</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/515_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Invitation"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Invitation"
                            aria-label="Invitation"
                          >
                            <input
                              id="Invitation"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Invitation"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-X3qNg"
                              id="style-X3qNg"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Invitation</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/516_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New product announcement"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New product announcement"
                            aria-label="New product announcement"
                          >
                            <input
                              id="New product announcement"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New product announcement"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-skstY"
                              id="style-skstY"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New product announcement
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/517_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Featured product category"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Featured product category"
                            aria-label="Featured product category"
                          >
                            <input
                              id="Featured product category"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Featured product category"
                            />
                            <div
                              class="templateThumbnailContainer-1Fp1C style-O2Yen"
                              id="style- O2Yen"
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Featured product category
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/518_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thank you personalized"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thank you personalized"
                            aria-label="Thank you personalized"
                          >
                            <input
                              id="Thank you personalized"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thank you personalized"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-t6IhO"
                              id="style-t6IhO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Thank you personalized
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/519_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thank you discount"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thank you discount"
                            aria-label="Thank you discount"
                          >
                            <input
                              id="Thank you discount"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thank you discount"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-D8x6q"
                              id="style-D8x6q"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Thank you discount</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/520_lg.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Announcement"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Announcement"
                            aria-label="Announcement"
                          >
                            <input
                              id="Announcement"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Announcement"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-gOh5e"
                              id="style-gOh5e"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Announcement</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/521.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Learn more"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Learn more"
                            aria-label="Learn more"
                          >
                            <input
                              id="Learn more"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Learn more"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-b3YRs"
                              id="style-b3YRs"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Learn more</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/522.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event calendar"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event calendar"
                            aria-label="Event calendar"
                          >
                            <input
                              id="Event calendar"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event calendar"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-mvyjw"
                              id="style-mvyjw"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event calendar</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/523.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Welcome new customers"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Welcome new customers"
                            aria-label="Welcome new customers"
                          >
                            <input
                              id="Welcome new customers"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Welcome new customers"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-FAA2Z"
                              id="style-FAA2Z"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Welcome new customers
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/524.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thank you promo"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thank you promo"
                            aria-label="Thank you promo"
                          >
                            <input
                              id="Thank you promo"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thank you promo"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Xf7k9"
                              id="style-Xf7k9"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Thank you promo</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/525.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Party invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Party invite"
                            aria-label="Party invite"
                          >
                            <input
                              id="Party invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Party invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-j6nrm"
                              id="style-j6nrm"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Party invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/527.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event thank you"
                            aria-label="Event thank you"
                          >
                            <input
                              id="Event thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-fjzxc"
                              id="style-fjzxc"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/528.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Services spotlight"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Services spotlight"
                            aria-label="Services spotlight"
                          >
                            <input
                              id="Services spotlight"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Services spotlight"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Zs77N"
                              id="style-Zs77N"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Services spotlight</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/529.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Friendly welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Friendly welcome"
                            aria-label="Friendly welcome"
                          >
                            <input
                              id="Friendly welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Friendly welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ieQDk"
                              id="style-ieQDk"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Friendly welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/526.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Explore new collection"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Explore new collection"
                            aria-label="Explore new collection"
                          >
                            <input
                              id="Explore new collection"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Explore new collection"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-UFjvb"
                              id="style-UFjvb"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Explore new collection
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/530.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Meet the founder"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Meet the founder"
                            aria-label="Meet the founder"
                          >
                            <input
                              id="Meet the founder"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Meet the founder"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-kCjq6"
                              id="style-kCjq6"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Meet the founder</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/531.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Seasonal products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Seasonal products"
                            aria-label="Seasonal products"
                          >
                            <input
                              id="Seasonal products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Seasonal products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-QpMfq"
                              id="style-QpMfq"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Seasonal products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/532.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event speaker spotlight"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event speaker spotlight"
                            aria-label="Event speaker spotlight"
                          >
                            <input
                              id="Event speaker spotlight"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event speaker spotlight"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-OOcih"
                              id="style-OOcih"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Event speaker spotlight
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/533.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Editorial newsletter"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Editorial newsletter"
                            aria-label="Editorial newsletter"
                          >
                            <input
                              id="Editorial newsletter"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Editorial newsletter"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-i6NCN"
                              id="style-i6NCN"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Editorial newsletter</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/534.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Minimal welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Minimal welcome"
                            aria-label="Minimal welcome"
                          >
                            <input
                              id="Minimal welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Minimal welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-5JaUA"
                              id="style-5JaUA"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Minimal welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/535.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Upcoming events"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Upcoming events"
                            aria-label="Upcoming events"
                          >
                            <input
                              id="Upcoming events"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Upcoming events"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-NWoTK"
                              id="style-NWoTK"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Upcoming events</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/536.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thanks for attending"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thanks for attending"
                            aria-label="Thanks for attending"
                          >
                            <input
                              id="Thanks for attending"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thanks for attending"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-yN2bO"
                              id="style-yN2bO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Thanks for attending</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/537.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Multi-day event invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Multi-day event invite"
                            aria-label="Multi-day event invite"
                          >
                            <input
                              id="Multi-day event invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Multi-day event invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-opKeY"
                              id="style-opKeY"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Multi-day event invite
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/538.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event thank you"
                            aria-label="Event thank you"
                          >
                            <input
                              id="Event thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-kN5bO"
                              id="style-kN5bO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/539.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Announce new classes"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Announce new classes"
                            aria-label="Announce new classes"
                          >
                            <input
                              id="Announce new classes"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Announce new classes"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-o8hhX"
                              id="style-o8hhX"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Announce new classes</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/540.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Monthly newsletter"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Monthly newsletter"
                            aria-label="Monthly newsletter"
                          >
                            <input
                              id="Monthly newsletter"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Monthly newsletter"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-MNo1Q"
                              id="style-MNo1Q"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Monthly newsletter</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/541.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Explore products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Explore products"
                            aria-label="Explore products"
                          >
                            <input
                              id="Explore products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Explore products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-pNtzn"
                              id="style-pNtzn"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Explore products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/542.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="What we offer"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="What we offer"
                            aria-label="What we offer"
                          >
                            <input
                              id="What we offer"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="What we offer"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-bssDb"
                              id="style-bssDb"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">What we offer</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/543.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Featured interview"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Featured interview"
                            aria-label="Featured interview"
                          >
                            <input
                              id="Featured interview"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Featured interview"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ZZ4wL"
                              id="style-ZZ4wL"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Featured interview</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/544.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event"
                            aria-label="Event"
                          >
                            <input
                              id="Event"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-mqvQS"
                              id="style-mqvQS"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/545.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Explore services"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Explore services"
                            aria-label="Explore services"
                          >
                            <input
                              id="Explore services"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Explore services"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-nlOgw"
                              id="style-nlOgw"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Explore services</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/546.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Book a class winback"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Book a class winback"
                            aria-label="Book a class winback"
                          >
                            <input
                              id="Book a class winback"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Book a class winback"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-75Ogs"
                              id="style-75Ogs"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Book a class winback</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/547.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Get started"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Get started"
                            aria-label="Get started"
                          >
                            <input
                              id="Get started"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Get started"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-7qmKA"
                              id="style-7qmKA"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Get started</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/548.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="About us"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="About us"
                            aria-label="About us"
                          >
                            <input
                              id="About us"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="About us"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ettFo"
                              id="style-ettFo"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">About us</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/549.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thanks for signing up"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thanks for signing up"
                            aria-label="Thanks for signing up"
                          >
                            <input
                              id="Thanks for signing up"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thanks for signing up"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-z3oMx"
                              id="style-z3oMx"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Thanks for signing up
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/550.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Member thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Member thank you"
                            aria-label="Member thank you"
                          >
                            <input
                              id="Member thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Member thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-T2hVO"
                              id="style-T2hVO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Member thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/551.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="What's new"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="What's new"
                            aria-label="What's new"
                          >
                            <input
                              id="What's new"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="What's new"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-rfyn5"
                              id="style-rfyn5"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">What's new</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/553.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Winback promotion"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Winback promotion"
                            aria-label="Winback promotion"
                          >
                            <input
                              id="Winback promotion"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Winback promotion"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-bRwYS"
                              id="style-bRwYS"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Winback promotion</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/552.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thanks for joining us"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thanks for joining us"
                            aria-label="Thanks for joining us"
                          >
                            <input
                              id="Thanks for joining us"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thanks for joining us"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-boNG1"
                              id="style-boNG1"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Thanks for joining us
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/554.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Customer appreciation"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Customer appreciation"
                            aria-label="Customer appreciation"
                          >
                            <input
                              id="Customer appreciation"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Customer appreciation"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-9SDGP"
                              id="style-9SDGP"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Customer appreciation
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/555.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="About our products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="About our products"
                            aria-label="About our products"
                          >
                            <input
                              id="About our products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="About our products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-FIoQa"
                              id="style-FIoQa"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">About our products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/556.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New customer offer"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New customer offer"
                            aria-label="New customer offer"
                          >
                            <input
                              id="New customer offer"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New customer offer"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Ronb2"
                              id="style-Ronb2"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">New customer offer</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/557.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Community welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Community welcome"
                            aria-label="Community welcome"
                          >
                            <input
                              id="Community welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Community welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-yXrlO"
                              id="style-yXrlO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Community welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/558.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Educational how-to"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Educational how-to"
                            aria-label="Educational how-to"
                          >
                            <input
                              id="Educational how-to"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Educational how-to"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-2flpW"
                              id="style-2flpW"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Educational how-to</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/559.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Announce new collection"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Announce new collection"
                            aria-label="Announce new collection"
                          >
                            <input
                              id="Announce new collection"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Announce new collection"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-zpyQi"
                              id="style-zpyQi"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Announce new collection
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/560.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thank you offer"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thank you offer"
                            aria-label="Thank you offer"
                          >
                            <input
                              id="Thank you offer"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thank you offer"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-CNLPd"
                              id="style-CNLPd"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Thank you offer</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/561.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Exclusive rewards welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Exclusive rewards welcome"
                            aria-label="Exclusive rewards welcome"
                          >
                            <input
                              id="Exclusive rewards welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Exclusive rewards welcome"
                            />
                            <div
                              class="templateThumbnailContainer-1Fp1C style-KgKbW"
                              id="style- onClick={(e)=>handlecheckElement(e.currentTarget)}KgKbW"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Exclusive rewards welcome
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/562.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Class overview"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Class overview"
                            aria-label="Class overview"
                          >
                            <input
                              id="Class overview"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Class overview"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Uv6ps"
                              id="style-Uv6ps"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Class overview</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/563.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event lineup"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event lineup"
                            aria-label="Event lineup"
                          >
                            <input
                              id="Event lineup"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event lineup"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-VdlON"
                              id="style-VdlON"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event lineup</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/564.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Featured products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Featured products"
                            aria-label="Featured products"
                          >
                            <input
                              id="Featured products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Featured products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-WZ7ra"
                              id="style-WZ7ra"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Featured products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/565.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Loyal customer thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Loyal customer thank you"
                            aria-label="Loyal customer thank you"
                          >
                            <input
                              id="Loyal customer thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Loyal customer thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-q6ETU"
                              id="style-q6ETU"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Loyal customer thank you
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/566.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Thanks for your support"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Thanks for your support"
                            aria-label="Thanks for your support"
                          >
                            <input
                              id="Thanks for your support"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Thanks for your support"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-tm5Sg"
                              id="style-tm5Sg"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Thanks for your support
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/567.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Order again"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Order again"
                            aria-label="Order again"
                          >
                            <input
                              id="Order again"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Order again"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-UbzNx"
                              id="style-UbzNx"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Order again</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/568.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Class welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Class welcome"
                            aria-label="Class welcome"
                          >
                            <input
                              id="Class welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Class welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-MKxzW"
                              id="style-MKxzW"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Class welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/569.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Class thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Class thank you"
                            aria-label="Class thank you"
                          >
                            <input
                              id="Class thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Class thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-srvMC"
                              id="style-srvMC"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Class thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/570.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Performance invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Performance invite"
                            aria-label="Performance invite"
                          >
                            <input
                              id="Performance invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Performance invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-djsXi"
                              id="style-djsXi"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Performance invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/571.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Services overview"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Services overview"
                            aria-label="Services overview"
                          >
                            <input
                              id="Services overview"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Services overview"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-z6g4p"
                              id="style-z6g4p"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Services overview</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/572.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Performance thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Performance thank you"
                            aria-label="Performance thank you"
                          >
                            <input
                              id="Performance thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Performance thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-bHGiS"
                              id="style-bHGiS"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Performance thank you
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/573.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Retreat invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Retreat invite"
                            aria-label="Retreat invite"
                          >
                            <input
                              id="Retreat invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Retreat invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-pMrZl"
                              id="style-pMrZl"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Retreat invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/574.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New brand partnership"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New brand partnership"
                            aria-label="New brand partnership"
                          >
                            <input
                              id="New brand partnership"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New brand partnership"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-aS4PI"
                              id="style-aS4PI"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New brand partnership
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/575.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Networking event invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Networking event invite"
                            aria-label="Networking event invite"
                          >
                            <input
                              id="Networking event invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Networking event invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-anEwH"
                              id="style-anEwH"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Networking event invite
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/576.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Creator spotlight"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Creator spotlight"
                            aria-label="Creator spotlight"
                          >
                            <input
                              id="Creator spotlight"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Creator spotlight"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-fYVWO"
                              id="style-fYVWO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Creator spotlight</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/577.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Recommended for you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Recommended for you"
                            aria-label="Recommended for you"
                          >
                            <input
                              id="Recommended for you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Recommended for you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-4JnOw"
                              id="style-4JnOw"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Recommended for you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/578.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Post-purchase welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Post-purchase welcome"
                            aria-label="Post-purchase welcome"
                          >
                            <input
                              id="Post-purchase welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Post-purchase welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-iyqKw"
                              id="style-iyqKw"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Post-purchase welcome
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/579.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Meet our team"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Meet our team"
                            aria-label="Meet our team"
                          >
                            <input
                              id="Meet our team"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Meet our team"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-m2Th2"
                              id="style-m2Th2"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Meet our team</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/580.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="About our services"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="About our services"
                            aria-label="About our services"
                          >
                            <input
                              id="About our services"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="About our services"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-NbNx8"
                              id="style-NbNx8"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">About our services</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/581.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New case study"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New case study"
                            aria-label="New case study"
                          >
                            <input
                              id="New case study"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New case study"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ExVe2"
                              id="style-ExVe2"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">New case study</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/582.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Preorder new product"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Preorder new product"
                            aria-label="Preorder new product"
                          >
                            <input
                              id="Preorder new product"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Preorder new product"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-iYS1N"
                              id="style-iYS1N"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Preorder new product</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/583.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New subscriber welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New subscriber welcome"
                            aria-label="New subscriber welcome"
                          >
                            <input
                              id="New subscriber welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New subscriber welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ZKtTm"
                              id="style-ZKtTm"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New subscriber welcome
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/584.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Upcoming event"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Upcoming event"
                            aria-label="Upcoming event"
                          >
                            <input
                              id="Upcoming event"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Upcoming event"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-GYIfH"
                              id="style-GYIfH"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Upcoming event</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/585.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New client onboarding"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New client onboarding"
                            aria-label="New client onboarding"
                          >
                            <input
                              id="New client onboarding"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New client onboarding"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-7Zgfp"
                              id="style-7Zgfp"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New client onboarding
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/586.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Our service offerings"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Our service offerings"
                            aria-label="Our service offerings"
                          >
                            <input
                              id="Our service offerings"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Our service offerings"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-JlNjP"
                              id="style-JlNjP"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Our service offerings
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/587.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Conference invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Conference invite"
                            aria-label="Conference invite"
                          >
                            <input
                              id="Conference invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Conference invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-XfySB"
                              id="style-XfySB"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Conference invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/588.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Conference welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Conference welcome"
                            aria-label="Conference welcome"
                          >
                            <input
                              id="Conference welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Conference welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Ot6t7"
                              id="style-Ot6t7"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Conference welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/588.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="About our company"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="About our company"
                            aria-label="About our company"
                          >
                            <input
                              id="About our company"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="About our company"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-od4mj"
                              id="style-od4mj"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">About our company</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/588.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Client thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Client thank you"
                            aria-label="Client thank you"
                          >
                            <input
                              id="Client thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Client thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-evRmN"
                              id="style-evRmN"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Client thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/589.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Purchase Follow-up"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Purchase Follow-up"
                            aria-label="Purchase Follow-up"
                          >
                            <input
                              id="Purchase Follow-up"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Purchase Follow-up"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-kkUBr"
                              id="style-kkUBr"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Purchase Follow-up</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/590.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Digital download"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Digital download"
                            aria-label="Digital download"
                          >
                            <input
                              id="Digital download"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Digital download"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-T7nW3"
                              id="style-T7nW3"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Digital download</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/591.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Open House invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Open House invite"
                            aria-label="Open House invite"
                          >
                            <input
                              id="Open House invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Open House invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-T3cGh"
                              id="style-T3cGh"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Open House invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/592.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New listing announcement"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New listing announcement"
                            aria-label="New listing announcement"
                          >
                            <input
                              id="New listing announcement"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New listing announcement"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-5agsO"
                              id="style-5agsO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New listing announcement
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/593.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Newsletter welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Newsletter welcome"
                            aria-label="Newsletter welcome"
                          >
                            <input
                              id="Newsletter welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Newsletter welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Ogs8D"
                              id="style-Ogs8D"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Newsletter welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/594.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Complimentary service offer"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Complimentary service offer"
                            aria-label="Complimentary service offer"
                          >
                            <input
                              id="Complimentary service offer"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Complimentary service offer"
                            />
                            <div
                              class="templateThumbnailContainer-1Fp1C style-KjXq1"
                              id="style- onClick={(e)=>handlecheckElement(e.currentTarget)}KjXq1"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Complimentary service offer
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/595.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Book a consultation"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Book a consultation"
                            aria-label="Book a consultation"
                          >
                            <input
                              id="Book a consultation"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Book a consultation"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-Pa1l2"
                              id="style-Pa1l2"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Book a consultation</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/596.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Anniversary thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Anniversary thank you"
                            aria-label="Anniversary thank you"
                          >
                            <input
                              id="Anniversary thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Anniversary thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-wGdAo"
                              id="style-wGdAo"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Anniversary thank you
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/597.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event welcome"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event welcome"
                            aria-label="Event welcome"
                          >
                            <input
                              id="Event welcome"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event welcome"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-xIKzy"
                              id="style-xIKzy"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event welcome</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/598.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New office location"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New office location"
                            aria-label="New office location"
                          >
                            <input
                              id="New office location"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New office location"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-rZnvd"
                              id="style-rZnvd"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">New office location</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/599.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Important reminder"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Important reminder"
                            aria-label="Important reminder"
                          >
                            <input
                              id="Important reminder"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Important reminder"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-5MbOw"
                              id="style-5MbOw"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Important reminder</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/600.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sincere thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sincere thank you"
                            aria-label="Sincere thank you"
                          >
                            <input
                              id="Sincere thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sincere thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-nOlOA"
                              id="style-nOlOA"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sincere thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/601.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="New collection preview"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="New collection preview"
                            aria-label="New collection preview"
                          >
                            <input
                              id="New collection preview"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="New collection preview"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ik8oi"
                              id="style-ik8oi"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                New collection preview
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/602.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Post-purchase guide"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Post-purchase guide"
                            aria-label="Post-purchase guide"
                          >
                            <input
                              id="Post-purchase guide"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Post-purchase guide"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-BywoE"
                              id="style-BywoE"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Post-purchase guide</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/603.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="About our products"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="About our products"
                            aria-label="About our products"
                          >
                            <input
                              id="About our products"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="About our products"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-iAGSs"
                              id="style-iAGSs"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">About our products</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/604.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Event invite"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Event invite"
                            aria-label="Event invite"
                          >
                            <input
                              id="Event invite"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Event invite"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-kLoB4"
                              id="style-kLoB4"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Event invite</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/605.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Shop new collection"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Shop new collection"
                            aria-label="Shop new collection"
                          >
                            <input
                              id="Shop new collection"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Shop new collection"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-8A1Sy"
                              id="style-8A1Sy"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Shop new collection</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/606.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Project follow-up"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Project follow-up"
                            aria-label="Project follow-up"
                          >
                            <input
                              id="Project follow-up"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Project follow-up"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-dbDDU"
                              id="style-dbDDU"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Project follow-up</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/607.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Customer win-back"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Customer win-back"
                            aria-label="Customer win-back"
                          >
                            <input
                              id="Customer win-back"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Customer win-back"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-552Xz"
                              id="style-552Xz"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Customer win-back</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/608.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Welcome to the club"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Welcome to the club"
                            aria-label="Welcome to the club"
                          >
                            <input
                              id="Welcome to the club"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Welcome to the club"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-bAmh1"
                              id="style-bAmh1"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Welcome to the club</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/609.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Product savings announcement"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Product savings announcement"
                            aria-label="Product savings announcement"
                          >
                            <input
                              id="Product savings announcement"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Product savings announcement"
                            />
                            <div
                              class="templateThumbnailContainer-1Fp1C style-A5zHO"
                              id="style- onClick={(e)=>handlecheckElement(e.currentTarget)}A5zHO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Product savings announcement
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/610.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Product promotion - two for one"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Product promotion - two for one"
                            aria-label="Product promotion - two for one"
                          >
                            <input
                              id="Product promotion - two for one"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Product promotion - two for one"
                            />
                            <div
                              class="templateThumbnailContainer-1Fp1C style-xUdMK"
                              id="style- onClick={(e)=>handlecheckElement(e.currentTarget)}xUdMK"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Product promotion - two for one
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/611.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Patron thank you"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Patron thank you"
                            aria-label="Patron thank you"
                          >
                            <input
                              id="Patron thank you"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Patron thank you"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-C1DZC"
                              id="style-C1DZC"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Patron thank you</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/612.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sale teaser 1"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sale teaser 1"
                            aria-label="Sale teaser 1"
                          >
                            <input
                              id="Sale teaser 1"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sale teaser 1"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-bRU1Z"
                              id="style-bRU1Z"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sale teaser 1</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/613.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Early access to sale 1"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Early access to sale 1"
                            aria-label="Early access to sale 1"
                          >
                            <input
                              id="Early access to sale 1"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Early access to sale 1"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-xkI9o"
                              id="style-xkI9o"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Early access to sale 1
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/614.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Start of sale 1"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Start of sale 1"
                            aria-label="Start of sale 1"
                          >
                            <input
                              id="Start of sale 1"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Start of sale 1"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-R9Y1j"
                              id="style-R9Y1j"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Start of sale 1</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/615.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sale reminder 1"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sale reminder 1"
                            aria-label="Sale reminder 1"
                          >
                            <input
                              id="Sale reminder 1"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sale reminder 1"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-q8ZQg"
                              id="style-q8ZQg"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sale reminder 1</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/616.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="End of sale 1"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="End of sale 1"
                            aria-label="End of sale 1"
                          >
                            <input
                              id="End of sale 1"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="End of sale 1"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-PGf5U"
                              id="style-PGf5U"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">End of sale 1</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/617.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sale teaser 2"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sale teaser 2"
                            aria-label="Sale teaser 2"
                          >
                            <input
                              id="Sale teaser 2"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sale teaser 2"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-OCHbf"
                              id="style-OCHbf"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sale teaser 2</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/618.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Early access to sale 2"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Early access to sale 2"
                            aria-label="Early access to sale 2"
                          >
                            <input
                              id="Early access to sale 2"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Early access to sale 2"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-hQesF"
                              id="style-hQesF"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Early access to sale 2
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/619.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Start of sale 2"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Start of sale 2"
                            aria-label="Start of sale 2"
                          >
                            <input
                              id="Start of sale 2"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Start of sale 2"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-TZU5K"
                              id="style-TZU5K"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Start of sale 2</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/620.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Sale reminder 2"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Sale reminder 2"
                            aria-label="Sale reminder 2"
                          >
                            <input
                              id="Sale reminder 2"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Sale reminder 2"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-8sZ6L"
                              id="style-8sZ6L"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Sale reminder 2</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/621.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="End of sale 2"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="End of sale 2"
                            aria-label="End of sale 2"
                          >
                            <input
                              id="End of sale 2"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="End of sale 2"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-VTXCV"
                              id="style-VTXCV"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">End of sale 2</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/622.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Site-wide sale"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Site-wide sale"
                            aria-label="Site-wide sale"
                          >
                            <input
                              id="Site-wide sale"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Site-wide sale"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-XZ8ai"
                              id="style-XZ8ai"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Site-wide sale</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/623.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Black Friday sale"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Black Friday sale"
                            aria-label="Black Friday sale"
                          >
                            <input
                              id="Black Friday sale"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Black Friday sale"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-ahoYO"
                              id="style-ahoYO"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Black Friday sale</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/524.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Biggest sale of the year"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Biggest sale of the year"
                            aria-label="Biggest sale of the year"
                          >
                            <input
                              id="Biggest sale of the year"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Biggest sale of the year"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-WaWKf"
                              id="style-WaWKf"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Biggest sale of the year
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/625.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Cyber Monday sale"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Cyber Monday sale"
                            aria-label="Cyber Monday sale"
                          >
                            <input
                              id="Cyber Monday sale"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Cyber Monday sale"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-yM9jV"
                              id="style-yM9jV"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">Cyber Monday sale</div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/626.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                          <label
                            for="Shop Black Friday sale"
                            class="thumbnailButton-2fZfR"
                            data-testid="templateCard"
                            title="Shop Black Friday sale"
                            aria-label="Shop Black Friday sale"
                          >
                            <input
                              id="Shop Black Friday sale"
                              type="button"
                              name="template"
                              class="radioHiddenInput-CyuAN"
                              value="Shop Black Friday sale"
                            />
                            <div
                              onClick={(e) =>
                                handlecheckElement(e.currentTarget)
                              }
                              class="templateThumbnailContainer-1Fp1C style-zLtLT"
                              id="style-zLtLT"
                            ></div>
                            <div class="infoContainer-1VHAL">
                              <div class="name-12q7Y">
                                Shop Black Friday sale
                              </div>
                            </div>
                            <div class="buttonOverlay-1vS-v expanded-24kuN">
                              <div class="stack-1qp4V spacing4-1xt6w">
                                <button
                                  onClick={() =>
                                    handlemovenextpage(
                                      "https://cdn-images.mailchimp.com/template_images/email/thumbnails/2x/627.jpg"
                                    )
                                  }
                                  class="root-sBgFt container-3-bH7 primary-33czz"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">Apply</span>
                                </button>
                                <button
                                  class="root-sBgFt container-3-bH7 tertiary-Wmhgk"
                                  type="button"
                                >
                                  <span class="temporarySpan-2iF2p">
                                    Preview
                                  </span>
                                </button>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="stack-1qp4V spacing2-3AKCb container-mXytM"
                      data-testid="brandImport"
                    >
                      <img
                        class="image-1-zfK"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/purchase-experience/brand-import.png"
                        alt=""
                      />
                      <div class="textContainer-26aOX">
                        <h2 class="heading-3-eDQNF root-PihPG">
                          Branded emails in one click for Next Web Lines
                        </h2>
                        <div class="stack-1qp4V spacing6-nznRY">
                          <p class="root-3TDqk small-2qKd5 subtitle-1l3-h">
                            Your plan includes custom, branded email designs at{" "}
                            <strong>no additional cost.</strong>
                          </p>
                          <form
                            class="stack-1qp4V spacing6-nznRY"
                            novalidate=""
                            id="form-i2vur"
                          >
                            <div class="root-2RFjU input-23g1C">
                              <div class="before-2EDUs">
                                <label
                                  class="mcds-label-default"
                                  id="mc:150"
                                  for="mc:149"
                                >
                                  Enter Your Website URL:
                                </label>
                              </div>
                              <div class="inputWrapper-TVkf7">
                                <input
                                  type="text"
                                  id="mc:149"
                                  aria-invalid="false"
                                  name="url"
                                  value=""
                                />
                              </div>
                            </div>
                            <p class="root-3TDqk small-secondary-3_Rq2 inputDescription-2lwyZ">
                              By clicking “Import My Brand”, you represent and
                              warrant that you own or have permission to use all
                              of the content from this website.
                            </p>
                            <div>
                              <button
                                class="root-sBgFt container-3-bH7 primary-33czz button-3mfLr"
                                type="submit"
                              >
                                <span class="temporarySpan-2iF2p">
                                  Import my brand
                                </span>
                              </button>
                            </div>
                          </form>
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
                id="mc:10:tabs:1:panel"
                aria-labelledby="mc:10:tabs:1"
              ></div>
              <div
                class="tabPanel-JU-57"
                tabindex="-1"
                hidden=""
                role="tabpanel"
                id="mc:10:tabs:2:panel"
                aria-labelledby="mc:10:tabs:2"
              ></div>
              <div
                class="tabPanel-JU-57"
                tabindex="-1"
                hidden=""
                role="tabpanel"
                id="mc:10:tabs:3:panel"
                aria-labelledby="mc:10:tabs:3"
              ></div>
              <div
                class="tabPanel-JU-57"
                tabindex="-1"
                hidden=""
                role="tabpanel"
                id="mc:10:tabs:4:panel"
                aria-labelledby="mc:10:tabs:4"
              ></div>
            </>
          )}
          {curretRoute === "codeown" && (
            <>
              <div
                class="root-209cT gap6-U7x7I grid-1ngvm snipcss-2mwM8 style-dIjRz"
                id="style-dIjRz"
              >
                <label
                  for="Paste in Code"
                  class="thumbnailButton_withDescription-3AZNU"
                  data-testid="templateCard"
                  title="Paste in Code"
                  aria-label="Paste in Code"
                >
                  <input
                    id="Paste in Code"
                    type="button"
                    name="template"
                    class="radioHiddenInput-CyuAN"
                    value="Paste in Code"
                  />
                  <div
                    class="templateThumbnailContainer_withDescription-IPSdK style-owTok"
                    id="style-owTok"
                  ></div>
                  <div class="infoContainer_withDate-2E7u-">
                    <div class="name-12q7Y">Paste in Code</div>
                    <div class="infoItemContainer-19Zt3">
                      <span class="cyoCardDescription-bVsxO">
                        Create an email by pasting your custom coded design
                      </span>
                    </div>
                  </div>
                  <div class="buttonOverlay-1vS-v expanded-24kuN">
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <button
                        class="root-sBgFt container-3-bH7 primary-33czz"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">Apply</span>
                      </button>
                    </div>
                  </div>
                </label>
                <label
                  for="Import from URL"
                  class="thumbnailButton_withDescription-3AZNU"
                  data-testid="templateCard"
                  title="Import from URL"
                  aria-label="Import from URL"
                >
                  <input
                    id="Import from URL"
                    type="button"
                    name="template"
                    class="radioHiddenInput-CyuAN"
                    value="Import from URL"
                  />
                  <div
                    class="templateThumbnailContainer_withDescription-IPSdK style-sS9BS"
                    id="style-sS9BS"
                  ></div>
                  <div class="infoContainer_withDate-2E7u-">
                    <div class="name-12q7Y">Import from URL</div>
                    <div class="infoItemContainer-19Zt3">
                      <span class="cyoCardDescription-bVsxO">
                        Create an email by importing the HTML code from a hosted
                        URL.
                      </span>
                    </div>
                  </div>
                  <div class="buttonOverlay-1vS-v expanded-24kuN">
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <button
                        class="root-sBgFt container-3-bH7 primary-33czz"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">Apply</span>
                      </button>
                    </div>
                  </div>
                </label>
                <label
                  for="Import zip"
                  class="thumbnailButton_withDescription-3AZNU"
                  data-testid="templateCard"
                  title="Import zip"
                  aria-label="Import zip"
                >
                  <input
                    id="Import zip"
                    type="button"
                    name="template"
                    class="radioHiddenInput-CyuAN"
                    value="Import zip"
                  />
                  <div
                    class="templateThumbnailContainer_withDescription-IPSdK style-rR9RB"
                    id="style-rR9RB"
                  ></div>
                  <div class="infoContainer_withDate-2E7u-">
                    <div class="name-12q7Y">Import zip</div>
                    <div class="infoItemContainer-19Zt3">
                      <span class="cyoCardDescription-bVsxO">
                        Create an email by uploading a zip file with your
                        template code
                      </span>
                    </div>
                  </div>
                  <div class="buttonOverlay-1vS-v expanded-24kuN">
                    <div class="stack-1qp4V spacing4-1xt6w">
                      <button
                        onClick={handleOpenPopup}
                        class="root-sBgFt container-3-bH7 primary-33czz"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">Apply</span>
                      </button>
                    </div>
                  </div>
                </label>
                {openmodel && (
                  <div className="">
                    <div class="wink light snipcss-MVACj newomommmm">
                      <div
                        class="dialog-1NSI7 container-1Cqy1"
                        role="dialog"
                        tabindex="-1"
                        aria-labelledby="mc:158"
                      >
                        <div class="overlay-2Q-6X"></div>
                        <div
                          class="root-Hg5IF sm-3xLCd style-7wa5z"
                          id="style-7wa5z"
                        >
                          <form
                            class="stack-1qp4V"
                            novalidate=""
                            id="form-l779m"
                          >
                            <button
                              onClick={() => setOpenModel(false)}
                              class="root-1khsy closeButton-1pytm"
                              type="button"
                            >
                              <span class="wink-visually-hidden">
                                Close Modal
                              </span>
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
                              <h1 id="mc:158" class="title-hZdI7">
                                Import template to Classic builder
                              </h1>
                            </div>
                            <div class="body-Qf-7h">
                              <div class="switcher-2RqDX">
                                <div class="">
                                  <div
                                    class="content-2Oz_g style-h7rex"
                                    id="style-h7rex"
                                  >
                                    <div class="stack-1qp4V spacing4-1xt6w">
                                      <p class="root-3TDqk medium-3AcAC">
                                        Custom-coded templates are only
                                        available in our Classic builder for
                                        now. Upload your template as a zip file
                                        to continue to the Classic builder.
                                      </p>
                                      <div class="stack-1qp4V spacing4-1xt6w containerWidth-2rtmQ">
                                        <div class="container-37Jkg cluster-3D5Qr nowrap-34OZ-">
                                          <div class="alignItemsFlexStart-3pYa_ justifyFlexStart-ejJl1 spacing8-2cYQ4">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              focusable="false"
                                              aria-hidden="true"
                                              class="wink-icon"
                                            >
                                              <path d="M14.5 4a4.501 4.501 0 00-4.118 2.682l-.388.878-.894-.352a3 3 0 00-3.98 3.632l.28.96-.96.28A2.001 2.001 0 005 16h4v2H5a4 4 0 01-1.973-7.48 5 5 0 015.937-5.427 6.5 6.5 0 0111.928 4.595A4.5 4.5 0 0118.5 18H15v-2h3.5a2.5 2.5 0 00.875-4.843l-.9-.336.3-.913A4.5 4.5 0 0014.5 4z"></path>
                                              <path d="M7.341 12.748l1.317 1.505 2.55-2.231L11 22h2l-.208-9.978 2.55 2.23 1.316-1.505L12 8.672l-4.659 4.077z"></path>
                                            </svg>
                                            <div class="stack-1qp4V spacing6-nznRY">
                                              <div class="stack-1qp4V">
                                                <p class="root-3TDqk small-bold-6R-6E">
                                                  Select a zip file to upload
                                                </p>
                                                <div id="mc:181">
                                                  <p class="root-3TDqk small-secondary-3_Rq2">
                                                    Your zip file should be less
                                                    than 1MB and should contain:
                                                  </p>
                                                  <ul class="list-2l3Ca mcds-list-ul-default small-secondary-2Yg8s">
                                                    <li class="listItem-YU24s">
                                                      One .html file (should
                                                      include the required
                                                      *|UNSUB|* tag)
                                                    </li>
                                                    <li class="listItem-YU24s">
                                                      All images in web formats
                                                      (png, gif, or jpg)
                                                    </li>
                                                    <li class="listItem-YU24s">
                                                      Your CSS file(s)
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <input
                                                type="file"
                                                hidden // This hides the input
                                                onChange={handleFileChange} // Handles file selection
                                                style={{ display: "none" }}
                                                accept="image/*"
                                                class="fileinput-12gz-"
                                                id="mc:180"
                                                aria-describedby="mc:181"
                                              />

                                              <label
                                                style={{
                                                  border: "1px solid #007c89",
                                                  padding: "10px 30px",
                                                  color: "#007c89",
                                                  fontSize: "12px",
                                                }}
                                                for="mc:180"
                                                class="upload-Bj38u"
                                              >
                                                Add file
                                              </label>
                                            </div>
                                          </div>
                                          <br />
                                          {image !== null && (
                                            <p>{image?.name}</p>
                                          )}
                                          <button onClick={uploadImage}>
                                            {" "}
                                            {loading ? "loading..." : "upload"}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="footer-GeAzX">
                              <div class="cluster-3D5Qr">
                                <div class="alignItemsCenter-1HCiJ justifyFlexEnd-3_ERd spacing4-1S_zR">
                                  <button
                                    onClick={handleResetClick}
                                    style={{ color: "#007c89" }}
                                    class="root-sBgFt container-3-bH7 tertiary-Wmhgk button-1hkgD"
                                    type="reset"
                                  >
                                    <span class="temporarySpan-2iF2p">
                                      Cancel
                                    </span>
                                  </button>
                                  <button
                                    onClick={MovetoNext}
                                    style={{
                                      backgroundColor: "#007c89",
                                      color: "white",
                                    }}
                                    class="root-sBgFt container-3-bH7 primary-33czz button-3mfLr"
                                    type="button"
                                  >
                                    <span class="temporarySpan-2iF2p">
                                      Finish
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div id="p5uvo" class="style-XH3nB"></div>
    </div>
  );
};

export default ChooseEmail;

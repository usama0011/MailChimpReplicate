import React from "react";
import "../styles/Issues.css";
const Issues = () => {
  return (
    <div>
      <div className="root-2YPpb warning-3SnLw snipcss0-0-0-1 snipcss-AVJo3">
        <p className="copy-3Y9AB snipcss0-1-1-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            className="wink-icon feedbackIcon-2qEAZ snipcss0-2-2-3"
          >
            <path d="M13.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3-12l.5 9h2l.5-9h-3z"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
            ></path>
          </svg>
          Your account has one or more issues that need to be resolved.{" "}
          <a href="/account/status/" className="snipcss0-2-2-4">
            View issues
          </a>
        </p>
        <a
          className="copy-3Y9AB phone-_5iVZ snipcss0-1-1-5"
          href="/account/status/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            className="wink-icon feedbackIcon-2qEAZ snipcss0-2-5-6"
          >
            <path d="M13.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3-12l.5 9h2l.5-9h-3z"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
            ></path>
          </svg>
          Your account needs review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            className="wink-icon snipcss0-2-5-7"
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
  );
};

export default Issues;

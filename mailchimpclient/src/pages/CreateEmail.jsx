import React, { useContext, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../styles/CreateEmail.css";
import { Link } from "react-router-dom";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
import { Calendar } from "react-date-range";
import axios from "axios";
const CreateEmail = () => {
  const [adminEmail, setAdminEmail] = useState({});
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [choosedate, setchoosedate] = useState(new Date());
  const myRef = useRef();
  const [clickedOutside, setClickedOutside] = useState(false);
  const [perviewtext, setPreviewText] = useState("");
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const [editsubject, setEditSubject] = useState(false);
  const [edittime, setEditTime] = useState(false);
  const [showcalender, setShowCalender] = useState(false);
  const handleAddSubject = () => {
    setEditSubject(true);
  };
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };

  const openaddTime = () => {
    setEditTime(true);
  };
  function handleSelect(date) {
    console.log(date); // native Date object

    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    console.log("formattedDate", formattedDate);
    setchoosedate(formattedDate);
    handleClickInside();
  }

  const submitsaveSubject = (e) => {
    e.preventDefault();
    handleUpdateState("subject", subject);
    handleUpdateState("previewtext", perviewtext);
    handleUpdateState("entryDate", choosedate);
    setEditSubject(false);
  };
  // hello usamasadas
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };
  const handlesaveTimebtn = (e) => {
    e.preventDefault();
    setEditTime(false);
    handleUpdateState("sendtime", choosedate);
  };
  const handleClickInside = () => setClickedOutside(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    const fetchFrom = async () => {
      try {
        const response = await axios.get(
          `https://mail-chimp-replicate.vercel.app/api/from/66560e29438e34fecd29ee10`
        );
        setSuccess(true);
        setAdminEmail(response.data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      }
    };
    fetchFrom();
  }, []);
  console.log("choosedate", choosedate);
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
                        {/* monkey */}
                        <img
                          class="navigationBackButtonFreddie-qXKoK"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAyaC4wMjdjMi43MzQgNi4zIDguODA4IDEwLjAxNyAxNi4wMTYgMTAuMzcybC4yODUuMDEydi4wMDJoLjAwN3YtLjAwMmM3LjcxNC4yNzMgMTQuNDU0LTMuNDU0IDE3LjIxOS0xMC4wNzguMzQ4LS44OTYgMi4yOS02LjI3NS0uNjkxLTcuMDM2em0tMzIuMjMyIDQuOTZjLS4yMzkuMDQtLjQ4Mi4wNTYtLjcyOC4wNS0yLjM3My0uMDYzLTQuOTM3LTIuMi01LjE5Mi00LjczNC0uMjgxLTIuOCAxLjE1LTQuOTU2IDMuNjg0LTUuNDY3YTQuMzEzIDQuMzEzIDAgMDExLjA2NC0uMDc2YzEuNDIuMDc4IDMuNTExIDEuMTY4IDMuOTkgNC4yNi40MjMgMi43NC0uMjUgNS41MjgtMi44MTggNS45NjZ6bS0yLjY2LTExLjgyNWwuMDEtLjAwMmMxLjk1My01LjM0NyA1LjM2LTEwLjM1NiA5Ljc5OC0xMy43NzMuMDg0LS4wNy4xNy0uMTQuMjYtLjIxIDIuMTg3LTEuNzg1IDQuNDI4LTMuMzA1IDYuNTg1LTQuNTA4IDAgMC0xLjkxMy0yLjIxOC0yLjQ5LTIuMzgxQzE4LjA1Ni44NSAxMC4zOCA2LjE0MyA1LjQ3OSAxMy4xMzZjLTEuOTgyIDIuODMtNC44MiA3Ljg0LTMuNDYzIDEwLjQxOC4xNjcuMzIgMS4xMTQgMS4xNCAxLjYyMiAxLjU2NC44NS0xLjIzNSAyLjE1LTIuMSAzLjgwOC0yLjQzNHptOS4wNC05LjU1M2MxLjc0Ni0yLjAyMyAzLjktMy43ODMgNS44MjktNC43Ny4wNjYtLjAzNC4xMzcuMDM4LjEuMTAzLS4xNTMuMjgtLjQ1Ljg3OC0uNTQxIDEuMzI4YS4wNzUuMDc1IDAgMDAuMTE2LjA3NmMxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3YTIxLjQ4IDIxLjQ4IDAgMDEtNy4wOTEuNzY3Yy0uMzAyLS4wMjQtLjU4NC0uMDYxLS44NDUtLjA5NS0xLjA2OC0uMTQtMS43ODUtLjIzNC0yLjA5My43NjVhNS4xMzcgNS4xMzcgMCAwMC4yOTIuMTFjLjE0My4wNDguMjkuMDkzLjQzOC4xMzVhMTUuMDMxIDE1LjAzMSAwIDAwMS44Mi40MDFjLjMwOC4wNDkuNjE3LjA5My45MjguMTI1YTE0LjUwMyAxNC41MDMgMCAwMDEuNDAyLjA4IDEzLjA5MiAxMy4wOTIgMCAwMDEuMTE1LS4wMmMuMDk4LS4wMDQuMTk2LS4wMDguMjk0LS4wMTQuMzEzLS4wMjIuNjI2LS4wNS45NDItLjA4MWEuMTMxLjEzMSAwIDAxLjA2NC4yNWwtLjAwOS4wMDRjLS4zMDIuMTI4LS42MTUuMjMtLjkzMy4zMWE4LjM4NCA4LjM4NCAwIDAxLTEuNDU3LjIyNiAxNC40MSAxNC40MSAwIDAxLTEuNDc3LjAxOSAxMy44MjIgMTMuODIyIDAgMDEtLjk4My0uMDc2IDE1Ljc0NSAxNS43NDUgMCAwMS0xLjQ2LS4yNDcgMTAuMDc2IDEwLjA3NiAwIDAxLTEuMDc0LS4zMDdjLjEyNSAxLjA2NCAxLjE2MiAxLjU0MSAxLjY1OCAxLjczNGE3LjQ3OCA3LjQ3OCAwIDAwMS4zMDYuMzU0YzUuNjIuOTY3IDEwLjg3NS0yLjI0NiAxMi4wNTgtMy4wNTYuMDg4LS4wNi4xNDctLjAwMS4wNzYuMTA2YTEuOTYgMS45NiAwIDAxLS4xMTYuMTY1Yy0xLjQ0OCAxLjg2OC01LjM0IDQuMDMtMTAuNDA0IDQuMDMtMi4yMSAwLTQuNDE3LS43NzktNS4yMjctMS45NzQtMS4yNTgtMS44NTUtLjA2Mi00LjU2MyAyLjAzMy00LjI4MS4wMDIgMCAuNzE3LjA4LjkxOC4xMDQgNC40MDguNDkzIDkuNzMtLjk1OSAxMi4wOTQtMy4xNDJsLjExNi0uMDgzYy44MTktLjc3MiAxLjIzNi0xLjU3IDEuMTAyLTIuMjcxYTEuNyAxLjcgMCAwMC0uNDkzLS45NjdjLS41MTMtLjUwMy0xLjMyOC0uODk0LTIuNzAyLTEuMjhsLS4xMTQtLjAzMi0uMTQ1LS4wNGMtLjMyLS4wOS0uNTctLjE1OS0uODM1LS4yNDYtLjU5LS4xOTQtLjg4Mi0uMzUtLjk0OC0xLjQ2LS4wMy0uNDg2LS4xMTQtMi4xNzYtLjE0NC0yLjg3NS0uMDU0LTEuMjI0LS4yMDEtMi44OTgtMS4yNC0zLjU4OGExLjc0IDEuNzQgMCAwMC0uODg3LS4yODQgMS42MDggMS42MDggMCAwMC0uNDg1LjA0MmwtLjA0Mi4wMWMtLjU2LjA5NC0uOTA0LjM4Mi0xLjMxLjcybC0uMDcuMDZjLTEuMjk1IDEuMDc5LTIuMzg5IDEuMjU1LTMuNjA0IDEuMjAzLS4zOC0uMDE2LS43Ny0uMDU0LTEuMTgzLS4wOTUtLjM3OC0uMDM3LS43NzQtLjA3Ni0xLjE5Ny0uMTAxbC0uMS0uMDA2Yy0uMTM5LS4wMDgtLjI3Ny0uMDE3LS40MTYtLjAyNC0yLjAzNi0uMTA0LTQuMjIgMS42NTUtNC41ODQgNC4xNTMtLjQwNSAyLjc4NyAxLjEzMyA0LjQ5NCAyLjEzMyA1LjYwNS4yNDguMjc1LjQ2Mi41MTMuNjA3LjcyMmEuNzU2Ljc1NiAwIDAxLS4wNi45N2wuMDAxLjAwMWMtMi4wNzggMi4xMzctMi43NDIgNS41MzItMS45NiA4LjM2LjA5OS4zNTQuMjIyLjY5Mi4zNyAxLjAxNCAxLjgzNiA0LjI5NCA3LjUzNSA2LjI5MyAxMy4xMDMgNC40NzRhMTMuNjc3IDEzLjY3NyAwIDAwMi4xMTUtLjg5MyAxMS4xMTIgMTEuMTEyIDAgMDAzLjI0LTIuNDJ6bS02LjU2LTE2LjAzN2MuMzQtLjA0LjY2Ny0uMDQyLjk2NyAwIC4xNzMtLjM5OC4yMDMtMS4wODQuMDQ3LTEuODMxLS4yMzItMS4xMTEtLjU0Ni0xLjc4My0xLjE5NS0xLjY3OC0uNjUuMTA0LS42NzMuOTA5LS40NDEgMi4wMi4xMy42MjQuMzYzIDEuMTU5LjYyMiAxLjQ5em0tNS41NzIuODhjLTEuMDAxLS40MzItMS43NzctLjU2NS0zLjI0LS4wOTRsLS4xMTUuMDM4Yy0uMjkxLjA5NS0uNDk0LjE2MS0uNjIzLjE1NWEuMjYuMjYgMCAwMS0uMDQtLjAwNWMtLjA2OS0uMDE0LS4xMTYtLjA1Ny0uMTMtLjExOS0uMDQyLS4xOTEuMjUzLS41MDcuNTY0LS43MzQuOTQtLjY3NyAyLjE2LS44MjMgMy4xODQtLjM4My41LjIxMy45NzEuNTkzIDEuMi45NjcuMTExLjE4MS4xMzMuMzIxLjA2MS4zOTUtLjExMi4xMTgtLjMzNS4wMTctLjc0LS4xNjZoLS4wMDFsLS4xMi0uMDU1em0tLjkzNS41MzJjLS4wOTQuMDEtLjE4MS4wMy0uMjY2LjA1bC0uMDA2LjAwMWE0Ljk1MiA0Ljk1MiAwIDAxLS4wNzUuMDE3IDIuMDEgMi4wMSAwIDAwLS44MDUuNDEzYy0uMTgzLjE2LS4yOTYuMzM2LS4yOTUuNDYgMCAuMDYuMDI2LjA5My4wNDYuMTEuMDI4LjAyNS4wNi4wMzYuMS4wMzguMDgzLjAwNC4xOTYtLjAzNi4zNTEtLjA5bC4wOTEtLjAzMmEzLjc3NyAzLjc3NyAwIDAxMS45MS0uMjA3bC4wMzguMDA1Yy4yNzkuMDMzLjQ0Ny4wNTMuNTE0LS4wNTIuMDItLjAzLjA0NC0uMDk1LS4wMTctLjE5My0uMTQyLS4yMy0uNzUzLS42MTgtMS41ODYtLjUyem01LjYzNSAxLjc4Yy0uMTQ3LjMtLjYuMzc5LTEuMDEuMTc3LS40MS0uMjAyLS42MjQtLjYwOC0uNDc3LS45MDcuMTQ3LS4zLjYtLjM4IDEuMDEtLjE3Ny40MS4yMDEuNjI0LjYwOC40NzcuOTA3em0xLjYzLTIuMTNjLS4zMzMtLjAwNi0uNjEuMzYtLjYxOC44MTgtLjAwOC40NTguMjU3LjgzMy41OS44MzkuMzM0LjAwNi42MS0uMzYuNjE4LS44MTguMDA4LS40NTgtLjI1Ni0uODMzLS41OS0uODM5em0tMjIuNzYxIDguMjA4Yy4xMzItLjAzLjI2OC0uMDYyLjM1MS4wNDIuMDMuMDM0LjA3OC4xMTMuMDIyLjI0Mi0uMDk1LjIyLS40NjguNTItMS4wMDIuNS0uNTUtLjA0My0xLjE2LS40NDMtMS4yNDQtMS40MzctLjA0LS40OS4xNDUtMS4wODkuMjYtMS40MDEuMjItLjYwNS4wMi0xLjIzOC0uNDk2LTEuNTc3YTEuMzQgMS4zNCAwIDAwLTEuODU4LjM4N2MtLjE1OC4yNDctLjI1NS41NTUtLjMwNi43Mi0uMDE0LjA0NS0uMDI1LjA4LS4wMzQuMTAyLS4xMTYuMzEzLS4zMDIuNDA1LS40MjcuMzg4LS4wNi0uMDA4LS4xNDItLjA0OC0uMTk0LS4xOTEtLjE0My0uMzkyLS4wMjctMS41LjcxLTIuMzE0YTIuMjMzIDIuMjMzIDAgMDExLjkxNS0uNjljLjc0Mi4wOTQgMS4zNTkuNTQzIDEuNzM3IDEuMjYzLjUwMy45NTguMDU1IDEuOTYzLS4yMTIgMi41NjNsLS4wMDUuMDFhOC41IDguNSAwIDAwLS4wNzQuMTY5Yy0uMTY3LjM5OC0uMTc2Ljc0Ni0uMDI0Ljk4LjExNy4xNzkuMzI0LjI4NC41Ny4yODguMTE0LjAwMi4yMTgtLjAyMi4zMS0uMDQzaC4wMDF6IiBmaWxsPSIjMDAwIi8+PC9zdmc+"
                          alt=""
                        />
                        <span class="root-3ALOt default-3A6wB">
                          <span class="wink-visually-hidden">(</span>Draft
                          <span class="wink-visually-hidden">)</span>
                        </span>
                      </div>
                    </div>
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
                    {state.compaingemail}
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
                                        Your 'To' field is not personalized with
                                        merge tags.
                                      </p>
                                    </div>
                                    <p
                                      class="root-3TDqk medium-bold-2nZ0J error-1dkRg"
                                      data-testid="validation-message"
                                    ></p>
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
                                <span class="temporarySpan-2iF2p">Resolve</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="root-6p7-2 slat-9mBgs" id="mc-checklist-step-from">
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
                                            {adminEmail?.from}
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
                                                  value={subject}
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
                                                  value={perviewtext}
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
                                                  appears in the inbox after the
                                                  subject line.
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
                                                                Schedule a time
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
                                                        {clickedOutside ? (
                                                          <div
                                                            style={{
                                                              position:
                                                                "absolute",
                                                              top: 0,
                                                              left: 0,
                                                            }}
                                                            className="absoluteinput"
                                                          >
                                                            <Calendar
                                                              date={new Date()}
                                                              onChange={
                                                                handleSelect
                                                              }
                                                            />
                                                          </div>
                                                        ) : null}

                                                        <input
                                                          style={{
                                                            height: "20px",
                                                          }}
                                                          type="text"
                                                          id="mc:33"
                                                          aria-describedby="mc:37"
                                                          aria-invalid="false"
                                                          name="schedule-date"
                                                          value={choosedate}
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
                                                              onClick={() =>
                                                                setClickedOutside(
                                                                  true
                                                                )
                                                              }
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
                                                            scheduling at least
                                                            48 hours in advance.
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
                                                              Send at a specific
                                                              time
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
                                                            Send email according
                                                            to the time zone in
                                                            your account
                                                            settings.
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
                      src="https://cdn-images.mailchimp.com/template_icons_basic/svg/template-bg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmail;

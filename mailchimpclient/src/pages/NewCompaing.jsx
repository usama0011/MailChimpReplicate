import React, { useContext, useState } from "react";
import "../styles/NewCompaing.css";
import { Link } from "react-router-dom";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
const NewCompaing = () => {
  const [email,setEmail]=useState("")
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
const handlebuttonsubmit=()=>{
  handleUpdateState("comapingemail", email);
}
  return (
    <div class="wink snipcss-yD1ls">
      <a href="#front-door-content" class="skipToContent-3Sx-7">
        Skip to content
      </a>
      <div class="frontDoorRow-2yluE">
        <div class="navigation-2_SUj navigationOpenDesktop-1gZ8o">
          <div class="navigationBack-3AH9o navigationBackOpenDesktop-2jERI">
            <button
              class="navigationBackButton-1JmON"
              type="button"
              aria-label="Exit"
            >
              <Link to="/">
                <div class="navigationBackButtonArrow-1c_Nj">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    focusable="false"
                    aria-hidden="true"
                    class="wink-icon navigationBackButtonArrowIcon-36OSq"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.293 6.293l1.414 1.414L10.414 12l4.293 4.293-1.414 1.414L7.586 12l5.707-5.707z"
                    ></path>
                  </svg>
                </div>
              </Link>
              <img
                class="navigationBackButtonFreddie-qXKoK"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAyaC4wMjdjMi43MzQgNi4zIDguODA4IDEwLjAxNyAxNi4wMTYgMTAuMzcybC4yODUuMDEydi4wMDJoLjAwN3YtLjAwMmM3LjcxNC4yNzMgMTQuNDU0LTMuNDU0IDE3LjIxOS0xMC4wNzguMzQ4LS44OTYgMi4yOS02LjI3NS0uNjkxLTcuMDM2em0tMzIuMjMyIDQuOTZjLS4yMzkuMDQtLjQ4Mi4wNTYtLjcyOC4wNS0yLjM3My0uMDYzLTQuOTM3LTIuMi01LjE5Mi00LjczNC0uMjgxLTIuOCAxLjE1LTQuOTU2IDMuNjg0LTUuNDY3YTQuMzEzIDQuMzEzIDAgMDExLjA2NC0uMDc2YzEuNDIuMDc4IDMuNTExIDEuMTY4IDMuOTkgNC4yNi40MjMgMi43NC0uMjUgNS41MjgtMi44MTggNS45NjZ6bS0yLjY2LTExLjgyNWwuMDEtLjAwMmMxLjk1My01LjM0NyA1LjM2LTEwLjM1NiA5Ljc5OC0xMy43NzMuMDg0LS4wNy4xNy0uMTQuMjYtLjIxIDIuMTg3LTEuNzg1IDQuNDI4LTMuMzA1IDYuNTg1LTQuNTA4IDAgMC0xLjkxMy0yLjIxOC0yLjQ5LTIuMzgxQzE4LjA1Ni44NSAxMC4zOCA2LjE0MyA1LjQ3OSAxMy4xMzZjLTEuOTgyIDIuODMtNC44MiA3Ljg0LTMuNDYzIDEwLjQxOC4xNjcuMzIgMS4xMTQgMS4xNCAxLjYyMiAxLjU2NC44NS0xLjIzNSAyLjE1LTIuMSAzLjgwOC0yLjQzNHptOS4wNC05LjU1M2MxLjc0Ni0yLjAyMyAzLjktMy43ODMgNS44MjktNC43Ny4wNjYtLjAzNC4xMzcuMDM4LjEuMTAzLS4xNTMuMjgtLjQ1Ljg3OC0uNTQxIDEuMzI4YS4wNzUuMDc1IDAgMDAuMTE2LjA3NmMxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3YTIxLjQ4IDIxLjQ4IDAgMDEtNy4wOTEuNzY3Yy0uMzAyLS4wMjQtLjU4NC0uMDYxLS44NDUtLjA5NS0xLjA2OC0uMTQtMS43ODUtLjIzNC0yLjA5My43NjVhNS4xMzcgNS4xMzcgMCAwMC4yOTIuMTFjLjE0My4wNDguMjkuMDkzLjQzOC4xMzVhMTUuMDMxIDE1LjAzMSAwIDAwMS44Mi40MDFjLjMwOC4wNDkuNjE3LjA5My45MjguMTI1YTE0LjUwMyAxNC41MDMgMCAwMDEuNDAyLjA4IDEzLjA5MiAxMy4wOTIgMCAwMDEuMTE1LS4wMmMuMDk4LS4wMDQuMTk2LS4wMDguMjk0LS4wMTQuMzEzLS4wMjIuNjI2LS4wNS45NDItLjA4MWEuMTMxLjEzMSAwIDAxLjA2NC4yNWwtLjAwOS4wMDRjLS4zMDIuMTI4LS42MTUuMjMtLjkzMy4zMWE4LjM4NCA4LjM4NCAwIDAxLTEuNDU3LjIyNiAxNC40MSAxNC40MSAwIDAxLTEuNDc3LjAxOSAxMy44MjIgMTMuODIyIDAgMDEtLjk4My0uMDc2IDE1Ljc0NSAxNS43NDUgMCAwMS0xLjQ2LS4yNDcgMTAuMDc2IDEwLjA3NiAwIDAxLTEuMDc0LS4zMDdjLjEyNSAxLjA2NCAxLjE2MiAxLjU0MSAxLjY1OCAxLjczNGE3LjQ3OCA3LjQ3OCAwIDAwMS4zMDYuMzU0YzUuNjIuOTY3IDEwLjg3NS0yLjI0NiAxMi4wNTgtMy4wNTYuMDg4LS4wNi4xNDctLjAwMS4wNzYuMTA2YTEuOTYgMS45NiAwIDAxLS4xMTYuMTY1Yy0xLjQ0OCAxLjg2OC01LjM0IDQuMDMtMTAuNDA0IDQuMDMtMi4yMSAwLTQuNDE3LS43NzktNS4yMjctMS45NzQtMS4yNTgtMS44NTUtLjA2Mi00LjU2MyAyLjAzMy00LjI4MS4wMDIgMCAuNzE3LjA4LjkxOC4xMDQgNC40MDguNDkzIDkuNzMtLjk1OSAxMi4wOTQtMy4xNDJsLjExNi0uMDgzYy44MTktLjc3MiAxLjIzNi0xLjU3IDEuMTAyLTIuMjcxYTEuNyAxLjcgMCAwMC0uNDkzLS45NjdjLS41MTMtLjUwMy0xLjMyOC0uODk0LTIuNzAyLTEuMjhsLS4xMTQtLjAzMi0uMTQ1LS4wNGMtLjMyLS4wOS0uNTctLjE1OS0uODM1LS4yNDYtLjU5LS4xOTQtLjg4Mi0uMzUtLjk0OC0xLjQ2LS4wMy0uNDg2LS4xMTQtMi4xNzYtLjE0NC0yLjg3NS0uMDU0LTEuMjI0LS4yMDEtMi44OTgtMS4yNC0zLjU4OGExLjc0IDEuNzQgMCAwMC0uODg3LS4yODQgMS42MDggMS42MDggMCAwMC0uNDg1LjA0MmwtLjA0Mi4wMWMtLjU2LjA5NC0uOTA0LjM4Mi0xLjMxLjcybC0uMDcuMDZjLTEuMjk1IDEuMDc5LTIuMzg5IDEuMjU1LTMuNjA0IDEuMjAzLS4zOC0uMDE2LS43Ny0uMDU0LTEuMTgzLS4wOTUtLjM3OC0uMDM3LS43NzQtLjA3Ni0xLjE5Ny0uMTAxbC0uMS0uMDA2Yy0uMTM5LS4wMDgtLjI3Ny0uMDE3LS40MTYtLjAyNC0yLjAzNi0uMTA0LTQuMjIgMS42NTUtNC41ODQgNC4xNTMtLjQwNSAyLjc4NyAxLjEzMyA0LjQ5NCAyLjEzMyA1LjYwNS4yNDguMjc1LjQ2Mi41MTMuNjA3LjcyMmEuNzU2Ljc1NiAwIDAxLS4wNi45N2wuMDAxLjAwMWMtMi4wNzggMi4xMzctMi43NDIgNS41MzItMS45NiA4LjM2LjA5OS4zNTQuMjIyLjY5Mi4zNyAxLjAxNCAxLjgzNiA0LjI5NCA3LjUzNSA2LjI5MyAxMy4xMDMgNC40NzRhMTMuNjc3IDEzLjY3NyAwIDAwMi4xMTUtLjg5MyAxMS4xMTIgMTEuMTEyIDAgMDAzLjI0LTIuNDJ6bS02LjU2LTE2LjAzN2MuMzQtLjA0LjY2Ny0uMDQyLjk2NyAwIC4xNzMtLjM5OC4yMDMtMS4wODQuMDQ3LTEuODMxLS4yMzItMS4xMTEtLjU0Ni0xLjc4My0xLjE5NS0xLjY3OC0uNjUuMTA0LS42NzMuOTA5LS40NDEgMi4wMi4xMy42MjQuMzYzIDEuMTU5LjYyMiAxLjQ5em0tNS41NzIuODhjLTEuMDAxLS40MzItMS43NzctLjU2NS0zLjI0LS4wOTRsLS4xMTUuMDM4Yy0uMjkxLjA5NS0uNDk0LjE2MS0uNjIzLjE1NWEuMjYuMjYgMCAwMS0uMDQtLjAwNWMtLjA2OS0uMDE0LS4xMTYtLjA1Ny0uMTMtLjExOS0uMDQyLS4xOTEuMjUzLS41MDcuNTY0LS43MzQuOTQtLjY3NyAyLjE2LS44MjMgMy4xODQtLjM4My41LjIxMy45NzEuNTkzIDEuMi45NjcuMTExLjE4MS4xMzMuMzIxLjA2MS4zOTUtLjExMi4xMTgtLjMzNS4wMTctLjc0LS4xNjZoLS4wMDFsLS4xMi0uMDU1em0tLjkzNS41MzJjLS4wOTQuMDEtLjE4MS4wMy0uMjY2LjA1bC0uMDA2LjAwMWE0Ljk1MiA0Ljk1MiAwIDAxLS4wNzUuMDE3IDIuMDEgMi4wMSAwIDAwLS44MDUuNDEzYy0uMTgzLjE2LS4yOTYuMzM2LS4yOTUuNDYgMCAuMDYuMDI2LjA5My4wNDYuMTEuMDI4LjAyNS4wNi4wMzYuMS4wMzguMDgzLjAwNC4xOTYtLjAzNi4zNTEtLjA5bC4wOTEtLjAzMmEzLjc3NyAzLjc3NyAwIDAxMS45MS0uMjA3bC4wMzguMDA1Yy4yNzkuMDMzLjQ0Ny4wNTMuNTE0LS4wNTIuMDItLjAzLjA0NC0uMDk1LS4wMTctLjE5My0uMTQyLS4yMy0uNzUzLS42MTgtMS41ODYtLjUyem01LjYzNSAxLjc4Yy0uMTQ3LjMtLjYuMzc5LTEuMDEuMTc3LS40MS0uMjAyLS42MjQtLjYwOC0uNDc3LS45MDcuMTQ3LS4zLjYtLjM4IDEuMDEtLjE3Ny40MS4yMDEuNjI0LjYwOC40NzcuOTA3em0xLjYzLTIuMTNjLS4zMzMtLjAwNi0uNjEuMzYtLjYxOC44MTgtLjAwOC40NTguMjU3LjgzMy41OS44MzkuMzM0LjAwNi42MS0uMzYuNjE4LS44MTguMDA4LS40NTgtLjI1Ni0uODMzLS41OS0uODM5em0tMjIuNzYxIDguMjA4Yy4xMzItLjAzLjI2OC0uMDYyLjM1MS4wNDIuMDMuMDM0LjA3OC4xMTMuMDIyLjI0Mi0uMDk1LjIyLS40NjguNTItMS4wMDIuNS0uNTUtLjA0My0xLjE2LS40NDMtMS4yNDQtMS40MzctLjA0LS40OS4xNDUtMS4wODkuMjYtMS40MDEuMjItLjYwNS4wMi0xLjIzOC0uNDk2LTEuNTc3YTEuMzQgMS4zNCAwIDAwLTEuODU4LjM4N2MtLjE1OC4yNDctLjI1NS41NTUtLjMwNi43Mi0uMDE0LjA0NS0uMDI1LjA4LS4wMzQuMTAyLS4xMTYuMzEzLS4zMDIuNDA1LS40MjcuMzg4LS4wNi0uMDA4LS4xNDItLjA0OC0uMTk0LS4xOTEtLjE0My0uMzkyLS4wMjctMS41LjcxLTIuMzE0YTIuMjMzIDIuMjMzIDAgMDExLjkxNS0uNjljLjc0Mi4wOTQgMS4zNTkuNTQzIDEuNzM3IDEuMjYzLjUwMy45NTguMDU1IDEuOTYzLS4yMTIgMi41NjNsLS4wMDUuMDFhOC41IDguNSAwIDAwLS4wNzQuMTY5Yy0uMTY3LjM5OC0uMTc2Ljc0Ni0uMDI0Ljk4LjExNy4xNzkuMzI0LjI4NC41Ny4yODguMTE0LjAwMi4yMTgtLjAyMi4zMS0uMDQzaC4wMDF6IiBmaWxsPSIjMDAwIi8+PC9zdmc+"
                alt=""
              />
              <div class="navigationBackButtonCross-3bL01">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  class="wink-icon navigationBackButtonCrossIcon-i_WP4"
                >
                  <path d="M12 13.414l6.293 6.293 1.414-1.414L13.414 12l6.293-6.293-1.414-1.414L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293 1.414 1.414L12 13.414z"></path>
                </svg>
              </div>
            </button>
          </div>
          <div
            role="list"
            class="navigationButtons-3OyNw navigationButtonsOpenDesktop-1t_7K"
          >
            <div role="listitem" class="container-IL_ti">
              <button
                aria-expanded="false"
                type="button"
                class="button-1YrMi"
                aria-controls="mc:41"
              >
                <p class="root-3TDqk medium-3AcAC text-2t4Eg">Email</p>
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
              </button>
              <div class="snipcss-UG3X6 style-qa5w5" id="style-qa5w5">
                <ul id="mc:41" class="">
                  <div role="listitem">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/emailregular"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Regular
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
                            d="M20.707 7.707L10 18.414l-5.207-5.207 1.414-1.414L10 15.586l9.293-9.293 1.414 1.414z"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div role="listitem">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/emailplaintext"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Plain text
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div role="listitem">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/emailmultvariate"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Multivariate
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div role="listitem" class="">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/emailtemplate"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Template
                        </span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <Link
                  class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                  id="option-ol4ct"
                  to="/newcampaingsautomations"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg">
                    Automations
                  </span>
                </Link>
              </div>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <Link
                  class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                  id="option-ol4ct"
                  to="/newcampaingwebsite"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg">
                    Website
                  </span>
                </Link>
              </div>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <Link
                  class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                  id="option-ol4ct"
                  to="/newcampainglandingpage"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg">
                    Landing Page
                  </span>
                </Link>
              </div>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <a
                  class="label-g01vr"
                  id="option-51ujz"
                  aria-describedby="mc:45"
                  href="#"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg">
                    Creative Assistant
                  </span>
                </a>
              </div>
            </div>
            <hr role="presentation" class="navigationDivider-kfIYM" />
            <div role="listitem" class="container-IL_ti">
              <button
                aria-expanded="false"
                type="button"
                class="button-1YrMi"
                aria-controls="mc:46"
              >
                <p class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                  Signup Form
                </p>
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
              </button>
              <ul id="mc:45" class="snipcss-4eFSH">
                <div role="listitem" class="">
                  <div class="container-IL_ti">
                    <Link
                      class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                      id="option-ol4ct"
                      to="/signupembaddedform"
                    >
                      <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                        Embedded form
                      </span>
                    </Link>
                  </div>
                </div>
                <div role="listitem">
                  <div class="container-IL_ti">
                    <Link
                      class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                      id="option-ol4ct"
                      to="/signuppopupform"
                    >
                      <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                        Pop-up form
                      </span>
                    </Link>
                  </div>
                </div>
                <div role="listitem">
                  <div class="container-IL_ti">
                    <Link
                      class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                      id="option-ol4ct"
                      to="/signuplandingpage"
                    >
                      <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                        Signup landing page
                      </span>
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <Link
                  class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                  id="option-ol4ct"
                  to="/newcampaingsurverys"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                    Surveys
                  </span>
                </Link>
              </div>
            </div>
            <div role="listitem" class="container-IL_ti">
              <button
                aria-expanded="false"
                type="button"
                class="button-1YrMi"
                aria-controls="mc:48"
              >
                <p class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                  Ad
                </p>
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
              </button>
              <div class="snipcss-tYr1L style-gX2nQ" id="style-gX2nQ">
                <ul id="mc:47" class="">
                  <div role="listitem" class="">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/newcampaingfacebookinstaads"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Facebook / Instagram ad
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div role="listitem">
                    <div class="container-IL_ti">
                      <Link
                        class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                        id="option-ol4ct"
                        to="/newcampainggooglemarketingads"
                      >
                        <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                          Google remarketing ad
                        </span>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div role="listitem">
              <div class="container-IL_ti">
                <Link
                  class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                  id="option-ol4ct"
                  to="/newcampaingsocialpost"
                >
                  <span class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                    Social Post
                  </span>
                </Link>
              </div>
            </div>
            <div role="listitem" class="container-IL_ti">
              <Link
                class="label-g01vr isSelected-LmGnC isChild-Zr4Q5"
                id="option-ol4ct"
                to="/newcampainpostcardonetimesend"
              >
                <button
                  aria-expanded="false"
                  type="button"
                  class="button-1YrMi"
                  aria-controls="mc:50"
                >
                  <p class="root-3TDqk medium-3AcAC text-2t4Eg secondaryText-71Q7m">
                    Postcard
                  </p>
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
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="content-1h3tW">
          <div
            class="stack-1qp4V contentText-2ARRa contentTextOpenDesktop-3FWWK"
            id="front-door-content"
          >
            <div class="stack-1qp4V spacing4-1xt6w">
              <div class="createACPEmail-1PxZE cluster-3D5Qr nowrap-34OZ-">
                <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing4-1S_zR">
                  <div class="stack-1qp4V spacing4-1xt6w">
                    <h1 class="heading-1-2zF42 root-PihPG">Create an email</h1>
                    <p class="root-3TDqk medium-secondary-1YIN8">
                      Easily design messages that reach customers’ inboxes at
                      the right time.
                    </p>
                    <div class="root-2RFjU acpForm-2oTqT">
                      <div class="before-2EDUs">
                        <label
                          class="mcds-label-default"
                          id="mc:78"
                          for="mc:77"
                        >
                          Internal email name
                        </label>
                      </div>
                      <div class="inputWrapper-TVkf7">
                        <input
                          type="email"
                          id="mc:77"
                          aria-invalid="false"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="formButtonContainer-qDx2N">
                      <Link to="/newcampaing/createemail">
                        <button onClick={handlebuttonsubmit} style={{backgroundColor:"#007c89"}}
                          class="root-sBgFt container-3-bH7 primary-33czz"
                          type="button"
                        >
                          <span class="temporarySpan-2iF2p">Create email</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div class="stack-1qp4V spacing4-1xt6w acpCalendarImageContainer-3nQmi">
                    <img
                      class="acpCalendarImage-2Xdgo"
                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/create/home/acp-fd.png"
                      alt="A smartphone displaying a brand next to a calendar and engagement widget"
                    />
                  </div>
                </div>
              </div>
              <div class="multivariate-V6AGq cluster-3D5Qr">
                <div class="alignItemsCenter-1HCiJ justifyFlexStart-ejJl1 spacing8-2cYQ4">
                  <img
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/create/home/multivariate-test-aui.png"
                    alt="Three smartphones displaying different variations for a brand campaign marketing test"
                    width="309px"
                    height="185px"
                  />
                  <div class="stack-1qp4V spacing4-1xt6w">
                    <h3 class="heading-3-eDQNF root-PihPG">
                      Create a multivariate test
                    </h3>
                    <p class="root-3TDqk medium-secondary-1YIN8">
                      Test up to 8 combinations of your emails to optimize your
                      marketing.
                    </p>
                    <div>
                      <button
                        class="root-sBgFt container-3-bH7 secondary-1_P2K"
                        type="button"
                      >
                        <span class="temporarySpan-2iF2p">Create test</span>
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
  );
};

export default NewCompaing;

import React, { createContext, useReducer } from "react";

const initialState = {
  compaingname: "",
  comapingemail: "",
  subject: "",
  previewtext: "",
  sendtime: "",
  chooseemailtemplate: "",
  imageurl: "",
  entryDate: "",
};

const NewCampaignDetailsContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

const CompaingStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NewCampaignDetailsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewCampaignDetailsContext.Provider>
  );
};

export { NewCampaignDetailsContext, CompaingStateProvider };

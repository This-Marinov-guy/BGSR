import React, { useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/error";

const Locked = (props) => {
  const { loading, sendRequest } = useHttpClient();

  const [selectedMembership, setSelectedMembership] = useState("price_1OCHpeIOw5UGbAo1Zvzcw9bK")

  const userId = useParams().userId;

  const dispatch = useDispatch();

  const handleUnlock = async () => {
    if (!userId) {
      dispatch(showError("User cannot be found, please try again"));
      return;
    }
    try {
      const responseData = await sendRequest(
        "payment/checkout-no-file",
        "POST",
        JSON.stringify({
          longTerm: (selectedMembership === "price_1OCHpeIOw5UGbAo1Zvzcw9bK") ? 'false' : 'true',
          origin_url: window.location.origin,
          method: "unlock_account",
          userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (responseData.url) {
        window.location.assign(responseData.url);
      }
    } catch (err) { }
  };

  return (
    <ModalWindow static="static" show={props.show} freeze>
      <div style={{ padding: "40px" }} className="center_section">
        <h2>
          {props.case === "locked"
            ? "Your account is locked!"
            : "Your account is suspended!"}
        </h2>
        <p className="center_text">
          {props.case === "locked"
            ? "To continue using the benefits of a member please pay the fee subscription for the following term! Otherwise, log out of your account."
            : "We have noticed some violation from your side. Unfortunately, we will need to block your account until further notice. Please contact: bulgariansociety.rtm@gmail.com"}
        </p>
        {props.case === "locked" && (
          <div className="options-btns-div">
            <button
              disabled={loading}
              onClick={() => {
                setSelectedMembership("price_1OCHpeIOw5UGbAo1Zvzcw9bK")
                handleUnlock()
              }}
              className="rn-button-style--2 btn-solid mt--40"
            >
              {loading ? <Loader /> : <span>1 year extension</span>}
            </button>
            <button
              disabled={loading}
              onClick={() => {
                setSelectedMembership("price_1OCHs2IOw5UGbAo1MIrF1BFf")
                handleUnlock()
              }} className="rn-button-style--2 btn-solid mt--40"
            >
              {loading ? <Loader /> : <span>3 year extension</span>}
            </button>
          </div>
        )}
        <a href="/" className="rn-button-style--2 rn-btn-green mt--40">
          Back to Home
        </a>
      </div>
    </ModalWindow>
  );
};

export default Locked;

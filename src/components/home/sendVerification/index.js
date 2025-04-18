import { useState } from "react";
import "./style.css";
import axios from "axios";
export default function SendVerification({ user }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/sendVerification`,
        {},
        {
          headers: {
            Authorization: `ahmed72261 ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="send_verification">
      <span>
        Your account is not verified,verify your account before it gets deleted
        after a month from creating.
      </span>
      <a
        onClick={() => {
          sendVerificationLink();
        }}
      >
        click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
}

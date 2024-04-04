import React, { useState } from "react";
import styles from "./../authentication.module.css";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  const navigator = useNavigate();
  const { token } = useParams();

  const handleReset = async (user) => {
    try {
      const res = await fetch(
        `http://localhost:7000/api/v1/resetpassword/${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          credentials: "include",
        }
      );
      if (!res.ok) {
        const errorData = await res.json(); // Log the response body
        // throw new Error(`${errorData.message}`);
        console.log(errorData);
        throw new Error(`${errorData.message}`);
      }

      const data = await res.json();
      console.log(data);
      if (data.status === "success") return data;
      else throw new Error(`${data}`);
    } catch (err) {
      // console.log(err);
      setError(err.message);
    }
  };

  const naviigateToLogin = () => {
    navigator("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (!isTermsAccepted) {
      setError("Please accept terms and conditions");
      return;
    }
    if (password.length < 6) {
      setError("Password length should be at least 6");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
      password,
      confirmPassword,
    };
    const data = await handleReset(user);

    console.log(data);

    // Reset error state after successful submission
    if (data) {
      setConfirmPassword("");
      setPassword("");
      setIsTermsAccepted("");
      setError("");
      naviigateToLogin();
    }
  };

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.shape} />
        <div className={styles.shape} />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.heading}>Reset Password</h3>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
        />
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="termsCheckbox"
            checked={isTermsAccepted}
            className={styles.checkboxContainerInput}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          />
          <label htmlFor="termsCheckbox" className={styles.checkBoxLabel}>
            Accept terms and conditions
          </label>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.button}>
          Submit
        </button>
        <p style={{ marginTop: "10px" }}>
          Back to{" "}
          <span onClick={naviigateToLogin} className={styles.signupLink}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;

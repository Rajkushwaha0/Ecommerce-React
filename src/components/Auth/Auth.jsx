import { useState } from "react";

function Auth({ onSubmit }) {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    username: "",
    isLoading: false,
  });

  function updateEmail(updatedEmail) {
    setFormDetails({ ...formDetails, email: updatedEmail });
  }

  function updatePassword(updatedPassword) {
    setFormDetails({ ...formDetails, password: updatedPassword });
  }

  function updateUsername(updateUsername) {
    setFormDetails({ ...formDetails, username: updateUsername });
  }

  function onFormSubmit() {
    setFormDetails({ ...formDetails, isLoading: true });
    onSubmit(formDetails);
  }
  return (
    <>
      <div class="input-login">
        <input
          onChange={(e) => updateUsername(e.target.value)}
          value={formDetails.username}
          type="text"
          class="form-control"
          placeholder="Username"
          id="loginUsername"
        />
      </div>
      <div class="input-login">
        <input
          onChange={(e) => updateEmail(e.target.value)}
          value={formDetails.email}
          type="text"
          class="form-control"
          placeholder="Email"
          id="loginUsername"
        />
      </div>
      <div class="input-login">
        <input
          onChange={(e) => updatePassword(e.target.value)}
          value={formDetails.password}
          type="password"
          class="form-control"
          placeholder="Password"
          id="loginPassword"
        />
      </div>
      <div class="btn-login">
        <button
          onClick={onFormSubmit}
          className="form-control btn btn-primary"
          type="button"
          disabled={formDetails.isLoading}
        >
          {formDetails.isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {formDetails.isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </>
  );
}

export default Auth;

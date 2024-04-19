function Auth() {
  return (
    <>
      <div class="input-login">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          id="loginUsername"
        />
      </div>
      <div class="input-login">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          id="loginPassword"
        />
      </div>
      <div class="btn-login">
        <button class="form-control btn btn-primary">Submit</button>
      </div>
    </>
  );
}

export default Auth;

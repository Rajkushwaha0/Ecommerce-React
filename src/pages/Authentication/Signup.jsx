import "./Login.css";
import Auth from "../../components/Auth/Auth";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div class="login-container">
      <h2 class="login-title text-center">Welcome to Bharat Cart</h2>

      <div class="login" id="loginForm">
        <h4 class="text-center login-text">Sign Up</h4>
        <Auth />
        <div class="signup-btn text-center" id="showSignupBtn">
          Already have an Account? <Link to={"/login"}>Sign In Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

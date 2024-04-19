import Auth from "../../components/Auth/Auth";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div class="login-container">
      <h2 class="login-title text-center">Welcome to Bharat Cart</h2>

      <div class="login" id="loginForm">
        <h4 class="text-center login-text">Login</h4>
        <Auth />
        <div class="signup-btn text-center" id="showSignupBtn">
          Don't have an Account? <Link to={"/signup"}>Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

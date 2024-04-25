import "./Login.css";
import Auth from "../../components/Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../apis/fakeStoreApis";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  async function onAuthFormSubmit(authArguments) {
    try {
      await axios.post(signup(), {
        username: authArguments.username,
        email: authArguments.email,
        password: authArguments.password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="login-container">
      <h2 class="login-title text-center">Welcome to Bharat Cart</h2>

      <div class="login" id="loginForm">
        <h4 class="text-center login-text">Sign Up</h4>
        <Auth onSubmit={onAuthFormSubmit} />
        <div class="signup-btn text-center" id="showSignupBtn">
          Already have an Account? <Link to={"/login"}>Sign In Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

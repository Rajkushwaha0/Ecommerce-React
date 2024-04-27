import Auth from "../../components/Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { sigin } from "../../apis/fakeStoreApis";
import { useCookies } from "react-cookie";

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useCookies(["jwt-token"]);

  async function onAuthFormSubmit(formDetails) {
    try {
      const response = await axios.post(sigin(), {
        username: formDetails.username,
        email: formDetails.email,
        password: formDetails.password,
      });
      // console.log(response);
      setToken("jwt-token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="login-container">
      <h2 class="login-title text-center">Welcome to Bharat Cart</h2>

      <div class="login" id="loginForm">
        <h4 class="text-center login-text">Login</h4>
        <Auth onSubmit={onAuthFormSubmit} />
        <div class="signup-btn text-center" id="showSignupBtn">
          Don't have an Account? <Link to={"/signup"}>Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

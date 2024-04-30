//library
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
//css
import "./Login.css";
//component
import Auth from "../../components/Auth/Auth";
import { sigin } from "../../apis/fakeStoreApis";
//context
import userContext from "../../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useCookies(["jwt-token"]);
  const { user, setUser } = useContext(userContext);
  async function onAuthFormSubmit(formDetails) {
    try {
      const response = await axios.post(
        sigin(),
        {
          username: formDetails.username,
          email: formDetails.email,
          password: formDetails.password,
        },
        { withCredentials: true }
      );
      // console.log(response);
      setToken("jwt-token", response.data.token, { httpOnly: true });
      const toeknDetails = jwtDecode(response.data.token);
      setUser({ username: toeknDetails.user, id: toeknDetails.id });
      // console.log(toeknDetails);
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

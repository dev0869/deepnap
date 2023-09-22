import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitlog = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${base_url}/user/login`, {
      password,
      email,
    });
    if (res.data.name !== undefined) {
      toast.success("Login Sucessfull");
      dispatch(addUser(res.data))
      localStorage.setItem("token", res.data.token);
      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      toast.error(res.data);
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ background: "#060922" }}>
        <div className="row">
          <div style={{ background: "#060922", minHeight: "80vh" }}>
            <div
              className="form-container"
              style={{
                border: "1px solid white",
                boxShadow: "1px 1px 8px 1px white",
              }}
            >
              <p className="title">Login</p>
              <form className="form">
                <div className="input-group">
                  <label htmlFor="username">Email ID</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    autoComplete="username"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <div className="forgot">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <button className="signnn" onClick={(e) => handleSubmitlog(e)}>
                  Sign in
                </button>
              </form>
              <div className="social-message">
                <div className="line"></div>
                <p className="message">Login with social accounts</p>
                <div className="line"></div>
              </div>
              <div className="social-icons">
                <button aria-label="Log in with Google" className="icon">
                  <FcGoogle />
                </button>
                <button aria-label="Log in with facebook" className="icon">
                  {/* Twitter SVG */}
                  <BsFacebook />
                </button>
              </div>
              <p className="signup d-flex justify-center gap-2">
                Don{"'"}t have an account?
                <NavLink rel="noopener noreferrer" to="/register" className="">
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

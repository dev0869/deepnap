import "./Authcss.css";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { base_url } from "../../utils/base_url";
import { adduserSignup } from "../../features/loading/loadingSlice";
import { useDispatch } from "react-redux";
import { checkuserSignup } from "../../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await checkuserSignup({
      name,
      email,
      password,
      mobile,
    });
    if (res.success) {
      dispatch(
        adduserSignup({
          name,
          email,
          password,
          mobile,
        })
      );
      try {
        const res2 = await axios.post(`${base_url}/otp/send`, {
          email,
        });
        if (res2.data.success) {
          toast.success(res2.data.success);
          navigate("/signup");
        }
      } catch (error) {
        toast.error(error.mesage);
      }
    } else {
      toast.error(res.error);
    }
  };

  return (
    <>
      <div className="" style={{ background: "#060922" }}>
        <div className="container">
          <div className="row max-sm:p-4 md:py-20 items-center justify-center">
            <div
              className="rounded col-12 col-md-4 p-4"
              style={{
                border: "1px solid white",
                boxShadow: "1px 1px 10px 2px white",
                background: "#111827",
              }}
            >
              <p className="title text-white">Register</p>
              <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setemail(e.target.value)}
                    autoComplete="username"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="mobile">mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={mobile}
                    placeholder="Enter your mobile number"
                    onChange={(e) => setmobile(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <button className="signnn mt-3">Sign up</button>
              </form>

              <div className="social-message">
                <div className="line"></div>
                <p className="message">Register with social accounts</p>
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
                Have an account?
                <NavLink rel="noopener noreferrer" to="/login" className="">
                  Sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

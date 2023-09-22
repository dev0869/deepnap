import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { toggleLoading } from "../../features/loading/loadingSlice";
import { base_url } from "../../utils/base_url";
import { signupUser } from "../../utils/api";
import { addUser } from "../../features/userSlice";

const Otp = () => {
  const data = useSelector((state) => state.loading.data);
  const [verificationCodes, setVerificationCodes] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const newCodes = [...verificationCodes];
    newCodes[index] = event.target.value;
    setVerificationCodes(newCodes);

    if (
      event.target.value.length === 1 &&
      index < verificationCodes.length - 1
    ) {
      inputRefs.current[index + 1].focus();
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const otp = verificationCodes.join("");
    dispatch(toggleLoading(true));

    try {
      const res = await axios.post(`${base_url}/otp/verify`, {
        email: data.email,
        otp,
      });
      if (res.data.sucess) {
        const res2 = await signupUser(data);
        if (res2.name !== undefined) {
          toast.success("Registeration Sucessfull");
          localStorage.setItem("token", res2.token);
          dispatch(addUser(res.data));
          navigate("/");
        } else {
          toast.error(res2);
          navigate("/login");
        }
      } else {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(toggleLoading(false));
  };
  return (
    <>
      <div
        className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-12"
        style={{ background: "#060922" }}
      >
        <div
          className="relative border px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl"
          style={{ background: "#060922" }}
        >
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-white text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {data.email}</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    {verificationCodes.map((code, index) => (
                      <div key={index} className="w-16 h-16">
                        <input
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="w-full h-full flex items-center justify-center text-center px-4 outline-none rounded-md border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          maxLength={1}
                          value={code}
                          onChange={(event) => handleChange(index, event)}
                          onKeyUp={(event) => {
                            if (event.keyCode === 8 && index > 0) {
                              inputRefs.current[index - 1].focus();
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        type="submit"
                        className="flex flex-row items-center justify-center text-center w-[50%] border rounded-xl outline-none py-3 bg-blue-500 border-none text-white text-sm shadow-sm"
                      >
                        Verify OTP
                      </button>
                    </div>

                    {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didnt receive the code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;

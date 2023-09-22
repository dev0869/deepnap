import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineMenu } from "react-icons/ai";
import routes from "./Routes";
import Sidebar from "./Sidebar";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdmindata } from "./api/AdminSlice";
import Loader from "./../Component/Home/Loader";
import DashBoard from "./admin/DashBoard";
const Layout = () => {
  const user = useSelector((st) => st.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    toast.success("logout Successfull");
  };
  useEffect(() => {
    dispatch(getAdmindata());
  }, [dispatch]);
  if (user) {
    return (
      <>
        <nav
          className="w-full h-[60px] shadow-md position-sticky top-0"
          style={{ position: "absolute", top: "0", zIndex: "999" }}
        >
          <div className="container flex h-full items-center justify-between bg-white z-100">
            <div onClick={toggleSidebar} className=" " type="button">
              <AiOutlineMenu color="red" fontSize={30} />
            </div>
            <Link to={"/"} className="navbar-brand">
              DeepnapSpoftech
            </Link>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                handleLogout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </nav>

        <div
          style={{ minHeight: "94vh", position: "relative" }}
          className="col-12 flex max-sm:flex-wrap p-2 mt-2"
        >
          <div
            className={
              isSidebarOpen
                ? "min-w-[250px] w-full md:w-[250px] position-relative bg-white transition-all"
                : "w-[0]"
            }
          >
            <Sidebar />
          </div>
          <div className="overflow-x-auto routeC w-full p-2 position-relative bg-white">
            <Routes>
              <Route path={"/"} element={<DashBoard />} />
              {routes.map((ele, i) => (
                <React.Fragment key={i}>
                  {ele.submenu === undefined && (
                    <Route
                      key={ele.href?.split("/admin")[1]} // Use a unique key here
                      path={ele.href?.split("/admin")[1]}
                      element={ele.element}
                    />
                  )}
                  {ele?.submenu?.map((e) => (
                    <Route
                      key={e.href?.split("/admin")[1]}
                      path={e.href?.split("/admin")[1]}
                      element={e.element}
                    />
                  ))}
                </React.Fragment>
              ))}
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
};

export default Layout;

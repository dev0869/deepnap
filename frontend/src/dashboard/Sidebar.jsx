import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import routes from "./Routes";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector(st=>st.user.data)

  return (
    <>
      <div className="min-w-[250px] w-full md:w-[250px] position-fixed">
        <div className="rounded shadow overflow-hidden mr-2 sticky-bar">
          <div className="card border-0">
            <img
              src="../assets/images/doctors/profile-bg.jpg"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
            <img
              src="../assets/images/doctors/01.jpg"
              className="rounded-circle shadow-md avatar avatar-md-md"
              alt=""
            />
            <h5 className="mt-3 mb-1">{user.name}</h5>
            <p className="text-muted mb-0 text-capitalize">{user.role}</p>
          </div>

          <ul className="list-unstyled sidebar-nav mb-0">
            {routes.map((ele, i) => {
              return (
                <li className="navbar-item" key={i}>
                  {ele.submenu === undefined && (
                    <NavLink to={ele.href} className="navbar-link">
                      {ele.icon}
                      <span className="ms-2">{ele.text}</span>
                    </NavLink>
                  )}
                  {ele.submenu && (
                    <>
                      <Accordion
                        className="sidebar-acc text-md d-flex items-center gap-2 w-full"
                        defaultActiveKey="0"
                      >
                        <Accordion.Item
                          className="w-full border-none"
                          eventKey="1"
                        >
                          <Accordion.Header className="w-full">
                            {ele.icon}
                            <span>{ele.text}</span>
                          </Accordion.Header>
                          <Accordion.Body className="p-0 flex flex-wrap">
                            {ele?.submenu.map((childRoute, j) => (
                              <NavLink
                                key={j}
                                to={childRoute.href}
                                className="navbar-link col-12 mt-2"
                              >
                                {childRoute.icon}
                                <span
                                  className="ms-2"
                                  style={{ wordSpacing: "1px" }}
                                >
                                  {childRoute.text}
                                </span>
                              </NavLink>
                            ))}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-5 col-12 d-none d-lg-block"></div>
    </>
  );
};

export default Sidebar;

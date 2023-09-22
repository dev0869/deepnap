// import { AiOutlineUser } from "react-icons/ai";
// import { FaList ,FaUser} from "react-icons/fa";
// import { MdAddBox, MdSpaceDashboard } from "react-icons/md";
import Career from "./admin/Career";
import EnquirySheet from "./admin/EnquirySheet";
import ConatctSheet from "./admin/ContactUsSheet";
import emp from "./icons/emp.png"
import emp1 from "./icons/emp1.png"
import dash from "./icons/dash.png"
import carrer from "./icons/carrer.png"
import query from "./icons/query.png"
import contact from "./icons/contact.png"
import list from "./icons/list.png"
import EmployeeForm from "./admin/employee/AddEmployee";
import EmployeeList from "./admin/employee/EmployeeList";
import DashBoard from "./admin/DashBoard";
import AddRP from "./admin/rp/AddRp";
const routes = [
  {
    text: "Dashboard",
    icon: <img src={dash} alt="icon" width={30}/>,
    href: "/admin/dashboard",
    element:<DashBoard/>
  },
  {
    text: "Career",
    icon: <img src={carrer} alt="icon" width={30} height={30}/>,
    href: "/admin/career",
    element:<Career/>
  },
  {
    text: "Enquiry",
    icon: <img src={query} alt="icon" width={30}/>,
    href: "/admin/enquiry",
    element:<EnquirySheet/>
  },
  {
    text: "Contact",
    icon: <img src={contact} alt="icon" width={30}/>,
    href: "/admin/contact",
    element:<ConatctSheet/>
  },
  {
    text: "Employee",
    icon: <img src={emp} alt="icon" width={30}/>,
    submenu:[
        {
          text: "Add New Employee",
          icon: <img src={emp1} alt="icon" width={30}/>,
          href: "/admin/employee/add",
          element:<EmployeeForm/>
        },
        {
          text: "Employee List",
          icon: <img src={list} alt="icon" width={30}/>,
          href: "/admin/employee/list",
          element:<EmployeeList/>
        },  
    ]
  },
  {
    text: "Refferal Program",
    icon: <img src={emp} alt="icon" width={30}/>,
    submenu:[
        {
          text: "Add New RP",
          icon: <img src={emp1} alt="icon" width={30}/>,
          href: "/admin/rp/add",
          element:<AddRP/>
        },
        {
          text: "RP List",
          icon: <img src={list} alt="icon" width={30}/>,
          href: "/admin/rp/list",
          element:<EmployeeList/>
        },  
    ]
  },
];
export default routes;

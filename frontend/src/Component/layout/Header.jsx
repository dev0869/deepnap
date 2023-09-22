import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {MdOutlinePhonelinkErase} from "react-icons/md"
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
    toast.info("Logout Sucessfully.");
    window.location.reload();
  };

  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-blue-800 p-0 m-0">
      <div className="flex items-center  pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
        <img
          className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          alt="Avatar"
        />
        <span className="hidden md:block">ADMIN</span>
      </div>
      <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <ul className="flex items-center me-14">
          <li>
            <p
              onClick={handleLogout}
              className="flex items-center cursor-pointer mr-4 hover:text-blue-100"
            >
              <span className="inline-flex mr-1">
                <MdOutlinePhonelinkErase />
              </span>
              Logout
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

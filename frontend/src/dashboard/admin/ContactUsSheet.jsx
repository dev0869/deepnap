import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "datatables.net";
// import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import { toast } from "react-toastify";
import { getAdmindata } from "../api/AdminSlice";
import ViewModal from './../components/ViewModal';
import useViewModal from "../components/useViewModel";
const ConatctSheet = () => {
  const ContactUs = useSelector((st) => st.admin.data)?.contacts;
  const dispatch = useDispatch();

  useEffect(() => {
    if (ContactUs?.length > 0) {
      const table = $("#contactUSTable").DataTable();
      return () => {
        table.destroy();
      };
    }
  }, [ContactUs]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${base_url}/admin/deletecontact/${id}`
      );

      if (response.data.success) {
        dispatch(getAdmindata());
        toast.success("User deleted successfully");
      } else {
        toast.error("User can't be deleted");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const { showModal, selectedData, openModal, closeModal } = useViewModal();
  return (
    <div className="col-12 position-relative">
      <h4 className="mb-3 text-2xl font-semibold">Contact us Request</h4>
      <div className="table-responsive">
        <table id="contactUSTable" className="table overflow-x-auto rounded border">
          <thead>
            <tr className="text-xs font-semibold tracking-wide rounded text-left text-gray-800 uppercase   bg-gray-200 ">
              <th className="px-4 py-3">Sr.No.</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3" style={{ maxWidth: "300px" }}>
                Email
              </th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {ContactUs?.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="px-4 py-3 ">{i + 1}</td>
                  <td className="px-4 py-3 ">
                    <p className="w-24">{ele.date?.split("T")[0]}</p>
                  </td>
                  <td className="px-4 py-3 ">
                    <p className="w-28">{ele.name}</p>
                  </td>
                  <td className="py-3 ">{ele.email}</td>
                  <td className="px-4 py-3">{ele.phone}</td>
                  <td className="px-4 py-3 ">{ele.city}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {/* <Link to={`/admin/updatequotes/${ele._id}`} state={ele}>
                        <FaEye size={20} style={{ color: "blue" }} />
                      </Link> */}
                      <button onClick={() => openModal(ele)}>
                        <FaEye size={20} style={{ color: "blue" }} />
                      </button>
                      <AiFillDelete
                        size={20}
                        className="icon"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDelete(ele._id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
    </div>
  );
};

export default ConatctSheet;

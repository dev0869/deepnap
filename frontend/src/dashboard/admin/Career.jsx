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
import Badge from "react-bootstrap/Badge";
import useViewModal from "../components/useViewModel";
import ViewModal from "../components/ViewModal";
const Career = () => {
  const Carrier = useSelector((st) => st.admin.data)?.carrier;
  const dispatch = useDispatch();

  useEffect(() => {
    if (Carrier?.length > 0) {
      const table = $("#caarerTable").DataTable();
      return () => {
        table.destroy();
      };
    }
  }, [Carrier]);
  const delCareer = async (id) => {
    try {
      const response = await axios.delete(
        `${base_url}/admin/deletecarrier/${id}`
      );
      if (response.data.success) {
        toast.success("User deleted successfully");
        dispatch(getAdmindata());
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const { showModal, selectedData, openModal, closeModal } = useViewModal();


  return (
    <div className="col-12 position-relative">
      <h4 className="mb-3 text-2xl font-semibold">Carrier Request</h4>
      <div className="table-responsive">
        <table id="caarerTable" className="table overflow-x-auto rounded border">
          <thead>
            <tr className="text-xs font-semibold tracking-wide rounded text-left text-gray-800 uppercase   bg-gray-200 ">
              <th className="px-4 py-3">S.No.</th>
              <th className="px-4 py-3">Date</th> 
              <th className="px-4 py-3">Name</th>
              {/* <th className="px-4 py-3">Email</th> */}
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">Designation</th>
              <th className="px-4 py-3">Resume</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {Carrier?.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3" style={{ whiteSpace: "nowrap" }}>
                    {ele?.date?.split("T")[0]}
                  </td>
                  <td className="px-4 py-3">{ele?.name}</td>
                  {/* <td className="px-4 py-3">{ele?.email}</td> */}
                  <td className="px-4 py-3">{ele?.phone}</td>
                  <td className="px-4 py-3" style={{ whiteSpace: "nowrap" }}>
                    {ele?.designation}
                  </td>
                  <td className="px-4 py-3" style={{ whiteSpace: "nowrap" }}>
                    <Badge bg="info">
                      <a href={ele?.resume} target="blank">
                        View
                      </a>
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {/* <Link to="#">
                        <FaEye size={20} style={{ color: "blue" }} />
                      </Link> */}
                      <button onClick={() => openModal(ele)}>
                        <FaEye size={20} style={{ color: "blue" }} />
                      </button>
                      <AiFillDelete
                        size={20}
                        className="icon"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => delCareer(ele?._id)}
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

export default Career;

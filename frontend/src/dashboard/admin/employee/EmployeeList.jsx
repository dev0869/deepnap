import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "datatables.net";
import { Link } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url, config } from "../../../utils/base_url";
import { getAdmindata } from "../../api/AdminSlice";
import ViewModal from "../../components/ViewModal";
import useViewModal from "../../components/useViewModel";
import edit from "../../icons/edit.png"
import view from "../../icons/view.png"

const EmployeeList = () => {
  const employees = useSelector((state) => state.admin.data?.employees);
  const dispatch = useDispatch();
  const { showModal, selectedData, openModal, closeModal } = useViewModal();

  useEffect(() => {
    if (employees?.length > 0) {
      const table = $("#employeeTable").DataTable();
      return () => {
        table.destroy();
      };
    }
  }, [employees]);

  useEffect(() => {
    dispatch(getAdmindata());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${base_url}/employee/${id}`, config);
      if (response.data.success) {
        dispatch(getAdmindata());
        $("#employeeTable").DataTable();
        toast.success("Employee deleted successfully");
      } else {
        toast.error("Employee can't be deleted");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

 

  return (
    <>
      <div className="col-12 position-relative">
        <h4 className="mb-3 text-2xl font-semibold">Employee List</h4>
        <div className="table-responsive">
          <table
            id="employeeTable"
            className="table overflow-x-auto rounded border"
          >
            <thead>
              <tr className="text-xs font-semibold tracking-wide rounded text-left text-gray-800 uppercase   bg-gray-200 ">
                <th className="px-4 py-3">Sr.No.</th>
                <th className="px-4 py-3">Employee ID</th>
                <th className="px-4 py-3">
                  <p className="w-28">Date of Joining</p>
                </th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Mobile</th>
                {/* <th className="px-4 py-3">Email</th> */}
                {/* <th className="px-4 py-3">Gender</th> */}
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee, index) => (
                <tr key={employee._id}>
                  <td className="px-4 py-3 ">{index + 1}</td>
                  <td className="px-4 py-3 ">{employee.employeeId}</td>
                  <td className="px-4 py-3 ">
                    <p className="w-24">
                      {employee.dateOfJoining.split("T")[0]}
                    </p>
                  </td>
                  <td className="px-4 py-3 ">
                    <p className="w-28">{employee.name}</p>
                  </td>
                  <td className="px-4 py-3 ">{employee.mobile}</td>
                  {/* <td className="px-4 py-3 ">{employee.email}</td> */}
                  {/* <td className="px-4 py-3 text-capitalize">
                    {employee.gender}
                  </td> */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Link to={`/admin/employee/add`} state={employee}>
                        <img src={edit} alt="edit" width={20} />
                      </Link>
                      
                      <button onClick={() => openModal(employee)}>
                      <img src={view} alt="edit" width={30} />
                      </button>
                      <AiFillDelete
                        size={20}
                        className="icon"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDelete(employee._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />      
    </>
  );
};

export default EmployeeList;

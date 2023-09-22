import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEmployee, updateEmployee } from "../../api/AdminSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  refferalProgamId: Yup.string().required("Employee ID is required"),
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfJoining: Yup.date().required("Date of Joining is required"),
  gender: Yup.string().required("Gender is required"),
  isWorking: Yup.boolean().required("Working status is required"),
});

const AddRP = () => {
  const editdata = useLocation().state;
  const dispatch = useDispatch();
  let initialValues = {
    refferalProgamId: "DEEPNAPRP",
    name: "",
    mobile: "",
    email: "",
    dateOfJoining: "",
    gender: "male", // Default gender selection
    isWorking: false, // Default is not working
    photo: "",
  };
  if (editdata) {
    delete editdata["_id"];
    delete editdata["__v"];
    let doj = editdata?.dateOfJoining?.split("T")[0];
    editdata["dateOfJoining"] = doj;
    initialValues = editdata;
  }

  const onSubmit = (values) => {
    if (editdata) {
      dispatch(updateEmployee(values));
    } else {
      dispatch(addEmployee(values));
    }
  };
  return (
    <div className="container shadow-md border p-4">
      <h2 className="mt-2 mb-4 h3">Refferal Program Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label
                    htmlFor="refferalProgamId"
                    className="font-weight-bold"
                  >
                    Employee ID
                  </label>
                  <Field
                    className="form-control"
                    type="text"
                    name="refferalProgamId"
                  />
                  <ErrorMessage
                    name="refferalProgamId"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="name" className="font-weight-bold">
                    Name
                  </label>
                  <Field className="form-control" type="text" name="name" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="mobile" className="font-weight-bold">
                    Mobile Number
                  </label>
                  <Field className="form-control" type="number" name="mobile" />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="email" className="font-weight-bold">
                    Email
                  </label>
                  <Field className="form-control" type="text" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="dateOfJoining" className="font-weight-bold">
                    Date of Joining
                  </label>
                  <Field
                    className="form-control"
                    type="date"
                    name="dateOfJoining"
                  />
                  <ErrorMessage
                    name="dateOfJoining"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="gender" className="font-weight-bold">
                    Gender
                  </label>
                  <Field as="select" className="form-control" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="isWorking" className="font-weight-bold">
                    Is Currently Working
                  </label>
                  <Field as="select" className="form-control" name="isWorking">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Field>
                  <ErrorMessage
                    name="isWorking"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="photo" className="font-weight-bold">
                    Photo
                  </label>
                  <Field
                    type="file"
                    name="photo"
                    className="form-control"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-outline-primary">
                {editdata ? "Update" : "Add"} RP
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddRP;

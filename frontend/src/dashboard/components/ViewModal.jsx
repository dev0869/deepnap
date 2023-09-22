import { Badge, Modal } from "react-bootstrap";

const ViewModal = (props) => {
  const { show, onHide, data } = props;
  const transformData = (data) => {
    if (!data) return null;

    const transformedData = {};
    for (const [key, value] of Object.entries(data)) {
      const transformedKey = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      if (key !== "_id" && key !== "__v") {
        if (
          typeof value === "string" &&
          value.includes("https://images.deepmart.shop")
        ) {
          transformedData[transformedKey] = (
            <Badge bg="info">
              <a href={value} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Badge>
          );
        } else if (typeof value === "boolean") {
          transformedData[transformedKey] = (
            <Badge variant={value ? "success" : "danger"}>
              {value ? "Yes" : "No"}
            </Badge>
          );
        } else if (
          typeof value === "string" &&
          /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)
        ) {
          transformedData[transformedKey] = new Date(value).toLocaleString();
        } else {
          transformedData[transformedKey] = value;
        }
      }
    }
    return transformedData;
  };

  const transformedData = transformData(data);
  const elementStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #8080803b",
    paddingBottom: "7px",
    marginBottom: "4px",
  };
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>View Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data && (
          <div>
            {Object.entries(transformedData).map(([key, value]) => (
              <div key={key} style={elementStyle}>
                <strong className="text-capitalize text-primary">
                  {key} :
                </strong>{" "}
                {value}
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="btn btn-outline-danger">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;

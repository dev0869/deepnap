import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="loader-container"
      style={{
        position: "fixed", // Use "fixed" instead of "absolute" for better centering
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.8)", // Use a semi-transparent background
        zIndex: 9999, // Adjust the zIndex if needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader color="black" loading={true} size={50} />
    </div>
  );
};

export default Loader;

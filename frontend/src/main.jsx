import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from "./Component/Home/Loader.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

const RootComponent = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 2000); 

    return () => {
      clearTimeout(loaderTimeout); // Clear the timeout if the component unmounts
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>{showLoader ? <Loader /> : <App />}</BrowserRouter>
      </Provider>
    </>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RootComponent />);

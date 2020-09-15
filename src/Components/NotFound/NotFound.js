import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div className="text-center m-4">
      <h1>This page is not found (404) </h1> <br />
      <button className="btn btn-primary" onClick={handleBack}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

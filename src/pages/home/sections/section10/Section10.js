import React from "react";
import "./Section10.css";
import { Link } from "react-router-dom";

const section10 = () => {
  return (
    <div
      className="codeutsava__section10"
      id="my-team"
    >
      <div className="codeutsava__section10-body">
        <div className="codeutsava__section10-title">
          Wondering who all make this possible?
        </div>
        <Link className="codeutsava__section10-button" to="/team">
          Meet our Team
        </Link>
      </div>
    </div>
  );
};

export default section10;

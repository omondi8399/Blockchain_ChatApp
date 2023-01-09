import React from "react";

//INTERNAL IMPORT
import Style from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div className={Style.Error}>
      <div className={Style.Error_box}>
        <h1>Please Fix This Error & Reload Browser</h1>
        {error}
      </div>
    </div>
  );
};

export default Error;
import React from "react";
import "./model.css";

const Model = ({ closeModel, temImgSrc }) => {
  return (
    <>
      <div className="main">
        <div className="body">
          <img className="image" src={temImgSrc} />
        </div>
        <i
          onClick={() => closeModel(false)}
          className="fa-solid fa-xmark closeBtn"
        ></i>
      </div>
    </>
  );
};

export default Model;

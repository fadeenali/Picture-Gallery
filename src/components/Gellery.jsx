import React, { useEffect, useState } from "react";
import GelleryImages from "./Data";
import "./Gellery.css";
import Model from "./Model";

const Gellery = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [temImgSrc, setTemImgSrc] = useState("");

  const getImg = (img) => {
    setModelOpen(true);
    setTemImgSrc(img);
  };

  return (
    <>
      {modelOpen && <Model temImgSrc={temImgSrc} closeModel={setModelOpen} />}

      <div className="Gellery">
        {GelleryImages.map((item, index) => {
          return (
            <div
              className="image"
              key={index}
              onClick={() => getImg(item.image)}
            >
              <div className="img">
                <img src={item.image} alt="images" style={{ width: "100%" }} />
              </div>
              <div className="dec">
                <h3> by: {item.by} </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gellery;

import React from "react";
import "./ViewContainer.scss";
const Image = (props) => {
  return (
    <div className="imgContainer">
      <img
        className="dog"
        
        src={props.imageUrl}
        
      />
    </div>
  );
};

export default Image;

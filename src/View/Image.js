import React from "react";
import "./ViewContainer.scss";
const Image = (props) => {
  return (
    <div>
      <img
        className="dog"
        height="200px"
        src={props.imageUrl}
        width="250px"
      />
    </div>
  );
};

export default Image;

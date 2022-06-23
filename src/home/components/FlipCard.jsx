import React from "react";

import "../css/flipcard.scss";
function FlipCard({title,img,description}) {
  return (
    <div className="flip">
      <div
        className="front"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        
      </div>
      <div className="back">
        <p>{title}</p>
        <p>
         {description}
        </p>
      </div>
    </div>
  );
}

export default FlipCard;

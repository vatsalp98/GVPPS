import { ArrowForwardIosRounded } from "@mui/icons-material";
import React from "react";
import "../css/menucard.css";

/**
 *
 * @param {dx} is offset for image on x axis
 * @param {dy} is offset for image on y axis
 * This adjusts the image position on the card
 */
function MenuCard({ title, img, color, dx, dy }) {
  return (
    <>
      <div class="outer-div" style={{ marginBottom: "15px" }}>
        <div class="text-container" style={{ backgroundColor: color }}>
          <div className="text-inner-container">
            <div className="text-title">{title}</div>
            <div className="icon-container">
              <ArrowForwardIosRounded className="icon" />
            </div>
          </div>
        </div>
        <div class="image">
          <img
            src={img}
            style={{
              top: dy,
              left: dx,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default MenuCard;

import React from "react";
import "../css/smallcards.css";
import "../css/smallcards.scss";
function SmallCards({backgroundColor,title,subtitle,img,onClick,buttonText,number}) {
  return (
    <>
      <div class={`card card__small card__dark card__dark--magenta ${number}`} style={{backgroundColor:backgroundColor}}>
        <div class="media">
          {" "}
            <a href="http://www.freepik.com">
              <img
                style={{backgroundColor : "white"}}
                src={img}
                alt=""
                width="640"
                height="426"
              />
              Designed by rawpixel.com / Freepik
            </a>
          {" "}
        </div>
        <div class="primary-title">
          <div class="primary-text">{title}</div>
          <div class="secondary-text">{subtitle}</div>
        </div>
        <div class="actions border-top">
          <div class="action-buttons">
            <button class="button" type="button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}



export default SmallCards;
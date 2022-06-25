import React from "react";
import "../css/mobilebottomnav.scss";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { LocationOn, MonetizationOn } from "@mui/icons-material";
import { AppContext, BottomNav } from "../../context/context";
import { useState } from "react";
import { useContext } from "react";

function MobileBottomNav() {
  const appContext = useContext(AppContext);
  const [selected, setSelected] = useState(appContext.selected);
  function changeSelected(params) {
    console.log(params);
    setSelected(params);
  }
 

  return (
    <>
      <nav class="mobile-bottom-nav">
        <Link to="/" onClick={() => changeSelected(BottomNav.home)}>
          <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
            <div class="mobile-bottom-nav__item-content">
              <HomeIcon
                className="bottom-nav-icon"
                sx={{
                  width: "100%",
                  color: selected === BottomNav.home ? "red" : "grey",
                }}
              />
            </div>
          </div>
        </Link>
        <Link
          to="/location"
          onClick={() => changeSelected(BottomNav.location)}
        >
          <div class="mobile-bottom-nav__item">
            <div class="mobile-bottom-nav__item-content">
              <LocationOn
                className="bottom-nav-icon"
                sx={{
                  width: "100%",
                  color: selected === BottomNav.location ? "red" : "grey",
                }}
              />
            </div>
          </div>
        </Link>

        <Link
          to="/awards"
          onClick={() => changeSelected(BottomNav.awards)}
        >
          <div class="mobile-bottom-nav__item">
            <div class="mobile-bottom-nav__item-content">
              <WorkspacePremiumIcon
                className="bottom-nav-icon"
                sx={{
                  width: "100%",
                  color: selected === BottomNav.awards ? "red" : "grey",
                }}
              />
            </div>
          </div>
        </Link>
        <Link
          to="/about"
          onClick={() => changeSelected(BottomNav.aboutus)}
        >
          <div class="mobile-bottom-nav__item">
            <div class="mobile-bottom-nav__item-content">
              <InfoIcon
                className="bottom-nav-icon"
                sx={{
                  width: "100%",
                  color: selected === BottomNav.aboutus ? "red" : "grey",
                }}
              />
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default MobileBottomNav;

import React from "react";
import { Grid, Typography } from "@mui/material";

function MobileHeadline() {
  return (
   <>
        <img src={"/logo.png"} style={{ width: "60px", height: "60px" }} />
     
        <Typography
          variant="h4"
          className="opening-title"
          sx={{ marginTop: "20px", fontWeight: "700" }}
        >
          Welcome to{" "}
          <p style={{ padding: "0", margin: "0", display: "inline-block" }}>
            <span style={{ color: "#f6931c" }}>GV</span>
            <span style={{ color: "#01adef" }}>PPS</span>
          </p>
        </Typography>
     
</>
  );
}

export default MobileHeadline;

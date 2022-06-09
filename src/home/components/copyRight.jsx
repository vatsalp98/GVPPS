import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function copyRight(props) {
  return (
    <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}>
        {"Copyright © "}
        <Link color="inherit" href="">
            GVPPS
        </Link>
        {" "}
        {new Date().getFullYear()}
        {"."}
    </Typography>
  )
};

export default copyRight;
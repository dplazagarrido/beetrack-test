import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import labels from "../header/labels";

export const header = () => {
  return (
    <Box className="beetrackText">
      <Typography className="beetrackText__test" variant="h5">
        {labels.txtTest}
      </Typography>
      <Typography className="beetrackText__beetrack" variant="h5">
        {labels.txtBeetrack}
      </Typography>
    </Box>
  );
};

export default header;

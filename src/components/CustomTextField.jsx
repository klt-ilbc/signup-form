import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ label }) => {
  return (
    <TextField
      fullWidth
      placeholder={label}
      inputProps={{
        style: {
          fontSize: "14px",
          padding: "11px 15px",
          color: "#FFF",
        },
      }}
      sx={{
        "& fieldset": {
          border: "none",
        },

        height: 44,
        bgcolor: "#62A8E3",
        border: "1px solid #FFF",
        borderRadius: "30px",
      }}
    />
  );
};

export default CustomTextField;

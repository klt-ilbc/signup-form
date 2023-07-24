import { Typography, Stack, Divider, TextField, Button } from "@mui/material";
import React from "react";

const Security = () => {
  return (
    <Stack>
      <Typography fontSize="20px" fontWeight={700}>
        Security
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize="16px"
        fontWeight={500}
        py={1}
        sx={{ color: "#6A86ED" }}
      >
        Edit your account settings and change your password here.
      </Typography>

      <Divider />
      <Stack direction="column" gap={1} my={2} component="form">
        <Typography fontSize="16px" fontWeight={500}>
          New phone number
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter your new phone number"
          type="tel"
          sx={{
            width: "50%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              "> input": {
                padding: "11px 18px",
              },
            },
          }}
        />
        <Button
          variant="outlined"
          sx={{
            width: "100px",
            textTransform: "initial",
            borderRadius: "25px",
            border: "1px solid #c8c8c8",
            color: "#000",
            fontSize: "16px",
            my: 1,
          }}
        >
          Update
        </Button>
        <Divider />
        <Typography
          variant="subtitle1"
          fontSize="16px"
          lineHeight="normal"
          fontWeight={500}
          py={1}
          sx={{ color: "#6A86ED" }}
        >
          We will send an OTP to your phone number when changing your password.
        </Typography>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};

export default Security;

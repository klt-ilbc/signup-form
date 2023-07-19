"use client";
import {
  Container,
  Box,
  Button,
  Dialog,
  FormControl,
  TextField,
  Stack,
  Typography,
  Autocomplete,
  DialogContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  Slide,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChevronRight } from "@mui/icons-material";
import CustomTextField from "../../components/CustomTextField";

import React, { useState } from "react";

const page = () => {
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [value, setValue] = useState();
  const [userRole, setUserRole] = useState(1);

  const toggleRole = (role) => {
    setUserRole(role);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCloseSignUpForm = () => {
    setOpenSignUpForm(false);
  };

  /* const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
*/
  const regions = [
    "Yangon",
    "Mandalay",
    "Magway",
    "Bago",
    "Sagaing",
    "Kayar",
    "Mon",
    "Shan",
    "Kachin",
    "Kayin",
    "Rakhaing",
  ];

  return (
    <>
      <Button onClick={() => setOpenSignUpForm(true)} variant="text">
        Sign up
      </Button>
      <Dialog
        open={openSignUpForm}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "30px",
            background: "#217FCE",
          },
        }}
        keepMounted
        onClose={handleCloseSignUpForm}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-description"
          fontSize="40px"
          fontWeight={600}
          color="#FFF"
          textAlign="center"
        >
          Sign Up
        </DialogTitle>
        <DialogContent
          sx={{
            overflow: "hidden",
            display: "flex",
            position: "relative",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            mb={2}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap={4}
              bgcolor="#62A8E2"
              border="1px solid #FFF"
              borderRadius="30px"
              position="relative"
              justifyContent={userRole === 1 ? "flex-start" : "flex-end"}
            >
              <Box
                bgcolor="transparent"
                onClick={() => toggleRole(1)}
                px={4}
                py={1}
                component="div"
                sx={{
                  bgcolor: userRole === 1 && "#FFF",
                  borderRadius: "30px",
                  color: userRole === 1 ? "#217FCE" : "#FFF",
                  margin: 0.5,
                }}
              >
                Learner
              </Box>
              <Box
                bgcolor="transparent"
                onClick={() => toggleRole(2)}
                px={4}
                py={1}
                component="div"
                sx={{
                  bgcolor: userRole === 2 && "#FFF",
                  borderRadius: "30px",
                  color: userRole === 2 ? "#217FCE" : "#FFF",
                  margin: 0.5,
                }}
              >
                Instructor
              </Box>
            </Box>
          </Stack>
          <Stack direction="row" mb={2} spacing={2}>
            <Box width="49%">
              <CustomTextField label="Username" />
            </Box>
            <Box width="49%">
              <Autocomplete
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                  "&& .MuiOutlinedInput-root": {
                    fontSize: "14px",
                    padding: "4px 8px",
                    color: "#FFF",
                    bgcolor: "#62A8E3",
                    border: "1px solid #FFF",
                    borderRadius: "30px",
                  },

                  "&& .MuiButtonBase-root": {
                    color: "#FFF",
                  },
                }}
                options={regions}
                noOptionsText="No Regions Found!"
                renderInput={(params) => (
                  <TextField
                    inputProps={{
                      style: {
                        height: 44,
                        fontSize: "14px",
                      },
                    }}
                    placeholder="Regions"
                    {...params}
                  />
                )}
              />
            </Box>
          </Stack>
          <Stack direction="row" mb={2} spacing={2}>
            <Box width="49%">
              <CustomTextField label="Password" />
            </Box>
            <Box width="49%">
              <CustomTextField label="Confirm Password" />
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box width="50%">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    bgcolor: "#62A8E2",
                    overflow: "hidden",
                    border: "1px solid #FFF",
                    borderRadius: "30px",
                    "& .MuiButtonBase-root": {
                      color: "#FFF",
                    },
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiInputBase-root > input": {
                      height: 11,
                      padding: "auto",
                      borderRadius: "30px",
                      color: "#FFF",
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box
              bgcolor="#62A8E2"
              height="44px"
              border="1px solid #FFF"
              borderRadius="30px"
              width="50"
              overflow="hidden"
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
                height="100%"
                paddingX={2}
              >
                <Typography fontSize="14px" color="white" fontWeight={400}>
                  Gender
                </Typography>
                <ChevronRight fontSize="medium" sx={{ color: "white" }} />
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  sx={{ marginLeft: "9px" }}
                >
                  <FormControlLabel
                    sx={{
                      color: "white",
                      "&& span > .MuiSvgIcon-root": {
                        width: "18px",
                        height: "18px",
                        color: "white",
                      },
                      "&& .MuiTypography-root": {
                        fontSize: "14px",
                      },
                    }}
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    sx={{
                      color: "white",
                      "&& span > .MuiSvgIcon-root": {
                        width: "18px",
                        height: "18px",
                        color: "white",
                      },
                      "&& .MuiTypography-root": {
                        fontSize: "14px",
                      },
                    }}
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", marginBottom: "14px" }}>
          <Button
            sx={{
              "& fieldset": {
                border: "none",
              },
              textTransform: "initial",
              fontSize: "15px",
              color: "#FFF",
              paddingX: 6,
              background: "#62A8E2",
              border: "1px solid #FFF",
              borderRadius: "30px",
            }}
          >
            Sign up
          </Button>
        </DialogActions>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={55}
          bgcolor="white"
        >
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
              textTransform: "initial",
              fontSize: "13px",
              color: "#217FCE",
            }}
          >
            Already have an account?
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default page;

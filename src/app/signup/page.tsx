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
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ChevronRight } from "@mui/icons-material";

import React, { useState } from "react";

const page = () => {
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCloseSignUpForm = () => {
    setOpenSignUpForm(false);
  };

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
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button onClick={() => setOpenSignUpForm(true)} variant="text">
          Sign up
        </Button>
      </Container>
      // signup dialog
      <Dialog open={openSignUpForm} fullWidth onClose={handleCloseSignUpForm}>
        <DialogContent
          sx={{
            overflow: "hidden",
            display: "flex",

            position: "relative",
            flexDirection: "column",
            bgcolor: "#217FCE",
            gap: 1,
            padding: { xs: "1rem", md: "1rem 2rem" },
          }}
        >
          <Typography
            fontSize="40px"
            fontWeight={600}
            color="#FFF"
            textAlign="center"
            my="1rem"
          >
            Sign Up
          </Typography>
          <Stack direction="row" mb={2} spacing={2}>
            <Box width="49%">
              <TextField
                fullWidth
                placeholder="Username"
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
            </Box>
            <Box width="49%" overflow="hidden">
              <Autocomplete
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                  "&& .MuiAutocomplete-root": {
                    bgcolor: "#FFF",
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
              <TextField
                fullWidth
                placeholder="Password"
                inputProps={{
                  style: {
                    padding: "11px 15px",
                    color: "#FFF",
                    fontSize: "14px",
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
            </Box>
            <Box width="49%">
              <TextField
                fullWidth
                placeholder="Confirm Password"
                inputProps={{
                  style: {
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
            </Box>
          </Stack>
          <Stack direction="row" mb={2} spacing={2}>
            <Box width="49%">
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
              width="49%"
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
      </Dialog>
    </>
  );
};

export default page;

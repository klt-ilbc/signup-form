"use client";
import React, { useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { CameraAltOutlined } from "@mui/icons-material";
import ProfileHook from "./ProfileHook";
import Image from "next/image";

const EditProfile = () => {
  const { handleImageUpload, profileImgUploaderRef, uploadedImage, imageFile } =
    ProfileHook();
  return (
    <Box component={motion.form}>
      <Typography fontSize="21px" fontWeight={700}>
        Profile Setting
      </Typography>
      <Box
        p={2}
        mt={2}
        display="flex"
        justifyItems="flex-start"
        alignItems="center"
        borderRadius="25px"
        border="1px solid #c8c8c8"
        gap={4}
        background="#F8F8F8"
        width="60%"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
          borderRadius="50%"
          bgcolor="#c8c8c8"
          sx={{ cursor: "pointer" }}
          component="div"
          overflow="hidden"
          onClick={() => profileImgUploaderRef.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            name="File[0]"
            ref={profileImgUploaderRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          {imageFile ? (
            <Image
              src={localStorage.getItem("profileImg") || imageFile}
              width={100}
              height={100}
              objectFit="cover"
              ref={uploadedImage}
              alt="profile"
            />
          ) : (
            <CameraAltOutlined fontSize="large" sx={{ color: "#FFF" }} />
          )}
        </Box>
        <Stack direction="column">
          <Typography fontSize="19px" fontWeight={700}>
            Your Avatar
          </Typography>
          <Typography fontSize="14px" fontWeight={300}>
            PNG or JPG no bigger than 1MB.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default EditProfile;

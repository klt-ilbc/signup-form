"use client";

/* import IconClock from "@/components/IconClock"; */
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

let dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tabLists = [
  { id: 1, label: "Free Course" },
  { id: 2, label: "Premium Course" },
  { id: 3, label: "Wishlists Course" },
];
let tabComponent = [1, 2, 3];

const page = () => {
  const [value, setValue] = useState("1");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Stack direction="column" bgcolor="#ddd" borderRadius={10} p={4} mb={4}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Box
              width="98px"
              height="98px"
              borderRadius="50%"
              bgcolor="#2E6EFF"
            ></Box>
            <Stack direction="column">
              <Typography variant="h5">Cillian Murphy</Typography>
              <Typography variant="span">learner</Typography>
            </Stack>
          </Stack>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              borderWidth: "2px",
              borderColor: "#C8C8C8",
            }}
            onClick={() => router.push("/profile/cillian/setting")}
          >
            Account Setting
          </Button>
        </Box>
        <Divider sx={{ my: 2, borderWidth: "1px", borderColor: "#818181" }} />

        <Stack
          direction="row"
          gap={3}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Button sx={{ color: "#454545" }}>Free Course</Button>
          <Button sx={{ color: "#454545" }}>Purchase Courses</Button>
          <Button sx={{ color: "#454545" }}>Wishlists Courses</Button>
        </Stack>
      </Stack>
      <Stack direction="column" bgcolor="#ddd" borderRadius={10} p={4}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={1}
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Image
              src="/google-classroom.png"
              width={38}
              height={32}
              alt="classroom"
              objectFit="cover"
            />
            <Typography
              variant="span"
              fontSize="14px"
              lineHeight={2}
              fontWeight="normal"
            >
              Classroom
            </Typography>
          </Stack>
        </Box>
        <Typography variant="h5" fontWeight="bold">
          Classroom
        </Typography>
        {dummyArr.map((card, index) => (
          <Stack direction="column" my={1} key={index}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              border={1}
              borderColor="#00000050"
              borderRadius={10}
              padding={2}
            >
              <Box borderRadius="25px" overflow="hidden">
                <Image
                  src="/classroom.png"
                  alt="classroom-photo"
                  width={165}
                  height={134}
                  objectFit="cover"
                />
              </Box>
              <Stack direction="column" flexGrow={1} paddingX={5}>
                <Typography fontSize={12} fontWeight="semi-bold">
                  Basic English Lesson
                </Typography>
                <Box display="flex" flexDirection="row" gap={2}>
                  <Stack direction="row" alignItems="center" gap={1}>
                    {/* <IconClock width={13} height={13} /> */}
                    <Typography fontSize="13px">25+ Lesson</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={1}>
                    {/* <IconClock width={13} height={13} /> */}
                    <Typography fontSize="13px">36 hr 40 min</Typography>
                  </Stack>
                </Box>
              </Stack>
              <Button variant="outlined" sx={{ borderRadius: "30px", px: 6 }}>
                join
              </Button>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default page;

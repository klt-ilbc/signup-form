"use client";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import {
  EditProfile,
  Security,
  Notification,
  Wishlists,
  Courses,
} from "../../../components/setting";
import {
  SettingsOutlined,
  ManageAccountsOutlined,
  CollectionsBookmarkOutlined,
  NotificationsOutlined,
  FavoriteBorderOutlined,
  CalendarMonthOutlined,
  AccountBalanceWalletOutlined,
  PaymentOutlined,
  AssignmentOutlined,
} from "@mui/icons-material";

const accountSettings = [
  {
    id: 1,
    title: "Edit Profile",
    icon: <SettingsOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 2,
    title: "Security",
    icon: <ManageAccountsOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 3,
    title: "Courses",
    icon: <CollectionsBookmarkOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 4,
    title: "Notifications",
    icon: <NotificationsOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 5,
    title: "Wishlists",
    icon: <FavoriteBorderOutlined sx={{ color: "#5475EB" }} />,
  },
];

const mySubscriptions = [
  {
    id: 1,
    title: "My Subscriptions",
    icon: <CalendarMonthOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 2,
    title: "Billing info",
    icon: <AccountBalanceWalletOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 3,
    title: "Invoice",
    icon: <PaymentOutlined sx={{ color: "#5475EB" }} />,
  },
  {
    id: 4,
    title: "Payment",
    icon: <AssignmentOutlined sx={{ color: "#5475EB" }} />,
  },
];
const displayComponents = (step) => {
  switch (step) {
    case 1:
      return <EditProfile />;
    case 2:
      return <Security />;
    case 3:
      return <Courses />;
    case 4:
      return <Notification />;
    case 5:
      return <Wishlists />;
    default:
      return null;
  }
};

const page = () => {
  const [steps, setSteps] = useState(1);
  return (
    <Container sx={{ paddingY: "4rem", bgcolor: "#DDD" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box
            display="flex"
            flexDirection="column"
            borderRadius={3}
            bgcolor="#FFF"
            overflow="hidden"
            position="relative"
            sx={{ boxShadow: 1, mx: "auto" }}
          >
            <Box bgcolor="#FCC" height="133px" width="100%"></Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={160}
              mt={-10}
            >
              <Avatar
                alt="Remy Sharp"
                src={localStorage.getItem("profileImg")}
                sx={{ width: 140, height: 140, border: "4px solid #fff" }}
              />
            </Box>
            <Stack direction="column" textAlign="center" mb={2}>
              <Typography fontSize="20px" fontWeight="700">
                Oggy
              </Typography>
              <Typography fontSize="16px" fontWeight="400">
                Learner
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box
            display="flex"
            flexDirection="column"
            padding={3}
            borderRadius={3}
            bgcolor="#FFF"
            sx={{ boxShadow: 1 }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                p={2}
                flex={0.3}
                border="1px solid #c8c8c8"
                borderRadius="25px"
              >
                <Typography fontSize="30px" fontWeight={500}>
                  4
                </Typography>
                <Typography fontSize="20px" fontWeight={800}>
                  Purchase All Course
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    textAlign: "left",
                    textDecoration: "underline",
                    textTransform: "initial",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                    "& :hover": {
                      color: "dodgerblue",
                    },
                  }}
                >
                  View All
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                p={2}
                flex={0.3}
                border="1px solid #c8c8c8"
                borderRadius="25px"
              >
                <Typography fontSize="30px" fontWeight={500}>
                  4
                </Typography>
                <Typography fontSize="20px" fontWeight={800}>
                  Purchase All Course
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    textAlign: "left",
                    textDecoration: "underline",
                    textTransform: "initial",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                    "& :hover": {
                      color: "dodgerblue",
                    },
                  }}
                >
                  View All
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                p={2}
                flex={0.3}
                border="1px solid #c8c8c8"
                borderRadius="25px"
              >
                <Typography fontSize="30px" fontWeight={500}>
                  4
                </Typography>
                <Typography fontSize="20px" fontWeight={800}>
                  Purchase All Course
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    textAlign: "left",
                    textDecoration: "underline",
                    textTransform: "initial",
                    fontSize: "16px",
                    fontWeight: 400,
                    cursor: "pointer",
                    "& :hover": {
                      color: "dodgerblue",
                    },
                  }}
                >
                  View All
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              flex={0.3}
              justifyContent="flex-start"
              alignItems="center"
              mt={3}
            >
              <Button
                variant="outlined"
                sx={{
                  textTransform: "initial",
                  color: "#454545",
                  padding: "11px 34px",
                  border: "1px solid #c8c8c8",
                  borderRadius: "41px",
                }}
              >
                Dashboard
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box borderRadius={3} bgcolor="#FFF" sx={{ boxShadow: 1 }}>
            <Box p={2} mb={4}>
              <Typography fontSize="21px" fontWeight={700} textAlign="left">
                Account Setting
              </Typography>
              <Divider sx={{ height: 0.5, borderColor: "#000", my: 2 }} />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap={1}
              >
                {accountSettings.map((accSet) => (
                  <Stack
                    sx={{ cursor: "pointer" }}
                    direction="row"
                    key={accSet.id}
                    gap={{ xs: 1.5, md: 3 }}
                    component="div"
                    onClick={() => setSteps(accSet.id)}
                  >
                    {accSet.icon}
                    <Typography
                      fontSize="18px"
                      color={steps === accSet.id && "primary"}
                      fontWeight={400}
                      sx={{
                        "&:hover": {
                          color: "#c8c8c8",
                        },
                        transition: ".2s all ease-in",
                      }}
                    >
                      {accSet.title}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box p={2} mb={4}>
              <Typography fontSize="21px" fontWeight={700} textAlign="left">
                Subscription
              </Typography>
              <Divider sx={{ height: 0.5, borderColor: "#000", my: 2 }} />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap={1}
              >
                {mySubscriptions.map((accSub) => (
                  <Stack
                    sx={{ cursor: "pointer" }}
                    direction="row"
                    key={accSub.id}
                    gap={{ xs: 1.5, md: 3 }}
                  >
                    {accSub.icon}
                    <Typography fontSize="18px" fontWeight={400}>
                      {accSub.title}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Box
              pb={4}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Button
                sx={{
                  borderRadius: "40px",
                  padding: "11px 34px",
                  border: " 1px solid #C8C8C8",
                  textTransform: "initial",
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box
            borderRadius={3}
            bgcolor="#FFF"
            overflow="hidden"
            sx={{ boxShadow: 1, height: "636px" }}
          >
            <Stack direction="column" m={4}>
              {displayComponents(steps)}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default page;

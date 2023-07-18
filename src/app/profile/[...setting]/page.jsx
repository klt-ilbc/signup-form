import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const page = () => {
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
            sx={{ boxShadow: 1, mx: "auto", height: "250px" }}
          >
            <Box bgcolor="#FCC" height="40%" width="100%"></Box>
            <Box
              position="absolute"
              borderRadius="50%"
              overflow="hidden"
              border="4px solid #FFF"
              sx={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-70%)",
              }}
            >
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width="140"
                height="140"
                objectFit="cover"
              />
            </Box>
            <Stack direction="column">
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
            p={4}
            borderRadius={3}
            bgcolor="#FFF"
            sx={{ boxShadow: 1 }}
          ></Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            p={4}
            borderRadius={3}
            bgcolor="#FFF"
            sx={{ boxShadow: 1 }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default page;

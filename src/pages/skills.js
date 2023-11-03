import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Lottie from "lottie-react";
import animationData from "/public/assets/skillsanimation";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

export default function Skills() {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Kenneth website skills page</title>
        <meta name="skills page" content="skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Typography variant="h3" className={styles.h3}>
          My Skills
          <hr />
        </Typography>
      </Box>
      <Box
        sx={{
          "@media (max-width:803px)": {
            marginTop: "25px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography variant="h5" sx={{ color: "navy" }}>
              Languages
            </Typography>
            HTML CSS JavaScript
            <Typography variant="h5" sx={{ color: "navy", paddingTop: "5px" }}>
              Libraries
            </Typography>
            React Mongoose
            <Typography variant="h5" sx={{ color: "navy", paddingTop: "5px" }}>
              Frameworks
            </Typography>
            Express Next.js
            <Typography variant="h5" sx={{ color: "navy", paddingTop: "5px" }}>
              Databases
            </Typography>
            MongoDB
            <Box sx={{ display: "flex" }}>
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/HTML.svg"
              />
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/CSS.svg"
              />
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/JavaScript.svg"
              />
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/React-Dark.svg"
              />
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/MongoDB.svg"
              />
              <CardMedia
                sx={{ width: "32px", height: "32px", margin: "2px" }}
                component="img"
                image="https://raw.githubusercontent.com/kchilds1/skill-icons/main/icons/NextJS-Dark.svg"
              />
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            width: 500,
          }}
        >
          <Lottie loop={false} animationData={animationData} />
        </Box>
      </Box>
    </Layout>
  );
}

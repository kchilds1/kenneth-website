import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";

import {
  Toolbar,
  Typography,
  Box,
  Button,
  CardMedia,
  Container,
} from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Kenneth Website</title>
        <meta name="website" content="website for project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                padding: "15px",
              }}
            >
              <Typography variant="h3" className={styles.h3}>
                Experienced Web Developer and IT Analyst.
              </Typography>
              <Typography variant="h6" className={styles.h6}>
                I am a highly motivated web developer with a passion for
                creating responsive and visually appealing user interfaces. With
                experience in HTML, CSS, JavaScript, and a variety of
                frameworks. I'm dedicated to delivering exceptional digital
                experiences.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <CardMedia
                component="img"
                image="Profile_picture.jpg"
                style={{ width: "100%", borderRadius: "50%" }}
                alt="professional photo"
              />
              <Typography variant="h5" className={styles.h5}>
                Kenneth Childs
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button className={styles.resumeButton}>RESUME</Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

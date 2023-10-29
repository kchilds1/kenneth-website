import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";

import {
  Typography,
  Box,
  Button,
  CardMedia,
} from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () =>{
    window.open("/resume.pdf","_blank");
  };

  return (
    
    <Layout>
      <Head>
        <title>Kenneth website Home page</title>
        <meta name="kenneth website home page" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Box>
        
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
                Web Developer and IT Analyst.
              </Typography>
              <Box className={styles.text}>
                I am a highly motivated web developer with a passion for
                creating responsive and visually appealing user interfaces. With
                experience in HTML, CSS, JavaScript, and a variety of
                frameworks. I'm dedicated to delivering exceptional digital
                experiences.
              </Box>
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
              <Typography variant="h5" className={styles.text}>
                Kenneth Childs
              </Typography>
            </Box>
          </Box>
         
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            
              <Button onClick={handleButtonClick}className={styles.resumeButton}>RESUME</Button>
              
          </Box>
            
      </Box>
    </Layout>
  );
}

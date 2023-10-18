import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

import { AppBar, Toolbar, Typography, Box, Button, CardMedia } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenneth Website</title>
        <meta name="website" content="website for project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Toolbar sx={{padding:"0.1875rem"}}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <CardMedia
            component="img"
              image="developer_logo.jpeg"
              style={{ borderRadius: "50%", width: "6.25rem", maxWidth:"100%", height:"auto" }}
              alt="logo"
            />
          </Typography>
          <Button
            sx={{
              marginRight: "0.125rem",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "3.125rem",
              padding: "0.3125rem",
            }}
          >
            HOME
          </Button>
          <Button
            sx={{
              marginRight: "0.125rem",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "3.125rem",
              padding: "0.3125rem",
            }}
          >
            ABOUT
          </Button>
          <Button
            sx={{
              marginRight: "0.125rem",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "3.125rem",
              padding: "0.3125rem",
            }}
          >
            CONTACT
          </Button>
          <Button
            sx={{
              marginRight: "-0.125rem",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "3.125rem",
              padding: "0.3125rem",
            }}
          >
            SKILLS
          </Button>
        </Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.625rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column",color:"white",padding:"15px" }}>
            <Typography variant="h3" className={styles.text}>
              Experienced 
              <br/> Web Developer
              <br/>and IT Analyst.
            </Typography>
            <Typography variant="h6">
              I am a highly motivated web developer with a passion for creating
              responsive and visually appealing user interfaces. With experience
              in HTML, CSS, JavaScript, and a variety of frameworks. I'm
              dedicated to delivering exceptional digital experiences.
            </Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center",color:"white"}}>
          <CardMedia component="img"image="Profile_picture.jpg" style={{ width: "25rem", borderRadius: "50%" }} alt="professional photo" />
          <Typography variant="h6">Kenneth Childs</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.625rem",
              padding: "0.625rem",
              fontSize: "1.25rem",
              font: "bold",
            }}
          >
            RESUME
          </Button>
        </Box>
      </Box>
    </>
  );
}

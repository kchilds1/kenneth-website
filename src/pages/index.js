import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

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
    <>
      <Head>
        <title>Kenneth Website</title>
        <meta name="website" content="website for project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Toolbar sx={{ padding: "3px" }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <CardMedia
              component="img"
              image="developer_logo.jpeg"        
              style={{
              borderRadius: "100%",
              width: "100px",
              maxWidth: "100%",
              height: "auto"
            }}
              
              alt="logo"
            />
          </Typography>
          <Button className={styles.button} onClick={() => router.push(`/`)}>HOME</Button>
          <Button className={styles.button} onClick={() => router.push(`/about/`)}>ABOUT</Button>
          <Button className={styles.button} onClick={() => router.push(`/contacts/`)}>CONTACT</Button>
          <Button className={styles.button} onClick={() => router.push(`/skills/`)}>SKILLS</Button>
        </Toolbar>
        
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
            <Typography variant="h3">
              Experienced Web Developer and IT Analyst.
            </Typography>
            <Typography variant="h6">
              I am a highly motivated web developer with a passion for creating
              responsive and visually appealing user interfaces. With experience
              in HTML, CSS, JavaScript, and a variety of frameworks. I'm
              dedicated to delivering exceptional digital experiences.
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
            <Typography variant="h5">Kenneth Childs</Typography>
          </Box>
        </Box>
         <Box sx={{ display: "flex", justifyContent: "center" }}> 
          <Button sx={{ background:"linear-gradient(170deg, deepskyblue, navy 80%)",color: "white"}}>RESUME</Button>
         </Box> 
        </Container>
      </Box>
      <Box sx={{
          
           
           fontFamily: "'Roboto','Helvetica','Arial',sans-serif;",
            display: "flex",
           justifyContent: "center",
            marginTop: "130px",
            padding:"40px",
           color: "white",
            background: "linear-gradient(170deg, deepskyblue, navy 80%)"
       }}>
       <Typography variant="h6">

       Copyright © 2023 Kenneth Childs Companies . All Rights Reserved.
       </Typography>
       </Box>
    </>
  );
}

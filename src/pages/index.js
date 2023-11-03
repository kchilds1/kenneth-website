import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { motion } from "framer-motion";

import { Typography, Box, Button, CardMedia } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <Layout>
      <Head>
        <title>Kenneth website Home page</title>
        <meta name="kenneth website home page" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5556rem",
          }}
        >
          <motion.div
            className="home-animation"
            animate={{
              y: "0rem",
              opacity: 1,
            }}
            initial={{
              y: "8rem",
              opacity: 0.1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <Typography variant="h3" className={styles.h3}>
              Web Developer and IT Analyst
            </Typography>
            <Box className={styles.text}>
              I am a highly motivated web developer with a passion for creating
              responsive and visually appealing user interfaces. With experience
              in HTML, CSS, JavaScript, and a variety of frameworks. I'm
              dedicated to delivering exceptional digital experiences.
            </Box>
          </motion.div>
          <motion.div
            className="img-div"
            animate={{
              y: "0rem",
              opacity: 1,
            }}
            initial={{
              y: "8rem",
              opacity: 0.1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <CardMedia
              component="img"
              image="Profile_picture.jpg"
              style={{ width: "100%", borderRadius: "50%" }}
              alt="professional photo"
            />
            <Typography
              variant="h5"
              className={`${styles.text} ${styles.imageName}`}
            >
              Kenneth Childs
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleButtonClick}
            sx={{
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "1.3889rem",
              fontSize: "1.1111rem",
              fontWeight: "bold",
              paddingBottom: "0.2778rem",
              marginBottom: "0.5556rem",
            }}
          >
            RESUME
          </Button>
        </Box>
      </main>
    </Layout>
  );
}

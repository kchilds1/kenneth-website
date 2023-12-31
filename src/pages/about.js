import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout/layout";
import Lottie from "lottie-react";
import animationData from "/public/assets/sitatcomputer";
import { useRef } from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const webDevAnimationRef = useRef();
  return (
    <Layout>
      <Head>
        <title>Kenneth website about page</title>
        <meta name="about page" content="about me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <motion.div
          animate={{
            // x:"0rem",
            opacity: 1,
          }}
          initial={{
            // x:"-8rem",
            opacity: 0.1,
          }}
          transition={{
            duration: 3,
          }}
        >
          <Typography variant="h3" className={styles.h3}>
            About Me
          </Typography>
        </motion.div>
        <hr />
        <motion.div
          animate={{
            x: "0rem",
            opacity: 1,
          }}
          initial={{
            x: "8rem",
            opacity: 0.1,
          }}
          transition={{
            duration: 2,
          }}
        >
          <Typography variant="h4" className={styles.h4}>
            Web Developer
          </Typography>
          <Box className={styles.text}>
            Welcome to my corner of the web! I am Kenneth Childs Jr., a highly
            motivated and experienced Web Developer with a boundless passion for
            crafting responsive and visually captivating user interfaces. My
            journey in web development has equipped me with a versatile skill
            set, making me an ideal choice for tackling intricate and ambitious
            web projects. Technical Excellence: My expertise lies in a
            comprehensive array of programming languages and technologies,
            ensuring I am well-prepared for the demands of modern web
            development. I shine in the mastery of core web technologies like
            HTML, CSS, and JavaScript, transforming concepts into functional and
            alluring web experiences. Front-End Ingenuity: My commitment to
            staying on the cutting edge of web development is evident in my
            proficiency with popular front-end frameworks, particularly React.
            With these tools, I breathe life into websites, infusing them with
            dynamism and interactivity that captivates users. Join me on this
            journey as we explore the limitless possibilities of web
            development. Whether you are here to appreciate my work or
            collaborate on exciting projects, I am excited to share my passion
            for creating exceptional web experiences with you. Let us turn your
            digital dreams into reality together!
            <br />
          </Box>
        </motion.div>
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <motion.div
            animate={{
              x: "0rem",
              opacity: 1,
            }}
            initial={{
              x: "-8rem",
              opacity: 0.1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                paddingTop: "0.5556rem",
              }}
            >
              Personal Information
              <Box className={styles.text}>
                <p>Name: Kenneth Childs Jr</p>
                <p>Address: Tulsa, OK</p>
                <p>Email: Kenneth.Childs20@gmail.com</p>
              </Box>
            </Typography>
          </motion.div>
          <Box
            sx={{
              width: "8.3333rem",
            }}
          >
            <Lottie
              lottieRef={webDevAnimationRef}
              animationData={animationData}
            />
          </Box>
        </Box>
      </main>
    </Layout>
  );
}

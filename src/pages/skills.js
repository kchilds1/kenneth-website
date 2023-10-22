import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
 import Lottie, {LottieRefCurrentProps} from "lottie-react";
 import animationData from "@/assets/skillsAnimation";
import { useRef } from "react";

import {
  Toolbar,
  Typography,
  Box,
  Button,
  CardMedia,
  Container,
} from "@mui/material";

export default function Skills(){
    const router = useRouter();
    const skillsPageAnimationRef = useRef<LottieRefCurrentProps>(null);
    
    return(
        <Layout>
             <Head>
        <title>Kenneth skills</title>
        <meta name="website skills" content="website skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
      <Typography variant="h3" className={styles.h3}>
          My Skills
          <hr />
        </Typography>
        </Box>
            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
            <Box sx={{width:500}}>
            <Lottie onComplete={() =>{
                   skillsPageAnimationRef?.goToAndPlay(45, true)
            }}LottieRef={skillsPageAnimationRef} loop={false} animationData={animationData}/>   
            </Box>
            </Box>
        </Layout>
    )
}
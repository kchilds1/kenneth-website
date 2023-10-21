import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
 import Lottie from "lottie-react";
 import animationData from "@/assets/skillsAnimation";


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
    
    return(
        <Layout>
             <Head>
        <title>Kenneth skills</title>
        <meta name="website skills" content="website skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

            <Box sx={{display:"flex", justifyContent:"flex-end"}}>
            <Box sx={{width:500}}>
            <Lottie animationData={animationData}/>   
            </Box>
            </Box>
        </Layout>
    )
}
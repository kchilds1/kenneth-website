import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Lottie from "lottie-react";
import animationData from "@/assets/sitAtComputer";
import {useRef} from "react";

import {
  Toolbar,
  Typography,
  Box,
  Button,
  CardMedia,
  Container,
} from "@mui/material";

export default function Skills(){
    const webDevAnimationRef = useRef();
    return(
        <Layout>
          This is my skills page
        <Box sx={{width: 100, display:"flex"}}>

          <Lottie lottieRef={webDevAnimationRef} animationData={animationData}/>
        </Box>
        </Layout>
    )
}
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import Lottie from "lottie-react";
import animationData from "@/assets/sitAtComputer";

import {
  Toolbar,
  Typography,
  Box,
  Button,
  CardMedia,
  Container,
} from "@mui/material";
export default function Projects(){
    return(
        <Layout>
           <Head>
        <title>Kenneth projects</title>
        <meta name="website projects" content="website projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        This is my projects page.
        
        
    
        </Layout>
    )
}
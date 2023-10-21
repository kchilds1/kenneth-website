import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from "next/router";
import {
    Box,
    Typography,
  } from "@mui/material";

  export default function Footer(){
    const router = useRouter();

    return(
      
        <Box className={styles.foot}>
        <Typography className={styles.text}>
            <Box sx={{display:"flex", justifyContent:"center"}}>
             Social Media
            </Box>
            <Box 
            sx={{display:"flex", justifyContent:"center",gap:"14px",paddingBottom:"13px", alignItems:"center"}}>
            <a href="https://github.com/kchilds1" target="_blank"><GitHubIcon sx={{color:"white"}}/></a>
            <a href="https://www.linkedin.com/in/kenneth-childs" target="_blank" ><LinkedInIcon sx={{color:"white"}}/></a>
            </Box>
            
          <Box sx={{fontSize:"12px"}}>

          Copyright © 2023 Kenneth Childs. All Rights Reserved.
          </Box>
            
        </Typography>
        </Box>
        
    )
  }
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import {
    Box,
    Typography,
  } from "@mui/material";

  export default function Footer(){
    return(
        <>
        <Box className={styles.foot}>
        <Typography variant="h6" className={styles.h6}>
          Copyright © 2023 Kenneth Childs Companies . All Rights Reserved.
        </Typography>
      </Box>
        </>
    )
  }
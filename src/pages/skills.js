 import Head from "next/head";
 import React, { useRef } from "react";
 import styles from "../styles/Home.module.css";
 import { useRouter } from "next/router";
 import Layout from "@/components/Layout/layout";
  import Lottie from "lottie-react";
  
  import animationData from "@/assets/skillsAnimation"
 import {
   Toolbar,
   Typography,
   Box,
   Button,
   CardMedia,
   Container,
 } from "@mui/material"
 export default function Skills(){
     const router = useRouter();
     return(
         <Layout>
       <Box>
       <Typography variant="h3" className={styles.h3}>
           My Skills
            <hr /> 
         </Typography>
         </Box>
             <Box sx={{display:"flex", justifyContent:"flex-end"}}>
             <Box sx={{width:500}}>
              <Lottie loop={false} animationData={animationData}/> 
             </Box>
             </Box>
         </Layout>
     );
 }
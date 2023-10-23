 import Head from "next/head";
 import React from "react";
 import styles from "../styles/Home.module.css";
 import { useRouter } from "next/router";
 import Layout from "@/components/Layout/layout";
 import Lottie from "lottie-react";
 import animationData from "@/assets/sitAtComputer"
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
         This is my projects page.              
         </Layout>
     )
 }
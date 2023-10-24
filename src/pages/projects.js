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
  const [projectListing, setProjectListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function fetchListings() {
    setLoading(true);
    const response = await fetch("/api/projects");
    const data = await response.json();
    console.log(data)
    setProjectListing(data.projectListing);
    setLoading(false);
  }

  useEffect(()=>{
    fetchListings();
  }, []);

     return(
         <Layout>         
         This is my projects page.              
         </Layout>
     )
 }
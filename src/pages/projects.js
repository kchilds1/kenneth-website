 import Head from "next/head";
 import { React, useState, useEffect } from "react";
 import styles from "../styles/Home.module.css";
 import { useRouter } from "next/router";
 import Layout from "@/components/Layout/layout";
 import Lottie from "lottie-react";
 import animationData from "@/assets/sitAtComputer"
 import {
   
   Typography,
   Box,
   Grid,
   Card,
   Button,
   ButtonBase,
   CardMedia, 
   CardContent,
 } from "@mui/material";


 export default function Projects(){
  const [projectListing, setProjectListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function fetchListings() {
    setLoading(true);
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjectListing(data.projectListing);
    setLoading(false);
  }

  useEffect(()=>{
    fetchListings();
  }, []);

   
console.log(projectListing)
     return(
         <Layout>         
          <Grid container spacing = {3}>
            {projectListing.map((listings) =>(
              <Grid item key={listings._id} xs={12} sm={6} md={4}>
              <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={listings.img}
                    alt="logo"
                  />
                  <CardContent>
                  <Typography variant="h4">{listings.projectName}</Typography>
                  </CardContent>
                  <Button onClick={()=> router.push(listings.codeLink)}>
                    CODE
                  </Button>
                  <Button onClick={()=> router.push(listings.projectLink)}>
                    PROJECT
                  </Button>
                  </Card>  
              </Grid>
            
            ))}
            </Grid>           
         </Layout>
     );
 }
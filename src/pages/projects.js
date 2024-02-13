import Head from "next/head";
import { React, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import {
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Paper,
  CardMedia,
  CircularProgress,
  CardContent,
} from "@mui/material";

export default function Projects() {
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

  useEffect(() => {
    fetchListings();
  }, []);

  const handleOpenInNewTab = (url) => {
    if(!url){
      alert("There is no code for this project")
    } else {

      window.open(url, "_blank");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Kenneth website projects page</title>
        <meta name="projects page" content="projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && (
        <Box display={"flex"} justifyContent={"center"} color={"white"}>
          <CircularProgress />
        </Box>
      )}
      <Grid
        container
        spacing={3}
        style={{ height: "100%", display: "flex", padding: "0.5556rem" }}
      >
        {projectListing.map((listings) => (
          <Grid item key={listings._id} xs={12} sm={6} md={4}>
            <Paper elevation={3}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: "10.5556rem",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={listings.img}
                  alt="logo"
                />
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h4">{listings.projectName}</Typography>
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0.2222rem",
                    gap: "0.2222rem",
                  }}
                >
                  <Button
                    onClick={() => handleOpenInNewTab(listings.codeLink)}
                    sx={{
                      marginRight: "0.2222rem",
                      background:
                        "linear-gradient(170deg, deepskyblue, navy 80%)",
                      color: "white",
                      borderRadius: "0.8333rem",
                      padding: "0.2778rem",
                    }}
                  >
                    CODE
                  </Button>
                  <Button
                    onClick={() => handleOpenInNewTab(listings.projectLink)}
                    sx={{
                      marginRight: "0.2222rem",
                      background:
                        "linear-gradient(170deg, deepskyblue, navy 80%)",
                      color: "white",
                      borderRadius: "0.8333rem",
                      padding: "0.2778rem",
                    }}
                  >
                    PROJECT
                  </Button>
                </Box>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

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
    window.open(url, "_blank");
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
      <Grid container spacing={3}>
        {projectListing.map((listings) => (
          <Grid item key={listings._id} xs={12} sm={6} md={4}>
            <Paper elevation={3}>
              <Card>
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
                    margin: "4px",
                    gap: "4px",
                  }}
                >
                  <Button
                    onClick={() => handleOpenInNewTab(listings.codeLink)}
                    className={styles.button}
                  >
                    CODE
                  </Button>
                  <Button
                    onClick={() => handleOpenInNewTab(listings.projectLink)}
                    className={styles.button}
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
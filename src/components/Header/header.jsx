import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { Toolbar, Typography, Button, CardMedia } from "@mui/material";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <Toolbar sx={{ padding: "3px" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            image="developer_logo.jpeg"
            style={{
              borderRadius: "100%",
              width: "100px",
              maxWidth: "100%",
              height: "auto",
            }}
            alt="logo"
          />
        </Typography>
        <a href="/">
          <Button
            sx={{
              
              "@media (max-width:375px)": {
                width:"4%",
                fontSize:"10px",
                padding:"5px",
              },
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            HOME
          </Button>
        </a>
        <a href="/about">
          <Button
            sx={{
              "@media (max-width:375px)": {
                width:"4%",
                fontSize:"10px",
                padding:"5px",
                
              },
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            ABOUT
          </Button>
        </a>
        <a href="/projects">
          <Button
            sx={{
              "@media (max-width:375px)": {
                width:"4%",
                fontSize:"10px",
                padding:"5px",
              },
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            PROJECTS
          </Button>
        </a>
        <a href="/skills">
          <Button
            sx={{
              "@media (max-width:375px)": {
                width:"4%",
                fontSize:"10px",
                padding:"5px",
              },
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            SKILLS
          </Button>
        </a>
        <a href="/contacts">
          <Button
            sx={{
              "@media (max-width:375px)": {
                width:"4%",
                fontSize:"10px",
                padding:"5px",
              },
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            CONTACT
          </Button>
        </a>
      </Toolbar>
    </>
  );
}

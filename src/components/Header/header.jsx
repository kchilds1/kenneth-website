import React from "react";
import { useRouter } from "next/router";
import { Toolbar, Typography, Button, CardMedia } from "@mui/material";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Toolbar sx={{ padding: "3px", position: "sticky", top: "0" }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            image="developer_logo.jpeg"
            style={{
              borderRadius: "100%",
              width: "5.5556rem",
              maxWidth: "100%",
            }}
            alt="logo"
          />
        </Typography>
        <a href="/">
          <Button
            sx={{
              width: "4em",
              fontSize: ".65em",
              padding: "0.2778em",
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.8333em",
              padding: "0.4778em",
              marginRight: "2px",
            }}
          >
            HOME
          </Button>
        </a>
        <a href="/about">
          <Button
            sx={{
              width: "4em",
              fontSize: ".65em",
              padding: "0.2778em",
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.8333em",
              padding: "0.4778em",
              marginRight: "2px",
            }}
          >
            ABOUT
          </Button>
        </a>
        <a href="/projects">
          <Button
            sx={{
              width: "4em",
              fontSize: ".65em",
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.8333em",
              padding: "0.4778em",
              marginRight: "2px",
            }}
          >
            PROJECTS
          </Button>
        </a>
        <a href="/skills">
          <Button
            sx={{
              width: "4em",
              fontSize: ".65em",
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.8333em",
              padding: "0.4778em",
              marginRight: "2px",
            }}
          >
            SKILLS
          </Button>
        </a>
        <a href="/contacts">
          <Button
            sx={{
              width: "4em",
              fontSize: ".65em",
              marginRight: "2px",
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "0.8333em",
              padding: "0.4778em",
              marginRight: "2px",
            }}
          >
            CONTACT
          </Button>
        </a>
      </Toolbar>
    </>
  );
}

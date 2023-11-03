import React from "react";
import styles from "@/styles/Home.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";

function Footer() {
  const router = useRouter();

  return (
    <div className={styles.footerWrapper}>
      <Box className={styles.foot}>
        <Typography className={styles.text}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            Social Media
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "0.7778rem",
              paddingBottom: "0.7222rem",
              alignItems: "center",
            }}
          >
            <GitHubIcon
              onClick={() =>
                window.open("https://github.com/kchilds1", "_blank")
              }
              sx={{ color: "white" }}
            />
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kenneth-childs",
                  "_blank"
                )
              }
              sx={{ color: "white" }}
            />
          </Box>
          <Box sx={{ fontSize: "0.6667rem" }}>
            Copyright © 2023 Kenneth Childs. All Rights Reserved.
          </Box>
        </Typography>
      </Box>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

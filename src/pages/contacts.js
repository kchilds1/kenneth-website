import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";

import {
  Toolbar,
  Typography,
  Box,
  Button,
  CardMedia,
  Container,
} from "@mui/material";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Kenneth Contacts</title>
        <meta name="website contacts" content="website contacts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      This is my contacts page
    </Layout>
  );
}

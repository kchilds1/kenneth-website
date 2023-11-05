import Head from "next/head";
import { React, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { TextField, Typography, Box, Button } from "@mui/material";

export default function Contacts() {
  const router = useRouter();

  const [contactName, setContactName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!contactName || !email) {
      alert("Please fill in required fields.");
      return;
    }

    setButtonDisabled(true);

    const infoPayload = {
      company,
      contactName,
      email,
      phoneNumber,
      question,
    };

    console.log("Payload: ", infoPayload);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(infoPayload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Data sent successfully!");
        setSubmitted(true);
      } else {
        throw new Error("Failed to send contact information");
        console.log("Failed to send contact information.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setButtonDisabled(false);
    }
  }

  const renderFormOrThankYou = () => {
    if (submitted) {
      return (
        <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
          Thank you for your submission!
        </Typography>
      );
    } else {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              background: "linear-gradient(170deg, deepskyblue, navy 80%)",
              color: "white",
              borderRadius: "1.3889rem",
              fontSize: ".85em",
              padding: "0.5556rem",
              marginBottom: "0.5556rem",
            }}
            variant="contained"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            SUBMIT
          </Button>
        </Box>
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Kenneth website contacts</title>
        <meta name="contacts page" content="contacts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Typography
          variant="h3"
          sx={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          CONTACT
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          Question, Suggestion, or Complaint? Let Me Know.
        </Typography>
        {submitted ? (
          renderFormOrThankYou()
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.3556rem",
            }}
          >
            <TextField
              label="Your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required={true}
              className={styles.input}
            />
            <TextField
              label="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={styles.input}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              className={styles.input}
            />
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
            />
            <Box>
              <TextField
                fullWidth
                label="Comments/Questions"
                multiline
                rows={3}
                required={true}
                columns={6}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={styles.input}
              />
            </Box>
            {renderFormOrThankYou()}
          </Box>
        )}
      </main>
    </Layout>
  );
}

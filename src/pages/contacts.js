 import Head from "next/head";
 import { React, useState } from "react";
 import styles from "../styles/Home.module.css";
 import { useRouter } from "next/router";
 import Layout from "@/components/Layout/layout";
 import {
   TextField,
   Typography,
   Box,
   Button,
 } from "@mui/material";


 export default function Contacts() {

  const router = useRouter();
  
  const [contactName, setContactName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event){
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
  };

  console.log("Payload: ", infoPayload);
  // SEND DATA OVER THE SERVER
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
      // Set submitted to true to display the thank you message
      setSubmitted(true);
    } else {
      console.log("Failed to send data to the server.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Enable the button after the form submission is complete
    setButtonDisabled(false);
  }
};

// Conditionally render the thank you message
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
            color: "white",
            background: "linear-gradient(170deg, deepskyblue, navy 80%)",
            margin: "4px",
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
       <Box sx={{marginBottom:"20px"}}>
          <Typography
            variant="h3"
            sx={{ display: "flex", justifyContent: "center" ,color:"white" }}
          >
            CONTACT
          </Typography >
          <Typography sx={{ display: "flex", justifyContent: "center" ,color:"white" }}>
          Question, Suggestion, or Complaint? Let Me Know.
          </Typography>
          {submitted ? ( // Render thank you message if submitted is true
          renderFormOrThankYou()
        ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap:"10px",
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
              
              <Box >
                <TextField
                fullWidth
                  label="Comments/Questions"
                  multiline
                  rows={3}
                  columns={6}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className={styles.input}
                />
              </Box>
            {renderFormOrThankYou()}
          </Box>
        )}
      </Box>
    </Layout>
  );
}







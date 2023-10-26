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
  

  async function handleSubmit(event){
    event.preventDefault();

  const infoPayload = {
    company,
    contactName,
    email,
    phoneNumber,
  };

  console.log("Payload: ", infoPayload);
  // SEND DATA OVER THE SERVER
  try {
    const response = await fetch("/api/companies", {
      method: "POST",
      body: JSON.stringify(infoPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Data sent successfully!");
    } else {
      console.log("Failed to send data to the server.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}



   return (
     <Layout>
       <Box sx={{marginBottom:"20px"}}>
          <Typography
            variant="h2"
            sx={{ display: "flex", justifyContent: "center", fontFamily:"Impact, fantasy" }}
          >
            CONTACT US
          </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap:"5px",
              }}
            >
              <TextField
                label="Your Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
               
              />
              <TextField
                label="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                
              />
              
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                
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
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                color: "white",
                background: "linear-gradient(170deg, deepskyblue, navy 80%)",margin:"4px" 
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
            </Box>
            </Box>
        </Box>
     </Layout>
     
   );
 }

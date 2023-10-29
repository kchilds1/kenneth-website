 import Head from "next/head";
 import React from "react";
 import styles from "@/styles/Home.module.css";
 import { useRouter } from "next/router"
 import {
   Toolbar,
   Typography,
   Button,
   CardMedia,
 } from "@mui/material"
 export default function Header(){
     const router = useRouter()
     return(
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
           
           <Button className={styles.button} onClick={() => router.push(`/`)}>
             HOME
           </Button>
           
           <Button
             className={styles.button}
             onClick={() => router.push(`/about/`)}
           >
             ABOUT
           </Button>
          
           <Button
             className={styles.button}
             onClick={() => router.push(`/projects/`)}
           >
             PROJECTS
           </Button>
           <Button
             className={styles.button}
             onClick={() => router.push(`/skills/`)}
           >
             SKILLS
           </Button>
           <Button
             className={styles.button}
             onClick={() => router.push(`/contacts/`)}
           >
             CONTACT
           </Button>
         </Toolbar>
         
         </> 
     )
 }
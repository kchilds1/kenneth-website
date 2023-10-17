import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";


import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenneth Website</title>
        <meta name="website" content="website for project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           <img src="developer_logo.jpeg" style={{borderRadius:"50%", width:"100px"}} />
          </Typography>
          <Button sx={{marginRight:"2px", background:"linear-gradient(170deg, deepskyblue, navy 80%)",color:"white", borderRadius:"50%",padding:"5px"}}>HOME</Button>
          <Button sx={{marginRight:"2px", background:"linear-gradient(170deg, deepskyblue, navy 80%)",color:"white", borderRadius:"50%",padding:"5px"}}>ABOUT</Button>
          <Button sx={{marginRight:"2px", background:"linear-gradient(170deg, deepskyblue, navy 80%)",color:"white", borderRadius:"50%",padding:"5px"}}>CONTACT</Button>
          <Button sx={{marginRight:"-2px", background:"linear-gradient(170deg, deepskyblue, navy 80%)",color:"white", borderRadius:"50%",padding:"5px"}}>SKILLS</Button>
        </Toolbar>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"20%"}}>
        <Typography variant="h2">Hello,</Typography>
        <img src="Profile_picture.jpg" style={{width:"20%",borderRadius:"50%"}}/>
        </Box>
        <Typography variant="h2"sx={{paddingLeft:"20%",marginTop:"-4%"}}>Welcome to my site!</Typography> 
        <Box sx={{display:"flex", justifyContent:"center", margin:"5%"}}>

        <Button sx={{ background:"linear-gradient(170deg, deepskyblue, navy 80%)",color:"white", borderRadius:"10%",padding:"10px",fontSize:"20px",font:"bold"}}>RESUME</Button>
        </Box>
        
        

        
      </Box>
    </>
  );
}

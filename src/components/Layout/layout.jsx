import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useRouter } from "next/router";

import {
    
    Container,
  } from "@mui/material";

export default function Layout({ children }){
    const router = useRouter();

    return(
        <>
        
            <Header/>
            <Container>
            {children}
            </Container>
              <Footer/>  
        
        </>
    );
};
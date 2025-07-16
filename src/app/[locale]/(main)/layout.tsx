'use client'
import "../globals.css";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/NavBar";
import AppBar from "@/components/main/AppBar";
import Container from '@mui/material/Container';
import * as React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("Drawer opened");
    setDrawerOpen(true)
  };
  const handleClose = () => {
    console.log("Drawer closed");
    setDrawerOpen(false)
  };

  console.log("Main rendered");
  return (
    <>
      <AppBar drawerClick={handleOpen} />
      <Navbar open={drawerOpen} onClose={handleClose} />
      <Container maxWidth="xl" sx={{ mt: 2, mb: 2, minHeight: '400px' }}>

      {children}
      </Container>
      <Footer />
    </>
  );
}

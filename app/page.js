"use client";

import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Grid } from "@mui/material";
import Head from "next/head";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static" sx={{ width: "100vw" }}> {/* Full-width blue bar */}
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <SignedOut>
              <Button color="inherit" href = "/sign-in">Login</Button>
              <Button color="inherit" href = "/sign-up">Sign Up</Button>
            </SignedOut>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            my: 4,
          }}
        >
          <Typography variant="h3" component="h1">
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="p" sx={{ my: 2 }}>
            The easiest way to make flashcards from your text
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: "left" }}>
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="space-between"> {/* Spread out the items */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Easy Text Input</Typography>
              <Typography>
                Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">Smart Flashcards</Typography>
              <Typography>
                Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">Accessible Anywhere</Typography>
              <Typography>
                Access your flashcards from any device, at any time. Study on the go with ease.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            my: 6,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" gutterBottom>Pricing</Typography>

          <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start"> {/* Align items to the top */}
            <Grid item xs={12} md={6}>
              <Box sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",  // Align text to the center
                width: "100%",  // Ensure it takes full available width
              }}>
                <Typography variant="h5">Basic</Typography>
                <Typography variant="h6" gutterBottom>$5 / month</Typography>
                <Typography>
                  Access to basic flashcard features and limited storage.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Choose Basic
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
                textAlign: "center",  // Align text to the center
                width: "100%",  // Ensure it takes full available width
              }}>
                <Typography variant="h5">Pro</Typography>
                <Typography variant="h6" gutterBottom>$10 / month</Typography>
                <Typography>
                  Unlimited flashcards and storage, with priority support.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Choose Pro
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Empty Grid item to ensure the Basic and Pro cards are aligned */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

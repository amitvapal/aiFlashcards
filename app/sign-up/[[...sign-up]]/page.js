import { SignUp } from "@clerk/nextjs"; // Corrected import for SignUp
import { AppBar, Container, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button color="inherit" component={Link} href="/sign-in">
            Login
          </Button>
          <Button color="inherit" component={Link} href="/sign-up">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <SignUp /> {/* This component should now render correctly */}
      </Box>
    </Container>
  );
}

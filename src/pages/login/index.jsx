import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { isLogged, login } from "../../utils/login";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "mauro.souza@facil.com" && password === "123456") {
            login("token", "CONSUMIDOR");
            window.location.href = "/consumidor";
        } else if (email === "joao.silva@facil.com" && password === "123456") {
            login("token", "PRODUTOR");
            window.location.href = "/produtor";
        }else{
            alert("Email ou senha incorretos!");
        }


    }
    console.log(isLogged())
  return (
    <>
      <Box sx={{ height: 36, backgroundColor: "primary.main" }}></Box>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh" - 36,
            mt: {xs: 24, md: 16},
            
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Bem-vindo ao
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Facilita Agro
          </Typography>
          <Box component="form" sx={{ mt: 1, width: "100%" }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="text"
              color="primary"
            >
              Nossa API
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

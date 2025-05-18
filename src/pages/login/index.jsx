import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { isLogged, login } from "../../utils/login";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo 3.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "consumidor@facil.com" && password === "") {
            login("token", "CONSUMIDOR");
            navigate("/consumidor");
        } else if (email === "produtor@facil.com" && password === "") {
            login("token", "PRODUTOR");
            navigate("/produtor");
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
            mt: {xs: 12, md: 0},
            
          }}
        >
          <img src={logo} alt="Logo Facilitagro" width={"180px"} />
          <Typography variant="h5" component="h1" gutterBottom>
            Bem-vindo ao
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom fontFamily={"sans-serif"}>
            FACILIT<span style={{ color: "#4CAF50" }}>AGRO</span>
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
              // required
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
              type="button"
              fullWidth
              variant="text"
              color="primary"
              href="https://back-end-facilita-agro.onrender.com/api/documentacao"
            >
              Nossa API
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

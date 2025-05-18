import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import ResponsiveAppBar from "../../components/side_bar";

export default function ProducerScreen() {
  // Fictitious data
  const salesTotal = "R$ 5.200,00";
  const orderCount = 32;
  const products = [
    { id: "PR001", name: "Tomate Orgânico", price: "R$ 6,00/kg" },
    { id: "PR002", name: "Alface Crespa", price: "R$ 2,50/un" },
    { id: "PR003", name: "Pepino", price: "R$ 4,20/kg" },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Typography variant="h4" color="primary" gutterBottom>
          Bem-vindo, Produtor!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Total de Vendas</Typography>
              <Typography variant="h5" color="secondary">
                {salesTotal}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="subtitle1">Total de Pedidos</Typography>
              <Typography variant="h5">{orderCount}</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Seus Produtos
          </Typography>
          <Grid container spacing={2}>
            {products.map((prod) => (
              <Grid item xs={12} sm={4} key={prod.id}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      {prod.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {prod.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

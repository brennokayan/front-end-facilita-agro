import React, { useState } from "react";
import {
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ResponsiveAppBar from "../../components/side_bar";

export default function ShopScreen() {
  const [filter, setFilter] = useState("COMPRA");
  const handleFilter = (_event, newFilter) => {
    if (newFilter) setFilter(newFilter);
  };

  // Dados fictícios de produtos
  const products = [
    { id: 'P001', name: 'Maçã Orgânica', price: 'R$ 4,50/kg', type: 'COMPRA' },
    { id: 'P002', name: 'Tomate', price: 'R$ 5,00/kg', type: 'COMPRA' },
    { id: 'P003', name: 'Pepino', price: 'R$ 3,80/kg', type: 'COMPRA' }
  ];

  const filtered = products.filter((p) => p.type === filter);

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Typography variant="h4" color="primary" gutterBottom>
          Loja
        </Typography>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilter}
          sx={{ mb: 3 }}
        >
        </ToggleButtonGroup>
        <Grid container spacing={2}>
          {filtered.map((prod) => (
            <Grid item xs={12} sm={4} key={prod.id}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {prod.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {prod.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

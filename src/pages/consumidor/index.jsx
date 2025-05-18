import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ResponsiveAppBar from "../../components/side_bar";

export default function ConsumerScreen() {
  // Fictitious data
  const favorites = [
    { id: "P001", name: "Maçã Orgânica", price: "R$ 4,50/kg" },
    { id: "P002", name: "Mamão Papaya", price: "R$ 3,20/un" },
    { id: "P003", name: "Cenoura Fresca", price: "R$ 2,80/kg" },
  ];

  const recentOrders = [
    { id: "O1001", date: "10/05/2025", total: "R$ 45,00", status: "ENTREGUE" },
    {
      id: "O1002",
      date: "08/05/2025",
      total: "R$ 30,50",
      status: "EM TRANSITO",
    },
    { id: "O1003", date: "05/05/2025", total: "R$ 12,75", status: "PENDENTE" },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Typography variant="h4" color="primary" gutterBottom>
          Olá, Consumidor!
        </Typography>
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            Seus Favoritos
          </Typography>
          <Grid container spacing={2}>
            {favorites.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Pedidos Recentes
          </Typography>
          <List>
            {recentOrders.map((order) => (
              <React.Fragment key={order.id}>
                <ListItem>
                  <ListItemText
                    primary={`Pedido ${order.id} - ${order.date}`}
                    secondary={`Total: ${order.total} - Status: ${order.status}`}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

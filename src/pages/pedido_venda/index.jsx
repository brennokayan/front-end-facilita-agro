import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Box,
} from "@mui/material";
import ResponsiveAppBar from "../../components/side_bar";
import { PlusSquareIcon } from "@phosphor-icons/react/dist/ssr";
import { PlusIcon } from "@phosphor-icons/react";

export default function SalesOrderScreen() {
  const orders = [
    {
      id: "SO3001",
      date: "11/05/2025",
      consumer: "Mauro Souza",
      status: "ENTREGUE",
    },
    {
      id: "SO3002",
      date: "08/05/2025",
      consumer: "Mauro Souza",
      status: "EM TRANSITO",
    },
    {
      id: "SO3003",
      date: "05/05/2025",
      consumer: "Mauro Souza",
      status: "PENDENTE",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Pedidos de Venda
          </Typography>
          <Button variant="contained">Novo Pedido <PlusIcon size={24} /></Button>
        </Box>
        <List>
          {orders.map((order, idx) => (
            <React.Fragment key={order.id}>
              <ListItem>
                <ListItemText
                  primary={`Pedido ${order.id} - ${order.date}`}
                  secondary={`Consumidor: ${order.consumer} - Status: ${order.status}`}
                />
              </ListItem>
              {idx < orders.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </>
  );
}

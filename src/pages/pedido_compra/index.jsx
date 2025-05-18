import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
} from "@mui/material";
import ResponsiveAppBar from "../../components/side_bar";
import { PlusIcon } from "@phosphor-icons/react";

export default function PurchaseOrderScreen() {
  // Fictitious purchase orders
  const orders = [
    {
      id: "PO2001",
      date: "12/05/2025",
      vendor: "João Silva",
      status: "ENTREGUE",
    },
    {
      id: "PO2002",
      date: "09/05/2025",
      vendor: "João Silva",
      status: "EM TRANSITO",
    },
    {
      id: "PO2003",
      date: "06/05/2025",
      vendor: "João Silva",
      status: "PENDENTE",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ py: 4 }} maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Pedidos de Compra
          </Typography>
          <Button variant="contained">Novo Pedido <PlusIcon size={24} /></Button>
        </Box>
        <List>
          {orders.map((order, index) => (
            <React.Fragment key={order.id}>
              <ListItem>
                <ListItemText
                  primary={`Pedido ${order.id} - ${order.date}`}
                  secondary={`Vendedor: ${order.vendor} - Status: ${order.status}`}
                />
              </ListItem>
              {index < orders.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </>
  );
}

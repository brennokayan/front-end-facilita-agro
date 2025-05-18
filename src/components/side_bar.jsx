import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { DoorIcon, DoorOpenIcon, ListIcon, X } from "@phosphor-icons/react";
import { getTypeUser, logout } from "../utils/login";

function ResponsiveAppBar() {
  function TradeTypeUserButtons() {
    return (
      <>
        {getTypeUser() === "CONSUMIDOR" ? (
          <>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button
                onClick={() => (window.location.href = `/consumidor`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Pág. Inicial
              </Button>
              <Button
                onClick={() => (window.location.href = `/pedido-compra`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Pedidos
              </Button>
              <Button
                onClick={() => (window.location.href = `/shop`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Loja
              </Button>
            </Box>
            <Button onClick={() => logout()}>
              <DoorOpenIcon color="white" size={24} />
            </Button>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Button
                onClick={() => (window.location.href = `/produtor`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Pág. Inicial
              </Button>
              <Button
                onClick={() => (window.location.href = `/pedido-venda`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Pedidos
              </Button>
            </Box>
            <Button onClick={() => logout()}>
              <DoorOpenIcon color="white" size={24} />
            </Button>
          </>
        )}
      </>
    );
  }
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <TradeTypeUserButtons />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <TradeTypeUserButtons />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

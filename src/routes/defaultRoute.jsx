import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/login";
import { PrivateRoutes } from "./privateRoutes";
import ShopScreen from "../pages/central_pedidos";
import PurchaseOrderScreen from "../pages/pedido_compra";
import SalesOrderScreen from "../pages/pedido_venda";
import ProducerScreen from "../pages/produtor";
import ConsumerScreen from "../pages/consumidor";
// import ResponsiveAppBar from "../components/side_bar";


export function DefaultRoutes() {
  const theme = createTheme({
    palette: {
      primary: { main: "#2e7d32" }, // Verde
      secondary: { main: "#ff9800" }, // Laranja
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          {/* <Route element={<ResponsiveAppBar />}> */}
            <Route element={<PrivateRoutes />}>
              <Route path="/produtor" element={<ProducerScreen />} />
              <Route path="/pedido-venda" element={<SalesOrderScreen />} />
              <Route path="/consumidor" element={<ConsumerScreen />} />
              <Route path="/pedido-compra" element={<PurchaseOrderScreen />} />
              <Route path="/shop" element={<ShopScreen />} />
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

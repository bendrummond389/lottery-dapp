import "./App.css";
import { MetamaskProvider } from "./contexts/metamask.provider";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./themes";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import OwnerPage from "./pages/OwnerPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MetamaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/owner" element={<OwnerPage />} />
        </Routes>
      </MetamaskProvider>
    </ThemeProvider>
  );
}

export default App;

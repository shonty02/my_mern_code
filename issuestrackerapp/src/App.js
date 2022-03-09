import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { UserProvider } from "./userContext";

function App() {
  const [darktheme, setDarktheme] = useState(false);

  const themeB = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#555555",
      },
    },
  });

  const themeA = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#00ffb3",
        dark: "#ccad00",
      },
    },
  });

  return (
    <div>
      <UserProvider>
        <ThemeProvider theme={darktheme ? themeB : themeA}>
          <BrowserRouter>
            <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header>
            {/* <Link to="/login">Login Now</Link>
        <Link to="/home">Go to Home</Link> */}

            <Routes>
              <Route element={<Login />} path="/login" />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
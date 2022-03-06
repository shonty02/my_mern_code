import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import EventHandling from "./components/eventhandling";
import Gallery from "./components/gallery";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import ListProducts from "./components/listproducts";
import Signup from "./components/signup";
import AddProduct from "./components/addproduct";
import ManageProduct from "./components/manageProducts";
import { UserProvider } from "./userContext";
import Chat from "./components/chat";

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
              <Route element={<Home></Home>} path="/home" />
              <Route element={<Login />} path="/login" />
              <Route element={<EventHandling />} path="/event" />
              <Route element={<Gallery />} path="/gallery" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<ListProducts />} path="/list" />
              <Route element={<AddProduct />} path="/addproduct" />
              <Route element={<ManageProduct />} path="/manage" />
              <Route element={<Chat />} path="/chat" />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
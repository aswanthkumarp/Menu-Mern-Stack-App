import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MenuBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["Home", "Menu", "Make a Reservation", "Contact Us"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src="https://via.placeholder.com/150" // Replace with your logo URL
          alt="Logo"
          style={{ width: "50px" }}
        />
        DEEP NET SOFT
      </Typography>
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    
      <AppBar
        component="nav"
        position="static"
        sx={{
          bgcolor: "#1f1f1f",
          boxShadow: "none",
          zIndex:9
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              fontWeight: "bold",
              color: "#FFFFFF",
              fontFamily: "Oswald",
            }}
          >
            <img
              src="/Logo.png"
              alt="Logo"
              style={{ width: "50px", marginRight: "10px" }}
            />
            DEEP NET SOFT
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link}
                sx={{
                  color: "#F5F5F5",
                  fontWeight: link === "Menu" ? 600 : 400,
                  textTransform: "capitalize",
                  fontFamily: "Oswald",
                  fontSize: "16px",
                  borderBottom: link === "Menu" ? "2px solid #007bff" : "none",
                }}
              >
                {link}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

 
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

   
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0.71) 0%, rgba(0, 0, 0, 0.5) 100%), url('/menubgcover.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
          height: { xs: "231px", md: "311px" },
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
    
        <Box
          sx={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <img
            src="/Logo.png"
            alt="Logo"
            style={{ width: "100px", marginBottom: "10px" }}
          />
        </Box>

        {/* Text Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: { lg: "64px", xs: "28px" },
            lineHeight: { lg: "90px", xs: "35px" },
            marginTop: "40px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Menu
        </Typography>
        <Typography
          sx={{
            maxWidth: "700px",
            margin: "10px auto",
            fontSize: { lg: "18px", xs: "14px" },
            fontFamily: "Kelly Slab",
            fontWeight: 400,
            textAlign: "center",
            color: "#BBBBBB",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </Typography>
      </Box>
    </>
  );
};

export default MenuBar;

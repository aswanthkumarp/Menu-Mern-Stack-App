import React, { useContext, useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { toast } from "react-toastify";
import { MenuContext } from "../context/MenuContext";

const MenuBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuData, setMenuData] = useState({
    menuName: "",
    menuDescription: "",
    items: [{ name: "", description: "", price: "" }],
  });
  const [loading, setLoading] = useState(false);
  const { triggerRefresh } = useContext(MenuContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setMenuData({
      menuName: "",
      menuDescription: "",
      items: [{ name: "", description: "", price: "" }],
    });
  };

  const handleInputChange = (e, index, field) => {
    const value = e.target.value;

    if (field === "menuName" || field === "menuDescription") {
      setMenuData({ ...menuData, [field]: value });
    } else if (field === "price") {
      if (/^\d*\.?\d*$/.test(value)) {
        const updatedItems = [...menuData.items];
        updatedItems[index][field] = value;
        setMenuData({ ...menuData, items: updatedItems });
      }
    } else {
      const updatedItems = [...menuData.items];
      updatedItems[index][field] = value;
      setMenuData({ ...menuData, items: updatedItems });
    }
  };

  const addNewItem = () => {
    setMenuData({
      ...menuData,
      items: [...menuData.items, { name: "", description: "", price: "" }],
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { menuName, menuDescription, items } = menuData;

      if (!menuName || !menuDescription || items.length === 0) {
        toast.error("Please fill all required fields.");
        setLoading(false);
        return;
      }

      const payload = {
        name: menuName,
        description: menuDescription,
        items: items.map((item) => ({
          name: item.name,
          description: item.description,
          price: Number(item.price),
        })),
      };

      await axios.post(
        "https://menu-mern-stack-app.onrender.com/api/menus",
        payload
      );
      triggerRefresh();
      toast.success("Menu created successfully!");
      handleDialogClose();
    } catch (error) {
      toast.error("Error creating menu. Please try again.");
      console.error("Error creating menu:", error);
    } finally {
      setLoading(false);
    }
  };

  const navLinks = ["Home", "Menu", "Make a Reservation", "Contact Us"];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#121618" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "Oswald", fontSize: "16px" }}
      >
        <img src="/Logo.png" alt="Logo" style={{ width: "50px" }} />
        DEEP NET SOFT
      </Typography>
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              sx={{
                color: "#F5F5F5",
                fontWeight: text === "Menu" ? 600 : 400,
                textTransform: "capitalize",
                fontFamily: "Oswald",
                fontSize: "16px",
                borderBottom: text === "Menu" ? "2px solid #007bff" : "none",
                cursor: "pointer",
              }}
            />
          </ListItem>
        ))}
        <ListItem button onClick={handleDialogOpen}>
          <ListItemText
            primary="Add New Menu"
            sx={{
              color: "#F5F5F5",
              fontWeight: 600,
              textTransform: "capitalize",
              fontFamily: "Oswald",
              fontSize: "16px",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" sx={{ bgcolor: "#1f1f1f" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#FFFFFF" }}
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
            <Button
              onClick={handleDialogOpen}
              sx={{
                color: "#F5F5F5",
                fontWeight: 400,
                textTransform: "capitalize",
                fontFamily: "Oswald",
                fontSize: "16px",
              }}
            >
              Add New Menu
            </Button>
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
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: "#121618",
            color: "#F5F5F5",
          },
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
        {/* <Box
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
        </Box> */}


        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: { lg: "64px", xs: "28px" },
            lineHeight: { lg: "90px", xs: "35px" },
            marginTop: "40px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            fontFamily: "Oswald",
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

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Menu</DialogTitle>
        <DialogContent>
          <TextField
            label="Menu Name"
            fullWidth
            margin="dense"
            value={menuData.menuName}
            onChange={(e) => handleInputChange(e, null, "menuName")}
          />
          <TextField
            label="Menu Description"
            fullWidth
            margin="dense"
            value={menuData.menuDescription}
            onChange={(e) => handleInputChange(e, null, "menuDescription")}
          />
          {menuData.items.map((item, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Menu Item {index + 1}</Typography>
              <TextField
                label="Item Name"
                fullWidth
                margin="dense"
                value={item.name}
                onChange={(e) => handleInputChange(e, index, "name")}
              />
              <TextField
                label="Item Description"
                fullWidth
                margin="dense"
                value={item.description}
                onChange={(e) => handleInputChange(e, index, "description")}
              />
              <TextField
                label="Item Price"
                fullWidth
                margin="dense"
                value={item.price}
                onChange={(e) => handleInputChange(e, index, "price")}
              />
            </Box>
          ))}
          <Button onClick={addNewItem} sx={{ mt: 2 }}>
            Add New Item
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary" disabled={loading}>
            {loading ? <CircularProgress size={20} /> : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MenuBar;

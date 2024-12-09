import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

const MenuBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuData, setMenuData] = useState({
    menuName: "",
    menuDescription: "",
    items: [{ name: "", description: "", price: "" }],
  });

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
    if (field === "menuName" || field === "menuDescription") {
      setMenuData({ ...menuData, [field]: e.target.value });
    } else {
      const updatedItems = [...menuData.items];
      updatedItems[index][field] = e.target.value;
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
    try {
      const { menuName, menuDescription, items } = menuData;

      // Create menu items
      const itemPromises = items.map(async (item) => {
        const response = await axios.post(
          "https://menu-mern-stack-app.onrender.com/api/menus/item",
          item
        );
        return response.data.id; // Assuming response returns the created item's `id`
      });

      const itemIds = await Promise.all(itemPromises);

      // Create the menu with item IDs
      const menuResponse = await axios.post(
        "https://menu-mern-stack-app.onrender.com/api/menus",
        {
          name: menuName,
          description: menuDescription,
          items: itemIds,
        }
      );

      console.log("Menu created:", menuResponse.data);

      handleDialogClose(); // Close dialog on success
    } catch (error) {
      console.error("Error creating menu:", error);
    }
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
              <Button key={link} sx={{ color: "#F5F5F5" }}>
                {link}
              </Button>
            ))}
            <Button onClick={handleDialogOpen} sx={{ color: "#F5F5F5" }}>
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
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      >
        {drawer}
      </Drawer>

      {/* Dialog for adding new menu */}
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
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MenuBar;

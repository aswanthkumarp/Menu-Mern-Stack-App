import React, { useState, useEffect, useContext } from "react";
import { ToggleButton, ToggleButtonGroup, Box, CircularProgress } from "@mui/material";
import MenuDisplay from "./MenuDisplay";
import axios from "axios";
import { MenuContext } from "../context/MenuContext";

const ToggleButtons = () => {
  const [selected, setSelected] = useState("");
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { refreshMenus } = useContext(MenuContext);

  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  const fetchMenus = async () => {
    try {
      setLoading(true);
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setMenus(response.data);
      setSelected(response.data[0]?._id || "");
    } catch (err) {
      setError(err.message || "Failed to fetch menus");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, [refreshMenus]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          padding: "1rem",
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/togglebuttonbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "100%",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <ToggleButtonGroup
            value={selected}
            exclusive
            onChange={handleChange}
            sx={{
              "& .MuiToggleButtonGroup-grouped": {
                border: "1px solid #fff",
                color: "#fff",
                "&.Mui-selected": {
                  backgroundColor: "#0796EF",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0796EF",
                  },
                },
                "&:not(:last-of-type)": {
                  marginRight: "0.5rem",
                },
                "&:hover": {
                  backgroundColor: "#444",
                },
                fontFamily: "Oswald",
              },
            }}
          >
            {menus.map((menu) => (
              <ToggleButton key={menu._id} value={menu._id}>
                {menu.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 200px)",
            color: "#fff",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : error ? (
        <Box sx={{ textAlign: "center", color: "red", marginTop: "1rem" }}>
          {error}
        </Box>
      ) : (
        <MenuDisplay menus={menus} selected={selected} />
      )}
    </>
  );
};

export default ToggleButtons;

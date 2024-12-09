import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import MenuDisplay from "./MenuDisplay";

const ToggleButtons = () => {
 
  const [selected, setSelected] = useState("Drinks");


  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
   <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        padding: "1rem",
      }}
    >
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
            },
            "&:not(:last-of-type)": {
              marginRight: "0.5rem",
            },
            "&:hover": {
              backgroundColor: "#444",
            },
            fontFamily:"Oswald"
          },
        }}
      >
        <ToggleButton value="Food">Food</ToggleButton>
        <ToggleButton value="Drinks">Drinks</ToggleButton>
        <ToggleButton value="Brunch">Brunch</ToggleButton>
      </ToggleButtonGroup>
    </Box>
    <MenuDisplay/>
   </>
  );
};

export default ToggleButtons;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const MenuDisplay = () => {

  
  return (
    <Box
      sx={{
        background: `url('/menudisplaybg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        minHeight: "536px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "inherit",
          padding: "2rem",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "800px",

          border: "1px solid white",
        }}
      >
        <Box
          component="img"
          src="/cocktail1.png"
          alt="Cocktail Image"
          sx={{
            position: "absolute",
            top: "-120px",
            left: "-60px",
            height: {
              xs: "90px",
              lg: "200px",
            },
            width: "auto",
            zIndex: 1,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        />

        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 600,
            marginBottom: "2rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontFamily: "Oswald",
            fontSize: {
              xs: "30px",
              lg: "50px",
            },
            boxShadow: "4px 3px 0px 0px #800020",
            color: "#FFFFFF",
          }}
        >
          Brunch Cocktails
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "0.5rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span>Cinnamon Toast Crunch</span>
                <span>$16</span>
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
                Screwball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "0.5rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span>Bar 42 Mary</span>
                <span>$14</span>
              </Typography>
              <Typography variant="body2">
                Tito’s, tomato juice, Worcestershire, celery salt, black pepper,
                Tabasco, fully loaded
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #fff",
                  paddingBottom: "0.5rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span>Moet Spritz</span>
                <span>$20</span>
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
                Aperol, St Germain, botanical liquor, fresh lime juice, mini
                brut Moet topper
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          component="img"
          src="/cocktail2.png"
          alt="Cocktail Image"
          sx={{
            position: "absolute",
            bottom: "-40px",
            right: "-40px",
            height: {
              xs: "111px",
              lg: "281px",
            },
            width: "auto",
            zIndex: 1,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default MenuDisplay;

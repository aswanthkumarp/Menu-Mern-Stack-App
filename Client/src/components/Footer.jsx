import React from "react";
import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem 1rem",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {/* Left Section */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              border: "1px solid #fff",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                marginBottom: "1rem",
                color: "#4daaff",
                fontFamily:'Oswald',
                fontSize:'16px'
              }}
            >
              CONNECT WITH US
            </Typography>
            <Typography sx={{fontFamily:'Oswald',color:'#645a5a',fontSize:'16px'}}>
              <PhoneIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
              +91 9567843340
            </Typography>
            <Typography sx={{fontFamily:'Oswald',color:'#645a5a',fontSize:'16px'}}>
              <EmailIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
              info@deepnetsoft.com
            </Typography>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              border: "1px solid #fff",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: "1rem" }}>
              <img
                src="/Logo.png"
                alt="Deep Net Soft Logo"
                style={{ height: "50px" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight:400,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "Oswald",
                marginBottom: "1rem",
              }}
            >
              DEEP <span style={{ color: "#4daaff" }}>NET</span> SOFT
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
              <IconButton
                sx={{ color: "#808080" }}
                component="a"
                href="#"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </IconButton>
              <IconButton
                sx={{ color: "#808080" }}
                component="a"
                href="#"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </IconButton>
              <IconButton
                sx={{ color: "#808080" }}
                component="a"
                href="#"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </IconButton>
              <IconButton
                sx={{ color: "#808080" }}
                component="a"
                href="#"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              border: "1px solid #fff",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#4daaff",
                fontFamily: "Oswald",
                fontSize: "16px",
                fontWeight:400
              }}
            >
              FIND US
            </Typography>
            <Typography sx={{fontFamily:'Oswald',color:'#645a5a',fontSize:'16px'}}>
              <LocationOnIcon fontSize="small" sx={{ marginRight: "0.5rem" }} />
              First Floor, Geo Infopark,
              <br />
              Infopark EXPY, Kakkanad
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          marginTop: "2rem",
          textAlign: "center",
          borderTop: "1px solid #333",
          paddingTop: "1rem",
          color: "#aaa",
        }}
      >
        <Typography variant="body2">
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </Typography>
        <Box sx={{ mt: "0.5rem", display: "flex", justifyContent: "center" }}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: "1rem" }}>
            Terms & Conditions
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: "1rem" }}>
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

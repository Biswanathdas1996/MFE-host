import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Toolbar } from "@mui/material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      fontWeight="600"
    >
      {"© "}
      {new Date().getFullYear()}
      {" - 2023"}
      {"  . All rights reserved. "}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F1F7FD",
        py: 6,
      }}
      style={{ marginTop: 30 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Link
            href="/"
            style={{ textDecoration: "none", marginRight: "30px" }}
          >
            MFE Online-shop
          </Link>

          <Copyright />
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Footer;

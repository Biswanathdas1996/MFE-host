import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const eventOnAbout = new CustomEvent("start", {
  detail: {
    platform: "GeeksforGeeks",
  },
});

const TopBar = ({ cartCount }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [cartitemsCount, setCartItemCount] = React.useState(0);

  useEffect(() => {
    const addedCartItems: any = JSON.parse(localStorage.getItem("cart"));
    addedCartItems && setCartItemCount(addedCartItems?.length);
    setCartItemCount(addedCartItems?.length);
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Online-Shop MFE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={1}>
                <Link to="/">
                  <Typography textAlign="center">Products</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Online-Shop MFE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </Link>
            {localStorage.getItem("userId") ? (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  key={2}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Account
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    key={2}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Register
                  </Button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    key={2}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Login
                  </Button>
                </Link>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={cartitemsCount} color="secondary">
              <Link to="/cart" style={{ color: "white" }}>
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </Link>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;

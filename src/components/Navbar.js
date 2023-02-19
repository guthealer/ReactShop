import * as React from "react";
import PropTypes from "prop-types";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom";
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import {Badge,Link} from "@mui/material";


const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        
          <ListItem>

          <NavLink to='/'>
          <Button color="success">Home</Button>
        
              </NavLink>
          </ListItem>
 <Divider></Divider>
            
          <ListItem>
          <NavLink to='Electronics' ><Button color="success">Electronics</Button>
              </NavLink>
          </ListItem>
          <Divider></Divider>
        
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", position: "sticky", top: "0px", zIndex: "99999" }}
    >
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "green" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MyStore
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <NavLink to="/">
              <Button sx={{ color: "white", mr: 4 }}>Home</Button>
            </NavLink>
            <NavLink to="Electronics">
              <Button sx={{ color: "white", mr: 4 }}>Electronics</Button>
            </NavLink>
          </Box>


          <NavLink to="SignUp">
            <Button sx={{ color: "white", mr: 4 }}>SignUp</Button>
          </NavLink>

          <NavLink to="SignIn">
            <Button sx={{ color: "white", mr: 4 }}>SignIn</Button>
          </NavLink>

          <Badge color="secondary" badgeContent={0} showZero>
            <Cart />
          </Badge>
        
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;

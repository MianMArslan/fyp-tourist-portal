import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  MobileIcon,
} from "./NavbarElement";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import img2 from "../images/img4.jpg";
import img1 from "../images/shortLogo.PNG";
import Search from "../searchbar/search";
import { GET } from "../../services/httpClient";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import Notification from "../Notification/index";
const styles = {
  NavbarAvater: {
    width: "130px",
    height: "70px",
    borderradius: "0%",
    cursor: "pointer",
  },
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  const [rows, setRows] = useState("");
  const [count, setCount] = useState(0);
  const [notification, setNotification] = React.useState(false);
  const [name, setName] = useState("");
  const getNotification = async () => {
    let data = await GET("/tourist/notification", {
      params: { isRead: false },
    });
    if (data) {
      setRows(data.rows);
      setCount(data.count);
    }
  };
  const getName = async () => {
    let data = await GET("/tourist/id");
    if (data) setName(`${data.firstName} ${data.lastName}`);
  };
  useEffect(() => {
    getNotification();
    getName();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "Black" }}>
        <Nav scrollNav={scrollNav}>
          <img
            src={img1}
            style={styles.NavbarAvater}
            alt="logo of the website"
          />
          <NavbarContainer>
            <Search />
            <NavLinks to="/"></NavLinks>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  HOME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  SERVICES
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="destination"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DESTINATION
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="deals"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  DEALS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  CONTACT
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                >
                  ABOUT
                </NavLinks>
              </NavItem>
              <IconButton
                color="inherit"
                onClick={() => setNotification(!notification)}
              >
                <Badge
                  badgeContent={count}
                  style={{ color: "black", backgroundColor: "fb9e00" }}
                  max={100}
                >
                  <NotificationsNoneIcon style={{ color: "fb9e00" }} />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Stack direction="row" spacing={2}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="Remy Sharp" src={img2} />
                  </StyledBadge>
                </Stack>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> {name}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PasswordIcon fontSize="small" />
                  </ListItemIcon>
                  Change Password
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {notification ? (
        <div
          style={{
            zIndex: 10,
            position: "fixed",
            top: "70px",
            right: "10px",
          }}
        >
          <Notification rows={rows} />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

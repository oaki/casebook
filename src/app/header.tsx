"use client";

import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import {styled, useTheme} from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image"; // Assuming Next.js for routing

const StyledAppBar = styled(AppBar)(({theme}) => ({
    backgroundColor: "rgba(255, 255, 255, 0.05)", // Semi-transparent white
    backdropFilter: "blur(10px)", // Frosted glass effect
    border: "1px solid rgba(138, 43, 226, 0.5)", // Semi-transparent purple border
    borderRadius: '20px',
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
    marginTop: theme.spacing(2), // Space from the top
    width: `calc(100% - ${theme.spacing(4)})`,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: `calc(${theme.breakpoints.values.lg}px - ${theme.spacing(4)})`,
}));

// Mock logo component (replace with your actual logo)
const Logo = () => (
    <Box sx={{display: "flex", alignItems: "center"}}>
        <Link href="/" style={{ display: "inline-block" }}>
            <Image
                src="/assets/nutricia-casebook-logo.svg"
                alt="NUTRICIA Casebook"
                width={185}
                height={65}
                priority
            />
        </Link>
    </Box>
);

const navItems = [
    {label: "Zoznam produktov", href: "/products"},
    {label: "Jazyk", dropdown: true},
    {label: "Odišiel", href: "/logout", icon: "/assets/icons/exit.svg"},
];

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = () => {
        setAnchorEl(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
            <Typography variant="h6" sx={{my: 2}}>
                <Logo/>
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{textAlign: "center"}}>
                            {item.dropdown ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                    onClick={handleLanguageMenu}
                                >
                                    <ListItemText primary={item.label}/>
                                    <KeyboardArrowDownIcon sx={{ml: 1}}/>
                                </Box>
                            ) : (
                                <Link href={item.href || "#"} passHref style={{textDecoration: "none", color: "inherit", width: "100%"}}>
                                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 1}}>
                                        {item.icon && (
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                        )}
                                        <ListItemText primary={item.label}/>
                                    </Box>
                                </Link>
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <StyledAppBar elevation={0} position="sticky">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Logo/>
                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    ) : (
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            {navItems.map((item) =>
                                item.dropdown ? (
                                    <Button
                                        key={item.label}
                                        color="inherit"
                                        endIcon={<KeyboardArrowDownIcon/>}
                                        sx={{textTransform: "none", mx: 1}}
                                        onClick={handleLanguageMenu}
                                    >
                                        {item.label}
                                    </Button>
                                ) : (
                                    <Button
                                        key={item.label}
                                        color="inherit"
                                        sx={{textTransform: "none", mx: 1, display: "flex", alignItems: "center", gap: 1}}
                                        component={Link}
                                        href={item.href || "#"}
                                        startIcon={item.icon ? (
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={16}
                                                height={16}
                                            />
                                        ) : undefined}
                                    >
                                        {item.label}
                                    </Button>
                                )
                            )}
                        </Box>
                    )}
                </Toolbar>
            </StyledAppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: "block", md: "none"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 240,
                            backgroundColor: theme.palette.background.default, // Match theme background
                            borderRight: "1px solid rgba(138, 43, 226, 0.5)",
                        },
                        zIndex: theme.zIndex.drawer + 2, // Higher than header's z-index
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleLanguageClose}>Slovenčina</MenuItem>
                <MenuItem onClick={handleLanguageClose}>Čeština</MenuItem>
                <MenuItem onClick={handleLanguageClose}>English</MenuItem>
            </Menu>
            {/* This Box creates space below the fixed header so content doesn't get hidden */}
            {/*<Box sx={{height: 80}}/> /!* Adjust height as needed *!/*/}
        </>
    );
};

export default Header;

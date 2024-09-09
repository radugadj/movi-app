import React from "react";
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {menuItem} from "../Header/Header.tsx";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const BurgerMenu = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const drawerBtn = () => {
        setOpenDrawer(!openDrawer)
    }
    const CustomNavLink = styled(NavLink)(({theme}) => ({
        textDecoration: 'none',

    }))
    return <>
            <Drawer  open={openDrawer} onClose={drawerBtn} anchor='left'>
                <List>
                    {menuItem.map((nav, index) => (
                        <CustomNavLink to={nav.link} key={index} >
                            <ListItemButton onClick={() => setOpenDrawer(false)}>
                                <ListItemIcon>
                                    <ListItemText >
                                        {nav.name}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </CustomNavLink>

                    ))}
                </List>
            </Drawer>
        <IconButton sx={{marginLeft: "auto", color: "whitesmoke"}} onClick={drawerBtn}>
            <MenuIcon />
        </IconButton>
        </>

}

export default BurgerMenu;
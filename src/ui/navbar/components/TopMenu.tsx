import { Toolbar, IconButton, Grid, Typography, AppBar } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import React, { SetStateAction } from 'react';
import { TopBarNavbar } from '../helpers/mixins';

interface TopMenuProps {
    setDrawerOpen: React.Dispatch<SetStateAction<boolean>>,
    drawerOpen: boolean;
}

export const TopMenu = ({ drawerOpen, setDrawerOpen }: TopMenuProps) => {
    return (
        <TopBarNavbar position='fixed' >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    edge="start"

                >
                    {
                        (drawerOpen)
                            ? <Close />
                            : <Menu />
                    }
                </IconButton>
                <Typography variant="h6" sx={{ mx: 3 }} noWrap component="div">
                    TenisApp
                </Typography>
            </Toolbar>
        </TopBarNavbar>

    )
}

import { List, Toolbar, Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { drawerWidth, menuItems } from '../navbar-data';
import { DrawerListItem } from './DrawerListItem';
import { SetStateAction } from 'react';
import { DrawerHeader, SideBarDrawer } from '../helpers/mixins';
import { Inbox, Mail } from '@mui/icons-material';

interface SideBarProps {
    drawerOptions: { drawerOpen: boolean; setDrawerOpen: React.Dispatch<SetStateAction<boolean>> };
}

export const SideBar = ({ drawerOptions }: SideBarProps) => {
    const { drawerOpen, setDrawerOpen } = drawerOptions;
    return (
        <SideBarDrawer variant="permanent" open={drawerOpen} sx={{overflow: 'hidden'}}>
            <DrawerHeader />
            <Divider />
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,

                }}>
                {
                    menuItems.map((item) => (
                        <DrawerListItem key={item.id.toString()} item={item} drawerOptions={drawerOptions} />
                    ))
                }

            </List>

        </SideBarDrawer>
    )
}

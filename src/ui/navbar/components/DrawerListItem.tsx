import { Accordion, AccordionDetails, AccordionSummary, Fade, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../../interfaces/MenuItemType";
import { SetStateAction } from 'react';
import { useAccordion } from "../../../app/hooks/useAccordion";
import { ArrowDropDown } from "@mui/icons-material";

interface DrawerListItemProps {
    drawerOptions: { drawerOpen: boolean; setDrawerOpen: React.Dispatch<SetStateAction<boolean>> };
    item: MenuItem;
};



export const DrawerListItem = ({ drawerOptions, item }: DrawerListItemProps) => {
    const {
        expanded,
        drawerOpen,
        setExpanded,
        handleChange,
    } = useAccordion(drawerOptions);


    return (

        <ListItem disablePadding sx={{ display: 'block' }}  >
            {
                item.subItems.length > 0
                    ? (
                        <Accordion
                            onChange={handleChange}
                            sx={{
                                boxShadow: 0,
                            }}
                            expanded={expanded === true}

                        >
                            <AccordionSummary
                                className="nav-link"
                                component={NavLink}
                                to={item.pathURL}
                                sx={{
                                    padding: '8px 20px'
                                }}
                            >

                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        mr: (drawerOpen) ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Tooltip title={item.name} placement="right">
                                        <Fade in={true} unmountOnExit >
                                            <Icon>{item.icon}</Icon>
                                        </Fade>
                                    </Tooltip>

                                </ListItemIcon>
                                <ListItemText
                                    sx={{
                                        width: 0,
                                        padding: 0,
                                        margin: 0,
                                        minWidth: 0,
                                        opacity: (drawerOpen) ? 1 : 0
                                    }}>
                                    {item.name}
                                </ListItemText>
                                <ArrowDropDown
                                        className={`arrow-down ${expanded === true && 'open'}`}
                                        sx={{
                                            opacity: (drawerOpen) ? 1 : 0,
                                            ...(drawerOpen)
                                                ? { display: 'flex' }
                                                : { display: 'none' }
                                        }}
                                    />

                            </AccordionSummary>
                            <AccordionDetails>
                                <List sx={{ padding: 0 }} >
                                    {
                                        item.subItems.map(({ id, name, pathURL }) => (
                                            <ListItem key={id.toString()} disablePadding >
                                                <ListItemButton
                                                    className="nav-link"
                                                    component={NavLink}
                                                    to={pathURL} >
                                                    - {name}

                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </AccordionDetails>

                        </Accordion>


                    )
                    : (
                        <ListItemButton
                            className="nav-link"
                            component={NavLink}
                            to={item.pathURL}
                            sx={{
                                minHeight: 48,
                                borderRadius: 1,
                                justifyContent: (drawerOpen) ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: (drawerOpen) ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Tooltip title={item.name} placement="right">
                                    <Fade in={true} unmountOnExit >
                                        <Icon>{item.icon}</Icon>
                                    </Fade>
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: (drawerOpen) ? 1 : 0 }} />

                        </ListItemButton>
                    )
            }
        </ListItem >
    )
}

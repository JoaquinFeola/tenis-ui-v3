import { ListItemButton, SxProps } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"

export const ListItemButtonLink = ({ path, sx, children }: { path: string, sx: SxProps, children: React.ReactNode }) => {
    return (
        <ListItemButton
            component={NavLink}
            to={path}
            sx={{
                padding: 0,
                margin: 0,
                display: 'block',
            }}>
            {children}
        </ListItemButton>
    )
}

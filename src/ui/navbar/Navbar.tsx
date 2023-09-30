import { Box, StyledEngineProvider } from "@mui/material"
import { HigherOrderComponent } from "../../interfaces/HigherOrderComponentType"
import { useState } from 'react';
import { TopMenu } from "./components/TopMenu";
import { SideBar } from "./components/SideBar";


export const Navbar = ({ children }: HigherOrderComponent) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <StyledEngineProvider injectFirst>
            <Box sx={{ display: 'flex' }}>
                <TopMenu
                    drawerOpen={drawerOpen}
                    setDrawerOpen={setDrawerOpen}
                />
                <SideBar drawerOptions={{ drawerOpen, setDrawerOpen }} />

                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
                    {children}
                </Box>
            </Box>
        </StyledEngineProvider>
    )
}

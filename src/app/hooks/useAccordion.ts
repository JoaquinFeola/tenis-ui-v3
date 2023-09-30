import { SetStateAction, useEffect, useState } from "react";

export const useAccordion = (drawerOptions: { drawerOpen: boolean; setDrawerOpen: React.Dispatch<SetStateAction<boolean>> }) => {
    const { drawerOpen, setDrawerOpen } = drawerOptions;
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => {
        setExpanded(!expanded);
        setDrawerOpen(true);
    };
    useEffect(() => {
        if (drawerOpen === false && expanded === true) {
            setExpanded(false);
            return;
        };
    }, [expanded, drawerOpen]);
    return {
        ...drawerOptions,
        expanded,
        setExpanded,
        handleChange,

    }
};
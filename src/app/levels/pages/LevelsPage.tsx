import { Button, Tooltip } from "@mui/material";
import { LevelsTable } from "../components/LevelsTable";

const LevelsPage = () => {
    return (
        <>
            <Tooltip title="Crear nivel" placement="right">
                <Button variant="contained" sx={{ textTransform: 'inherit' }}>
                    Crear nivel
                </Button>
            </Tooltip>
            <LevelsTable />
        </>
    )
};
export default LevelsPage;

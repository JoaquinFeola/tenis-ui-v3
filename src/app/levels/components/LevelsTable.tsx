import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useContext } from "react"
import { LevelsContext } from "../../../../context/levels";
import { useMuiPagination } from "../../../hooks/useMuiPagination";





export const LevelsTable = () => {
    const { levelsData } = useContext(LevelsContext);
    const { apiResponse } = levelsData;
    const {
        handleChangePage,
        handleChangeRowsPerPage,
        page,
        rowsPerPage
    } = useMuiPagination();

    return (
        <Grid container
            sx={{ maxWidth: '100%', display: 'block', mt: 3 }}
        >
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ minHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead >
                            <TableRow>
                                <TableCell>Hola</TableCell>
                                <TableCell>Hola</TableCell>
                                <TableCell>Hola</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                                <TableCell align="center">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody></TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    component="div"
                    count={apiResponse?.data?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Grid>
    )
}

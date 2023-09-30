import { ChangeEvent, useState } from "react";

export const useMuiPagination = () => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setRowsPerPage(parseInt(value));
    };

    const handleChangePage = (e: Event, newPage: number) => {
        setPage(newPage);
    };



    return {
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
    }
};
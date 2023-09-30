import { Backdrop, CircularProgress } from '@mui/material'

export const LoadingPage = () => {
    return (
        <Backdrop open={true} sx={{zIndex: 100000}} >
            <CircularProgress disableShrink sx={{color: 'primary.main', }} />
        </Backdrop>
    )
}

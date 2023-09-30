import { Route, Routes } from "react-router-dom"
import { TenisRoutes } from "../app/routes/TenisRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/*"
                element={<TenisRoutes />}
            />
            <Route
                path="/auth/*"
            />

        </Routes>
    )
}

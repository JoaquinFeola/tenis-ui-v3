import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/navbar/Navbar";
import { LoadingPage } from "../../ui/navbar/components/LoadingPage";

const LevelsPage = lazy(() =>
    import('../levels/pages/LevelsPage')
        .then((module) => module)
        .catch((error) => error)
);
const HomePage = lazy(() =>
    import('../pages/HomePage')
        .then((module) => module)
        .catch((error) => error)
);


export const TenisRoutes = () => {
    return (
        <Navbar>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<LoadingPage />} >
                            <HomePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/levels"
                    element={
                        <Suspense fallback={<LoadingPage />} >
                            <LevelsPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Navbar>
    )
}

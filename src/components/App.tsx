import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import MainPage from "../pages/MainPage.tsx";
import FavoritesPage from "../pages/FavoritesPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import OfferPage from "../pages/OfferPage.tsx";
import ProtectedRoute from "../pages/ProtectedRote.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

import { AppRoute, AuthorizationStatus } from '../const.ts';



type TAppProps = {
    offersCount: number;
}
export default function App({ offersCount }: TAppProps): JSX.Element {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={AppRoute.Root}
                        element={<MainPage offersCount={offersCount} />}
                    />
                    <Route
                        path={AppRoute.Favorites}
                        element={
                            <ProtectedRoute
                                restrictedFor={AuthorizationStatus.NoAuth}
                                redirectTo={AppRoute.Login}
                            >
                                <FavoritesPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={AppRoute.Login}
                        element={
                            <ProtectedRoute
                                restrictedFor={AuthorizationStatus.Auth}
                                redirectTo={AppRoute.Login}
                            >
                                <LoginPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path={`${AppRoute.Offer}/:offerId`}
                        element={<OfferPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

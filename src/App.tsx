import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app/styles/index.css";
import Layout from "./app/layouts/Layout";
import GuestRoute from "./app/routes/GuestRoute";
import PrivateRoute from "./app/routes/PrivateRoute";
import { AuthProvider } from "./app/context/AuthProvider";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("./pages/home/ui/HomePage"));
const LoginPage = React.lazy(() => import("./pages/login/ui/LoginPage"));
const NotFoundPage = React.lazy(
  () => import("./pages/not-found/ui/NotFoundPage")
);
const ProfilePage = React.lazy(() => import("./pages/profile/ui/ProfilePage"));

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="login"
                  element={
                    <GuestRoute>
                      <LoginPage />
                    </GuestRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

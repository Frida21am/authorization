import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app/styles/index.css";
import { AuthProvider } from "./app/context/AuthContext";
import Layout from "./app/layouts/Layout";
import GuestRoute from "./app/routes/GuestRoute";
import PrivateRoute from "./app/routes/PrivateRoute";
import HomePage from "./pages/home/ui/HomePage";
import LoginPage from "./pages/login/ui/LoginPage";
import NotFoundPage from "./pages/not-found/ui/NotFoundPage";
import ProfilePage from "./pages/profile/ui/ProfilePage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

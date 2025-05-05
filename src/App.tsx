import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <LoginPage
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="profile"
            element={<ProfilePage isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

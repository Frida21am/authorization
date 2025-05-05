import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

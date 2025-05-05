import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

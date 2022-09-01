import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentsPage from './pages/PaymentsPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentsPage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

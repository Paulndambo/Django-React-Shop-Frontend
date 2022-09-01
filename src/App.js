import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentsPage from './pages/PaymentsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

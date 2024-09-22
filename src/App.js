import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Medicineform from './Pages/Medicineform';
import Dasboard from './Pages/Dasboard'; 
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/Register" element={<ProtectedRoute element={<Medicineform/>} />} />
          <Route path="/Dashboard" element={<ProtectedRoute element={<Dasboard />} />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

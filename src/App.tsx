import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Auth/Login/Login';
import { useAuth } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = useAuth();

  return (
    <div className='bg-default'>
      <BrowserRouter>
        <Routes>
          <Route index element={auth.token ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          <Route path="login" element={auth.token ? <Navigate to="/home" /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Auth/Login/Login';
import { useAuth } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import DepartmentTable from './pages/Departments/DepartmentTable';
import RoleTable from './pages/Roles/RoleTable';
import UserTable from './pages/Users/UserTable';
import Profile from './pages/Profile/Profile';

function App() {
  const auth = useAuth();

  return (
    <div className='bg-default'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={auth.token ? <Layout /> : <Navigate to="/login" />} >
          <Route path="home" element={auth.token ? <Home /> : <Navigate to="/login" />} />
            <Route path="departments" element={auth.token ? <DepartmentTable /> : <Navigate to="/login" />} />
            <Route path="roles" element={auth.token ? <RoleTable /> : <Navigate to="/login" />} />
            <Route path="employees" element={auth.token ? <UserTable /> : <Navigate to="/login" />} />
            <Route path="personal-info" element={auth.token ? <Profile /> : <Navigate to="/login" />} />
          </Route>
          <Route path="login" element={auth.token ? <Navigate to="/" /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

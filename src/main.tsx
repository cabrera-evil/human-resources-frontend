import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios';
import { AuthProvider } from './context/AuthContext.tsx';
import { RoleProvider } from './context/RoleContext.tsx';

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:3000/api";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RoleProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RoleProvider>
  </AuthProvider>
)

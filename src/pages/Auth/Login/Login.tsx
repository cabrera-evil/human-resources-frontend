import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth.service';
import { useAuth } from '../../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import { ApiResponse } from '../../../models/ApiResponse.type';

interface LoginFormState {
  username: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
    remember: false,
  });
  const authService = new AuthService();
  const navigate = useNavigate();
  const { updateToken } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Login request
    authService.login({
      username: formData.username,
      password: formData.password,
    }).then((res: ApiResponse) => {
      updateToken(res.data.access_token, formData.remember);
      navigate('/home', { replace: true });
    })
      .catch(() => {
        toast.error('Usuario o contraseña incorrectos', {
          toastId: 'login-error',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      });
  };

  return (
    // Screen container
    <div className="flex items-center justify-center h-screen overflow-x-hidden">
      {/* Box container */}
      <div className='flex flex-row w-[1100px] h-[700px] bg-white shadow-xl rounded-xl'>
        {/* Form container */}
        <div className='flex flex-col justify-center w-full h-full p-8 rounded-l-xl'>
          {/* Header */}
          <img className='w-24 mx-auto' src="https://res.cloudinary.com/altf4/image/upload/v1697774584/ucademic-api/gallery/logo.png" alt="Logo" />
          <h1 className="pt-4 mb-4 text-3xl font-semibold text-center">Bienvenido</h1>
          <p className='mb-8 text-lg font-semibold text-center text-gray-500 font-rancho'>¡Ingresa con tu cuenta UCA!</p>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Login fields */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                className="w-full p-2 mt-1 border rounded-md focus:border-tertiary-500 focus:outline-none"
                placeholder='johndoe'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <PasswordInput onChange={handleChange} />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 mr-2 border-gray-300 rounded"
                onChange={handleChange}
              />
              <label htmlFor="remember" className="text-sm font-medium text-gray-700">
                Mantener la sesión iniciada
              </label>
            </div>
            <button className="w-full px-4 py-2 text-white rounded-md bg-primary-500 hover:bg-primary-hover">
              Iniciar sesión
            </button>
          </form>
        </div>
        {/* Img container */}
        <div className='hidden w-full h-full lg:block'>
          <img
            src="https://dummyimage.com/1080x1920"
            alt="Side Image"
            className="object-cover w-full h-full rounded-r-xl"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

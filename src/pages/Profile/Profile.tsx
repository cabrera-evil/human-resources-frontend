import React, { useEffect, useState } from 'react';
import AuthService from '../Auth/services/Auth.service';
import { useAuth } from '../../context/AuthContext';
import { PulseLoader } from 'react-spinners';

interface ProfileProps {
  name: string;
  email: string;
}

const Profile = () => {
  const [info, setInfo] = useState<ProfileProps>({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const authService = new AuthService();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      authService.profile(token).then((res) => {
        setInfo({
          name: res.data.name,
          email: res.data.email
        });
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <PulseLoader color="#72C4E6" />
      ) : (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src='/src/assets/logo.jpg' alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {info.name}
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              {info.email}
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#facebook"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

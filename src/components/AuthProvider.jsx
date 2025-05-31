import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import api from '@/api';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return authContext;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get('/api/me');
        setToken(response.data.accessToken);
      } catch {
        setToken(null);
      }
    };

    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization;
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

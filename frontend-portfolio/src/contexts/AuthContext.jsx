import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  // Fonction de connexion
  const login = (email, password) => {
    setLoginError(null);
    
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Identifiants incorrects');
      }
    })
    .then(result => {
      localStorage.setItem('token', result.token);
      setIsAuthenticated(true);
      setLoginError(null);
      navigate('/admin/projets');
    })
    .catch(error => {
      setLoginError(error.message || 'Erreur de connexion');
    });
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Fonction pour vérifier l'authentification
  const checkAuth = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setIsAuthenticated(false);
      setAuthLoading(false);
      return;
    }

    fetch('http://localhost:3000/api/auth/verify', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        logout();
      }
    })
    .catch(() => {
      logout();
    })
    .finally(() => {
      setAuthLoading(false);
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      authLoading, 
      login, 
      logout,
      loginError
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
import { useState, useEffect } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setAuthError('Veuillez vous connecter');
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
        setAuthError(null);
      } else {
        setAuthError('Session expirée');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      }
    })
    .catch(() => {
      setAuthError('Erreur de connexion');
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    })
    .finally(() => {
      setAuthLoading(false);
    });
  }, []);

  return { isAuthenticated, authLoading, authError };

};

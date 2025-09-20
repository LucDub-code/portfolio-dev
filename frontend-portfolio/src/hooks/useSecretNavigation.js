import { useEffect } from 'react';

export const useSecretNavigation = () => {
  useEffect(() => {
    const handleSecretNavigation = (e) => {

      // Combinaison de touches secrètes pour accéder à /login
      // Ctrl + Shift + L
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        window.location.href = '/login';
      }

      // Combinaison de touches secrètes pour accéder à /admin
      // Ctrl + Shift + A
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        window.location.href = '/admin';
      }

    };
    
    document.addEventListener('keydown', handleSecretNavigation);
    return () => document.removeEventListener('keydown', handleSecretNavigation);
  }, []);
};


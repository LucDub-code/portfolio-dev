import { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  // Page active par défaut (hello-world)
  const [activePage, setActivePage] = useState('hello-world');
  // État du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <NavigationContext.Provider value={{ 
      activePage, 
      setActivePage,
      isMobileMenuOpen,
      setIsMobileMenuOpen
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte facilement
export function useNavigation() {
  return useContext(NavigationContext);
}
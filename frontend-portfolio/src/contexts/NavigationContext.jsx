import { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {

  const [aboutActiveTab, setAboutActiveTab] = useState('bio');
  const [adminActiveTab, setAdminActiveTab] = useState('Projets');

  return (
    <NavigationContext.Provider value={{ aboutActiveTab, setAboutActiveTab, adminActiveTab, setAdminActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  return useContext(NavigationContext);
} 
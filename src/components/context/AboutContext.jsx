import { createContext, useState, useContext } from 'react';

const AboutContext = createContext();

export function AboutProvider({ children }) {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <AboutContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AboutContext.Provider>
  );
}

export function useAboutContext() {
  return useContext(AboutContext);
} 
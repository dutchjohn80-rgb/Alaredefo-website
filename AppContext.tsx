import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  language: 'en' | 'sw';
  toggleLanguage: () => void;
  // Unaweza kuongeza state au functions zingine za global hapa
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  // Weka lugha chaguo-msingi hapa, kwa mfano 'en' (English)
  const [language, setLanguage] = useState<'en' | 'sw'>('en'); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'sw' : 'en'));
  };

  const value = { language, toggleLanguage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
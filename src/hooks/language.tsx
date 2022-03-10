import { createContext, ReactNode, useContext, useState, useLayoutEffect } from 'react';

interface ChangeLanguageProviderProps {
    children: ReactNode
}

interface ChangeLanguageContextData {
    language: string | null;
    changeLanguage(language: string): void;
}

const ChangeLanguageContext = createContext({} as ChangeLanguageContextData);

function ChangeLanguageProvider({ children }: ChangeLanguageProviderProps) {
    const [language, setLanguage] = useState<string | null>('en-us');
    const changeLanguageStorageKey = 'languagePortfolio';
    const firstTime = localStorage.getItem(changeLanguageStorageKey);
    
    if(!firstTime) {
        localStorage.setItem('languagePortfolio', 'en-us');
    }
    
    function changeLanguage(selectedLanguage: string){
      setLanguage(selectedLanguage);
      localStorage.setItem(changeLanguageStorageKey, selectedLanguage);
    }

    function loadLanguageStorageData() {
        const languageStoraged = localStorage.getItem(changeLanguageStorageKey);
        setLanguage(languageStoraged);
    }

    useLayoutEffect(() => {
        loadLanguageStorageData();
    }, []);

    return (
        <ChangeLanguageContext.Provider value={{
            language,
            changeLanguage,
        }}>
          { children }
        </ChangeLanguageContext.Provider>
    )
}

function useChangeLanguage() {
    const context = useContext(ChangeLanguageContext);

    return context;
}

export { ChangeLanguageProvider, useChangeLanguage }
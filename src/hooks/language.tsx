import { createContext, ReactNode, useContext, useState, useLayoutEffect } from 'react';

interface ChangeLanguageProviderProps {
    children: ReactNode
}

interface ChangeLanguageContextData {
    isEnglish: boolean;
    changeLanguage(): Promise<void>;
}

const ChangeLanguageContext = createContext({} as ChangeLanguageContextData);

function ChangeLanguageProvider({ children }: ChangeLanguageProviderProps) {
    const [isEnglish, setIsEnglish] = useState<boolean>(true);
    const changeLanguageStorageKey = 'languagePortfolio';

    function changeLanguage(selectedLanguage){
        console.log("AAAAAAAAAAAAA");
      var lang = null;
      if(selectedLanguage === 'pt-br'){
        setIsEnglish(false);
        lang = false;
      }  
      else {
        lang = true;
        setIsEnglish(true);
      }
      
      
      localStorage.setItem(changeLanguageStorageKey, JSON.stringify(lang));
    }

    async function loadLanguageStorageData() {
        const languageStoraged = await localStorage.getItem(changeLanguageStorageKey);
        setIsEnglish((JSON.parse(languageStoraged)));
    }

    useLayoutEffect(() => {
        loadLanguageStorageData();
    }, []);

    return (
        <ChangeLanguageContext.Provider value={{
            isEnglish,
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
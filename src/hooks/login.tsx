import { createContext, ReactNode, useContext, useState, useLayoutEffect } from 'react';

interface ChangeScreenProviderProps {
    children: ReactNode
}

interface ChangeScreenContextData {
    showScreen: boolean;
    showDesktop: boolean;
    changeDesktop(): Promise<void>;
    changeScreen(): Promise<void>;
}

const ChangeScreenContext = createContext({} as ChangeScreenContextData);

function ChangeScreenProvider({ children }: ChangeScreenProviderProps) {
    const [showScreen, setShowScreen] = useState<boolean>(false);
    const changeScreenStorageKey = 'portfolio';
    const [showDesktop, setShowDesktop] = useState<boolean>(false);
    const changeDesktopStorageKey = 'Desktop';

    function changeScreen(){
      const screen = !showScreen;  
      setShowScreen(screen);
      console.log(screen);
      
      sessionStorage.setItem(changeScreenStorageKey, JSON.stringify(screen));
    }

    function changeDesktop(){
        const desktop = !showDesktop;  
        setShowDesktop(desktop);
        
        sessionStorage.setItem(changeDesktopStorageKey, JSON.stringify(desktop));
      }

    async function loadScreenStorageData() {
        const screenStoraged = await sessionStorage.getItem(changeScreenStorageKey);
        setShowScreen((JSON.parse(screenStoraged)));
    }

    async function loadDesktopStorageData() {
        const desktopStoraged = await sessionStorage.getItem(changeDesktopStorageKey);
        setShowScreen((JSON.parse(desktopStoraged)));
    }

    useLayoutEffect(() => {
        loadScreenStorageData();
        loadDesktopStorageData();
    }, []);

    return (
        <ChangeScreenContext.Provider value={{
            showScreen,
            showDesktop,
            changeDesktop,
            changeScreen,
        }}>
          { children }
        </ChangeScreenContext.Provider>
    )
}

function useChangeScreen() {
    const context = useContext(ChangeScreenContext);

    return context;
}

export { ChangeScreenProvider, useChangeScreen }
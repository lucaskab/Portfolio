import { Navigation } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import { ChangeLanguageProvider } from "./hooks/language";

export function App() {
  
  return (
    <ChangeLanguageProvider>
          <Navigation />
          <GlobalStyle />
    </ChangeLanguageProvider>
  );
}

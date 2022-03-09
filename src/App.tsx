import { ProfilePicture } from "./components/ProfilePicture";
import { GlobalStyle } from "./styles/global";
import { Container } from './styles';
import { ChangeScreenProvider } from "./hooks/login";
import { ChangeLanguageProvider } from "./hooks/language";


export function App() {

  return (
    <ChangeScreenProvider>
      <ChangeLanguageProvider>
        <Container>
          <ProfilePicture />
          <GlobalStyle />
        </Container>
      </ChangeLanguageProvider>
    </ChangeScreenProvider>
  );
}

import { ProfilePicture } from "./components/ProfilePicture";
import { GlobalStyle } from "./styles/global";
import { Container } from './styles';
import { ChangeScreenProvider } from "./hooks/login";


export function App() {

  return (
    <ChangeScreenProvider>
      <Container>
        <ProfilePicture />
        <GlobalStyle />
      </Container>
    </ChangeScreenProvider>
  );
}

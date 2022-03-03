import { Container, HackGif } from './styles';
import Hack from '../../assets/hacked.gif';

export function Hacked() {
    return(
        <Container>
            <HackGif src={Hack} alt='Hacked' />
        </Container>
    )
}
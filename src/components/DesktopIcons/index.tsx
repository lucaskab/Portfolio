import { Container, Icon, Name } from './styles';

interface Props {
    src: string;
    alt: string;
    name: string;
}

export function DesktopIcon({src, alt, name }: Props) {
    return (
        <Container onClick={() => {console.log("CHAMA")}}>
            <Icon src={src} alt={alt} />
            <Name>{name}</Name>
        </Container>
    )
}
import { Container, Icon, Name } from './styles';

interface Props {
    src: string;
    alt: string;
    name: string;
    nameColor: string;
    handleClick(): void;
}

export function DesktopIcon({src, alt, name, handleClick, nameColor }: Props) {
   
    return (
        <Container onClick={handleClick}>
            <Icon src={src} alt={alt} />
            <Name nameColor={nameColor}>{name}</Name>
        </Container>
    )
}
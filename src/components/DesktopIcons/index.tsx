import { Container, Icon, Name } from './styles';
import Draggable from 'react-draggable';
import { useCallback, useEffect } from 'react';

interface Props {
    src: string;
    alt: string;
    name: string;
    handleClick(): void;
}

export function DesktopIcon({src, alt, name, handleClick }: Props) {

    return (
        <Container onClick={handleClick}>
            <Icon src={src} alt={alt} />
            <Name>{name}</Name>
        </Container>
    )
}
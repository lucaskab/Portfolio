import { Container, Icon, IconText, Item } from "./styles";
import Star from '../../../../assets/star.png';
import Folder from '../../../../assets/folder.png';


export function QuickAccess() {
    return (
        <Container>
            <Item>
                <Icon src={Star} alt="Star" />
                <IconText>Quick Access</IconText>
            </Item>
            <Item>
                <Icon src={Folder} alt="Folder" />
                <IconText>Experiences</IconText>
            </Item>
            <Item>
                <Icon src={Folder} alt="Folder" />
                <IconText>Personal Projects</IconText>
            </Item>
        </Container>
    )
}
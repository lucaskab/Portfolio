import { Container, HeaderIcon, HeaderTitle, PhotoContainer, PhotoHeader, PhotoHeaderLeftContainer, PhotoHeaderRightContainer,
    ProjectTitle, DataContainer, PhotoOfApp, TextContainer, Description, Link, TextToGithub, BottomContainer, BottomTitle,
    IconsContainer, Icon, DateText} from './styles';
import Square from '../../assets/square.png';
import Close from '../../assets/close.png';
import { Projects } from './data';

interface PhotoProps {
    name: string;
    handleClick(): void;
}


export function Photo({name, handleClick}: PhotoProps) {
        const project = Projects.find(item => {
            return item.title === name;
        });

    return (
        <Container>
            <PhotoContainer>
                <PhotoHeader>
                    <PhotoHeaderLeftContainer>
                        <HeaderTitle>Fotos - {project?.title}</HeaderTitle>
                    </PhotoHeaderLeftContainer>
                    <PhotoHeaderRightContainer>
                        <HeaderIcon src={Square} alt='Maximize'/>
                        <HeaderIcon onClick={handleClick} src={Close} alt='Close'/>
                    </PhotoHeaderRightContainer>
                </PhotoHeader>
                <ProjectTitle>{project?.title}</ProjectTitle>
                    <DataContainer>
                        <PhotoOfApp src={project?.image} alt='Go Barber' />
                        <TextContainer>
                            {project?.description.map(item => {
                                return(<Description>{item}</Description>)
                            })}
                            <Link>Link</Link>
                            <TextToGithub href={project?.githubLink}>{project?.title} on Github</TextToGithub>
                            <BottomContainer>
                                <BottomTitle>Technologies:</BottomTitle>
                                <IconsContainer>
                                    {project?.tecnologiesIcons.map(item => {
                                        return (
                                        <Icon key={item} src={item} alt={project.title} />
                                    )})}
                                </IconsContainer>
                            </BottomContainer>
                            <BottomContainer>
                                <BottomTitle>Time period:</BottomTitle>
                                <DateText>{project?.datePeriod}</DateText>
                            </BottomContainer>
                        </TextContainer>
                    </DataContainer>    
            </PhotoContainer>    
        </Container>    
    )
}
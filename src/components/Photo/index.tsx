import { Container, HeaderIcon, HeaderTitle, PhotoContainer, PhotoHeader, PhotoHeaderLeftContainer, PhotoHeaderRightContainer,
    ProjectTitle, DataContainer, PhotoOfApp, TextContainer, Description, Link, TextToGithub, BottomContainer, BottomTitle,
    IconsContainer, Icon, DateText} from './styles';
import Square from '../../assets/square.png';
import Close from '../../assets/close.png';
import { Projects } from './data';
import { useChangeLanguage } from '../../hooks/language';

interface PhotoProps {
    name: string;
    handleClick(): void;
}


export function Photo({name, handleClick}: PhotoProps) {
        const { language } = useChangeLanguage();

        const project = Projects.find(item => {
            return item.title === name;
        });

    return (
        <Container>
            <PhotoContainer>
                <PhotoHeader>
                    <PhotoHeaderLeftContainer>
                        <HeaderTitle>{language === 'en-us' ? 'Picture' : 'Foto'} - {project?.title}</HeaderTitle>
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
                            {project?.description[language].map(item => {
                                return(<Description>{item}</Description>)
                            })}
                            <Link>Link</Link>
                            <TextToGithub href={project?.githubLink}>{project?.title} {language === 'en-us' ? 'on' : 'no'} Github</TextToGithub>
                            <BottomContainer>
                                <BottomTitle>{language === 'en-us' ? 'Technologies' : 'Tecnologias'}:</BottomTitle>
                                <IconsContainer>
                                    {project?.tecnologiesIcons.map(item => {
                                        return (
                                        <Icon key={item} src={item} alt={project.title} />
                                    )})}
                                </IconsContainer>
                            </BottomContainer>
                            <BottomContainer>
                                <BottomTitle>{language === 'en-us' ? 'Time period' : 'Período de tempo'}:</BottomTitle>
                                <DateText>{project?.datePeriod[language]}</DateText>
                            </BottomContainer>
                        </TextContainer>
                    </DataContainer>    
            </PhotoContainer>    
        </Container>    
    )
}
import { Container, ContentContainer, ExitContainer, FolderContainer, FolderContent, NameContainer, FolderName, Footer, Header, HeaderIcon, ItensQuantity, ItemsContainer } from "./styles";
import FolderIcon from '../../assets/folder.png';
import MaximizeIcon from '../../assets/square.png';
import MinimizeIcon from '../../assets/2-squares.png';
import ExitIcon from '../../assets/close.png';
import { DesktopIcon } from '../DesktopIcons';
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { QuickAccess } from "./components/QuickAccess";
import { Photo } from "../Photo";
import { Projects } from './data';

interface FolderProps {
    openFolder: () => void;
    folderName: string;
}

export function Folder({openFolder, folderName}: FolderProps) {
    const [isFolderMaximized, setIsFolderMaximized] = useState(false);
    const [isPhotoOpened, setIsPhotoOpened] = useState(false);
    const [photoData, setPhotoData] = useState('');
    const [project, setProject] = useState('');
    
    useEffect(() => {
        Object.keys(Projects).forEach((key, index) => {
            if (folderName === Object.keys(Projects)[index]) {
                setProject(Projects[key]);
            }
          });
    })

    function maximizeFolder() {
        setIsFolderMaximized(!isFolderMaximized);
    }

    function handleClick(name: string){
        setIsPhotoOpened(!isPhotoOpened)
        setPhotoData(name);
    }



    return(
        <>
            <Container>
                <FolderContainer isMaximized={isFolderMaximized}>
                    <Header>
                        <NameContainer>
                            <HeaderIcon src={FolderIcon} alt="Folder Icon"/>
                            <FolderName>| {folderName}</FolderName>
                        </NameContainer>    
                        <ExitContainer>
                            {isFolderMaximized ? <HeaderIcon onClick={maximizeFolder} src={MinimizeIcon} alt="Minimize Icon" /> 
                            : <HeaderIcon onClick={maximizeFolder} src={MaximizeIcon} alt="Maximize Icon" />}
                            <HeaderIcon src={ExitIcon} alt="Exit Icon" onClick={openFolder}/>
                        </ExitContainer>
                    </Header>
                    <SearchBar folderName={folderName}/>
                    <FolderContent>
                        <QuickAccess />
                        <ContentContainer>
                            {project ? 
                            <ItemsContainer>
                                {project.map(item => {
                                    return (
                                        <DesktopIcon nameColor="Black" handleClick={() => handleClick(item.title)} src={item.image} alt={item.title} name={item.title} />
                                    )
                                })}
                            </ItemsContainer> : null}
                        </ContentContainer>
                    </FolderContent>    
                    <Footer>
                        <ItensQuantity>3 itens</ItensQuantity>
                    </Footer>
                </FolderContainer>
            </Container>
            {isPhotoOpened ? <Photo handleClick={handleClick} name={photoData} /> : null}
        </>
    )
}
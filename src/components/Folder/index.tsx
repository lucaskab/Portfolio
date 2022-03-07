import { Container, ContentContainer, ExitContainer, FolderContainer, FolderContent, NameContainer, FolderName, Footer, Header, HeaderIcon, ItensQuantity, ItemsContainer } from "./styles";
import FolderIcon from '../../assets/folder.png';
import MaximizeIcon from '../../assets/square.png';
import MinimizeIcon from '../../assets/2-squares.png';
import ExitIcon from '../../assets/close.png';
import { DesktopIcon } from '../DesktopIcons';
import Ecoleta from '../../assets/eco.png';
import GoBarber from '../../assets/gobarber.png';
import Explore from '../../assets/explore.png';
import Github from '../../assets/github.png';
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { QuickAccess } from "./components/QuickAccess";

interface FolderProps {
    openFolder(): void;
    folderName: string;
}

export function Folder({openFolder, folderName}: FolderProps) {
    const [isFolderMaximized, setIsFolderMaximized] = useState(false);

    function maximizeFolder() {
        setIsFolderMaximized(!isFolderMaximized);
    }

    return(
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
                <SearchBar />
                <FolderContent>
                    <QuickAccess />
                    <ContentContainer>
                        <ItemsContainer>
                            <DesktopIcon nameColor="Black" handleClick={() => console.log("AEE")} src={Ecoleta} alt='Ecoleta' name='Ecoleta'/>
                            <DesktopIcon nameColor="Black" handleClick={() => console.log("AEE")} src={GoBarber} alt='GoBarber' name='GoBarber' />
                            <DesktopIcon nameColor="Black" handleClick={() => console.log("AEE")} src={Explore} alt='Github Explore' name='Github Explore' />
                        </ItemsContainer>
                    </ContentContainer>
                </FolderContent>    
                <Footer>
                    <ItensQuantity>3 itens</ItensQuantity>
                </Footer>
            </FolderContainer>
        </Container>
    )
}
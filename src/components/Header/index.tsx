import { Container, Content, ContentButton, ButtonText } from "./styles";

export function Header() {
    function ScrollToView(id: string){
        document.getElementById(id)?.scrollIntoView();
    }

    return (
        <Container>
            <Content>
                <ContentButton onClick={() => ScrollToView('About')}>
                    <ButtonText>About</ButtonText>
                </ContentButton>
                <ContentButton onClick={() => ScrollToView('Projects')}>
                    <ButtonText>Projects</ButtonText>
                </ContentButton>
                <ContentButton>
                    <ButtonText>Experience</ButtonText>
                </ContentButton>
                <ContentButton>
                    <ButtonText>Contact</ButtonText>
                </ContentButton>
            </Content>
        </Container>
    )
}
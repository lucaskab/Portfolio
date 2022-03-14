import { Container, TurnOnButtonDiv,  } from "./styles";
import {TurnOnButton} from '../../components/TurnOnButton';
import { useNavigate } from "react-router";

export function TurnOn() {
    const navigate = useNavigate();
    
    function handleButton() {
        navigate('/Loading');
    }

    return (
            <Container>
                <TurnOnButtonDiv  onClick={handleButton}>
                    <TurnOnButton />  
                </TurnOnButtonDiv> 
            </Container>
    )
}
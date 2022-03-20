import { Container, TurnOnButtonDiv, TurnOnImage  } from "./styles";
import { useNavigate } from "react-router";
import TurnOnButton from '../../assets/power-off.png';

export function TurnOn() {
    const navigate = useNavigate();
    
    function handleButton() {
        navigate('/Loading', {state: 'start'});
    }

    return (
            <Container>
                <TurnOnButtonDiv  onClick={handleButton}>
                    <TurnOnImage src={TurnOnButton} alt="Turn on Button" />  
                </TurnOnButtonDiv> 
            </Container>
    )
}
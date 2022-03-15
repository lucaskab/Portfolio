import { Icon, ResponseContainer, ResponseContentContainer, ResponseHeader, ResponseText, ResponseTitle } from "./styles";
import { useChangeLanguage } from '../../../hooks/language';

import { data } from './data';

interface AlertProps {
    status: 'success'| 'error';
}

export function ResponseAlert({status}: AlertProps) {
    const { language } = useChangeLanguage();
    
    return (
        <ResponseContainer>
            <ResponseHeader>
                <ResponseTitle>{data[language][status].title}</ResponseTitle>
            </ResponseHeader>
            <ResponseContentContainer>
                <ResponseText>{data[language][status].description}</ResponseText>
                <Icon src={data[language][status].icon} alt="Email sent"/>
            </ResponseContentContainer>
        </ResponseContainer>
    )
}
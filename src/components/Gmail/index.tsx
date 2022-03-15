import { Container, ErrorMessage, ExitContainer, FolderName, FormContainer, GmailContent, Header, HeaderIcon, Input, InputContainer, NameContainer, SendButton, TextArea } from './styles';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useChangeLanguage } from '../../hooks/language';
import React, { useState } from 'react';
import {ReactComponent as Exit} from '../../assets/close.svg';
import { ResponseAlert } from './components';
import { text } from './content';

export function Gmail({handleOpenGmail}) {
    const { language } = useChangeLanguage();
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [Error, setError] = useState('');

    const onSubmit=(e: React.SyntheticEvent)=>{
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e, process.env.REACT_APP_USER_ID)
        .then(function(response) {
            setError('success');
            setIsEmailSent(!isEmailSent);
            reset();
        
            setTimeout(() => {
                setIsEmailSent(state => !state);
            }, 2500)
        }, function(error) {
            setError('error');
            setIsEmailSent(!isEmailSent);
        
            setTimeout(() => {
                setIsEmailSent(state => !state);
            }, 2500)
        });
    }

    return(
        <Container>
            <GmailContent>
                <Header>
                    <NameContainer>
                        <FolderName>{text[language].title}</FolderName>
                    </NameContainer>    
                    <ExitContainer onClick={handleOpenGmail}>
                        <Exit fill="White" height='1rem' width='1rem'/>
                    </ExitContainer>
                </Header> 
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Input {...register("name", {required: 'This is required!'})} placeholder={text[language].namePlaceholder}></Input>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputContainer>

                <InputContainer>
                    <Input {...register("email", {required: 'This is required!'})} placeholder={text[language].emailPlaceholder}></Input>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </InputContainer>

                <InputContainer>
                    <Input {...register("subject", {required: 'This is required!'})} placeholder={text[language].subjectPlaceholder}></Input>
                    <ErrorMessage>{errors.subject?.message}</ErrorMessage>
                </InputContainer>

                <TextArea {...register("message", {required: 'This is required!'})} placeholder={text[language].messagePlaceholder}></TextArea>
                <ErrorMessage>{errors.message?.message}</ErrorMessage>
                <SendButton type="submit" value={text[language].sendButton} />
            </FormContainer>           
            </GmailContent>

            {isEmailSent ? <ResponseAlert status={Error} /> : null}
        </Container>
    )
}
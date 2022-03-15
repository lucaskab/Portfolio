import { Container, GmailContent } from './styles';
import emailjs from '@emailjs/browser';
import React from 'react';

export function Gmail() {

    const onSubmit=(e: React.SyntheticEvent)=>{
        e.preventDefault();
        var templateParams = {
            name: 'James',
            message: 'Check this out!',
            subject: 'Test1'
        };

        
        /*.then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });*/
    }

    return(
        <Container>
            <GmailContent>
            <form className='form' onSubmit = {onSubmit}>
                <p>Your Name:</p>
                <input name='name' type='text' placeholder='name…' className='form__input' />
                <p>Subject:</p>
                <input name='subject' type='text' placeholder='Subject…' className='form__input' />
                <p>Your Message:</p>
                <textarea name='message' type='text' placeholder='Your Message…' className='form__input-message' ></textarea>
                <button className='form__input — button'>Send Message</button>
            </form>
            </GmailContent>
        </Container>
    )
}
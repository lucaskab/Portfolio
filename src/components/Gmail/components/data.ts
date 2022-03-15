import Sent from '../../../assets/sent.png';
import NotSent from '../../../assets/email-error.png';

export const data = {
    'en-us': {
        'success': {
            title: 'Success',
            description: 'Your emails was sent',
            icon: Sent,
        },
        'error': {
            title: 'Failed',
            description: 'Something went wrong',
            icon: NotSent,
        }
        
    },
    'pt-br': {
        'success': {
            title: 'Sucesso',
            description: 'Seu email foi enviado',
            icon: Sent,
        },
        'error': {
            title: 'Failed',
            description: 'O envio do email falhou!',
            icon: NotSent,
        }
    },
}
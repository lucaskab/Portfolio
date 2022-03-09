import Ecoleta from '../../assets/eco.png';
import GoBarber from '../../assets/gobarber.png';
import GithubExplorer from '../../assets/explore.png';
import Enext from '../../assets/enext.png';
import Tribo from '../../assets/tribo.png';
import Pecege from '../../assets/pecege.png';

export interface DesktopItem {
    title: string | null; 
    image: HTMLImageElement | null; 
}

export interface DesktopItems extends Array<DesktopItem>{}

export const Projects = {
    'Personal Projects': [
        {
            title: 'GoBarber',
            image: GoBarber,
        },
        {
            title: 'Ecoleta',
            image: Ecoleta,
        },
        {
            title: 'Github Explorer',
            image: GithubExplorer,
        },
    ],
    'Experiences': [
        {
            title: 'Pecege',
            image: Pecege,
        },
        {
            title: 'Tribo',
            image: Tribo,
        },
        {
            title: 'Enext',
            image: Enext,
        },
    ],
}

import NodeJS from '../../assets/nodejs.png';
import Docker from '../../assets/docker.png';
import ReactJS from '../../assets/reactjs.png';
import ReactNative from '../../assets/reactnative.png';
import TypeScript from '../../assets/typescript.png';
import GoBarber from '../../assets/GoBarberPC.png';

interface EnumServiceItem {
    title: string; 
    image: HTMLImageElement; 
    description: [string];
    githubLink: string;
    tecnologiesIcons: [HTMLImageElement];
    datePeriod: string;
}

export interface EnumServiceItems extends Array<EnumServiceItem>{}

export const Projects = [
    {
        title: 'GoBarber',
        image: GoBarber,
        description: [
            'Go barber is a web and mobile application developed in ReactJS and React Native using Typescript for the front-end and NodeJS as backend, Docker, PostgreSQL using Type ORM, Mongo DB and Redis.',
            'In this project, project patterns were used, ESLint, Prettier, concept of services, repositories, SOLID, controllers, MVC, TDD, JEST.',
            "This project's objective is to have a hairdressing platform where, through the mobile application, users can make their appointments and through the web application, hairdressers can manage their schedule."
        ],
        githubLink: 'https://github.com/lucaskab/GoBarber',
        tecnologiesIcons: [ReactJS, ReactNative, TypeScript, NodeJS, Docker],
        datePeriod: 'Apr 2020 - Aug 2020',
    },
    {
        title: 'Ecoleta',
        image: GoBarber,
        description: [
            'Application for ecological purposes, serving as a connection between companies that collect garbage and people who need to dispose of it, for example lamps, electronic devices, batteries, organics, etc.',
            'Web and mobile application developed with TypeScript, ReactJS and React Native on the front-end, NodeJS on the back-end and SQLite as a database and KNEX.',
            'Map library, Multer, deep linking with WhatsApp and compose email were also used to be able to write an email without leaving the application.',
        ],
        githubLink: 'https://github.com/lucaskab/Ecoleta',
        tecnologiesIcons: [ReactJS, ReactNative, TypeScript, NodeJS],
        datePeriod: 'Jan 2020',
    },
    {
        title: 'Github Explorer',
        image: GoBarber,
        description: [
            'Application developed in ReactJS with the objective of using an external API (GitHub), with CRUD actions on GitHub repositories and showing some information about these repositories.',
        ],
        githubLink: 'https://github.com/lucaskab/Github-Explorer',
        tecnologiesIcons: [ReactJS, TypeScript],
        datePeriod: 'Jun 2019',
    },
]

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
        description: {
            "en-us": [
                'Go barber is a web and mobile application developed in ReactJS and React Native using Typescript for the front-end and NodeJS as backend, Docker, PostgreSQL using Type ORM, Mongo DB and Redis.',
            'In this project, project patterns were used, ESLint, Prettier, concept of services, repositories, SOLID, controllers, MVC, TDD, JEST.',
            "This project's objective is to have a hairdressing platform where, through the mobile application, users can make their appointments and through the web application, hairdressers can manage their schedule."
            ],
            "pt-br": [
                'Go barber é uma aplicação web e mobile desenvolvida em ReactJS e React Native usando Typescript para o front-end e NodeJS no backend, Docker, PostgreSQL, Type ORM, Mongo DB e Redis.',
                'Neste projeto, padrões de desenvolvimento de projeto foram usados, ESLint, Prettier, conceitos de serviços, repositórios, SOLID, controllers, MVC, TDD, JEST.',
                'O objetivo deste projeto é uma plataforma de cabeleireiros onde, pela aplicação mobile, pode realizar seu agendamento e pela aplicação web, os cabeleireiros podem ter seu dashboard sobre os clientes agendados.',
            ]
        },
        githubLink: 'https://github.com/lucaskab/GoBarber',
        tecnologiesIcons: [ReactJS, ReactNative, TypeScript, NodeJS, Docker],
        datePeriod: {
            "en-us": 'Apr 2020 - Aug 2020',
            "pt-br": 'Abr 2020 - Ago 2020'
        },
    },
    {
        title: 'Ecoleta',
        image: GoBarber,
        description: {
            "en-us": [
                'Application for ecological purposes, serving as a connection between companies that collect garbage and people who need to dispose of it, for example lamps, electronic devices, batteries, organics, etc.',
            'Web and mobile application developed with TypeScript, ReactJS and React Native on the front-end, NodeJS on the back-end and SQLite as a database and KNEX',
            "Map libraries, Multer, deep linking with WhatsApp and compose email were also used to be able to write an email without leaving the application."
            ],
            "pt-br": [
                'Aplicação com o intuito ecológico, servindo de conexão entre companhias que coletam lixo e pessoas que precisam despejá-lo, como por exemplo lâmpadas, dispositivos eletrônicos, baterias, orgânicos, etc.',
                'Aplicação Web e mobile desenvolvida com TypeScript, ReactJS e React Native no front-end, NodeJS no backend e SQLite como bando de dados e KNEX.',
                'Bibliotecas de mapa, Multer, deep linking com WhatsApp e compose email também foram utilizados para ser possível a escrita de email sem sair da aplicação.',
            ]
        },
        githubLink: 'https://github.com/lucaskab/Ecoleta',
        tecnologiesIcons: [ReactJS, ReactNative, TypeScript, NodeJS],
        datePeriod: {
            "en-us": 'Jan 2020',
            "pt-br": 'Jan 2020'
        },
    },
    {
        title: 'Github Explorer',
        image: GoBarber,
        description: {
            "en-us": [
                'Application developed in ReactJS with the objective of using an external API (GitHub), with CRUD actions on GitHub repositories and showing some information about these repositories.'
            ],
            "pt-br": [
                'Aplicação desenvolvida em ReactJS com o objetivo de usar uma API externa (GitHub), com funcionalidades CRUD nos repositórios e mostrar algumas informações sobre estes repositórios.'
            ]
        },
        githubLink: 'https://github.com/lucaskab/Github-Explorer',
        tecnologiesIcons: [ReactJS, TypeScript],
        datePeriod: {
            "en-us": 'Jun 2019',
            "pt-br": 'Jun 2019'
        },
    },
]

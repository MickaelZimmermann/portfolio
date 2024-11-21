import placesOnPlatter from './PoP/logoPoP.png';
import fame from './fame/fame.png';
import remocra from './remocra/remocra.png';
import restokyo from './restokyo/restokyo.png';

export interface Project {
    logo: string;
    name: string;
    resume: string;
    description: string;
    myWork: string;
    languages: string;
}

export const projects: Project[] = [
    { 
        logo: placesOnPlatter, 
        name: `Places on Platter (réalisé en formation en trois semaines)`, 
        resume: `Projet de mémorisation et d'accès à des marqueurs privés et publics de lieux.`,
        description: `Le but de ce projet est de créer un espace de référencement de lieux clef sur une carte. Si l'utilisateur recherche une idée d'occupation (restaurant, magasin, attraction, etc.), il a accès à toute une liste de marqueurs qu'il peut filtrer en fonction de ses envies. Ceux-ci sont de deux types : des marqueurs dits "publics" (proposés par les utilisateurs sur une carte coopérative) pour lui donner des idées, mais aussi des marqueurs dits "privés", qu'il aura ajoutés sur sa carte personnelle et que lui seul pourra consulter.`,
        myWork: `M'étant principalement occupé du backend sur le premier projet de formation, j'ai voulu relever le défi de me parfaire dans le frontend. Après avoir rédigé le cahier des charges et tout ce qui le concerne (diagrammes de cas d'usage, d'architecture, de séquence, MCD/ERD, etc.), je me suis alors penché sur le frontend, avec l'intégration des fonctionnalités d'inscription et de connexion (avec token JWT mis en cache), d'affichage des données utilisateur sur toute l'application, d'une partie de l'apparence (menu de navigation et menu dropdown), et la gestion des filtres par catégories avec dynamisation des marqueurs affichés en fonction des filtres sélectionnés et dynamisation du nombre de marqueurs concernés pour chaque filtre. Aussi, pour faire ceci correctement, je me suis aussi occupé de remodeler quelques aspects du backend en fonction.`,
        languages: 'Application dockerisée : Node.js Typescript (Prisma, Express) / React Typescript (Fetch, Leaflet)'
    },
    { 
        logo: remocra, 
        name: `REMOcRA V.3 (réalisé en situation d'entreprise)`, 
        resume: `Application métier d'aide aux pompiers pour la gestion des incendies.`,
        description: `Il s'agit d'un renouveau "from scratch" de l'application REMOcRA déjà existante. Le principe de ce projet reste inchangé : Aider les Services Départementaux d'Incendie et de Secours (SDIS) dans leurs interventions, ceci en leur mettant à disposition une interface permettant de référencer les divers points d'eau à leur disposition et leurs états (utilisables ou non) si un besoin se faisait ressentir. Par exemple, si un feu se déclare à un endroit, il leur est nécessaire d'agir au plus vite, donc de savoir quels points d'eau sont disponibles autour de l'incendie.`,
        myWork: ``,
        languages: 'Kotlin / React Typescript'
    },
    { 
        logo: fame, 
        name: `FAME (réalisé en situation d'entreprise)`, 
        resume: `Plateforme d'amélioration de l'expérience des familles des patients de réanimation.`, 
        description: `Lorsque l'un de nos proches se trouve en service de réanimation, l'inquiétude peut se montrer écrasante, d'autant plus si l'on présente des prédispositions à l'anxiété et/ou la dépression. C'est ainsi pour prévenir ces problèmes que le projet FAME est né : permettre aux proches d'obtenir le maximum d'informations concernant leurs proches, ceci en s'informant au maximum via des brochures et de la réalité virtuelle, mais aussi en discutant directement avec le médecin en charge du patient. Aussi, un accès est donné, pour le proche, à un questionnaire afin de connaître ses éventuels prédispositions à des complications psychologiques.`,
        myWork: `Suite au travail de l'équipe UX, il a fallu effectuer l'intégration des maquettes (tout le HTML et CSS). De plus, j'ai eu la tâche de réalisation d'une page en particulier, demandant la génération de données en back, avec leur récupération en front et leur affichage dans des tableaux. Celles-ci étaient modifiables via un formulaire en modal qui permettait un changement de données textuelles mais aussi de fichiers concerné par la ressource modifiée.`,
        languages: 'Kotlin / React Typescript'
    },
    { 
        logo: remocra, 
        name: `REMOcRA (réalisé en situation d'entreprise)`, 
        resume: `Application métier d'aide aux pompiers pour la gestion des incendies.`,
        description: `Le principe de ce projet est de venir en aide aux Services Départementaux d'Incendie et de Secours (SDIS) dans leurs interventions, ceci en leur mettant à disposition une interface permettant de référencer les divers points d'eau à leur disposition et leurs états (utilisables ou non) si un besoin se faisait ressentir. Par exemple, si un feu se déclare à un endroit, il leur est nécessaire d'agir au plus vite, donc de savoir quels points d'eau sont disponibles autour de l'incendie.`,
        myWork: `Je suis intervenu dans une équipe qui avait récupéré le projet. Mes tâches ont été d'interagir avec les clients pour maintenir une application la plus optimisée possible. J'ai, pour ce faire, dû corriger des problèmes, notamment en base de données (celles-ci n'étant pas toujours raccord avec les attendus), mais aussi des fichiers XML de courriers générés automatiquement, ou encore modifier l'apparence du site et ajouter des fonctionnalités. En outre, il a été question d'un contact client constant pour gérer des tickets afin de les satisfaire et leur permettre une exploitation optimale de l'application.`,
        languages: 'Java (Spring, Hibernate) / Vue.js et React' 
    },
    { 
        logo: restokyo, 
        name: `ResTokyo (réalisé en formation en trois semaines)`, 
        resume: 'Plateforme de référencement des restaurants/izakayas tokyoïtes avec un menu anglais et/ou français.',
        description: `Ce projet a pour vocation d'offrir à l'utilisateur (notamment les touristes) un référencement des restaurants et "izakayas" situés à Tokyo offrant un menu en anglais (voire français), ceci afin de leur permettre de ne pas subir la barrière de la langue pour se nourrir. Il s'agit d'un site participatif, coopératif, où chaque membre peut soumettre un établissement qui sera soumis à modération via un back-office, mais aussi laisser des évaluations (commentaires et notes) sur les fiches de chaque établissement.`,
        myWork: `Pour ce projet, je me suis majoritairement occupé de la partie backend en modèle MVC, notamment la création et gestion de la base de données (Models), menant à la création de l'API aux normes REST (Controllers), ainsi qu'à la manipulation de ces données sur une plateforme générée via Twig (Vue).`,
        languages: 'Symfony (Doctrine, Twig) / React (Axios, Redux)'
    },
    ];

export default projects;

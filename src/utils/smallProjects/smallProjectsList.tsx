export interface Project {
    src: string;
    name: string;
    resume: string;
}

export const technos: Project[] = [
    { 
        src: 'placesOnPlatter', 
        name: 'Places on Platter', 
        resume: 'Projet de mémorisation et d\'accès à des marqueurs privés et publics de lieux.' 
    },
    { 
        src: 'remocra', 
        name: 'REMOcRA V.3', 
        resume: 'Application métier d\'aide aux pompiers pour la gestion des incendies.' 
    },
    { 
        src: 'fame', 
        name: 'FAME', 
        resume: 'Plateforme d\'amélioration de l\'expérience des familles des patients de réanimation.' 
    },
    { 
        src: 'remocra', 
        name: 'REMOcRA', 
        resume: 'Application métier d\'aide aux pompiers pour la gestion des incendies.' 
    },
    { 
        src: 'restokyo', 
        name: 'ResTokyo', 
        resume: 'Plateforme de référencement des restaurants tokyoïtes avec un menu anglais et/ou français.' 
    },
    ];

export default technos;

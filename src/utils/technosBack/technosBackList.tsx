import kotlin from './kotlin.png';
import nodejs from './nodejs.png';
import symfony from './symfony.png';
import twig from './twig.png';
import typescript from './typescript.png';

export interface Techno {
    docLink: string;
    src: string;
    name: string;
}

export const technos: Techno[] = [
    { docLink: 'https://kotlinlang.org/docs/home.html', src: kotlin, name: 'Kotlin' },
    { docLink: 'https://nodejs.org/docs/latest/api/', src: nodejs, name: 'NodeJS' },
    { docLink: 'https://symfony.com/doc/current/index.html', src: symfony, name: 'Symfony' },
    { docLink: 'https://twig.symfony.com/doc/', src: twig, name: 'Twig' },
    { docLink: 'https://www.typescriptlang.org/docs/', src: typescript, name: 'Typescript' },
    ];

export default technos;

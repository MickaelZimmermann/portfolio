import react from './react.png';
import typescript from './typescript.png';
import vue from './vue.png';

export interface Techno {
    docLink: string;
    src: string;
    name: string;
}

export const technos: Techno[] = [
    { docLink: 'https://fr.react.dev/', src: react, name: 'React' },
    { docLink: 'https://www.typescriptlang.org/docs/', src: typescript, name: 'Typescript' },
    { docLink: 'https://vuejs.org/guide/introduction.html', src: vue, name: 'VueJS' },
    ];

export default technos;

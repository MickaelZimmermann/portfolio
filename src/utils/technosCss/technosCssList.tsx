import bootstrap from './bootstrap.png';
import htmlEtCss from './html_css.png';
import tailwind from './tailwind.png';

export interface Techno {
    docLink: string;
    src: string;
    name: string;
}

export const technos: Techno[] = [
    { docLink: 'https://developer.mozilla.org/fr/docs/Web/HTML', src: htmlEtCss, name: 'HTML et CSS' },
    { docLink: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/', src: bootstrap, name: 'Bootstrap' },
    { docLink: 'https://tailwindcss.com/', src: tailwind, name: 'Tailwind' },
    ];

export default technos;

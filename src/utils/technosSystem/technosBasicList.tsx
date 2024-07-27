import docker from './docker.png';
import git from './git.png';
import github from './github.png';
import jenkins from './jenkins.png';
import ubuntu from './ubuntu.png';

export interface Techno {
    docLink: string;
    src: string;
    name: string;
}

export const technos: Techno[] = [
    { docLink: 'https://docs.docker.com/', src: docker, name: 'Docker' },
    { docLink: 'https://git-scm.com/doc', src: git, name: 'Git' },
    { docLink: 'https://docs.github.com/fr', src: github, name: 'GitHub' },
    { docLink: 'https://www.jenkins.io/doc/', src: jenkins, name: 'Jenkins' },
    { docLink: 'https://doc.ubuntu-fr.org/', src: ubuntu, name: 'Ubuntu' },
    ];

export default technos;
